var arrayData=[];
function getData(){
    let ret =localStorage.getItem("food");
     arrayData =JSON.parse(ret);

  if  (arrayData!=null){   
for (i=0;i<arrayData.length; i++){
    render(arrayData[i]);
}
  }

}

var tEl= document.getElementById("table");
function render(obj){
    let trEl=document.createElement('tr');
    tEl.appendChild(trEl);

        let tdId=document.createElement('td');
        tdId.textContent=obj.id;
        trEl.appendChild(tdId);

        let tdFN=document.createElement('td');
        tdFN.textContent=obj.foodName;
        trEl.appendChild(tdFN);

        let tdT=document.createElement('td');
        tdT.textContent=obj.type;
        trEl.appendChild(tdT);

        let tdP=document.createElement('td');
        tdP.textContent=obj.price;
        trEl.appendChild(tdP);

}

getData();

