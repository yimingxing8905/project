document.ondragstart = document.onselectstart = function () { return false; };
// function denglu(){
// alert(88);
var uname = document.getElementById('username');
var info = document.getElementById('info');
uname.onblur = function () {
	var uname = this.value;
	//alert(uname)

	//发送 获取信息
	Ajax().post('php/login.php', 'uuu=' + uname, function (msg) {
		//console.log(msg);	
		if (msg == 'y') {
			info.innerHTML = "<font color='green'>用户名正确</font>";

		} else {
			info.innerHTML = "<font color='red'>用户名错误，请重新输入</font>";
		}
	});
}
	// setTimeout(function(){
	// 	location="index.html";
	// },1000)

// }

