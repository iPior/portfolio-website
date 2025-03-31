import Image from "next/image"
import BorderWrapper from "@/components/border-wrapper"

export function Hero() {
  return (
      // <section  className="relative p-20 md:py-32 flex">     
      <section id="hero" className="mx-auto w-full">
        <h1 className="text-xl text-muted-foreground w-full font-bold mt-24 px-4">Hi, I'm</h1>
        <BorderWrapper className="px-1">
          <h1 className=" tracking-tight font-bold text-hero leading-30 ">
            Piotr
          </h1>
          <h1 className=" tracking-tight font-bold text-hero leading-40">
            Szaran
          </h1>
        </BorderWrapper>
        <BorderWrapper className="mt-4 px-4">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            I'm a <span className="underline text-accent animate-pulse">full-stack</span> developer based in <span className="underline text-accent animate-pulse">Mississauga</span>, Ontario.
          </p>
        </BorderWrapper>
      </section>
  )
}

