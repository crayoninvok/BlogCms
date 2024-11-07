import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Link from "next/link";  

export default async function Home() {
  const data: IBlog[] = await getBlogs();

  return (
    <div className="pt-[5rem] hero min-h-screen p-10 bg-slate-200">
      <div className="flex flex-wrap justify-center gap-10 px-4">
        {data.map((item, idx) => {
          return (
           
            
              <div key={idx} className="flex flex-col items-center mt-10 bg-white shadow-lg rounded-lg p-4 w-[400px] h-[37rem]
               hover:bg-gray-800 hover:text-white hover:shadow-2xl hover:scale-110 transition-all duration-300 gap-3">
              
                <div className="flex justify-center mb-4">
                  <img
                    src={item.fields.thumbnail.fields.file.url}
                    alt={item.fields.title}
                
                   className="rounded-md object-cover w-[200px] h-[150px]"
                  />
                </div>
              

                <div className="text-center">
                  <h3 className="text-xl font-semibold  rounded-xl ">{item.fields.title}</h3>
                </div>
                
                <Link href="https://id.wikipedia.org/wiki/Saddam_Hussein">
                <div className="justify-center text-center w-[200px] bg-slate-300 rounded-xl">
                  <div className="avatar mt-2">
                    <div className="w-[5rem] rounded-full">
                     <img src={item.fields.author.fields.avatar.fields.file.url} />
                    </div>
                  </div>
                  <h1 className="text-red-500 font-extrabold text-[20px]">{item.fields.author.fields.name}</h1>
                  <h1 className="font-semibold">{item.fields.author.fields.email}</h1>
                </div>
                </Link>

                <div className="w-full text-start mt-2">
                  <h1> Publish Date : {item.fields.date}</h1>
                </div>
                <Link key={`/blog/${item.fields.slug}`} href={`/blog/${item.fields.slug}`} >
                <div className="w-full btn glass text-end bg-red-400">Read More . . .</div>
                </Link>
              </div>
          );
        })}
      </div>
    </div>
  );
}

