let employees = document.getElementById("pracownicy");
let button = document.getElementById("oblicz");
// let h3bestWorkers = document.getElementById("najlepsi-pracownicy");

const salaris = (event) => {

    let time = document.querySelectorAll(".czas");
    let chargePerUnit = document.querySelectorAll(".stawka");
    let span = document.querySelectorAll(".wyplata");
    let worker = document.querySelectorAll(".pracownik");

    console.log(span);
    for (let i = 0; i < time.length; i++) {
        let payment = Number(time[i].value) * Number(chargePerUnit[i].value);

        //nadgodziny
        if (time[i].value >= 160) {

            payment = payment + (time[i].value - 160) * (chargePerUnit[i].value * 2);

        }

        //leniwce
        if (time[i].value <= 100) {

            worker[i].setAttribute("id", "red");

        }
        // wyświetlanie wyniku
        span[i].innerHTML = payment;
        payment.innerHTML = span;

    }


    let employees = [];
    for (let i = 0; i < time.length; i++) {
        employees.push({
            workTime: Number(time[i].value),
            name: String(worker[i].innerHTML)
        });

    }
    let sort = employees.sort((a, b) => (b.workTime < a.workTime ? -1 : Number(b.workTime > a.workTime)));
    //destrukturyzacja

    let worker1 = sort[0].name;
    console.log(worker1);
    let worker2 = sort[1].name;
    console.log(worker2);
    let worker3 = sort[2].name;
    console.log(worker3);

    let topWorkers = [];
    topWorkers.push(worker1, worker2, worker3);
    console.log(topWorkers);
    //ol dla najlepszych pracowników

    let h3bestWorkers = document.getElementById("najlepsi-pracownicy");

    console.log(h3bestWorkers);
    //lista
    function addNames(x) {

        let hallOfFame = document.createElement("ul");

        x.forEach((el) => {
            let li = document.createElement('li');

            li.innerHTML = el;

            hallOfFame.appendChild(li);

        })
        h3bestWorkers.appendChild(hallOfFame);

    }
    addNames(topWorkers);

}

button.addEventListener('click', salaris);