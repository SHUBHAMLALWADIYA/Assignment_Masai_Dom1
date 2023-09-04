let myform=document.querySelector("form");



myform.addEventListener('submit',function(e)
{
    e.preventDefault();
    

    let name=document.getElementById("name").value;
let id=document.getElementById("employeeID").value;
let department=document.getElementById("department").value;
let exp=document.getElementById("exp").value;
let email=document.getElementById("email").value;
let mbl=document.getElementById("mbl").value;


let role="";

if(exp>5){
    role="Senior";
}
else if(exp<=5 && exp>=2){
    role="Junior";
}
else{
    role="Fresher";
}

let data=[name,id,department,exp,email,mbl,role];

console.log(data);
let tr =document.createElement("tr");
let tbody=document.querySelector("tbody");
   
    data.forEach(ele=>{

        let td=document.createElement("td");
        td.innerText=ele;

        tr.appendChild(td);
    })
       
      tbody.appendChild(tr);
    

      let buttontd=document.createElement("td");
      let button=document.createElement("button");
      
      button.innerText="Delete";
      
      button.addEventListener("click",function(){

        tr.innerHTML="";
        // tbody.removeChild(tr);
      })
      buttontd.appendChild(button);
      tr.appendChild(buttontd);

})

