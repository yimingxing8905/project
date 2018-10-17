document.ondragstart = document.onselectstart = function () { return false; };
// 二级菜单
var uls = document.getElementById('uls');
var as = uls.getElementsByTagName('p');
var divs = uls.getElementsByTagName('div');
for (var i = 0; i < as.length; i++) {
    as[i].index = i;
    as[i].onmouseenter = function () {
        for (var i = 0; i < as.length; i++) {
            divs[i].style.display = 'none';
        }
        divs[this.index].style.display = 'block';
    }
    as[i].onmouseleave = function () {
        for (var i = 0; i < as.length; i++) {
            divs[i].style.display = 'none';
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
// 轮播图
var aLi = document.getElementById('box').getElementsByTagName('li');
var aLi_num = document.getElementById('num').getElementsByTagName('li');
var left = document.getElementById('left');
var right = document.getElementById('right');
var i = 0;
var run = null;
// 设置图片自动轮播
function autoRun() {
    run = setInterval(function () {
        aLi[i].className = 'class';
        aLi_num[i].className = 'class';
        i++;
        if (i == aLi.length) {
            i = 0;
        }
        aLi[i].className = 'active';
        aLi_num[i].className = 'active_num';
    }, 3000);
};
autoRun();
// 循环遍历每张图片添加鼠标移入 移出
for (var j = 0; j < aLi.length; j++) {
    aLi[j].onmouseover = function () {
        clearInterval(run);
        left.style.display = 'block';
        right.style.display = 'block';
    }
    aLi[j].onmouseout = function () {
        autoRun();
        left.style.display = '';
        right.style.display = '';
    }
};
// 循环遍历每个数字添加鼠标  移出
for (var k = 0; k < aLi_num.length; k++) {
    aLi_num[k].index = k;
    aLi_num[k].onmouseenter = function () {
        clearInterval(run);
    }
    aLi_num[k].onmouseover = function () {
        aLi_num[i].className = '';
        aLi[i].className = '';
        i = this.index;
        aLi_num[i].className = 'active_num';
        aLi[i].className = 'active';
    }
    aLi_num[k].onmouseleave = function () {
        autoRun();
    }
};
// 左右边点击箭头鼠标移入
left.onmouseover = right.onmouseover = function () {
    left.style.display = 'block';
    right.style.display = 'block';
    clearInterval(run);
};
// 左右边点击箭头鼠标移出
left.onmouseout = right.onmouseout = function () {
    left.style.display = '';
    right.style.display = '';
    autoRun();
};
// 右边点击箭头鼠标点击
right.onclick = function () {
    aLi[i].className = '';
    aLi_num[i].className = '';
    i++;
    if (i == aLi.length) {
        i = 0;
    }
    aLi[i].className = 'active';
    aLi_num[i].className = 'active_num';
}
// 左边点击箭头鼠标点击
left.onclick = function () {
    aLi[i].className = '';
    aLi_num[i].className = '';
    i--;
    if (i < 0) {
        i = aLi.length - 1;
    }
    aLi[i].className = 'active';
    aLi_num[i].className = 'active_num';
}
// 楼层

$(function () {
    var toTop = document.getElementById('toTop');
    toTop.onclick = function () {
        window.scrollTo(0, 0);
    }
    $('#di>ul>li').click(function () {
        var index = $(this).index();
        var top = $('.floor').eq(index).offset().top;
        $('html').animate({ scrollTop: top }, 500);
    });
    var heights = [];
    $('.floor').each(function () {
        heights.push($(this).offset().top);
    });
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        var index;
        for (var i = 0; i < heights.length; i++) {
            if (top >= heights[i] && top < heights[i + 1]) {
                index = i;
                $('.floors>ul>li').eq(index).css('background', '#ccc').css('color', '#ff7101').siblings().css('background', '#ddd').css('color', '#fff')
            } else if (top >= heights[heights.length - 1]) {
                index = heights.length - 1;
                $('.floors>ul>li').eq(index).css('background', '#ccc').css('color', '#ff7101').siblings().css('background', '#ddd').css('color', '#fff')
            }
        }
    });
});
window.onscroll = function () {

    var y = document.documentElement.scrollTop || window.pageYOffset;
    if (y > 600) {
        di.style.display = 'block';
    } else if (y < 600) {
        di.style.display = 'none';

    }
};



