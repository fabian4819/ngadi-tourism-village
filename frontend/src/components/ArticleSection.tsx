import { twMerge } from 'tailwind-merge';

interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
}

const ArticleSection = () => {
  const responsiveClass = (base: string, md?: string, lg?: string) => {
    return twMerge(base, md && `md:${md}`, lg && `lg:${lg}`);
  };

  const articles: Article[] = [
    {
      id: 1,
      title: "Desa Ngadi Disiapkan Jadi Desa Wisata Nusantara",
      date: "10 Juni 2025",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Budaya Katong yang Lestari di Ohoi Ngadi",
      date: "8 Juni 2025",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Kuliner Laut Khas Kepulauan Kei",
      date: "5 Juni 2025",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section className={responsiveClass(
      "px-3 py-8", // mobile
      "px-5 py-12", // tablet
      "px-12 py-16" // desktop
    )}>
      <div className={responsiveClass(
        "flex flex-col gap-4 mb-6", // mobile
        "flex flex-col gap-6 mb-8", // tablet
        "flex flex-row justify-between items-end gap-8 mb-10" // desktop
      )}>
        <div>
          <h2 className={responsiveClass(
            "text-emerald-900 text-lg font-bold font-['Montserrat'] mb-2", // mobile
            "text-emerald-900 text-2xl font-bold font-['Montserrat'] mb-3", // tablet
            "text-emerald-900 text-3xl font-bold font-['Montserrat'] mb-4" // desktop
          )}>
            Carita Katong
          </h2>
          <p className={responsiveClass(
            "text-black text-sm font-normal font-['Albert_Sans'] leading-tight", // mobile
            "text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed", // tablet
            "text-black text-xl font-normal font-['Albert_Sans'] leading-relaxed" // desktop
          )}>
            Akses cerita dan artikel katong dibawah ini
          </p>
        </div>
        <button className={responsiveClass(
          "text-emerald-900 text-sm font-normal font-['Albert_Sans'] underline text-right", // mobile
          "text-emerald-900 text-base font-normal font-['Albert_Sans'] underline text-right", // tablet
          "text-emerald-900 text-lg font-normal font-['Albert_Sans'] underline text-right" // desktop
        )}>
          Klik disini untuk melihat lebih banyak
        </button>
      </div>

      {/* Articles Grid */}
      <div className={responsiveClass(
        "flex flex-col gap-4", // mobile
        "grid grid-cols-2 gap-6", // tablet
        "grid grid-cols-3 gap-8" // desktop
      )}>
        {articles.map((article) => (
          <article 
            key={article.id}
            className={responsiveClass(
              "bg-white rounded-lg border border-neutral-700/50 overflow-hidden", // mobile
              "bg-white rounded-xl border border-neutral-700/50 overflow-hidden", // tablet
              "bg-white rounded-2xl border border-neutral-700/50 overflow-hidden" // desktop
            )}
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
              "p-3", // mobile
              "p-4", // tablet
              "p-6" // desktop
            )}>
              <h3 className={responsiveClass(
                "text-stone-900 text-sm font-semibold font-['Albert_Sans'] mb-2", // mobile
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