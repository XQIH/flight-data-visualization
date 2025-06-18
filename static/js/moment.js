function setTime() {
    const nowDate = new Date();
    let time = new Date();
    let SplitTime = JSON.stringify(time).split('T');
    const day = SplitTime[0].slice(1);
    // const hour = SplitTime[1].split('.')[0];
    let hour = time.getHours();
    let Minute = time.getMinutes();
    let Second = time.getSeconds();
    const weekIndex = new Date().getDay(time);
    const arrDay = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    if (hour < 10) {
        hour = '0' + hour;
    }

    if (Minute < 10) {
        Minute = '0' + Minute;
    }

    if (Second < 10) {
        Second = '0' + Second;
    }
    let week = "";
    for (let item of arrDay) {
        week = arrDay[weekIndex];
    }

    const DomHour = $(".hour");
    const DomDay = $(".day");
    const DomWeek = $(".week");
    DomHour.empty();
    DomDay.empty();
    DomWeek.empty();
    DomHour.append(`<span>${hour}:${Minute}:${Second}</span>`);
    DomDay.append(`<span>${day}</span>`);
    DomWeek.append(`<span>${week}</span>`);
}

(function () {
    let timer = null;
    clearTimeout(timer);
    timer = setInterval(() => {
        setTime();
    }, 1000)
})()