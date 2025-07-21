import { twMerge } from 'tailwind-merge';

interface OrganizationChartProps {
  className?: string;
}

const OrganizationChart = ({ className = "" }: OrganizationChartProps) => {
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
          Penggerak Desa <span className="text-emerald-900 italic">Katong</span>
        </h2>
        <p className={responsiveClass(
          "text-black text-sm font-normal font-['Albert_Sans'] leading-tight", // mobile
          "text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed", // tablet
          "text-black text-3xl font-normal font-['Albert_Sans'] leading-relaxed" // desktop
        )}>
          Inilah susunan struktur resmi Ohoi Ngadi
        </p>
      </div>
      <div className={responsiveClass(
        "w-full flex justify-center items-center relative min-h-[220px]", // mobile
        "w-full flex justify-center items-center relative min-h-[320px]", // tablet
        "w-full flex justify-center items-center relative min-h-[420px]" // desktop
      )}
        style={{ overflow: "visible" }} // Tambahkan ini!
      >
        {/* Chart */}
        <img
          src="/images/organization-chart.png"
          alt="Struktur Organisasi Ohoi Ngadi"
          className={responsiveClass(
            "w-full max-w-xs rounded-xl relative z-10", // mobile
            "w-full max-w-lg rounded-2xl relative z-10", // tablet
            "w-full max-w-7xl rounded-2xl relative z-10" // desktop
          )}
        />
        {/* Decorative asset on the right, behind the chart */}
        {/* <img
          src="/images/addition-asset.png"
          alt="Dekorasi Kanan"
          className={responsiveClass(
            "hidden absolute right-0 bottom-0 w-24 z-0", // mobile (hidden)
            "block absolute right-0 bottom-0 w-32 z-0", // tablet
            "block absolute right-0 bottom-0 w-56 z-0" // desktop
          )}
          style={{ pointerEvents: "none" }}
        /> */}
      </div>
    </section>
  );
};

export default OrganizationChart;