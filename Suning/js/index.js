$(function(){
    //头部背景颜色
    //页面滚动事件
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $(".header:eq(0)").css({"background":"rgba(255,189,0,1)"});
        }
        else{
            $(".header:eq(0)").css({"background":"rgba(0,0,0,0)"});
        }
    })
    //轮播图
    slide();
    //登录
    $("#index_dl").click(function(){
        location.href = "log.html";
    })
})
function slide(){
    let myTimer;//定义定时器
    let index = 0;//记录当前图片的序号，从0开始
    //1、自动变换图片，同时变豆豆
    function autoPlay() {
        myTimer = setInterval(function(){
            //1、改变数据
            let outIndex = index;//出的图片序号
            index=index+1;
            //2、判断边界
            if(index>4){
                index=0;
            }
            //3、改变外观
            showImg(index,outIndex);
        },3000);
    }
    function stopPlay() {
        window.clearInterval(myTimer);
    }
    function goImg(transIndex) {
        //1、改变数据（改变当前图片的序号）
        let outIndex = index;
        index = transIndex;
        //3、改变外观
        showImg(index,outIndex);
    }
    function showImg(inIndex,outIndex) {
        if(inIndex==outIndex){
            return;
        }
        //3.1 改变图片的z-index
        let imgs = document.getElementsByClassName("boxImg");
        imgs[inIndex].style.left = "5.4rem";
        //滑入滑出（需要知道入的序号，出的序号）
        // moveObj02(imgs[outIndex],"left",-400,1000);
        // moveObj02(imgs[inIndex],"left",0,1000);
        slideInOut(imgs[outIndex],imgs[inIndex],"left",-5.4,5.4,1000);
        
        //3.2 改变豆豆的颜色
        let lis = $(".doudouBox")[0].children;
        for(let i=0;i<lis.length;i++){
            lis[i].style.backgroundColor = "white";
            lis[i].style.opacity = .5;
        }
        lis[inIndex].style.backgroundColor = "white";
        lis[inIndex].style.opacity = 1;
    }
    function slideInOut(domObjOut,domObjIn,attr,endValue,offset,timeLong,func) {
        let startValue = parseFloat(getStyle(domObjOut,attr));//??
        let direction= endValue-startValue>0?1:-1;//??	
        let timeSpace = 10;
        let step = Math.abs(endValue-startValue)/(timeLong/timeSpace) // endValue-startValue/步子数;//
        
        let currValue = startValue;
        let myTimer = setInterval(function(){
            //1、改变数据
            currValue = currValue+direction*step;    
            //2、判断边界
            if(Math.abs(currValue-endValue)<step){
                currValue = endValue;
                window.clearInterval(myTimer);
                func&&func();
            }
            //3、改变外观
            domObjOut.style[attr] = currValue+"rem";
            domObjIn.style[attr] = (currValue+offset)+"rem";    
        },timeSpace);
    }
    function getStyle(domObj,attr){
        if(domObj.currentStyle){//domObj.currentStyle如果能够正确获取到，那就真
            return domObj.currentStyle[attr];//当对象的属性名是变量时，用方括号而不是点。
        }else{
            return window.getComputedStyle(domObj)[attr];
        }	
    }
    //1、自动变换图片，同时变豆豆
    autoPlay();
    //2、鼠标放上停止自动变换
	$(".box")[0].onmouseover = function () {
		stopPlay();
	}
	//3、鼠标离开，继续自动变换
	$(".box")[0].onmouseout = function () {
		autoPlay();
	}
	//4、点击豆豆跳到指定的图片
	let lis = $(".doudouBox")[0].children;
	for(let i=0;i<lis.length;i++){
		lis[i].setAttribute("index",i);
		lis[i].onclick = function () {
			//跳到指定序号的图片
			goImg(parseInt(this.getAttribute("index")));
		}
	}
}