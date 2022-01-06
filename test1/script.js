const BASE_URL = 'https://jsonplaceholder.typicode.com';
let btnAdd = document.querySelector('.form__btn-add').onclick;
document.querySelector('.form__btn-sub').onclick = myClick;
document.querySelector('.form__btn-clr').onclick = clearclick;
let user = {};


function myClick() {
    let inp1 = document.querySelector('.i1').value;
    let inp2 = document.querySelector('.i2').value;
    let inp3 = document.querySelector('.i3').value;
    let fall = "";

    if (inp1 == "" || inp2 == "" || inp3 == "") {
      fall = "Не заполненные поля!";
      document.querySelector('.form__spn1').textContent ='Please complete this step to continue registration';
      document.querySelector('.form__spn2').textContent ='Please complete this step to continue registration';
      document.querySelector('.form__spn3').textContent ='Please complete this step to continue registration';
    } else {
        getUsers();

        user.name = inp1;
        user.surname = inp2;
        user.data = inp3;

        for(key in user){
            let div = document.createElement('span');
            div.className = 'user_list';
            div.innerHTML = user[key];
            document.querySelector('.form__inp').appendChild(div); 
        }
    }

    console.log(user);
}

function clearclick() {
    let inp1 = document.querySelector('.i1').value = '';
    let inp2 = document.querySelector('.i2').value = '';
    let inp3 = document.querySelector('.i3').value = '';
}

    elem.onclick = async function getUsers(){
    let resp = await fetch (`${BASE_URL}/users`, {
        method: 'get',
    });
    let users = await resp.json();
    if(resp.ok) {
        for(let key in users){
            res = users[key];
            let div = document.createElement('span');
            div.className = 'user_list';
            div.innerHTML = res;
            document.querySelector('.form__inp').appendChild(div); 
        }
        json.stringify(res);
    }
}


