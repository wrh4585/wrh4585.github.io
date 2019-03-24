<?php
    header("Content-type:text/html;charset=utf-8");

    $username = $_POST['one'];
    $userpass = $_POST['three'];



    $conn = mysql_connect("localhost","root","root");
    if(!$conn){
        die("连接失败".mysql_error());
    }else{
        //2.选择数据
        mysql_select_db('daily',$conn);
        //3.执行sql语
        $sqlstr = "insert into sb (phone,password) values ('$username','$userpass')";
      
         $result = mysql_query($sqlstr,$conn);
        if($result==1){ 
            // echo "<script> alert('注册成功') </script>";
        // header("refresh:0;url=../login.html");
        echo '1';
                
        }else{
            // echo "<script> alert('注册失败') </script>";
        // header("refresh:0;url=../reg.html");
        echo '0';
        
        }
        //4.关闭数据库
        mysql_close($conn);
     
    }
?>