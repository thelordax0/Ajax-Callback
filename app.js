document.getElementById("btn").addEventListener("click",getAllEmployees)


function getAllEmployees(){
    const xhr = new XMLHttpRequest();
    

    xhr.onload=()=>{
        if(xhr.status===200){
            const employees=JSON.parse(xhr.responseText);
            employees.forEach(employee => {
                document.body.innerHTML+=`
                    Id: ${employee.id} Name: ${employee.name} 
              `;
            });
              
        }
      
    }
    xhr.open("GET","employees.json",true);

    xhr.send();

}