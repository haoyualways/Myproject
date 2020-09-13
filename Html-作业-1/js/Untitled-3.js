// JavaScript Document
var bei = document.getElementById('tt1');
var audio = document.getElementById('audio');
var tag = true;
bei.onclick = function () {
	if (tag) {
		audio.play();
		/*图片默认为停止，点击图片后由默认的btn1变为btn，开始旋转*/
		document.getElementById("tt1").id = 'tt';
		tag = false;
	} else {
		audio.pause();
		document.getElementById("tt").id = 'tt1';
		tag = true;
	}
}
var music = new Array();
	music = ["动物世界","骆驼","绅士"];//歌单
	var num = 3;
	var name = document.getElementById("name");
 
	/*上一首*/
	var btn3 = document.getElementById("btn-pre");
	btn3.onclick = function(){
			num = (num +2)%3;
		 	audio.src =  "music/"+music[num]+".mp3";
			name.innerHTML = music[num];
			audio.play();
		}
		
	/*下一首*/
	var btn4 = document.getElementById("btn-next");
	btn4.onclick = function(){
		 	num = (num +1)%3;
		 	audio.src =  "music/"+music[num]+".mp3";
			name.innerHTML = music[num];
			audio.play();
		}
	/*播放完一首歌以后自动播放下一首*/
audio.addEventListener("ended",function(){
	down();
},false);