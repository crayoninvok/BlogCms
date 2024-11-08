import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="flex fixed justify-between h-[5rem] w-full items-center bg-gray-400 backdrop-blur-sm z-10 p-4 md:p-0">

            <Link href={"/"}>
                <Image
                    src="/Jagjagi.png"
                    alt="Logo1"
                    width={80}
                    height={30}
                    className="ml-4 md:ml-10"
                />
            </Link>

            <div className="hidden md:block">
                <Image src="/blogs.png" alt="Center Image" width={300} height={100} />
            </div>


            <div className="flex gap-3 md:gap-5 mr-4 md:mr-10 text-sm md:text-base">
                <Link href={'/about'} className="btn glass">About</Link>
                <Link href={'/contact'} className="btn glass">Contact</Link>
            </div>
        </div>
    );
}
