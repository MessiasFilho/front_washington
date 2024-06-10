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
    message: string
    token: string
}
export interface usersInterface extends userInterface {
    id: number,
    role: string, 
}
export interface responses {
    message: string, 
    valid: Boolean
}
interface agenda {
    name: string, 
    date: string, 
    screated_at: string
}
export interface allDates extends usersInterface {
    agedas: agenda[], 
}

export interface updateUser{
    name: string, 
    email: string, 
    fone: string, 
    pessoa: string,
    cnpj: string
    cpf: string,
}

export const userModal = defineStore('users',{
    state: () =>({
       loged: {} as usersInterface ,
       users: [] as userInterface[], 
       allDate: [] as allDates[],
       user: {} as userInterface
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
                  toastModal().createToast('Error', String(error.value.data?.error), "red", "error")
                } 
                if(data.value){              
                    const {token , message}  = data.value
                     localStorage.setItem('login', String(token))
                     this.getuser()
                     navigateTo({
                         name: 'index'
                        })
                    toastModal().createToast('Sucess', String(data.value.message), "green","success")
                }  
        },
        async getuser(){
             const { data, error , pending} = await useFetch<usersInterface>('auth/user',{
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
            if (pending.value){
                this.getuser()
            }
        }, 

        async showUsers(){
                const {data, error} = await useFetch<allDates[]>('auth/showusers', {
                    method: 'get', 
                    baseURL: useRuntimeConfig().public.backend, 
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('login')}`
                    }
                })

                if (error.value){
                    console.log(error.value);
                }

                if(data.value){
                    this.allDate = data.value
                }
        },

        async createUser(user: userInterface){ 
            const {data, error} = await useFetch<responses>('auth/register',{
                method: 'POST', 
                baseURL: useRuntimeConfig().public.backend, 
                body:{
                    ...user
                }
            })
            if(error.value){
                toastModal().createToast('Error', String(error.value.data?.error), "red", "error")
            }
            if(data.value){
                const {valid} =  data.value
                 return valid
            }
        },

        async showById(id: number){
            const {data, error} =  await useFetch<usersInterface>(`auth/user/${id}`, {
                method: 'get', 
                baseURL: useRuntimeConfig().public.backend, 
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`}
            });
            if (error.value){
                console.log(error.value.data);
            }

            if (data.value){
                 this.user = data.value
            }
        },

        async updateUser(id : number, user: updateUser){
            const {data, error} = await useFetch(`auth/updated/${id}`, {
                method: 'PUT', 
                baseURL: useRuntimeConfig().public.backend, 
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`}, 
                body: {user}
            });
            if (error.value){
                console.log(error.value);
            }

            if (data.value){

            }
        }, 

        async deleteUser(id: number){
            const {data, error} =  await useFetch(`auth/delete/${id}`, {
                method: 'delete', 
                baseURL: useRuntimeConfig().public.backend, 
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`}
            });
            if (error.value){
                console.log(error.value);
                
            }
            if (data.value){
                this.showUsers()
                console.log(data.value);
                
            }

        }
    } 
})