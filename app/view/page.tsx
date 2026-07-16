"use client"
import { FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { Theme } from "@/components/Theme";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useEffect, useState } from "react";

interface ApiDoc {
    id: string;
    title: string;
    endpoint: string;
    doc: string;
    developer?: string;
    image?: string;
    uid?: string;
    timestamp?: any; // Fixed typo to match your database query
}

export default function View() {
    const [apis, setApis] = useState<ApiDoc[]>([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchApis() {
            try {
                const q = query(collection(db, "apis"), orderBy("timestamp", "desc"));
                const snapshot = await getDocs(q)
                const results: ApiDoc[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<ApiDoc, "id">),
                }))
                setApis(results)
            } catch (error) {
                console.error("error fetching apis", error);
            } finally {
                setLoading(false)
            }
        }
        fetchApis()
    }, []);

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
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Fixed Conditional Logic */}
                {Loading ? (
                    <p className="text-gray-500 animate-pulse col-span-full">Loading APIs.....</p>
                ) : apis.length === 0 ? (
                    <p className="text-gray-500 col-span-full">No APIs Published yet. Be the first to Publish one.</p>
                ) : (
                    apis.map((api) => (
                        <div 
                            key={api.id} 
                            className="bg-white/[0.02] border border-white/5 rounded-md p-5 flex flex-col justify-between space-y-5 hover:border-white/10 transition-all duration-300 shadow-xl backdrop-blur-sm group"
                        >
                            {/* Top Tier: Avatar & Delete */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img 
                                        src={api.image || "/logo.png"} // Fixed typo .pgn to .png
                                        alt={api.developer || "Publisher"} 
                                        className="w-8 h-8 rounded-full bg-neutral-800 object-cover border border-neutral-700"
                                    />
                                    <div>
                                        <h2 className="text-sm font-medium text-white leading-tight">
                                            {api.developer || "Unknown Developer"}
                                        </h2>
                                        <p className="text-[10px] text-neutral-400 font-light uppercase tracking-wider">
                                            Publisher
                                        </p>
                                    </div>
                                </div>
                                <button className="p-2 text-neutral-400 hover:text-red-400 hover:bg-red-500/10 rounded-sm transition-all duration-300">
                                    <FaRegTrashAlt className="text-sm" />
                                </button>
                            </div>
                            
                            {/* Middle Tier: Content */}
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg text-neutral-100 group-hover:text-white transition-colors line-clamp-1">
                                    {api.title}
                                </h3>
                                <div className="space-y-1.5">
                                    <span className="text-[10px] uppercase font-semibold tracking-wider block" style={{ color: Theme.lightGreen }}>
                                        Documentation
                                    </span>
                                    <p className="text-sm font-light text-neutral-400 line-clamp-3 leading-relaxed">
                                        {api.docs}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Bottom Tier: Date & Button */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <p className="text-xs text-neutral-500 font-mono">
                                    {/* Safely convert Firestore timestamp to a readable date */}
                                    {api.timestamp?.toDate?.().toLocaleDateString() || "Unknown"}
                                </p>
                                <Link
                                    href={api.endpoint || "#"}
                                    style={{ backgroundColor: Theme.darkGreen }}
                                    className="text-white flex items-center gap-1.5 rounded-sm px-4 py-1.5 text-xs font-medium hover:opacity-90 transition-all duration-200 group/btn"
                                >
                                    View doc
                                    <GoArrowUpRight className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </section>
        </main>
    );
}