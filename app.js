document.getElementById("btn").addEventListener("click",()=>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET","example.txt",true);

    xhr.send();


    xhr.onload=()=>{
        if(xhr.status===200){
              console.log(xhr.responseText)
        }
      
    }
})