import { FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { Theme } from "@/components/Theme";

export default function View() {
    return (
        <main className="min-h-dvh bg-[#0B0F17] text-white max-md:p-4 p-8">
            
            {/* Header Section */}
            <header className="mb-12 max-w-4xl space-y-2">
                <span className="text-xs font-mono tracking-widest uppercase" style={{ color: Theme.lightGreen }}>
                    // CENTRAL_REGISTRY
                </span>
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
                    Discover, Test, and Integrate Production-Ready APIs Instantly
                </h1>
                <p className="text-gray-400 font-light text-sm md:text-base">
                    Browse through community-submitted endpoints or securely manage your active data pipelines.
                </p>
            </header>

            {/* Grid Section */}
            <section className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* API Card 1 */}
                <div className="bg-white/[0.02] border border-white/10 rounded-lg p-5 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl group">
                    <div className="space-y-4">
                        {/* Card Top: Author & Action */}
                        <div className="flex items-center justify-between">  
                            <div className="flex items-center gap-2.5">
                                <img 
                                    src="/logo.png" 
                                    alt="Samuel Chukwuma" 
                                    className="w-8 h-8 rounded-full border border-white/10"
                                />
                                <h2 className="text-sm font-medium text-gray-300">Samuel Chukwuma</h2>
                            </div>
                            <button className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-md transition duration-200">
                                <FaRegTrashAlt size={14} />
                            </button>
                        </div>

                        {/* Card Middle: Info */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-lg text-white group-hover:text-emerald-400 transition duration-200">
                                Dummy Products API
                            </h3>
                            <article className="space-y-1">
                                <p className="text-[11px] font-mono tracking-wider uppercase text-gray-500">
                                    Documentation
                                </p>
                                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 font-light">
                                    Instant placeholder data for E-Commerce layouts, store inventories, and cart testing. Fast response layout mimicking live production database items perfectly.
                                </p>
                            </article>
                        </div>
                    </div>

                    {/* Card Bottom: Metadata & Button */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                        <p className="text-xs font-mono text-gray-500">2/7/2026</p>
                        <Link 
                            style={{ backgroundColor: Theme.darkGreen }} 
                            className="flex text-xs font-medium rounded-sm px-3.5 py-1.5 items-center gap-1 text-white hover:opacity-90 transition duration-200" 
                            href="#"
                        >
                            View Docs <GoArrowUpRight className="text-sm" />
                        </Link>
                    </div>
                </div>

            </section>
        </main>
    );
}