	let description = true;
	let menu = true;
	let search = "";
	
	function onInit(){
		document.getElementById('searcher').onkeydown = function(event){ if (event.keyCode == 13) { searchSkills(document.getElementById('searcher').value); }};
		if (parseURL('skills') != null) {  setTimeout(() => { direct(parseURL('skills'));}, 300); }
		else if (parseURL('search') != null) {  setTimeout(() => { searchSkills(parseURL('search'));}, 300); }
		else if (parseURL('note') != null) {  setTimeout(() => { searchNotes(parseURL('note'));}, 300); }
		else if (parseURL('notes') != null) {  setTimeout(() => { searchNotes(parseURL('notes'));}, 300); }
		else { document.getElementById('right').src = "./tables/default/Default.html"; }
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
		else if (table.includes("NOTE")){ table="Notes"; guide = false; }
		else if (table.includes("SIGIL")){ table="Sigil"; guide = false; }
		else if (table.includes("CUIS") || table.includes("GUILD")){ table="Cuisine"; guide = false; }
		else if (table.includes("CARAV")){ table="Caravan"; guide = false; }
		else if (table.includes("ACTIV") || table.includes("FEAT")){ table="Feature"; guide = false; }
		else if (table.includes("ROAD")){ table="Road"; guide = false; }
		else if (table.includes("POOG")){ table="Poogie"; guide = false; }
		else if (table.includes("HALK")){ table="Halk"; guide = false; }
		else if (table.includes("RAT")){ table="Rat"; guide = false; }
		
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
				case "SAF": case "SA": case "SAF": case "SWITCHAXE": case "SWAXE": case "SWAGAXE": table = "SAF"; break;
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
		else if (guide == false){ document.getElementById('right').src = "./tables/" + x + ".html";
								  document.getElementById('left').contentWindow.document.getElementById("classList").selectedIndex = 2;	};
		if (x != 'Poogie' && x!= 'Halk'){ document.getElementById('left').contentWindow.document.getElementById("petList").selectedIndex = 2; };
	};
	
	function selectTable(selectorID) {
		let frame = document.getElementById('left');
		let selectBox = frame.contentWindow.document.getElementById(selectorID);
		var selectedTable = selectBox.options[selectBox.selectedIndex].value;
		if(selectorID == 'classList'){ show(selectedTable, true); };
		if(selectorID == 'petList'){ show(selectedTable, false); };
	};
	
	function searchSkills(input) {
		search = input;
		if (document.getElementById('left').src == "./tables/menu/Menu.html"){
			document.getElementById('left').contentWindow.document.getElementById("classList").selectedIndex = 2;
			document.getElementById('left').contentWindow.document.getElementById("petList").selectedIndex = 2;
		}
		document.getElementById('right').src="./tables/All.html";
	};

	function searchNotes(input) {
		search = input.toUpperCase();
		if (document.getElementById('left').src == "./tables/menu/Menu.html"){
			document.getElementById('left').contentWindow.document.getElementById("classList").selectedIndex = 2;
			document.getElementById('left').contentWindow.document.getElementById("petList").selectedIndex = 2;
		}
		document.getElementById('right').src="./tables/Notes.html";
	};
	
	function getSearch() { return search; };

	function selectDesc() {
		var selectBox = document.getElementById("settingsList");  var selectedDesc = selectBox.options[selectBox.selectedIndex].value;
		if (selectedDesc == "enable_desc") { description = true;  }
		if (selectedDesc == "disable_desc"){ description = false; }
		switchDesc();
	};
	
	function switchDesc() {
		if (description == true) {
			document.getElementById('right').contentWindow.document.querySelectorAll("#menu1, #menu2, .rem, .b, .bsi, .bch, .nca, .tca, .caf, .nhr").forEach((m) => { m.style.display = ""; });
			document.getElementById('right').contentWindow.document.querySelectorAll(".intro").forEach((i) => { i.style.width = ""; });
			document.getElementById('right').contentWindow.document.querySelectorAll(".f").forEach((f) => { f.classList.replace('f', 'e'); });
			document.getElementById('right').contentWindow.document.querySelectorAll(".ich").forEach((ich) => { ich.classList.replace('ich', 'jch');});
			document.getElementById('right').contentWindow.document.querySelectorAll(".cca").forEach((cca) => { cca.classList.replace('cca', 'bca');});
			document.getElementById('right').contentWindow.document.querySelectorAll(".daf").forEach((daf) => { daf.classList.replace('daf', 'baf');});
			document.getElementById('right').contentWindow.document.querySelectorAll(".msi").forEach((msi) => { msi.classList.replace('msi', 'nsi');}); return;
		}
		if (description == false){
			document.getElementById('right').contentWindow.document.querySelectorAll("#menu1, #menu2, .rem, .b, .bsi, .bch, .nca, .tca, .caf, .nhr").forEach((m) => { m.style.display = "none"; });
			document.getElementById('right').contentWindow.document.querySelectorAll(".intro").forEach((i) => { i.style.width = "15%"; });
			document.getElementById('right').contentWindow.document.querySelectorAll(".e").forEach((e) => { e.classList.replace('e', 'f');});
			document.getElementById('right').contentWindow.document.querySelectorAll(".jch").forEach((jch) => { jch.classList.replace('jch', 'ich');});
			document.getElementById('right').contentWindow.document.querySelectorAll(".bca").forEach((bca) => { bca.classList.replace('bca', 'cca');});
			document.getElementById('right').contentWindow.document.querySelectorAll(".baf").forEach((baf) => { baf.classList.replace('baf', 'daf');});
			document.getElementById('right').contentWindow.document.querySelectorAll(".nsi").forEach((nsi) => { nsi.classList.replace('nsi', 'msi');}); return;
		}
	};
	
	function toggleMenu() {
		if (menu == true){
			menu = false;
			document.getElementById('left').contentWindow.document.getElementById("menu").style.display = "none";
			document.getElementById('left').contentWindow.document.getElementById("toggle").style.display = "";
			document.getElementById('left').style.width="1%";
			document.getElementById('right').style.width="98.6%";
		} else {
			menu = true;
			document.getElementById('left').contentWindow.document.getElementById("menu").style.display = "";
			document.getElementById('left').contentWindow.document.getElementById("toggle").style.display = "none";
			document.getElementById('left').style.width="10%";
			document.getElementById('right').style.width="89.6%";
		}
	}
	
	function toggleTitle(title) {
		if (!title.classList.contains("toggler")){
			var elem = title.nextElementSibling; var action = false;
			if (elem.classList.contains("sep")){ elem = elem.nextElementSibling; }
			while (elem) {
				if (elem.firstElementChild != null && elem.firstElementChild.classList.contains("title")) { break; }
				else if(elem.style.display != "none"){ elem.classList.add("toggle"); elem = elem.nextElementSibling; action = true; continue; }
				else{ elem = elem.nextElementSibling; continue; }
			}
			if (action == true){ title.classList.add("toggler"); title.firstElementChild.classList.add("toggled"); }
		;}
		else {
			title.classList.remove("toggler"); title.firstElementChild.classList.remove("toggled");
			var elem = title.nextElementSibling;
			while (elem) {
				if (elem.firstElementChild != null && elem.firstElementChild.classList.contains("title")) { break; }
				else { elem.classList.remove("toggle"); elem = elem.nextElementSibling; continue; }
		}}
	}

	function toggleNote(color, checker) {
		var elem = document.getElementById('right').contentWindow.document.getElementById("startingnotes");
		if (checker.checked == false) {
			elem = elem.nextElementSibling;
			while (elem) {
				if (elem.firstElementChild != null && elem.firstElementChild.classList.contains("title")) { break; }
				else if(elem.classList.contains(color)){ elem.classList.add("toggle"); elem = elem.nextElementSibling; if (elem != null) {elem.classList.add("toggle"); elem = elem.nextElementSibling; continue; } else break; }
				else{ elem = elem.nextElementSibling; continue; }
			}
		}
		else {
			elem = elem.nextElementSibling;
			while (elem) {
				if (elem.firstElementChild != null && elem.firstElementChild.classList.contains("title")) { break; }
				else if(elem.classList.contains(color)) { elem.classList.remove("toggle"); elem = elem.nextElementSibling; if (elem != null) { elem.classList.remove("toggle"); elem = elem.nextElementSibling; continue; } else break; }
				else{ elem = elem.nextElementSibling; continue; }
		}
			document.getElementById('right').contentWindow.document.querySelectorAll("input").forEach((i) => { 
			if(i.checked == false) { 
				elem = document.getElementById('right').contentWindow.document.getElementById("startingnotes"); elem = elem.nextElementSibling;
				while (elem) {
					if (elem.firstElementChild != null && elem.firstElementChild.classList.contains("title")) { break; }
					else if(elem.classList.contains(i.id)){ elem.classList.add("toggle"); elem = elem.nextElementSibling; if (elem != null) {elem.classList.add("toggle"); elem = elem.nextElementSibling; continue; } else break; }
					else{ elem = elem.nextElementSibling; continue; }
				}
				}
			})
		}}
	
