import { X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-emerald-900 z-50 lg:hidden overflow-hidden animate-slide-in-left">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-6 border-b border-emerald-800">
        <span className="text-white text-xl font-bold font-['Montserrat'] animate-fade-in-up">Menu</span>
        <button
          type="button"
          onClick={onClose}
          className="p-3 bg-white rounded-full hover:bg-gray-100 hover:scale-110 transition-all duration-300 shadow-lg"
          aria-label="Tutup menu navigasi"
        >
          <X className="w-5 h-5 text-emerald-900" />
        </button>
      </div>

      {/* Menu Items */}
      <div className="px-6 py-8 space-y-6 z-10 relative">
        <Link
          to="/"
          className="block text-white text-xl font-medium font-['Montserrat'] py-3 px-4 rounded-xl hover:bg-emerald-800 hover:scale-105 transition-all duration-300 animate-fade-in-up"
          onClick={onClose}
          style={{ animationDelay: '0.1s' }}
        >
          🏠 Beranda
        </Link>
        <Link
          to="/artikel"
          className="block text-white text-xl font-medium font-['Montserrat'] py-3 px-4 rounded-xl hover:bg-emerald-800 hover:scale-105 transition-all duration-300 animate-fade-in-up"
          onClick={onClose}
          style={{ animationDelay: '0.2s' }}
        >
          📰 Artikel
        </Link>
        <Link
          to="/tes-bmi"
          className="block text-white text-xl font-medium font-['Montserrat'] py-3 px-4 rounded-xl hover:bg-emerald-800 hover:scale-105 transition-all duration-300 animate-fade-in-up"
          onClick={onClose}
          style={{ animationDelay: '0.3s' }}
        >
          🏥 Tes BMI
        </Link>
        {/* Kenali Desa Dropdown */}
        <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            type="button"
            className="flex items-center justify-between gap-3 w-full text-left py-3 px-4 rounded-xl hover:bg-emerald-800 transition-all duration-300"
            onClick={() => setIsDropdownOpen((v) => !v)}
          >
            <span className="text-white text-xl font-medium font-['Montserrat']">🏝️ Kenali Ohoi</span>
            <ChevronDown className={`w-6 h-6 text-white transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {isDropdownOpen && (
            <div className="pl-6 space-y-3 animate-fade-in-up">
              <Link
                to="/kenali-desa/ngadi"
                className="block text-white text-lg font-medium font-['Montserrat'] py-2 px-4 rounded-lg hover:bg-emerald-800/50 hover:scale-105 transition-all duration-300"
                onClick={onClose}
              >
                • Ohoi Ngadi
              </Link>
              <a
                href="https://ohoi-dullah.id"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white text-lg font-medium font-['Montserrat'] py-2 px-4 rounded-lg hover:bg-emerald-800/50 hover:scale-105 transition-all duration-300"
                onClick={onClose}
              >
                • Ohoi Dullah
              </a>
              <a
                href="https://ohoi-labetawi.id"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white text-lg font-medium font-['Montserrat'] py-2 px-4 rounded-lg hover:bg-emerald-800/50 hover:scale-105 transition-all duration-300"
                onClick={onClose}
              >
                • Ohoi Labetawi
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Images */}
      <img
        src="/images/mobile-asset.png"
        alt=""
        className="absolute left-0 bottom-0 w-full opacity-80 pointer-events-none select-none"
        draggable={false}
        style={{ zIndex: 1 }}
      />
      <img
        src="/images/mobile-addition-asset.png"
        alt=""
        className="absolute right-0 bottom-0 w-60 md:w-60 opacity-80 pointer-events-none select-none"
        draggable={false}
        style={{ zIndex: 2 }}
      />
    </div>
  );
};

export default MobileMenu;