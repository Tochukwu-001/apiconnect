"use client"
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { Theme } from "./Theme";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

interface NavItem {
    name: string;
    url: string;
}

export default function Navbar (){
    const [navOpen,setNavOpen] = useState(false)

    const navItems: NavItem[]=[
        {
            name: "Home",
            url: "/",
        },
        {
            name: "About Us",
            url: "/about",
        },
        {
            name: "Post API",
            url: "/post",
        },
        {
            name: "View Endpoints",
            url: "/view",
        },
    ]
    return(
        <main className="flex items-center justify-between shadow-md max-md:px-3 md:px-10 py-2.5 sticky top-0 z-50 bg-white">
            <Link href={"/"} className="flex items-center gap-0.5 z-50">
                <Image
                    src={"/logo.png"}
                    alt="API Connnect logo"
                    width={500}
                    height={500}
                    className="w-8 h-8"
                />
                <p className="text-lg font-light max-md:hidden">Connect</p>
            </Link>
            {/* desktop nav */}
            <div className="flex items-center gap-6">
            <div className="flex items-center gap-6 max-lg:hidden"> 
                {
                    navItems.map((item, index)=>(
                 <div key={index} className="group">
                    <Link href={item.url}>{item.name}</Link>
                     <div style={{backgroundColor:Theme.darkGreen}} className="h-0.5 opacity-0 group-hover:opacity-100"></div> 
                </div>

                    ))
                }


            </div>
             <Link style={{backgroundColor: Theme.darkGreen}} href={"/signin"} className="flex gap-1 text-white rounded-sm px-4 py-1.5 group max-md:hidden z-50">
                Get Started
                <GoArrowUpRight className="group-hover:translate-x-0.5 transition-all duration-200"/>
             </Link>
             {/* mobile and tablet nav */}
             <div className={`h-dvh bg-white absolute w-full top-0 left-0 pt-20 items-center flex-col gap-10 lg:hidden ${navOpen? "flex": "hidden"}`}>
                {
                    navItems.map((item,index)=>(
                    <div key={index} className="group">
                    <Link onClick={()=>setNavOpen(false)} href={item.url}>{item.name}</Link>
                     <div style={{backgroundColor:Theme.darkGreen}} className="h-0.5 opacity-0 group-hover:opacity-100"></div> 
                </div>
                    ))
                }
                <Link 
                onClick={()=> setNavOpen(false)}
                style={{backgroundColor: Theme.darkGreen}} 
                href={"/signin"} 
                className="flex gap-1 text-white rounded-sm px-4 py-1.5 group md:hidden">
                Get Started
                <GoArrowUpRight className="group-hover:translate-x-0.5 transition-all duration-200"/>
             </Link>
             </div>

             <button onClick={()=>setNavOpen(!navOpen)} className="text-2xl lg:hidden z-50">
                {
                    navOpen ? <IoClose /> :   <HiOutlineMenuAlt4 />
                }
             </button>
            </div>
        </main>
    )
}