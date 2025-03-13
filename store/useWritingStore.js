import axios from "axios";
import { create } from "zustand";
import { IELTS_REPLACE_API } from "../utils/API";

export const useWritingStore = create((set) => ({
  writingStore: [],
  IELTSItem: {},
  setWritingStore: async (max) => {
    try {
      const res = await axios.get(IELTS_REPLACE_API);
      const data = res.data;
      let preLen = useWritingStore.getState().writingStore.length;
      let newArr = data.slice(preLen, preLen + max);
      set((state) => ({
        writingStore: [...state.writingStore, ...newArr],
      }));
    } catch (error) {
      throw Error("Some problem happen in writingStore", error);
    }
  },
  setIELTSItem: (id) => {
    let item = useWritingStore.getState().writingStore[id];
    set({
      IELTSItem: item,
    });
  },
}));
