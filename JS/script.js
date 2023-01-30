const resul = document.getElementById("resultado");
const request_num = document.getElementById("number");
const btn_confirm = document.getElementById("confirm_btn");
btn_confirm.addEventListener('click', confirm);

function confirm(){

    resul.innerHTML = ''
    let one = 1
    while(one <= 15){
        
        let res = Number(request_num.value)*(one)

        one++
        resul.innerHTML += `${request_num.value}x${one-1} = ${res} <br> `;
    }

}

