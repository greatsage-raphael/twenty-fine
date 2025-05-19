"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_fx_%20-%202025-02-28T204457.888-Uhbk4NqyisiasNbqOeE2PhVrsBGjIL.png"
          alt="Twenty Fine - Uganda's Must-Watch Drama Series"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-red-600">TWENTY</span>
              <span className="text-red-600">FINE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">UGANDA'S MUST-WATCH DRAMA SERIES</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">Watch Now</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_fx_%20-%202025-02-28T215231.691-g8PMyJuyI10F9VEpsZdjyJO1kJfsXc.png"
                alt="Twenty Fine Introduction"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">INTRODUCTION</h2>
              <p className="text-lg text-gray-300 mb-6">
                Twenty-Fine is a drama-romance telenovela set in the heart of modern-day Uganda, following the
                intersecting lives of five young women in their twenties as they navigate friendship, ambition, love,
                and betrayal. The series explores the trials of early adulthood, the complexities of evolving
                relationships, and the tension between personal desires and societal expectations, all set against a
                backdrop of authentic Ugandan culture.
              </p>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => {
                  const charactersSection = document.getElementById("characters")
                  if (charactersSection) {
                    charactersSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Meet the Characters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Setting & Themes Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">SETTING & THEMES</h2>
              <p className="text-lg text-gray-300 mb-6">
                Twenty is set in bustling Kampala, a city rich with vibrant markets, diverse communities, and an
                ever-evolving youth culture. The series captures the nuances of daily life, from the pulsating energy of
                city nightlife to the sacred traditions of Sunday church service, all while addressing age- relevant
                issues like financial independence, romantic entanglements, and the pressure to conform or stand out in
                a rapidly changing world.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                The show aims to be culturally relevant, shining a light on the intersection between tradition and
                modernity in Uganda. It presents relatable struggles that young people worldwide face while offering a
                window into the lives of characters who are unmistakably and unapologetically Ugandan.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_fx_%20-%202025-02-28T220506.902-buoMzl4hlykq10EBbNv4d3UB9seCv8.png"
                alt="Twenty Fine Setting and Themes"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-12">MAIN CHARACTERS</h2>

          {/* Character 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-k0aTosATIh4NNq1ybgZsP2yXO6tGOY.png"
                alt="Nalwanga Maryjoseph - The Lawyer"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-600 mb-4">1. NALWANGA MARYJOSEPH</h3>
              <p className="text-lg text-gray-300 mb-6">
                An outspoken feminist and fierce activist, the Lawyer channels her passion for justice into advocacy
                work. However, beneath her confident exterior lies a complicated secret: a budding affair with her
                wealthy friend's influential uncle. Her activism comes at a price, and when she's arrested during a
                controversial nude protest, her parents refuse to bail her out, forcing her to confront how her choices
                have strained her relationships and self-identity.
              </p>
            </div>
          </div>

          {/* Character 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-red-600 mb-4">2. APIO MERCY</h3>
              <p className="text-lg text-gray-300 mb-6">
                A creative soul from a single-parent household, the Seamstress dreams of launching her own fashion
                brand. She moves in with the Bartender and Content Creator after her impulsive decision to start an
                affair with the Bartender's boyfriend fractures the bond between herself and her mother. As she tries to
                mend the broken pieces of her life, she must reconcile her ambition, the opportunities ahead, and the
                consequences of her actions, all while wrestling with the loyalty she owes to her mother and herself.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-BZyjbXuDUywcwSjipKwyU7qPGxRBdn.png"
                alt="Apio Mercy - The Seamstress"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Character 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-qg5avydmbY46pgaP3RnKmaN1y0HWvf.png"
                alt="Kunda Favor - The Bartender"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-600 mb-4">3. KUNDA FAVOR</h3>
              <p className="text-lg text-gray-300 mb-6">
                A talented Chef working as a Bartender to support her younger siblings, the Bartender's life is one of
                constant sacrifice. Her alcoholic father parentified her before time and she has been working since.
                When the Seamstress, has an affair with her boyfriend, it destabilizes the group dynamic and leaves her
                questioning whom she can trust. Struggling under the thumb of her demanding, self- serving boss, she
                yearns to reclaim her passion for cooking and carve out a path that balances responsibility with
                self-fulfillment.
              </p>
            </div>
          </div>

          {/* Character 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-red-600 mb-4">4. MALAIKA KISAKYE</h3>
              <p className="text-lg text-gray-300 mb-6">
                Raised in a stable, Christian household and an active member of her church choir, the Church Girl's life
                takes a dark turn when she's seduced by the thrill of the underworld. Entangled in a criminal
                organization after a fateful meeting with a mysterious man, she lives a precarious triple life—dutiful
                daughter, devoted friend, and cunning criminal associate. Her story is a poignant exploration of faith,
                rebellion, and the search for meaning in an increasingly complicated world.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-EzSTftc0Tia9dQliHrwLCN6oexCmQE.png"
                alt="Malaika Kisakye - The Church Girl"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Character 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-9eWVanY2QarWlZANp1pziutjo2Qb9w.png"
                alt="Akello Princess - The Content Creator"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-600 mb-4">5. AKELLO PRINCESS</h3>
              <p className="text-lg text-gray-300 mb-6">
                An affluent, well-adjusted orphan, the Content Creator has found solace in fitness and social media,
                using her platform to uplift others and cultivate a personal brand. Her wealth stems from a large trust
                fund, but few know the true story of her parents' death. She considers her friends her chosen family,
                but the revelation of her uncle's affair with the Lawyer and his other dealings threaten to unravel her
                carefully maintained world. The Content Creator's arc dives into the themes of privilege, vulnerability,
                and the impact of secrets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Canva Pitch Link Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Access Our Full Pitch Document</h2>
          <div className="max-w-2xl mx-auto bg-zinc-800 p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 truncate flex-1 text-left">
              https://www.canva.com/design/DAGgaR_a11k/m_Jy9ajsEYoNFmPnMe6mHQ/edit?utm_content=DAGgaR_a11k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
            </p>
            <CopyLinkButton link="https://www.canva.com/design/DAGgaR_a11k/m_Jy9ajsEYoNFmPnMe6mHQ/edit?utm_content=DAGgaR_a11k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-black to-red-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Be Part of the Story</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us on this journey through the lives of five extraordinary women navigating the complexities of modern
            Uganda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-200 px-8 py-6 text-lg">Watch Trailer</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">
                <span className="text-red-600">TWENTY</span>
                <span className="text-red-600">FINE</span>
              </h2>
              <p className="text-gray-400">© 2025 Barstool Studios. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                Instagram
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Twitter
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Facebook
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CopyLinkButton({ link }: { link: string }) {
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(link)
        alert("Link copied to clipboard!")
      }}
      className="bg-red-600 hover:bg-red-700 text-white"
    >
      <Copy className="mr-2 h-4 w-4" /> Copy Link
    </Button>
  )
}
