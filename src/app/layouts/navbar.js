"use client";
import Image from "next/image";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
    const { scrollY } = useScroll()
    const [actualY, setActualY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setActualY(latest);
    });
    return (
        <nav className={`sticky z-50 top-0 border-[0.5px] h-[106px] justify-between ${actualY == 0 ? "bg-white": "bg-[#0090FF]"} px-[72px] flex items-center ${actualY == 0 ? "text-[#828282]" : "text-[#F2F2F2]"}  text-[16px]`}>
            <div className="h-11 flex items-center">
                <Image className="w-[43.34px] h-[44px] mr-3" width={100} height={100} alt="Logo" src={`${actualY == 0 ? "/assets/blue.png": "/assets/white.png"}`}/>
                <div className={`text-xl font-semibold inline ${actualY == 0 ? "text-[#111B26]" : "text-[#F2F2F2]"}`}>Berita&nbsp;Kini</div>
            </div>
            <div>
                <ul className="flex pe-[28px] justify-end gap-x-[32px] w-[1137.66px]">
                    <li className={`font-semibold ${actualY == 0 ? "text-[#0090FF]" : "text-[#F2F2F2]"} `}><a>Beranda</a></li>
                    <li><a>Terbaru</a></li>
                    <li><a>Hiburan</a></li>
                    <li><a>Gaya Hidup</a></li>
                    <li><a>Olahraga</a></li>
                    <li><a>Nasional</a></li>
                    <li><a>Internasional</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;