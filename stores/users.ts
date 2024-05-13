import { defineStore } from "pinia";

export interface createUser { 
    name: '', 
    email: '', 
    tel: '', 
    password: ''
    confmpassword: '', 
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
            const {data, error} = await useFetch<createUser[]>('users',{
                method: 'POST', 
                baseURL: 'http://localhost:3001/', 
                body:{
                    ...user
                }
            })
            if(error.value){
                return console.log(error.value);
            }
            
            if(data.value){
                this.user = data.value
                console.log( "teste ");
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