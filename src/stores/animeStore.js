import { create } from "zustand";
import axios from "axios";

export const animeStore = create((set) => ({
  anime: [],
  filteredAnime: [],
  allAnime: [],
  upComing: [],
  news: [],
  search: "",
  loading: false,
  error: null,
  animeDetail: null,
  currentPage: 1,
  totalPages: 1,
  randomAnime: null,

  getAnime: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("https://api.jikan.moe/v4/seasons/now");
      set({
        anime: response.data.data,
        loading: false,
        error: null,
      });
    
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

 

  getUpcoming: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("https://api.jikan.moe/v4/seasons/upcoming");
      set({
        upComing: response.data.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  getAllAnime: async (page = 1) => {
    set({ loading: true });
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?page=${page}`
      );
      set({
        allAnime: response.data.data,
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



  filterAnime: (genre) =>
    set((state) => ({
      filteredAnime:
        genre === "all"
          ? state.allAnime
          : state.allAnime.filter((anime) =>
              anime.genres.some((g) =>
                g.name.toLowerCase().includes(genre.toLowerCase())
              )
            ),
    })),

  searchAnime: (searchTitle) =>
    set((state) => ({
      search: searchTitle,
      filteredAnime: state.allAnime.filter((anime) =>
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
