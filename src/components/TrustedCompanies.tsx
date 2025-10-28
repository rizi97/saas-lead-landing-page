import React from "react";
import logoImg1 from "../assets/foystermedia-logo.jpg";
import logoImg2 from "../assets/rushlanguage.png";
import logoImg3 from "../assets/leadtech-logo.png";
import logoImg4 from "../assets/gritdaily.png";
import logoImg5 from "../assets/citrusbits.svg";
import logoImg6 from "../assets/azorganic.svg";
import logoImg7 from "../assets/thecarousel.webp";

export default function BuildWithUs({
  title = "Talent Trusted By Companies",
  subtitle = "Our team has experience working with several renowned organisations",
  logos = [
    { src: logoImg1, alt: "foystermedia" },
    { src: logoImg2, alt: "rushlanguage" },
    { src: logoImg3, alt: "leadtech" },
    { src: logoImg4, alt: "gritdaily" },
    { src: logoImg5, alt: "citrusbits" },
    { src: logoImg6, alt: "azorganic" },
    { src: logoImg7, alt: "thecarousel" },
  ],
  showMarquee = true,
}) {
  return (
    <>
    <section className="py-12 px-6 dark:bg-slate-900" id="companies">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            {title}
          </h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>

    <section className="py-12 px-6 pt-[0.5rem] bg-white">
        {showMarquee && (
          <div className="mt-10 overflow-hidden relative">
            <div className="flex whitespace-nowrap w-max animate-marquee-smooth">
              {[...Array(2)].map((_, loopIndex) => (
                <div key={loopIndex} className="flex">
                  {logos.map((logo, idx) => (
                    <a
                      key={`${loopIndex}-${idx}`}
                      href={logo.href || "#"}
                      target={logo.href ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-6"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt || `logo ${idx + 1}`}
                        className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition duration-200"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

      <style>{`
        @keyframes marquee-smooth {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee-smooth {
          animation: marquee-smooth 60s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-smooth {
            animation: none;
          }
        }
      `}</style>
    </section>
    </>
  );
}
