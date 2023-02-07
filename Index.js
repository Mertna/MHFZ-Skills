	let description = true;
	let edited = false;
	
	function onInit(){
		document.getElementById('searcher').onkeydown = function(event){ if (event.keyCode == 13) { searchSkills(document.getElementById('searcher').value); }};
		if (parseURL('skills') != null) {  direct(parseURL('skills')); };
		if (parseURL('search') != null) {  searchSkills(parseURL('search')); };
	};
	
	function parseURL(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	};
	
	function direct(table){
		table = table.toUpperCase();  let guide = true;
			 if (table.includes("PRIO")){ table="Priority"; guide = false; }
		else if (table.includes("POKE")){ table="Lance"; }
		else if (table.includes("BONK")){ table="Hammer"; }
		else if (table.includes("DOOT") || table.includes("HORN")){ table="HH"; }
		else if (table.includes("CHEESE")){ table="MS"; }
		else{
			switch (table){
				case "SNS": 	table = "SnS"; break;
				case "DB": case "DS": table = "DB"; break;
				case "GS": 		table = "GS"; break;
				case "LS": 		table = "LS"; break;
				case "HAMMER": 	table = "Hammer"; break;
				case "HH": 		table = "HH"; break;
				case "LANCE": 	table = "Lance"; break;
				case "GL": case "GUNLANCE": table = "GL"; break;
				case "TONFA": case "TONFAS": case "TONF": table = "Tonfa"; break;
				case "SWA": case "SA": case "SWITCHAXE": case "SWAXE": case "SWAGAXE": table = "SwA"; break;
				case "MS": 		table = "MS"; break;
				case "LBG": 	table = "LBG"; break;
				case "HBG": 	table = "HBG"; break;
				case "BOW": 	table = "Bow"; break;
				case "SUPPORT": case "SUPPORTS": case "SUP": case "SUPP": table = "Support"; break;
				case "Z": case "ZENITH": case "ZENITHS": table = "Z"; guide = false; break;
				case "ALL": table = "Base"; guide = false; break;
				default: table = "none"; guide = false; break;
			} if (table == "none") { guide = false; return; }
		} show(table, guide);
	};
	
	function show(x, guide) {
		document.getElementById('searcher').value = "";
		document.querySelectorAll("tr").forEach((tr) => { tr.style.display = ""; });
		if(guide == true)		{ document.getElementById('right').src = "./tables/weapons/" + x + ".html"; }
		else if (guide == false){ document.getElementById('right').src = "./tables/" + x + ".html"; };
		if (x == "Base" || x== "Z"){ document.getElementById('left').contentWindow.document.getElementById("classList").selectedIndex = 1; }
	};
	
	function selectClass() {
		let frame = document.getElementById('left');
		let selectBox = frame.contentWindow.document.getElementById("classList");
		var selectedClass = selectBox.options[selectBox.selectedIndex].value;
		show(selectedClass, true);
	};
	
	function searchSkills(input) {
		x = input;
		if(document.getElementById('right').attributes.src.value !="./tables/All.html" || edited==true){
			edited = false;
			document.getElementById('right').src="./tables/All.html";
			document.getElementById('left').contentWindow.document.getElementById("classList").selectedIndex = 1;
			 setTimeout(function(){searchSkills(x)}, 100);
		}
		else {
			edited = true;
			input = input.toUpperCase();
			document.getElementById('left').contentWindow.document.getElementById("classList").selectedIndex = 1;
			if (input != null && input != ""){
				let frame = document.getElementById('right');
				let seps = frame.contentWindow.document.querySelectorAll(".sep");
				seps.forEach((s) => {
					try{
						if (s.nextElementSibling.firstElementChild.innerText.toUpperCase().includes(input) == false ){
						var elem = s.nextElementSibling;
						while (elem) {
							if (elem.classList.contains('sep')) { elem.style.display = "none"; break; }
							else if (elem.firstElementChild.classList.contains('title')) { break; }
							else { elem.style.display = "none"; elem = elem.nextElementSibling; continue; }
						}}; 
					} catch{};
			});}
		}
	};

	function selectDesc() {
		var selectBox = document.getElementById("settingsList");  var selectedDesc = selectBox.options[selectBox.selectedIndex].value;
		if (selectedDesc == "enable_desc") { description = true;  }
		if (selectedDesc == "disable_desc"){ description = false; }
		switchDesc();
	};
	
	function switchDesc() {
		if (description == true) {
			document.getElementById('right').contentWindow.document.querySelectorAll(".intro").forEach((i) => { i.style.width = ""; });
			document.getElementById('right').contentWindow.document.querySelectorAll(".f").forEach((f) => { f.classList.replace('f', 'e'); });
			document.getElementById('right').contentWindow.document.querySelectorAll(".b").forEach((b) => { b.style.display = ""; }); return;
		}
		if (description == false){
			document.getElementById('right').contentWindow.document.querySelectorAll(".intro").forEach((i) => { i.style.width = "15%"; });
			document.getElementById('right').contentWindow.document.querySelectorAll(".e").forEach((e) => { e.classList.replace('e', 'f');});
			document.getElementById('right').contentWindow.document.querySelectorAll(".b").forEach((b) => { b.style.display = "none"; }); return;
		}
	};
	
	function menu() { document.getElementById('right').src=""; }	