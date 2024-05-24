import { defineStore } from "pinia";

export interface createUserFisica { 
    name: string, 
    email: string, 
    fone: string, 
    pessoa: string,
    cpf: string,
    password: string, 
    confpassword: string, 
}

interface token {
    accessToken: string
}
export interface createUserJuridica extends createUserFisica {
    cnpj: ''
}

export interface usersInterface extends createUserFisica {
    id: number,
}

export const userModal = defineStore('users',{
    state: () =>({
       user: [] as createUserFisica[]
    }),
    actions:{
        
        async createUser(user: createUserFisica){ 
            const {data, error} = await useFetch<createUserFisica>('auth/register',{
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
                
                console.log( data.value);
            }
        },
        
        async loginUser( email: string, password: string){
            const {data, error } = await useFetch<token>('auth/login',{
                method: 'post',
                baseURL: useRuntimeConfig().public.backend, 
                body:  {
                    email, password
                }
            })
                if (error.value){
                    console.log(error);
                } 
                if(data.value){                     
                   localStorage.setItem('login', String(data.value.accessToken) )
                }
        },

        async UserJuridica(user: createUserJuridica){ 
            const {data, error} = await useFetch<createUserJuridica>('auth/legal',{
                method: 'post', 
                baseURL: useRuntimeConfig().public.backend, 
                body:{
                    ...user
                }
            })
            if(error.value){
                return console.log(error.value);
            }
            
            if(data.value){
                
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