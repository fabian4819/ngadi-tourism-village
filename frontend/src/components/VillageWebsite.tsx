import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
    ChevronDown,
    ChevronUp,
    Play,
    Phone,
    Mail,
    Instagram,
    Facebook,
    Youtube
} from "lucide-react";
import OrganizationChart from "./OrganizationChart";
import MobileMenu from "./MobileMenu";
import ArticleSection from "./ArticleSection";
import InfoSection from "./InfoSection";
import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint"; // Import the hook and utility

const VillageWebsite = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const currentBreakpoint = useBreakpoint(); // Get the current breakpoint
    const [isOpen, setIsOpen] = useState(false);
    const [showYoutube, setShowYoutube] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // type PinIcon = "star" | "mosque" | "church" | "utensils" | "hospital";

    // const mapPins: { x: string; y: string; icon: PinIcon; label: string }[] = [
    //     { x: "15%", y: "20%", icon: "star", label: "Tempat Wisata" },
    //     { x: "80%", y: "25%", icon: "mosque", label: "Masjid" },
    //     { x: "90%", y: "35%", icon: "church", label: "Gereja" },
    //     { x: "70%", y: "40%", icon: "utensils", label: "Tempat Makan" },
    //     { x: "20%", y: "35%", icon: "hospital", label: "Puskesmas" },
    //     { x: "50%", y: "30%", icon: "utensils", label: "Tempat Makan" },
    //     { x: "40%", y: "60%", icon: "utensils", label: "Tempat Makan" },
    //     { x: "60%", y: "80%", icon: "utensils", label: "Tempat Makan" },
    // ];

    // const iconFiles: Record<PinIcon, { grey: string; green: string }> = {
    //     star: {
    //         grey: "/icon/favorite-grey.png",
    //         green: "/icon/favorite-green.png",
    //     },
    //     mosque: {
    //         grey: "/icon/mosque-grey.png",
    //         green: "/icon/mosque-green.png",
    //     },
    //     church: {
    //         grey: "/icon/church-grey.png",
    //         green: "/icon/church-green.png",
    //     },
    //     utensils: {
    //         grey: "/icon/restaurant-grey.png",
    //         green: "/icon/restaurant-green.png",
    //     },
    //     hospital: {
    //         grey: "/icon/hospital-grey.png",
    //         green: "/icon/hospital-green.png",
    //     },
    // };

    // const [activePin, setActivePin] = useState<number | null>(null);

    // Utility function for responsive classes
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
        return twMerge(getResponsiveValue(values, currentBreakpoint) || mobile); // Use getResponsiveValue
    };

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />

            {/* Header */}
            <header
                className={responsiveClass(
                    "w-full px-3 py-6", // mobile
                    "px-10 py-8", // tablet
                    "px-12 py-10" // desktop
                )}
            >
                <nav
                    className={responsiveClass(
                        "flex items-center justify-between", // mobile
                        "flex items-center justify-between", // tablet
                        "flex items-center justify-between" // desktop
                    )}
                >
                    {/* Logo */}
                    <div
                        className={responsiveClass(
                            "flex items-center gap-2", // mobile
                            "flex items-center gap-2", // tablet
                            "flex items-center gap-2" // desktop
                        )}
                    >
                        <img
                            src="/images/title.png"
                            alt="Tualang Tual"
                            className={responsiveClass(
                                "h-[30px] w-auto", // mobile
                                "h-[46.57px] w-auto", // tablet
                                "h-[58.21px] w-auto" // desktop
                            )}
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div
                        className={responsiveClass(
                            "hidden", // mobile
                            "hidden", // tablet
                            "flex items-center gap-6" // desktop
                        )}
                    >
                        <div className="flex items-center gap-8 px-5 py-3 rounded-full border border-stone-900">
                            <a href="#" className="text-stone-900 text-sm font-medium">
                                Artikel
                            </a>
                            {/* Changed from span to a tag for redirection */}
                            <a href="#" className="text-stone-900 text-sm font-medium">
                                Tes BMI
                            </a>
                        </div>
                        <div className="relative inline-block">
                            {/* Tombol Kenali Desa */}
                            <div
                                className={`
                                    flex items-center justify-between px-5 py-3 bg-emerald-900 text-white text-sm font-bold cursor-pointer
                                    border border-emerald-900
                                    rounded-t-3xl rounded-b-3xl
                                `}
                                onClick={toggleDropdown}
                                style={{
                                    borderBottomLeftRadius: isOpen ? 0 : '1.5rem',
                                    borderBottomRightRadius: isOpen ? 0 : '1.5rem',
                                }}
                            >
                                <span>Kenali Desa</span>
                                {isOpen ? (
                                    <ChevronUp className="w-6 h-6 text-white transition-transform duration-200" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-white transition-transform duration-200" />
                                )}
                            </div>

                            {/* Dropdown Content */}
                            {isOpen && (
                                <div className="absolute left-0 right-0 z-10">
                                    <div className="bg-white border-x border-b border-emerald-900 rounded-b-3xl overflow-hidden shadow-lg">
                                        <div className="flex flex-col">
                                            {/* Item: Ohoi Dullah */}
                                            <button
                                                type="button"
                                                className="px-5 py-2 border-b border-emerald-900 text-left hover:bg-emerald-50 focus:bg-emerald-100 transition"
                                            >
                                                <span className="text-emerald-900 text-sm font-medium">
                                                    Ohoi Dullah
                                                </span>
                                            </button>
                                            {/* Item: Ohoi Labetawi */}
                                            <button
                                                type="button"
                                                className="px-5 py-2 text-left hover:bg-emerald-50 focus:bg-emerald-100 transition"
                                            >
                                                <span className="text-emerald-900 text-sm font-medium">
                                                    Ohoi Labetawi
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={responsiveClass(
                            "p-2 bg-emerald-900 rounded-full", // mobile
                            "p-2 bg-emerald-900 rounded-full", // tablet
                            "hidden" // desktop
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Open menu"
                    >
                        <div className="w-3 h-2 bg-white"></div>
                    </button>
                </nav>
            </header>

            {/* Hero Section */}
            <section
                className={responsiveClass(
                    "flex flex-col items-center gap-6 px-3", // mobile
                    "flex flex-col items-center gap-8 px-5", // tablet
                    "flex flex-col items-center gap-10" // desktop
                )}
            >
                {/* Decorative Elements */}
                <div className="relative flex items-center justify-center w-full">
                    {/* Left Asset */}
                    <div
                        className={responsiveClass(
                            "hidden", // mobile
                            "block absolute left-0 top-1/2 -translate-y-1/2", // tablet
                            "block absolute left-0 top-1/2 -translate-y-1/2" // desktop
                        )}
                        style={{ zIndex: 1 }}
                    >
                        <img
                            src="/images/left-main-asset.png"
                            alt="Left Asset"
                            className={responsiveClass(
                                "hidden", // mobile
                                "w-20 h-auto", // tablet
                                "w-[300px] h-auto" // desktop
                            )}
                        />
                    </div>

                    {/* Title */}
                    <h1
                        className={responsiveClass(
                            "text-emerald-900 text-4xl font-semibold font-['Vivaldi'] text-center", // mobile
                            "text-emerald-900 text-6xl font-semibold font-['Vivaldi'] text-center", // tablet
                            "text-emerald-900 text-9xl font-semibold font-['Vivaldi'] text-center" // desktop
                        )}
                        style={{ zIndex: 2 }}
                    >
                        Ohoi Ngadi
                    </h1>

                    {/* Right Asset */}
                    <div
                        className={responsiveClass(
                            "hidden", // mobile
                            "block absolute right-0 top-1/2 -translate-y-1/2", // tablet
                            "block absolute right-0 top-1/2 -translate-y-1/2" // desktop
                        )}
                        style={{ zIndex: 1 }}
                    >
                        <img
                            src="/images/right-main-asset.png"
                            alt="Right Asset"
                            className={responsiveClass(
                                "hidden", // mobile
                                "w-20 h-auto", // tablet
                                "w-[300px] h-auto" // desktop
                            )}
                        />
                    </div>
                </div>

                {/* Hero Video */}
                <div
                    className={responsiveClass(
                        "w-full px-2 md:px-8 lg:px-20 box-border", // padding kiri-kanan
                        "w-full px-8 box-border",
                        "w-full px-10 box-border"
                    )}
                >
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-white">
                        <video
                            src="/videos/tual-video.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                        {/* SVG efek pojok kanan bawah */}
                        <div className="absolute bottom-0 right-0" style={{ width: 250, height: 250, pointerEvents: "none" }}>
                            <svg width="250" height="250" viewBox="0 0 250 250" fill="none">
                                <path
                                    d="
                M250,250
                L250,125
                A125,125 0 0 0 125,250
                Z
            "
                                    fill="white"
                                />
                            </svg>
                        </div>
                        {/* Icon di pojok kanan bawah, posisikan di dalam lekukan */}
                        <div className="absolute bottom-4 right-4 z-10">
                            <svg width="70" height="70" viewBox="0 0 56 56" fill="none">
                                <circle cx="28" cy="28" r="26" stroke="#14532d" strokeWidth="4" fill="white" />
                                <path d="M28 18v16M28 34l6-6M28 34l-6-6" stroke="#14532d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section
                className={responsiveClass(
                    "px-3 py-8", // mobile
                    "px-5 py-12", // tablet
                    "px-12 py-16" // desktop
                )}
            >
                <div
                    className={responsiveClass(
                        "flex flex-col gap-6", // mobile
                        "flex flex-col gap-8 lg:flex-row lg:items-center", // tablet
                        "flex flex-row items-center gap-60" // desktop
                    )}
                >
                    <div
                        className={responsiveClass(
                            "flex-1", // mobile
                            "flex-1", // tablet
                            "flex-1" // desktop
                        )}
                    >
                        <div
                            className={responsiveClass(
                                "mb-3", // mobile
                                "mb-4", // tablet
                                "mb-2" // desktop
                            )}
                        >
                            <h2
                                className={responsiveClass(
                                    "text-emerald-900 text-lg font-bold font-['Montserrat']", // mobile
                                    "text-emerald-900 text-2xl font-bold font-['Montserrat']", // tablet
                                    "text-emerald-900 text-4xl font-bold font-['Montserrat']" // desktop
                                )}
                            >
                                Mengenal Budaya <span className="italic">Katong</span>
                            </h2>
                        </div>
                        <p
                            className={responsiveClass(
                                "text-black text-sm font-medium font-['Albert_Sans'] leading-tight", // mobile
                                "text-black text-lg font-medium font-['Albert_Sans'] leading-relaxed", // tablet
                                "text-black text-2xl font-medium font-['Albert_Sans'] leading-relaxed" // desktop
                            )}
                        >
                            Tual bukan hanya soal keindahan lautnya, tapi juga tentang cerita,
                            tradisi, dan warisan budaya yang hidup dalam keseharian
                            masyarakatnya
                        </p>
                    </div>

                    <div
                        className={responsiveClass(
                            "w-full relative ml-0", // mobile
                            "w-64 relative ml-8", // tablet
                            "w-80 relative ml-16" // desktop
                        )}
                    >
                        <img
                            src="/images/image-template.png"
                            alt="Cultural activity"
                            className={responsiveClass(
                                "w-full h-32 rounded-3xl", // mobile
                                "w-full h-36 rounded-3xl", // tablet
                                "w-full h-44 rounded-3xl" // desktop
                            )}
                        />
                        {/* Play icon: sebagian di luar gambar */}
                        <div
                            className={responsiveClass(
                                "absolute bottom-2 right-[-18px] w-12 h-12", // mobile
                                "absolute bottom-4 right-[-22px] w-14 h-14", // tablet
                                "absolute bottom-6 right-[-28px] w-16 h-16" // desktop
                            )}
                            style={{ zIndex: 2, cursor: "pointer" }}
                            onClick={() => setShowYoutube(true)}
                        >
                            <div className="w-full h-full bg-emerald-900 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                                <Play className={responsiveClass("w-6 h-6", "w-7 h-7", "w-8 h-8") + " text-white"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal YouTube */}
            {showYoutube && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-white rounded-2xl shadow-2xl p-4 relative max-w-xl w-full">
                        <button
                            className="absolute top-0 right-1 text-emerald-900 text-2xl font-bold"
                            onClick={() => setShowYoutube(false)}
                            aria-label="Close"
                        >
                            ×
                        </button>
                        <div className="aspect-video w-full rounded-xl overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/VuRw_Pv2_Go?autoplay=1"
                                title="YouTube video"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

            {/* Welcome Section */}
            <section
                className={responsiveClass(
                    "px-3 py-8", // mobile
                    "px-5 py-12", // tablet
                    "px-12 py-16" // desktop
                )}
            >
                <div
                    className={responsiveClass(
                        "flex flex-col gap-6", // mobile
                        "flex flex-col gap-8 lg:flex-row lg:justify-between", // tablet
                        "flex flex-row justify-between items-start gap-32" // desktop
                    )}
                >
                    <div
                        className={responsiveClass(
                            "flex-1", // mobile
                            "flex-1", // tablet
                            "flex-1 max-w-3xl" // desktop
                        )}
                    >
                        <div
                            className={responsiveClass(
                                "mb-4", // mobile
                                "mb-6", // tablet
                                "mb-8" // desktop
                            )}
                        >
                            <h2
                                className={responsiveClass(
                                    "text-emerald-900 text-4xl font-medium", // mobile
                                    "text-emerald-900 text-6xl font-medium", // tablet
                                    "text-emerald-900 text-9xl font-medium" // desktop
                                )}
                            >
                                <span className="font-['Cormorant'] italic">T</span>
                                <span className="font-['Vivaldi']">abe ma!</span>
                            </h2>
                        </div>

                        <div
                            className={responsiveClass(
                                "mb-4", // mobile
                                "mb-6", // tablet
                                "mb-8" // desktop
                            )}
                        >
                            <p
                                className={responsiveClass(
                                    "text-black text-sm font-medium font-['Albert_Sans'] leading-tight", // mobile
                                    "text-black text-lg font-medium font-['Albert_Sans'] leading-relaxed", // tablet
                                    "text-black text-2xl font-medium font-['Albert_Sans'] leading-relaxed" // desktop
                                )}
                            >
                                Selamat datang di Ohoi Ngadi, desa wisata bahari di Tual, Maluku
                                yang masuk{" "}
                                <span className="font-bold">
                                    45 besar Desa Wisata Nusantara 2024!
                                </span>
                                <br />
                                <br />
                                Di sini, kamu bisa duduk manis sambil nikmati Danau Waren yang
                                tenang, jalan-jalan di pantai berpasir, dan merasakan budaya{" "}
                                <span className="italic">katong</span> yang masih kental lewat
                                musik, tarian, dan kuliner laut khas Kei.
                            </p>
                        </div>

                        <button
                            className={responsiveClass(
                                "flex items-center gap-2 px-4 py-2 bg-emerald-900 rounded-xl text-white text-xs font-semibold font-['Montserrat']", // mobile
                                "flex items-center gap-2 px-6 py-3 bg-emerald-900 rounded-2xl text-white text-lg font-semibold font-['Montserrat']", // tablet
                                "flex items-center gap-3 px-6 py-2 bg-emerald-900 rounded-3xl text-white text-xl font-semibold font-['Montserrat']" // desktop
                            )}
                        >
                            <span>Lihat Podcast Suara <span className="italic">Katong</span></span>
                            <span
                                className={responsiveClass(
                                    "inline-flex items-center justify-center rounded-full border-2 border-white bg-emerald-900", // mobile
                                    "inline-flex items-center justify-center rounded-full border-2 border-white bg-emerald-900", // tablet
                                    "inline-flex items-center justify-center rounded-full border-2 border-white bg-emerald-900" // desktop
                                )}
                                style={{
                                    width: getResponsiveValue({ mobile: 28, tablet: 36, desktop: 30 }, currentBreakpoint),
                                    height: getResponsiveValue({ mobile: 28, tablet: 36, desktop: 30 }, currentBreakpoint),
                                }}
                            >
                                <Play
                                    className={responsiveClass(
                                        "w-4 h-4", // mobile
                                        "w-5 h-5", // tablet
                                        "w-4 h-4" // desktop
                                    )}
                                />
                            </span>
                        </button>
                    </div>

                    {/* Image Gallery */}
                    <div
                        className={responsiveClass(
                            "flex items-center justify-center gap-2", // mobile
                            "flex items-center justify-center gap-3", // tablet
                            "flex items-center justify-center gap-4 mt-20" // desktop
                        )}
                    >
                        {/* Center image (tabema-1) */}
                        <img
                            src="/images/tabema-1.png"
                            alt="Village life 1"
                            className={responsiveClass(
                                "w-24 h-32 rounded-lg object-cover", // mobile
                                "w-32 rounded-xl object-cover", // tablet
                                "w-60 rounded-2xl object-cover" // desktop
                            )}
                            style={{ zIndex: 2 }}
                        />
                        {/* Right column: tabema-2 (top), tabema-3 (bottom) */}
                        <div className="flex flex-col justify-center" style={{ zIndex: 1 }}>
                            <img
                                src="/images/tabema-2.png"
                                alt="Village life 2"
                                className={responsiveClass(
                                    "w-24 h-20 rounded-lg object-cover translate-y-[-20%]", // mobile
                                    "w-32 h-24 rounded-xl object-cover translate-y-[-24%]", // tablet
                                    "w-60 rounded-2xl object-cover translate-y-[-10%]" // desktop
                                )}
                            />
                            <img
                                src="/images/tabema-3.png"
                                alt="Village life 3"
                                className={responsiveClass(
                                    "w-24 h-20 rounded-lg object-cover translate-y-[20%]", // mobile
                                    "w-32 h-24 rounded-xl object-cover translate-y-[24%]", // tablet
                                    "w-60 rounded-2xl object-cover translate-y-[10%]" // desktop
                                )}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Food Gallery */}
            <section
                className={responsiveClass(
                    "px-3 py-8", // mobile
                    "px-5 py-12", // tablet
                    "px-6 py-16" // desktop
                )}
            >
                <div
                    className={responsiveClass(
                        "flex gap-2 overflow-x-auto", // mobile
                        "flex gap-3 overflow-x-auto", // tablet
                        "flex gap-6 overflow-x-auto" // desktop
                    )}
                >
                    {[
                        {
                            img: "/images/pisang-embal.png",
                            title: "Pisang Embal",
                            desc: "Pisang goreng khas Tual yang dibalut tepung embal singkong renyah, disajikan hangat dan nikmat dipadu sambal pedas",
                        },
                        {
                            img: "/images/lad.jpeg",
                            title: "Lad",
                            desc: "Salad anggur laut segar yang renyah dan menyegarkan, perpaduan rasa laut alami dengan kelapa parut, bawang merah, dan cabai khas Pulau Kei.",
                        },
                        {
                            img: "/images/embal-love.png",
                            title: "Embal Love",
                            desc: "Cemilan manis dari tepung singkong berbentuk hati, gurih dan tahan lama, cocok disemil saat santai bersama teh atau kopi",
                        },
                        {
                            img: "/images/kue-asida.png",
                            title: "Kue Asida",
                            desc: "Puding kenyal manis ala Maluku yang mirip dodol, diperkaya rempah seperti cinnamon dan cardamom, biasanya hadir saat Ramadan",
                        },
                        {
                            img: "/images/kue-lontar.png",
                            title: "Kue Lontar",
                            desc: "Pie susu khas Papua-Tual berkulit keemasan dengan isian lembut susu kental manis dan kuning telur, sempurna untuk sajian istimewa",
                        },
                    ].map((food) => (
                        <div
                            key={food.title}
                            className={
                                responsiveClass(
                                    "relative w-24 h-28 rounded-xl flex-shrink-0 group transition-all duration-300", // mobile
                                    "relative w-32 h-36 rounded-2xl flex-shrink-0 group transition-all duration-300", // tablet
                                    "relative w-64 h-72 rounded-3xl group transition-all duration-300" // desktop
                                )
                            }
                        >
                            <img
                                src={food.img}
                                alt={food.title}
                                className={
                                    responsiveClass(
                                        "w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105", // mobile
                                        "w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:scale-110", // tablet
                                        "w-full h-full object-cover rounded-3xl transition-all duration-300 group-hover:scale-115" // desktop
                                    )
                                }
                            />
                            {/* Overlay on hover */}
                            <div
                                className={
                                    responsiveClass(
                                        "absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-emerald-900 rounded-xl flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300", // mobile
                                        "absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-emerald-900 rounded-2xl flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300", // tablet
                                        "absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-emerald-900 rounded-3xl flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" // desktop
                                    )
                                }
                                style={{ padding: "1rem" }}
                            >
                                <h3
                                    className={responsiveClass(
                                        "text-white text-lg font-bold font-['Montserrat'] mb-1 text-left w-full", // mobile
                                        "text-white text-xl font-bold font-['Montserrat'] mb-2 text-left w-full", // tablet
                                        "text-white text-2xl font-bold font-['Montserrat'] mb-2 text-left w-full" // desktop
                                    )}
                                >
                                    {food.title}
                                </h3>
                                <p
                                    className={responsiveClass(
                                        "text-white text-xs font-normal font-['Albert_Sans'] leading-tight text-left w-full", // mobile
                                        "text-white text-sm font-normal font-['Albert_Sans'] leading-relaxed text-left w-full", // tablet
                                        "text-white text-base font-normal font-['Albert_Sans'] leading-relaxed text-left w-full" // desktop
                                    )}
                                >
                                    {food.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Map Section */}
            <section
                className={responsiveClass(
                    "px-3 py-8", // mobile
                    "px-5 py-12", // tablet
                    "px-12 py-16" // desktop
                )}
            >
                <div
                    className={responsiveClass(
                        "flex flex-col gap-4", // mobile
                        "flex flex-col gap-6", // tablet
                        "flex flex-row gap-12" // desktop
                    )}
                >
                    <div
                        className={responsiveClass(
                            "flex-1", // mobile
                            "flex-1", // tablet
                            "flex-1" // desktop
                        )}
                    >
                        <h2
                            className={responsiveClass(
                                "text-emerald-900 text-lg font-bold font-['Montserrat'] mb-2", // mobile
                                "text-emerald-900 text-2xl font-bold font-['Montserrat'] mb-3", // tablet
                                "text-emerald-900 text-4xl font-bold font-['Montserrat'] mb-4" // desktop
                            )}
                        >
                            Jelajahi Keindahan Ohoi Ngadi
                        </h2>
                        <p
                            className={responsiveClass(
                                "text-black text-sm font-normal font-['Albert_Sans'] leading-tight", // mobile
                                "text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed", // tablet
                                "text-black text-3xl font-normal font-['Albert_Sans'] leading-relaxed" // desktop
                            )}
                        >
                            Akses lokasi, rute terbaik, dan fasilitas umum tersedia di sini
                        </p>
                    </div>

                    {/* Legend */}
                    <div
                        className={responsiveClass(
                            "w-full p-3 rounded-lg border border-emerald-900", // mobile
                            "w-full p-3 rounded-lg border border-emerald-900", // tablet
                            "w-56 p-3 rounded-xl border border-emerald-900" // desktop
                        )}
                    >
                        {[
                            { icon: "/icon/favorite-green.png", label: "Tempat Wisata" },
                            { icon: "/icon/mosque-green.png", label: "Masjid" },
                            { icon: "/icon/church-green.png", label: "Gereja" },
                            { icon: "/icon/restaurant-green.png", label: "Tempat Makan" },
                            { icon: "/icon/hospital-green.png", label: "Puskesmas" },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 mb-2">
                                <span className="w-10 h-10 flex items-center justify-center">
                                    <img
                                        src={item.icon}
                                        alt={item.label}
                                        className="w-10 h-10 object-contain"
                                    />
                                </span>
                                <span
                                    className={responsiveClass(
                                        "text-emerald-900 text-xs font-normal",
                                        "text-emerald-900 text-sm font-normal",
                                        "text-emerald-900 text-xl font-normal"
                                    )}
                                >
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Map */}
                <div
                    className={responsiveClass(
                        "mt-6 w-full h-36  rounded-lg relative overflow-hidden", // mobile
                        "mt-8 w-full h-48  rounded-lg relative overflow-hidden", // tablet
                        "mt-10 w-full h-96  rounded-lg relative overflow-hidden" // desktop
                    )}
                >
                    {/* Map image */}
                    <img
                        src="/images/map-full.png"
                        alt="Map"
                        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                        style={{ zIndex: 1 }}
                    />
                    {/* Pins
                    {mapPins.map((pin, idx) => (
                        <button
                            key={idx}
                            type="button"
                            style={{
                                position: "absolute",
                                left: pin.x,
                                top: pin.y,
                                transform: "translate(-50%, -100%)",
                                zIndex: 2,
                                cursor: "pointer",
                                background: "none",
                                border: "none",
                                padding: 0,
                            }}
                            onClick={() => setActivePin(idx)}
                        >
                            <img
                                src={
                                    activePin === idx
                                        ? iconFiles[pin.icon].green
                                        : iconFiles[pin.icon].grey
                                }
                                alt={pin.label}
                                className={responsiveClass(
                                    "w-6 h-8", // mobile
                                    "w-8 h-10", // tablet
                                    "w-10 h-12" // desktop
                                )}
                                draggable={false}
                            />
                        </button>
                    ))} */}
                </div>
            </section>

            {/* Organization Chart */}
            <OrganizationChart
                className={responsiveClass(
                    "px-3 py-8 ml-0", // mobile
                    "px-5 py-12 ml-12", // tablet
                    "px-12 py-16 ml-8" // desktop
                )}
            />

            {/* Article Section */}
            <ArticleSection
                className={responsiveClass(
                    "px-3 py-8 ml-0", // mobile
                    "px-5 py-12 ml-12", // tablet
                    "px-12 py-16 ml-8" // desktop
                )} />

            {/* Info Section */}
            <InfoSection
                className={responsiveClass(
                    "px-3 py-8 ml-0", // mobile
                    "px-5 py-12 ml-12", // tablet
                    "px-12 py-16 ml-8" // desktop
                )} />

            {/* Location Section */}
            <section
                className={responsiveClass(
                    "px-3 py-8", // mobile
                    "px-5 py-12", // tablet
                    "px-12 py-16" // desktop
                )}
            >
                <div
                    className={responsiveClass(
                        "mb-6", // mobile
                        "mb-8", // tablet
                        "mb-10" // desktop
                    )}
                >
                    <h2
                        className={responsiveClass(
                            "text-emerald-900 text-lg font-bold font-['Montserrat'] mb-2", // mobile
                            "text-emerald-900 text-2xl font-bold font-['Montserrat'] mb-3", // tablet
                            "text-emerald-900 text-4xl font-bold font-['Montserrat'] mb-4" // desktop
                        )}
                    >
                        Peta Lokasi
                    </h2>
                    <p
                        className={responsiveClass(
                            "text-black text-sm font-normal font-['Albert_Sans'] leading-tight", // mobile
                            "text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed", // tablet
                            "text-black text-3xl font-normal font-['Albert_Sans'] leading-relaxed" // desktop
                        )}
                    >
                        Temukan <span className="italic">katong</span> disini!
                    </p>
                </div>

                {/* Map Placeholder */}
                <div
                    className={responsiveClass(
                        "w-full h-48 rounded-lg overflow-hidden flex items-end", // mobile
                        "w-full h-64 rounded-lg overflow-hidden flex items-end", // tablet
                        "w-[900px] rounded-lg overflow-hidden flex items-end" // desktop
                    )}
                    style={{ marginBottom: 0 }}
                >
                    <img
                        src="/images/lokasi.png"
                        alt="Lokasi Ohoi Ngadi"
                        className="w-full h-full object-contain"
                        style={{ display: "block", marginLeft: 0, marginBottom: 0 }}
                        draggable={false}
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-emerald-900 px-6 py-12">
                <div
                    className={responsiveClass(
                        "flex flex-col gap-8", // mobile
                        "flex flex-col gap-10", // tablet
                        "flex flex-row justify-between items-start gap-12" // desktop
                    )}
                >
                    {/* Logo and Info */}
                    <div
                        className={responsiveClass(
                            "flex flex-col gap-4", // mobile
                            "flex flex-col gap-6", // tablet
                            "flex flex-col gap-6" // desktop
                        )}
                    >
                        <div className="flex items-center gap-1">
                            <img
                                src="/images/title-footer.png"
                                alt="Tualang Tual"
                                className={responsiveClass(
                                    "h-[30px] w-auto", // mobile
                                    "h-[46.57px] w-auto", // tablet
                                    "h-[100px] w-auto" // desktop
                                )}
                            />
                            <div className="w-24 h-0 border-t border-white transform -rotate-90"></div>
                            <img
                                src="/images/logo-maren.png"
                                alt="Logo"
                                className="w-20"
                            />
                        </div>
                        <div>
                            <h3 className="text-white text-xl font-semibold font-['Montserrat'] mb-2">
                                Desa Ngadi
                            </h3>
                            <p className="text-white text-base font-normal font-['Albert_Sans'] mb-1">
                                Pulau Dullah Utara, Kota Tual, Maluku, Indonesia
                            </p>
                            <p className="text-white text-base font-semibold font-['Montserrat']">
                                Tim KKN-PPM UGM © 2025
                            </p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div
                        className={responsiveClass(
                            "flex flex-col gap-6", // mobile
                            "flex flex-col gap-8", // tablet
                            "flex flex-row gap-12" // desktop
                        )}
                    >
                        <div>
                            <h4 className="text-white text-base font-bold font-['Montserrat'] mb-4">
                                Pemerintah Desa Ngadi
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4">
                                    <Facebook className="w-6 h-6 text-white" />
                                    <span className="text-white text-lg font-semibold">
                                        Pemerintah Ohoi Ngadi
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-white" />
                                    <span className="text-white text-lg font-semibold">
                                        (021) 1234-567
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-white" />
                                    <span className="text-white text-lg font-semibold">
                                        ngadi@tualkota.go.id
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white text-base font-bold font-['Montserrat'] mb-4">
                                Tim KKN-PPM UGM
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1">
                                        <Instagram className="w-6 h-6 text-white" />
                                        <Facebook className="w-6 h-6 text-white" />
                                        <Youtube className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-white text-lg font-semibold">
                                        tualang.tual
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-white" />
                                    <span className="text-white text-lg font-semibold">
                                        kknppmugm.kotatual@gmail.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default VillageWebsite;
