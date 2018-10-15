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
        divs[this.index].style.border = '1px solid #ff7101';
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

// 商品加减
var oUl = document.getElementById('list');
var aLi = oUl.getElementsByTagName('li');
var oAllbom = document.getElementById('allbom');
// console.log(oAllbom);
for (var i = 0; i < aLi.length; i++) {
    fn1(aLi[i]);
}
function fn1(aLi) {
    var aBtn = aLi.getElementsByTagName('a');
    var ainput = aLi.getElementsByTagName('input')[1];
    // console.log(ainput);
    // console.log(aBtn);
    var aStrong = aLi.getElementsByTagName('strong')[0];
    var aStrong1 = oAllbom.getElementsByTagName('strong')[0];
    // console.log(aStrong1);
    var aSpan = aLi.getElementsByTagName('span')[0];
    var aSpan1 = oAllbom.getElementsByTagName('span')[1];
    // console.log(aSpan1);
    var num = Number(ainput.value);
    var num1 = Number(aStrong1.innerHTML);
    var price = parseFloat(aStrong.innerHTML);
    var price1 = parseFloat(aStrong.innerHTML);
    console.log(price1);
    // console.log(money);
    // console.log(num1);
    aBtn[1].onclick = function () {
        if (num > 1) {
            num--;
            ainput.value = num;
            aStrong1.innerHTML = (num);
            aSpan.innerHTML = (num * price).toFixed(2);
            aSpan1.innerHTML = (num * price1).toFixed(2);
        }
    }
    aBtn[2].onclick = function () {
        num++;
        ainput.value = num;
        aStrong1.innerHTML = (num);
        aSpan.innerHTML = (num * price).toFixed(2);
        aSpan1.innerHTML = (num * price1).toFixed(2);
    }
}













