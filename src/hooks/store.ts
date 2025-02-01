import { create } from 'zustand';
import { SearchResult } from '@/types/ResultMetaData';

interface SearchResultState {
  searchResult: SearchResult | null;
  setSearchResult: (results: SearchResult) => void;
}

const useSearchStore = create<SearchResultState>((set) => ({
  searchResult: null,
  setSearchResult: (results) => set({ searchResult: results }),
}));

export default useSearchStore;

