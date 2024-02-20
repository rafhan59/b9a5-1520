const seatLeft = document.getElementById('seatLeft');
const checkboxes = document.querySelectorAll('input[type=checkbox]');
const promo = document.querySelector('input[type=text]');
const badge =document.getElementById('badge');
const total =document.getElementById('total');
const seatNum = document.getElementById('seatNum');
const next = document.getElementById('next');
const phone = document.getElementById('phone')
const newSeat = document.getElementById('seatNum')
const data = document.getElementById('data')
const grandTotal = document.getElementById('grandTotal')
const discount = document.getElementById('discount')
const promocode = document.getElementById('promocode')

const newSeatCreate = document.createElement('td');






let arr = [];
let number = 0;




const seatLeftCount = () => {

    for (let i = 0; i < checkboxes.length; i++) {
        const element = checkboxes[i];
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
            seatLeft.innerText = 40 - number;
            badge.innerText = number;
            total.innerText = number * 550;
            if(total.innerText < 2000){
                discount.innerText = 0;
                promocode.innerText = ''
            }
            grandTotal.innerText = total.innerText - discount.innerText;
            seatNum.innerText = element.innerText;
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








document.getElementById('apply').addEventListener('click', e => {
    
    if(promo.value === 'NEW15' && parseInt(total.innerText) >= 2000 ){
        document.getElementById('disc').classList.remove('hidden');
        promo.value = null;
        document.getElementById('discount').innerText = parseInt(total.innerText)*0.15;
        grandTotal.innerText = total.innerText - discount.innerText
        document.getElementById('promocode').innerHTML = `<p class='text-green-500 text-center'>'NEW15' is applied</p>`
        e.preventDefault()
        
    } else if(promo.value === 'couple20' && parseInt(total.innerText) >= 2000 ){
        document.getElementById('disc').classList.remove('hidden');
        promo.value = null;
        document.getElementById('discount').innerText = parseInt(total.innerText)*0.2;
        grandTotal.innerText = total.innerText - discount.innerText
        document.getElementById('promocode').innerHTML = `<p class='text-green-500 text-center'>'couple20' is applied</p>`
        e.preventDefault()
        
    } else if ((promo.value === 'NEW15' || promo.value === 'couple20') && (parseInt(total.innerText) < 2000)){
        document.getElementById('discount').innerText = 0;
        grandTotal.innerText = total.innerText - discount.innerText
        document.getElementById('promocode').innerHTML = `<p class='text-red-500 text-center'>Total Price should be more than BDT. 2000</p>`
        e.preventDefault()
    }
     else {
        grandTotal.innerText = total.innerText - discount.innerText
        document.getElementById('promocode').innerHTML = `<p class='text-red-500 text-center'>Promo Code is not valid</p>`;
        e.preventDefault()
    } 
    promo.value = null;
    
})









