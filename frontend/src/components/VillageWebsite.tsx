// src/components/VillageWebsite.tsx - FIXED LAYOUT
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
      <header className="w-full px-4 py-4 lg:px-12 lg:py-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-emerald-900 text-lg lg:text-2xl font-bold font-montserrat">
              Tualang Tual
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-8 px-5 py-2 rounded-full border border-stone-900">
              <span className="text-stone-900 text-sm font-medium">Artikel</span>
              <span className="text-stone-900 text-sm font-medium">Tes BMI</span>
            </div>
            <div className="relative group">
              <div className="flex items-center gap-2 px-5 py-2 bg-emerald-900 rounded-full cursor-pointer">
                <span className="text-white text-sm font-bold">Kenali Desa</span>
                <ChevronDown className="w-6 h-6 text-white" />
              </div>
              
              {/* Desktop Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-36 bg-white rounded-bl-lg rounded-br-lg border border-emerald-900 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
            className="lg:hidden p-2 bg-emerald-900 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open menu"
          >
            <div className="w-3 h-2 bg-white"></div>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center gap-6 px-4 lg:gap-10 lg:px-6">
        {/* Title with Decorative Elements */}
        <div className="flex items-center justify-center w-full">
          {/* Left Decorative Elements - Hidden on mobile */}
          <div className="hidden lg:flex flex-col items-center gap-1 transform rotate-180 mr-8">
            <div className="w-1 h-9 bg-amber-300"></div>
            <div className="w-1 h-24 bg-amber-300"></div>
            <div className="w-1 h-9 bg-amber-300"></div>
            <div className="flex justify-between items-center w-full gap-2">
              <div className="w-1 h-9 bg-amber-300"></div>
              <div className="w-1 h-24 bg-amber-300"></div>
              <div className="w-1 h-9 bg-amber-300"></div>
              <div className="w-1 h-9 bg-amber-300"></div>
              <div className="w-1 h-24 bg-amber-300"></div>
              <div className="w-1 h-9 bg-amber-300"></div>
            </div>
          </div>
          
          <h1 className="text-emerald-900 text-4xl lg:text-8xl font-normal text-center" style={{ fontFamily: 'Vivaldi, cursive' }}>
            Ohoi Ngadi
          </h1>
          
          {/* Right Decorative Elements - Hidden on mobile */}
          <div className="hidden lg:flex flex-col items-center gap-1 ml-8">
            <div className="flex justify-between items-center w-full gap-2">
              <div className="w-1 h-9 bg-amber-300"></div>
              <div className="w-1 h-24 bg-amber-300"></div>
              <div className="w-1 h-9 bg-amber-300"></div>
              <div className="w-1 h-9 bg-amber-300"></div>
              <div className="w-1 h-24 bg-amber-300"></div>
              <div className="w-1 h-9 bg-amber-300"></div>
            </div>
            <div className="w-1 h-9 bg-amber-300"></div>
            <div className="w-1 h-24 bg-amber-300"></div>
            <div className="w-1 h-9 bg-amber-300"></div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-48 lg:h-80 relative">
          <img 
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop"
            alt="Beautiful bay view of Ohoi Ngadi"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 w-16 h-16 lg:w-24 lg:h-24">
            <div className="w-full h-full bg-emerald-900 rounded-full border-4 border-white flex items-center justify-center cursor-pointer hover:bg-emerald-800 transition-colors">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-4 border-l-emerald-900 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="px-4 py-8 lg:px-12 lg:py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1">
            <div className="mb-3 lg:mb-6">
              <h2 className="text-emerald-900 text-lg lg:text-4xl font-bold font-montserrat">
                Mengenal Budaya <span className="text-emerald-900">Katong</span>
              </h2>
            </div>
            <p className="text-black text-sm lg:text-2xl font-normal leading-tight lg:leading-relaxed">
              Tual bukan hanya soal keindahan lautnya, tapi juga tentang cerita, tradisi, dan warisan budaya yang hidup dalam keseharian masyarakatnya
            </p>
          </div>
          
          <div className="w-full lg:w-80 relative">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop"
              alt="Cultural activity"
              className="w-full h-32 lg:h-44 rounded-3xl object-cover"
            />
            <div className="absolute bottom-2 right-2 lg:bottom-6 lg:right-6 w-12 h-12 lg:w-16 lg:h-16">
              <div className="w-full h-full bg-emerald-900 rounded-full border-4 border-white flex items-center justify-center cursor-pointer hover:bg-emerald-800 transition-colors">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="px-4 py-8 lg:px-12 lg:py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-start lg:gap-12">
          <div className="flex-1 lg:max-w-3xl">
            <div className="mb-4 lg:mb-8">
              <h2 className="text-emerald-900 text-4xl lg:text-8xl font-normal">
                <span style={{ fontFamily: 'Cormorant, serif' }}>T</span>
                <span style={{ fontFamily: 'Vivaldi, cursive' }}>abe ma!</span>
              </h2>
            </div>
            
            <div className="mb-4 lg:mb-8">
              <p className="text-black text-sm lg:text-2xl font-normal leading-tight lg:leading-relaxed">
                Selamat datang di Ohoi Ngadi, desa wisata bahari di Tual, Maluku yang masuk{' '}
                <span className="font-bold">45 besar Desa Wisata Nusantara 2024!</span>
                <br /><br />
                Di sini, kamu bisa duduk manis sambil nikmati Danau Waren yang tenang, jalan-jalan di pantai berpasir, dan merasakan budaya{' '}
                <span className="italic">katong</span> yang masih kental lewat musik, tarian, dan kuliner laut khas Kei.
              </p>
            </div>
            
            <button className="flex items-center gap-2 lg:gap-3 px-4 py-2 lg:px-8 lg:py-4 bg-emerald-900 rounded-xl lg:rounded-3xl text-white text-xs lg:text-xl font-semibold hover:bg-emerald-800 transition-colors">
              <span>Lihat Podcast Suara Katong</span>
              <Play className="w-4 h-4 lg:w-6 lg:h-6" />
            </button>
          </div>
          
          {/* Image Gallery */}
          <div className="flex gap-2 lg:gap-4">
            <img 
              src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=200&h=250&fit=crop"
              alt="Village life 1"
              className="w-24 h-32 lg:w-48 lg:h-60 rounded-lg lg:rounded-2xl object-cover"
            />
            <div className="flex flex-col gap-2">
              <img 
                src="https://images.unsplash.com/photo-1566738780863-f9608f88f3a9?w=200&h=150&fit=crop"
                alt="Village life 2"
                className="w-24 h-20 lg:w-48 lg:h-32 rounded-lg lg:rounded-2xl object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop"
                alt="Village life 3"
                className="w-24 h-20 lg:w-48 lg:h-32 rounded-lg lg:rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Food Gallery */}
      <section className="px-4 py-8 lg:px-6 lg:py-16">
        <div className="flex gap-2 lg:gap-4 overflow-x-auto lg:overflow-visible">
          <img 
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=180&fit=crop"
            alt="Local dish 1"
            className="w-24 h-28 lg:w-48 lg:h-56 rounded-xl lg:rounded-3xl object-cover flex-shrink-0"
          />
          
          <div className="w-32 h-28 lg:w-64 lg:h-56 px-3 pb-3 lg:px-5 lg:pb-5 bg-gradient-to-b from-black/0 via-black/60 to-emerald-900 rounded-xl lg:rounded-3xl flex flex-col justify-end items-center flex-shrink-0">
            <h3 className="text-white text-lg lg:text-3xl font-bold font-montserrat mb-1 lg:mb-2">
              Lad
            </h3>
            <p className="text-white text-xs lg:text-lg font-normal leading-tight lg:leading-relaxed text-center">
              Salad anggur laut segar yang renyah dan menyegarkan, perpaduan rasa laut alami dengan kelapa parut, bawang merah, dan cabai khas Pulau Kei.
            </p>
          </div>
          
          {[...Array(3)].map((_, i) => (
            <img 
              key={i}
              src={`https://images.unsplash.com/photo-${1565299624946 + i}-b28f40a0ca4b?w=150&h=180&fit=crop`}
              alt={`Local dish ${i + 2}`}
              className="w-24 h-28 lg:w-48 lg:h-56 rounded-xl lg:rounded-3xl object-cover flex-shrink-0"
            />
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 py-8 lg:px-12 lg:py-16">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-12">
          <div className="flex-1">
            <h2 className="text-emerald-900 text-lg lg:text-3xl font-bold font-montserrat mb-2 lg:mb-4">
              Jelajahi Keindahan Ohoi Ngadi
            </h2>
            <p className="text-black text-sm lg:text-xl font-normal leading-tight lg:leading-relaxed">
              Akses lokasi, rute terbaik, dan fasilitas umum tersedia di sini
            </p>
          </div>
          
          {/* Legend */}
          <div className="w-full lg:w-56 p-3 rounded-lg lg:rounded-xl border border-emerald-900">
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
                <span className="text-emerald-900 text-xs lg:text-base font-normal">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-6 lg:mt-10 w-full h-36 lg:h-64 bg-emerald-900/20 border-4 lg:border-8 border-emerald-900 rounded-lg">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-4 h-5 lg:w-8 lg:h-10 bg-emerald-900 border-2 border-white"></div>
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
      <section className="px-4 py-8 lg:px-12 lg:py-16">
        <div className="mb-6 lg:mb-10">
          <h2 className="text-emerald-900 text-lg lg:text-3xl font-bold font-montserrat mb-2 lg:mb-4">
            Peta Lokasi
          </h2>
          <p className="text-black text-sm lg:text-xl font-normal leading-tight lg:leading-relaxed">
            Temukan <span className="italic">katong</span> disini!
          </p>
        </div>
        
        {/* Map Placeholder */}
        <div className="w-full h-48 lg:h-80 bg-neutral-300 rounded-lg relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="px-4 py-2 lg:px-8 lg:py-4 bg-white border-2 border-emerald-900 rounded-lg lg:rounded-2xl">
              <span className="text-emerald-900 text-sm lg:text-xl font-semibold font-montserrat">
                Ohoi Ngadi
              </span>
            </div>
          </div>
          <div className="absolute top-4 right-4 lg:top-8 lg:right-8 w-16 h-10 lg:w-24 lg:h-16 bg-amber-300 border-2 lg:border-3 border-emerald-900"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-emerald-900 px-6 py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start lg:gap-12">
          {/* Logo and Info */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-0 border-t border-white transform -rotate-90"></div>
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=72&h=81&fit=crop" alt="Logo" className="w-16 h-20" />
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold font-montserrat mb-2">
                Desa Ngadi
              </h3>
              <p className="text-white text-base font-normal mb-1">
                Pulau Dullah Utara, Kota Tual, Maluku, Indonesia
              </p>
              <p className="text-white text-base font-semibold font-montserrat">
                Tim KKN-PPM UGM © 2025
              </p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
            <div>
              <h4 className="text-white text-base font-bold font-montserrat mb-4">
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
              <h4 className="text-white text-base font-bold font-montserrat mb-4">
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