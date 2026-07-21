"use client"
import { useEffect, useState } from "react"
import { signOut } from "next-auth/react"
import type { Session } from "next-auth"
import { db, storage } from "@/config/firebase"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { GoArrowUpRight } from "react-icons/go"
import { FiEdit3, FiLogOut, FiGlobe, FiCamera, FiX } from "react-icons/fi"
import { Theme } from "@/components/Theme"
import { collection, doc, getDoc, getDocs, orderBy, query, updateDoc, where } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

interface userProfile {
    name?: string;
    email?: string;
    image?: string;
    bio?: string;
    links?: { github?: string; website?: string }
}

interface ApiDoc {
    id: string;
    title: string;
    endpoint: string;
    doc: string;
    timestamp?: any;
}

export default function Profileclient({ session }: { session: Session }) {
    const uid = session?.user?.id
    const [profile, setProfile] = useState<userProfile | null>(null)
    const [editing, setEditing] = useState(false)
    const [formData, setFormData] = useState({ name: "", bio: "", github: "", website: "" })
    const [upLoading, setUpLoading] = useState(false)
    const [saving, setSaving] = useState(false)

    const [myApis, setMyApis] = useState<ApiDoc[]>([])
    const [LoadingApis, setLoadingApis] = useState(true)

    // ---- load the user's own document ----
    useEffect(() => {
        async function loadProfile() {
            if (!uid) return;
            const snap = await getDoc(doc(db, "users", uid));
            if (snap.exists()) {
                const data = snap.data() as userProfile;
                setProfile(data);
                setFormData({
                    name: data.name || "",
                    bio: data.bio || "",
                    github: data.links?.github || "",
                    website: data.links?.website || "",
                });
            }
        }
        loadProfile();
    }, [uid]);

    useEffect(() => {
        async function loadMyApis() {
            if (!uid) return;
            try {
                // FIXED: Changed "uid" (string) to uid (variable)
                const q = query(collection(db, "apis"), where("uid", "==", uid), orderBy("timestamp", "desc"));
                const snapshot = await getDocs(q)
                const results: ApiDoc[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<ApiDoc, "id">),
                }));
                setMyApis(results)
            } catch (error) {
                console.error("error fetching apis", error);
            } finally {
                setLoadingApis(false)
            }
        }
        loadMyApis()
    }, [uid]);

    async function handleSave() {
        if (!uid) return;
        setSaving(true);
        try {
            await updateDoc(doc(db, "users", uid), {
                name: formData.name,
                bio: formData.bio,
                links: { github: formData.github, website: formData.website },
            });
            setProfile((prev) => ({
                ...prev,
                name: formData.name,
                bio: formData.bio,
                links: { github: formData.github, website: formData.website },
            }));
            setEditing(false);
        } catch (error) {
            console.error("Error saving profile:", error);
        } finally {
            setSaving(false);
        }
    }

    async function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (!uid) return;
        const file = e.target.files?.[0];
        if (!file) return;
        setUpLoading(true);
        try {
            const storageRef = ref(storage, `avatars/${uid}`);
            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);
            await updateDoc(doc(db, "users", uid), { image: url });
            setProfile((prev) => ({ ...prev, image: url }));
        } catch (error) {
            console.error("Error uploading photo:", error);
        } finally {
            setUpLoading(false);
        }
    }

    if (!profile) {
        return (
            <main className="min-h-dvh bg-[#0B0F17] flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-sm text-gray-500 font-mono uppercase tracking-widest">Loading identity...</p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-dvh bg-[#0B0F17] text-white p-6 md:p-12 font-sans pb-24">
            <div className="max-w-5xl mx-auto space-y-12">
                
                {/* 1. PROFILE HEADER SECTION */}
                <section className="bg-white/[0.02] border border-white/5 rounded-xl p-8 backdrop-blur-sm shadow-2xl relative overflow-hidden">
                    
                    {/* Background accent glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                        {/* Avatar & Upload */}
                        <div className="relative group">
                            <div className={`w-28 h-28 rounded-full border border-white/10 overflow-hidden bg-[#05070B] flex items-center justify-center ${upLoading ? 'opacity-50' : ''}`}>
                                {profile.image ? (
                                    <img src={profile.image} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-3xl text-gray-600 font-bold">{profile.name?.charAt(0) || "?"}</span>
                                )}
                            </div>
                            
                            {/* Hidden File Input & Label Trigger */}
                            <label className="absolute inset-0 bg-black/60 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                {upLoading ? (
                                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <FiCamera className="text-white text-xl mb-1" />
                                        <span className="text-[10px] uppercase tracking-wider font-medium text-white">Update</span>
                                    </>
                                )}
                                <input type="file" className="hidden" accept="image/*" onChange={handlePhotoChange} disabled={upLoading} />
                            </label>
                        </div>

                        {/* Profile Info (Read Mode) */}
                        {!editing && (
                            <div className="flex-1 space-y-3">
                                <div>
                                    <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                                        {profile.name || "Anonymous Developer"}
                                    </h1>
                                    <p className="text-sm font-mono text-gray-500 mt-1">{profile.email}</p>
                                </div>
                                <p className="text-gray-400 font-light max-w-2xl leading-relaxed">
                                    {profile.bio || "No biography provided. Add one to let the community know what you build."}
                                </p>
                                
                                {/* Social Links */}
                                <div className="flex items-center gap-4 pt-2 text-sm">
                                    {profile.links?.github && (
                                        <a href={profile.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-gray-400 hover:text-white transition">
                                            <FaGithub /> GitHub
                                        </a>
                                    )}
                                    {profile.links?.website && (
                                        <a href={profile.links.website} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-gray-400 hover:text-white transition">
                                            <FiGlobe /> Website
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Profile Form (Edit Mode) */}
                        {editing && (
                            <div className="flex-1 w-full space-y-4 bg-black/20 p-5 rounded-lg border border-white/5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-mono text-gray-500">DISPLAY_NAME</label>
                                        <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-sm text-white outline-none focus:border-white/30" placeholder="Your name"/>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-mono text-gray-500">GITHUB_URL</label>
                                        <input type="url" value={formData.github} onChange={(e) => setFormData({...formData, github: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-sm text-white outline-none focus:border-white/30" placeholder="https://github.com/..."/>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-mono text-gray-500">BIO</label>
                                    <textarea value={formData.bio} onChange={(e) => setFormData({...formData, bio: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-sm text-white outline-none focus:border-white/30 resize-y min-h-[80px]" placeholder="Tell the community about yourself..."></textarea>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-mono text-gray-500">WEBSITE_URL</label>
                                    <input type="url" value={formData.website} onChange={(e) => setFormData({...formData, website: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-sm text-white outline-none focus:border-white/30" placeholder="https://..."/>
                                </div>
                            </div>
                        )}

                        {/* Top Right Action Buttons */}
                        <div className="absolute top-6 right-6 flex items-center gap-2">
                            {editing ? (
                                <>
                                    <button onClick={() => setEditing(false)} className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition" title="Cancel">
                                        <FiX size={18} />
                                    </button>
                                    <button onClick={handleSave} disabled={saving} style={{ backgroundColor: Theme.darkGreen }} className="px-4 py-1.5 rounded-sm text-xs font-medium text-white transition hover:opacity-90 disabled:opacity-50">
                                        {saving ? "Saving..." : "Save Profile"}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => setEditing(true)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-sm border border-transparent hover:border-white/10 transition">
                                        <FiEdit3 /> Edit
                                    </button>
                                    <button onClick={() => signOut({ callbackUrl: "/" })} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-400/80 hover:text-red-400 hover:bg-red-500/10 rounded-sm transition">
                                        <FiLogOut /> Logout
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </section>

                {/* 2. USER'S PUBLISHED APIs SECTION */}
                <section className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div>
                            <h2 className="text-xl font-semibold text-white tracking-tight">My Published APIs</h2>
                            <p className="text-xs font-mono text-gray-500 mt-1">Endpoints currently active in the registry</p>
                        </div>
                        <Link href="/post" style={{ backgroundColor: Theme.darkGreen }} className="flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-medium text-white transition hover:opacity-90">
                            Create New Endpoint <GoArrowUpRight />
                        </Link>
                    </div>

                    {LoadingApis ? (
                         <div className="text-center py-12 text-sm font-mono text-gray-500 animate-pulse">
                            Fetching endpoints...
                         </div>
                    ) : myApis.length === 0 ? (
                        <div className="text-center py-20 bg-white/[0.01] border border-white/5 rounded-lg border-dashed">
                            <p className="text-gray-400 font-light mb-4">You haven't published any APIs yet.</p>
                            <Link href="/post" className="text-sm font-medium hover:underline" style={{ color: Theme.lightGreen }}>
                                Be the first to deploy one →
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {myApis.map((api) => (
                                <div key={api.id} className="bg-white/[0.02] border border-white/10 rounded-lg p-5 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl group">
                                    <div className="space-y-3">
                                        <span className="text-[10px] font-mono tracking-wider uppercase text-gray-500 block">
                                            {api.endpoint}
                                        </span>
                                        <h3 className="font-semibold text-lg text-white group-hover:text-emerald-400 transition duration-200 line-clamp-1">
                                            {api.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 font-light line-clamp-3">
                                            {api.doc}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                                        <p className="text-[10px] font-mono text-gray-500">
                                            {api.timestamp ? new Date(api.timestamp?.toDate()).toLocaleDateString() : 'Just now'}
                                        </p>
                                        <Link style={{ backgroundColor: Theme.darkGreen }} className="flex text-xs font-medium rounded-sm px-3.5 py-1.5 items-center gap-1 text-white hover:opacity-90 transition duration-200" href={`/view/${api.id}`}>
                                            View Config <GoArrowUpRight className="text-sm" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
                
            </div>
        </main>
    )
}