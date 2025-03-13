import axios from "axios";
import { create } from "zustand";
import { IELTS_TOPICS_API } from "../utils/API";

export const useTopicsDetailStore = create((set) => ({
  topicsDetail: [],
  eachTopicDetail: {},
  getTopicsDetail: async () => {
    try {
      const response = await axios.get(IELTS_TOPICS_API);
      const data = await response.data;
      set({ topicsDetail: data });
    } catch (error) {
      console.log(error);
    }
  },
  getEachTopicDetail: async (id) => {
    try {
      const eachTopicDetail = useTopicsDetailStore.getState().topicsDetail[id];

      set({ eachTopicDetail: eachTopicDetail });
    } catch (error) {
      console.log(error);
    }
  },
}));
