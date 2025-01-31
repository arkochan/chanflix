import { create } from 'zustand';
import { Media } from '@/types/media';

interface SearchResultState {
  searchResult: Media[];
  setSearchResult: (results: Media[]) => void;
}

const useSearchStore = create<SearchResultState>((set) => ({
  searchResult: [],
  setSearchResult: (results) => set({ searchResult: results }),
}));

export default useSearchStore;

