import { Theme } from "@/components/Theme";
import Link from "next/link";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export default function View() {
  return (
    <main className="min-h-dvh bg-neutral-950 text-neutral-200 max-md:p-4 p-8 relative overflow-hidden">
      {/* Soft background glow */}
      <div 
        className="absolute top-0 right-1/4 w-[400px] h-[400px] blur-[150px] rounded-full pointer-events-none opacity-5" 
        style={{ backgroundColor: Theme.lightGreen }}
      ></div>

      {/* Styled Header Section */}
      <header className="max-w-7xl mx-auto mb-12 space-y-3 relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
          Discover, Test, and Integrate <span style={{ color: Theme.lightGreen }} className="italic">Production-ready APIs</span> Instantly
        </h1>
        <p className="text-sm md:text-base font-light text-neutral-400 max-w-3xl">
          Browse our universal ecosystem of live endpoints. Connect structures safely, inspect response schemas, and spin up mock infrastructure in seconds.
        </p>
      </header>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {/* API Card */}
        <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-md p-5 flex flex-col justify-between space-y-5 hover:border-neutral-700/60 transition-all duration-300 shadow-xl backdrop-blur-sm group">
          
          {/* Card Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Samuel Chukwuma" 
                className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 object-cover"    
              />
              <div>
                <h2 className="text-sm font-medium text-white">Samuel Chukwuma</h2>
                <p className="text-[11px] text-neutral-500 font-light uppercase tracking-wider">Publisher</p>
              </div>
            </div>
            {/* Trash Action */}
            <button className="p-2 text-neutral-500 hover:text-red-400 hover:bg-red-500/10 rounded-sm transition-all duration-200">
              <FaRegTrashAlt className="text-sm" />
            </button>
          </div>

          {/* Card Body */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-neutral-100 group-hover:text-white transition-colors">
              Dummy Products
            </h3>
            <div className="space-y-1">
              <span 
                className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-sm bg-neutral-800"
                style={{ color: Theme.lightGreen }}
              >
                Documentation
              </span>
              <p className="text-sm font-light text-neutral-400 line-clamp-3 leading-relaxed pt-1.5">
                Instant placeholder data for E-Commerce layout, store inventories, and cart testing mechanics. Perfect for learners. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate placeat dolorum animi, perferendis harum iusto voluptatibus nam. Vel, voluptatum libero minus quibusdam sint, ipsum unde necessitatibus rem delectus dicta tenetur. At, facilis. Recusandae alias doloremque temporibus, qui sequi ratione, laudantium quia dolore repellendus porro minima quo, deserunt cum ullam nobis.
              </p>
            </div>
          </div>

          {/* Card Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60">
            <p className="text-xs font-light text-neutral-500">2/7/2026</p>
            <Link 
              href={"#"} 
              style={{ backgroundColor: Theme.darkGreen }} 
              className="text-white flex items-center gap-1.5 rounded-sm px-4 py-1.5 text-xs font-medium hover:brightness-110 transition-all duration-200 group/btn"
            >
              View Docs 
              <GoArrowUpRight className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}