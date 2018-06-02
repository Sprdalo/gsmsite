var currentTime = new Date();
var cth, ctm;
var nav, navmin;
var ctd;
var pocetakJutarnje = [8, 0];
var pocetakPopodnevne = [14, 15];
var krajDana = [19, 30];

window.onload = function() {
    nav = document.getElementById('navigatormov');
    navmin = document.getElementById('mvhd');
    cth = currentTime.getHours();
    ctm = currentTime.getMinutes();
    ctd = currentTime.getDay();
    updateTime();
    window.setInterval(function() { updateTime() }, 5*1000);
}

var poruka;
function updateTime() {
    currentTime = new Date();
    cth = currentTime.getHours();
    ctm = currentTime.getMinutes();

    if (ctd == 6 || ctd == 0){
        poruka = "Настава се не одвија овог викенда.";
    } else {
    
        if ((cth >= 19 && ctm >= 30) || (cth >= 20 && ctm >= 0) ) {
            poruka = "Настава за овај дан је завршена!";
        }
        else if (cth >= 0 && ctm >= 0 && cth <= 7 && ctm <= 59) {
            if (ctm == 0) poruka = "До почетка преподневне смене: <b>" + (8 - (cth)) + " часова</b>.";
            else poruka = "До почетка преподневне смене: <b>" + (7 - (cth)) + " часова</b> и <b>" + (60 - ctm) + " минута</b>.";
        }
        else if (cth == 8 && ctm <= 44) {
            poruka = "До краја првог часа прве смене: <b>" + (45 - ctm) + " минута</b>.";
        }
        else if (cth == 8 && ctm <= 49) {
            poruka = "До краја малог одмора и почетка другог часа: <b>" + (50 - ctm) + " минута</b>.";
        }
        else if ((cth == 8 && ctm >= 50) || (cth == 9 && ctm <= 34)) {
            if (cth == 8) {
                poruka = "До краја другог часа и почетка великог одмора: <b>" + (35 + 60-ctm) + " минута</b>.";
            } else {
                poruka = "До краја другог часа и почетка великог одмора: <b>" + (35-ctm) + " минута</b>.";
            }
        }
        else if (cth == 9 && ctm >= 35 && ctm <= 54) {
            poruka = "До краја великог одмора и почетка трећег часа: <b>" + (55-ctm) + " минута</b>.";
        }
        else if ((cth == 9 && ctm <= 59) || (cth == 10 && ctm <= 39)) {
            if (cth == 9) {
                poruka = "До краја трећег часа и почетка малог одмора: <b>" + (40 + 60-ctm) + " минута</b>.";
            } else {
                poruka = "До краја трећег часа и почетка малог одмора: <b>" + (40-ctm) + " минута</b>.";
            }
        }
        else if (cth == 10 && ctm <= 44) {
            poruka = "До краја малог одмора и почетка четвртог часа: <b>" + (45-ctm) + " минута</b>.";
        }
        else if ((cth == 10 && ctm <= 59) || (cth == 11 && ctm <= 29)) {
            if (cth == 10) {
                poruka = "До краја четвртог часа и почетка средњег одмора: <b>" + (30 + 60-ctm) + " минута</b>.";
            } else {
                poruka = "До краја четвртог часа и почетка средњег одмора: <b>" + (30-ctm) + " минута</b>.";
            }
        }
        else if (cth == 10 && ctm <= 39) {
            poruka = "До краја средњег одмора и почетка петог часа: <b>" + (40-ctm) + " минута</b>.";
        }
        else if ((cth == 11 && ctm <= 59) || (cth == 12 && ctm <= 24)) {
            if (cth == 11) {
                poruka = "До краја петог часа и почетка малог одмора: <b>" + (25 + 60-ctm) + " минута</b>.";
            } else {
                poruka = "До краја петог часа и почетка малог одмора: <b>" + (25-ctm) + " минута</b>.";
            }
        }
        else if (cth == 12 && ctm <= 29) {
            poruka = "До краја малог одмора и почетка шестог часа: <b>" + (30-ctm) + " минута</b>.";
        }
        else if ((cth == 12 && ctm <= 59) || (cth == 13 && ctm <= 14)) {
            if (cth == 12) {
                poruka = "До краја шестог часа и почетка малог одмора: <b>" + (15 + 60-ctm) + " минута</b>.";
            } else {
                poruka = "До краја шестог часа и почетка малог одмора: <b>" + (15-ctm) + " минута</b>.";
            }
        }
        else if (cth == 13 && ctm <= 19) {
            poruka = "До почетка седмог, односно нултог часа: <b>" + (20-ctm) + " минута</b>.";
        }
        else if ((cth == 13 && ctm <= 59) || (cth == 14 && ctm <= 4)) {
            if (cth == 13) {
                poruka = "До краја седмог/нултог часа и до почетка паузе између смена: <b>" + (5 + 60-ctm) + " минута</b>.";
            } else {
                poruka = "До краја седмог/нултог часа и до почетка паузе између смена: <b>" + (5-ctm) + " минута</b>.";
            }
        }
        else if (cth == 14 && ctm <= 14) {
            poruka = "До почетка првог часа послеподневне смене: <b>" + (15-ctm) + " минута</b>.";
        }
        else if ((cth == 14 && ctm <= 59)) {
                poruka = "До краја првог часа и почетка малог одмора: <b>" + (60-ctm) + " минута</b>.";
        }
        else if (cth == 15 && ctm <= 4) {
            poruka = "До краја малог одмора и почетка другог часа: <b>" + (5-ctm) + " минута</b>.";
        }
        else if ((cth == 15 && ctm <= 49)) {
            poruka = "До краја другог часа и почетка великог одмора: <b>" + (50-ctm) + " минута</b>.";
        }
        else if ((cth == 15 && ctm <= 59) || (cth == 16 && ctm <= 9)) {
            if (cth == 15) {
                poruka = "До краја великог одмора и почетка трећег часа: <b>" + (10 + 60-ctm) + " минута</b>.";
            } else {
                poruka = "До краја великог одмора и почетка трећег часа: <b>" + (10-ctm) + " минута</b>.";
            }
        }
        else if ((cth == 16 && ctm <= 54)) {
            poruka = "До краја трећег часа и почетка малог одмора: <b>" + (55-ctm) + " минута</b>.";
        }
        else if ((cth == 16 && ctm <= 59)) {
            poruka = "До краја малог одмора и почетка четвртог часа: <b>" + (60-ctm) + " минута</b>.";
        }
        else if ((cth == 17 && ctm <= 44)) {
            poruka = "До краја четвртог часа и почетка средњег одмора: <b>" + (45-ctm) + " минута</b>.";
        }
        else if ((cth == 17 && ctm <= 54)) {
            poruka = "До краја средњег одмора и почетка петог часа: <b>" + (55-ctm) + " минута</b>.";
        }
        else if ((cth == 17 && ctm <= 59) || (cth == 18 && ctm <= 39)) {
            if (cth == 17) {
                poruka = "До краја петог часа и почетка малог одмора: <b>" + (40 + 60-ctm) + " минута</b>.";
            } else {
                poruka = "До краја петог часа и почетка малог одмора: <b>" + (40-ctm) + " минута</b>.";
            }
        }
        else if ((cth == 18 && ctm <= 44)) {
            poruka = "До краја малог одмора и почетка шестог часа: <b>" + (45-ctm) + " минута</b>.";
        }
        else if ((cth == 18 && ctm <= 59) || (cth == 19 && ctm <= 29)) {
            if (cth == 17) {
                poruka = "До краја шестог часа и завршетка наставе за овај дан: <b>" + (30 + 60-ctm) + " минута</b>.";
            } else {
                poruka = "До краја шестог часа и завршетка наставе за овај дан: <b>" + (30-ctm) + " минута</b>.";
            }
        }
    }
    document.getElementById('vreme').innerHTML = poruka;
}

window.setInterval(function() { updateTime() }, 5*1000);


var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

function goHome() {
    window.location.href = "index.php";
}

function goContacts() {
    window.location.href = "";
}

function downloadFormular() {
    window.localStorage.href = "Prijava.docx";
}

function goHistory() {
    window.location.href = "istorijat.php";
}

window.onscroll = function() {
    if (isInViewport(nav)) {
        navmin.style.visibility="hidden";
    } else navmin.style.visibility="visible";
};


/*
window.onscroll = function() {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop > 100) {
        navmin.style.visibility="visible";
    }
    if (scrollTop < 100) {
        navmin.style.visibility="hidden";
    }
}
*/
