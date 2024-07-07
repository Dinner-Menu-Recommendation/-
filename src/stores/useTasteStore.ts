import { create } from "zustand";

interface UseTasteStore {
  taste: Partial<Food>;
  setTaste: (newTaste: Partial<Food>) => void;
}

const useTasteStore = create<UseTasteStore>((set) => ({
  taste: {
    name: null,
    spicy: null,
    meal: null,
    cuisine: null,
    containsMeat: null,
    containsSeafood: null,
    base: null,
    expensive: null,
    lowCalorie: null,
    withSoup: null,
    light: null,
  },
  setTaste: (newTaste) =>
    set((state) => ({
      taste: { ...state.taste, ...newTaste },
    })),
}));

export default useTasteStore;
