import BorderWrapper from "@/components/border-wrapper"

export function Hero() {
  return (
      // <section  className="relative p-20 md:py-32 flex">     
      <section id="hero" className="mx-auto w-full">
        <p className="text-xl text-muted-foreground w-full font-bold mt-24 px-4">Hi, I'm</p>
        <BorderWrapper className="sm:px-2 lg:px-1 lg:py-2 font-extrabold sm:text-9xl lg:text-hero uppercase">
          <h1 className="tracking-tight flex items-center sm:leading-25 lg:leading-35">Piotr</h1>
          <h1 className="tracking-tight flex items-center sm:leading-25 lg:leading-35">Szaran</h1>
        </BorderWrapper>
        <BorderWrapper className="mt-4 px-4">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            <span className="underline text-accent animate-pulse">Full-stack</span> developer based in <span className="underline text-accent animate-pulse">Toronto</span>.
          </p>
        </BorderWrapper>
      </section>
  )
}