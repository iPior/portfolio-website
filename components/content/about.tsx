import PatternWrapper from "@/components/pattern-wrapper"
import Image from "next/image"
import BorderWrapper from "../border-wrapper"

export function About() {

  return (
    <section className="about-me container mx-auto">
        <BorderWrapper className="mt-24">
          <h1 className="text-4xl font-bold">About Me</h1>
        </BorderWrapper>
        <BorderWrapper className="flex mt-4">
          <p className="text-xl text-muted-foreground w-2/4 mr-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <Image
              src={"https://placehold.co/300x300"}
              alt={"Profile picture"}
              unoptimized
              width={220}
              height={220}
              className="rounded"
              />
        </BorderWrapper>
    </section>
  )
}

