import { create } from "zustand";

interface UseTestCountStore {
  testCount: number;
  setTestCount: (newCount: number) => void;
}

const useTestCountStore = create<UseTestCountStore>((set) => ({
  testCount: 1,
  setTestCount: (newCount: number) => set(() => ({ testCount: newCount })),
}));

export default useTestCountStore;
