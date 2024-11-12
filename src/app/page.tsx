import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Link from "next/link";  

export default async function Home() {
  const data: IBlog[] = await getBlogs();

  return (
    <div className="pt-[5rem] hero min-h-screen p-4 md:p-10 bg-slate-200">
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-2 mt-[1rem]">
        {data.map((item, idx) => {
          return (
            <div
              key={idx} data-cy="blog-item"
              className="blog-post flex flex-col items-center mt-10 bg-white shadow-lg rounded-lg p-4 w-full sm:w-[300px] md:w-[400px] h-auto md:h-[37rem] 
               hover:bg-gray-800 hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 gap-3"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={item.fields.thumbnail.fields.file.url}
                  alt={item.fields.title}
                  className="rounded-md object-cover w-full sm:w-[200px] h-[150px]"
                />
              </div>

              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold">{item.fields.title}</h3>
              </div>

                <div className="flex flex-col items-center text-center w-full sm:w-[200px] bg-slate-300 rounded-xl p-4 mt-2">
                  <div className="avatar mt-2">
                    <div className="w-[4rem] md:w-[5rem] rounded-full">
                      <img src={item.fields.author.fields.avatar.fields.file.url} alt={item.fields.author.fields.name} />
                    </div>
                  </div>
                  <h1 className="text-red-500 font-extrabold text-sm md:text-[20px]">
                    {item.fields.author.fields.name}
                  </h1>
                  <h1 className="font-semibold text-xs md:text-sm">{item.fields.author.fields.email}</h1>
                </div>
            

              <div className="w-full text-start mt-2">
                <h1 className="text-xs md:text-base">Publish Date: {item.fields.date}</h1>
              </div>

              <Link href={`/blog/${item.fields.slug}`} key={`/blog/${item.fields.slug}`}>
                <div className="w-full btn glass text-center bg-red-400 text-white text-sm md:text-base">
                  Read More . . .
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
