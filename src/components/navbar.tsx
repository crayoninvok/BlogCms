import Image from 'next/image'
import Link from 'next/link'

export default function Navbar(){
    return(
        <div className="flex fixed justify-between h-[5rem] w-full items-center bg-gray-400  backdrop-blur-sm z-10">
            <Link href={"/"}><Image src="/Jagjagi.png" 
            alt='Logo1'
            width={100}
            height={40} className='ml-10'/></Link>
            <Image src="/blogs.png" alt='sss' width={300} height={100} />
            <div className="flex gap-5 mr-10">
                <Link href={'/about'} className='btn glass'>About</Link>
                <Link href={'/contact'} className='btn glass'>Contact</Link>
            </div>
        </div>
    )
}