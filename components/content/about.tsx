import PatternWrapper from "@/components/PatternWrapper"
import Image from "next/image"

export function About() {

  return (
    <>
      <PatternWrapper>
          <div className="mt-24"></div>
      </PatternWrapper>

      <PatternWrapper>
        <section id="skills" className="">
            <h1 className="text-4xl font-bold">About Me</h1>
        </section>
      </PatternWrapper>

      <PatternWrapper>
            <div className="mt-4"></div>
        </PatternWrapper>

      <PatternWrapper>
        <p className="text-muted-foreground w-3/4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </PatternWrapper>
    </>
  )
}

