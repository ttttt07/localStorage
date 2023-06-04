
const btn = document.querySelector('button');



btn.onclick=function inputField() {
  const value1 = document.getElementById('name');
  let a=value1.value;
  const value2 = document.getElementById('phone');
  let b=value2.value;
  const value3 = document.getElementById('id');
  let c=value3.value;
  let abc=[a, b, c]
function if1 (){
  if (a.length>0 && b.length>0 && c.length>0) {
    return true;
  } else {
    return false;
  }
}


if(if1()==true){
  let d = document.getElementsByClassName('row');
  for (let i = 0; i < d.length; i++) {
    let row = d[i];
    let cellAll=document.createElement('tr')
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');
    let button = document.createElement('button')
    cell1.textContent = `${a}`;
    cell2.textContent = `${b}`;
    cell3.textContent = `${c}`;
    cellAll.appendChild(cell1);
    cellAll.appendChild(cell2);
    cellAll.appendChild(cell3);
    cellAll.appendChild(button);
    row.appendChild(cellAll);
    
    localStorage.setItem(`${c}`, JSON.stringify(abc));
    button.onclick=function remove(){
      localStorage.removeItem(`${c}`, JSON.stringify(abc));

    }
  }
}}






  // document.querySelector('input')==true