import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Play } from "lucide-react";
import { Icon } from '@iconify/react';

// Import the new components
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";

// Keep these components as they are not extracted from the main file, but used by it
import OrganizationChart from "./OrganizationChart";
import ArticleSection from "./ArticleSection";
import InfoSection from "./InfoSection";

import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint";

const VillageWebsite = () => {
    // Perbaiki tipe useState untuk menerima string atau null
    const [youtubeUrl, setYoutubeUrl] = useState<string | null>(null);
    const [showMapModal, setShowMapModal] = useState(false);

    const currentBreakpoint = useBreakpoint();

    // Tambahkan anotasi tipe data untuk parameter
    const responsiveClass = (
        mobile: string,
        tablet?: string,
        desktop?: string
    ): string => {
        const values = {
            mobile,
            tablet,
            desktop,
        };
        return twMerge(getResponsiveValue(values, currentBreakpoint) || mobile);
    };

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section
                className={responsiveClass(
                    "flex flex-col items-center gap-6 px-3",
                    "flex flex-col items-center gap-8 px-5",
                    "flex flex-col items-center gap-10"
                )}
            >
                {/* Decorative Elements */}
                <div className="relative flex flex-col items-center w-full">
                    {/* Mobile Decorative Asset: di atas title */}
                    <div
                        className={responsiveClass(
                            "flex w-full justify-center mb-2",
                            "hidden",
                            "hidden"
                        )}
                    >
                        <img
                            src="/images/mobile-top-asset.png"
                            alt="Mobile Top Asset"
                            className="w-[50vw] h-auto"
                        />
                    </div>

                    <div className="relative flex items-center justify-center w-full">
                        {/* Left Asset */}
                        <div
                            className={responsiveClass(
                                "hidden",
                                "block absolute left-0 top-1/2 -translate-y-1/2 z-10",
                                "block absolute left-0 top-1/2 -translate-y-1/2 z-10"
                            )}
                        >
                            <img
                                src="/images/left-main-asset.png"
                                alt="Left Asset"
                                className={responsiveClass(
                                    "hidden",
                                    "w-20 h-auto",
                                    "w-[300px] h-auto"
                                )}
                            />
                        </div>

                        {/* Title */}
                        <h1
                            className={responsiveClass(
                                "text-emerald-900 text-7xl font-semibold font-['Vivaldi'] text-center z-20",
                                "text-emerald-900 text-8xl font-semibold font-['Vivaldi'] text-center z-20",
                                "text-emerald-900 text-9xl font-semibold font-['Vivaldi'] text-center z-20"
                            )}
                        >
                            Ohoi Ngadi
                        </h1>

                        {/* Right Asset */}
                        <div
                            className={responsiveClass(
                                "hidden",
                                "block absolute right-0 top-1/2 -translate-y-1/2 z-10",
                                "block absolute right-0 top-1/2 -translate-y-1/2 z-10"
                            )}
                        >
                            <img
                                src="/images/right-main-asset.png"
                                alt="Right Asset"
                                className={responsiveClass(
                                    "hidden",
                                    "w-20 h-auto",
                                    "w-[300px] h-auto"
                                )}
                            />
                        </div>
                    </div>
                </div>

                {/* Hero Video */}
                <div
                    className={responsiveClass(
                        "w-full px-2 md:px-8 lg:px-20 box-border",
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
                        {/* Play Icon Button */}
                        <button
                            className={twMerge(
                                responsiveClass(
                                    "absolute bottom-4 right-4 z-20 group focus:outline-none",
                                    "absolute bottom-6 right-6 z-20 group focus:outline-none",
                                    "absolute bottom-8 right-8 z-20 group focus:outline-none"
                                ),
                                "transition-transform duration-200"
                            )}
                            onClick={() => setYoutubeUrl("https://www.youtube.com/embed/hAEFpdjNLtU?autoplay=1")}
                            aria-label="Tonton video profil Ohoi Ngadi"
                        >
                            <span className={responsiveClass(
                                "inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-900 border-4 border-white shadow-xl hover:scale-110 transition-transform duration-200",
                                "inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-900 border-4 border-white shadow-xl hover:scale-110 transition-transform duration-200",
                                "inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-900 border-4 border-white shadow-xl hover:scale-110 transition-transform duration-200"
                            )}>
                                <Play className={responsiveClass(
                                    "w-5 h-5 text-white",
                                    "w-8 h-8 text-white",
                                    "w-10 h-10 text-white"
                                )} />
                            </span>
                            <span className={responsiveClass(
                                "absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-white text-emerald-900 text-xs font-semibold px-3 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none",
                                "absolute left-1/2 top-full mt-3 -translate-x-1/2 bg-white text-emerald-900 text-sm font-semibold px-4 py-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none",
                                "absolute left-1/2 top-full mt-4 -translate-x-1/2 bg-white text-emerald-900 text-base font-semibold px-5 py-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                            )}>
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
                    "px-3 py-8",
                    "px-5 py-12",
                    "px-12 py-16"
                )}
            >
                <div
                    className={responsiveClass(
                        "flex flex-col gap-6",
                        "flex flex-col gap-8 lg:flex-row lg:items-center",
                        "flex flex-row items-center gap-60"
                    )}
                >
                    <div className="flex-1">
                        <div
                            className={responsiveClass(
                                "mb-3",
                                "mb-4",
                                "mb-2"
                            )}
                        >
                            <h2
                                className={responsiveClass(
                                    "text-emerald-900 text-2xl font-bold font-['Montserrat']",
                                    "text-emerald-900 text-2xl font-bold font-['Montserrat']",
                                    "text-emerald-900 text-4xl font-bold font-['Montserrat']"
                                )}
                            >
                                Mengenal Budaya <span className="italic">Katong</span>
                            </h2>
                        </div>
                        <p
                            className={responsiveClass(
                                "text-black text-lg font-medium font-['Albert_Sans'] leading-tight",
                                "text-black text-lg font-medium font-['Albert_Sans'] leading-relaxed",
                                "text-black text-2xl font-medium font-['Albert_Sans'] leading-relaxed"
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
                        <div
                            className={responsiveClass(
                                "absolute bottom-2 right-[-18px] w-12 h-12", // mobile
                                "absolute bottom-4 right-[-22px] w-14 h-14", // tablet
                                "absolute bottom-6 right-[-28px] w-16 h-16" // desktop
                            )}
                            style={{ zIndex: 2, cursor: "pointer" }}
                            onClick={() => setYoutubeUrl("https://drive.google.com/file/d/1E9zzvp2vulcu-A6YIoNp69zgQkohangE/preview")}
                        >
                            <div className="w-full h-full bg-emerald-900 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                                <Play className={responsiveClass("w-6 h-6", "w-7 h-7", "w-8 h-8") + " text-white"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section
                className={responsiveClass(
                    "px-3 py-8",
                    "px-5 py-12",
                    "px-12 py-16"
                )}
            >
                <div
                    className={responsiveClass(
                        "flex flex-col gap-6",
                        "flex flex-col gap-8 lg:flex-row lg:justify-between",
                        "flex flex-row justify-between items-start gap-32"
                    )}
                >
                    <div
                        className={responsiveClass(
                            "flex-1",
                            "flex-1",
                            "flex-1 max-w-3xl"
                        )}
                    >
                        <div
                            className={responsiveClass(
                                "mb-4",
                                "mb-6",
                                "mb-8"
                            )}
                        >
                            <h2
                                className={responsiveClass(
                                    "text-emerald-900 text-5xl font-medium",
                                    "text-emerald-900 text-6xl font-medium",
                                    "text-emerald-900 text-9xl font-medium"
                                )}
                            >
                                <span className="font-['Cormorant'] italic">T</span>
                                <span className="font-['Vivaldi']">abe ma!</span>
                            </h2>
                        </div>

                        <div
                            className={responsiveClass(
                                "mb-4",
                                "mb-6",
                                "mb-8"
                            )}
                        >
                            <p
                                className={responsiveClass(
                                    "text-black text-sm font-medium font-['Albert_Sans'] leading-tight",
                                    "text-black text-lg font-medium font-['Albert_Sans'] leading-relaxed",
                                    "text-black text-2xl font-medium font-['Albert_Sans'] leading-relaxed"
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
                            className={twMerge(
                                responsiveClass(
                                    "flex items-center gap-2 px-4 py-2 bg-emerald-900 rounded-xl text-white text-xs font-semibold font-['Montserrat']",
                                    "flex items-center gap-2 px-6 py-3 bg-emerald-900 rounded-2xl text-white text-lg font-semibold font-['Montserrat']",
                                    "flex items-center gap-3 px-6 py-2 bg-emerald-900 rounded-3xl text-white text-xl font-semibold font-['Montserrat']"
                                ),
                                "transition-colors duration-300 hover:bg-emerald-700 hover:shadow-lg"
                            )}
                            onClick={() => setYoutubeUrl("https://drive.google.com/file/d/1uBksGXUROP-7rftikPkfZcLAiz1PsVuq/preview")}
                        >
                            <span>Lihat Podcast Suara <span className="italic">Katong</span></span>
                            <span
                                className={responsiveClass(
                                    "inline-flex items-center justify-center rounded-full border-2 border-white bg-emerald-900",
                                    "inline-flex items-center justify-center rounded-full border-2 border-white bg-emerald-900",
                                    "inline-flex items-center justify-center rounded-full border-2 border-white bg-emerald-900"
                                )}
                                style={{
                                    width: getResponsiveValue({ mobile: 28, tablet: 36, desktop: 30 }, currentBreakpoint),
                                    height: getResponsiveValue({ mobile: 28, tablet: 36, desktop: 30 }, currentBreakpoint),
                                }}
                            >
                                <Play
                                    className={responsiveClass(
                                        "w-4 h-4",
                                        "w-5 h-5",
                                        "w-4 h-4"
                                    )}
                                />
                            </span>
                        </button>
                    </div>

                    {/* Image Gallery */}
                    <div
                        className={responsiveClass(
                            "flex items-center justify-center gap-2",
                            "flex items-center justify-center gap-3",
                            "flex items-center justify-center gap-4 mt-20"
                        )}
                    >
                        {/* Center image (tabema-1) */}
                        <img
                            src="/images/tabema-1.png"
                            alt="Village life 1"
                            className={responsiveClass(
                                "w-24 h-32 rounded-lg object-cover hover:scale-105 transition-transform duration-300",
                                "w-32 rounded-xl object-cover hover:scale-110 transition-transform duration-300",
                                "w-60 rounded-2xl object-cover hover:scale-115 transition-transform duration-300"
                            )}
                            style={{ zIndex: 2 }}
                        />
                        {/* Right column: tabema-2 (top), tabema-3 (bottom) */}
                        <div className="flex flex-col justify-center" style={{ zIndex: 1 }}>
                            <img
                                src="/images/tabema-2.png"
                                alt="Village life 2"
                                className={responsiveClass(
                                    "w-24 h-20 rounded-lg object-cover translate-y-[-20%] hover:scale-105 transition-transform duration-300",
                                    "w-32 h-24 rounded-xl object-cover translate-y-[-24%] hover:scale-110 transition-transform duration-300",
                                    "w-60 rounded-2xl object-cover translate-y-[-10%] hover:scale-115 transition-transform duration-300"
                                )}
                            />
                            <img
                                src="/images/tabema-3.png"
                                alt="Village life 3"
                                className={responsiveClass(
                                    "w-24 h-20 rounded-lg object-cover translate-y-[20%] hover:scale-105 transition-transform duration-300",
                                    "w-32 h-24 rounded-xl object-cover translate-y-[24%] hover:scale-110 transition-transform duration-300",
                                    "w-60 rounded-2xl object-cover translate-y-[10%] hover:scale-115 transition-transform duration-300"
                                )}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Food Gallery */}
            <section
                className={responsiveClass(
                    "px-3 py-8",
                    "px-5 py-12",
                    "px-6 py-16"
                )}
            >
                <div
                    className={responsiveClass(
                        "flex gap-2 overflow-x-auto",
                        "flex gap-3 overflow-x-auto",
                        "flex gap-6 overflow-x-auto"
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
                                    "relative w-24 h-28 rounded-xl flex-shrink-0 group transition-all duration-300 hover:scale-105",
                                    "relative w-32 h-36 rounded-2xl flex-shrink-0 group transition-all duration-300 hover:scale-110",
                                    "relative w-64 h-72 rounded-3xl group transition-all duration-300 hover:scale-115"
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
                                // Gabungkan semua kelas ke dalam satu className
                                className={twMerge(
                                    responsiveClass(
                                        "absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-emerald-900 rounded-xl flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                        "absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-emerald-900 rounded-2xl flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                        "absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-emerald-900 rounded-3xl flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    ),
                                    "p-4"
                                )}
                            >
                                <h3
                                    className={responsiveClass(
                                        "text-white text-lg font-bold font-['Montserrat'] mb-1 text-left w-full",
                                        "text-white text-xl font-bold font-['Montserrat'] mb-2 text-left w-full",
                                        "text-white text-2xl font-bold font-['Montserrat'] mb-2 text-left w-full"
                                    )}
                                >
                                    {food.title}
                                </h3>
                                <p
                                    className={responsiveClass(
                                        "text-white text-xs font-normal font-['Albert_Sans'] leading-tight text-left w-full",
                                        "text-white text-sm font-normal font-['Albert_Sans'] leading-relaxed text-left w-full",
                                        "text-white text-base font-normal font-['Albert_Sans'] leading-relaxed text-left w-full"
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
                    "px-3 py-8 relative",
                    "px-5 py-12 relative",
                    "px-12 py-16 relative"
                )}
            >
                <div
                    className={responsiveClass(
                        "flex flex-col gap-4",
                        "flex flex-col gap-6",
                        "flex flex-row gap-12"
                    )}
                >
                    <div className="flex-1">
                        <h2
                            className={responsiveClass(
                                "text-emerald-900 text-lg font-bold font-['Montserrat'] mb-2",
                                "text-emerald-900 text-2xl font-bold font-['Montserrat'] mb-3",
                                "text-emerald-900 text-4xl font-bold font-['Montserrat'] mb-4"
                            )}
                        >
                            Jelajahi Keindahan Ohoi Ngadi
                        </h2>
                        <p
                            className={responsiveClass(
                                "text-black text-sm font-normal font-['Albert_Sans'] leading-tight",
                                "text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed",
                                "text-black text-3xl font-normal font-['Albert_Sans'] leading-relaxed"
                            )}
                        >
                            Akses lokasi, rute terbaik, dan fasilitas umum tersedia di sini
                        </p>
                    </div>
                </div>

                {/* Map & Location List */}
                <div className="relative w-full">
                    {/* Addition Asset (z-0, paling belakang) */}
                    <div
                        // Gabungkan semua kelas ke dalam satu className
                        className={twMerge(
                            responsiveClass(
                                "hidden",
                                "block",
                                "block"
                            ),
                            "absolute right-0 bottom-0 pointer-events-none z-0"
                        )}
                    >
                        <img
                            src="/images/addition-asset.png"
                            alt="Additional Asset"
                            className={responsiveClass(
                                "w-20 h-auto",
                                "w-24 h-auto",
                                "w-56 h-auto"
                            )}
                        />
                    </div>
                    {/* Konten utama (map & lokasi) di depan asset */}
                    <div
                        className={responsiveClass(
                            "w-full flex flex-col mt-10 gap-4 relative z-10",
                            "w-full flex flex-row mt-10 gap-8 relative z-10",
                            "w-full flex flex-row mt-10 gap-12 relative z-10"
                        )}
                    >
                        {/* Map Image */}
                        <img
                            className={twMerge(
                                responsiveClass(
                                    "w-full h-[260px] object-cover",
                                    "w-[737px] h-[400px] object-cover",
                                    "w-[60vw] object-cover"
                                ),
                                "rounded-2xl transition-transform duration-300 hover:scale-105"
                            )}
                            src="/images/map-full.png"
                            alt="Peta Ohoi Ngadi"
                            draggable={false}
                        />
                        {/* Location List */}
                        <div className={responsiveClass(
                            "w-full flex flex-col gap-2 mt-4",
                            "w-[30vw] flex flex-col gap-2 mt-0",
                            "w-[30vw] flex flex-col gap-4 mt-0"
                        )}>
                            <div className="text-emerald-900 text-4xl font-bold font-['Montserrat'] mb-2">
                                Akses Lokasi
                            </div>
                            {[
                                { label: "Danau Waren", url: "https://maps.app.goo.gl/rr2Lr9ahfkZJKsJdA" },
                                { label: "Kolam Renang Dito Hills", url: "https://maps.app.goo.gl/LA9Y4B2Dz4RSN3Pr7" },
                                { label: "Homestay", url: "https://maps.app.goo.gl/6FWUPUcs7CzCRZid8" },
                                { label: "Lapangan Desa", url: "https://maps.app.goo.gl/6FWUPUcs7CzCRZid8" },
                                { label: "Masjid Al Mu’minun", url: "https://maps.app.goo.gl/grRGU3PGAsJ6ztF9A" },
                                { label: "Gereja St. Paulus", url: "https://maps.app.goo.gl/P1QZ4CriBBK7wM8r8" },
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    // Gabungkan semua kelas ke dalam satu className
                                    className={twMerge(
                                        "self-stretch px-3.5 py-[5px] bg-emerald-900 rounded-[10px] flex justify-between items-center hover:bg-emerald-800 transition",
                                        "shadow-[0_2px_8px_0_rgba(20,83,45,0.08)]"
                                    )}
                                >
                                    <div className="text-white text-2xl md:text-3xl font-medium font-['Albert_Sans']">
                                        {item.label}
                                    </div>
                                    <div className="w-10 h-10 relative overflow-hidden flex items-center justify-center">
                                        <div className="w-9 h-9 absolute left-[1.65px] top-[1.65px] bg-white rounded-full flex items-center justify-center">
                                            <Icon icon="ic:round-assistant-direction" className="w-6 h-6 text-emerald-900" />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
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
                                    ×
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
                        "px-3 py-8 ml-0",
                        "px-5 py-12 ml-12",
                        "px-12 py-16 ml-8 mr-8"
                    )}
                />
            </div>

            <div className="relative">
                {/* Background Asset hanya satu, di kanan */}
                <img
                    src="/images/vector-asset.png"
                    alt="Background Asset"
                    className={responsiveClass(
                        "hidden",
                        "block absolute right-0 top-0 w-[320px] h-auto opacity-40 pointer-events-none z-10",
                        "block absolute right-0 top-0 w-[900px] h-auto opacity-40 pointer-events-none z-10"
                    )}
                />

                {/* Article Section */}
                <ArticleSection
                    className={responsiveClass(
                        "px-3 py-8 ml-0 relative z-10",
                        "px-5 py-12 ml-12 relative z-10",
                        "px-12 py-16 ml-8 mr-8 relative z-10"
                    )}
                />

                {/* Info Section */}
                <InfoSection
                    className={responsiveClass(
                        "px-3 py-8 ml-0 relative z-10",
                        "px-5 py-12 ml-12 relative z-10",
                        "px-12 py-16 ml-8 mr-8 relative z-10"
                    )}
                />

                {/* Location Section */}
                <section
                    className={responsiveClass(
                        "px-3 py-8 relative z-10",
                        "px-5 py-12 relative z-10",
                        "px-12 py-16 relative z-10"
                    )}
                >
                    <div
                        className={responsiveClass(
                            "mb-6",
                            "mb-8",
                            "mb-10"
                        )}
                    >
                        <h2
                            className={responsiveClass(
                                "text-emerald-900 text-lg font-bold font-['Montserrat'] mb-2",
                                "text-emerald-900 text-2xl font-bold font-['Montserrat'] mb-3",
                                "text-emerald-900 text-4xl font-bold font-['Montserrat'] mb-4"
                            )}
                        >
                            Peta Lokasi
                        </h2>
                        <p
                            className={responsiveClass(
                                "text-black text-sm font-normal font-['Albert_Sans'] leading-tight",
                                "text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed",
                                "text-black text-3xl font-normal font-['Albert_Sans'] leading-relaxed"
                            )}
                        >
                            Temukan <span className="italic">katong</span> disini!
                        </p>
                    </div>

                    {/* Map Placeholder */}
                    <div
                        // Gabungkan semua kelas ke dalam satu className
                        className={twMerge(
                            responsiveClass(
                                "w-full h-48 rounded-lg overflow-hidden flex items-end",
                                "w-full h-64 rounded-lg overflow-hidden flex items-end",
                                "w-[900px] rounded-lg overflow-hidden flex items-end"
                            ),
                            "mb-0"
                        )}
                    >
                        <img
                            src="/images/lokasi.png"
                            alt="Lokasi Ohoi Ngadi"
                            // Gabungkan semua kelas ke dalam satu className
                            className={twMerge(
                                "w-full h-full object-contain hover:scale-105 transition-transform duration-300",
                                "block ml-0 mb-0"
                            )}
                            draggable={false}
                        />
                    </div>
                </section>
            </div>

            <FooterSection />
        </div>
    );
};

export default VillageWebsite;