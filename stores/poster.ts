export interface page{
    title: string, 
    metros: number, 
    aluguel: number, 
    venda: number, 
    andar: number, 
    sala: number, 
    telefone: string, 
    descricao: string 
}

export const usePoster = defineStore('poster',{
    state: () => ({
        files: [] as File[], 
        file: {} as File | null
    }), 
    actions:{
        async uploadImagen( info: page ){
            
            if (!this.file) return 
            const formdata = new FormData()

            formdata.append('file', this.file)
            formdata.append('inform', JSON.stringify(info))
            const {data, error} = await useFetch('upload/photo',{
                method:'post', 
                baseURL: useRuntimeConfig().public.backend, 
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`}, 
                body: formdata
            })
            if (error.value){
                console.log(error.value);
            }
            if (data.value){
                console.log(data); 
            }
        }, 

        async uploadsImages(){
            const formdata = new FormData()

        }

    }
})