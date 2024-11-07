"use client"

import { FaFacebook, FaGitAlt, FaMailBulk, FaSteam } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="flex flex-col items-center bg-white py-4 border-t-2 border-black w-full ">
            <div className='text-sm md:text-base lg:text-lg text-center mb-2'>
                Dzaky Athariq blog web Property on FrontEnd Projects.
            </div>
            <div className="flex justify-center items-center gap-5 md:gap-10 mb-2">
                <a href="https://github.com/crayoninvok">
                    <FaGitAlt />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61562493073873&locale=id_ID">
                    <FaFacebook />
                </a>
                <a href="mailto:dathariqf@gmail.com">
                    <FaMailBulk />
                </a>
                <a href="https://steamcommunity.com/profiles/76561198272808740/">
                    <FaSteam />
                </a>
            </div>
            <div className="text-xs md:text-sm lg:text-base w-full bg-white text-center py-2">
                @2024 Copyright: Dzaky Athariq Blog Projects
            </div>
        </footer>
    );
}

