import { create } from "zustand";
import axios from "axios";

export const animeStore = create((set) => ({
  anime: [],
  filteredAnime: [],
  search: "",
  loading: false,
  error: null,
  animeDetail: null,

  getAnime: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("https://api.jikan.moe/v4/anime");
      set({
        anime: response.data.data,
        loading: false,
        error: null,
        filteredAnime: response.data.data,
      });
    } catch (error) {
      set({ error: error.message, loading: false });
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
