const membershipPromises = [
  "Artistic Growth",
  "Genuine Community",
  "Professional Development",
];

const tierTwoFeatures = [
  "Monthly sprints and challenges organised by the team to keep practice fun and exciting.",
  "Real world feedback—workshops from advanced artists, curators and art collectors.",
  "Motivation systems such as rewards and awards at the end of seasons to make progress visible and celebrate improvements.",
  "Weekly submissions—our community features a Friday Submission requirement where each week members showcase current works in progress, areas of practice and more.",
];

const tierOneFeatures = [
  "Everything in Tier 2.",
  "Art exhibitions curated for members to meet target clientele and sell their pieces.",
  "Introduction to our networks and active pushing of artists to relevant and potential buyers.",
  "Designated vendor spots at our annual events and any others where our artists are called to sell merch, do live painting, body art and more.",
  "Behind the scenes opportunity generating and artist marketing activities—our mural campaigns, pitching to target clients and more.",
  "Hiring our own artists if they have improved fast or have mastered a particular on-demand skill to teach others for workshops.",
];

const tierThreeFeatures = [
  "One on one work with Sandra and the team.",
  "Personalised strategy sessions for career development.",
  "Personalised schedule to help you build your body of work that fits within your schedule.",
  "Representation to clients and features in all project pitches.",
];

const tiers = [
  {
    id: "tier-2",
    name: "Tier 2",
    duration: "6 months",
    price: "Ksh 6,000",
    variant: "light" as const,
    features: tierTwoFeatures,
  },
  {
    id: "tier-1",
    name: "Tier 1",
    duration: "6 months",
    price: "Ksh 15,000",
    variant: "featured" as const,
features: tierOneFeatures,
    highlight: "Professional track",
  },
  {
    id: "tier-3",
    name: "Tier 3",
    duration: "6 months",
    price: "Ksh 50,000+",
    variant: "accent" as const,
    description:
      "For artists who want our team to build their creative career with them—extra hands and legs until you're established enough to stand on your own.",
    features: tierThreeFeatures,
    highlight: "Full support",
  },
];

function FeatureList({
  items,
  dotClass = "bg-[#8f5d42]",
  textClass = "text-[#5f4537]",
}: {
  items: string[];
  dotClass?: string;
  textClass?: string;
}) {
  return (
    <ul className={`space-y-2.5 text-sm leading-7 md:text-base ${textClass}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${dotClass}`} aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TierCard({
  name,
  duration,
  price,
  variant,
  description,
  features,
  highlight,
}: (typeof tiers)[number]) {
  const isFeatured = variant === "featured";
  const isAccent = variant === "accent";

  return (
    <article
      className={[
        "relative flex h-full flex-col overflow-hidden rounded-2xl p-5 shadow-sm sm:rounded-3xl sm:p-7",
        variant === "light" && "bg-white ring-1 ring-[#e5d2bf]",
        isFeatured && "bg-[#5b3a29] text-[#fffaf4] lg:-translate-y-3 lg:shadow-lg",
        isAccent && "bg-[#f3e7d8] ring-1 ring-[#d7bfa8]",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {highlight ? (
        <span
          className={[
            "mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
            isFeatured && "bg-[#f1c9a8] text-[#4c3225]",
            isAccent && "border border-[#c9aa8f] bg-[#fff7ee] text-[#8f5d42]",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {highlight}
        </span>
      ) : (
        <span className="mb-4 block h-6" aria-hidden />
      )}

      <div className="flex items-start justify-between gap-4">
        <h3
          className={`text-xl font-semibold sm:text-2xl ${isFeatured ? "text-white" : "text-[#4c3225]"}`}
        >
          {name}
        </h3>
        <div className="shrink-0 text-right">
          <p
            className={`text-xs font-medium sm:text-sm ${isFeatured ? "text-[#f1c9a8]" : "text-[#8f5d42]"}`}
          >
            {duration}
          </p>
          <p
            className={`mt-0.5 text-lg font-bold sm:text-xl ${isFeatured ? "text-white" : "text-[#4c3225]"}`}
          >
            {price}
          </p>
        </div>
      </div>

      {description ? (
        <p
          className={`mt-4 text-sm leading-7 md:text-base ${isFeatured ? "text-[#f8e7d7]" : "text-[#5f4537]"}`}
        >
          {description}
        </p>
      ) : null}

      <div className="mt-6 flex-1">
        <p
          className={`text-xs font-semibold uppercase tracking-wider ${isFeatured ? "text-[#f1c9a8]" : "text-[#8f5d42]"}`}
        >
          Features
        </p>
        <div className="mt-3">
          <FeatureList
            items={features}
            dotClass={isFeatured ? "bg-[#f1c9a8]" : "bg-[#8f5d42]"}
            textClass={isFeatured ? "text-[#f8e7d7]" : "text-[#5f4537]"}
          />
        </div>
      </div>
    </article>
  );
}

export function MembershipSection() {
  return (
    <section id="membership" className="scroll-mt-20 space-y-8 sm:scroll-mt-24 sm:space-y-10">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-[#4c3225] sm:text-3xl">
          TBD Membership Package
        </h2>
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#e5d2bf] sm:rounded-3xl sm:p-8">
          <p className="text-base leading-8 text-[#5f4537]">
            Welcome to TBD Art Club. TBD is built on the mission to meaningfully deliver three
            main promises:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {membershipPromises.map((promise) => (
              <li
                key={promise}
                className="rounded-full border border-[#d8c1ab] bg-[#f3e7d8] px-4 py-1.5 text-sm font-medium text-[#4c3225]"
              >
                {promise}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-[#5f4537] md:text-base">
            At a larger scale, our mission is to create a sustainable creative economy, so
            there&apos;s adequate representation in the job market and means to make a living for
            creative-minded people. We seek to utilise our leverage of being a collective to
            disrupt barriers that we can&apos;t at an individual level, and prepare our artists
            for the top. Our membership is structured to achieve each of the three promises above
            for our members. Below are the applicable perks per promise.
          </p>
        </div>
      </div>

      <div className="grid items-stretch gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-6 lg:pt-3">
        {tiers.map((tier) => (
          <TierCard key={tier.id} {...tier} />
        ))}
      </div>
    </section>
  );
}
