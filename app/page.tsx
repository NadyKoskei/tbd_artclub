import Image from "next/image";
import { FAQSection } from "./components/FAQSection";
import { GalleryCarousel } from "./components/GalleryCarousel";
import { MembershipSection } from "./components/MembershipSection";
import { SiteHeader } from "./components/SiteHeader";

const pastMeetupImages = [
  { src: "/images/meetups/tbd-01.png", alt: "TBD members together at a club gathering" },
  { src: "/images/meetups/tbd-02.png", alt: "Community smiling during a meet up" },
  { src: "/images/meetups/tbd-03.png", alt: "Hands-on creative session at TBD" },
  { src: "/images/meetups/tbd-04.png", alt: "Outdoor creative meet up with the club" },
  { src: "/images/meetups/tbd-05.png", alt: "Friends sharing food at a TBD social" },
  { src: "/images/meetups/tbd-06.png", alt: "Gallery night with members and artwork" },
  { src: "/images/meetups/tbd-07.png", alt: "Two members posing at an exhibition" },
  { src: "/images/meetups/tbd-08.png", alt: "Group photo from a past TBD event" },
];

const whatWeDoOfferings = [
  {
    title: "Mural work",
    description:
      "Large-scale indoor and outdoor murals tailored to your space, brand, or community story.",
  },
  {
    title: "Commission work",
    description:
      "Custom paintings, portraits, and bespoke pieces made to brief for homes, offices, and collectors.",
  },
  {
    title: "Teaching workshops",
    description:
      "Structured sessions that build skills—from fundamentals to specialised techniques—in a supportive setting.",
  },
  {
    title: "Embroidery and crafts",
    description:
      "Textile arts, hand embroidery, and craft-led sessions that blend tradition with contemporary practice.",
  },
];

const CONTACT_EMAIL = "tbdartcub@gmail.com";
const CONTACT_PHONE_WHATSAPP = "254757797047";
const CONTACT_PHONE_TEL = `+${CONTACT_PHONE_WHATSAPP}`;
const CONTACT_PHONE_DISPLAY = "0757 797 047";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Vision", href: "#vision" },
  { label: "Membership", href: "#membership" },
  { label: "Past events", href: "#meetups" },
  { label: "What we do", href: "#what-we-do" },
  { label: "FAQ", href: "#faq" },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#fdf9f4] text-[#3f2b20]">
      <SiteHeader links={navigationLinks} />

      <section
        id="home"
        className="relative isolate min-h-[min(100svh,920px)] scroll-mt-20 overflow-hidden sm:min-h-[calc(100svh-4.5rem)] md:scroll-mt-24"
        aria-label="Hero section"
      >
        <Image
          src="/images/team-community-photo.png"
          alt="TBD members standing together"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover object-[center_18%] md:object-[center_22%]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#2f1f16]/72 via-[#4b3427]/48 to-[#fdf9f4]/88" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-end px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-10 sm:px-6 sm:pb-12 md:px-8 md:pb-16 md:pt-12">
  
          <h1 className="max-w-[min(100%,20ch)] text-[clamp(1.875rem,6vw+0.5rem,3.75rem)] font-bold leading-[1.1] text-[#fff8f0] [text-shadow:0_2px_28px_rgba(47,31,22,0.9),0_1px_3px_rgba(47,31,22,0.85)] md:max-w-3xl md:text-6xl">
            TBD Art Club
          </h1>
          <p className="mt-4 max-w-2xl text-[0.95rem] font-medium leading-relaxed text-[#fdf9f4] [text-shadow:0_2px_20px_rgba(47,31,22,0.88),0_1px_2px_rgba(47,31,22,0.9)] sm:text-base md:text-lg md:leading-relaxed">
            A creative community in Kenya where artists connect, create monthly,
            and grow together.
          </p>
        </div>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 sm:gap-16 sm:px-6 sm:py-14 md:px-8 md:py-20">
        <section
          id="about"
          className="scroll-mt-20 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#e5d2bf] sm:scroll-mt-24 sm:rounded-3xl sm:p-8 md:p-10"
        >
          <h2 className="text-2xl font-semibold text-[#4c3225] sm:text-3xl">About</h2>
          <p className="mt-4 text-base leading-8 text-[#5f4537]">
            TBD is a community of creatives who come together to create monthly.
            Founded in December 2023 with 21 artists, it has grown to over 200
            members with diverse relationships to art. We exist to support,
            connect, and develop creatives.
          </p>
        </section>

        <section className="grid gap-5 sm:gap-6 md:grid-cols-2">
          <article
            id="mission"
            className="scroll-mt-20 rounded-2xl bg-[#5b3a29] p-5 text-[#fffaf4] shadow-sm sm:scroll-mt-24 sm:rounded-3xl sm:p-8"
          >
            <h2 className="text-xl font-semibold sm:text-2xl">Mission</h2>
            <p className="mt-4 text-sm leading-7 text-[#f8e7d7] md:text-base">
              TBD operates through three core objectives: to build a genuine and
              supportive community for creatives, to foster creative growth
              through shared practice and collaboration, and to create pathways
              for professional advancement for those of us pursuing art as a
              career.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#f8e7d7] md:text-base">
              We aim to grow into a self-sustaining creative ecosystem that
              bridges the gap between the creative and professional worlds, while
              strengthening the creative economy in Kenya and across Africa.
            </p>
          </article>

          <article
            id="vision"
            className="scroll-mt-20 rounded-2xl bg-[#f3e7d8] p-5 text-[#4b3125] shadow-sm ring-1 ring-[#d7bfa8] sm:scroll-mt-24 sm:rounded-3xl sm:p-8"
          >
            <h2 className="text-xl font-semibold sm:text-2xl">Vision</h2>
            <p className="mt-4 text-sm leading-7 md:text-base">
              TBD exists to create a world where people are able to do what they
              love, and where what they love contributes meaningfully to society.
            </p>
            <p className="mt-4 text-sm leading-7 md:text-base">
              We seek to utilise our talents to provide exceptional value.
              Through empowering the creative economy we seek to directly impact
              sectors such as rigid employment and education structures, mental
              health and psychological issues, and the upholding of aesthetic
              standards.
            </p>
          </article>
        </section>

        <MembershipSection />

        <section id="meetups" className="scroll-mt-20 space-y-5 sm:scroll-mt-24 sm:space-y-6">
          <h2 className="text-2xl font-semibold text-[#4c3225] sm:text-3xl">
            Past meet ups and events
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-[#5f4537] md:text-base">
            Moments from our gatherings, exhibitions, and community nights—scroll
            sideways or use the arrows to see more.
          </p>
          <GalleryCarousel images={pastMeetupImages} />
        </section>

        <section
          id="what-we-do"
          className="scroll-mt-20 space-y-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#e5d2bf] sm:scroll-mt-24 sm:space-y-8 sm:rounded-3xl sm:p-8 md:p-10"
        >
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#4c3225] sm:text-3xl">What we do</h2>
            <p className="max-w-3xl text-sm leading-7 text-[#5f4537] md:text-base">
              Beyond monthly meetups, TBD supports creative practice through paid
              projects, education, and craft-led programming—rooted in Kenyan
              artists and open to collaborations that align with our mission.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl bg-[#f3e7d8] shadow-sm ring-1 ring-[#d7bfa8]">
              <Image
                src="/images/commissions/com-mural-1.png"
                alt="Artist painting a colourful mural detail"
                width={900}
                height={700}
                className="aspect-4/3 w-full object-cover"
              />
              <figcaption className="sr-only">Mural commission in progress</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl bg-[#f3e7d8] shadow-sm ring-1 ring-[#d7bfa8]">
              <Image
                src="/images/commissions/com-mural-2.png"
                alt="Artist working on a large floral mural"
                width={900}
                height={700}
                className="aspect-4/3 w-full object-cover"
              />
              <figcaption className="sr-only">Large-scale mural painting</figcaption>
            </figure>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {whatWeDoOfferings.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl bg-[#fdf9f4] p-4 ring-1 ring-[#e5d2bf] sm:p-6"
              >
                <h3 className="text-lg font-semibold text-[#4c3225]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#5f4537]">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <FAQSection />
      </div>

      <footer className="border-t border-[#d8c1ab] bg-[#4a3023] pb-[max(0.5rem,env(safe-area-inset-bottom))] text-[#f8eadb]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-3 md:px-8">
          <div>
            <h3 className="text-xl font-semibold text-white">TBD Art Club</h3>
            <p className="mt-3 text-sm leading-7 text-[#edd9c4]">
              Building a creative ecosystem through community, collaboration, and
              opportunity for artists in Kenya and across Africa.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Connect With Us</h4>
            <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/tbdartclub/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit TBD Art Club Instagram"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#c9aa8f] bg-[#5c3b2d] p-3 text-[#fff5e9] transition-colors hover:bg-[#734c3a]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5 shrink-0"
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@tbdartclub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit TBD Art Club TikTok"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#c9aa8f] bg-[#5c3b2d] p-3 text-[#fff5e9] transition-colors hover:bg-[#734c3a]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0"
                >
                  <path d="M15.3 3c.4 1.9 1.9 3.2 3.7 3.4v2.4a6.5 6.5 0 0 1-3.4-1v6.2a5.6 5.6 0 1 1-4.8-5.5v2.5a3.2 3.2 0 1 0 2.4 3.1V3h2.1z" />
                </svg>
              </a>

              <a
                href={`https://wa.me/${CONTACT_PHONE_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message TBD Art Club on WhatsApp"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#c9aa8f] bg-[#5c3b2d] p-3 text-[#fff5e9] transition-colors hover:bg-[#734c3a]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0"
                  aria-hidden
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
            <p className="mt-3 text-sm text-[#edd9c4]">@tbdartclub</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <p className="mt-4 wrap-break-word text-sm text-[#edd9c4]">
              Email:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all text-[#fff5e9] underline-offset-4 hover:underline sm:break-normal"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-2 text-sm text-[#edd9c4]">
              Phone:{" "}
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="text-[#fff5e9] underline-offset-4 hover:underline"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
            </p>

          </div>
        </div>
      </footer>
    </main>
  );
}
