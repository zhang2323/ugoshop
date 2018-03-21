
var oBox  	   = document.getElementById('box');
var oSmallBox  = document.getElementById('small-box');
var aSmallImg  = Array.from(oSmallBox.children);
var oMiddleBox = document.getElementById('middle-box');
var oMiddleImg = document.getElementById('middle-img');
var oLargeBox  = document.getElementById('large-box');
var oLargeImg  = document.querySelector('.actImg');
var oShadow    = document.getElementById('shadow');
var lBox    = document.getElementById('l-box');



// 遮罩层最大的left和top值
var maxL = 0;
var maxT = 0;
// 大图片最大的left和top值
var maxLargeImgL  = 0;
var maxLargeImgT  = 0;

// 鼠标进入middle-box
oMiddleBox.onmouseover = function () {
	// 显示遮罩层
	oShadow.style.display = 'block';
	// 显示右侧的盒子
	oLargeBox.style.display = 'block';

	// 获取最大的left和top值
	maxL = oMiddleBox.offsetWidth - oShadow.offsetWidth;
	maxT = oMiddleBox.offsetHeight - oShadow.offsetHeight;

	maxLargeImgL = oLargeImg.offsetWidth - oLargeBox.offsetWidth;
	maxLargeImgT = oLargeImg.offsetHeight - oLargeBox.offsetHeight;

};

// 鼠标离开middle-box
oMiddleBox.onmouseout = function () {
	// 隐藏遮罩层
	oShadow.style.display = 'none';
	// 隐藏右侧的盒子
	oLargeBox.style.display = 'none';
};

// 给middle-box添加移动事件
oMiddleBox.onmousemove = function (ev) {
	var e = ev || window.event;
	var iL = e.clientX - oShadow.offsetWidth /2 - lBox.offsetLeft;
	var iT = e.pageY - oShadow.offsetHeight /2 - lBox.offsetTop;

	// 限定左侧
	if(iL < 0) {
		iL = 0;
	}

	// 限定上侧
	if(iT < 0) {
		iT = 0;
	}

	// 限定右侧
	if(iL > maxL) {
		iL = maxL;
	}

	// 限定下侧
	if(iT > maxT) {
		iT = maxT;
	}
	oShadow.style.left = iL + 'px';
	oShadow.style.top  = iT + 'px';

// 让大图移动
	var img_l= - iL * maxLargeImgL / maxL;
	var img_t= - iT * maxLargeImgT / maxT;
	oLargeImg.style.left  = img_l + 'px';
	oLargeImg.style.top   = img_t + 'px';
};
