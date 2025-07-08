import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ChevronDown, Play, MapPin, Phone, Mail, Globe, Instagram, Facebook, Youtube } from 'lucide-react';
import OrganizationChart from './OrganizationChart';
import MobileMenu from './MobileMenu';
import ArticleSection from './ArticleSection';
import InfoSection from './InfoSection';

const VillageWebsite = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Utility function for responsive classes
  const responsiveClass = (base: string, md?: string, lg?: string) => {
    return twMerge(base, md && `md:${md}`, lg && `lg:${lg}`);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      {/* Header */}
      <header className={responsiveClass(
        "w-full px-3 py-6", // mobile
        "px-10 py-8", // tablet
        "px-12 py-10" // desktop
      )}>
        <nav className={responsiveClass(
          "flex items-center justify-between", // mobile
          "flex items-center justify-between", // tablet
          "flex items-center justify-between" // desktop
        )}>
          {/* Logo */}
          <div className={responsiveClass(
            "flex items-center gap-2", // mobile
            "flex items-center gap-2", // tablet
            "flex items-center gap-2" // desktop
          )}>
            <span className={responsiveClass(
              "text-emerald-900 text-lg font-bold font-['Montserrat']", // mobile
              "text-emerald-900 text-xl font-bold font-['Montserrat']", // tablet
              "text-emerald-900 text-2xl font-bold font-['Montserrat']" // desktop
            )}>
              Tualang Tual
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className={responsiveClass(
            "hidden", // mobile
            "hidden", // tablet
            "flex items-center gap-6" // desktop
          )}>
            <div className="flex items-center gap-8 px-5 py-2 rounded-full border border-stone-900">
              <span className="text-stone-900 text-sm font-medium">Artikel</span>
              <span className="text-stone-900 text-sm font-medium">Tes BMI</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2 bg-emerald-900 rounded-full relative group">
              <span className="text-white text-sm font-bold">Kenali Desa</span>
              <ChevronDown className="w-6 h-6 text-white" />
              
              {/* Desktop Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-36 bg-white rounded-bl-lg rounded-br-lg border border-emerald-900 py-4 hidden group-hover:block">
                <div className="px-4 py-2 border-b border-emerald-900">
                  <span className="text-emerald-900 text-sm font-medium">Ohoi Dullah</span>
                </div>
                <div className="px-4 py-2">
                  <span className="text-emerald-900 text-sm font-medium">Ohoi Labetawi</span>
                </div>
              </div>
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
      <section className={responsiveClass(
        "flex flex-col items-center gap-6 px-3", // mobile
        "flex flex-col items-center gap-8 px-5", // tablet
        "flex flex-col items-center gap-10 px-6" // desktop
      )}>
        {/* Decorative Elements */}
        <div className="flex items-center justify-center w-full">
          <div className={responsiveClass(
            "hidden", // mobile
            "flex flex-col items-center gap-1 transform rotate-180", // tablet
            "flex flex-col items-center gap-1 transform rotate-180" // desktop
          )}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`w-0 ${i % 2 === 0 ? 'h-5' : 'h-12'} bg-amber-300`}></div>
            ))}
          </div>
          
          <h1 className={responsiveClass(
            "text-emerald-900 text-4xl font-normal font-['Vivaldi'] text-center", // mobile
            "text-emerald-900 text-6xl font-normal font-['Vivaldi'] text-center mx-8", // tablet
            "text-emerald-900 text-8xl font-normal font-['Vivaldi'] text-center mx-12" // desktop
          )}>
            Ohoi Ngadi
          </h1>
          
          <div className={responsiveClass(
            "hidden", // mobile
            "flex flex-col items-center gap-1", // tablet
            "flex flex-col items-center gap-1" // desktop
          )}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`w-0 ${i % 2 === 0 ? 'h-5' : 'h-12'} bg-amber-300`}></div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className={responsiveClass(
          "w-full h-48 relative", // mobile
          "w-full h-64 relative", // tablet
          "w-full h-80 relative" // desktop
        )}>
          <img 
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop"
            alt="Beautiful bay view of Ohoi Ngadi"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className={responsiveClass(
            "absolute bottom-4 right-4 w-16 h-16", // mobile
            "absolute bottom-6 right-6 w-20 h-20", // tablet
            "absolute bottom-8 right-8 w-24 h-24" // desktop
          )}>
            <div className="w-full h-full bg-emerald-900 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-4 border-l-emerald-900 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className={responsiveClass(
        "px-3 py-8", // mobile
        "px-5 py-12", // tablet
        "px-12 py-16" // desktop
      )}>
        <div className={responsiveClass(
          "flex flex-col gap-6", // mobile
          "flex flex-col gap-8 lg:flex-row lg:items-center", // tablet
          "flex flex-row items-center gap-20" // desktop
        )}>
          <div className={responsiveClass(
            "flex-1", // mobile
            "flex-1", // tablet
            "flex-1" // desktop
          )}>
            <div className={responsiveClass(
              "mb-3", // mobile
              "mb-4", // tablet
              "mb-6" // desktop
            )}>
              <h2 className={responsiveClass(
                "text-emerald-900 text-lg font-bold font-['Montserrat']", // mobile
                "text-emerald-900 text-2xl font-bold font-['Montserrat']", // tablet
                "text-emerald-900 text-4xl font-bold font-['Montserrat']" // desktop
              )}>
                Mengenal Budaya <span className="text-emerald-900">Katong</span>
              </h2>
            </div>
            <p className={responsiveClass(
              "text-black text-sm font-normal font-['Albert_Sans'] leading-tight", // mobile
              "text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed", // tablet
              "text-black text-2xl font-normal font-['Albert_Sans'] leading-relaxed" // desktop
            )}>
              Tual bukan hanya soal keindahan lautnya, tapi juga tentang cerita, tradisi, dan warisan budaya yang hidup dalam keseharian masyarakatnya
            </p>
          </div>
          
          <div className={responsiveClass(
            "w-full relative", // mobile
            "w-64 relative", // tablet
            "w-80 relative" // desktop
          )}>
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop"
              alt="Cultural activity"
              className={responsiveClass(
                "w-full h-32 rounded-3xl", // mobile
                "w-full h-36 rounded-3xl", // tablet
                "w-full h-44 rounded-3xl" // desktop
              )}
            />
            <div className={responsiveClass(
              "absolute bottom-2 right-2 w-12 h-12", // mobile
              "absolute bottom-4 right-4 w-14 h-14", // tablet
              "absolute bottom-6 right-6 w-16 h-16" // desktop
            )}>
              <div className="w-full h-full bg-emerald-900 rounded-full border-4 border-white flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className={responsiveClass(
        "px-3 py-8", // mobile
        "px-5 py-12", // tablet
        "px-12 py-16" // desktop
      )}>
        <div className={responsiveClass(
          "flex flex-col gap-6", // mobile
          "flex flex-col gap-8 lg:flex-row lg:justify-between", // tablet
          "flex flex-row justify-between items-start gap-12" // desktop
        )}>
          <div className={responsiveClass(
            "flex-1", // mobile
            "flex-1", // tablet
            "flex-1 max-w-3xl" // desktop
          )}>
            <div className={responsiveClass(
              "mb-4", // mobile
              "mb-6", // tablet
              "mb-8" // desktop
            )}>
              <h2 className={responsiveClass(
                "text-emerald-900 text-4xl font-normal", // mobile
                "text-emerald-900 text-6xl font-normal", // tablet
                "text-emerald-900 text-8xl font-normal" // desktop
              )}>
                <span className="font-['Cormorant']">T</span>
                <span className="font-['Vivaldi']">abe ma!</span>
              </h2>
            </div>
            
            <div className={responsiveClass(
              "mb-4", // mobile
              "mb-6", // tablet
              "mb-8" // desktop
            )}>
              <p className={responsiveClass(
                "text-black text-sm font-normal font-['Albert_Sans'] leading-tight", // mobile
                "text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed", // tablet
                "text-black text-2xl font-normal font-['Albert_Sans'] leading-relaxed" // desktop
              )}>
                Selamat datang di Ohoi Ngadi, desa wisata bahari di Tual, Maluku yang masuk{' '}
                <span className="font-bold">45 besar Desa Wisata Nusantara 2024!</span>
                <br /><br />
                Di sini, kamu bisa duduk manis sambil nikmati Danau Waren yang tenang, jalan-jalan di pantai berpasir, dan merasakan budaya{' '}
                <span className="italic">katong</span> yang masih kental lewat musik, tarian, dan kuliner laut khas Kei.
              </p>
            </div>
            
            <button className={responsiveClass(
              "flex items-center gap-2 px-4 py-2 bg-emerald-900 rounded-xl text-white text-xs font-semibold", // mobile
              "flex items-center gap-2 px-6 py-3 bg-emerald-900 rounded-2xl text-white text-lg font-semibold", // tablet
              "flex items-center gap-3 px-8 py-4 bg-emerald-900 rounded-3xl text-white text-xl font-semibold" // desktop
            )}>
              <span>Lihat Podcast Suara Katong</span>
              <Play className={responsiveClass(
                "w-4 h-4", // mobile
                "w-5 h-5", // tablet
                "w-6 h-6" // desktop
              )} />
            </button>
          </div>
          
          {/* Image Gallery */}
          <div className={responsiveClass(
            "flex gap-2", // mobile
            "flex gap-3", // tablet
            "flex gap-4" // desktop
          )}>
            <img 
              src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=200&h=250&fit=crop"
              alt="Village life 1"
              className={responsiveClass(
                "w-24 h-32 rounded-lg object-cover", // mobile
                "w-32 h-40 rounded-xl object-cover", // tablet
                "w-48 h-60 rounded-2xl object-cover" // desktop
              )}
            />
            <div className="flex flex-col gap-2">
              <img 
                src="https://images.unsplash.com/photo-1566738780863-f9608f88f3a9?w=200&h=150&fit=crop"
                alt="Village life 2"
                className={responsiveClass(
                  "w-24 h-20 rounded-lg object-cover", // mobile
                  "w-32 h-24 rounded-xl object-cover", // tablet
                  "w-48 h-32 rounded-2xl object-cover" // desktop
                )}
              />
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop"
                alt="Village life 3"
                className={responsiveClass(
                  "w-24 h-20 rounded-lg object-cover", // mobile
                  "w-32 h-24 rounded-xl object-cover", // tablet
                  "w-48 h-32 rounded-2xl object-cover" // desktop
                )}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Food Gallery */}
      <section className={responsiveClass(
        "px-3 py-8", // mobile
        "px-5 py-12", // tablet
        "px-6 py-16" // desktop
      )}>
        <div className={responsiveClass(
          "flex gap-2 overflow-x-auto", // mobile
          "flex gap-3 overflow-x-auto", // tablet
          "flex gap-4" // desktop
        )}>
          <img 
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=180&fit=crop"
            alt="Local dish 1"
            className={responsiveClass(
              "w-24 h-28 rounded-xl object-cover flex-shrink-0", // mobile
              "w-32 h-36 rounded-2xl object-cover flex-shrink-0", // tablet
              "w-48 h-56 rounded-3xl object-cover" // desktop
            )}
          />
          
          <div className={responsiveClass(
            "w-32 h-28 px-3 pb-3 bg-gradient-to-b from-black/0 via-black/60 to-emerald-900 rounded-xl flex flex-col justify-end items-center flex-shrink-0", // mobile
            "w-40 h-36 px-4 pb-4 bg-gradient-to-b from-black/0 via-black/60 to-emerald-900 rounded-2xl flex flex-col justify-end items-center flex-shrink-0", // tablet
            "w-64 h-56 px-5 pb-5 bg-gradient-to-b from-black/0 via-black/60 to-emerald-900 rounded-3xl flex flex-col justify-end items-center" // desktop
          )}>
            <h3 className={responsiveClass(
              "text-white text-lg font-bold font-['Montserrat'] mb-1", // mobile
              "text-white text-xl font-bold font-['Montserrat'] mb-2", // tablet
              "text-white text-3xl font-bold font-['Montserrat'] mb-2" // desktop
            )}>
              Lad
            </h3>
            <p className={responsiveClass(
              "text-white text-xs font-normal font-['Albert_Sans'] leading-tight text-center", // mobile
              "text-white text-sm font-normal font-['Albert_Sans'] leading-relaxed text-center", // tablet
              "text-white text-lg font-normal font-['Albert_Sans'] leading-relaxed text-center" // desktop
            )}>
              Salad anggur laut segar yang renyah dan menyegarkan, perpaduan rasa laut alami dengan kelapa parut, bawang merah, dan cabai khas Pulau Kei.
            </p>
          </div>
          
          {[...Array(3)].map((_, i) => (
            <img 
              key={i}
              src={`https://images.unsplash.com/photo-${1565299624946 + i}-b28f40a0ca4b?w=150&h=180&fit=crop`}
              alt={`Local dish ${i + 2}`}
              className={responsiveClass(
                "w-24 h-28 rounded-xl object-cover flex-shrink-0", // mobile
                "w-32 h-36 rounded-2xl object-cover flex-shrink-0", // tablet
                "w-48 h-56 rounded-3xl object-cover" // desktop
              )}
            />
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className={responsiveClass(
        "px-3 py-8", // mobile
        "px-5 py-12", // tablet
        "px-12 py-16" // desktop
      )}>
        <div className={responsiveClass(
          "flex flex-col gap-4", // mobile
          "flex flex-col gap-6", // tablet
          "flex flex-row gap-12" // desktop
        )}>
          <div className={responsiveClass(
            "flex-1", // mobile
            "flex-1", // tablet
            "flex-1" // desktop
          )}>
            <h2 className={responsiveClass(
              "text-emerald-900 text-lg font-bold font-['Montserrat'] mb-2", // mobile
              "text-emerald-900 text-2xl font-bold font-['Montserrat'] mb-3", // tablet
              "text-emerald-900 text-3xl font-bold font-['Montserrat'] mb-4" // desktop
            )}>
              Jelajahi Keindahan Ohoi Ngadi
            </h2>
            <p className={responsiveClass(
              "text-black text-sm font-normal font-['Albert_Sans'] leading-tight", // mobile
              "text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed", // tablet
              "text-black text-xl font-normal font-['Albert_Sans'] leading-relaxed" // desktop
            )}>
              Akses lokasi, rute terbaik, dan fasilitas umum tersedia di sini
            </p>
          </div>
          
          {/* Legend */}
          <div className={responsiveClass(
            "w-full p-3 rounded-lg border border-emerald-900", // mobile
            "w-full p-3 rounded-lg border border-emerald-900", // tablet
            "w-56 p-3 rounded-xl border border-emerald-900" // desktop
          )}>
            {[
              { icon: MapPin, label: "Tempat Wisata" },
              { icon: MapPin, label: "Masjid" },
              { icon: MapPin, label: "Gereja" },
              { icon: MapPin, label: "Tempat Makan" },
              { icon: MapPin, label: "Puskesmas" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 mb-2">
                <div className="w-6 h-8 bg-emerald-900 border-2 border-white"></div>
                <item.icon className="w-4 h-4 text-white" />
                <span className={responsiveClass(
                  "text-emerald-900 text-xs font-normal", // mobile
                  "text-emerald-900 text-sm font-normal", // tablet
                  "text-emerald-900 text-base font-normal" // desktop
                )}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Map */}
        <div className={responsiveClass(
          "mt-6 w-full h-36 bg-emerald-900/20 border-4 border-emerald-900 rounded-lg", // mobile
          "mt-8 w-full h-48 bg-emerald-900/20 border-4 border-emerald-900 rounded-lg", // tablet
          "mt-10 w-full h-64 bg-emerald-900/20 border-8 border-emerald-900 rounded-lg" // desktop
        )}>
          {/* Map pins would be placed here */}
          <div className="w-full h-full flex items-center justify-center">
            <div className={responsiveClass(
              "w-4 h-5 bg-emerald-900 border-2 border-white", // mobile
              "w-6 h-8 bg-emerald-900 border-2 border-white", // tablet
              "w-8 h-10 bg-emerald-900 border-2 border-white" // desktop
            )}></div>
          </div>
        </div>
      </section>

      {/* Organization Chart */}
      <OrganizationChart />

      {/* Article Section */}
      <ArticleSection />

      {/* Info Section */}
      <InfoSection />

      {/* Location Section */}
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
            Peta Lokasi
          </h2>
          <p className={responsiveClass(
            "text-black text-sm font-normal font-['Albert_Sans'] leading-tight", // mobile
            "text-black text-lg font-normal font-['Albert_Sans'] leading-relaxed", // tablet
            "text-black text-xl font-normal font-['Albert_Sans'] leading-relaxed" // desktop
          )}>
            Temukan <span className="italic">katong</span> disini!
          </p>
        </div>
        
        {/* Map Placeholder */}
        <div className={responsiveClass(
          "w-full h-48 bg-neutral-300 rounded-lg relative", // mobile
          "w-full h-64 bg-neutral-300 rounded-lg relative", // tablet
          "w-full h-80 bg-neutral-300 rounded-lg relative" // desktop
        )}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={responsiveClass(
              "px-4 py-2 bg-white border-2 border-emerald-900 rounded-lg", // mobile
              "px-6 py-3 bg-white border-2 border-emerald-900 rounded-xl", // tablet
              "px-8 py-4 bg-white border-2 border-emerald-900 rounded-2xl" // desktop
            )}>
              <span className={responsiveClass(
                "text-emerald-900 text-sm font-semibold font-['Montserrat']", // mobile
                "text-emerald-900 text-lg font-semibold font-['Montserrat']", // tablet
                "text-emerald-900 text-xl font-semibold font-['Montserrat']" // desktop
              )}>
                Ohoi Ngadi
              </span>
            </div>
          </div>
          <div className={responsiveClass(
            "absolute top-4 right-4 w-16 h-10 bg-amber-300 border-2 border-emerald-900", // mobile
            "absolute top-6 right-6 w-20 h-12 bg-amber-300 border-2 border-emerald-900", // tablet
            "absolute top-8 right-8 w-24 h-16 bg-amber-300 border-3 border-emerald-900" // desktop
          )}></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-emerald-900 px-6 py-12">
        <div className={responsiveClass(
          "flex flex-col gap-8", // mobile
          "flex flex-col gap-10", // tablet
          "flex flex-row justify-between items-start gap-12" // desktop
        )}>
          {/* Logo and Info */}
          <div className={responsiveClass(
            "flex flex-col gap-4", // mobile
            "flex flex-col gap-6", // tablet
            "flex flex-col gap-6" // desktop
          )}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-0 border-t border-white transform -rotate-90"></div>
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=72&h=81&fit=crop" alt="Logo" className="w-16 h-20" />
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
          <div className={responsiveClass(
            "flex flex-col gap-6", // mobile
            "flex flex-col gap-8", // tablet
            "flex flex-row gap-12" // desktop
          )}>
            <div>
              <h4 className="text-white text-base font-bold font-['Montserrat'] mb-4">
                Pemerintah Desa Ngadi
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Globe className="w-6 h-6 text-white" />
                  <span className="text-white text-lg font-semibold">ngadikeren.id</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-white" />
                  <span className="text-white text-lg font-semibold">(021) 1234-567</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-white" />
                  <span className="text-white text-lg font-semibold">ngadi@tualkota.go.id</span>
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
                  <span className="text-white text-lg font-semibold">tualang.tual</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-white" />
                  <span className="text-white text-lg font-semibold">kknppmugm.kotatual@gmail.com</span>
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