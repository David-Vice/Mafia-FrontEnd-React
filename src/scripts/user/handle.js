
export default function handle(event){//sends user form input in JSON format to server for validation
    event.preventDefault();
    const form=new FormData(document.getElementById("f"));
    const obj={};
   
    for(let entry of form.entries())
        obj[entry[0]]=entry[1];
   
        const str=JSON.stringify(obj);
     
    console.log(str);
    document.getElementById("f").reset();


    // request= new XMLHttpRequest();
        // request.open("POST","");
        // request.setRequestHeader("Accept", "application/json");
        // request.setRequestHeader("Content-Type", "application/json");
        // request.send(str);
        // if(request.readyState==4)
        //    if (xhr.status == 200)
                
        //     response=request.responseText;
        // response=3;
   
}