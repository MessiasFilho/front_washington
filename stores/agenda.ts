export interface agendaInterface {
    id: number, 
    userId: number,
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
                this.agendas = data.value
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
                    this.getAgendas()
                    console.log(data.value);
                }
        }, 

        async deleteAgenda(id: number){

            const {data, error} = await useFetch(`auth/deleteagenda/${id}`,{
                method: 'delete', 
                baseURL: useRuntimeConfig().public.backend, 
                headers:{ 
                    Authorization: `Bearer ${localStorage.getItem('login')}`
                }
            })
            if (error.value){
                console.log(error);
            }
            if (data.value){
                this.getAgendas()
                console.log(data);
                
            }
        }


    }
})