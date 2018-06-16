var currentTime;
var ct, ctd, cth, ctm;
var nav, navmin;
var begin = 8*60;

window.onload = function() {
    nav = document.getElementById('navigatormov');
    navmin = document.getElementById('mvhd');
	makeTable();
	updateTime();
    window.setInterval(function() { updateTime() }, 5*1000);
}

var poruka;
var workday = true;
var lengths = [45, 45, 45, 45, 45, 45, 45,
			45, 45, 45, 45, 45, 45,
			5, 10, 20];
var order = [0, 13, 1, 15, 2, 13, 3, 14, 4, 13, 5, 13, 6, 14, 7, 13, 8, 15, 9, 13, 10, 14, 11, 13, 12, -1];
var msgOrder = [4, 12, 6, 14, 7, 12, 8, 13, 9, 12, 10, 12, 11, 13, 5, 12, 6, 14, 7, 12, 8, 13, 9, 12, 10, 15];
var tblOrder = [16, 23, 17, 25, 18, 23, 19, 24, 20, 23, 21, 23, 22, 26, 16, 23, 17, 25, 18, 23, 19, 24, 20, 23, 21];
var msgs = [ 
	"Настава се не одржава овог дана.", // 0
	"Крај наставе за овај дан.",
	"До почетка прве смене: {1}.",
	"До краја {1} и почетка {2}: {3}.",

	"првог часа прве смене", // 4
	"првог часа друге смене",
	"другог часа",
	"трећег часа",
	"четвртог часа",
	"петог часа",
	"шестог часа",
	"седмог/нултог часа",
	"малог одмора",
	"средњег одмора",
	"великог одмора",
	"краја наставе за овај дан",

	"Први час", //16
	"Други час",
	"Трећи час",
	"Четврти час",
	"Пети час",
	"Шести час",
	"Седми/нулти час",
	"Мали одмор", //23
	"Средњи одмор",
	"Белики одмор",
	"Крај/Почетак смене"
];

function formatTime(time){
	var hrs = parseInt(time/60);
	var min = parseInt(time%60);
	var msg = "";
	if(hrs != 0) msg = msg + hrs + " часова";
	if(min != 0) msg = msg + min + " минута";
	return msg;
}

function formatSegment(time, len){
	var hrs = parseInt(time/60);
	var min = parseInt(time%60);
	var msg = "";
	msg = msg + "{1}:{2} - ".replace('{1}', (hrs < 10 ? '0'+hrs : hrs)).replace('{2}', (min < 10 ? '0'+min : min));
	time += len;
	hrs = parseInt(time/60);
	min = parseInt(time%60);
	msg = msg + "{1}:{2}".replace('{1}', (hrs < 10 ? '0'+hrs : hrs)).replace('{2}', (min < 10 ? '0'+min : min));
	return msg;
}

function updateTime() {
    currentTime = new Date();
	ctd = currentTime.getDay();
    cth = currentTime.getHours();
    ctm = currentTime.getMinutes();
	ct = cth*60 + ctm;

    if(ctd == 6 || ctd == 0) workday = false; 
	if(!workday){
		poruka = msgs[0];
		document.getElementById('vreme').innerHTML = poruka;
		return;
	}
	if(ct < begin){
		poruka = msgs[2].replace("{1}", formatTime(begin-ct));
	}

	ct -= begin;
	var cur = 0;
	while(ct >= lengths[order[cur]]){
		if(cur > 24) break;
		ct -= lengths[order[cur++]];
	}
	if(cur <= 24) poruka = msgs[3].replace("{1}", msgs[msgOrder[cur]]).replace("{2}", msgs[msgOrder[cur+1]]).replace("{3}", formatTime(lengths[order[cur]]-ct));
	else if(cur == 24) poruka = poruka.replace("почетка ", "");
	else  poruka = msgs[1];

    document.getElementById('vreme').innerHTML = poruka;
}

function makeTable() {
	currentTime = new Date();
	ctd = currentTime.getDay();

	var cur = 0;
	var curTime = begin;
	var timetable = '';
	while(cur < 25){
		if(tblOrder[cur] > 22 && tblOrder[cur] < 27){
			timetable = timetable + '<tr><th>{1}</th><th>{2} мин</th></tr>'.replace('{1}', msgs[tblOrder[cur]]).replace('{2}', lengths[order[cur]]);
			curTime += lengths[order[cur]];
		++cur;
			continue;
		}
		timetable = timetable + '<tr><th>{1}</th><th>{2}</th></tr>'.replace('{1}', msgs[tblOrder[cur]]).replace('{2}', formatSegment(curTime, lengths[order[cur]]));
		curTime += lengths[order[cur]];
		++cur;
	}
	document.getElementById('tabela').innerHTML = timetable;
	return;
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
