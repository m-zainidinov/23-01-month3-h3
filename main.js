const time = document.getElementById('time');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const round = document.getElementById('round');
const reset = document.getElementById('reset');

let interval;
let i = 0;
let rounds = [0];

start.onclick = () => {
    pause.style.display = 'inline-block';
    round.style.display = 'inline-block';
    start.style.display = 'none';
    interval = setInterval(() => {
        i += 0.01;
        time.textContent = i.toFixed(2);
    }, 10);
}

pause.onclick = () => {
    clearInterval(interval);
    resume.style.display = 'inline-block'
    reset.style.display = 'inline-block'
    pause.style.display = 'none';
    round.style.display = 'none'
}

resume.onclick = () => {
    pause.style.display = 'inline-block';
    round.style.display = 'inline-block';
    start.style.display = 'none';
    resume.style.display = 'none';
    reset.style.display = 'none';
    interval = setInterval(() => {
        i += 0.01;
        time.textContent = i.toFixed(2);
    }, 10);
}

reset.onclick = () => {
    clearInterval(interval);
    start.style.display = 'inline-block';
    resume.style.display = 'none';
    reset.style.display = 'none';
    listHeader.style.display = 'none';
    rounds.length = 1;
    while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
    i = 0;
    time.textContent = i.toFixed(2);
}

round.onclick = () => {
    listHeader.style.display = 'block';
    list.style.display = 'block';
    rounds.push(i);
    let roundItem = document.createElement('li');
    roundItem.textContent = 'Круг ' + (rounds.length-1).toString().padStart(2, '0') + ': '
        + (i - rounds[rounds.length - 2]).toFixed(2) + ' | | ' + 'Общее время: ' + i.toFixed(2);
    list.appendChild(roundItem);
}