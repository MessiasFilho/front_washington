export const usePoster = defineStore('poster',{
    state: () => ({}), 
    actions:{
        async uploadImagen( file: File ){
            const {data, error} = await useFetch('upload/photo',{
                method:'post', 
                baseURL: useRuntimeConfig().public.backend, 
                body:{file:{file}, text: 'teste'}
            })
            if (error.value){
                console.log(error.value);
                
            }
            if (data.value){
                console.log(data);
                
            }
        }
    }
})