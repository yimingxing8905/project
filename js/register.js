// 用户名
document.ondragstart = document.onselectstart = function () { return false; };
function checkUname() {
    var uname = document.getElementById("uname");
    var span1 = document.getElementById("span1");
    if (uname.value.length < 6) {
        span1.innerHTML = "<font color='red'>账户名称不能少于6位！</font>";

    } else if (uname.value.length > 12) {
        span1.innerHTML = "<font color='red'>账户名称不能多于12位！</font>";
    }
    else {
        span1.innerHTML = "<font color='green'>合法账户名称！</font>";
    }
}

// 手机号
function checkPhone() {
    var phone = document.getElementById('uid').value;
    if (!(/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(phone))) {
        return document.getElementById('uidt').innerHTML = "<font color='red'>请输入正确的手机号</font>";
        return false;
    } else { return document.getElementById('uidt').innerHTML = "<font color='green'>输入正确</font>"; }
}
// 验证码
function checkYzm() {
    var vift = document.getElementById('verification');
    if (userYzm.value == trueYzm) {
        vift.innerHTML = "<font color='green'>验证码正确！</font>";
    } else {
        vift.innerHTML = "<font color='red'>验证码填写错误！";

        ShengCheng();
    }

}

function ShengCheng() {
    code.innerHTML = "";
    trueYzm = "";
    for (var i = 0; i <= 3; i++) {
        var num = Math.floor(Math.random() * 9 + 1);
        trueYzm += num;
        code.innerHTML += num;
    }
}
ShengCheng();
// 密码强度判断
function checkPass() {
    var pwd = document.getElementById('pwd').value;
    var psd = document.getElementById('psd');
    if (pwd.length < 8) {
        psd.innerHTML = '密码不得小于8位！';
        psd.style.color = 'red'; return false;
    } else if (pwd.length > 20) {
        psd.innerHTML = '密码不得小于8位！';
        psd.style.color = 'red'; return false;
    }
    else if (!isNaN(pwd)) {
        psd.innerHTML = '密码太弱：试试数字、字母混合！';
        psd.style.color = 'red'; return false;
    } else {
        psd.innerHTML = '输入正确！';
        psd.style.color = "green";
        return true;
    }
}
// 两次密码判断
function validate() {
    var password = document.getElementById("pwd").value;
    var repassword = document.getElementById("pwd2").value;
    var psd2 = document.getElementById("psd2");
    if (password != repassword) {
        psd2.innerHTML = "<font color='red'>密码不一致</font>";

    } else {
        psd2.innerHTML = "<font color='green'>密码一致</font>";
    }
}
// 登录遮罩
$(function () {
    //a标签的点击事件
    $('#login').click(function () {
        $('#bar').css({ width: $(document).width(), height: $(document).height() });
        $('.login').show();
        $('#bar').show();
        $('#show').show();
    })

    //小叉叉的点击隐藏
    $('#show').click(function () {
        $('.login').fadeOut();
        $('#bar').fadeOut();
        $('#show').fadeOut();
    })

    //show的拖拽
    $('.login').mousedown(function (e) {
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
            } else if (ll >= $(document).width() - $('.login').width()) {
                ll = $(document).width() - $('.login').width()
            }

            if (tt <= 0) {
                tt = 0
            } else if (tt >= $(document).height() - $('.login').height()) {
                tt = $(document).height() - $('.login').height()
            }

            //show left top 赋值
            $('.login').css({ left: ll, top: tt });

        })


    })

    //取消拖拽
    $(document).mouseup(function () {
        //取消鼠标箭头
        $('.login').css('cursor', '');
        $(this).off('mousemove');
    })

})


// 验证登录
var unames = document.getElementById('username');

var info = document.getElementById('info');
unames.onblur = function () {
    console.log(unames)
    var uname = this.value;
    //alert(uname)

    //发送 获取信息
    Ajax().post('php/login.php', 'uuu=' + uname, function (msg) {
        console.log(msg);
        if (msg == 'y') {
            //表示以注册
            info.innerHTML = "<font color='green'>用户名正确</font>";
        } else {
            //表示可以注册
            info.innerHTML = "<font color='red'>用户名错误，请重新输入</font>";
        }
    })
}
// 获取验证码倒计时
$(function () {
    /*仿刷新：检测是否存在cookie*/
    if ($.cookie("captcha")) {
        var count = $.cookie("captcha");
        var btn = $('#getting');
        btn.val(count + '秒后可重新获取').attr('disabled', true).css('cursor', 'not-allowed');
        var resend = setInterval(function () {
            count--;
            if (count > 0) {
                btn.val(count + '秒后可重新获取').attr('disabled', true).css('cursor', 'not-allowed');
                $.cookie("captcha", count, { path: '/', expires: (1 / 86400) * count });
            } else {
                clearInterval(resend);
                btn.val("获取验证码").removeClass('disabled').removeAttr('disabled style');
            }
        }, 1000);
    }

    /*点击改变按钮状态，已经简略掉ajax发送短信验证的代码*/
    $('#getting').click(function () {
        var btn = $(this);
        var count = 60;
        var resend = setInterval(function () {
            count--;
            if (count > 0) {
                btn.val(count + "秒后可重新获取");
                $.cookie("captcha", count, { path: '/', expires: (1 / 86400) * count });
            } else {
                clearInterval(resend);
                btn.val("获取验证码").removeAttr('disabled style');
            }
        }, 1000);
        btn.attr('disabled', true).css('cursor', 'not-allowed');
    });

});



