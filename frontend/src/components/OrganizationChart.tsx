import { twMerge } from 'tailwind-merge';

const OrganizationChart = () => {
  const responsiveClass = (base: string, md?: string, lg?: string) => {
    return twMerge(base, md && `md:${md}`, lg && `lg:${lg}`);
  };

  return (
    <section className={responsiveClass(
      "px-3 py-8", // mobile
      "px-5 py-12", // tablet
      "px-12 py-16" // desktop
    )}>
      <div className={responsiveClass(
        "mb-6", // mobile
        "mb-8", // tablet
        "mb-10" // desktop
      )}>
        <h2 className={responsiveClass(
          "text-emerald-900 text-lg font-bold font-['Montserrat'] mb-2", // mobile
          "text-emerald-900 text-2xl font-bold font-['Montserrat'] mb-3", // tablet
          "text-emerald-900 text-3xl font-bold font-['Montserrat'] mb-4" // desktop
        )}>
          Pengerak Desa <span className="text-emerald-900">Katong</span>
        </h2>
        <p className={responsiveClass(
          "text-black text-sm font-normal font-['Albert_Sans'] leading-tight", // mobile
          "text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed", // tablet
          "text-black text-xl font-normal font-['Albert_Sans'] leading-relaxed" // desktop
        )}>
          Inilah susunan struktur resmi Ohoi Ngadi
        </p>
      </div>

      {/* Organization Chart */}
      <div className={responsiveClass(
        "relative bg-white overflow-hidden min-h-96", // mobile
        "relative bg-white overflow-hidden min-h-[500px]", // tablet
        "relative bg-white overflow-hidden min-h-[600px]" // desktop
      )}>
        {/* Head Position */}
        <div className={responsiveClass(
          "absolute top-6 left-1/2 transform -translate-x-1/2", // mobile
          "absolute top-8 left-1/2 transform -translate-x-1/2", // tablet
          "absolute top-12 left-1/2 transform -translate-x-1/2" // desktop
        )}>
          <div className={responsiveClass(
            "w-40 px-2 py-3 bg-white border-2 border-emerald-900 rounded text-center", // mobile
            "w-48 px-3 py-4 bg-white border-2 border-emerald-900 rounded text-center", // tablet
            "w-64 px-4 py-5 bg-white border-2 border-emerald-900 rounded text-center" // desktop
          )}>
            <div className={responsiveClass(
              "text-emerald-900 text-xs font-bold font-['Montserrat'] mb-1", // mobile
              "text-emerald-900 text-sm font-bold font-['Montserrat'] mb-2", // tablet
              "text-emerald-900 text-lg font-bold font-['Montserrat'] mb-2" // desktop
            )}>
              PJ. Kepala Ohoi Ngadi
            </div>
            <div className={responsiveClass(
              "text-emerald-900 text-xs font-medium font-['Montserrat']", // mobile
              "text-emerald-900 text-sm font-medium font-['Montserrat']", // tablet
              "text-emerald-900 text-lg font-medium font-['Montserrat']" // desktop
            )}>
              Drs. Dullah Atnangar, MM
            </div>
          </div>
        </div>

        {/* Connection Lines - Simplified for mobile */}
        <div className={responsiveClass(
          "hidden", // mobile - hide complex lines
          "block", // tablet
          "block" // desktop
        )}>
          {/* Vertical line from head */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-emerald-900"></div>
          {/* Horizontal line */}
          <div className="absolute top-40 left-1/4 w-1/2 h-0.5 bg-emerald-900"></div>
        </div>

        {/* Secretary Position */}
        <div className={responsiveClass(
          "absolute top-32 right-4", // mobile
          "absolute top-40 right-8", // tablet
          "absolute top-48 right-12" // desktop
        )}>
          <div className={responsiveClass(
            "w-36 px-2 py-2 bg-white border-2 border-emerald-900 rounded text-center", // mobile
            "w-44 px-3 py-3 bg-white border-2 border-emerald-900 rounded text-center", // tablet
            "w-56 px-4 py-4 bg-white border-2 border-emerald-900 rounded text-center" // desktop
          )}>
            <div className={responsiveClass(
              "text-emerald-900 text-xs font-bold font-['Montserrat'] mb-1", // mobile
              "text-emerald-900 text-sm font-bold font-['Montserrat'] mb-1", // tablet
              "text-emerald-900 text-lg font-bold font-['Montserrat'] mb-2" // desktop
            )}>
              Sekretaris Ohoi Ngadi
            </div>
            <div className={responsiveClass(
              "text-emerald-900 text-xs font-medium font-['Montserrat']", // mobile
              "text-emerald-900 text-sm font-medium font-['Montserrat']", // tablet
              "text-emerald-900 text-lg font-medium font-['Montserrat']" // desktop
            )}>
              Paulus Renwarin
            </div>
          </div>
        </div>

        {/* Left Side - Sections */}
        <div className={responsiveClass(
          "absolute top-44 left-2", // mobile
          "absolute top-56 left-4", // tablet
          "absolute top-72 left-8" // desktop
        )}>
          {["Kasi Kesejahteraan|M. Kaim Fadirubun", "Kasi Pemerintahan|Ririn S. Sugito", "Kasi Pelayanan|Nia Bugis"].map((item, index) => {
            const [title, name] = item.split('|');
            return (
              <div key={index} className={responsiveClass(
                "w-32 px-2 py-2 bg-white border-2 border-emerald-900 rounded text-center mb-2", // mobile
                "w-40 px-3 py-3 bg-white border-2 border-emerald-900 rounded text-center mb-3", // tablet
                "w-52 px-4 py-4 bg-white border-2 border-emerald-900 rounded text-center mb-4" // desktop
              )}>
                <div className={responsiveClass(
                  "text-emerald-900 text-xs font-bold font-['Montserrat'] mb-1", // mobile
                  "text-emerald-900 text-sm font-bold font-['Montserrat'] mb-1", // tablet
                  "text-emerald-900 text-lg font-bold font-['Montserrat'] mb-2" // desktop
                )}>
                  {title}
                </div>
                <div className={responsiveClass(
                  "text-emerald-900 text-xs font-medium font-['Montserrat']", // mobile
                  "text-emerald-900 text-sm font-medium font-['Montserrat']", // tablet
                  "text-emerald-900 text-lg font-medium font-['Montserrat']" // desktop
                )}>
                  {name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side - Subsections */}
        <div className={responsiveClass(
          "absolute top-56 right-2", // mobile
          "absolute top-72 right-4", // tablet
          "absolute top-96 right-8" // desktop
        )}>
          {["Kaur Keuangan|Amirdat A. Amin", "Kaur Perencanaan|Rahima Kabalmay", "Kaur Umum|Lusia Narahawarin"].map((item, index) => {
            const [title, name] = item.split('|');
            return (
              <div key={index} className={responsiveClass(
                "w-32 px-2 py-2 bg-white border-2 border-emerald-900 rounded text-center mb-2", // mobile
                "w-40 px-3 py-3 bg-white border-2 border-emerald-900 rounded text-center mb-3", // tablet
                "w-52 px-4 py-4 bg-white border-2 border-emerald-900 rounded text-center mb-4" // desktop
              )}>
                <div className={responsiveClass(
                  "text-emerald-900 text-xs font-bold font-['Montserrat'] mb-1", // mobile
                  "text-emerald-900 text-sm font-bold font-['Montserrat'] mb-1", // tablet
                  "text-emerald-900 text-lg font-bold font-['Montserrat'] mb-2" // desktop
                )}>
                  {title}
                </div>
                <div className={responsiveClass(
                  "text-emerald-900 text-xs font-medium font-['Montserrat']", // mobile
                  "text-emerald-900 text-sm font-medium font-['Montserrat']", // tablet
                  "text-emerald-900 text-lg font-medium font-['Montserrat']" // desktop
                )}>
                  {name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OrganizationChart;