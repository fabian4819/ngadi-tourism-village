// src/components/ArticleSection.tsx
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom'; // Import Link
import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint"; // Import these for responsiveClass

interface ArticleSectionProps {
  className?: string;
}

interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
}

const ArticleSection = ({ className = "" }: ArticleSectionProps) => {
  const currentBreakpoint = useBreakpoint(); // Get the current breakpoint

  const responsiveClass = (
    mobile: string,
    tablet?: string,
    desktop?: string
  ) => {
    const values = {
      mobile,
      tablet,
      desktop,
    };
    return twMerge(getResponsiveValue(values, currentBreakpoint) || mobile);
  };

  const articles: Article[] = [
    {
      id: 1,
      title: "Desa Ngadi Disiapkan Jadi Desa Wisata Nusantara",
      date: "10 Juni 2025",
      image: "/images/image-template.png"
    },
    {
      id: 2,
      title: "Desa Ngadi Disiapkan Jadi Desa Wisata Nusantara",
      date: "10 Juni 2025",
      image: "/images/image-template.png"
    },
    {
      id: 3,
      title: "Desa Ngadi Disiapkan Jadi Desa Wisata Nusantara",
      date: "10 Juni 2025",
      image: "/images/image-template.png"
    }
  ];

  return (
    <section className={twMerge(className, responsiveClass(
      "px-3 py-8", // mobile
      "px-5 py-12", // tablet
      "px-12 py-16" // desktop
    )
    )}>
      <div className={responsiveClass(
        "flex flex-col gap-4 mb-6", // mobile
        "flex flex-col gap-6 mb-8", // tablet
        "flex flex-row justify-between items-end gap-8 mb-10" // desktop
      )}>
        <div>
          <h2 className={responsiveClass(
            "text-emerald-900 text-lg font-bold italic font-['Montserrat'] mb-2", // mobile
            "text-emerald-900 text-2xl font-bold italic font-['Montserrat'] mb-3", // tablet
            "text-emerald-900 text-4xl font-bold italic font-['Montserrat'] mb-4" // desktop
          )}>
            Carita Katong
          </h2>
          <p className={responsiveClass(
            "text-black text-sm font-normal font-['Albert_Sans'] leading-tight", // mobile
            "text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed", // tablet
            "text-black text-3xl font-normal font-['Albert_Sans'] leading-relaxed" // desktop
          )}>
            Akses cerita dan artikel katong dibawah ini
          </p>
        </div>
        {/* Changed to Link */}
        <Link
          to="/artikel" // Link to the new articles page
          className={responsiveClass(
            "text-emerald-900 text-xs font-normal font-['Albert_Sans'] text-right underline decoration-emerald-900 hover:text-emerald-700", // mobile
            "text-emerald-900 text-base font-normal font-['Albert_Sans'] text-right underline decoration-emerald-900 hover:text-emerald-700", // tablet
            "text-emerald-900 text-lg font-normal font-['Albert_Sans'] text-right underline decoration-emerald-900 hover:text-emerald-700" // desktop
          )}
          style={{ marginTop: 0 }}
        >
          Klik disini untuk melihat lebih banyak
        </Link>
      </div>

      {/* Articles Grid */}
      <div className={responsiveClass(
        "flex flex-row gap-4 overflow-x-auto pb-2", // mobile: horizontal scroll
        "grid grid-cols-2 gap-6", // tablet: grid
        "grid grid-cols-3 gap-8" // desktop: grid
      )}>
        {articles.map((article) => ( // Corrected map syntax here
          <article
            key={article.id}
            className={responsiveClass(
              "bg-white rounded-xl shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] border border-neutral-200 overflow-hidden min-w-[260px] max-w-xs", // mobile: card min width
              "bg-white rounded-2xl shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] border border-neutral-200 overflow-hidden", // tablet
              "bg-white rounded-2xl shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] border border-neutral-200 overflow-hidden" // desktop
            )}
            style={{ minHeight: "320px" }}
          >
            <img
              src={article.image}
              alt={article.title}
              className={responsiveClass(
                "w-full h-32 object-cover", // mobile
                "w-full h-40 object-cover", // tablet
                "w-full h-48 object-cover" // desktop
              )}
            />
            <div className={responsiveClass(
              "p-4", // mobile
              "p-5", // tablet
              "p-6" // desktop
            )}>
              <h3 className={responsiveClass(
                "text-stone-900 text-base font-semibold font-['Albert_Sans'] mb-2", // mobile
                "text-stone-900 text-lg font-semibold font-['Albert_Sans'] mb-3", // tablet
                "text-stone-900 text-xl font-semibold font-['Albert_Sans'] mb-4" // desktop
              )}>
                {article.title}
              </h3>
              <time className={responsiveClass(
                "text-stone-900 text-xs font-normal font-['Albert_Sans']", // mobile
                "text-stone-900 text-sm font-normal font-['Albert_Sans']", // tablet
                "text-stone-900 text-base font-normal font-['Albert_Sans']" // desktop
              )}>
                {article.date}
              </time>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;