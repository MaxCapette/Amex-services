
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import ContactPage from "../contact/contact"
import { SheetTrigger, SheetContent, Sheet, SheetClose } from "@/components/ui/sheet"

export function MainPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary/80 text-primary-foreground py-4 px-6 sticky top-0 z-50  backdrop-blur flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <img src="/logo.png" width="40" height="40" alt="AMEX SERVICES" />
          <span className="font-bold text-lg">AMEX SERVICES</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Accueil
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            À propos
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projets
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
          <Button variant="default" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          </SheetTrigger>
          <SheetContent className="w-full max-w-xs  p-6 backgroundCustom" side="right">
              <div className="flex flex-col gap-6">
              <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#about">
                À propos
                </Link>
                </SheetClose>
                <SheetClose asChild>
              <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#services">
              Services
                </Link>
                </SheetClose> 
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#projects">
                Projets
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#contact">
                  Contact
                </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
      </header>
      <main className="flex-1">
        <section className="flex justify-center bg-gradient-to-r from-primary to-secondary w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Bienvenue chez AMEX SERVICES
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Stimuler l&apos;innovation grâce à la recherche et au développement
                </h1>
                <p className="max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AMEX SERVICES est une entreprise de recherche et de développement de premier plan, dédiée à repousser
                  les limites de la technologie et de l&apos;innovation.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#services"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Nos services
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "
                    prefetch={false}
                  >
                    Contactez-nous
                  </Link>
                </div>
              </div>
              <img
                src="/intro.jpeg"
                width="550"
                height="310"
                alt="Hero"
                className="mx-auto  overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section id="about" className="flex justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                src="/about.jpeg"
                width="550"
                height="310"
                alt="About"
                className="mx-auto  overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  À propos d&apos;AMEX SERVICES
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Pionnier de l&apos;avenir de la technologie
                </h2>
                <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AMEX SERVICES a été fondée en 2010 avec pour mission de révolutionner la façon d&apos;aborder la recherche
                  et le développement. Notre équipe d&apos;experts dévoués repousse constamment les limites de ce qui est
                  possible, en proposant des solutions innovantes qui transforment les industries.
                </p>
                <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Avec un accent mis sur les technologies de pointe, nous avons mené à bien de nombreux projets pour des
                  clients de divers secteurs, de la santé à l&apos;aérospatiale. Notre engagement envers l&apos;excellence et
                  l&apos;amélioration continue nous a valu la réputation de partenaire de confiance dans le monde de la R&D.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Nos services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Une expertise dans de multiples domaines
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AMEX SERVICES offre une large gamme de services de recherche et de développement, répondant aux
                  besoins diversifiés de nos clients. De la conception de technologies de pointe au développement de
                  produits innovants, notre équipe d&apos;experts est équipée pour relever tous les défis.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Intelligence artificielle</h3>
                      <p className="text-muted-foreground">
                        Nos experts en IA développent des solutions de pointe qui révolutionnent les industries.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Robotique et automatisation</h3>
                      <p className="text-muted-foreground">
                        Nous concevons et construisons des systèmes robotiques innovants pour optimiser les opérations.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Énergie renouvelable</h3>
                      <p className="text-muted-foreground">
                        Notre équipe de R&D est à l&apos;avant-garde des solutions d&apos;énergie durable.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/expert.jpeg"
                width="550"
                height="310"
                alt="Services"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section id="projects" className="flex justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Nos projets
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Transformer les industries grâce à l&apos;innovation
                </h2>
                <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Chez AMEX SERVICES, nous sommes très fiers des projets innovants que nous avons réalisés pour nos
                  clients. Des avancées révolutionnaires dans l&apos;énergie renouvelable aux applications de pointe de l&apos;IA,
                  notre équipe a constamment livré des solutions transformatrices.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/projets.jpeg"
                width="550"
                height="310"
                alt="Project"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Solutions d&apos;énergie renouvelable</h3>
                      <p className="text-black">
                        Notre équipe a développé des technologies innovantes en matière d&apos;énergie solaire et éolienne,
                        qui transforment l&apos;industrie énergétique.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Santé alimentée par l&apos;IA</h3>
                      <p className="text-black">
                        Nous avons créé des systèmes d&apos;IA avancés qui révolutionnent la façon dont les professionnels de
                        la santé diagnostiquent et traitent les patients.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Véhicules autonomes</h3>
                      <p className="text-back">
                        Nos efforts de R&D ont conduit au développement de technologies de pointe pour les véhicules
                        autonomes, qui façonnent l&apos;avenir des transports.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid items-center justify-center gap-4 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contactez-nous</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Vous avez un projet en tête ou vous voulez en savoir plus sur nos services ? N&apos;hésitez pas à contacter
                  notre équipe.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <ContactPage />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary py-8">
      <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">© 2024 AMEX SERVICES.</p>
          <p className="  "> Tous droits réservés.</p>
          </div>
          <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">19 RUE DU MUSÉE</p>
          <p className="   ">13001 MARSEILLE</p>
          <p className="  mt-4 ">contact@amexservices.fr</p>

          <p className="  mt-4 ">TEL: 09 72 17 66 38</p>
          </div>
      </footer>
    </div>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}