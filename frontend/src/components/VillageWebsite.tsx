import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Play } from "lucide-react"; // Only Play is directly used here now
// Removed Phone, Mail, Instagram, Facebook, Youtube as they are in FooterSection
// Removed ChevronDown, ChevronUp as they are in Navbar

// Import the new components
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";

// Keep these components as they are not extracted from the main file, but used by it
import OrganizationChart from "./OrganizationChart";
import ArticleSection from "./ArticleSection";
import InfoSection from "./InfoSection";

import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint";

const VillageWebsite = () => {
    // The state for mobile menu and dropdown is now managed within Navbar,
    // so we don't need isMobileMenuOpen, isOpen, toggleDropdown here anymore.
    const [youtubeUrl, setYoutubeUrl] = useState<string | null>(null);
    const [showMapModal, setShowMapModal] = useState(false); // New state for map modal

    const currentBreakpoint = useBreakpoint(); // Get the current breakpoint

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
        return twMerge(getResponsiveValue(values, currentBreakpoint) || mobile);
    };

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            {/* Navbar Component */}
            <Navbar />

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
                        "w-full px-2 md:px-8 lg:px-20 box-border", // mobile
                        "w-full px-8 box-border",
                        "w-full px-10 box-border"
                    )}
                >
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-white">
                        <video
                            src="/videos/ngadi-profile.mp4"
                            autoPlay
                            loop
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
                        {/* Play Icon Button */}
                        <button
                            className="absolute bottom-4 right-4 z-20 group focus:outline-none"
                            style={{ transition: "transform 0.2s" }}
                            onClick={() => setYoutubeUrl("https://www.youtube.com/embed/swtRHwOpWGs?autoplay=1")}
                            aria-label="Tonton video profil Ohoi Ngadi"
                        >
                            <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-900 border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-200">
                                <Play className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-200" />
                            </span>
                            <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-white text-emerald-900 text-xs font-semibold px-3 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                Tonton Video
                            </span>
                        </button>
                    </div>
                </div>

                {youtubeUrl && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                        <div className="bg-white rounded-2xl shadow-2xl p-4 relative max-w-2xl w-full">
                            <button
                                className="absolute top-2 right-4 text-emerald-900 text-3xl font-bold hover:text-red-500 transition"
                                onClick={() => setYoutubeUrl(null)}
                                aria-label="Tutup"
                            >
                                ×
                            </button>
                            <div className="aspect-video w-full rounded-xl overflow-hidden">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={youtubeUrl}
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
                            onClick={() => setYoutubeUrl("https://www.youtube.com/embed/VuRw_Pv2_Go?autoplay=1")}
                        >
                            <div className="w-full h-full bg-emerald-900 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                                <Play className={responsiveClass("w-6 h-6", "w-7 h-7", "w-8 h-8") + " text-white"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {youtubeUrl && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-white rounded-2xl shadow-2xl p-4 relative max-w-2xl w-full">
                        <button
                            className="absolute top-2 right-4 text-emerald-900 text-3xl font-bold hover:text-red-500 transition"
                            onClick={() => setYoutubeUrl(null)}
                            aria-label="Tutup"
                        >
                            ×
                        </button>
                        <div className="aspect-video w-full rounded-xl overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                src={youtubeUrl}
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
                                    "relative w-24 h-28 rounded-xl flex-shrink-0 group transition-all duration-300 hover:scale-105", // mobile: Hover scale
                                    "relative w-32 h-36 rounded-2xl flex-shrink-0 group transition-all duration-300 hover:scale-110", // tablet: Hover scale
                                    "relative w-64 h-72 rounded-3xl group transition-all duration-300 hover:scale-115" // desktop: Hover scale
                                )
                            }
                        >
                            <img
                                src={food.img}
                                alt={food.title}
                                className={
                                    responsiveClass(
                                        "w-full h-full object-cover rounded-xl transition-all duration-300",
                                        "w-full h-full object-cover rounded-2xl transition-all duration-300",
                                        "w-full h-full object-cover rounded-3xl transition-all duration-300"
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
                    "px-3 py-8 relative", // mobile
                    "px-5 py-12 relative", // tablet
                    "px-12 py-16 relative" // desktop
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
                        "mt-6 w-full h-36  rounded-lg relative cursor-pointer", // mobile
                        "mt-8 w-full h-48  rounded-lg relative overflow-hidden cursor-pointer", // tablet
                        "mt-10 w-full h-96  rounded-lg relative overflow-hidden cursor-pointer" // desktop
                    )}
                    onClick={() => setShowMapModal(true)} // Added onClick to show modal
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
                {/* Addition Asset */}
                <div
                    className={responsiveClass(
                        "hidden", // mobile
                        "block absolute right-0 bottom-0", // tablet
                        "block absolute right-0 bottom-0" // desktop
                    )}
                    style={{ zIndex: 0, pointerEvents: "none" }}
                >
                    <img
                        src="/images/addition-asset.png"
                        alt="Additional Asset"
                        className={responsiveClass(
                            "w-20 h-auto", // mobile
                            "w-24 h-auto", // tablet
                            "w-56 h-auto" // desktop
                        )}
                    />
                </div>
            </section>

            {/* Map Modal */}
            {showMapModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="px-10 py-7 bg-amber-300 rounded-xl inline-flex flex-col justify-start items-center gap-3.5 max-w-4xl w-full mx-4">
                        <div className="w-full flex flex-col justify-start items-start gap-3.5">
                            <div className="self-stretch inline-flex justify-between items-center">
                                <div className="flex justify-start items-center gap-3">
                                    <div className="justify-start text-emerald-900 text-3xl font-bold font-['Montserrat']">
                                        Ohoi Ngadi
                                    </div>
                                    <a
                                        href="https://maps.app.goo.gl/AsW2QwMHHR3Ckggt7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center"
                                    >
                                        {/* Ganti img dengan icon location */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-10 h-10 text-emerald-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 21c-4.418 0-8-5.373-8-10a8 8 0 1116 0c0 4.627-3.582 10-8 10zm0-7a3 3 0 100-6 3 3 0 000 6z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                <button
                                    className="w-6 h-6 bg-emerald-900 text-white flex items-center justify-center text-xl font-bold rounded"
                                    onClick={() => setShowMapModal(false)}
                                    aria-label="Tutup"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                        <img className="self-stretch h-[630.34px] object-contain" src="/images/peta-ngadi.png" alt="Peta Ohoi Ngadi" />
                    </div>
                </div>
            )}

            {/* Section containing Organization Chart and the new asset */}
            <div className="relative">
                <OrganizationChart
                    className={responsiveClass(
                        "px-3 py-8 ml-0", // mobile
                        "px-5 py-12 ml-12", // tablet
                        "px-12 py-16 ml-8 mr-8" // desktop
                    )}
                />
            </div>


            <div className="relative">
                {/* Background Asset hanya satu, di kanan */}
                <img
                    src="/images/vector-asset.png"
                    alt="Background Asset"
                    className={responsiveClass(
                        "hidden", // mobile
                        "block absolute right-0 top-0 w-[320px] h-auto opacity-40 pointer-events-none z-10", // tablet
                        "block absolute right-0 top-0 w-[900px] h-auto opacity-40 pointer-events-none z-10" // desktop
                    )}
                />

                {/* Article Section */}
                <ArticleSection
                    className={responsiveClass(
                        "px-3 py-8 ml-0 relative z-10", // mobile
                        "px-5 py-12 ml-12 relative z-10", // tablet
                        "px-12 py-16 ml-8 mr-8 relative z-10" // desktop
                    )}
                />

                {/* Info Section */}
                <InfoSection
                    className={responsiveClass(
                        "px-3 py-8 ml-0 relative z-10", // mobile
                        "px-5 py-12 ml-12 relative z-10", // tablet
                        "px-12 py-16 ml-8 mr-8 relative z-10" // desktop
                    )}
                />

                {/* Location Section */}
                <section
                    className={responsiveClass(
                        "px-3 py-8 relative z-10", // mobile
                        "px-5 py-12 relative z-10", // tablet
                        "px-12 py-16 relative z-10" // desktop
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
            </div>

            {/* FooterSection Component */}
            <FooterSection />
        </div>
    );
};

export default VillageWebsite;