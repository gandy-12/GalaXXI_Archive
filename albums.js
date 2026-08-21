/*==================================================
    GalaXXI Archive
    Album Database
==================================================*/

"use strict";

/*
    access:
    - tidak diisi      = Link dengan akun belajar.id 🎓 (default)
    - "public"        = Link dengan akun bebas 🌐
*/

var albums = [
    {
        id: 1,
        title: "Pergantian Pangkat",
        category: "Angkatan",
        description: "GalaXXI go to kompi 1.",
        date: "29 July 2026",
        photos: 120,
        unlimited: false,
        featured: true,
        cover: "assets/covers/Pergantian Pangkat.jpg",
        covers: ["assets/covers/Pergantian Pangkat.jpg"],
        link: "https://drive.google.com/drive/folders/1Orukhi1sVJvXJdeMssnmhlyiwCBg1bLt?usp=sharing"
    },
    {
        id: 2,
        title: "Pelantikan OSIS & PMR 2026",
        category: "Organisasi",
        description: "Dokumentasi kegiatan yang tersimpan di Google Drive.",
        date: "11 Maret 2026",
        photos: 85,
        unlimited: false,
        featured: false,
        cover: "assets/covers/Osis PMR.JPG",
        covers: ["assets/covers/Osis PMR.JPG"],
        link: "https://drive.google.com/drive/folders/1SF6vQenVT4lPm-8XMi-XFTpG4g22OBia?usp=drive_link"
    },
    {
        id: 3,
        title: "Ramadhan GalaXXI",
        category: "Angkatan",
        description: "GalaXXI Last Ramadhan.",
        date: "10 Maret 2026",
        photos: 0,
        unlimited: false,
        featured: false,
        cover: "assets/covers/Ramadhan.jpg",
        covers: ["assets/covers/Ramadhan.jpg"],
        link: "https://drive.google.com/drive/folders/1s4jPLm-2uRg-u4EU_L9U3NzckBrX_sQm?usp=drive_link"
    },
    {
        id: 4,
        title: "GalaXXI Camping Part 1",
        category: "Angkatan",
        description: "One of GalaXXI's best moments..",
        date: "7-9 November 2025",
        photos: 0,
        unlimited: false,
        featured: false,
        cover: "assets/covers/pramuka a.JPG",
        covers: ["assets/covers/pramuka a.JPG", "assets/covers/pramuka b.JPG", "assets/covers/pramuka c.JPG", "assets/covers/pramuka d.JPG", "assets/covers/pramuka e.JPG"],
        link: "https://drive.google.com/drive/folders/1Bz7MBLhcFSi5iSd5wRbcZRw1yV_I3_96?usp=drive_link",
        access: "public"
    },
    {
        id: 5,
        title: "GalaXXI Camping Part 2",
        category: "Angkatan",
        description: "GalaXXI is organizing the camping trip..",
        date: "7-9 November 2025",
        photos: 0,
        unlimited: false,
        featured: false,
        cover: "assets/covers/pr a.JPG",
        covers: ["assets/covers/pr a.JPG", "assets/covers/pr b.JPG", "assets/covers/pr c.JPG", "assets/covers/pr d.JPG"],
        link: "https://drive.google.com/drive/folders/1CJGuYq175tQG0n3_fdAXaTNOd3nNGfCe?usp=drive_link",
        access: "public"
    },
    {
        id: 6,
        title: "Behind The Scene Camping GalaXXI",
        category: "Angkatan",
        description: "Behind the scenes of the most spectacular GalaXXI event..",
        date: "November 2K25",
        photos: 0,
        unlimited: false,
        featured: false,
        cover: "assets/covers/.JPG",
        covers: ["assets/covers/.JPG"],
        link: "https://drive.google.com/drive/folders/1Nx5mXzFnwk3QPumpugaf4ysqUMCuzsyw?usp=drive_link",
        access: "public"
    },
    {
        id: 7,
        title: "GalaXXI at perpisahan AleXXander",
        category: "Angkatan",
        description: "GalaXXI last time with AC'20",
        date: "24 Mei 2026",
        photos: 0,
        unlimited: false,
        featured: false,
        cover: "assets/covers/pps 1.JPG",
        covers: ["assets/covers/pps 1.JPG", "assets/covers/pps 2.JPG", "assets/covers/pps 3.JPG", "assets/covers/pps 4.JPG", "assets/covers/pps 5.JPG", "assets/covers/pps 6.JPG", "assets/covers/pps 7.JPG"],
        link: "https://drive.google.com/drive/folders/1Nx5mXzFnwk3QPumpugaf4ysqUMCuzsyw?usp=drive_link",
        access: "public"
    },
    {
        id: 8,
        title: "GalaXXI P5; Market Day",
        category: "Sekolah",
        description: "Themost unexpected actifity.",
        date: "15 Juni 2026",
        photos: 0,
        unlimited: false,
        featured: false,
        cover: "assets/covers/p51.JPG",
        covers: ["assets/covers/p51.JPG", "assets/covers/p52.JPG", "assets/covers/p53.JPG", "assets/covers/p54.JPG", "assets/covers/p55.JPG", "assets/covers/p56.JPG"],
        link: "https://drive.google.com/drive/folders/1ljKpjsU-VhX9kZTTGqYlCD9e0JxYH5Ay?usp=sharing"
    },
    {
        id: 9,
        title: "Before Cendekia's Pawai",
        category: "Sekolah",
        description: "Asal usul foto keren pawai cende.",
        date: "13 Agustus 2026",
        photos: 0,
        unlimited: false,
        featured: false,
        cover: "assets/covers/pw1.JPG",
        covers: ["assets/covers/pw1.JPG", "assets/covers/pw2.JPG", "assets/covers/pw3.JPG", "assets/covers/pw4.JPG", "assets/covers/pw5.JPG"],
        link: "https://drive.google.com/drive/folders/1JdO2LUDSLTzUWUpYyXo09fJyhpodp6l8?usp=sharing"
    },
    {
        id: 10,
        title: "Pawai Cendekia at Lubuk Basung",
        category: "Sekolah",
        description: "Wonderful performance cendekia at lubuk basung.",
        date: "18 Agustus 2026",
        photos: 0,
        unlimited: false,
        featured: false,
        cover: "assets/covers/lb1.JPG",
        covers: ["assets/covers/lb1.JPG", "assets/covers/lb2.JPG", "assets/covers/lb3.JPG", "assets/covers/lb4.JPG", "assets/covers/lb5.JPG","assets/covers/lb6.JPG","assets/covers/lb7.JPG","assets/covers/lb8.JPG"],
        link: "https://drive.google.com/drive/folders/1fOx6FNRHSVk1fxuLy_hwNYG10eJdAb1x?usp=sharing",
        access: "public"
    },
    {
        id: 11,
        title: "Last walking GalaXXI",
        category: "Angkatan",
        description: "Our last walking at cendekia.",
        date: "18 Agustus 2026",
        photos: 342,
        unlimited: false,
        featured: false,
        cover: "assets/covers/wk1.JPG",
        covers: ["assets/covers/wk2.JPG", "assets/covers/wk3.JPG", "assets/covers/wk4.JPG", "assets/covers/wk5.JPG","assets/covers/wk6.JPG","assets/covers/wk7.JPG","assets/covers/wk8.JPG", "assets/covers/wk9.JPG"],
        links: [
            {
                title: "Walking Part 1",
                link: "https://drive.google.com/drive/folders/1qkd7hzTsb9sFxknt33Ju1bfWFL7da2L4?usp=drive_link"
            },
            {
                title: "Walking Part 2",
                link: "https://drive.google.com/drive/folders/1k_DWYAVJqakIzYRZyqrZ2RDaRqCah17L?usp=sharing"
            },
            {
                title: "Walking Part 3",
                link: "https://drive.google.com/drive/folders/14fUf4_BjTO8iHg8i6DTiQLE8cAT8Dgib?usp=sharing"
            }
        ],
        access: "public"
    },
    {
        id: 12,
        title: "Pawai Cendekia at Maninjau",
        category: "Sekolah",
        description: "Spectacular pawai Cendekia at Maninjau.",
        date: "20 Agustus 2026",
        photos: 0,
        unlimited: false,
        featured: false,
        cover: "assets/covers/mn1.JPG",
        covers: ["assets/covers/mn1.JPG", "assets/covers/mn2.JPG", "assets/covers/mn3.JPG", "assets/covers/mn4.JPG","assets/covers/mn5.JPG","assets/covers/mn6.JPG","assets/covers/mn7.JPG","assets/covers/mn8.JPG","assets/covers/mn9.JPG","assets/covers/mn10.JPG","assets/covers/mn11.JPG", "assets/covers/mn12.JPG"],
        link: "https://drive.google.com/drive/folders/14fUf4_BjTO8iHg8i6DTiQLE8cAT8Dgib?usp=sharing",
        access: "public"
    },
    {
        id: 13,
        title: "Upacara Bendera",
        category: "Sekolah",
        description: "Flag Ceremony SMAN Agam Cendekia (foto upacara hanya bertahan 1 bulan, karena drive terus dibersihkan).",
        date: "July - Agustus 2026",
        photos: 0,
        unlimited: false,
        featured: false,
        cover: "assets/covers/.JPG",
        covers: ["assets/covers/.JPG", "assets/covers/.JPG", "assets/covers/.JPG", "assets/covers/.JPG", "assets/covers/.JPG"],
        link: "https://drive.google.com/drive/folders/14fUf4_BjTO8iHg8i6DTiQLE8cAT8Dgib?usp=sharing",
        access: "public"
    },
    {
        id: 14,
        title: "Pelantikan Sispala 2026",
        category: "Organisasi",
        description: "The excitement of exploring nature with the Sispala during the 2026 membership induction ceremony.",
        date: "16 Mei 2026",
        photos: 0,
        unlimited: false,
        featured: false,
        cover: "assets/covers/ss1.JPG",
        covers: ["assets/covers/ss1.JPG", "assets/covers/ss2.JPG", "assets/covers/ss3.JPG", "assets/covers/ss4.JPG", "assets/covers/.JPG"],
        link: "https://https://drive.google.com/drive/folders/15bMMpZ1kc_xXtNB6gcX8xxcmZcIbHiR_?usp=sharing",
        access: "public"
    }
];

/* Pastikan data tersedia untuk script lain. */
window.albums = albums;
