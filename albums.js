/*==================================================
    GalaXXI Archive
    Album Database
    Version 1.2
==================================================*/

"use strict";

/*==================================================
    ALBUM DATA

    Setiap album bisa memiliki beberapa cover.
    Cover pertama akan menjadi thumbnail awal.
    Jika unlimited = true, jumlah foto ditampilkan sebagai ∞.
==================================================*/

const albums = [

    /*==============================================
        ALBUM 01
    ==============================================*/
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
        covers: [
            "assets/covers/pramuka a.JPG",
            "assets/covers/pramuka b.JPG",
            "assets/covers/pramuka c.JPG",
            "assets/covers/pramuka d.JPG",
            "assets/covers/pramuka e.JPG"
        ],
        link: "https://drive.google.com/drive/folders/1Bz7MBLhcFSi5iSd5wRbcZRw1yV_I3_96?usp=drive_link"
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
        covers: [
            "assets/covers/pr a.JPG",
            "assets/covers/pr b.JPG",
            "assets/covers/pr c.JPG",
            "assets/covers/pr d.JPG"
        ],
        link: "https://drive.google.com/drive/folders/1CJGuYq175tQG0n3_fdAXaTNOd3nNGfCe?usp=drive_link"
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
        cover: "assets/covers/pr a.JPG",
        covers: ["assets/covers/pr a.JPG"],
        link: "https://drive.google.com/drive/folders/1Nx5mXzFnwk3QPumpugaf4ysqUMCuzsyw?usp=drive_link"
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
        covers: [
            "assets/covers/pps 1.JPG",
            "assets/covers/pps 2.JPG",
            "assets/covers/pps 3.JPG",
            "assets/covers/pps 4.JPG",
            "assets/covers/pps 5.JPG",
            "assets/covers/pps 6.JPG",
            "assets/covers/pps 7.JPG"
        ],
        link: "https://drive.google.com/drive/folders/1Nx5mXzFnwk3QPumpugaf4ysqUMCuzsyw?usp=drive_link"
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
        covers: [
            "assets/covers/p51.JPG",
            "assets/covers/p52.JPG",
            "assets/covers/p53.JPG",
            "assets/covers/p54.JPG",
            "assets/covers/p55.JPG",
            "assets/covers/p56.JPG"
        ],
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
        covers: [
            "assets/covers/pw1.JPG",
            "assets/covers/pw2.JPG",
            "assets/covers/pw3.JPG",
            "assets/covers/pw4.JPG",
            "assets/covers/pw5.JPG"
        ],
        link: "https://drive.google.com/drive/folders/1JdO2LUDSLTzUWUpYyXo09fJyhpodp6l8?usp=sharing"
    },

        {
        id: 10,
        title: "Pawai cendekia at Lubuk Basung",
        category: "Sekolah",
        description: "Wonderful performance cendekia at lubuk basung.",
        date: "18 Agustus 2026",
        photos: 0,
        unlimited: false,
        featured: false,
        cover: "assets/covers/.JPG",
        covers: [
            "assets/covers/.JPG",
            "assets/covers/.JPG",
            "assets/covers/.JPG",
            "assets/covers/.JPG",
            "assets/covers/.JPG"
        ],
        link: "https://drive.google.com/drive/folders/1fOx6FNRHSVk1fxuLy_hwNYG10eJdAb1x?usp=sharing"
    },

      {
        id: 11,
        title: "Last walking GalaXXI",
        category: "Angkatan",
        description: "Our last walking at cendekia.",
        date: "18 Agustus 2026",
        photos: 0,
        unlimited: false,
        featured: false,
        cover: "assets/covers/.JPG",
        covers: [
            "assets/covers/.JPG",
            "assets/covers/.JPG",
            "assets/covers/.JPG",
            "assets/covers/.JPG",
            "assets/covers/.JPG"
        ],
        link: "https://drive.google.com/drive/folders/14fUf4_BjTO8iHg8i6DTiQLE8cAT8Dgib?usp=sharing"
    },


];

/*==================================================
    ALBUM LAYOUT OVERRIDE
    Maksimal 2 kartu per baris dan thumbnail 16:9.
    Tab/filter sengaja tidak diubah.
==================================================*/
(function injectAlbumLayout(){
    const style = document.createElement("style");
    style.textContent = `
        .album-grid{
            grid-template-columns:repeat(2,minmax(0,1fr)) !important;
        }

        .album-cover{
            height:auto !important;
            aspect-ratio:16 / 9;
        }

        .cover-image{
            width:100%;
            height:100%;
            object-fit:cover;
        }

        /* Thumbnail kosong tetap tampil, tetapi tanpa ikon kamera. */
        .cover-placeholder > i,
        .cover-placeholder > svg{
            display:none !important;
        }

        @media (max-width:760px){
            .album-grid{
                grid-template-columns:1fr !important;
            }
        }
    `;
    document.head.appendChild(style);
})();
