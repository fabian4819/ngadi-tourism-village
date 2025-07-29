import { twMerge } from 'tailwind-merge';
import { Download } from 'lucide-react';

interface InfoSectionProps {
  className?: string;
}

const InfoSection = ({ className = "" }: InfoSectionProps) => {
  const responsiveClass = (base: string, md?: string, lg?: string) => {
    return twMerge(base, md && `md:${md}`, lg && `lg:${lg}`);
  };

  return (
    <section className={twMerge(
      className,
      responsiveClass(
        "px-3 py-8", // mobile
        "px-5 py-12", // tablet
        "px-12 py-16" // desktop
      )
    )}>
      <div className={responsiveClass(
        "mb-6", // mobile
        "mb-8", // tablet
        "mb-10" // desktop
      )}>
        <h2 className={responsiveClass(
          "text-emerald-900 text-lg font-bold font-['Montserrat'] mb-2", // mobile
          "text-emerald-900 text-2xl font-bold font-['Montserrat'] mb-3", // tablet
          "text-emerald-900 text-4xl font-bold font-['Montserrat'] mb-4" // desktop
        )}>
          Pojok Informasi
        </h2>
        <p className={responsiveClass(
          "text-black text-sm font-normal font-['Albert_Sans'] leading-tight", // mobile
          "text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed", // tablet
          "text-black text-3xl font-normal font-['Albert_Sans'] leading-relaxed" // desktop
        )}>
          Dapatkan informasi lengkap seputar desa kami
        </p>
      </div>

      {/* Info Cards */}
      <div className={responsiveClass(
        "flex flex-col gap-3", // mobile
        "flex flex-wrap gap-4", // tablet
        "flex flex-row gap-6" // desktop
      )}>
        <button
          type="button"
          className={responsiveClass(
            "flex items-center gap-2 px-4 py-2 bg-emerald-900 rounded-2xl focus:outline-none", // mobile
            "flex items-center gap-3 px-5 py-3 bg-emerald-900 rounded-2xl focus:outline-none", // tablet
            "flex items-center gap-3 px-6 py-4 bg-emerald-900 rounded-3xl focus:outline-none" // desktop
          )}
          onClick={() => window.open("/documents/sni-desa.pdf", "_blank")}
        >
          <span className={responsiveClass(
            "text-white text-sm font-semibold font-['Montserrat']", // mobile
            "text-white text-lg font-semibold font-['Montserrat']", // tablet
            "text-white text-xl font-semibold font-['Montserrat']" // desktop
          )}>
            Standarisasi SNI
          </span>
          <span className={responsiveClass(
            "w-8 h-8 bg-white rounded-full flex items-center justify-center", // mobile
            "w-8 h-8 bg-white rounded-full flex items-center justify-center", // tablet
            "w-8 h-8 bg-white rounded-full flex items-center justify-center" // desktop
          )}>
            <Download className={responsiveClass(
              "w-5 h-5 text-emerald-900", // mobile
              "w-5 h-5 text-emerald-900", // tablet
              "w-5 h-5 text-emerald-900" // desktop
            )} />
          </span>
        </button>

        {/* <button type="button" className={responsiveClass(
          "flex items-center gap-2 px-4 py-2 bg-emerald-900 rounded-2xl focus:outline-none", // mobile
          "flex items-center gap-3 px-5 py-3 bg-emerald-900 rounded-2xl focus:outline-none", // tablet
          "flex items-center gap-3 px-6 py-4 bg-emerald-900 rounded-3xl focus:outline-none" // desktop
        )}>
          <span className={responsiveClass(
            "text-white text-sm font-semibold font-['Montserrat']", // mobile
            "text-white text-lg font-semibold font-['Montserrat']", // tablet
            "text-white text-xl font-semibold font-['Montserrat']" // desktop
          )}>
            Standarisasi Halal
          </span>
          <span className={responsiveClass(
            "w-8 h-8 bg-white rounded-full flex items-center justify-center", // mobile
            "w-8 h-8 bg-white rounded-full flex items-center justify-center", // tablet
            "w-8 h-8 bg-white rounded-full flex items-center justify-center" // desktop
          )}>
            <Download className={responsiveClass(
              "w-5 h-5 text-emerald-900", // mobile
              "w-5 h-5 text-emerald-900", // tablet
              "w-5 h-5 text-emerald-900" // desktop
            )} />
          </span>
        </button> */}
      </div>
    </section>
  );
};

export default InfoSection;