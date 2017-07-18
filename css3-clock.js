/**
 * Created by Administrator on 2017/7/18 0018.
 */
(function () {

    var oDial = document.getElementById('dial');
    var oHour = document.getElementById('hour');
    var oMinute = document.getElementById('minute');
    var oSecond = document.getElementById('second');

    var html = '';
    for (var i = 0; i < 60; i++) {

        html += "<li style='-webkit-transform: rotate(" + i * 6 + "deg)'></li>";
    }
    oDial.innerHTML = html;

    var second, minute, hour, date;

    setInterval(run, 1000);

    function run() {
        date = new Date();
        second = date.getSeconds();
        minute = date.getMinutes() + second / 60;
        hour = date.getHours() + minute / 60;

        oHour.style.WebkitTransform = "rotate(" + hour * 30 + "deg)";
        oMinute.style.WebkitTransform = "rotate(" + minute * 6 + "deg)";
        oSecond.style.WebkitTransform = "rotate(" + second * 6 + "deg)";
    }

})();