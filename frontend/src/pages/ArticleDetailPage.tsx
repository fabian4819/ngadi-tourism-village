// src/pages/ArticleDetailPage.tsx
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { twMerge } from 'tailwind-merge';
import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint";
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '../lib/sanity';
import { postBySlugQuery } from '../lib/sanity.queries';
import type { Article } from '../types/sanity';
import type { 
  CustomPortableTextComponents, 
  PortableTextImageProps,
  PortableTextBlockComponentProps,
  PortableTextListItemComponentProps,
  PortableTextMarkProps,
  SimpleComponentProps,
  PortableTextListProps
} from '../types/portableText';

// Custom components for PortableText rendering with proper typing
const portableTextComponents: CustomPortableTextComponents = {
  types: {
    image: ({ value }: PortableTextImageProps) => (
      <div className="my-8">
        <img
          src={urlFor(value).width(800).height(600).url()}
          alt={value.alt || ''}
          className="w-full rounded-lg shadow-md"
        />
        {value.caption && (
          <p className="text-center text-sm text-gray-600 mt-2 italic">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }: PortableTextBlockComponentProps) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-emerald-900">{children}</h1>
    ),
    h2: ({ children }: PortableTextBlockComponentProps) => (
      <h2 className="text-2xl font-bold mt-6 mb-3 text-emerald-900">{children}</h2>
    ),
    h3: ({ children }: PortableTextBlockComponentProps) => (
      <h3 className="text-xl font-bold mt-4 mb-2 text-emerald-900">{children}</h3>
    ),
    normal: ({ children }: PortableTextBlockComponentProps) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: PortableTextBlockComponentProps) => (
      <blockquote className="border-l-4 border-emerald-900 pl-4 italic my-6 text-gray-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: PortableTextMarkProps) => (
      <a
        href={value?.href}
        className="text-emerald-900 underline hover:text-emerald-700 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }: SimpleComponentProps) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: SimpleComponentProps) => (
      <em className="italic">{children}</em>
    ),
  },
  list: {
    bullet: ({ children }: PortableTextListProps) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: PortableTextListProps) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: PortableTextListItemComponentProps) => <li className="mb-1">{children}</li>,
    number: ({ children }: PortableTextListItemComponentProps) => <li className="mb-1">{children}</li>,
  },
};

const ArticleDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const currentBreakpoint = useBreakpoint();
    const [article, setArticle] = useState<Article | null>(null);
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
        const fetchArticle = async () => {
            if (!slug) {
                setError('Article slug not found');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const data = await client.fetch(postBySlugQuery, { slug });
                
                if (!data) {
                    setError('Article not found');
                } else {
                    setArticle(data);
                }
            } catch (err) {
                console.error('Error fetching article:', err);
                setError('Failed to load article');
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [slug]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-emerald-900 text-xl">Loading article...</div>
                </main>
                <FooterSection />
            </div>
        );
    }

    if (error || !article) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Navbar />
                <main className="flex-grow px-12 py-16 text-center">
                    <h1 className="text-4xl font-bold text-red-500 mb-4">
                        {error || 'Artikel tidak ditemukan.'}
                    </h1>
                    <button
                        onClick={() => navigate('/artikel')}
                        className="mt-8 px-6 py-3 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition-colors"
                    >
                        Kembali ke Daftar Artikel
                    </button>
                </main>
                <FooterSection />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
            {/* Decorative Background Lines */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="w-[1285.43px] h-[679.83px] absolute left-[483.96px] top-[1892.99px] origin-top-left rotate-[-77.17deg] opacity-40 outline outline-1 outline-amber-300"></div>
            </div>

            <Navbar />
            <main className={twMerge(
                responsiveClass(
                    "flex-grow px-3 py-8",
                    "flex-grow px-5 py-12",
                    "flex-grow px-12 py-16"
                ),
                "relative z-10"
            )}>
                <div className={responsiveClass(
                    "px-3 flex flex-col gap-5",
                    "px-6 flex flex-col gap-5",
                    "px-6 flex flex-col gap-5"
                )}>
                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex justify-start items-center gap-1.5 text-emerald-900 text-base font-medium font-['Albert_Sans'] leading-tight hover:text-emerald-700 transition-colors"
                        aria-label="Kembali ke halaman sebelumnya"
                    >
                        <ArrowLeft className="w-4 h-4 text-emerald-900" />
                        Kembali
                    </button>

                    {/* Categories */}
                    {article.categories && article.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-2">
                            {article.categories.map((category, index) => (
                                <span
                                    key={index}
                                    className={responsiveClass(
                                        "px-3 py-1 bg-yellow-400 rounded-lg text-stone-900 text-sm font-medium font-['Albert_Sans']",
                                        "px-4 py-2 bg-yellow-400 rounded-lg text-stone-900 text-base font-medium font-['Albert_Sans']"
                                    )}
                                >
                                    {category.title}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Article Title */}
                    <h1 className={responsiveClass(
                        "w-full text-emerald-900 text-3xl font-bold font-['Montserrat']",
                        "w-full text-emerald-900 text-5xl font-bold font-['Montserrat']",
                        "w-[1180px] text-emerald-900 text-6xl font-bold font-['Montserrat']"
                    )}>
                        {article.title}
                    </h1>

                    {/* Author and Date */}
                    <div className="flex flex-col justify-start items-start gap-3.5">
                        <div className="inline-flex justify-start items-center gap-5">
                            <img 
                                className="w-14 h-14 rounded-full object-cover" 
                                src="https://placehold.co/57x57" 
                                alt="Author avatar" 
                            />
                            <div className="inline-flex flex-col justify-center items-start gap-0.5">
                                <p className="text-stone-900 text-base font-normal font-['Albert_Sans']">
                                    Dibuat oleh
                                </p>
                                <div className="inline-flex justify-start items-start gap-2.5">
                                    <p className="text-stone-900 text-xl font-normal font-['Albert_Sans']">
                                        {article.author.name}
                                    </p>
                                    <div className="w-6 h-0 origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-stone-900"></div>
                                    <p className="text-stone-900 text-xl font-normal font-['Albert_Sans']">
                                        {formatDate(article.publishedAt)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Article Image */}
                {article.mainImage && (
                    <div className={responsiveClass(
                        "w-full px-3 mt-12",
                        "w-full px-6 mt-12",
                        "w-full px-6 mt-12"
                    )}>
                        <img
                            className={responsiveClass(
                                "w-full h-auto rounded-3xl object-cover",
                                "w-full h-auto rounded-[35px] object-cover",
                                "w-[1232px] h-[507px] rounded-[35px] object-cover mx-auto"
                            )}
                            src={urlFor(article.mainImage).width(1232).height(507).url()}
                            alt={article.mainImage.alt || article.title}
                        />
                        {article.mainImage.caption && (
                            <p className="text-center text-sm text-gray-600 mt-4 italic">
                                {article.mainImage.caption}
                            </p>
                        )}
                    </div>
                )}

                {/* Article Content */}
                <div className={responsiveClass(
                    "px-3 mt-12",
                    "px-6 mt-12",
                    "px-6 mt-12"
                )}>
                    <div className={responsiveClass(
                        "w-full text-black text-base font-normal font-['Albert_Sans'] leading-relaxed",
                        "w-full text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed",
                        "w-[1180px] text-black text-xl font-normal font-['Albert_Sans'] leading-relaxed mx-auto"
                    )}>
                        {article.body && (
                            <PortableText 
                                value={article.body} 
                                components={portableTextComponents}
                            />
                        )}
                    </div>
                </div>

                {/* Related Articles or Back to Articles Link */}
                <div className={responsiveClass(
                    "px-3 mt-16",
                    "px-6 mt-16",
                    "px-6 mt-16"
                )}>
                    <div className="text-center">
                        <button
                            onClick={() => navigate('/artikel')}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition-colors font-medium"
                        >
                            Lihat Artikel Lainnya
                        </button>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    );
};

export default ArticleDetailPage;