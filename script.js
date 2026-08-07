/*==================================================
    GalaXXI Archive
    Version 1.0
==================================================*/

"use strict";

/*==================================================
    APP
==================================================*/

const App = {

    /*==============================================
        STATE
    ==============================================*/

    state: {

        albums: [],

        filteredAlbums: [],

        currentCategory: "Semua",

        keyword: ""

    },

    /*==============================================
        DOM
    ==============================================*/

    dom: {},

    /*==============================================
        INIT
    ==============================================*/

   init() {

    this.cacheDOM();

    this.loadAlbums();

    this.renderCategories();

    this.bindEvents();

    this.render();

    this.initObserver();

    this.hideLoader();

    lucide.createIcons();

},
    },

    /*==============================================
        CACHE DOM
    ==============================================*/

    cacheDOM() {

        this.dom.albumContainer =
            document.getElementById("albumContainer");

        this.dom.albumTemplate =
            document.getElementById("albumTemplate");

        this.dom.searchInput =
            document.getElementById("searchInput");

        this.dom.categoryWrapper =
            document.querySelector(".category-wrapper");

        this.dom.emptyState =
            document.getElementById("emptyState");

        this.dom.loader =
            document.getElementById("loader");

        this.dom.progress =
            document.getElementById("scrollProgress");

        this.dom.backTop =
            document.getElementById("backToTop");

        this.dom.toast =
            document.getElementById("toast");

        this.dom.themeToggle =
            document.getElementById("themeToggle");

        this.dom.featuredCover =
            document.getElementById("featuredCover");

        this.dom.featuredTitle =
            document.getElementById("featuredTitle");

        this.dom.featuredDescription =
            document.getElementById("featuredDescription");

        this.dom.featuredDate =
            document.getElementById("featuredDate");

        this.dom.featuredPhotos =
            document.getElementById("featuredPhotos");

        this.dom.featuredLink =
            document.getElementById("featuredLink");

        this.dom.albumCount =
            document.getElementById("albumCount");

        this.dom.photoCount =
            document.getElementById("photoCount");

        this.dom.categoryCount =
            document.getElementById("categoryCount");

        this.dom.miniAlbum =
            document.getElementById("miniAlbum");

        this.dom.miniPhoto =
            document.getElementById("miniPhoto");

        this.dom.miniCategory =
            document.getElementById("miniCategory");

    },

    /*==============================================
        LOAD DATA
    ==============================================*/

    loadAlbums() {

        if (typeof albums === "undefined") {

            console.error("albums.js belum ditemukan");

            return;

        }

        this.state.albums = [...albums];

        this.state.filteredAlbums = [...albums];

    },

    /*==============================================
        RENDER
    ==============================================*/

    render() {

        this.renderAlbums();

        this.renderFeatured();

        this.updateStatistics();

        this.updateMiniStats();

    },

    /*==============================================
        LOADER
    ==============================================*/

    hideLoader() {

        window.addEventListener("load", () => {

            setTimeout(() => {

                this.dom.loader.classList.add("hide");

            }, 700);

        });

    },

    /*==============================================
        TOAST
    ==============================================*/

    showToast(message) {

        this.dom.toast.querySelector("span").textContent = message;

        this.dom.toast.classList.add("show");

        clearTimeout(this.toastTimer);

        this.toastTimer = setTimeout(() => {

            this.dom.toast.classList.remove("show");

        }, 2200);

    },

    /*==============================================
        FORMAT NUMBER
    ==============================================*/

    format(number) {

        return new Intl.NumberFormat("id-ID")
            .format(number);

    },
      /*==============================================
        RENDER ALBUMS
    ==============================================*/

    renderAlbums() {

        this.dom.albumContainer.innerHTML = "";

        if (this.state.filteredAlbums.length === 0) {

            this.dom.emptyState.classList.remove("hidden");

            return;

        }

        this.dom.emptyState.classList.add("hidden");

        this.state.filteredAlbums.forEach(album => {

            const clone =
                this.dom.albumTemplate.content.cloneNode(true);

            clone.querySelector(".album-cover").src =
                album.cover;

            clone.querySelector(".album-cover").alt =
                album.title;

            clone.querySelector(".album-title").textContent =
                album.title;

            clone.querySelector(".album-description").textContent =
                album.description;

            clone.querySelector(".album-category").textContent =
                album.category;

            clone.querySelector(".album-date").textContent =
                album.date;

            clone.querySelector(".album-photo-count").textContent =
                `${this.format(album.photos)} Foto`;

            const button =
                clone.querySelector(".open-button");

            button.href = album.link;

            button.target = "_blank";

            this.dom.albumContainer.appendChild(clone);

        });

        lucide.createIcons();

    },

    /*==============================================
        FEATURED ALBUM
    ==============================================*/

    renderFeatured() {

        let featured =
            this.state.albums.find(album => album.featured);

        if (!featured) {

            featured = this.state.albums[0];

        }

        if (!featured) return;

        this.dom.featuredCover.src =
            featured.cover;

        this.dom.featuredCover.alt =
            featured.title;

        this.dom.featuredTitle.textContent =
            featured.title;

        this.dom.featuredDescription.textContent =
            featured.description;

        this.dom.featuredDate.textContent =
            featured.date;

        this.dom.featuredPhotos.textContent =
            `${this.format(featured.photos)} Foto`;

        this.dom.featuredLink.href =
            featured.link;

    },

    /*==============================================
        STATISTICS
    ==============================================*/

    updateStatistics() {

        const totalAlbum =
            this.state.albums.length;

        const totalPhoto =
            this.state.albums.reduce(

                (sum, album) => sum + album.photos,

                0

            );

        const categories =
            new Set(

                this.state.albums.map(

                    album => album.category

                )

            );

        this.animateCounter(

            this.dom.albumCount,

            totalAlbum

        );

        this.animateCounter(

            this.dom.photoCount,

            totalPhoto

        );

        this.animateCounter(

            this.dom.categoryCount,

            categories.size

        );

    },

    /*==============================================
        MINI STATS
    ==============================================*/

    updateMiniStats() {

        const totalPhoto =
            this.state.albums.reduce(

                (sum, album) => sum + album.photos,

                0

            );

        const totalCategory =
            new Set(

                this.state.albums.map(

                    album => album.category

                )

            ).size;

        this.animateCounter(

            this.dom.miniAlbum,

            this.state.albums.length

        );

        this.animateCounter(

            this.dom.miniPhoto,

            totalPhoto

        );

        this.animateCounter(

            this.dom.miniCategory,

            totalCategory

        );

    },

    /*==============================================
        COUNTER
    ==============================================*/

    animateCounter(element, target) {

        if (!element) return;

        let current = 0;

        const increment =

            Math.max(

                1,

                Math.ceil(target / 80)

            );

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            element.textContent =
                this.format(current);

        }, 15);

    },
      /*==============================================
        FILTER ALBUMS
    ==============================================*/

    filterAlbums() {

        this.state.filteredAlbums = this.state.albums.filter(album => {

            const matchCategory =
                this.state.currentCategory === "Semua" ||
                album.category === this.state.currentCategory;

            const keyword =
                this.state.keyword.toLowerCase();

            const matchKeyword =

                album.title.toLowerCase().includes(keyword) ||

                album.description.toLowerCase().includes(keyword) ||

                album.category.toLowerCase().includes(keyword);

            return matchCategory && matchKeyword;

        });

        this.renderAlbums();

    },

    /*==============================================
        CREATE CATEGORIES
    ==============================================*/

    renderCategories() {

        const categories = [

            "Semua",

            ...new Set(

                this.state.albums.map(

                    album => album.category

                )

            )

        ];

        this.dom.categoryWrapper.innerHTML = "";

        categories.forEach(category => {

            const button = document.createElement("button");

            button.className = "category";

            if(category === "Semua"){

                button.classList.add("active");

            }

            button.dataset.category = category;

            button.textContent = category;

            this.dom.categoryWrapper.appendChild(button);

        });

    },

    /*==============================================
        EVENTS
    ==============================================*/

    bindEvents() {

        window.addEventListener("scroll", () => {

            const scrollTop = window.scrollY;

            const height =

                document.documentElement.scrollHeight -

                window.innerHeight;

            const progress =

                (scrollTop / height) * 100;

            if(this.dom.progress){

                this.dom.progress.style.width =

                    progress + "%";

            }

            if(this.dom.backTop){

                this.dom.backTop.classList.toggle(

                    "show",

                    scrollTop > 400

                );

            }

        });

        this.dom.backTop?.addEventListener(

            "click",

            () => {

                window.scrollTo({

                    top:0,

                    behavior:"smooth"

                });

            }

        );

        this.dom.searchInput?.addEventListener(

            "input",

            event => {

                this.state.keyword =

                    event.target.value.trim();

                this.filterAlbums();

            }

        );

        this.dom.categoryWrapper?.addEventListener(

            "click",

            event => {

                const button =

                    event.target.closest(".category");

                if(!button) return;

                this.dom.categoryWrapper

                .querySelectorAll(".category")

                .forEach(item =>

                    item.classList.remove("active")

                );

                button.classList.add("active");

                this.state.currentCategory =

                    button.dataset.category;

                this.filterAlbums();

            }

        );

        this.dom.themeToggle?.addEventListener(

            "click",

            () => {

                document.body.classList.toggle("light");

                localStorage.setItem(

                    "theme",

                    document.body.classList.contains("light")

                        ? "light"

                        : "dark"

                );

            }

        );

        const savedTheme =

            localStorage.getItem("theme");

        if(savedTheme === "light"){

            document.body.classList.add("light");

        }

    },

    /*==============================================
        OBSERVER
    ==============================================*/

    initObserver(){

        const observer = new IntersectionObserver(

            entries=>{

                entries.forEach(entry=>{

                    if(entry.isIntersecting){

                        entry.target.classList.add("active");

                    }

                });

            },

            {

                threshold:0.15

            }

        );

        document

        .querySelectorAll(".reveal")

        .forEach(element=>{

            observer.observe(element);

        });

    }

};

/*==============================================
    START APP
==============================================*/

document.addEventListener(

    "DOMContentLoaded",

    ()=>{


        App.init();

    }

);
