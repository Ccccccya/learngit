var schoolBtn = document.getElementById('school-btn');
var majorBtn = document.getElementById('major-btn');
var school = document.getElementById('school');
var major = document.getElementById('major');

schoolBtn.onclick = function(){
	school.innerHTML = "重庆师范大学";
}

majorBtn.onclick = function(){
	major.innerHTML = "软件工程(服务外包)专业";
}