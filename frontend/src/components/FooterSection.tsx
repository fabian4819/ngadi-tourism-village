import { twMerge } from "tailwind-merge";
import { Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint";


const FooterSection = () => {
    const currentBreakpoint = useBreakpoint();

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
            {/* Footer */}
            <footer className="w-full bg-emerald-900 px-6 py-12 relative z-10">
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
                                        <SiTiktok className="w-6 h-6 text-white" />
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

            {/* NEW: Footer Asset */}
            <div className={twMerge("w-full relative", "bg-emerald-900")}>
                <img
                    src="/images/footer-asset.png"
                    alt="Footer Asset"
                    className={responsiveClass(
                        "w-full h-auto object-cover", // mobile
                        "w-full h-auto object-cover", // tablet
                        "w-full h-auto object-cover" // desktop
                    )}
                />
            </div>
        </>
    );
};

export default FooterSection;