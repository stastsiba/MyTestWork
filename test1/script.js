const BASE_URL = 'https://jsonplaceholder.typicode.com';
let btnAdd = document.querySelector('.form__btn-add');
let user = {};
let btnSub = document.querySelector('.form__btn-sub');
let btnClr = document.querySelector('.form__btn-clr');


btnSub.onclick = function myClick() {
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
}

btnClr.onclick = function clearclick() {
    let inp1 = document.querySelector('.i1').value = '';
    let inp2 = document.querySelector('.i2').value = '';
    let inp3 = document.querySelector('.i3').value = '';
}

    elem.onclick = async function getUsers(){
    const resp = await fetch (`${BASE_URL}/users`, {
        method: 'get',
    });
    const users = await resp.json();
    console.log(users);

    if(resp.ok) {
        users.map((user) => {
            let div = document.createElement('span');
            div.className = 'user_list';
            div.innerHTML = user.name;
            document.querySelector('.form__inp').appendChild(div); 
            console.log(user);
        })
    }
};
