import axios from "axios";
import { create } from "zustand";
import { GRE_VOCAB_API } from "../utils/API";
import { convertXLSXtoJSON } from "../utils/Helper";

export const useVocabStore = create((set) => ({
  vocabStore: [],
  show: true,
  toggleShow: () => {
    set((state) => ({ show: !state.show }));
  },
  getVocab: async (max) => {
    const res = await axios.get(GRE_VOCAB_API, {
      responseType: "arraybuffer",
    });

    const Data = convertXLSXtoJSON(res);

    set((state) => {
      let preLen = state.vocabStore.length;
      let newArr = Data.slice(preLen, preLen + max);
      return {
        vocabStore: [...state.vocabStore, ...newArr],
      };
    });
  },
  getVocabByIndex: (index) => {
    const item = useVocabStore.getState().vocabStore[index];
    return { ...item, Sentence: item["Sentence"].split(";") };
  },
}));
