import { defineStore } from "pinia";

export const useModal = defineStore('modal', { 
    state: () =>({
        marc:false, 
        register: true, 
    })
})