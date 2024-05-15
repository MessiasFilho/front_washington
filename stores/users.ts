import { defineStore } from "pinia";

export interface createUser { 
    name: '', 
    email: '', 
    fone: '', 
    cpf: '',
    password: ''
    confpassword: '', 
}

export interface usersInterface extends createUser {
    id: number,
}

export const userModal = defineStore('users',{
    state: () =>({
       user: [] as createUser[]
    }),
    actions:{
        async createUser(user: createUser){ 
            const {data, error} = await useFetch<createUser>('users',{
                method: 'POST', 
                baseURL: useRuntimeConfig().public.backend, 
                body:{
                    ...user
                }
            })
            if(error.value){
                return console.log(error.value);
            }
            
            if(data.value){
                // this.user = data.value
                console.log( data.value);
            }
        }, 
        async show(){ 
            const {data, error} = await useFetch('http://localhost:3001/',{
                method: 'get', 
                // baseURL: '', 
               
            })
            if(error.value){return console.log(error.value, 'oi');}
            
            if(data.value){
               
                // console.log(data.value);
            }
        }

    } 
})