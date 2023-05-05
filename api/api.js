



const url = "http://localhost:4000/";

export const addUser = async (user)=>{
    try{
        await fetch(`${url}/users`, {
            method:"POST",
            body:JSON.stringify(users),
            headers:{"Content-type":"application/json"}
        });

    }catch(error){
        console.log(error);
    }
}