// import { twMerge } from 'tailwind-merge';
import { X, ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-emerald-900 z-50 lg:hidden">
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
      <div className="px-6 space-y-6">
        <div className="text-white text-lg font-medium font-['Montserrat'] py-2">
          Beranda
        </div>
        <div className="text-white text-lg font-medium font-['Montserrat'] py-2">
          Artikel
        </div>
        <div className="text-white text-lg font-medium font-['Montserrat'] py-2">
          Tes BMI
        </div>
        
        {/* Kenali Desa Dropdown */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-white text-lg font-medium font-['Montserrat']">Kenali Desa</span>
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
          <div className="pl-5 space-y-3">
            <div className="text-white text-lg font-medium font-['Montserrat']">
              Ohoi Ngadi
            </div>
            <div className="text-white text-lg font-medium font-['Montserrat']">
              Ohoi Dullah
            </div>
            <div className="text-white text-lg font-medium font-['Montserrat']">
              Ohoi Labetawi
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <div className="w-36 h-80 bg-emerald-200/20 transform rotate-12 absolute bottom-20 left-20"></div>
        <div className="w-44 h-96 bg-emerald-200/20 transform -rotate-12 absolute bottom-0 right-10"></div>
      </div>
    </div>
  );
};

export default MobileMenu;