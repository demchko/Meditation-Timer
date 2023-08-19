const btn = document.querySelector('button');
const firstMinute = document.querySelector('.firstMinute');
const firstSecond = document.querySelector('.firstSecond');
const secondMinute = document.querySelector('.secondMinute');
const secondSecond
    = document.querySelector('.secondSecond');
const timer = (timeInMinutes) => {
    let time = timeInMinutes * 60; // Перевести час у секунки
    let seconds = 0;
    const intervalId = setInterval(() => {
        if (time > 0) {
            time -= 1;
            seconds = time % 60;
            let minutes = Math.floor(time / 60);
            let minutes1 = Math.floor(minutes / 10);
            let minutes2 = minutes % 10;
            let second1 = Math.floor(seconds / 10);
            let second2 = seconds % 10;
            firstMinute.innerHTML = `${minutes1}`;
            secondMinute.innerHTML = `${minutes2}`;
            firstSecond.innerHTML = `${second1}`;
            secondSecond.innerHTML = `${second2}`;
        } else {
            const audio = new Audio();
            audio.src = './mixkit-uplifting-flute-notification-2317.wav';
            audio.play();
            firstMinute.innerHTML = `0`;
            secondMinute.innerHTML = `0`;
            firstSecond.innerHTML = `0`;
            secondSecond.innerHTML = `0`;
            clearInterval(intervalId); // Зупинити таймер
        }
    }, 1000); // Інтервал 1 секунда
}


btn.addEventListener('click', () => {
    const input = document.querySelector('input').value;
    if(!input){
        alert('Введіть час')
    }else if(input > 99 || input < 1){
        alert('Введіть коректний часі')
    }else{
        document.querySelector('input').value = '';
        timer(+input);
    }
})