import axios from "axios";
import { create } from "zustand";
import DataTemp from "../Data.json";
import { C1_GRAMMER_API, GRE_VOCAB_API } from "../utils/API";
import { convertXLSXtoJSON } from "../utils/Helper";

export const useVocabStore = create((set) => ({
  vocabStore: [],
  show: true,
  searchLength:0,
  toggleShow: () => {
    set((state) => ({ show: !state.show }));
  },
  getVocab: async (max) => {
    const res = await axios.get(GRE_VOCAB_API, {
      responseType: "arraybuffer",
    });

    const Data = convertXLSXtoJSON(res) || DataTemp;

    set((state) => {
      let preLen = state.vocabStore.length;
      let newArr = Data.slice(state.searchLength+preLen, state.searchLength+ preLen + max);
      return {
        vocabStore: [...state.vocabStore, ...newArr],
      };
    });
  },
  searchVocab:async(value, max)=>{
    const res = await axios.get(GRE_VOCAB_API, {
      responseType: "arraybuffer",
    })
    const Data = convertXLSXtoJSON(res);
    set(state=>{
      //let preLen = state.vocabStore.length;
      let newArr = Data.slice(value-1, value+max);
      return {
        vocabStore:[...newArr],
        searchLength:value-1
      }
    })

  },
  getVocabByIndex: (index) => {
    const item = useVocabStore.getState().vocabStore[index];
    return { ...item, Sentence: item["Sentence"].split(";") };
  },
}));

export const useCGrammerVideoStore = create((set) => ({
  videoStore: [],
  videos: [],
  getVideoStore: async (max) => {
    const res = await axios.get(C1_GRAMMER_API, {
      responseType: "arraybuffer",
    });
    const data = convertXLSXtoJSON(res);

    set((state) => {
      let preLen = state.videoStore.length;
      let newArr = data.slice(preLen, preLen + max);
      
      return {
        videoStore: [...state.videoStore, ...newArr],
      };
    });
  },
  parseVideosById: async (idString) => {
    set({
      videos: idString.split(";"),
    });
  },
}));
