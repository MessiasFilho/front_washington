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
    role: string
}

export const userModal = defineStore('users',{
    state: () =>({
       loged: {} as usersInterface ,
       users: [] as createUserFisica[]
    }),
    actions:{

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
                    alert('error')
                } 
                if(data.value){                     
                    localStorage.setItem('login', String(data.value.accessToken))
                    this.getuser()
                }
        },

        async getuser(){
             const { data, error} = await useFetch<usersInterface>('auth',{
                method: 'get', 
                baseURL: useRuntimeConfig().public.backend, 
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('login')}`
                }
             })
             if(error.value){
                console.log(error.value);
             }
             if (data.value){
               this.loged = data.value
            }
        }, 

        async createAgenda ( date: string ){
            const {data, error } = await useFetch('auth/agendar', {
                method: 'post', 
                baseURL: useRuntimeConfig().public.backend, 
                body: { date}, 
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('login')}`
                }
            })
                if (error.value){
                     console.log(error.value);
                }
                if ( data.value){
                    console.log(data.value);
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
    } 
})