// ============================================================
//  CARA PAKAI:
//  1. Taruh foto di folder sesuai struktur di bawah
//  2. Edit path di array "images" tiap project
//  3. Selesai — carousel otomatis terbentuk
//
//  Struktur folder yang disarankan:
//  images/
//  ├── about/
//  │   └── foto-profil.jpg
//  └── projects/
//      ├── infaq-masjid/
//      │   ├── 1.jpg
//      │   └── 2.jpg
//      ├── rekap-keuangan/
//      │   └── 1.jpg
//      ├── hisumenep-api/
//      │   └── 1.jpg
//      ├── bangkit-capstone/
//      │   └── 1.jpg
//      ├── hisumenep-admin/
//      │   └── 1.jpg
//      └── bangbeli/
//          └── 1.jpg
// ============================================================

const ABOUT = {
  photo: "images/about/Cover.png",   // ← ganti path foto profil kamu
};

const PROJECTS = [
  {
    id: "infaq-masjid",
    title: "Web Infaq Masjid Nurul Iman",
    description: "Web monitoring infaq masjid berbasis Bootstrap. Dibangun untuk transparansi dan kemudahan pengelolaan.",
    stack: ["HTML", "CSS", "PHP", "JS"],
    link: "https://github.com/bisyrisyamsuri/holding",
    images: [
      // "images/projects/infaq-masjid/1.jpg",
      // "images/projects/infaq-masjid/2.jpg",
    ],
  },
  {
    id: "rekap-keuangan",
    title: "Web Rekap Keuangan Bisnis",
    description: "Sistem rekap keuangan terintegrasi berbasis Bootstrap. Memudahkan monitoring arus kas bisnis.",
    stack: ["HTML", "CSS", "PHP", "JS"],
    link: "https://github.com/bisyrisyamsuri/holding",
    images: [
      // "images/projects/rekap-keuangan/1.jpg",
    ],
  },
  {
    id: "hisumenep-api",
    title: "RESTful API HiSumenep",
    description: "API backend untuk aplikasi HiSumenep, dibangun dengan Flask. Endpoint yang clean dan terdokumentasi.",
    stack: ["Python", "Flask"],
    link: "https://github.com/bisyrisyamsuri/Hisumenependpoint",
    images: [
      // "images/projects/hisumenep-api/1.jpg",
    ],
  },
  {
    id: "bangkit-capstone",
    title: "Capstone Bangkit Academy",
    description: "RESTful API untuk capstone project Bangkit Academy — backend layer yang menghubungkan model ML ke aplikasi.",
    stack: ["Python", "Flask"],
    link: "https://github.com/bisyrisyamsuri/CC_Peca",
    images: [
      // "images/projects/bangkit-capstone/1.jpg",
    ],
  },
  {
    id: "hisumenep-admin",
    title: "HiSumenep Web Admin",
    description: "Panel admin berbasis Bootstrap untuk mengelola seluruh konten di aplikasi HiSumenep.",
    stack: ["HTML", "CSS", "PHP"],
    link: "https://github.com/bisyrisyamsuri/HiSumenepWebadmin",
    images: [
      // "images/projects/hisumenep-admin/1.jpg",
    ],
  },
  {
    id: "bangbeli",
    title: "Frontend Bangbeli Website",
    description: "Website resmi bangbeli.id — landing page frontend yang dibangun dengan Bootstrap.",
    stack: ["HTML", "CSS"],
    link: "https://gitlab.com/bangbeli/bangbeli-landing-page",
    images: [
      // "images/projects/bangbeli/1.jpg",
    ],
  },
];