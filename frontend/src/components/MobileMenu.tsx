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
    <div className="fixed inset-0 bg-emerald-900 z-50 lg:hidden overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-6">
        <span className="text-white text-lg font-bold font-['Montserrat']">Menu</span>
        <button
          onClick={onClose}
          className="p-2 bg-white rounded-full"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-emerald-900" />
        </button>
      </div>

      {/* Menu Items */}
      <div className="px-6 space-y-6 z-10 relative">
        <Link
          to="/"
          className="block text-white text-lg font-medium font-['Montserrat'] py-2"
          onClick={onClose}
        >
          Beranda
        </Link>
        <Link
          to="/artikel"
          className="block text-white text-lg font-medium font-['Montserrat'] py-2"
          onClick={onClose}
        >
          Artikel
        </Link>
        <Link
          to="/tes-bmi"
          className="block text-white text-lg font-medium font-['Montserrat'] py-2"
          onClick={onClose}
        >
          Tes BMI
        </Link>
        {/* Kenali Desa Dropdown */}
        <div className="space-y-3">
          <button
            type="button"
            className="flex items-center gap-2 w-full text-left"
            onClick={() => setIsDropdownOpen((v) => !v)}
          >
            <span className="text-white text-lg font-medium font-['Montserrat']">Kenali Desa</span>
            <ChevronDown className={`w-6 h-6 text-white transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {isDropdownOpen && (
            <div className="pl-5 space-y-3">
              <Link
                to="/kenali-desa/ngadi"
                className="block text-white text-lg font-medium font-['Montserrat']"
                onClick={onClose}
              >
                Ohoi Ngadi
              </Link>
              <Link
                to="/kenali-desa/dullah"
                className="block text-white text-lg font-medium font-['Montserrat']"
                onClick={onClose}
              >
                Ohoi Dullah
              </Link>
              <Link
                to="/kenali-desa/labetawi"
                className="block text-white text-lg font-medium font-['Montserrat']"
                onClick={onClose}
              >
                Ohoi Labetawi
              </Link>
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