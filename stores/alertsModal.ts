import Swal from "sweetalert2";

export const alertModal = defineStore('alerts', {
    state:() =>({}), 
    actions:{
        deletAlert(id: number){
          Swal.fire({
            title: "Deletar?",
            text: "Essa ação não há como reverter!",
            icon: "warning",
            background: "#1e3d62",
            color: "white",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
               userModal().deleteUser(id)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success", 
                background: "#1e3d62",
                color: "white",
                
              });
             

            }
          });
        }
    }
})