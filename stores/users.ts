import { defineStore } from "pinia";

export interface userInterface { 
    name: string, 
    email: string, 
    fone: string, 
    pessoa: string,
    cnpj: string
    cpf: string,
    password: string, 
    confpassword: string, 
}
interface token  {
    accessToken: string
}

export interface usersInterface extends userInterface {
    id: number,
    role: string, 
}

export const userModal = defineStore('users',{
    state: () =>({
       loged: {} as usersInterface ,
       users: [] as userInterface[]
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

                    navigateTo({
                        name: 'index'
                    })
                }
        },

        async getuser(){
             const { data, error , pending} = await useFetch<usersInterface>('auth',{
                method: 'get', 
                baseURL: useRuntimeConfig().public.backend, 
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('login')}`
                }
             })
             if(error.value){
                // console.log(error.value);
             }
             if (data.value){
               this.loged = data.value
            }
            if (pending.value){
                this.getuser()
            }
        }, 

        async createUser(user: userInterface){ 
            const {data, error} = await useFetch<token>('auth/register',{
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
                localStorage.setItem('login', String(data.value.accessToken))
                this.getuser()
                navigateTo({
                    name: 'index'
                })
                
            }
        },
    } 
})