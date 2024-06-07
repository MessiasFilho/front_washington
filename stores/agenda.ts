
export interface agendaInterface {
    id: number, 
    userId: number,
    name: string, 
    email: string, 
    fone: string,
    date: string,
    screated_at: string
}
interface response {
    message: string
}

export const useAgenda = defineStore('agenda', {
    state : () =>({
    agendas : [] as agendaInterface[]

    }), 
    actions: {
        async getAgendas(){
            const {data, error } = await useFetch<agendaInterface[]>('schedule/list', {
                method: 'get', 
                baseURL: useRuntimeConfig().public.backend,
                headers: { Authorization: `Bearer ${localStorage.getItem('login')}`}
            })

            if(error.value){
                console.log(error.value);
              
            }
            if(data.value){
                this.agendas = data.value
            }
        }, 

        async createAgenda ( date: string ) {
            const {data, error } = await useFetch<response>('schedule/create', {
                method: 'post', 
                baseURL: useRuntimeConfig().public.backend, 
                body: {date}, 
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('login')}`
                }
            })
                if (error.value){
                     const  agend = error.value.data?.error
                    toastModal().createToast('error', String(agend), "red", "error")
                }
                if ( data.value){
                    this.getAgendas()
                   toastModal().createToast('sucesso', String(data.value.message), "green", "success" )
                }
        }, 

        async deleteAgenda(id: number){

            const {data, error} = await useFetch<response>(`schedule/delete/${id}`,{
                method: 'delete', 
                baseURL: useRuntimeConfig().public.backend, 
                headers:{ 
                    Authorization: `Bearer ${localStorage.getItem('login')}`
                }
            })
            if (error.value){
                toastModal().createToast('error', String(error.value.data?.error), "red", "error")
            }

            if (data.value){
                toastModal().createToast('Sucesso', String(data.value.message), "red", "success")
                
                this.getAgendas()

            }
        }


    }
})