const dataDiv = document.querySelector('.displayTransactionDiv');
const balance = document.querySelector('.balanceAmount').innerText;
const body = document.querySelector('body');
const header = document.querySelector('header');
const render = document.querySelector('.displayTransactionsDiv')

const fetchURL = "https://api.airtable.com/v0/app7QzcKuG4DWQmnu/Checking%20Account?";
const apiKey ="keyuIN18WVkKH2hMu";

async function getRequest(){
  await fetch(`${fetchURL}api_key=${apiKey}`)
    .then((res)=>{
      if(!res.ok){
        throw Error("ERROR");
      }else{
        return res.json();
      }
    })
    .then((data)=>{
      console.log(data.records);
      const transactionItem = data.records;

      transactionItem.map(item => {
        const idNum = item.id;
        const date = item.fields.Date;
        const payee = item.fields.Payee;
        const category = item.fields.Category;
        const payment = item.fields.Payment;
        const cleared = item.fields.Cleared;
        const deposit = item.fields.Deposit;
        
        render.insertAdjacentHTML("beforeend",
          `<div id="${idNum}" class="transactions">
            <div class="group">  
              <p>Date</p>
              <p>${date}</p>
            </div>
            <div class="group">
              <p>Payee</p>
              <p>${payee}</p>
            </div>
            <div class="group">
              <p>Category</p>
              <p>${category}</p>
            </div>
            <div class="group">
              <p>Payment</p>
              <p>${payment}</p>
            </div>
            <div class="group">
              <p>Cleared?</p>
              <p>${cleared}</p>
            </div>
            <div class="group">
              <p>Deposit</p>
              <p>${deposit}</p>
            </div>
            <div class="group">
              <p>Edit</p>
              <button title="click here to edit this transaction" id="edit">
                <img src="pics/pen-nib-solid.svg" alt="edit icon">
              </button>
            </div>
            <div class="group">
              <p>Delete</p>
              <button title="click here if you want to delete this item" id="delete">
                <img src="pics/trash-solid.svg" alt="delete icon">
              </button>
            </div>

          </div>`)
      })
    })
    .catch((error)=>{
      console.error(`an error occurred with the request: ${error} `)
    })
}
getRequest()

//This sets the background to red if the balance ammount goes below $0.
function alertOnNegative(){
    const money = parseInt(balance);
    if(money < 0){
      // body.classList.add = "active";
      body.style.backgroundColor = "rgb(177,106,106)";
    }
}
alertOnNegative();

