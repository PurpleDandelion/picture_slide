/* ============ model =========== */

var model = {
    currentCat: null,
	cats: [
        {
            clickCount : 0,
            name : '谁在看本宝宝',
            imgSrc : 'img/watch.jpg',
        },
        {
            clickCount : 0,
            name : 'two',
            imgSrc : 'img/2.jpg',
        },
        {
            clickCount : 0,
            name : '睡觉啦',
            imgSrc : 'img/sleep.jpg',
        },
        {
            clickCount : 0,
            name : '你跳我就跳',
            imgSrc : 'img/jump.jpg',
        },
        {
            clickCount : 0,
            name : '本宝宝生气了',
            imgSrc : 'img/angry.jpg',
        }
    ]
};

/* =========== octopus ===========*/
var octopus = {
	init: function () {
		// model数组中的第一个元素
        model.currentCat = model.cats[0];

        //初始化预览大图和列表
        catListView.init();
        catView.init();
	},
	getCurrentCat: function () {
		//获取当前的猫
        return model.currentCat;
	},
	getCats: function () {
		//获取所有的猫
        return model.cats;
	},
	setCurrentCat: function (cat) {
		//设置当前的猫
        model.currentCat = cat;
	},
	setCurrentListCat: function () {
		// 设置当前列表对应的猫
	},
	incrementCounter: function () {
		// 浏览量
        model.currentCat.clickCount++;
        catView.render();
	}
};

/* ========== cat view ==============*/
var catView = {
	init: function () {
		//初始化大图预览
        this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('name');
        this.catImageElem = document.getElementById('img');
        this.countElem = document.getElementById('clickcount');

        // this.catImageElem.addEventListener('click', function(){
        //     // octopus.incrementCounter();
        //     // console.log('a');
        // });

        this.render();
	},
	render: function () {
		//输出大图
		var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
	}
};

/* ========= catlist view ============*/
var catListView = {
	init: function () {
		// 初始化列表预览
        this.catListElem = document.getElementById('cat-list');
		this.initOneImg();
		this.click();
	},
	initOneImg: function () {
		// 输出列表
		var cats = model.cats;
        this.catListElem.innerHTML = '';
        this.catListElem.innerHTML += '<li class="active">' + 
	                  	 '<a href="javascript:;"><img src="' + cats[0].imgSrc + '"/></a>'+
	                 	 '</li>';
		for (var i = 1; i < cats.length; i++) {
	      	this.catListElem.innerHTML += '<li>' + 
	                  	 '<a href="javascript:;"><img src="' + cats[i].imgSrc + '"/></a>'+
	                 	 '</li>';
		}
	},
	render: function (li) {
		this.active(li);
	},
	active: function (catli) {
		//加active类
		var actives = document.getElementsByClassName('active');
		if (actives.length > 0) {
			actives[0].classList.remove("active");
		}
		catli.classList.add("active");
	},
	click: function () {
		// 添加点击事件
		var _this = this;
		var sli = document.getElementsByTagName('li');
		var cats = model.cats;
		for (var i = 0; i < sli.length; i++) {
			(function (i) {
				sli[i].getElementsByTagName('img')[0].addEventListener('click', function(){
            		octopus.incrementCounter();
                    octopus.setCurrentCat(cats[i]);
                    catView.render();
                    _this.render(sli[i]);
				}, false);
			})(i);
		}
	}
};

octopus.init();