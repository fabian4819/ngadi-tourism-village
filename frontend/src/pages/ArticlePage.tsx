// src/pages/ArticlesPage.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { twMerge } from 'tailwind-merge';
import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint";
import { Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../lib/sanity';
import { postsQuery } from '../lib/sanity.queries';
import type { Article } from '../types/sanity';

const ITEMS_PER_PAGE = 6;

const ArticlesPage: React.FC = () => {
    const currentBreakpoint = useBreakpoint();
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [articles, setArticles] = useState<Article[]>([]);
    const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
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

    // Fetch articles from Sanity
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setLoading(true);
                const data = await client.fetch(postsQuery);
                setArticles(data);
                setFilteredArticles(data);
            } catch (err) {
                console.error('Error fetching articles:', err);
                setError('Failed to load articles');
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    // Filter articles based on search
    useEffect(() => {
        const filtered = articles.filter(article =>
            article.title.toLowerCase().includes(search.toLowerCase()) ||
            article.author.name.toLowerCase().includes(search.toLowerCase()) ||
            (article.categories && article.categories.some(cat => 
                cat.title.toLowerCase().includes(search.toLowerCase())
            ))
        );
        setFilteredArticles(filtered);
        setCurrentPage(1); // Reset to first page when search changes
    }, [search, articles]);

    const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
    const paginatedArticles = filteredArticles.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPageNumbersToShow = 7;
        const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
        const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className="inline-flex flex-col justify-center items-center gap-2"
                    aria-label={`Go to page ${i}`}
                >
                    <div
                        className={twMerge(
                            "text-center justify-start text-sm font-normal font-['Lato']",
                            i === currentPage ? "text-emerald-900" : "text-stone-900"
                        )}
                    >
                        {i}
                    </div>
                    <div
                        className={twMerge(
                            "w-8 h-1",
                            i === currentPage ? "bg-emerald-900" : "opacity-0 bg-stone-900"
                        )}
                    ></div>
                </button>
            );
        }
        return pageNumbers;
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-emerald-900 text-xl">Loading articles...</div>
                </main>
                <FooterSection />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-red-500 text-xl">{error}</div>
                </main>
                <FooterSection />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
            <Navbar />
            <main className={twMerge(
                responsiveClass(
                    "flex-grow px-3 py-8",
                    "flex-grow px-5 py-12",
                    "flex-grow px-12 py-16"
                ),
                "relative z-10"
            )}>
                {/* Header Section */}
                <div className="flex flex-col items-center gap-3.5 mb-16">
                    <h1 className={responsiveClass(
                        "text-emerald-900 text-3xl font-normal text-center",
                        "text-emerald-900 text-5xl font-normal text-center",
                        "text-emerald-900 text-6xl font-normal text-center"
                    )}>
                        <span className="font-['Cormorant']">T</span>
                        <span className="font-['Vivaldi'] -ml-1">elisik cerita katong</span>
                    </h1>
                    <p className={responsiveClass(
                        "w-full text-center text-black text-sm font-normal font-['Albert_Sans'] leading-tight",
                        "w-full text-center text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed",
                        "w-[1056px] text-center text-black text-2xl font-normal font-['Albert_Sans'] leading-relaxed"
                    )}>
                        Temukan kisah, sejarah, dan kehidupan sehari-hari dari masyarakat adat kami.<br />Setiap artikel adalah potongan cerita yang menyatukan masa lalu dan masa kini!
                    </p>
                </div>

                {/* Search Bar */}
                <div
                    className={twMerge(
                        responsiveClass(
                            "w-full rounded-[100px] border border-emerald-900 flex items-center bg-white shadow-md mb-11",
                            "w-full rounded-[100px] border border-emerald-900 flex items-center bg-white shadow-lg mb-11",
                            "w-[1180px] rounded-[100px] border border-emerald-900 flex items-center bg-white shadow-lg mb-11"
                        ),
                        "mx-auto px-4 py-2"
                    )}
                    style={{
                        background: 'white',
                        position: 'relative',
                        overflow: 'visible',
                    }}
                >
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Cari Artikel yang ingin kamu baca"
                        className={responsiveClass(
                            "flex-1 text-stone-900 text-base font-normal font-['Albert_Sans'] bg-transparent border-none focus:outline-none px-2",
                            "flex-1 text-stone-900 text-xl font-normal font-['Albert_Sans'] bg-transparent border-none focus:outline-none px-2",
                            "flex-1 text-stone-900 text-3xl font-normal font-['Albert_Sans'] bg-transparent border-none focus:outline-none px-2"
                        )}
                        style={{ minHeight: '48px' }}
                    />
                    <button
                        className="flex items-center justify-center bg-emerald-900 rounded-full w-10 h-10 mr-2 hover:bg-emerald-800 transition"
                        aria-label="Search articles"
                        type="button"
                        tabIndex={0}
                        style={{
                            boxShadow: '0 2px 8px 0 rgba(20,83,45,0.10)',
                            border: '2px solid #14532d'
                        }}
                    >
                        <Search className={responsiveClass("w-5 h-5", "w-6 h-6", "w-7 h-7") + " text-white"} />
                    </button>
                </div>

                {/* Articles Grid */}
                <div className={responsiveClass(
                    "grid grid-cols-1 gap-6",
                    "grid grid-cols-2 gap-7",
                    "grid grid-cols-3 gap-7"
                )}>
                    {paginatedArticles.length > 0 ? (
                        paginatedArticles.map((article) => (
                            <Link
                                to={`/artikel/${article.slug.current}`}
                                key={article._id}
                                className={twMerge(
                                    responsiveClass(
                                        "w-full bg-white rounded-xl outline outline-1 outline-neutral-700/50 flex flex-col overflow-hidden",
                                        "w-full bg-white rounded-2xl outline outline-1 outline-neutral-700/50 flex flex-col overflow-hidden",
                                        "w-full bg-white rounded-[20px] outline outline-1 outline-neutral-700/50 flex flex-col overflow-hidden"
                                    ),
                                    "shadow-[0_4px_9px_0_rgba(0,0,0,0.10),0_16px_16px_0_rgba(0,0,0,0.09),0_35px_21px_0_rgba(0,0,0,0.05),0_63px_25px_0_rgba(0,0,0,0.01),0_98px_27px_0_rgba(0,0,0,0.00)] outline-emerald-900 hover:shadow-lg transition-shadow"
                                )}
                            >
                                {article.mainImage ? (
                                    <img
                                        src={urlFor(article.mainImage).width(600).height(400).url()}
                                        alt={article.mainImage.alt || article.title}
                                        className={responsiveClass(
                                            "w-full h-40 object-cover rounded-t-xl",
                                            "w-full h-48 object-cover rounded-t-2xl",
                                            "w-full h-60 object-cover rounded-tl-[10px] rounded-tr-[10px]"
                                        )}
                                    />
                                ) : (
                                    <div className={responsiveClass(
                                        "w-full h-40 bg-gray-200 flex items-center justify-center rounded-t-xl",
                                        "w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-2xl",
                                        "w-full h-60 bg-gray-200 flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px]"
                                    )}>
                                        <span className="text-gray-500">No Image</span>
                                    </div>
                                )}
                                <div className={responsiveClass(
                                    "p-4 flex flex-col gap-2",
                                    "p-5 flex flex-col gap-2",
                                    "px-5 py-6 flex flex-col gap-2"
                                )}>
                                    <h3 className={twMerge(
                                        responsiveClass(
                                            "text-stone-900 text-lg font-semibold font-['Albert_Sans'] leading-tight",
                                            "text-stone-900 text-xl font-semibold font-['Albert_Sans'] leading-snug",
                                            "text-stone-900 text-2xl font-semibold font-['Albert_Sans'] leading-snug"
                                        ),
                                        "min-h-[3.5rem]"
                                    )}>
                                        {article.title}
                                    </h3>
                                    <div className={responsiveClass(
                                        "text-stone-900 text-xs font-normal font-['Albert_Sans']",
                                        "text-stone-900 text-sm font-normal font-['Albert_Sans']",
                                        "text-stone-900 text-base font-normal font-['Albert_Sans']"
                                    )}>
                                        {formatDate(article.publishedAt)} • Oleh {article.author.name}
                                    </div>
                                    {article.categories && article.categories.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {article.categories.slice(0, 3).map((category, tagIndex) => (
                                                <span
                                                    key={tagIndex}
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
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16">
                            <p className={responsiveClass(
                                "text-gray-500 text-lg",
                                "text-xl",
                                "text-2xl"
                            )}>
                                {search.length > 0 
                                    ? "Tidak ada artikel yang cocok dengan pencarian Anda."
                                    : "Tidak ada artikel yang ditemukan."
                                }
                            </p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-16 select-none">
                        <button
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                            className={twMerge(
                                "rounded-full p-2 border border-emerald-900 bg-white transition hover:bg-emerald-50 flex items-center justify-center",
                                currentPage === 1 && "opacity-40 cursor-not-allowed"
                            )}
                            aria-label="Go to first page"
                        >
                            <ChevronsLeft className={responsiveClass("w-5 h-5", "w-7 h-7") + " text-emerald-900"} />
                        </button>
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className={twMerge(
                                "rounded-full p-2 border border-emerald-900 bg-white transition hover:bg-emerald-50 flex items-center justify-center",
                                currentPage === 1 && "opacity-40 cursor-not-allowed"
                            )}
                            aria-label="Go to previous page"
                        >
                            <ChevronLeft className={responsiveClass("w-5 h-5", "w-7 h-7") + " text-emerald-900"} />
                        </button>

                        <div className="flex gap-1">
                            {renderPageNumbers()}
                        </div>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                            className={twMerge(
                                "rounded-full p-2 border border-emerald-900 bg-white transition hover:bg-emerald-50 flex items-center justify-center",
                                currentPage === totalPages && "opacity-40 cursor-not-allowed"
                            )}
                            aria-label="Go to next page"
                        >
                            <ChevronRight className={responsiveClass("w-5 h-5", "w-7 h-7") + " text-emerald-900"} />
                        </button>
                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            disabled={currentPage === totalPages}
                            className={twMerge(
                                "rounded-full p-2 border border-emerald-900 bg-white transition hover:bg-emerald-50 flex items-center justify-center",
                                currentPage === totalPages && "opacity-40 cursor-not-allowed"
                            )}
                            aria-label="Go to last page"
                        >
                            <ChevronsRight className={responsiveClass("w-5 h-5", "w-7 h-7") + " text-emerald-900"} />
                        </button>
                    </div>
                )}
            </main>
            <FooterSection />
        </div>
    );
};

export default ArticlesPage;