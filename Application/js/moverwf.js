//功能：匀速运动的封装
//参数：DOM元素、样式属性、起始位置、结束位置、方向、步长、时间间隔。
//返回值:无
function yunMover(objDom,styleAttr,startValue,endValue,direction,step,timeSpace){
	var value = startValue;
	
	
	var myTimer = setInterval(function(){
		//数据处理
		value += direction*step;
		
		if(direction>0?value >= endValue:value <= endValue){
			value = endValue;
			window.clearInterval(myTimer);
		}
		//改变外观
		if(styleAttr=="opacity"){
			objDom.style[styleAttr] = value;
		}else{
			objDom.style[styleAttr] = value+"px";
		}
	},timeSpace);
}

//匀速运动：
//参数：
	//dom对象
	//样式属性
	//结束值
	//时长
//返回值：无	
// yunMover($("box"),"opacity",0,1,1,0.01,20);
function yunMover2(objDom,styleAttr,endValue,timeLong){
	var startValue = parseInt(getStyle(objDom,styleAttr));
	var direction = startValue > endValue? -1:1;

	//让时长已知
	var timeSpace = 10;
	var step = Math.abs((startValue - endValue)/(timeLong/timeSpace));

	yunMover(objDom,styleAttr,startValue,endValue,direction,step,timeSpace);
}
