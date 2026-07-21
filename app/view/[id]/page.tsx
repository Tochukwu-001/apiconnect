"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { Theme } from "@/components/Theme";
import { GoArrowLeft, GoCopy, GoCheckCircle, GoTerminal } from "react-icons/go";
import { db } from "@/config/firebase";

interface APIData {
  developer: string;
  docs: string;
  endpoint: string;
  image: string;
  timestamp: string;
  title: string;
}

export default function SingleAPI() {
  const params = useParams();
  // Expects folder structure like: app/view/[id]/page.tsx
  const id = params?.id as string;

  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState<APIData | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchFromFirebase = async () => {
      try {
        // Adjust 'apis' to match your Firestore collection name
        const docRef = doc(db, "apis", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setApiData(docSnap.data() as APIData);
        } else {
          console.error("No API document found in Firebase with ID:", id);
        }
      } catch (error) {
        console.error("Error fetching document from Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFromFirebase();
  }, [id]);

  const handleCopy = () => {
    if (apiData?.endpoint) {
      navigator.clipboard.writeText(apiData.endpoint);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-dvh bg-neutral-950 text-neutral-200 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <span 
            className="w-3 h-3 rounded-full animate-ping" 
            style={{ backgroundColor: Theme.lightGreen }}
          ></span>
          <p className="text-sm font-light text-neutral-400">Loading API details...</p>
        </div>
      </div>
    );
  }

  if (!apiData) {
    return (
      <div className="min-h-dvh bg-neutral-950 text-neutral-200 flex flex-col items-center justify-center gap-4 p-4 text-center">
        <p className="text-neutral-400 font-light">API endpoint details could not be found.</p>
        <Link 
          href="/view" 
          className="inline-flex items-center gap-2 text-sm text-white px-4 py-2 rounded-sm transition-transform hover:scale-105"
          style={{ backgroundColor: Theme.darkGreen }}
        >
          <GoArrowLeft /> Return to Endpoints
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-dvh bg-neutral-950 text-neutral-200 max-md:p-4 p-8 relative overflow-hidden">
      {/* Background glow accent */}
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none opacity-5" 
        style={{ backgroundColor: Theme.lightGreen }}
      ></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        
        {/* Navigation & Header */}
        <header className="space-y-6">
          <Link 
            href="/view" 
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-200"
          >
            <GoArrowLeft className="text-lg" />
            Back to Endpoints
          </Link>

          <div className="border-b border-neutral-800 pb-6 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {apiData.title}
            </h1>
            
            <div className="flex items-center gap-3 text-sm text-neutral-400 font-light">
              <span className="flex items-center gap-2">
                {apiData.image && (
                  <img 
                    src={apiData.image} 
                    alt={apiData.developer} 
                    className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 object-cover" 
                  />
                )}
                <span className="text-neutral-300 font-medium">{apiData.developer}</span>
              </span>
              {apiData.timestamp && (
                <>
                  <span>•</span>
                  <span>Published {apiData.timestamp}</span>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="space-y-8">
          
          {/* Endpoint Block */}
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-md p-5 space-y-3">
            <h2 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
              Endpoint URL
            </h2>
            <div className="flex items-center bg-black/50 border border-neutral-800 rounded-sm p-1 pl-4">
              <input 
                readOnly 
                value={apiData.endpoint} 
                className="bg-transparent text-white text-sm w-full py-1.5 outline-none font-mono"
              />
              <button 
                onClick={handleCopy}
                className="p-2 mr-1 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-sm transition-all flex-shrink-0"
                title="Copy to clipboard"
              >
                {copied ? <GoCheckCircle className="text-lg text-green-400" /> : <GoCopy className="text-lg" />}
              </button>
            </div>
          </div>

          {/* Documentation Block */}
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-md p-6 lg:p-8 space-y-6">
            <div className="flex items-center gap-2 border-b border-neutral-800 pb-4">
              <GoTerminal className="text-xl text-neutral-400" />
              <h2 className="text-lg font-semibold text-white">Documentation</h2>
            </div>
            
            <article className="prose prose-invert prose-neutral max-w-none font-light text-sm leading-relaxed text-neutral-400 whitespace-pre-wrap">
              {apiData.docs || "No documentation provided for this endpoint."}
            </article>
          </div>

        </div>
      </div>
    </main>
  );
}