document.ondragstart = document.onselectstart = function () { return false; };
// 放大镜
var small = document.getElementById('small');
var img1 = document.getElementById('img1');
var move = document.getElementById('move');
var big = document.getElementById('big');
var img2 = document.getElementById('img2');
var ul = document.getElementById('ul');
var lis = ul.getElementsByTagName('li');
small.onmouseover = function () {
    big.style.display = 'block';
    move.style.display = 'block';
    this.onmousemove = function (ent) {
        var e = ent || window.event;

        var x = e.pageX - small.offsetLeft - move.offsetWidth / 2;
        var y = e.pageY - small.offsetTop - move.offsetHeight / 2;
        if (x < 0) {
            x = 0;
        } else if (x >= small.offsetWidth - move.offsetWidth) {
            x = small.offsetWidth - move.offsetWidth
        }
        if (y < 0) {
            y = 0;
        } else if (y >= small.offsetHeight - move.offsetHeight) {
            y = small.offsetHeight - move.offsetHeight
        }
        move.style.left = x + 'px';
        move.style.top = y + 'px';

        var bleft = img2.offsetWidth * (x / small.offsetWidth);
        var btop = img2.offsetHeight * (y / small.offsetHeight);

        img2.style.left = -bleft + 'px';
        img2.style.top = -btop + 'px';
        img2.src = img1.src;
    }
}
small.onmouseout = function () {
    move.style.display = 'none';
    big.style.display = 'none';
}
for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function () {
        img1.src = this.firstElementChild.src;
    }
}
// 商品加减
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var input = document.getElementById('input');
var num = Number(input.value);
btn1.onclick = function () {
    if (num > 0) {
        num--;
        input.value = num;
    }
}
btn2.onclick = function () {
    num++;
    input.value = num;
}
// 用户评论 商品详情
var drt = document.getElementById('drt');
var spans = drt.getElementsByTagName('span');
var conts = document.getElementsByClassName('cont');
for (var i = 0; i < spans.length; i++) {
    spans[i].index = i;
    spans[i].onmouseenter = function () {
        for (var i = 0; i < spans.length; i++) {
            spans[i].className = '';
        }
        this.className = 'active';
    }
}
$(function () {
    $('#drt>span').click(function () {
        var index = $(this).index();
        $('.contents>div').eq(index).show().siblings().hide();
    })
})

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

// 购物车
var shopCart = document.getElementById('shopCart');
var aSpan = shopCart.getElementsByTagName('span')[0];
var join = document.getElementById('join');
var num = parseInt(aSpan.innerHTML);
// console.log(num)
join.onclick = function () {
    num++;
    aSpan.innerHTML = num;
}

var buy = document.getElementById('buy');
var login_1 = document.getElementById('login_1');
buy.onclick = function () {
    timer = setTimeout(function () {
        login_1.style.display = 'block';
    }, 800);
    setTimeout(function () {
        login_1.style.display = 'none';
    }, 1600)
}

$(function () {
    //a标签的点击事件
    $('#buy').click(function () {
        setTimeout(function () {
            $('#bar').css({ width: $(document).width(), height: $(document).height() });
            $('.contents1').show();
            $('#bar').show();
            $('#show').show();
        }, 2500)
    })

    //小叉叉的点击隐藏
    $('#show').click(function () {
        $('.contents1').fadeOut();
        $('#bar').fadeOut();
        $('#show').fadeOut();
    })

    //show的拖拽
    $('.contents1').mousedown(function (e) {
        console.log(1);
        //添加鼠标箭头
        $(this).css('cursor', 'move');
        //获取鼠标与show不变的距离
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;
        // console.log(x,y);

        //文档的移动事件
        $(document).mousemove(function (ev) {
            //获取移动的距离=当前鼠标坐标-与show不变的距离
            console.log(2);

            var ll = ev.pageX - x;
            var tt = ev.pageY - y;
            console.log(ll, tt);

            //判断边界
            if (ll <= 0) {
                ll = 0
            } else if (ll >= $(document).width() - $('.contents1').width()) {
                ll = $(document).width() - $('.contents1').width()
            }

            if (tt <= 0) {
                tt = 0
            } else if (tt >= $(document).height() - $('.contents1').height()) {
                tt = $(document).height() - $('.contents1').height()
            }

            //show left top 赋值
            $('.contents1').css({ left: ll, top: tt });

        })


    })

    //取消拖拽
    $(document).mouseup(function () {
        //取消鼠标箭头
        $('.contents1').css('cursor', '');
        $(this).off('mousemove');
    })

})