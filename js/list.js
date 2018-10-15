document.ondragstart = document.onselectstart = function () { return false; };
// 全部产品
var uls = document.getElementById('uls');
var as = uls.getElementsByTagName('p');
var divs = uls.getElementsByTagName('div');
var all = document.getElementById('all');
uls.onmouseenter = all.onmouseenter = function () {
    uls.style.display = 'block';
}
uls.onmouseleave = all.onmouseleave = function () {
    uls.style.display = '';
}
for (var i = 0; i < as.length; i++) {
    as[i].index = i;
    as[i].onmouseenter = function () {
        for (var i = 0; i < as.length; i++) {
            divs[i].style.display = 'none';
            as[i].style.border = ''
        }
        divs[this.index].style.display = 'block';
        divs[this.index].style.border = '2px solid #ff7101';
        as[this.index].style.border = '2px solid #ff7101';
        as[this.index].style.borderRight = '2px solid #fff';
    }
    as[i].onmouseleave = function () {
        for (var i = 0; i < as.length; i++) {
            divs[i].style.display = 'none';
            as[i].style.border = ''
        }
    }
}
for (var j = 0; j < divs.length; j++) {
    divs[j].index = j;
    divs[j].onmouseenter = function () {
        divs[this.index].style.display = 'block';
    }
    divs[j].onmouseleave = function () {
        divs[this.index].style.display = '';
    }
}
// 瀑布流
var list = document.getElementById('list');
window.onscroll = function () {
    var dh = document.documentElement.offsetHeight;
    var ch = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
    var st = document.documentElement.scrollTop || document.body.scrollTop;
    if (dh - ch <= st) {
        Ajax('JSON').get('php/list.php', function (msg) {
            var str = '';
            for (var i in msg) {
                str += '<li class="list-item"><a href="details.html"><img src="' + msg[i]["img"] + '" alt=""></a><div class="cont"><a href="details.html"><span>' + msg[i]["title"] + '</span><span>' + msg[i]["price"] + '</span></a></div></li>';
            }
            if (document.body.scrollHeight >= 8000) {
                document.body.scrollHeight = document.body.scrollHeight;
            } else {
                list.innerHTML += str;
            }

        })
    }
}

