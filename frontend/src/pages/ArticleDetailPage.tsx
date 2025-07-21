// src/pages/ArticleDetailPage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { twMerge } from 'tailwind-merge';
import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint";
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Import the back arrow icon

// Re-using the Article interface and ALL_ARTICLES from ArticlesPage for consistency
interface Article {
    id: number;
    title: string;
    date: string;
    image: string;
    tags: string[];
    // Add a fullContent property for the detailed page
    fullContent: string;
}

const ALL_ARTICLES_WITH_CONTENT: Article[] = [
    {
        id: 1,
        title: "Desa Ngadi Disiapkan Jadi Desa Wisata Nusantara",
        date: "10 Juni 2025",
        image: "/images/image-template.png", // Main article image
        tags: ["Wisata", "UMKM", "Pemerintah"],
        fullContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper eu nibh et sodales. Cras ut ultricies turpis, nec imperdiet turpis. Fusce metus velit, vulputate nec imperdiet semper, feugiat id dolor. Vestibulum imperdiet, elit in elementum sagittis, nulla velit commodo nibh, sed imperdiet mauris tortor et tellus. Sed eu nibh vel dolor lobortis semper vitae non dui. Etiam vehicula odio ac est auctor, at tempor risus euismod. Donec rutrum purus et porta fringilla. Ut fermentum libero sed lorem eleifend, a ultricies nulla sagittis. Duis feugiat ex ex, a dignissim lacus aliquet vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam blandit lacus et lobortis varius.

Morbi leo dui, congue et sodales non, luctus vitae nibh. Nam diam risus, malesuada non rhoncus sit amet, imperdiet tincidunt leo. Curabitur a magna nulla. Nam consequat elit at sem feugiat, nec laoreet ante fermentum. Phasellus semper, ex ultrices mollis gravida, lorem mi tempus mi, et congue quam elit non eros. Morbi tristique fermentum enim, eu porta mi pretium vitae. Nam ante sapien, vehicula id sem non, interdum vehicula diam. Nam mattis aliquam mauris, ac tempor nunc malesuada vitae. Mauris ultricies vulputate massa ac aliquet. Aenean vitae pellentesque erat. Duis at justo sed justo porttitor auctor.

Proin vel libero justo. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec ac magna at quam dignissim mollis. Phasellus consectetur dolor et nunc aliquet, sit amet iaculis est volutpat. Sed interdum velit vitae nulla tincidunt, sit amet efficitur urna vestibulum. Mauris vitae libero quis sapien convallis euismod. Donec id metus in est varius eleifend. Aliquam erat volutpat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
        id: 2,
        title: "Desa Dullah Disiapkan Jadi Desa Wisata Nusantara",
        date: "10 Juni 2025",
        image: "/images/image-template.png",
        tags: ["Wisata", "UMKM", "Pemerintah"],
        fullContent: `Ini adalah konten lengkap untuk Artikel Desa Dullah. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    // Add fullContent to other articles if needed for detail view, or fetch dynamically
    {
        id: 3,
        title: "Desa Labetawi Disiapkan Jadi Desa Wisata Nusantara",
        date: "10 Juni 2025",
        image: "/images/image-template.png",
        tags: ["Wisata", "UMKM", "Pemerintah"],
        fullContent: `Ini adalah konten lengkap untuk Artikel Desa Labetawi. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
    },
];

const ArticleDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get article ID from URL params
    const navigate = useNavigate(); // Hook for navigation
    const currentBreakpoint = useBreakpoint();

    // Find the article based on the ID from the URL
    const article = ALL_ARTICLES_WITH_CONTENT.find(art => art.id === Number(id));

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

    if (!article) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Navbar />
                <main className="flex-grow px-12 py-16 text-center text-red-500">
                    <h1 className="text-4xl font-bold">Artikel tidak ditemukan.</h1>
                    <button
                        onClick={() => navigate('/artikel')}
                        className="mt-8 px-6 py-3 bg-emerald-900 text-white rounded-lg"
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
            {/* Decorative Background Lines (from Figma) - Adjust positioning as needed */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="w-[1285.43px] h-[679.83px] absolute left-[483.96px] top-[1892.99px] origin-top-left rotate-[-77.17deg] opacity-40 outline outline-1 outline-amber-300"></div>
            </div>

            <Navbar />
            <main className={twMerge(
                responsiveClass(
                    "flex-grow px-3 py-8", // mobile
                    "flex-grow px-5 py-12", // tablet
                    "flex-grow px-12 py-16" // desktop
                ),
                "relative z-10" // Ensure main content is above background lines
            )}>
                <div className={responsiveClass(
                    "px-3 flex flex-col gap-5", // mobile
                    "px-6 flex flex-col gap-5", // tablet
                    "px-6 flex flex-col gap-5" // desktop (from Figma code)
                )}>
                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)} // Navigates back one step in history
                        className="inline-flex justify-start items-center gap-1.5 text-emerald-900 text-base font-medium font-['Albert_Sans'] leading-tight"
                        aria-label="Kembali ke halaman sebelumnya"
                    >
                        <ArrowLeft className="w-4 h-4 text-emerald-900" />
                        Kembali
                    </button>

                    {/* Article Title */}
                    <h1 className={responsiveClass(
                        "w-full text-emerald-900 text-3xl font-bold font-['Montserrat']", // mobile
                        "w-full text-emerald-900 text-5xl font-bold font-['Montserrat']", // tablet
                        "w-[1180px] text-emerald-900 text-6xl font-bold font-['Montserrat']" // desktop (from Figma code)
                    )}>
                        {article.title}
                    </h1>

                    {/* Author and Date */}
                    <div className="flex flex-col justify-start items-start gap-3.5">
                        <div className="inline-flex justify-start items-center gap-5">
                            <img className="w-14 h-14 rounded-full" src="https://placehold.co/57x57" alt="Author avatar" />
                            <div className="inline-flex flex-col justify-center items-start gap-0.5">
                                <p className="text-stone-900 text-base font-normal font-['Albert_Sans']">Dibuat oleh</p>
                                <div className="inline-flex justify-start items-start gap-2.5">
                                    <p className="text-stone-900 text-xl font-normal font-['Albert_Sans']">Wenka Wendira</p>
                                    <div className="w-6 h-0 origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-stone-900"></div>
                                    <p className="text-stone-900 text-xl font-normal font-['Albert_Sans']">{article.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Article Image */}
                <div className={responsiveClass(
                    "w-full px-3 mt-12", // mobile
                    "w-full px-6 mt-12", // tablet
                    "w-full px-6 mt-12" // desktop
                )}>
                    <img
                        className={responsiveClass(
                            "w-full h-auto rounded-3xl object-cover", // mobile
                            "w-full h-auto rounded-[35px] object-cover", // tablet
                            "w-[1232px] h-[507px] rounded-[35px] object-cover mx-auto" // desktop (from Figma code, centered)
                        )}
                        src={article.image}
                        alt={article.title}
                    />
                </div>


                {/* Article Content */}
                <div className={responsiveClass(
                    "px-3 mt-12", // mobile
                    "px-6 mt-12", // tablet
                    "px-6 mt-12" // desktop
                )}>
                    <p className={responsiveClass(
                        "w-full text-black text-base font-normal font-['Albert_Sans'] leading-relaxed", // mobile
                        "w-full text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed", // tablet
                        "w-[1180px] text-black text-3xl font-normal font-['Albert_Sans'] leading-relaxed mx-auto" // desktop (from Figma code, centered)
                    )}>
                        {article.fullContent}
                    </p>
                </div>
            </main>
            <FooterSection />
        </div>
    );
};

export default ArticleDetailPage;