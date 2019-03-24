<?php
	header("Content-type:text/html;charset=utf-8");
	//获取用户输入
	$username = $_POST['username'];
	$userpass = $_POST['userpass'];
	
	//建立连接
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		die("连接失败");
	}
	//连接数据库
	mysql_select_db("myzhaolian",$con);
	//执行sql语句
	$sqlstr = "select*from zhaolian where username = '$username'";
	$result = mysql_query($sqlstr,$con);
	if(mysql_num_rows($result)>0){
		mysql_close($con);
		echo "0";
	}else{
		$sqlstr = "insert into zhaolian (username,userpass) values ('$username','$userpass')";
		$result = mysql_query($sqlstr,$con);
		mysql_close($con);
		if($result==1){
			echo "1";
		}else{
			echo "0";
		}
	}
	
?>