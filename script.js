let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displaytime(){

    let date = new Date();
    // console.log(date);

    let hr = date.getHours();
    let mi = date.getMinutes();
    let se = date.getSeconds();

    let hrotate = 30*hr + mi/2;
    let mrotate = 6*mi;
    let srotate = 6*se;

    hour.style.transform = `rotate(${hrotate}deg)`;
    min.style.transform = `rotate(${mrotate}deg)`;
    sec.style.transform = `rotate(${srotate}deg)`;
}

setInterval(displaytime, 1000);