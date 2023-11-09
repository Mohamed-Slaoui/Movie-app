// import { defineStore } from "pinia"

export const useSearchStore = defineStore("search", {
    state: () => ({
        searchterm : ''
    }),

    actions: {
        searchNow(txt){
            this.searchterm = txt;
        }
    }
})