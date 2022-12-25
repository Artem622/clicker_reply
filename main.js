function shine(){
    var posX;
    var posY;
    $(".content").mousemove(function(e) {
        posX = e.pageX - 10;
        posY = e.pageY - 10;
    });

    var currCircle = null;
    $(".content").click(function() {
        currCircle = $(".content").append(
            "<div class='circle' style='left:" + posX + "px;top:" + posY + "px;'></div>"
        );


        setTimeout(function() {
            $("div").remove(currCircle);
        }, 100);


    });

}
function Timering(){
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 10;
    const ALERT_THRESHOLD = 5;

    const COLOR_CODES = {
        info: {
            color: "green"
        },
        warning: {
            color: "orange",
            threshold: WARNING_THRESHOLD
        },
        alert: {
            color: "red",
            threshold: ALERT_THRESHOLD
        }
    };

    const TIME_LIMIT = 10;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;

    document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
        timeLeft
    )}</span>
</div>
`;

    startTimer();

    function onTimesUp() {
        clearInterval(timerInterval);
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            document.getElementById("base-timer-label").innerHTML = formatTime(
                timeLeft
            );
            setCircleDasharray();
            setRemainingPathColor(timeLeft);

            if (timeLeft === 0) {
                onTimesUp();
            }
        }, 1000);
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 5) {

        }

        return `${seconds}`;
    }

    function setRemainingPathColor(timeLeft) {
        const { alert, warning, info } = COLOR_CODES;
        if (timeLeft <= alert.threshold) {
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(warning.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.add(alert.color);
        } else if (timeLeft <= warning.threshold) {
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(info.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.add(warning.color);
        }
    }

    function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }

    function setCircleDasharray() {
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
            .getElementById("base-timer-path-remaining")
            .setAttribute("stroke-dasharray", circleDasharray);
    }
}

let try1 = 0
let try2 = 0
let try3 = 0
//переход на 2 экран по кнопке + старт таймера + счет кликов
function test1() {

    return new Promise(((resolve,regect) => {document.querySelector("#submit").onclick = function () {
        document.querySelector(".mainbody").style.display = "none"
        document.querySelector(".rer").style.display = "flex"

        setTimeout(() => {resolve(try1)},10300);
        Timering();
        shine()
        document.querySelector(".rer").addEventListener("click", () => {
            try1 += 1;

        })
    }

    }));
}
test1()
    .then(
        data => {
            console.log('test1_countnm ')
            console.log(try1)
            localStorage.setItem("try1",try1)
            document.querySelector(".rer").style.display = "none"
            document.querySelector(".mainbody").style.display = "none";
            document.querySelector(".content").innerHTML = '';
            document.querySelector("#app").style.display = "none";
            document.querySelector(".secondbody").style.display = "flex"

        }
    )
//переход на 4 экран по кнопке + старт таймера + счет кликов

function test2() {

    return new Promise(((resolve,regect) => {document.querySelector("#submit1").onclick = function () {
        document.querySelector(".mainbody").style.display = "none"

        document.querySelector(".secondbody").style.display = "none"

        document.querySelector("#app").style.display = "flex"
        document.querySelector(".rer").style.display = "flex"
        setTimeout(() => {resolve(try2)},10300);
        Timering();
        document.querySelector(".rer").addEventListener("click", () => {
            try2 += 1;

        })
    }

    }));
}
test2()
    .then(
        data => {
            console.log('test2_countnm ')
            console.log(try2)
            localStorage.setItem("try2",try2)
            document.querySelector(".rer").style.display = "none"
            document.querySelector(".mainbody").style.display = "none";
            document.querySelector("#app").style.display = "none";
            document.querySelector(".secondbody").style.display = "none"
            document.querySelector(".thirdbody").style.display = "flex"
            document.querySelector(".content").innerHTML = '';
        }
    )

function test3() {

    return new Promise(((resolve,regect) => {document.querySelector("#submit2").onclick = function () {
        document.querySelector(".mainbody").style.display = "none"

        document.querySelector(".secondbody").style.display = "none"
        document.querySelector(".thirdbody").style.display = "none"
        document.querySelector(".rer").style.display = "flex"
        document.querySelector("#app").style.display = "flex"

        setTimeout(() => {resolve(try3)},10300);
        Timering();
        document.querySelector(".rer").addEventListener("click", () => {
            try3 += 1;

        })
    }

    }));
}
test3()
    .then(
        data => {
            try1=parseInt(localStorage.getItem("try1"))
            try2=parseInt(localStorage.getItem("try2"))
            let SashaZaebal = Math.round((try1+try2+try3)/3)
            console.log('test3_countnm ', try3)

            console.log(SashaZaebal)
            document.querySelector(".rer").style.display = "none"
            document.querySelector(".mainbody").style.display = "none";
            document.querySelector("#app").style.display = "none";
            document.querySelector(".secondbody").style.display = "none";
            document.querySelector(".thirdbody").style.display = "none";
            document.querySelector(".content").innerHTML = '';
            document.querySelector(".finalbody").style.display = "flex"
            new Chart(document.getElementById("line-chart"), {
                type: 'line',
                data: {
                    labels: [1,2,3],
                    datasets: [{
                        data: [try1,try2,try3],
                        label: "количество кликов за 10 секунд",
                        borderColor: "#c10c8e",
                        fill: false,
                        backgroundColor: "#0bff76",

                    }]

                },
                options: {
                    title: {
                        display: true,
                        text: 'Твои результаты',

                    }
                }
            });
            // var myHeaders = new Headers();
            // myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInRva2VuVHlwZSI6MiwiYmxvY2tJZCI6MTA0LCJ3ZWVrIjoxLCJpYXQiOjE2NzAzNjY1MTQsImV4cCI6MTY3OTAwNjUxNH0.JQqG8O2TcEcC26B6u2Td2w26f-A-r4T18SG7HHFYoEA");
            // myHeaders.append("Content-Type", "application/json");
            //
            // var raw = JSON.stringify({
            //     "metric_id": 2,
            //     "value": SashaZaebal
            // });
            //
            // var requestOptions = {
            //     method: 'POST',
            //     headers: myHeaders,
            //     body: raw,
            //     redirect: 'follow'
            // };
            //
            // fetch("https://api.psyreply.com/game", requestOptions)
            //     .then(response => response.text())
            //     .then(result => console.log(result))
            //     .catch(error => console.log('error', error));
        }
    )