"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const movieData = [
  { id: 1, title: "Avengers", path: "/placeholder.svg?height=300&width=200&text=Movie1" },
  { id: 2, title: "Spider-Man", path: "/placeholder.svg?height=300&width=200&text=Movie2" },
  { id: 3, title: "Batman", path: "/placeholder.svg?height=300&width=200&text=Movie3" },
  { id: 4, title: "Wonder Woman", path: "/placeholder.svg?height=300&width=200&text=Movie4" },
  { id: 5, title: "Black Panther", path: "/placeholder.svg?height=300&width=200&text=Movie5" },
  { id: 6, title: "Joker", path: "/placeholder.svg?height=300&width=200&text=Movie6" },
  { id: 7, title: "Inception", path: "/placeholder.svg?height=300&width=200&text=Movie7" },
  { id: 8, title: "Interstellar", path: "/placeholder.svg?height=300&width=200&text=Movie8" },
  { id: 9, title: "The Matrix", path: "/placeholder.svg?height=300&width=200&text=Movie9" },
  { id: 10, title: "Dune", path: "/placeholder.svg?height=300&width=200&text=Movie10" },
]

export function ThumbnailsSection() {
  const firstScrollerRef = useRef<HTMLDivElement>(null)
  const secondScrollerRef = useRef<HTMLDivElement>(null)

  const allMovies = [...movieData, ...movieData, ...movieData]

  useEffect(() => {
    if (firstScrollerRef.current) {
      firstScrollerRef.current.setAttribute("data-animated", "true")
    }
    if (secondScrollerRef.current) {
      secondScrollerRef.current.setAttribute("data-animated", "true")
    }
  }, [])

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          O conteúdo de vários serviços de streaming <br />
          <span className="bg-white text-red-600 p-1 ml-2 inline-block">em uma única plataforma!</span>
        </h2>
      </div>

      <div className="mb-8 overflow-hidden">
        <div ref={firstScrollerRef} className="scroller" data-speed="medium">
          <div className="scroller__inner">
            {allMovies.map((movie, index) => (
              <div
                key={`movie-left-${movie.id}-${index}`}
                className="scroller__item w-[180px] aspect-[2/3] relative rounded-lg overflow-hidden shadow-lg"
              >
                <Image src={movie.path || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div ref={secondScrollerRef} className="scroller" data-direction="right" data-speed="slow">
          <div className="scroller__inner">
            {allMovies.map((movie, index) => (
              <div
                key={`movie-right-${movie.id}-${index}`}
                className="scroller__item w-[180px] aspect-[2/3] relative rounded-lg overflow-hidden shadow-lg"
              >
                <Image src={movie.path || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

