import React from "react";
import rizwanImg from "../assets/team/rizwan.jpeg";
import asherImg from "../assets/team/asher.jpg";

type Member = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

type TeamSectionProps = {
  title?: string;
  subtitle?: string;
  members?: Member[];
};

const defaultMembers: Member[] = [
  {
    name: "Muhammad Asher Kamal",
    role: "Co-founder",
    bio: "An engineer turned entrepreneur, Muhammad Asher Kamal is the founder of Bumper Wholesale. At Bumper Wholesale, he is building Pakistan's first Membership Wholesale Club. As the co-founder of Hyprlynx Capital, he aims to build a dominant serial acquirer of software in the MENAP region as the chief capital allocator.",
    imageUrl: asherImg,
  },
  {
    name: "Muhammad Rizwan Aslam",
    role: "Co-founder",
    bio: "A software engineer turned tech entrepreneur and web developer, Muhammad Rizwan helps people and businesses build practical solutions using AI and web technologies. He has 10+ years of experience in WordPress, Shopify, web development, and creating fast, user-friendly websites.",
    imageUrl: rizwanImg,
  },
];

export default function TeamSection({
  title = "Meet the Team",
  members = defaultMembers,
}: TeamSectionProps) {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="team">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {members.slice(0, 2).map((m, idx) => (
          <article
            key={m.name + idx}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 -mt-8">
                  <div className="relative">
                    <img
                      src={m.imageUrl}
                      alt={m.name}
                      className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
                  <p className="text-sm text-gray-500">{m.role}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">{m.bio}</p>

              <div className="mt-6 flex items-center gap-3">
                {/* <button
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 text-white text-sm font-medium shadow-sm hover:from-green-600 hover:to-emerald-500 transition-colors"
                >
                  Message
                </button> */}

                {/* <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-700 underline"
                  onClick={(e) => e.preventDefault()}
                >
                  View profile
                </a> */}
              </div>
            </div>

            {/* Decorative accent */}
            <div className="pointer-events-none absolute top-0 right-0 transform translate-x-6 -translate-y-6">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle cx="48" cy="48" r="48" fill="url(#g)" opacity="0.06" />
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#34D399" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}