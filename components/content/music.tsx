import BorderWrapper from "@/components/wrappers/border-wrapper"
import MusicCard from "@/components/cards/music-card"

export function Music() {

  const mixes = [
    {
      title: "Drum and Bass Mix #2",
      description: "A high-energy drum and bass mix.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1780207503&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
    {
      title: "Drum and Bass Mix #1",
      description: "A high-energy drum and bass mix.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1661962785&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
    {
      title: "Pior in the House - #2",
      description: "A mix of house music.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1574468332&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
    {
      title: "Pior b2b Kuba - Freestyle Mix #13",
      description: "A freestyle mix by Pior and Kuba.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1751948376&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
    {
      title: "Pior In The House - #3",
      description: "Another house mix by Pior.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1588807027&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
    {
      title: "Pior In The House - #4",
      description: "More house music from Pior.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1594870932&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
    // {
    //   title: "Pior In The House #5",
    //   description: "House mix number five.",
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1698299325&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    // },
    {
      title: "Groovy House Mix",
      description: "A groovy house music mix.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1516548466&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
    {
      title: "Throwback House Mix",
      description: "A collection of classic house tracks.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1512290641&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
  ];

  const mixes_two = [
    {
      title: "DJ Mix 1",
      description: "A mix of deep house and techno.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1780207503&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      title: "Drum and Bass Mix #1",
      description: "A high-energy drum and bass mix.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1661962785&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      title: "Pior in the House - #2",
      description: "A mix of house music.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1574468332&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      title: "Pior b2b Kuba - Freestyle Mix #13",
      description: "A freestyle mix by Pior and Kuba.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1751948376&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      title: "Pior In The House - #3",
      description: "Another house mix by Pior.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1588807027&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      title: "Pior In The House - #4",
      description: "More house music from Pior.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1594870932&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      title: "Pior In The House #5",
      description: "House mix number five.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1698299325&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      title: "Groovy House Mix",
      description: "A groovy house music mix.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1516548466&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      title: "Throwback House Mix",
      description: "A collection of classic house tracks.",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1512290641&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
  ];
  

  return (
    <section id="music" className="">
      <BorderWrapper className="mt-24">
        <h1 className="text-6xl font-bold">DJ Mixes</h1>
      </BorderWrapper>
      <BorderWrapper className="mt-4">
        <div className="container grid grid-cols-4 gap-4 p-2 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10">
          {
            mixes.map((mix, index) => (
              <MusicCard key={index} title={mix.title} src={mix.src} description={mix.description}/>
            ))
          }
        </div>
        
        {/* <div className="container bg-foreground/5 p-8"> */}
          {/* <div className="container grid grid-cols-2 gap-1  bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10">
            {
              mixes.map((mix, index) => (
                <MusicCard key={index} title={mix.title} src={mix.src} description={mix.description}/>
              ))
            }
          </div> */}
        {/* </div> */}
      </BorderWrapper>
    </section>
  )
}

//bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10