import axios from "axios";
import { create } from "zustand";
import { PHRASE_API } from "../utils/API";
import { convertXLSXtoJSON } from "../utils/Helper";

export const usePhraseStore = create(set=>({
    phraseStore: [],
    phraseIT:{},
    setPhrase:async(max)=>{
        try {
            const res = await axios.get(PHRASE_API, {
                responseType:'arraybuffer'
            });
            const data =  convertXLSXtoJSON(res);
            set(state=>{
                let preLen = state.phraseStore.length;
                let newArr = data.slice(preLen, preLen + max);
                return {
                    phraseStore:[...state.phraseStore, ...newArr]
                }
            })
            
        } catch (error) {
            throw Error("Some problem happen in phraseStore", error);
        }
    },
    setPhraseIT:(id)=>{
        let item = usePhraseStore.getState().phraseStore[id];
        set({phraseIT:{
            'correct':item['right_sentence'].split(';'),
            "incorrect":item['wrong_sentence'].split(';'),
            "word":item['word']
        }})
        
    }

}))