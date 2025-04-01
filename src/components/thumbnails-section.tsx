"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const movieData = [
  { id: 1, title: "Avengers", path: "https://oficialcineflick.com/wp-content/uploads/2024/06/IMG-46.webp" },
  { id: 2, title: "Spider-Man", path: "https://oficialcineflick.com/wp-content/uploads/2024/06/IMG-30.webp" },
  { id: 3, title: "Batman", path: "https://oficialcineflick.com/wp-content/uploads/2024/06/IMG-33.webp" },
  { id: 4, title: "Wonder Woman", path: "https://oficialcineflick.com/wp-content/uploads/2024/06/IMG-36.webp" },
  { id: 5, title: "Black Panther", path: "https://oficialcineflick.com/wp-content/uploads/2024/06/IMG-39.webp" },
  { id: 6, title: "Joker", path: "https://oficialcineflick.com/wp-content/uploads/2024/06/IMG-42.webp" },
  { id: 7, title: "Inception", path: "https://oficialcineflick.com/wp-content/uploads/2024/06/IMG-45.webp" },
  { id: 8, title: "Interstellar", path: "https://oficialcineflick.com/wp-content/uploads/2024/06/IMG-48.webp" },
  { id: 9, title: "The Matrix", path: "https://oficialcineflick.com/wp-content/uploads/2024/06/IMG-51.webp" },
  { id: 10, title: "Dune", path: "https://oficialcineflick.com/wp-content/uploads/2024/06/IMG-39.webp" },
  { id: 11, title: "Deadpool", path: "https://oficialcineflick.com/wp-content/uploads/2024/12/IMG-63.webp" },
  { id: 12, title: "Sonic", path: "https://oficialcineflick.com/wp-content/uploads/2024/12/IMG-60.webp" },
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
                <Image src={movie.path} alt={movie.title} fill className="object-cover" />
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
                <Image src={movie.path} alt={movie.title} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

