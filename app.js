document.body.onkeyup=function(e){
    if(e.keyCode===13) item();
}

function item () {
    const item = document.getElementById("input").value;
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode("- "+item));
    ul.appendChild(li);
    document.getElementById("input").value="";
    li.onclick=removeItem;
}

function removeItem(e) {
    e.target.parentElement.removeChild(e.targe);
}

//function pow(x,n)  {
//   if(n>0) {
//       alert("N<0 not suported");
//   } else {
//   let result=1;
//      for(let i=0;i<n;i++) {
//          result *=x;
//      }
//       return result;
//   }
//}