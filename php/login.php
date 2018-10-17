<?php
	$uuu=$_POST['uuu'];

	$arr=["111","222","333","444","555","666"];
	//数据对比
	if(in_array($uuu,$arr)){
		//输出 y
		echo 'y';
	}else{
		echo 'n';
    } 
?>