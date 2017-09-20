var Cat = function (src, name) {
	this.src = src;
	this.count = 0;
	this.name = name;
}
var cat1 = new Cat('img/watch.jpg', '谁在看本宝宝');
var cat2 = new Cat('img/2.jpg', 'two');
var cat3 = new Cat('img/sleep.jpg', '睡觉啦');
var cat4 = new Cat('img/jump.jpg', '你挑我就跳');
var cat5 = new Cat('img/angry.jpg', '本宝宝生气了');

var catarr = [];
catarr.push(cat1);
catarr.push(cat2);
catarr.push(cat3);
catarr.push(cat4);
catarr.push(cat5);

var bigulhtml = "";
var smallhtml = "";

bigulhtml += '<li>' + 
            '<span id="name">' + catarr[0].name + '</span>' +
            '<a href="javascript:;"><img src="' + catarr[0].src + '"/></a>'+
            '<span>当前点击次数：</span>' +
            '<span id="clickcount">' + catarr[0].count + '</span>' +
           '</li>';
for (var i = 0; i < catarr.length; i++) {
   if (i == 0) {
      smallhtml += '<li class="active">' + 
                  '<a href="javascript:;"><img src="' + catarr[i].src + '"/></a>'+
                 '</li>';
   } else {
      smallhtml += '<li>' + 
                  '<a href="javascript:;"><img src="' + catarr[i].src + '"/></a>'+
                 '</li>';
   }

}

var bigul = document.getElementById('big');
bigul.innerHTML = bigulhtml;
var sul = document.getElementById('small');
sul.innerHTML = smallhtml;
var simg = sul.getElementsByTagName('img');
var bimg = bigul.getElementsByTagName('img')[0];
var sli = sul.getElementsByTagName('li');
for (var i = 0; i < simg.length; i++) {
	(function (i) {
		simg[i].addEventListener('click', function(){
			var clickcount = document.getElementById('clickcount');
         var name = document.getElementById('name');
			catarr[i].count++;
			clickcount.innerText = catarr[i].count;
         name.innerText = catarr[i].name;
         bimg.src = catarr[i].src;
         document.getElementsByClassName('active')[0].classList.remove("active");
         simg[i].parentNode.parentNode.classList.add("active");
	}, false);
	})(i);
}