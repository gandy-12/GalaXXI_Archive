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
        unlimited: false,
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
        unlimited: false,
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

    /*==============================================
        ALBUM 05
    ==============================================*/

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

    /*==============================================
        ALBUM 06
    ==============================================*/

    {
        id: 6,
        title: "Behind The Scene Camping GalaXXI",
        category: "Angkatan",
        description: "Behind the scenes of the most spectacular GalaXXI event..",
        date: "November 2K25",
        photos: 0,
        unlimited: false,
        featured: false,

        cover: "assets/covers/bts 1.JPG",

        covers: [
            "assets/covers/bts 1.JPG",
            "assets/covers/bts 2.JPG",
            "assets/covers/bts 3.JPG",
            "assets/covers/bts 4.JPG",
            "assets/covers/bts 5.JPG"
        ],

        link: "https://drive.google.com/drive/folders/1Nx5mXzFnwk3QPumpugaf4ysqUMCuzsyw?usp=drive_link"
    }

];
