/*==================================================
    GalaXXI Archive
    Version 1.0
==================================================*/

"use strict";

const App = {

    state: {
        albums: [],
        filteredAlbums: [],
        currentCategory: "Semua",
        keyword: ""
    },

    dom: {},

    init() {
        this.cacheDOM();
        this.loadAlbums();
        this.renderCategories();
        this.bindEvents();
        this.render();
        this.initObserver();
        this.hideLoader();

        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }
    },

    cacheDOM() {
        this.dom.albumContainer = document.getElementById("albumContainer");
        this.dom.albumTemplate = document.getElementById("albumTemplate");
        this.dom.searchInput = document.getElementById("searchInput");
        this.dom.categoryWrapper = document.querySelector(".category-wrapper");
        this.dom.emptyState = document.getElementById("emptyState");
        this.dom.loader = document.getElementById("loader");
        this.dom.progress = document.getElementById("scrollProgress");
        this.dom.backTop = document.getElementById("backToTop");
        this.dom.toast = document.getElementById("toast");
        this.dom.themeToggle = document.getElementById("themeToggle");
        this.dom.featuredCover = document.getElementById("featuredCover");
        this.dom.featuredTitle = document.getElementById("featuredTitle");
        this.dom.featuredDescription = document.getElementById("featuredDescription");
        this.dom.featuredDate = document.getElementById("featuredDate");
        this.dom.featuredPhotos = document.getElementById("featuredPhotos");
        this.dom.featuredLink = document.getElementById("featuredLink");
        this.dom.driveStat = document.getElementById("driveStat");
        this.dom.albumCount = document.getElementById("albumCount");
        this.dom.photoCount = document.getElementById("photoCount");
        this.dom.categoryCount = document.getElementById("categoryCount");
        this.dom.miniAlbum = document.getElementById("miniAlbum");
        this.dom.miniPhoto = document.getElementById("miniPhoto");
        this.dom.miniCategory = document.getElementById("miniCategory");
    },

    loadAlbums() {
        if (!Array.isArray(albums)) {
            console.error("albums.js tidak ditemukan atau format datanya tidak valid.");
            return;
        }

        this.state.albums = [...albums];
        this.state.filteredAlbums = [...albums];
    },

    render() {
        this.renderCategories();
        this.renderAlbums();
        this.renderFeatured();
        this.updateStatistics();
        this.updateMiniStats();
    },

    hideLoader() {
        if (!this.dom.loader) return;

        window.addEventListener("load", () => {
            setTimeout(() => {
                this.dom.loader.classList.add("hide");
            }, 700);
        });
    },

    showToast(message) {
        if (!this.dom.toast) return;

        const text = this.dom.toast.querySelector("span");
        if (text) text.textContent = message;

        this.dom.toast.classList.add("show");
        clearTimeout(this.toastTimer);

        this.toastTimer = setTimeout(() => {
            this.dom.toast.classList.remove("show");
        }, 2200);
    },

    format(number) {
        return new Intl.NumberFormat("id-ID").format(number);
    },

    renderAlbums() {
        if (!this.dom.albumContainer || !this.dom.albumTemplate) return;

        this.dom.albumContainer.innerHTML = "";

        if (this.state.filteredAlbums.length === 0) {
            this.dom.emptyState?.classList.remove("hidden");
            return;
        }

        this.dom.emptyState?.classList.add("hidden");

        this.state.filteredAlbums.forEach(album => {
            const clone = this.dom.albumTemplate.content.cloneNode(true);

            const cover = clone.querySelector(".cover-image");
            const title = clone.querySelector(".album-title");
            const description = clone.querySelector(".album-description");
            const category = clone.querySelector(".album-category");
            const date = clone.querySelector(".album-date");
            const photoCount = clone.querySelector(".album-total");
            const button = clone.querySelector(".open-button");

            if (cover) {
                cover.src = album.cover;
                cover.alt = album.title;
            }

            if (title) title.textContent = album.title;
            if (description) description.textContent = album.description;
            if (category) category.textContent = album.category;
            if (date) date.textContent = album.date;
            if (photoCount) photoCount.textContent = `${this.format(album.photos)} Foto`;

            if (button) {
                button.href = album.link;
                button.target = "_blank";
                button.rel = "noopener noreferrer";
            }

            this.dom.albumContainer.appendChild(clone);
        });

        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }
    },

    renderFeatured() {
        if (!this.dom.featuredCover) return;

        let featured = this.state.filteredAlbums.find(album => album.featured);

        if (!featured) featured = this.state.filteredAlbums[0];
        if (!featured) return;

        this.dom.featuredCover.src = featured.cover;
        this.dom.featuredCover.alt = featured.title;

        if (this.dom.featuredTitle) this.dom.featuredTitle.textContent = featured.title;
        if (this.dom.featuredDescription) this.dom.featuredDescription.textContent = featured.description;
        if (this.dom.featuredDate) this.dom.featuredDate.textContent = featured.date;
        if (this.dom.featuredPhotos) this.dom.featuredPhotos.textContent = `${this.format(featured.photos)} Foto`;

        if (this.dom.featuredLink) {
            this.dom.featuredLink.href = featured.link;
            this.dom.featuredLink.target = "_blank";
            this.dom.featuredLink.rel = "noopener noreferrer";
        }

        // Kartu Google Drive di statistik mengarah ke album featured.
        if (this.dom.driveStat) {
            this.dom.driveStat.href = featured.link;
            this.dom.driveStat.target = "_blank";
            this.dom.driveStat.rel = "noopener noreferrer";
            this.dom.driveStat.title = `Buka Google Drive: ${featured.title}`;
        }
    },

    updateStatistics() {
        if (this.state.albums.length === 0) return;

        const totalAlbum = this.state.albums.length;
        const totalPhoto = this.state.albums.reduce((sum, album) => sum + Number(album.photos || 0), 0);
        const categories = new Set(this.state.albums.map(album => album.category));

        this.animateCounter(this.dom.albumCount, totalAlbum);
        this.animateCounter(this.dom.photoCount, totalPhoto);
        this.animateCounter(this.dom.categoryCount, categories.size);
    },

    updateMiniStats() {
        if (this.state.albums.length === 0) return;

        const totalPhoto = this.state.albums.reduce((sum, album) => sum + Number(album.photos || 0), 0);
        const totalCategory = new Set(this.state.albums.map(album => album.category)).size;

        this.animateCounter(this.dom.miniAlbum, this.state.albums.length);
        this.animateCounter(this.dom.miniPhoto, totalPhoto);
        this.animateCounter(this.dom.miniCategory, totalCategory);
    },

    animateCounter(element, target) {
        if (!element) return;

        let current = 0;
        const increment = Math.max(1, Math.ceil(target / 80));

        const timer = setInterval(() => {
            current += increment;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            element.textContent = this.format(current);
        }, 15);
    },

    filterAlbums() {
        this.state.filteredAlbums = this.state.albums.filter(album => {
            const matchCategory =
                this.state.currentCategory === "Semua" ||
                album.category === this.state.currentCategory;

            const keyword = this.state.keyword.toLowerCase();

            const matchKeyword =
                album.title.toLowerCase().includes(keyword) ||
                album.description.toLowerCase().includes(keyword) ||
                album.category.toLowerCase().includes(keyword);

            return matchCategory && matchKeyword;
        });

        this.renderAlbums();
        this.renderFeatured();
    },

    renderCategories() {
        if (!this.dom.categoryWrapper) return;

        const categories = [
            "Semua",
            ...new Set(this.state.albums.map(album => album.category))
        ];

        this.dom.categoryWrapper.innerHTML = "";

        categories.forEach(category => {
            const button = document.createElement("button");
            button.className = "category";

            if (category === "Semua") {
                button.classList.add("active");
            }

            button.dataset.category = category;
            button.textContent = category;
            this.dom.categoryWrapper.appendChild(button);
        });
    },

    bindEvents() {
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = height > 0 ? (scrollTop / height) * 100 : 0;

            if (this.dom.progress) this.dom.progress.style.width = progress + "%";

            if (this.dom.backTop) {
                this.dom.backTop.classList.toggle("show", scrollTop > 400);
            }
        });

        this.dom.backTop?.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        this.dom.searchInput?.addEventListener("input", event => {
            this.state.keyword = event.target.value.trim();
            this.filterAlbums();
        });

        this.dom.categoryWrapper?.addEventListener("click", event => {
            const button = event.target.closest(".category");
            if (!button) return;

            this.dom.categoryWrapper
                .querySelectorAll(".category")
                .forEach(item => item.classList.remove("active"));

            button.classList.add("active");
            this.state.currentCategory = button.dataset.category;
            this.filterAlbums();
        });

        this.dom.themeToggle?.addEventListener("click", () => {
            document.body.classList.toggle("light");

            localStorage.setItem(
                "theme",
                document.body.classList.contains("light") ? "light" : "dark"
            );
        });

        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            document.body.classList.add("light");
        }
    },

    initObserver() {
        if (!("IntersectionObserver" in window)) return;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.15 }
        );

        document.querySelectorAll(".reveal").forEach(element => {
            observer.observe(element);
        });
    }
};

document.addEventListener("DOMContentLoaded", () => {
    App.init();
});
