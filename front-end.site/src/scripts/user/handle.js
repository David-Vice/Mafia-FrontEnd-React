
import fail from "./fail";

export default function handle(event){//sends user form input in JSON format to server for validation
    event.preventDefault();
    const form=new FormData(document.getElementById("f"));
    const obj={};
   
    for(let entry of form.entries())
        obj[entry[0]]=entry[1];
   
        const str=JSON.stringify(obj);
     
  //  console.log(str);
     
    let request= new XMLHttpRequest();
     request.open("POST","https://bsite.net/Kanan02/api/Auth/register");
     //request.open("GET","https://bsite.net/Kanan02/api/Users/1");

    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
    //request.setRequestHeader("Access-Control-Allow-Origin","*");
    
    request.send(str);
    
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if(request.status===400)
            fail(request.responseText);
        }
        else if(request.status===200){

        }
    }

    //document.getElementById("f").reset();
}