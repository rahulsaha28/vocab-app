import axios from "axios";
import { create } from "zustand";
import { IELTS_WRITING_STR_API } from "../utils/API";

export const useStructureVocab = create((set) => ({
  structureVocab: [],
  str: {},
  setStructureVocab: async () => {
    const responce = await axios.get(IELTS_WRITING_STR_API);
    set({ structureVocab: responce.data });
  },
  setStr: (id) => {
    set((state) => ({
      str: state.structureVocab[id],
    }));
  },
}));
