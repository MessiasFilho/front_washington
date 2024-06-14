export const usePoster = defineStore('poster',{
    state: () => ({
        files: [] as File[], 
        file: [] as File []
    }), 
    actions:{
        async uploadImagen( ){
            const {data, error} = await useFetch('upload/photo',{
                method:'post', 
                baseURL: useRuntimeConfig().public.backend, 
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`}, 
                body:{  ...this.file , text: 'teste'}
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