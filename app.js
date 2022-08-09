var counter = 0;
const allFood = [];

function food (foodName,type,price){
    this.id=++counter;
    this.foodName=foodName;
    this.type=type;
    this.price=price;

    allFood.push(this);
}
// var tEl= document.getElementById("table");

// food.prototype.render = function(){
    
//     let trEl=document.createElement('tr');
//     tEl.appendChild(trEl);

//         let tdId=document.createElement('td');
//         tdId.textContent=this.id;
//         trEl.appendChild(tdId);

//         let tdFN=document.createElement('td');
//         tdFN.textContent=this.foodName;
//         trEl.appendChild(tdFN);

//         let tdT=document.createElement('td');
//         tdT.textContent=this.type;
//         trEl.appendChild(tdT);

//         let tdP=document.createElement('td');
//         tdP.textContent=this.price;
//         trEl.appendChild(tdP);

// }

let form = document.getElementById("form");
form.addEventListener("submit",handleSubmit);


function handleSubmit (event){
    event.preventDefault();

    let name=event.target.foodName.value;
    let type=event.target.type.value;
    let price=event.target.price.value;
    const newFood = new food(name,type,price);

    // newFood.render();
    saveData(allFood);

    }

    function saveData(data){
       let stringObj= JSON.stringify(data);
       localStorage.setItem('food',stringObj);
    }