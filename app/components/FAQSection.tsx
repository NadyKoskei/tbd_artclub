"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "What is TBD Art Club?",
    answer:
      "TBD Art Club is the social branch of TBD ARTS LIMITED, built around Artistic Growth, Genuine Community and Professional Development. It's a community for artists and creatives who want to create, connect, collaborate and grow together.",
  },
  {
    question: "Who is TBD Art Club for?",
    answer:
      "TBD is for artists and creatives who are genuinely interested in participating in a creative community and contributing to what we're building. You don't have to be a full-time professional artist, but you do need to be serious about your creative practice and willing to participate.",
  },
  {
    question: "Do I have to be a professional artist to join?",
    answer:
      "No. You can be emerging, established, transitioning into your creative career, or developing your practice. What matters more is your commitment to creating and growing.",
  },
  {
    question: "Is this just an art meetup group?",
    answer:
      "No. Meetups are part of it, but they're only one piece. TBD is designed to create a wider ecosystem around artists: community, collaborative projects, creative experiences, opportunities and, for artists who want it, professional development.",
  },
  {
    question: "What do I actually get as a member?",
    answer:
      "You'll have access to the community and its activities, including meetups, collaborative projects, creative challenges, opportunities, events and other experiences developed throughout the membership period. Specific perks and inclusions are outlined in the membership information provided to you.",
  },
  {
    question: "How much is membership?",
    answer:
      "The standard community membership for new members is KSh 6,000 for six months.",
  },
  {
    question: "Is career development included in the general community membership?",
    answer:
      "The community provides an environment that supports growth, but intensive career development is a separate offering. Artists who want more structured, individualised professional development will have the option to access the Career Development tier, which involves a higher level of support and investment.",
  },
  {
    question: "What's the Career Development tier?",
    answer:
      "It's for artists who want to take their artistic practice and career more seriously and want structured support doing so. This may include professional development, portfolio and artist-brand development, feedback, accountability, industry education, work opportunities and other forms of career-focused guidance.",
  },
  {
    question: "Do I have to join the Career Development tier?",
    answer:
      "Nope! You can participate in the core community without pursuing the professional-development track. This is for members who are interested in monetising their work and making a living from it.",
  },
  {
    question: "Do I have to attend every meetup or participate in everything?",
    answer:
      "No, but TBD works best when members actually participate. This isn't intended to be a passive subscription where you pay and wait for things to happen. The community is built around collective participation.",
  },
  {
    question: "What does TBD expect from members?",
    answer:
      "Curiosity, commitment, respect, participation and a willingness to contribute. You don't need to be the most experienced person in the room. You do need to be willing to show up and do the work.",
  },
  {
    question: "Can I join if I'm mainly interested in the social/community aspect?",
    answer:
      "Yes. That's an important part of TBD. The community isn't solely a career programme. We want artists to have fun, make friends, collaborate and create memorable experiences together. We have different tiers to accommodate different priorities.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "Your application is reviewed for alignment with the community. If there, you'll be contacted and may be invited to have a conversation with the team or with Sandra before joining.",
  },
  {
    question: "Why is there an application process?",
    answer:
      "Because we're intentionally building a community around shared values rather than simply collecting as many members as possible. We want people who genuinely resonate with what we're trying to create.",
  },
  {
    question: "Can I leave the community later?",
    answer:
      "Yes. Membership isn't a life sentence. 😂 You can choose not to renew when your membership period ends.",
  },
  {
    question: "Where does TBD operate?",
    answer:
      "TBD is currently rooted in Nairobi, Kenya, with ambitions to create opportunities and connections that extend beyond Nairobi and eventually beyond Kenya.",
  },
  {
    question: "What is TBD ARTS?",
    answer:
      "TBD ARTS LIMITED is the larger organisation behind the TBD ecosystem. TBD Art Club is its social/community branch, while other initiatives can include commercial projects, artist opportunities, creative campaigns, professional development and collaborations.",
  },
  {
    question: "What's the bigger vision?",
    answer:
      "To build a stronger creative ecosystem where artists have more agency over their careers and don't have to wait for institutions to decide whether they're worth investing in. We want artists to create together, pool resources, build visibility and use collective power to access opportunities that may be difficult to reach individually.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-20 space-y-5 sm:scroll-mt-24 sm:space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-[#4c3225] sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-3xl text-sm leading-7 text-[#5f4537] md:text-base">
          Everything you might want to know about TBD Art Club, membership and how the
          community works. Tap a question to reveal the answer.
        </p>
      </div>

      <div className="divide-y divide-[#e5d2bf] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#e5d2bf] sm:rounded-3xl">
        {faqs.map((faq) => (
          <details key={faq.question} className="group open:bg-[#fdf9f4]">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-[#4c3225] transition-colors hover:bg-[#fdf9f4] sm:px-8 sm:py-5 sm:text-base [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d8c1ab] bg-[#f3e7d8] text-[#8f5d42] transition-transform duration-200 group-open:rotate-45"
                aria-hidden
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <div className="px-5 pb-5 sm:px-8 sm:pb-6">
              <p className="text-sm leading-7 text-[#5f4537] md:text-base">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
