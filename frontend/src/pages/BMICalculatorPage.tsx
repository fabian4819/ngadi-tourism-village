import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { twMerge } from 'tailwind-merge';
import { useBreakpoint, getResponsiveValue } from "../hooks/useBreakpoint";
// import { Link } from 'react-router-dom'; // Using Link for back button if desired, though not explicitly in Figma for this page

const BMICalculatorPage: React.FC = () => {
    const currentBreakpoint = useBreakpoint();
    const [height, setHeight] = useState<number | string>(""); // in cm
    const [weight, setWeight] = useState<number | string>(""); // in kg
    const [bmiScore, setBmiScore] = useState<number | null>(null);
    const [bmiCategory, setBmiCategory] = useState<
        'underweight' | 'normal' | 'overweight' | null
    >(null);

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

    const calculateBMI = () => {
        const h = Number(height);
        const w = Number(weight);

        if (h <= 0 || w <= 0 || isNaN(h) || isNaN(w)) {
            setBmiScore(null);
            setBmiCategory(null);
            return;
        }

        const heightInMeters = h / 100;
        const bmi = w / (heightInMeters * heightInMeters);
        const roundedBmi = parseFloat(bmi.toFixed(1)); // Round to 1 decimal place

        setBmiScore(roundedBmi);

        if (bmi < 18.5) {
            setBmiCategory('underweight');
        } else if (bmi >= 25) {
            setBmiCategory('overweight');
        } else {
            setBmiCategory('normal');
        }
    };

    const getCategoryDetails = useMemo(() => {
        switch (bmiCategory) {
            case 'underweight':
                return {
                    text: "Hasil perhitungan BMI Anda menunjukkan kategori di bawah batas normal (underweight).",
                    introText: "Berikut beberapa rekomendasi konsumsi makanan untuk membantu meningkatkan asupan energi dan berat badan secara sehat:",
                    bgColor: 'bg-amber-300',
                    textColor: 'text-stone-900',
                    scoreColor: 'text-stone-900',
                    recommendations: [
                        "Nikmati camilan sore berupa gogoda dan pie susu lontar untuk menambah asupan kalori secara bertahap.",
                        "Konsumsi papeda dengan ikan kuah kuning sebagai sumber karbohidrat kompleks dan protein berkualitas tinggi.",
                        "Lengkapi pola makan Anda dengan lad dan ikan tuna goreng, yang kaya akan protein, lemak sehat, dan cita rasa khas daerah."
                    ],
                    hasActivitiesHeader: true, // Show header "Ini Aktivitas..."
                    activitiesHeader: "Rekomendasi Asupan Makanan" // Custom header for underweight
                };
            case 'normal':
                return {
                    text: "Selamat! Hasil perhitungan BMI Anda menunjukkan kategori normal.",
                    introText: "Status gizimu sudah ideal? Mantap! Sekarang saatnya jaga performa tubuh sambil nikmatin aktivitas yang bikin badan sehat, hati senang:",
                    bgColor: 'bg-emerald-900',
                    textColor: 'text-white',
                    scoreColor: 'text-white',
                    recommendations: [
                        "Isi harimu dengan jalan santai menyusuri rute Danau Waren ke Wisata Lupus—bukan sekadar langkah, ini cara terbaik menyatu dengan alam dan menjernihkan pikiran.",
                        "Bikin tubuh tetap bugar dengan senam Tobelo, Meti Kei, dan Tabola Bale, gerakan tradisional penuh energi yang jadi bukti sehat bisa sekalian seru.",
                        "Refresh badan dan pikiran dengan berenang serta snorkeling di pantai Ohoi Labetawi, karena kesehatan juga soal menikmati hidup tanpa terburu-buru."
                    ],
                    hasActivitiesHeader: true, // Show header "Ini Aktivitas..."
                    activitiesHeader: "Aktivitas yang Cocok Buat Kamu!" // Generic header for normal
                };
            case 'overweight':
                return {
                    text: "Hasil perhitungan BMI Anda menunjukkan kategori melebihi batas normal (overweight).",
                    introText: "Berikut beberapa saran aktivitas fisik yang dapat membantu meningkatkan kebugaran tubuh Anda:",
                    bgColor: 'bg-rose-500',
                    textColor: 'text-white',
                    scoreColor: 'text-white',
                    recommendations: [
                        "Lakukan jalan santai menyusuri rute dari Danau Waren (Ohoi Ngadi) menuju Wisata Lupus (Ohoi Labetawi), dengan pemberhentian singkat di Namser (Ohoi Dullah) untuk menikmati suasana.",
                        "Ikuti senam Tobelo, Meti Kei, dan Tabola Bale selama 30 menit untuk meningkatkan daya tahan tubuh dan menjaga kesehatan jantung.",
                        "Berenang dan snorkeling di sepanjang pantai Ohoi Labetawi dapat menjadi pilihan aktivitas yang menyegarkan sekaligus membakar kalori."
                    ],
                    hasActivitiesHeader: true, // Show header "Ini Aktivitas..."
                    activitiesHeader: "Ini Aktivitas yang Cocok Buat Kamu!" // Specific header for overweight
                };
            default:
                return {
                    text: "",
                    introText: "",
                    bgColor: 'bg-gray-100', // Default background for no result
                    textColor: 'text-gray-500',
                    scoreColor: 'text-gray-500',
                    recommendations: [],
                    hasActivitiesHeader: false,
                    activitiesHeader: ""
                };
        }
    }, [bmiCategory]);


    return (
        <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">

            <Navbar />
            <main className={twMerge(
                responsiveClass(
                    "flex-grow px-3 py-8", // mobile
                    "flex-grow px-5 py-12", // tablet
                    "flex-grow px-12 py-16" // desktop
                ),
                "relative z-10 flex flex-col items-center" // Ensure main content is above background lines
            )}>
                {/* Header Section */}
                <div className="flex flex-col items-center gap-3.5 mb-16">
                    <h1 className={responsiveClass(
                        "text-stone-900 text-3xl font-normal text-center", // mobile
                        "text-stone-900 text-5xl font-normal text-center", // tablet
                        "text-stone-900 text-6xl font-normal text-center" // desktop
                    )}>
                        <span className="font-['Cormorant']">J</span>
                        <span className="font-['Vivaldi']">aga </span>
                        <span className="font-['Cormorant']">K</span>
                        <span className="font-['Vivaldi']">esehatan, </span>
                        <span className="font-['Cormorant']">M</span>
                        <span className="font-['Vivaldi']">ulai dari </span>
                        <span className="font-['Cormorant']">D</span>
                        <span className="font-['Vivaldi']">esa</span>
                    </h1>
                    <p className={responsiveClass(
                        "w-full text-center text-black text-sm font-normal font-['Albert_Sans'] leading-tight", // mobile
                        "w-full text-center text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed", // tablet
                        "w-[1056px] text-center text-black text-3xl font-normal font-['Albert_Sans'] leading-relaxed" // desktop
                    )}>
                        Yuk, hitung BMI (Body Mass Index)-mu dengan mudah. Masukkan tinggi dan berat badan, lalu dapatkan info apakah kamu sudah ideal dan rekomendasi aktivitas sehat untukmu!
                    </p>
                </div>

                {/* BMI Input and Result Section */}
                <div className={twMerge(
                    responsiveClass(
                        "w-full flex flex-col gap-8 items-center", // mobile
                        "w-full flex flex-col gap-12 items-start", // tablet: still column
                        "w-full flex flex-row justify-center gap-12 items-start" // desktop: now row
                    ),
                    "max-w-screen-lg mx-auto" // Limit max width for better readability
                )}>
                    {/* Input Section */}
                    <div className={responsiveClass(
                        "w-full px-4 flex flex-col gap-5", // mobile
                        "w-96 flex flex-col gap-5", // tablet & desktop (from Figma)
                    )}>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <label htmlFor="height-input" className="self-stretch text-emerald-900 text-2xl font-semibold font-['Albert_Sans']">Tinggi Badan</label>
                            <div className="self-stretch h-14 px-3.5 py-1.5 bg-white rounded-[20px] outline outline-1 outline-emerald-900 flex justify-between items-center">
                                <input
                                    id="height-input"
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    placeholder="0"
                                    className="text-center justify-start text-black/50 text-2xl font-normal font-['Albert_Sans'] flex-grow bg-transparent focus:outline-none"
                                />
                                <span className="text-center justify-start text-emerald-900 text-2xl font-bold font-['Albert_Sans']">cm</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <label htmlFor="weight-input" className="self-stretch text-emerald-900 text-2xl font-semibold font-['Albert_Sans']">Berat Badan</label>
                            <div className="self-stretch h-14 px-3.5 py-1.5 bg-white rounded-[20px] outline outline-1 outline-emerald-900 flex justify-between items-center">
                                <input
                                    id="weight-input"
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder="0"
                                    className="text-center justify-start text-black/50 text-2xl font-normal font-['Albert_Sans'] flex-grow bg-transparent focus:outline-none"
                                />
                                <span className="text-center justify-start text-emerald-900 text-2xl font-bold font-['Albert_Sans']">kg</span>
                            </div>
                        </div>
                        <button
                            onClick={calculateBMI}
                            className="self-stretch h-12 px-3 py-1.5 bg-emerald-900 rounded-2xl outline outline-[0.80px] outline-emerald-900 flex justify-center items-center gap-60 text-white text-xl font-semibold font-['Albert_Sans'] hover:bg-emerald-800 transition"
                            aria-label="Cek BMI"
                        >
                            Cek BMI
                        </button>
                    </div>

                    {/* Result Card */}
                    {bmiScore !== null && (
                        <div
                            className={twMerge(
                                responsiveClass(
                                    "w-full p-5 rounded-[20px] flex flex-col items-center gap-3", // mobile
                                    "w-[664px] p-5 rounded-[20px] flex justify-start items-center gap-7", // tablet & desktop (from Figma)
                                ),
                                getCategoryDetails.bgColor // Dynamic background color
                            )}
                        >
                            <div className="w-40 flex flex-col justify-center items-center">
                                <div className={twMerge("self-stretch text-center text-2xl font-semibold font-['Albert_Sans']", getCategoryDetails.scoreColor)}>Skor BMI</div>
                                <div className={twMerge("self-stretch text-center text-7xl font-semibold font-['Albert_Sans']", getCategoryDetails.scoreColor)}>{bmiScore}</div>
                            </div>
                            <p className={twMerge("w-full text-xl font-normal font-['Albert_Sans'] leading-relaxed", getCategoryDetails.textColor, responsiveClass("text-center", "text-left"))}>
                                {getCategoryDetails.text}
                                <br/><br/>
                                {/* Display introText if it exists */}
                                {getCategoryDetails.introText && (
                                    <span className="block mt-2">{getCategoryDetails.introText}</span>
                                )}
                            </p>
                        </div>
                    )}
                </div>

                {/* Activity Recommendation Section (Conditional based on BMI Score being present and recommendations existing) */}
                {bmiScore !== null && getCategoryDetails.recommendations.length > 0 && getCategoryDetails.hasActivitiesHeader && (
                    <section className={twMerge(
                        responsiveClass(
                            "w-full px-3 py-8", // mobile
                            "w-full px-5 py-12", // tablet
                            "w-full px-12 py-16" // desktop
                        ),
                        "mt-16 text-center"
                    )}>
                        <h2 className={responsiveClass(
                            "text-emerald-900 text-2xl font-bold font-['Montserrat'] mb-8",
                            "text-emerald-900 text-3xl font-bold font-['Montserrat'] mb-10",
                            "text-emerald-900 text-4xl font-bold font-['Montserrat'] mb-12"
                        )}>
                            {getCategoryDetails.activitiesHeader}
                        </h2>
                        <div className={responsiveClass(
                            "flex flex-col gap-6", // mobile
                            "grid grid-cols-2 gap-8", // tablet
                            "grid grid-cols-3 gap-10" // desktop
                        )}>
                            {getCategoryDetails.recommendations.map((rec, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-left">
                                    <h3 className="text-emerald-900 text-3xl font-bold font-['Montserrat'] mb-4">{index + 1}</h3>
                                    <p className="text-stone-900 text-lg font-medium font-['Albert_Sans'] leading-relaxed">
                                        {rec}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
            <FooterSection />
        </div>
    );
};

export default BMICalculatorPage;