// src/components/ArticleSection.tsx
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';
import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint";
import { client, urlFor } from '../lib/sanity';
import { postsQuery } from '../lib/sanity.queries';
import type { Article } from '../types/sanity';

interface ArticleSectionProps {
  className?: string;
}

const ArticleSection = ({ className = "" }: ArticleSectionProps) => {
  const currentBreakpoint = useBreakpoint();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(postsQuery);
        // Ambil hanya 3 artikel terbaru untuk section ini
        setArticles(data.slice(0, 3));
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to load articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  if (loading) {
    return (
      <section className={twMerge(className, responsiveClass(
        "px-3 py-8",
        "px-5 py-12",
        "px-12 py-16"
      ))}>
        <div className="flex justify-center items-center h-64">
          <div className="text-emerald-900">Loading articles...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={twMerge(className, responsiveClass(
        "px-3 py-8",
        "px-5 py-12",
        "px-12 py-16"
      ))}>
        <div className="flex justify-center items-center h-64">
          <div className="text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className={twMerge(className, responsiveClass(
      "px-3 py-8",
      "px-5 py-12",
      "px-12 py-16"
    ))}>
      <div className={responsiveClass(
        "flex flex-col gap-4 mb-6",
        "flex flex-col gap-6 mb-8",
        "flex flex-row justify-between items-end gap-8 mb-10"
      )}>
        <div>
          <h2 className={responsiveClass(
            "text-emerald-900 text-lg font-bold italic font-['Montserrat'] mb-2",
            "text-emerald-900 text-2xl font-bold italic font-['Montserrat'] mb-3",
            "text-emerald-900 text-4xl font-bold italic font-['Montserrat'] mb-4"
          )}>
            Carita Katong
          </h2>
          <p className={responsiveClass(
            "text-black text-sm font-normal font-['Albert_Sans'] leading-tight",
            "text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed",
            "text-black text-3xl font-normal font-['Albert_Sans'] leading-relaxed"
          )}>
            Akses cerita dan artikel katong dibawah ini
          </p>
        </div>
        <Link
          to="/artikel"
          className={responsiveClass(
            "text-emerald-900 text-xs font-normal font-['Albert_Sans'] text-right underline decoration-emerald-900 hover:text-emerald-700",
            "text-emerald-900 text-base font-normal font-['Albert_Sans'] text-right underline decoration-emerald-900 hover:text-emerald-700",
            "text-emerald-900 text-lg font-normal font-['Albert_Sans'] text-right underline decoration-emerald-900 hover:text-emerald-700"
          )}
          style={{ marginTop: '0px' }}
        >
          Klik disini untuk melihat lebih banyak
        </Link>
      </div>

      {/* Articles Grid */}
      <div className={responsiveClass(
        "flex flex-row gap-4 overflow-x-auto pb-2",
        "grid grid-cols-2 gap-6",
        "grid grid-cols-3 gap-8"
      )}>
        {articles.map((article) => (
          <article
            key={article._id}
            className={responsiveClass(
              "bg-white rounded-xl shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] border border-neutral-200 overflow-hidden min-w-[260px] max-w-xs",
              "bg-white rounded-2xl shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] border border-neutral-200 overflow-hidden",
              "bg-white rounded-2xl shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] border border-neutral-200 overflow-hidden"
            )}
            style={{ minHeight: '320px' }}
          >
            <Link 
              to={`/artikel/${article.slug.current}`}
              className={responsiveClass(
                "block",
                "block", 
                "block"
              )}
            >
              {article.mainImage ? (
                <img
                  src={urlFor(article.mainImage).width(400).height(200).url()}
                  alt={article.mainImage.alt || article.title}
                  className={responsiveClass(
                    "w-full h-32 object-cover",
                    "w-full h-40 object-cover",
                    "w-full h-48 object-cover"
                  )}
                />
              ) : (
                <div className={responsiveClass(
                  "w-full h-32 bg-gray-200 flex items-center justify-center",
                  "w-full h-40 bg-gray-200 flex items-center justify-center",
                  "w-full h-48 bg-gray-200 flex items-center justify-center"
                )}>
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              <div className={responsiveClass(
                "p-4",
                "p-5",
                "p-6"
              )}>
                <h3 className={responsiveClass(
                  "text-stone-900 text-base font-semibold font-['Albert_Sans'] mb-2",
                  "text-stone-900 text-lg font-semibold font-['Albert_Sans'] mb-3",
                  "text-stone-900 text-xl font-semibold font-['Albert_Sans'] mb-4"
                )}>
                  {article.title}
                </h3>
                <div className="flex flex-col gap-1">
                  <time className={responsiveClass(
                    "text-stone-900 text-xs font-normal font-['Albert_Sans']",
                    "text-stone-900 text-sm font-normal font-['Albert_Sans']",
                    "text-stone-900 text-base font-normal font-['Albert_Sans']"
                  )}>
                    {formatDate(article.publishedAt)}
                  </time>
                  <div className={responsiveClass(
                    "text-stone-600 text-xs font-normal font-['Albert_Sans']",
                    "text-stone-600 text-sm font-normal font-['Albert_Sans']",
                    "text-stone-600 text-base font-normal font-['Albert_Sans']"
                  )}>
                    Oleh {article.author.name}
                  </div>
                </div>
                {article.categories && article.categories.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {article.categories.slice(0, 2).map((category, index) => (
                      <span
                        key={index}
                        className={responsiveClass(
                          "px-2 py-1 bg-yellow-400 rounded-lg text-stone-900 text-xs font-medium font-['Albert_Sans']",
                          "px-3 py-1.5 bg-yellow-400 rounded-lg text-stone-900 text-sm font-medium font-['Albert_Sans']"
                        )}
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;