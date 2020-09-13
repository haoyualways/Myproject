// JavaScript Document<script type="text/javascript">
        var btn=document.getElementById('btn');
        var audio=document.getElementById('myaudio');
        var tag = true;
        btn.onclick = function(){
            if(tag){
                alert('关闭');
                audio.pause();
                tag = false;
            }else{
                alert('播放');
                audio.play();
                tag = true;
            }
        }