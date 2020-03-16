	function Scroll(){
		var top = document.getElementById('head1');
		var logo1 = document.getElementById('logo1');
		var logo2 = document.getElementById('logo2')
		var ypos = window.pageYOffset;
		if (ypos > 100) { /*jika letak y lebih dari 300 */
			top.style.height = "auto";
			top.style.background = "#DF652C";
			logo1.style.opacity = "0";
			logo2.style.opacity = "1";
		}
		else{
			top.style.height = "auto";
			top.style.background = "rgba(0,0,0,0.3)";
			logo1.style.opacity = "1";
			logo2.style.opacity = "0";
		}
	}
		window.addEventListener("scroll",Scroll);