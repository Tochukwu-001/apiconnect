import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { LuTrash2 } from "react-icons/lu";
import { Theme } from "@/components/Theme";
export default function View () {
    return (
        <main className="min-h-dvh max-md:p-3 p-6">
            <h1>Discover, Test, and Integrate Production-ready APIs Instantly</h1>

            <section className="grid grid-cols-3 gap-5">
                <div className="shadow-md rounded-sm p-3 space-y-3">
                   <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2">
                            <img 
                                src="/logo.png" 
                                alt="Samuel Chukwuma" 
                                className="w-8 h-8 rounded-full"
                                />
                            <h1 className="text-lg">Samuel Chukwuma</h1>
                        </div>

                        <div className="bg-red-300 p-3 rounded-full">
                            <button className="p-1 text-red-600"><LuTrash2 /></button>
                        </div>
                   </div>

                   <div>
                        <h1 className="text-center font-semibold text-xl">Dummy Products</h1>
                        <article>
                            <p className="text-sm text-stone-500">Documentation</p>
                            <p className="line-clamp-3">
                                Instant placeholder data for E-commerce layout, store inventories, and cart testing mechanics.
                                perfect for learners. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ab corporis quasi, 
                                molestiae perspiciatis quibusdam totam ad possimus blanditiis excepturi repudiandae laudantium est tempore facere 
                                numquam necessitatibus animi ipsam dicta. Exercitationem beatae recusandae dolor, eius nam labore velit, vitae enim est 
                                fugit culpa deleniti. Corporis rerum quis quo nostrum voluptas!
                            </p>
                        </article>
                        <div className="flex items-center justify-between mt-6">
                            <p className="text-stone-500 text-sm">2/7/2026</p>
                            <Link href={"#"} style={{backgroundColor: Theme.darkGreen}} className="text-white flex items-center text-sm gap-1 rounded-sm px-4 py-1 text-sm">View Docs<GoArrowUpRight/> </Link>
                        </div>
                   </div>
       
                </div>
            </section>
        </main>
    )
}