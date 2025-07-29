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
                                "w-[30vw]", // mobile
                                "w-[30vw]", // tablet
                                "w-[20vw]" // desktop
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
                            {/* Changed to Link */}
                            <Link to="/" className="text-stone-900 text-sm font-medium">
                                Beranda
                            </Link>
                            {/* Changed to Link */}
                            <Link to="/artikel" className="text-stone-900 text-sm font-medium">
                                Artikel
                            </Link>
                            <Link to="/tes-bmi" className="text-stone-900 text-sm font-medium">
                                Tes BMI
                            </Link>
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
                                            {/* You might want these to be links to sub-pages later, e.g., <Link to="/kenali-desa/dullah"> */}
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