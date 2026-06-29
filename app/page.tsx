import Link from "next/link";
export default function Home() {
  return (
   <main className="min-h-dvh">
      <section className="h-dvh overflow-hidden relative">
        
        <video 
        autoPlay
        loop
        muted
        playsInline
        >

          <source src="/bg.mp4" type="video/mp4"/>
          Your brower does not support the video tag
        </video>
        <div className="h-dvh absolute bg-black/100 top-0 left-0 w-full flex justify-center">
          <div className="w-2/3 lg:pt-20">
           <h1 className="text-white text-4xl text-center"><span>API Connent</span> -The universal bridge for your data</h1>
           <p className="text-white font-thin">The seamless integration platform for modern developers. Effortlessly connect your apps,
            manage your endpoints, and power your product with clean, fast APIs.</p>

            <div className=" text-white flex items-center justify-center">
              <Link href ={"/View"}>Explore APIs</Link>
              <Link href ={"/Post"}>Publish Endpoint</Link>
            </div>
          </div>
        </div>
      </section>
   </main>
  );
}
