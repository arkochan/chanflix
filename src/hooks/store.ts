import { create } from 'zustand';
import { MetaData as MetaData } from '@/types/media';

interface SearchResultState {
  searchResult: MetaData[];
  setSearchResult: (results: MetaData[]) => void;
}

const useSearchStore = create<SearchResultState>((set) => ({
  searchResult: [],
  setSearchResult: (results) => set({ searchResult: results }),
}));

export default useSearchStore;

