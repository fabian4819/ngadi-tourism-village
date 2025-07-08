import type { VillageData, ContactInfo } from '../types';

export const villageData: VillageData = {
  name: "Ohoi Ngadi",
  description: "Desa wisata bahari di Tual, Maluku yang masuk 45 besar Desa Wisata Nusantara 2024!",
  location: "Pulau Dullah Utara, Kota Tual, Maluku, Indonesia",
  achievements: [
    "45 Besar Desa Wisata Nusantara 2024",
    "Standarisasi SNI",
    "Standarisasi Halal"
  ],
  facilities: [
    {
      id: "1",
      name: "Danau Waren",
      type: "tourism",
      coordinates: { lat: -5.6667, lng: 132.7500 }
    },
    {
      id: "2",
      name: "Pantai Pasir Putih",
      type: "tourism"
    },
    {
      id: "3",
      name: "Masjid Desa",
      type: "religious"
    },
    {
      id: "4",
      name: "Puskesmas",
      type: "health"
    },
    {
      id: "5",
      name: "Warung Lokal",
      type: "food"
    }
  ],
  government: [
    {
      id: "1",
      name: "Drs. Dullah Atnangar, MM",
      position: "PJ. Kepala Ohoi Ngadi",
      level: "head"
    },
    {
      id: "2",
      name: "Paulus Renwarin",
      position: "Sekretaris Ohoi Ngadi",
      level: "secretary"
    },
    {
      id: "3",
      name: "Amirdat A. Amin",
      position: "Kaur Keuangan",
      level: "subsection"
    },
    {
      id: "4",
      name: "Rahima Kabalmay",
      position: "Kaur Perencanaan",
      level: "subsection"
    },
    {
      id: "5",
      name: "Lusia Narahawarin",
      position: "Kaur Umum",
      level: "subsection"
    },
    {
      id: "6",
      name: "M. Kaim Fadirubun",
      position: "Kasi Kesejahteraan",
      level: "section"
    },
    {
      id: "7",
      name: "Ririn S. Sugito",
      position: "Kasi Pemerintahan",
      level: "section"
    },
    {
      id: "8",
      name: "Nia Bugis",
      position: "Kasi Pelayanan",
      level: "section"
    }
  ],
  articles: [
    {
      id: "1",
      title: "Desa Ngadi Disiapkan Jadi Desa Wisata Nusantara",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      publishedAt: "2025-06-10",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop"
    },
    {
      id: "2",
      title: "Budaya Katong yang Lestari",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      publishedAt: "2025-06-08",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop"
    },
    {
      id: "3",
      title: "Kuliner Khas Pulau Kei",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      publishedAt: "2025-06-05",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop"
    }
  ],
  images: [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
      alt: "Beautiful bay view of Ohoi Ngadi",
      category: "hero"
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
      alt: "Traditional Katong culture",
      category: "culture"
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=200&h=250&fit=crop",
      alt: "Village daily life",
      category: "people"
    }
  ]
};

export const contactInfo: ContactInfo = {
  phone: "(021) 1234-567",
  email: "ngadi@tualkota.go.id",
  website: "ngadikeren.id",
  socialMedia: {
    instagram: "tualang.tual",
    facebook: "tualang.tual",
    youtube: "tualang.tual"
  }
};