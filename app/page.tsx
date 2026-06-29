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
          <source  src="/bg.mp4" type="video/mp4"/>
          Your browser does not  support  the video tag
        </video>
          <div className="h-dvh absolute bg-black/70 top-0 left-0 w-full flex justify-center ">
          <div className="w-2/3 lg:pt-20">
            <h1 className="text-white text-4xl text-center"><span >APIs Connect</span> - The universal bridge for your data</h1>
            <p className="text-white font-light text-xl text-center"> The seemless integration platform for modern developer. Effortlessly connect your apps, manage your endpoints, and power your digital products with clean, fast APIs.</p>
            <div className="text-white flex items-center justify-center">
              <Link href={"/view"}>Explore APIs</Link>
              <Link href={"/post"}>Pnblish Endpoints</Link>
            </div>
          </div>
        </div>
      </section>
   </main>
  );
}
