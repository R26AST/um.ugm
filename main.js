/*window.onload = function () {
	var jurusan = document.getElementById("jurusan"),
	prodi = document.getElementById("prodi");
	for (var jurusan in stateObject) {
		jurusan.options[jurusan.opstion.length] = new Option(jurusan, jurusan);
	}
	
	jurusan.onchange = function () {
		prodi.length = 1;
		if(this.selectedIndex < 1) return;
		for (var prodi in stateObject[this.value]) {
			prodi.options[prodi.opstion.length] = new Option(prodi, prodi);
		}
	}
}*

function pilih (jurusan, prodi) {
	var jurusan = document.getElementById(jurusan),
	prodi = document.getElementById(prodi);
	
	if(jurusan.value == "SAINTEK"){
		var optionArray = [
            "BIOLOGI",
            "FARMASI",
            "GEOGRAFI LINGKUNGAN",
            "KARTOGRAFI DAN PENGINDERAAN JAUH",
            "PEMBANGUNAN WILAYAH",
            "KEDOKTERAN",
            "ILMU KEPERAWATAN",
            "GIZI KESEHATAN",
            "KEDOKTERAN GIGI",
            "KEDOKTERAN HEWAN",
            "FISIKA",
            "KIMIA",
            "MATEMATIKA",
            "ILMU KOMPUTER",
            "STATISTIKA",
            "GEOFISIKA",
            "ELEKTRONIKA DAN INSTRUMENTASI",
            "AGRONOMI",
            "ILMU TANAH",
            "EKONOMI PERTANIAN DAN AGRIBISNIS",
            "PROTEKSI TANAMAN (ILMU HAMA DAN PENYAKIT TUMBUHAN)",
            "PENYULUHAN DAN KOMUNIKASI PERTANIAN",
            "AKUAKULTUR (BUDIDAYA PERIKANAN)",
            "TEKNOLOGI HASIL PERIKANAN",
            "MANAJEMEN SUMBERDAYA AKUATIK (MANAJEMEN SUMBER DAYA PERIKANAN)",
            "MIKROBIOLOGI PERTANIAN",
            "ILMU DAN INDUSTRI PETERNAKAN",
            "ARSITEKTUR",
            "PERENCANAAN WILAYAH DAN KOTA",
            "TEKNIK GEODESI",
            "TEKNIK GEOLOGI",
            "TEKNIK KIMIA",
            "TEKNIK ELEKTRO",
            "TEKNIK MESIN",
            "TEKNIK SIPIL",
            "TEKNIK NUKLIR",
            "TEKNIK FISIKA",
            "TEKNIK INDUSTRI",
            "TEKNIK PERTANIAN",
            "TEKNOLOGI PANGAN DAN HASIL PERTANIAN",
            "TEKNOLOGI INDUSTRI PERTANIAN",
            "HIGIENE GIGI",
            "KEHUTANAN",
            "TEKNOLOGI INFORMASI",
          ];
	}
	else if(jurusan.value == 'SOSHUM') {
		var optionArray = [
            "ILMU EKONOMI",
            "MANAJEMEN",
            "AKUNTANSI",
            "FILSAFAT",
            "HUKUM",
            "ANTROPOLOGI BUDAYA",
            "ARKEOLOGI",
            "SEJARAH",
            "SASTRA ARAB",
            "BAHASA DAN SASTRA INDONESIA",
            "SASTRA INGGRIS",
            "SASTRA JAWA",
            "SASTRA PRANCIS",
            "SASTRA JEPANG",
            "BAHASA DAN KEBUDAYAAN KOREA",
            "MANAJEMEN DAN KEBIJAKAN PUBLIK",
            "ILMU HUBUNGAN INTERNASIONAL",
            "POLITIK DAN PEMERINTAHAN",
            "PEMBANGUNAN SOSIAL DAN KESEJAHTERAAN",
            "ILMU KOMUNIKASI",
            "SOSIOLOGI",
            "PSIKOLOGI",
            "PARIWISATA",
          ];
	}
	
	for (var option in optionArray) {
		var pair = optionArray[option],
		newoption = document.createElement("option");
		
		newoption.value = pair;
		newoption.innerHTML = pair;
		prodi.options.add(newoption);
	}
}*/


/*window.onload = function () {
	const selectJurusan = document.getElementById('jurusan'),
	selectProdi = document.getElementById('prodi'),
	selects = document.querySelectorAll('select');;
	
	selectProdi.disabled = true;
	
	selects.forEach(select => {
		if(select.disabled == true) {
			select.style.cursor = "auto";
		}
		else  {
			select.style.cursor = "pointer";
		}
	});
	
	for(let jurusan in pilihan){
		selectJurusan.options[selectJurusan.options.length] = new Option(jurusan, jurusan); 
	}
	
	selectJurusan.onchange = (e) => {
		selectProdi.disabled = false;
		
		/*selects.forEach(select => {
		if(select.disabled == true) {
			select.style.cursor = "auto";
		}
		else  {
			select.style.cursor = "pointer";
		}
	});*
	
	selectProdi.length = 1;
	
	//let prodis = pilihan[selectJurusan.value][e.target.value];
	//let z = pilihan[selectJurusan.value][this.value];
	
	for(let prodi in pilihan[this.value]){
		//for(let i = 0; i < z.length; i++) {
		//selectProdi.options[selectProdi.options.length] = new Option(z[i], z[i]); 
		//selectProdi.options[selectProdi.options.length] = new Option(prodi[, prodi); 
		selectProdi.appendChild(new Option(pilihan[this.value][prodi], prodi));
	}
		
	}
}*/

window.onload = function() {
	let nama = document.getElementById('nama_peserta');
	
	nama_peserta.onchange = function() {
		sessionStorage.setItem("nama", nama.value); 
	}
	
	let no_peserta = document.getElementById('no_peserta');
	
	no_peserta.onchange = function() {
		sessionStorage.setItem("no", no_peserta.value); 
	}
	
	let tgl_lahir = document.getElementById('lahir_day'),
		bln_lahir = document.getElementById('lahir_month'),
		thn_lahir = document.getElementById('lahir_year');
	
	tgl_lahir.onchange = function() {
		sessionStorage.setItem("tgl", tgl_lahir.value); 
	}
	bln_lahir.onchange = function() {
		sessionStorage.setItem("bln", bln_lahir.value);
	}
	thn_lahir.onchange = function() {
		sessionStorage.setItem("thn", thn_lahir.value); 
	}
	
	const selectJurusan = document.getElementById('jurusan'),
	selectProdi = document.getElementById('prodi'),
	selects = document.querySelectorAll('select');;
  
  selectProdi.disabled = true;
  
  for (var x in pilihan) {
    selectJurusan.appendChild(new Option(x, x));
  }
  
  selectJurusan.onchange = function() {    //empty Chapters- and Topics- dropdowns  
	selectProdi.disabled = false;
    //subjectSel.length = 1;   
    selectProdi.length = 1;
    //display correct values
    for (var y in pilihan[this.value]) {
      selectProdi.appendChild(new Option(pilihan[this.value][y],y));
	    
    }
	
  }
  
  selectProdi.onchange = function() {
	var pilihanProdi = $('#prodi').find(":selected").text();
	sessionStorage.setItem("prodi", pilihanProdi); 
  }

}

