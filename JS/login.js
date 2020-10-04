const passCheck1 = document.getElementById('password1');
const passCheck2 = document.getElementById('password2');
const test = document.getElementById('test1')
const mssg = document.getElementsByClassName('info-box');
console.log(mssg);


test.addEventListener('submit', trigger)



function trigger(e) {
    e.prevent
    if (passCheck1.value !== passCheck2) {

        mssg.style.display = 'block';
    };
};