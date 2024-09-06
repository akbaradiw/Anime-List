import { create } from "zustand";
import axios from "axios";

export const animeStore = create((set) => ({
  anime: [],
  filteredAnime: [],
  topAnime: [],
  filteredTopAnime: [],
  search: "",
  loading: false,
  error: null,
  animeDetail: null,
  currentPage: 1,
  totalPages: 1,

  getAnime: async (page = 1) => {
    set({ loading: true });
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/seasons/now?page=${page}`);
      set({
        anime: response.data.data,
        loading: false,
        error: null,
        filteredAnime: response.data.data,
        currentPage: page,
        totalPages: response.data.pagination.last_visible_page,
      });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  setCurrentPage: (page) => set({ currentPage: page }),




  getTopAnime: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("https://api.jikan.moe/v4/top/anime");
      set({
        topAnime: response.data.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error.message || "An error occurred while fetching data",
        loading: false,
      });
    }
  },
  
  filterAnime: (genre) =>
    set((state) => ({
      filteredAnime:
        genre === "all"
          ? state.anime
          : state.anime.filter((anime) =>
              anime.genres.some((g) =>
                g.name.toLowerCase().includes(genre.toLowerCase())
              )
            ),
    })),

  searchAnime: (searchTitle) =>
    set((state) => ({
      search: searchTitle,
      filteredAnime: state.anime.filter((anime) =>
        anime.title.toLowerCase().includes(searchTitle.toLowerCase())
      ),
    })),

  resetFilter: () =>
    set((state) => ({
      filteredAnime: state.anime,
    })),

  getAnimeDetail: async (id) => {
    set({ loading: true });
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
      set({
        animeDetail: response.data.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
