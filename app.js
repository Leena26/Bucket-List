var bucket =[];
var listItem = document.getElementById("list-container");

function addValues(){
    let values= document.getElementById("input-field").value;
    bucket.push(values);
    showList();
}

function showList(){
    listItem.innerHTML="";
    for(let i=0; i<bucket.length; i++){
        let li = document.createElement("li");
        li.innerHTML=bucket[i]+`<span><img src="https://i1.faceprep.in/tick-mark.png" class="checked" onclick="remove(`+i+`)" ></span>`;
        li.className = "list";
        listItem.appendChild(li);
    }

}

function resetButton(){
    bucket=[]
    showList();
}

function remove(i){
    bucket.splice(i, 1);
    showList();
}