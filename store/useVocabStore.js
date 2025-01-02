import { create } from "zustand";
import Data from "../Data.json";
export const useVocabStore = create((set) => ({
  vocabStore: [],
  show: true,
  toggleShow: () => {
    set((state) => ({ show: !state.show }));
  },
  getVocab: async (max) => {
    set((state) => {
      let preLen = state.vocabStore.length;
      let newArr = Data.slice(preLen, preLen + max);
      return {
        vocabStore: [...state.vocabStore, ...newArr],
      };
    });
  },
}));
