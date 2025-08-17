import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronDown, ChevronUp } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint";
import { Link } from 'react-router-dom'; // <--- ADD THIS IMPORT

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // State for "Kenali Desa" dropdown
    const currentBreakpoint = useBreakpoint();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

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
        <>
            {/* Mobile Menu (controlled internally by Navbar) */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />

            {/* Header */}
            <header
                className={responsiveClass(
                    "w-full px-4 py-4 bg-white/95 backdrop-blur-sm sticky top-0 z-40 shadow-sm", // mobile
                    "px-8 py-6 bg-white/95 backdrop-blur-sm sticky top-0 z-40 shadow-sm", // tablet
                    "px-12 py-8 bg-white/95 backdrop-blur-sm sticky top-0 z-40 shadow-sm" // desktop
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
                                "h-8 w-auto max-w-[40vw] hover:scale-105 transition-transform duration-300", // mobile
                                "h-10 w-auto max-w-[35vw] hover:scale-105 transition-transform duration-300", // tablet
                                "h-12 w-auto max-w-[25vw] hover:scale-105 transition-transform duration-300" // desktop
                            )}
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div
                        className={responsiveClass(
                            "hidden", // mobile
                            "hidden", // tablet
                            "flex items-center gap-8 animate-fade-in-up" // desktop
                        )}
                    >
                        <div className="flex items-center gap-8 px-6 py-3 rounded-full border-2 border-emerald-900/20 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-emerald-900/40 transition-all duration-300 hover-lift">
                            {/* Changed to Link */}
                            <Link to="/" className="text-emerald-900 text-base font-semibold hover:text-emerald-700 transition-colors duration-300 hover:scale-105 transform">
                                🏠 Beranda
                            </Link>
                            {/* Changed to Link */}
                            <Link to="/artikel" className="text-emerald-900 text-base font-semibold hover:text-emerald-700 transition-colors duration-300 hover:scale-105 transform">
                                📰 Artikel
                            </Link>
                            <Link to="/tes-bmi" className="text-emerald-900 text-base font-semibold hover:text-emerald-700 transition-colors duration-300 hover:scale-105 transform">
                                🏥 Tes BMI
                            </Link>
                        </div>
                        <div className="relative inline-block">
                            {/* Tombol Kenali Desa */}
                            <div
                                className={`
                                    flex items-center justify-between px-6 py-3 bg-emerald-900 text-white text-base font-bold cursor-pointer
                                    border-2 border-emerald-900 btn-modern hover-lift
                                    rounded-t-3xl rounded-b-3xl hover:bg-emerald-700 transition-all duration-300
                                `}
                                onClick={toggleDropdown}
                                style={{
                                    borderBottomLeftRadius: isOpen ? 0 : '1.5rem',
                                    borderBottomRightRadius: isOpen ? 0 : '1.5rem',
                                }}
                            >
                                <span>🏝️ Kenali Ohoi</span>
                                {isOpen ? (
                                    <ChevronUp className="w-6 h-6 text-white transition-transform duration-200" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-white transition-transform duration-200" />
                                )}
                            </div>

                            {/* Dropdown Content */}
                            {isOpen && (
                                <div className="absolute left-0 right-0 z-10">
                                    <div className="bg-white/95 backdrop-blur-sm border-x-2 border-b-2 border-emerald-900 rounded-b-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                                        <div className="flex flex-col">
                                            {/* Item: Ohoi Dullah */}
                                            <a
                                                href="https://ohoi-dullah.id"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 border-b-2 border-emerald-900/20 text-left hover:bg-emerald-50 focus:bg-emerald-100 transition-all duration-300 hover:scale-105 transform group"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <span className="text-emerald-900 text-base font-semibold group-hover:text-emerald-700">
                                                    🏖️ Ohoi Dullah
                                                </span>
                                            </a>
                                            {/* Item: Ohoi Labetawi */}
                                            <a
                                                href="https://ohoi-labetawi.id"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 text-left hover:bg-emerald-50 focus:bg-emerald-100 transition-all duration-300 hover:scale-105 transform group"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <span className="text-emerald-900 text-base font-semibold group-hover:text-emerald-700">
                                                    🌊 Ohoi Labetawi
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className={responsiveClass(
                            "p-3 bg-emerald-900 rounded-full hover:bg-emerald-700 hover:scale-110 transition-all duration-300 shadow-lg", // mobile
                            "p-3 bg-emerald-900 rounded-full hover:bg-emerald-700 hover:scale-110 transition-all duration-300 shadow-lg", // tablet
                            "hidden" // desktop
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Buka menu navigasi"
                    >
                        {/* Hamburger Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </nav>
            </header>
        </>
    );
};

export default Navbar;