import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { Theme } from "./Theme";

export default function Navbar () {
    return (
        <main className="flex items-center justify-between shadow-md max-md:px-3 md:px-10 py-2.5">
            <Link href={"/"} className="flex items-center gap-0.5">
                <Image
                    src={"/logo.png"}
                    alt="API Connect logo"
                    width={500}
                    height={500}
                    className="w-8 h-8"
                />
                <p className="text-lg font-light">Connect</p>
            </Link>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-6">
                    <div className="">
                        <Link href={"#"}>Home</Link>
                        <span style={{backgroundColor:Theme.darkGreen}} className="h-0.5"></span>
                    </div>
                    <Link href={"#"}>About Us</Link>
                    <Link href={"#"}>Post API</Link>
                    <Link href={"#"}>View Endpoints</Link>
                </div>

                <Link style={{backgroundColor: Theme.darkGreen}} href={"/signin"} className="flex gap-1 text-white px-4 py-1.5 rounded-sm items-center group">
                    Get Started
                    <GoArrowUpRight className="group-hover:translate-x-0.5 transition-all duration-200" />
                </Link>
            </div>
        </main>
    )
}