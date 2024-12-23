import RecomendationBlog from "@/components/recomendation";
import ShareButton from "@/components/share";
import { getBlogRecom, getBlogs, getBlogSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Link from "next/link";

export const generateStaticParams = async () => {
    const blogs: IBlog[] = await getBlogs();

    return blogs.map((item) => ({
        slug: item.fields.slug,
    }));
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const blogs: IBlog = await getBlogSlug(params.slug);

    return {
        title: blogs.fields.title,
        description: blogs.fields.title,
        authors: blogs.fields.author.fields.name,
        openGraph: {
            images: [`https:${blogs.fields.thumbnail.fields.file.url}`],
        },
    };
}

export default async function BlogDetail({ params }: { params: { slug: string } }) {
    const blog: IBlog = await getBlogSlug(params.slug);
    const blogNe: IBlog[] = await getBlogRecom(params.slug);

    const option: Options = {
        renderNode: {
            [BLOCKS.OL_LIST]: (node, children) => (
                <ol className="list-decimal mx-4 md:mx-6 lg:mx-[3rem] space-y-2">{children}</ol>
            ),
            [BLOCKS.UL_LIST]: (node, children) => (
                <ul className="list-disc mx-4 md:mx-6 lg:mx-[3rem] space-y-2">{children}</ul>
            ),
            [BLOCKS.LIST_ITEM]: (node, children) => <li className="ml-4">{children}</li>,
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <p className="text-justify space-y-2 text-sm md:text-base lg:text-lg">{children}</p>
            ),
            [BLOCKS.HEADING_1]: (node, children) => (
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold my-3 md:my-4">{children}</h1>
            ),
            [BLOCKS.HEADING_2]: (node, children) => (
                <h2 className="text-lg md:text-xl lg:text-3xl font-semibold my-3 md:my-4">{children}</h2>
            ),
            [BLOCKS.HEADING_3]: (node, children) => (
                <h3 className="text-md md:text-lg lg:text-2xl font-medium my-2 md:my-3">{children}</h3>
            ),
            [BLOCKS.QUOTE]: (node, children) => (
                <blockquote className="border-l-4 border-gray-400 pl-4 italic my-3 md:my-4 text-sm md:text-base">
                    {children}
                </blockquote>
            ),
        },
    };

    return (
        <div className="min-h-screen bg-gray-200 p-4 md:p-6 lg:p-10">
            <div className="flex flex-col md:flex-row md:max-w-[1200px] lg:max-w-[1600px] mx-auto gap-8 md:gap-12 mt-[5rem]">
                <div className="w-full md:w-3/4 p-4 bg-white shadow-lg rounded-lg">
                    <p className="text-xs md:text-sm text-gray-600 mb-2">{blog.fields.category}</p>
                    
                    <img
                        src={blog.fields.thumbnail.fields.file.url}
                        alt="Thumbnail"
                        className="w-full h-auto md:h-[25rem] lg:h-[30rem] object-cover rounded-md mb-6"
                    />
                    
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 mb-4">{blog.fields.title}</h1>
                    
                    <div className="flex flex-col md:flex-row md:justify-between text-gray-600 mb-4">
                        <Link href="https://id.wikipedia.org/wiki/Saddam_Hussein">
                            <p className="text-sm md:text-base font-semibold underline">
                                {blog.fields.author.fields.name}
                            </p>
                        </Link>
                        <p className="text-xs md:text-sm">{blog.fields.date}</p>
                    </div>

                    <div className="text-justify text-sm md:text-base lg:text-lg leading-relaxed">
                        {documentToReactComponents(blog.fields.content, option)}
                    </div>
                </div>
                
                <aside className="w-full md:w-1/4 mt-8 md:mt-0 md:ml-8 text-center">
                    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                        <h2 className="text-base md:text-lg font-bold mb-3">Share this article</h2>
                        <ShareButton slug={blog.fields.slug} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <h2 className="text-base md:text-lg font-bold mb-3">Recommended Blogs</h2>
                        <RecomendationBlog blogs={blogNe} />
                    </div>
                </aside>
            </div>
        </div>
    );
}
