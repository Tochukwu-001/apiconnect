"use client"
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { Theme } from "./Theme";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useId, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

interface NavItem {
    name: string;
    url: string;
}

export default function Navbar (){

    const {data:session} = useSession()

    const [navOpen, setNavOpen] = useState(false)
    
    const navItems : NavItem[] =[
        {
            name: "Home",
            url: "/",
        },

        {
            name:"About us",
            url: "/about"
        },
        {
            name:"Post API",
            url: "/post"
        },
        {
            name:"View Endpoint",
            url: "/view"
        },

    ]

    const id = useId();
    const buttonId = `${id}-button`;
    const menuId = `${id}-menu`;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  

    return(
        <main className="flex items-center justify-between shadow-md max-md:px-3 md:px-10 py-2.5 bg-white z-50 sticky top-0">
            <Link href={"/"} className="flex items-center gap-0.5 z-50">
                <Image
                    src={"/logo.png"}
                    alt="API Connect logo"
                    width={500}
                    height={500}
                    className="w-8 h-8"
                />
                <p className="text-lg font-light max-md:hidden">Connect</p>
            </Link>

            <div className="flex items-center gap-6 ">
                {/* desktop nav */}
                <div className="flex items-center gap-6 max-lg:hidden">
                    {navItems.map((item, index)=>(
                        <div key={index} className="group">
                        <Link href={item.url}>{item.name}</Link>
                        <div style={{backgroundColor:Theme.darkGreen}} className="h-0.5  opacity-0 group-hover:opacity-100"></div>
                    </div>
                    ))}
                </div>

                {
                    session?  <div>
                    <button
                      id={buttonId}
                      aria-controls={open ? menuId : undefined}
                      aria-haspopup="true"
                      aria-expanded={open}
                      onClick={handleClick}
                    >
                            <Avatar alt={session?.user?.name || "User"} src={session?.user?.name || ""} />

                    </button>
                    <Menu
                      id={menuId}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      slotProps={{
                        list: {
                          'aria-labelledby': buttonId,
                        },
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        <Link href={"/profile"}>My Profile</Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>
                      <button onClick={() => signOut()}>Sign Out</button>
                      </MenuItem>
                    </Menu>
                  </div> : (
                        <Link style={{backgroundColor:Theme.darkGreen}} href={"/signin"} className="flex gap-1 text-white px-4 py-1.5 rounded-sm items-center group z-50 max-md:hidden">
                        Get Started
                        <GoArrowUpRight className="group-hover:translate-x-0.5 transition-all duration-200" />
                     </Link>
                    )
                }
               

                {/* mobile and tablet nav */}

                <div className={`h-dvh bg-white absolute w-full left-0 top-0 pt-20  items-center flex-col gap-10 lg-hidden ${navOpen ? "flex" : "hidden"}`}>
                    {
                        navItems.map((item, index)=>(
                            <div key={index} className="group">
                            <Link onClick={()=> setNavOpen(false)} href={item.url}>{item.name}</Link>
                            <div style={{backgroundColor:Theme.darkGreen}} className="h-0.5  opacity-0 group-hover:opacity-100"></div>
                        </div> 
                        ))
                    }

                    {
                        !session && (
                            <Link style={{backgroundColor:Theme.darkGreen}} href={"/signin"} className="flex gap-1 text-white px-4 py-1.5 rounded-sm items-center group md:hidden">
                            Get Started
                            <GoArrowUpRight className="group-hover:translate-x-0.5 transition-all duration-200" />
                             </Link>  
                        )
                    }
                
                </div>

                <button onClick={()=> setNavOpen(!navOpen)} className="text-2xl lg:hidden z-50">
                    {
                        navOpen ? <CgClose/> : <GiHamburgerMenu />
                    }
                </button>

            </div>

        
        </main>
    )
}
