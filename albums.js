/*==================================================
    GalaXXI Archive
    Album Database
    Version 1.1
==================================================*/

"use strict";

/*==================================================
    ALBUM DATA

    Setiap album bisa memiliki beberapa cover.
    Cover pertama akan menjadi thumbnail awal.
    Tambahkan foto berikutnya ke array "covers".
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
        featured: true,

        cover: "assets/covers/Pergantian Pangkat.jpg",

        covers: [
            "assets/covers/Pergantian Pangkat.jpg"
        ],

        link: "https://drive.google.com/drive/folders/1Orukhi1sVJvXJdeMssnmhlyiwCBg1bLt?usp=sharing"
    },

    /*==============================================
        ALBUM 02
    ==============================================*/

    {
        id: 2,
        title: "Pelantikan OSIS & PMR 2026",
        category: "Organisasi",
        description: "Dokumentasi kegiatan yang tersimpan di Google Drive.",
        date: "11 Maret 2026",
        photos: 85,
        featured: false,

        cover: "assets/covers/Osis PMR.JPG",

        covers: [
            "assets/covers/Osis PMR.JPG"
        ],

        link: "https://drive.google.com/drive/folders/1SF6vQenVT4lPm-8XMi-XFTpG4g22OBia?usp=drive_link"
    },

    /*==============================================
        ALBUM 03
    ==============================================*/

    {
        id: 3,
        title: "Ramadhan GalaXXI",
        category: "Angkatan",
        description: "GalaXXI Last Ramadhan.",
        date: "10 Maret 2026",
        photos: 0,
        featured: false,

        cover: "assets/covers/Ramadhan.jpg",

        covers: [
            "assets/covers/Ramadhan.jpg"
        ],

        link: "https://drive.google.com/drive/folders/1s4jPLm-2uRg-u4EU_L9U3NzckBrX_sQm?usp=drive_link"
    },

    /*==============================================
        ALBUM 04
    ==============================================*/

    {
        id: 4,
        title: "GalaXXi Camping (1)",
        category: "Angkatan",
        description: "One of GalaXXI's best moments..",
        date: "7-9 November 2025",
        photos: 0,
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

    /*==============================================
        ALBUM 05
        SLOT SIAP DIISI
    ==============================================*/

    {
        id: 5,
        title: "Judul Album 05",
        category: "Kategori",
        description: "Deskripsi album 05.",
        date: "Tanggal",
        photos: 0,
        featured: false,

        cover: "assets/covers/album-05.jpg",

        covers: [
            "assets/covers/album-05.jpg"
        ],

        link: "https://drive.google.com/"
    },

    /*==============================================
        ALBUM 06
        SLOT SIAP DIISI
    ==============================================*/

    {
        id: 6,
        title: "Judul Album 06",
        category: "Kategori",
        description: "Deskripsi album 06.",
        date: "Tanggal",
        photos: 0,
        featured: false,

        cover: "assets/covers/album-06.jpg",

        covers: [
            "assets/covers/album-06.jpg"
        ],

        link: "https://drive.google.com/"
    }

];
