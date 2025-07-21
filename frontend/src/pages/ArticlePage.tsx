import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { twMerge } from 'tailwind-merge';
import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint";
import { Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link for clickable cards

interface Article {
    id: number;
    title: string;
    date: string;
    image: string;
    tags: string[];
    fullContent?: string; // Optional, only needed for detail page
}

const ALL_ARTICLES: Article[] = [
    {
        id: 1,
        title: "Desa Ngadi Disiapkan Jadi Desa Wisata Nusantara",
        date: "10 Juni 2025",
        image: "/images/image-template.png",
        tags: ["Wisata", "UMKM", "Pemerintah"]
    },
    {
        id: 2,
        title: "Desa Dullah Disiapkan Jadi Desa Wisata Nusantara",
        date: "10 Juni 2025",
        image: "/images/image-template.png",
        tags: ["Wisata", "UMKM", "Pemerintah"]
    },
    {
        id: 3,
        title: "Desa Labetawi Disiapkan Jadi Desa Wisata Nusantara",
        date: "10 Juni 2025",
        image: "/images/image-template.png",
        tags: ["Wisata", "UMKM", "Pemerintah"]
    },
    {
        id: 4,
        title: "Desa Labetawi Disiapkan Jadi Desa Wisata Nusantara",
        date: "10 Juni 2025",
        image: "/images/image-template.png",
        tags: ["Wisata", "UMKM", "Pemerintah"]
    },
    {
        id: 5,
        title: "Desa Ngadi Disiapkan Jadi Desa Wisata Nusantara",
        date: "10 Juni 2025",
        image: "/images/image-template.png",
        tags: ["Wisata", "UMKM", "Pemerintah"]
    },
    {
        id: 6,
        title: "Desa Dullah Disiapkan Jadi Desa Wisata Nusantara",
        date: "10 Juni 2025",
        image: "/images/image-template.png",
        tags: ["Wisata", "UMKM", "Pemerintah"]
    },
    // Add more articles to test pagination and filtering
    { id: 7, title: "Budaya Tarian Tradisional", date: "15 Juli 2025", image: "/images/image-template.png", tags: ["Budaya", "Wisata"] },
    { id: 8, title: "Pemberdayaan UMKM Lokal", date: "20 Juli 2025", image: "/images/image-template.png", tags: ["UMKM", "Ekonomi"] },
    { id: 9, title: "Inovasi Pertanian Desa", date: "25 Juli 2025", image: "/images/image-template.png", tags: ["Pemerintah", "Lingkungan"] },
    { id: 10, title: "Festival Laut Tahunan", date: "01 Agustus 2025", image: "/images/image-template.png", tags: ["Wisata", "Budaya"] },
];

const ITEMS_PER_PAGE = 6; // As per the Figma design showing 6 articles per page

const ArticlesPage: React.FC = () => {
    const currentBreakpoint = useBreakpoint();
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    // Filter articles based on search input
    const filteredArticles = ALL_ARTICLES.filter(article =>
        article.title.toLowerCase().includes(search.toLowerCase())
    );

    // Calculate total pages based on filtered articles
    const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);

    // Slice filtered articles for current page
    const paginatedArticles = filteredArticles.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

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

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPageNumbersToShow = 7; // As per Figma
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

    return (
        <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
        

            <Navbar />
            <main className={twMerge(
                responsiveClass(
                    "flex-grow px-3 py-8", // mobile
                    "flex-grow px-5 py-12", // tablet
                    "flex-grow px-12 py-16" // desktop
                ),
                "relative z-10" // Ensure main content is above background lines
            )}>
                {/* Header Section */}
                <div className="flex flex-col items-center gap-3.5 mb-16">
                    <h1 className={responsiveClass(
                        "text-emerald-900 text-3xl font-normal text-center", // mobile
                        "text-emerald-900 text-5xl font-normal text-center", // tablet
                        "text-emerald-900 text-6xl font-normal text-center" // desktop
                    )}>
                        <span className="font-['Cormorant']">T</span>
                        <span className="font-['Vivaldi'] -ml-1">elisik cerita katong</span>
                    </h1>
                    <p className={responsiveClass(
                        "w-full text-center text-black text-sm font-normal font-['Albert_Sans'] leading-tight", // mobile
                        "w-full text-center text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed", // tablet
                        "w-[1056px] text-center text-black text-2xl font-normal font-['Albert_Sans'] leading-relaxed" // desktop
                    )}>
                        Temukan kisah, sejarah, dan kehidupan sehari-hari dari masyarakat adat kami.<br />Setiap artikel adalah potongan cerita yang menyatukan masa lalu dan masa kini!
                    </p>
                </div>

                {/* Search Bar */}
                <div
                    className={twMerge(
                        responsiveClass(
                            "w-full rounded-[100px] border border-emerald-900 flex items-center bg-white shadow-md mb-11", // mobile
                            "w-full rounded-[100px] border border-emerald-900 flex items-center bg-white shadow-lg mb-11", // tablet
                            "w-[1180px] rounded-[100px] border border-emerald-900 flex items-center bg-white shadow-lg mb-11" // desktop
                        ),
                        "mx-auto px-4 py-2" // Ensures consistent padding and centering
                    )}
                    style={{
                        background: "white", // Explicitly set background
                        position: "relative", // Needed for potential custom styling or z-index context
                        overflow: "visible", // Allows shadows to extend outside bounds
                    }}
                >
                    <input
                        type="text"
                        value={search}
                        onChange={e => {
                            setSearch(e.target.value);
                            setCurrentPage(1); // Reset to first page on search input change
                        }}
                        placeholder="Cari Artikel yang ingin kamu baca"
                        className={responsiveClass(
                            "flex-1 text-stone-900 text-base font-normal font-['Albert_Sans'] bg-transparent border-none focus:outline-none px-2", // mobile
                            "flex-1 text-stone-900 text-xl font-normal font-['Albert_Sans'] bg-transparent border-none focus:outline-none px-2", // tablet
                            "flex-1 text-stone-900 text-3xl font-normal font-['Albert_Sans'] bg-transparent border-none focus:outline-none px-2" // desktop
                        )}
                        style={{ minHeight: 48 }} // Ensures consistent height regardless of content
                    />
                    <button
                        className="flex items-center justify-center bg-emerald-900 rounded-full w-10 h-10 mr-2 hover:bg-emerald-800 transition"
                        aria-label="Search articles"
                        type="button"
                        tabIndex={0} // Ensure button is reachable by tab key
                        onClick={() => setCurrentPage(1)} // Reset to first page on search button click
                        style={{
                            boxShadow: "0 2px 8px 0 rgba(20,83,45,0.10)", // Specific shadow from Figma
                            border: "2px solid #14532d" // Specific border from Figma
                        }}
                    >
                        <Search className={responsiveClass("w-5 h-5", "w-6 h-6", "w-7 h-7") + " text-white"} />
                    </button>
                </div>

                {/* Articles Grid */}
                <div className={responsiveClass(
                    "grid grid-cols-1 gap-6", // mobile: single column
                    "grid grid-cols-2 gap-7", // tablet: two columns
                    "grid grid-cols-3 gap-7" // desktop: three columns
                )}>
                    {paginatedArticles.length > 0 ? (
                        paginatedArticles.map((article) => (
                            <Link // Each card is now a link to its detail page
                                to={`/artikel/${article.id}`}
                                key={article.id}
                                className={twMerge(
                                    responsiveClass(
                                        "w-full bg-white rounded-xl outline outline-1 outline-neutral-700/50 flex flex-col overflow-hidden", // mobile
                                        "w-full bg-white rounded-2xl outline outline-1 outline-neutral-700/50 flex flex-col overflow-hidden", // tablet
                                        "w-full bg-white rounded-[20px] outline outline-1 outline-neutral-700/50 flex flex-col overflow-hidden" // desktop
                                    ),
                                    // Apply the full shadow and emerald-900 outline to ALL cards
                                    "shadow-[0_4px_9px_0_rgba(0,0,0,0.10),0_16px_16px_0_rgba(0,0,0,0.09),0_35px_21px_0_rgba(0,0,0,0.05),0_63px_25px_0_rgba(0,0,0,0.01),0_98px_27px_0_rgba(0,0,0,0.00)] outline-emerald-900"
                                )}
                            >
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className={responsiveClass(
                                        "w-full h-40 object-cover rounded-t-xl", // mobile
                                        "w-full h-48 object-cover rounded-t-2xl", // tablet
                                        "w-full h-60 object-cover rounded-tl-[10px] rounded-tr-[10px]" // desktop
                                    )}
                                />
                                <div className={responsiveClass(
                                    "p-4 flex flex-col gap-2", // mobile
                                    "p-5 flex flex-col gap-2", // tablet
                                    "px-5 py-6 flex flex-col gap-2" // desktop
                                )}>
                                    <h3 className={twMerge(
                                        responsiveClass(
                                            "text-stone-900 text-lg font-semibold font-['Albert_Sans'] leading-tight", // mobile
                                            "text-stone-900 text-xl font-semibold font-['Albert_Sans'] leading-snug", // tablet
                                            "text-stone-900 text-2xl font-semibold font-['Albert_Sans'] leading-snug" // desktop
                                        ),
                                        "min-h-[3.5rem]" // Ensures consistent height for title, adjust as needed
                                    )}>
                                        {article.title}
                                    </h3>
                                    <div className={responsiveClass(
                                        "text-stone-900 text-xs font-normal font-['Albert_Sans']", // mobile
                                        "text-stone-900 text-sm font-normal font-['Albert_Sans']", // tablet
                                        "text-stone-900 text-base font-normal font-['Albert_Sans']" // desktop
                                    )}>
                                        {article.date}
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {article.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className={responsiveClass(
                                                    "px-2 py-1 bg-yellow-400 rounded-lg text-stone-900 text-xs font-medium font-['Albert_Sans']",
                                                    "px-3 py-1.5 bg-yellow-400 rounded-lg text-stone-900 text-sm font-medium font-['Albert_Sans']"
                                                )}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className={responsiveClass("col-span-1 md:col-span-2 lg:col-span-3 text-center text-gray-500 text-lg", "text-xl", "text-2xl")}>
                            Tidak ada artikel yang ditemukan.
                        </p>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 0 && ( // Only show pagination if there are articles
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
                {/* Message if no articles are found after filtering */}
                {filteredArticles.length === 0 && search.length > 0 && (
                    <p className={twMerge(responsiveClass("text-center text-gray-500 text-lg", "text-xl", "text-2xl"), "mt-8")}>
                        Tidak ada artikel yang cocok dengan pencarian Anda.
                    </p>
                )}
            </main>
            <FooterSection />
        </div>
    );
};

export default ArticlesPage;