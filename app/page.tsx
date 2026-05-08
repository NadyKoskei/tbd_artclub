import Image from "next/image";

const galleryImages = [
  { src: "/images/team-community-photo.png", alt: "TBD community team photo" },
  { src: "/images/live-painting-session.png", alt: "Live painting session" },
  { src: "/images/body-art-workshop.png", alt: "Body art workshop" },
  { src: "/images/outdoor-creative-meetup.png", alt: "Outdoor creative meetup" },
  { src: "/images/community-art-night.png", alt: "Community art night" },
  { src: "/images/creative-circle-session.png", alt: "Creative circle session" },
];

const exclusiveMembershipBenefits = [
  "Exclusive meetups",
  "Monthly check-ins and accountability",
  "Priority consideration for opportunities such as exhibitions and events",
  "Featured on the website front page",
  "Featured on the IG page and promotional videos for their work",
];

const generalMembershipBenefits = [
  "Group chat",
  "Meetups",
  "Events",
  "Artistic growth",
  "Access to opportunities",
];

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Vision", href: "#vision" },
  { label: "Membership", href: "#membership" },
  { label: "Gallery", href: "#gallery" },
];

export default function Home() {
  return (
    <main className="bg-[#fdf9f4] text-[#3f2b20]">
      <header className="sticky top-0 z-50 border-b border-[#d8c1ab] bg-[#fff7ee]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8">
          <a href="#home" className="text-lg font-semibold text-[#4c3225]">
            TBD Art Club
          </a>
          <ul className="flex flex-wrap items-center justify-end gap-3 text-sm font-medium text-[#6b4b39] md:gap-5">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-[#3f2b20]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section
        id="home"
        className="relative isolate min-h-[calc(100vh-61px)] overflow-hidden scroll-mt-24"
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
        <div className="absolute inset-0 bg-linear-to-b from-[#2f1f16]/80 via-[#4b3427]/65 to-[#fdf9f4]" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-end px-6 py-12 md:px-8 md:py-16">
          <p className="mb-3 inline-flex w-fit rounded-full border border-[#f4e2cd]/70 bg-[#7a553f]/40 px-4 py-1 text-sm font-medium text-[#fff7ec]">
            Founded December 2023
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#fff8f0] md:text-6xl">
            TBD Art Club
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#f8eadb] md:text-lg">
            A creative community in Kenya where artists connect, create monthly,
            and grow together.
          </p>
        </div>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-14 md:px-8 md:py-20">
        <section
          id="about"
          className="scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#e5d2bf] md:p-10"
        >
          <h2 className="text-3xl font-semibold text-[#4c3225]">About</h2>
          <p className="mt-4 text-base leading-8 text-[#5f4537]">
            TBD is a community of creatives who come together to create monthly.
            Founded in December 2023 with 21 artists, it has grown to over 200
            members with diverse relationships to art. We exist to support,
            connect, and develop creatives.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article
            id="mission"
            className="scroll-mt-24 rounded-3xl bg-[#5b3a29] p-8 text-[#fffaf4] shadow-sm"
          >
            <h2 className="text-2xl font-semibold">Mission</h2>
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
            className="scroll-mt-24 rounded-3xl bg-[#f3e7d8] p-8 text-[#4b3125] shadow-sm ring-1 ring-[#d7bfa8]"
          >
            <h2 className="text-2xl font-semibold">Vision</h2>
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

        <section id="membership" className="scroll-mt-24 space-y-6">
          <h2 className="text-3xl font-semibold text-[#4c3225]">
            Membership Benefits
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#e5d2bf]">
              <h3 className="text-xl font-semibold text-[#4c3225]">
                Exclusive Membership
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#5f4537] md:text-base">
                {exclusiveMembershipBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8f5d42]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl bg-[#5b3a29] p-8 text-[#fffaf4] shadow-sm">
              <h3 className="text-xl font-semibold">General Membership</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#f8e7d7] md:text-base">
                {generalMembershipBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f1c9a8]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="gallery" className="scroll-mt-24 space-y-6">
          <h2 className="text-3xl font-semibold text-[#4c3225]">Gallery</h2>
          <p className="max-w-3xl text-sm leading-7 text-[#5f4537] md:text-base">
            Moments from our creative sessions, collaborations, and community
            experiences.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#e5d2bf]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={700}
                  height={700}
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </section>
      </div>

      <footer className="border-t border-[#d8c1ab] bg-[#4a3023] text-[#f8eadb]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3 md:px-8">
          <div>
            <h3 className="text-xl font-semibold text-white">TBD Art Club</h3>
            <p className="mt-3 text-sm leading-7 text-[#edd9c4]">
              Building a creative ecosystem through community, collaboration, and
              opportunity for artists in Kenya and across Africa.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Connect With Us</h4>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.instagram.com/tbdartclub/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit TBD Art Club Instagram"
                className="rounded-full border border-[#c9aa8f] bg-[#5c3b2d] p-3 text-[#fff5e9] transition-colors hover:bg-[#734c3a]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
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
                className="rounded-full border border-[#c9aa8f] bg-[#5c3b2d] p-3 text-[#fff5e9] transition-colors hover:bg-[#734c3a]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M15.3 3c.4 1.9 1.9 3.2 3.7 3.4v2.4a6.5 6.5 0 0 1-3.4-1v6.2a5.6 5.6 0 1 1-4.8-5.5v2.5a3.2 3.2 0 1 0 2.4 3.1V3h2.1z" />
                </svg>
              </a>
            </div>
            <p className="mt-3 text-sm text-[#edd9c4]">@tbdartclub</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <p className="mt-4 text-sm text-[#edd9c4]">
              Email:{" "}
              <a
                href="mailto:hello@tbdartclub.com"
                className="text-[#fff5e9] underline-offset-4 hover:underline"
              >
                hello@tbdartclub.com
              </a>
            </p>
            <p className="mt-2 text-sm text-[#edd9c4]">
              Phone:{" "}
              <a
                href="tel:+254700000000"
                className="text-[#fff5e9] underline-offset-4 hover:underline"
              >
                +254 700 000 000
              </a>
            </p>
            <p className="mt-3 text-xs text-[#d8c1ab]">
              Replace email and phone with your official contact details.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
