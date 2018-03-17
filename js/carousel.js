/*
	封装轮播图类
*/
class Carousel {
	constructor({el, timeout = 3000}) {
		this.el = el;
		this.timeout = timeout;

		// 鼠标移入移出事件
		let directionBtn = this.el.getElementsByClassName('direction-btn')[0];
		this.el.onmouseover = () => {
			// directionBtn.style.display = 'block';
			// 清除定时器
			clearInterval(this.timer);
		}
		this.el.onmouseout = () => {
			// directionBtn.style.display = 'none';
			// 再次自动轮播
			this.autoMove();
		}


		// 复制carousel-list的第一个LI到最后
		let carouselList = this.el.getElementsByClassName('carousel-list')[0];
		let firstLi = carouselList.children[0];
		this.liWidth = firstLi.offsetWidth;    // 每张图片的宽度
		
		carouselList.innerHTML += firstLi.outerHTML; // 复制第一张图片
		this.imgLen = carouselList.children.length; // 图片的个数

		// 设置最新的UL宽度
		carouselList.style.width = this.imgLen * this.liWidth + 'px';

		this.carouselList = carouselList;


		// 添加LI的下标
		this.liIndex = 0;



		// 给左侧按钮添加点击事件
		let prev = this.el.getElementsByClassName('prev')[0];

		prev.onclick = () => {
			this.leftMove();
		}

		// 给右侧按钮添加点击事件
		let next = this.el.getElementsByClassName('next')[0];

		next.onclick = () => {
			this.rightMove();
		}

		// 自动轮播
		// this.autoMove();
	}

	autoMove() {
		this.timer = setInterval(() => {
			this.rightMove();
		}, this.timeout);
	}

	leftMove() {
		this.liIndex--;
		if(this.liIndex < 0) {
			this.carouselList.style.left = - (this.imgLen - 1) * this.liWidth + 'px';
			this.liIndex = this.imgLen - 2;
		}
		bufferMove(this.carouselList, {left: - this.liIndex * this.liWidth});

		// 按钮切换
		this.dotIndex--;
	}

	rightMove() {
		// 图片运动
		this.liIndex++;

		if(this.liIndex >= this.imgLen) {
			this.carouselList.style.left = 0
			this.liIndex = 1
		}
		bufferMove(this.carouselList, {left: - this.liIndex * this.liWidth});
	}
}

window.onload=function(){
	new Carousel({
	el: document.getElementById('carousel1'),
	timeout: 5000
});
	// console.log(document.getElementById('carousel1'))
}