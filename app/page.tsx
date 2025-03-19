// import Image from "next/image";
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* OPTION 1, allows filling in */}
      <main className="h-[775px] container border-r border-l mx-auto flex">
        <div className="h-full w-1/20 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block"></div>
        <div className="h-full border-r border-l w-18/20">
        
        </div>
        <div className="h-full w-1/20 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block"></div>
      </main>

      {/* OPTION 2 */}
      {/* <main className="h-screen container border-r border-l mx-auto px-16">
        <div className="h-full border-r border-l w-full"></div>
      </main> */}
      <Footer />
    </div>
  )
}


{/* <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10 "></div> */}