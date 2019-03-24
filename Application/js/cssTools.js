
//功能：获取dom元素的样式属性
//参数：dom对象，样式属性名
//返回值：属性值
function getStyle(domobj,attr){
	if(domobj.currentStyle){
		return domobj.currentStyle[attr];//当对象的属性是变量时，不能用点，得用方括号
	}else{
		return window.getComputedStyle(domobj)[attr];
	}
}