export const personalInfo = {
    name: "Rinaldi Mulya Pratama",
    title: "Frontend Developer",
    email: "rinaldimulyatam@gmail.com",
    phone: "+62 812-1292-3623",
    location: "Jakarta, Indonesia",
    bio: "Passionate Frontend Developer with a strong foundation in modern web development. Experienced in building responsive, user-friendly, and scalable applications using React, Next.js, and modern CSS frameworks. Highly motivated to keep learning and eager to contribute to dynamic teams.",
    skills: [
        "HTML/CSS/JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Git/GitHub",
        "Figma",
        "SQL (PostgreSQL/MySQL)",
        "Google Data Studio",
        "Tableau / Power BI"
    ],
    social: {
        github: "https://github.com/RinaldiMulya",
        linkedin: "https://www.linkedin.com/in/rinaldi-mulya-pratama11/",
        instagram: "https://www.instagram.com/rinaldy_mulya/",
        email: "mailto:rinaldimulyatam@gmail.com"
    },
};

export const projects = [
    {
        id: 1,
        stageNum: "STAGE 01",
        title: "Halmall — Aplikasi Web E-commerce & Event",
        subtitle: "Comprehensive E-Commerce Platform",
        year: "2025-2026",
        category: "Web Development",
        difficulty: "HARD",
        status: "completed",
        description: "Memigrasikan 30+ endpoint API ke Next.js API Routes (BFF), memindahkan JWT dan kredensial sensitif ke server-side untuk keamanan aplikasi. Membangun fitur Help Center multi-bahasa (next-intl, 230+ translation keys) dan sistem Live Chat real-time (Firebase Firestore) dengan push notification (FCM). Mengimplementasikan SEO teknis (dynamic sitemap & metadata) serta UI fidelitas tinggi dari Figma.",
        screenshot: "/images/halmall.idTumbnail.webp",
        technologies: ["Next.js 14/15", "TypeScript", "Tailwind CSS", "Zustand", "React Query", "next-intl", "Firebase", "Zod", "Figma"],
        githubUrl: "https://github.com/RinaldiMulya",
        liveUrl: "https://halmall.id/",
        featured: true,
    },
    {
        id: 2,
        stageNum: "STAGE 02",
        title: "PENSi - Pension Income Estimator",
        subtitle: "Platform for Simulating Pension Plans",
        year: "2025",
        category: "Web Development",
        difficulty: "MEDIUM",
        status: "completed",
        description: "Aplikasi web end-to-end dengan antarmuka responsif untuk membantu pengguna memperkirakan tabungan pensiun seiring waktu, terintegrasi dengan REST API backend berbasis Rails untuk perhitungan real-time.",
        screenshot: "/images/PensiTumbnail.png",
        technologies: ["Next.js", "React", "Tailwind CSS", "Express.js"],
        githubUrl: "https://github.com/DBS-Dicoding-2025-Jakarta/PENSi",
        liveUrl: "https://pensi-seven.vercel.app/",
        featured: true,
    },
    {
        id: 4,
        stageNum: "STAGE 03",
        title: "NYC Properties Dashboard",
        subtitle: "Dashboard Interactive for NYC Real Estate",
        year: "2024",
        category: "Data Analytics",
        difficulty: "MEDIUM",
        status: "completed",
        description: "Mengumpulkan dan membersihkan dataset real estate mentah Kota New York dan menerapkan teknik analitik data untuk memvisualisasikan tren pasar melalui dashboard interaktif dan berbagai jenis chart.",
        screenshot: "/images/NycDashboarTumbnail.png",
        technologies: ["JavaScript", "HTML/CSS", "Chart.js"],
        githubUrl: "https://github.com/RinaldiMulya/Repo-KM-RevoU-Team10?tab=readme-ov-file",
        liveUrl: "https://km-feb24-jayapura-10-eight.vercel.app/",
        featured: false,
    },
    {
        id: 5,
        stageNum: "STAGE 04",
        title: "OsKost — Smartkost Management System",
        subtitle: "Fullstack Web App + PWA",
        year: "2026",
        category: "Web Development",
        difficulty: "HARD",
        status: "in-progress",
        description: "Merancang dan membangun sistem manajemen kost end-to-end secara mandiri sebagai solusi digitalisasi operasional kost nyata. Sistem terpusat berbasis web dengan dua antarmuka utama — Admin Dashboard (web) dan PWA Tenant (mobile-first).",
        screenshot: "",
        technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Prisma v7", "PostgreSQL", "Supabase", "NextAuth.js v5"],
        githubUrl: "https://github.com/RinaldiMulya/OsKost",
        liveUrl: "https://github.com/RinaldiMulya/OsKost",
        featured: true,
    },
];

export const experiences = [
    {
        id: 1,
        period: "Feb 2025 - Jun 2025",
        company: "Dicoding X DBS Foundation",
        position: "Coding Camp Cohort",
        type: "Internship (Remote)",
        location: "Jakarta, Indonesia",
        description: "Mengirimkan aplikasi web end-to-end yang mengintegrasikan data, interaksi pengguna, dan layanan API. Berkolaborasi dalam tim multidisiplin dengan kelompok machine learning, memastikan koordinasi yang lancar dan integrasi hasil yang diharapkan.",
        technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Figma", "REST API", "Git/GitHub"],
        achievements: [
            "Memperkuat keterampilan komunikasi dengan pemangku kepentingan, mentoring, dan version control menggunakan Git/GitHub.",
            "Melatih perencanaan proyek, pembagian peran, dan pelacakan kemajuan selama proyek capstone.",
            "Berkolaborasi dalam tim multidisiplin dengan kelompok machine learning."
        ]
    },
    {
        id: 2,
        period: "Feb 2024 - Jun 2024",
        company: "RevoU Tech Academy",
        position: "Independent Study Cohort (MSIB Kampus Merdeka)",
        type: "Internship (Remote)",
        location: "Jakarta, Indonesia",
        description: "Menerapkan analisis data (SQL, Power BI) pada kasus bisnis nyata untuk pelaporan dan pemantauan KPI. Merancang dashboard interaktif untuk melacak performa dan mendukung pengambilan keputusan manajerial.",
        technologies: ["Javascript", "HTML/CSS", "SQL", "Power BI", "Tableau", "Google BigQuery", "Git / GitHub"],
        achievements: [
            "Bekerja dalam tim proyek capstone dengan metode Agile, berfokus pada komunikasi, manajemen tugas, dan ketepatan waktu pengiriman.",
            "Memperoleh pengalaman praktis dalam dokumentasi dan alur kerja yang terstruktur.",
            "Merancang dashboard interaktif untuk melacak performa."
        ]
    },
    {
        id: 3,
        period: "Desember 2025 - Juni 2026",
        company: "Halal Network International",
        position: "Frontend Web Developer (Magang)",
        type: "Internship (On-Site)",
        location: "On-Site Jakarta, Indonesia",
        description: "Berkontribusi sebagai Pengembang Frontend dengan fokus pada pengembangan dan optimasi Halmall, sebuah platform e-commerce. Mengelola siklus hidup penuh dari fitur-fitur kompleks, menekankan keamanan, kinerja, dan skalabilitas menggunakan Next.js dan TypeScript.",
        technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "next-intl", "Firebase", "Storybook", "Git/GitHub"],
        achievements: [
            "Optimasi Performa & SEO: Mengembangkan sitemap dinamis dan menerapkan sistem metadata hybrid statis/dinamis untuk meningkatkan pengindeksan Google.",
            "Keamanan & Integrasi Backend: Mengamankan aplikasi dengan memindahkan penanganan JWT dan kredensial sensitif ke server-side routes.",
            "Pengembangan Fitur Kompleks: Merancang alur kerja Hapus Akun multi-langkah dengan logika verifikasi saldo dan transaksi yang terintegrasi.",
            "Pengalaman Pengguna (UX): Menerjemahkan komponen UI fidelitas tinggi dari Figma (Pusat Bantuan, Live Chat, dll).",
            "Internasionalisasi (i18n): Mengimplementasikan dukungan multibahasa (EN & ID) untuk komponen inti menggunakan next-intl."
        ]
    }
];
