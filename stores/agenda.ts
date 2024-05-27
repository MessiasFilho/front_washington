export interface agendaInterface {
    id: number, 
    name: string, 
    date: string
}


export const useAgenda = defineStore('agenda', {
    state : () =>({
        agendas : [] as agendaInterface[]
    }), 
    actions: {
        async getAgendas(){
            const {data, error } = await useFetch<agendaInterface[]>('auth/listagenda', {
                method: 'get', 
                baseURL: useRuntimeConfig().public.backend,
                headers: { Authorization: `Bearer ${localStorage.getItem('login')}`}
            })

            if(error.value){
                console.log(error.value);
            }
            if(data.value){
                return this.agendas = data.value
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


    }
})