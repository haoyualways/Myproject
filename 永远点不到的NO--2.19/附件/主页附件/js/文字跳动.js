function f1(){
			alert("Good，keep working on your dreams!!!") 
		} 
		var flag=1;
		function f(){ 
			var Bn = document.getElementById('Bn');
			var aWidth= document.body.clientWidth || document.documentElement.clientWidth;
			var aHeight= document.body.clientHeight || document.documentElement.clientHeight;
			var sJs1=Math.floor(Math.random()*aHeight);
			var sJs2=Math.floor(Math.random()*aWidth);
			if(flag==1){
				Bn.style.top=sJs1 + 'px';
				Bn.style.left=sJs2+'px'; 
				flag=2;
			}else if(flag==2){
				Bn.style.top=sJs1+'px';
				Bn.style.left=sJs2+'px';
				flag=3;
			}else if(flag==3){
				Bn.style.top=300 + 'px';
				Bn.style.left=886 + 'px';
				flag=4; 
			}else if(flag==4){
				Bn.style.top=300 + 'px';
				Bn.style.left=960 + 'px';
				flag=1;
			}
		}
		function f2(){
		alert('你竟然点到了，厉害');
		} 