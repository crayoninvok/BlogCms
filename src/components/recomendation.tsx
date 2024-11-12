import { IBlog } from "@/types/blog";
import Link from "next/link";

export default function RecomendationBlog({blogs} : {blogs:IBlog[]}){
    return(
        <div>
            {blogs.map((item,idx) => {
                return(
                    <div key={idx} className="w-[60vw] md:w-[12rem] rounded-full mx-auto p-3">
                    <img src={item.fields.thumbnail.fields.file.url} alt={item.fields.author.fields.name} />
                   <Link href={`/blog/${item.fields.slug}`} key={`/blog/${item.fields.slug}`} className="hover:underline mt-3">{item.fields.title}</Link>
                  </div>
                ) 
            })}
        </div>
    )
}