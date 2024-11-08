
import ShareButton from "@/components/share";
import { getBlogs, getBlogSlug } from "@/libs/blog";
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

    const option: Options = {
        renderNode: {
            [BLOCKS.OL_LIST]: (node, children) => (
                <ol className="list-decimal mx-6 md:mx-[3rem] space-x-2">{children}</ol>
            ),
            [BLOCKS.UL_LIST]: (node, children) => (
                <ul className="list-disc mx-6 md:mx-[3rem] space-y-2">{children}</ul>
            ),
            [BLOCKS.LIST_ITEM]: (node, children) => <li className="ml-4">{children}</li>,
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <p className="text-justify space-y-2 text-base md:text-lg">{children}</p>
            ),
            [BLOCKS.HEADING_1]: (node, children) => (
                <h1 className="text-2xl md:text-4xl font-bold my-4">{children}</h1>
            ),
            [BLOCKS.HEADING_2]: (node, children) => (
                <h2 className="text-xl md:text-3xl font-semibold my-4">{children}</h2>
            ),
            [BLOCKS.HEADING_3]: (node, children) => (
                <h3 className="text-lg md:text-2xl font-medium my-3">{children}</h3>
            ),
            [BLOCKS.QUOTE]: (node, children) => (
                <blockquote className="border-l-4 border-gray-400 pl-4 italic my-4 text-sm md:text-base">
                    {children}
                </blockquote>
            ),
        },
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-200 p-4 md:p-6">
            <div className="mt-16 md:mt-20 w-full max-w-screen-lg relative p-4">
                
               
                <div className="w-full mb-4 md:absolute md:top-4 md:left-4 max-w-max bg-slate-300 p-2 rounded-md">
                    <ShareButton slug={blog.fields.slug} />
                </div>

                <div className="w-full md:ml-16">
                 
                    <p className="text-base md:text-[20px] text-gray-700">{blog.fields.category}</p>
                    
                   
                    <img
                        src={blog.fields.thumbnail.fields.file.url}
                        alt="Thumbnail"
                        className="w-full h-[20rem] md:h-[40rem] object-cover p-2 shadow-lg mb-6"
                    />
                    
               
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{blog.fields.title}</h1>
                    
                  
                    <div className="flex flex-col md:flex-row md:justify-between text-gray-600 mb-6">
                        <Link href="https://id.wikipedia.org/wiki/Saddam_Hussein">
                            <p className="text-base md:text-lg font-semibold underline">
                                {blog.fields.author.fields.name}
                            </p>
                        </Link>
                        <p className="text-base md:text-lg font-semibold">{blog.fields.date}</p>
                    </div>
                    
                    {/* Blog Content */}
                    <div className="text-justify text-[16px] md:text-[20px]">
                        {documentToReactComponents(blog.fields.content, option)}
                    </div>
                </div>
            </div>
        </div>
    );
}
