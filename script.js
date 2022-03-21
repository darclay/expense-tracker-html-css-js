const dataDiv = document.querySelector("displayTransactionDiv");

const fetchURL = "";
const apiKey ="";

async function apiRequest(){
  const response = await fetch(`${fetchURL}${apiKey}`)
    .then((res)=>{
      if(!res.ok){
        console.error(`an error occurred with the fetch ${res}`);
      }else{
        res.json();
      }
    })
    .then((data)=>{

    })
    .catch((error)=>{
      console.error(`an error occurred with `)
    })
}