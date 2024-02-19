const seatLeft = document.getElementById('seatLeft');
const checkboxes = document.querySelectorAll('input[type=checkbox]');
const badge =document.getElementById('badge');
const total =document.getElementById('total');
const seatNum = document.getElementById('seatNum');
const next = document.getElementById('next');
const phone = document.getElementById('phone')
const newSeat = document.getElementById('seatNum')
const data = document.getElementById('data')

const newSeatCreate = document.createElement('td');






let arr = [];
let number = 0;




const seatLeftCount = () => {

    for (let i = 0; i < checkboxes.length; i++) {
        const element = checkboxes[i];
        console.log(element)
        element.addEventListener("change", () => {
            element.checked ? number += 1 : number -= 1;
            
            if(number > 4) {
                alert('You Cannot Purchase More Than 4 tickets');
                element.checked = false;
                number = 4
            };
            if(element.checked){
                arr.push(element)
                console.log(arr)

                let td = '';
                for (let i = 0; i < arr.length; i++) {
                    console.log(arr[i].id)
                    td = td + `<tr class='text-center'><td>${arr[i].id}</td><td>Economy</td><td>550</td></tr>`
                }
                data.innerHTML = td
                console.log(td)
            }  
            else{
                if(number !== 4){
                    // arr.pop(element)
                    let index = arr.indexOf(element)
                    arr.splice(index, 1)
                }
                
                console.log(arr)
                let td = '';
                for (let i = 0; i < arr.length; i++) {
                    console.log(arr[i].id)
                    td = td + `<tr class='text-center'><td>${arr[i].id}</td><td>Economy</td><td>550</td></tr>`
                }
                data.innerHTML = td
                console.log(td)
            }
            // console.log(element.id)
            seatLeft.innerText = 40 - number;
            badge.innerText = number;
            total.innerText = number * 550;
            seatNum.innerText = element.innerText
        })
    }
}

seatLeftCount()

phone.addEventListener('keyup', () => {
    console.log(phone.value)
    if(phone.value){
        next.removeAttribute('disabled')
    }
})

console.log(phone.value)


/* function getCheckedValues() {
    return Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  }
  
  const resultEl = document.getElementById('result');
  
  document.getElementById('showResult').addEventListener('click', () => {
    resultEl.innerHTML = getCheckedValues();
  });
 */

















/* let number = 0;
let arr = [];

for (let i = 0; i < checkboxes.length; i++) {
    console.log(checkboxes[i])
}

console.log(checkboxes)

 */


















// console.log(number)
/* const ckbx = () => {
    for (let i = 0; i < checkboxes.length; i++) {
        console.log(checkboxes[i])
    }
}
 */
/* let number = 0;

for (let i = 0; i < checkboxes.length; i++) {
    console.log(checkboxes[i])
}

console.log(checkboxes)
console.log(number)
 */
/* 
document.getElementById('peer').addEventListener('change', selectedSeat)



const selectedSeat = () => {
     */



// let number;

/* for (let i = 0; i < checkbox.length; i++) {
    
    if (checkbox[i].checked){
        // number += 1
        console.log(checkbox[i].checked)
    } 
}
 */
// console.log(number)
