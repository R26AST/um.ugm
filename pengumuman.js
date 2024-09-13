
var data = {
	"qrVal" : "SELAMAT"
};

var nama, no_peserta, tgl_lahir, bln_lahir, thn_lahir, prodi;

function sendData() {
	nama = sessionStorage.getItem('nama').toUpperCase(),
	no_peserta = sessionStorage.getItem('no'),
	tgl_lahir = sessionStorage.getItem('tgl'),
	bln_lahir = sessionStorage.getItem('bln'),
	thn_lahir = sessionStorage.getItem('thn'),
	prodi = sessionStorage.getItem('prodi');
	
	if (sessionStorage.getItem('pil') == '0') {
	accepted();
	}
	else if (sessionStorage.getItem('pil') == '1') {
	  rejected();
	}
}

function accepted() {
 var tmpl =
        '<div id="index-accepted" class="index-accepted">' +
        '<div class="index-accepted-header">' +
        '<img src="https://um.ugm.ac.id/pengumuman/img/ugm-putih.png" alt="Logo" class="index-accepted-header-icon">' +
        '<div class="index-accepted-header-title">' +
        '<h1 class="index-accepted-header-title-text">SELAMAT! ANDA DINYATAKAN LULUS SELEKSI</h1>' +
        '</div>' +
        '</div>' +
        '<div class="index-accepted-content">' +
        '<div class="index-accepted-content-upper">' +
        '<div class="index-accepted-content-upper-bio">' +
        '<span class="index-accepted-content-upper-bio-nisn" id="index-accepted-nisn">' + no_peserta + '</span>' +
        '<span class="index-accepted-content-upper-bio-name" id="index-accepted-name">' + nama + '</span>' +
        '<span class="index-accepted-content-upper-bio-program" id="index-accepted-program">' + prodi + '</span>' +
        // '<span class="index-accepted-content-upper-bio-university" id="index-accepted-university">UNIVERSITAS GADJAH MADA</span>'+
        '</div>' +
        //'<img class="index-accepted-content-upper-qr" alt="QR" id="index-accepted-qr" src="' + qr + '">' +
		//'<img class="index-accepted-content-upper-qr" alt="QR" id="index-accepted-qr" src="' + `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${data.qrVal}` + '"' +
        '<img class="index-accepted-content-upper-qr" alt="QR" id="index-accepted-qr" src="qr.png">' +
		'</div>' +
        '<div class="index-accepted-content-lower">' +
        '<div class="index-accepted-content-lower-column index-accepted-content-lower-column-25">' +
        '<div class="index-accepted-content-lower-column-field">' +
        '<span class="index-accepted-content-lower-column-field-caption">Tanggal Lahir</span>' +
        '<span class="index-accepted-content-lower-column-field-value" id="index-accepted-birthday">' + thn_lahir + ' - '+ bln_lahir + ' - ' + tgl_lahir + '</span>' +
        '</div>' +
        /* '<div class="index-accepted-content-lower-column-field">'+
            '<span class="index-accepted-content-lower-column-field-caption">Asal Sekolah</span>'+
            '<span class="index-accepted-content-lower-column-field-value" id="index-accepted-school">SMA NEGERI 04</span>'+
        '</div>'+ */
        '</div>' +
        /* '<div class="index-accepted-content-lower-column index-accepted-content-lower-column-25">'+
            '<div class="index-accepted-content-lower-column-field">'+
                '<span class="index-accepted-content-lower-column-field-caption">Kabupaten/Kota</span>'+
                '<span class="index-accepted-content-lower-column-field-value" id="index-accepted-regency">Kota Semarang</span>'+
            '</div>'+
            '<div class="index-accepted-content-lower-column-field">'+
                '<span class="index-accepted-content-lower-column-field-caption">Provinsi</span>'+
                '<span class="index-accepted-content-lower-column-field-value" id="index-accepted-province">Prov. Jawa Tengah</span>'+
            '</div>'+
        '</div>'+ */
        '<div class="index-accepted-content-lower-column index-accepted-content-lower-column-50">' +
        '<div class="index-accepted-content-lower-column-note">' +
        '<span class="index-accepted-content-lower-column-note-title">Informasi</span><ul>'+
        '<li>Prosedur Registrasi Calon Mahasiswa dapat dilihat <a href="http://ugm.id/pengumumanUM" target="_blank">di sini</a>.</li>'+
/*
	'<li>Registrasi melalui laman <a href="https://simaster.ugm.ac.id/" target="_blank" class="index-accepted-content-lower-column-note-link" id="index-accepted-link">https://simaster.ugm.ac.id/</a></li>'+
 */
 	'<li>Informasi hunian asrama bagi mahasiswa baru UGM <a href="https://residence.ugm.ac.id/" target="_blank" class="index-accepted-content-lower-column-note-link" id="index-accepted-link">https://residence.ugm.ac.id</a></li>'+
        '<li>Informasi tentang PPSMB <a href="http://ugm.id/PPSMBUGM/" target="_blank" class="index-accepted-content-lower-column-note-link" id="index-accepted-link">http://ugm.id/PPSMBUGM</a></li>'+
        '</ul>' +
        // '<span class="index-accepted-content-lower-column-note-title">Registrasi.</span>' +
        // '<span class="index-accepted-content-lower-column-note-subtitle">Silakan melakukan registrasi pada laman berikut:</span>' +
        // '<a href="https://simaster.ugm.ac.id/" target="_blank" class="index-accepted-content-lower-column-note-link" id="index-accepted-link">https://simaster.ugm.ac.id/</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="index-accepted-footer">' +
        /* '<p class="index-accepted-footer-paragraph">Status penerimaan Anda sebagai mahasiswa akan ditetapkan setelah PTN tujuan melakukan verifikasi data akademik (rapor dan/atau portofolio). Silakan Anda membaca peraturan tentang penerimaan mahasiswa baru di laman PTN tujuan. </p>' +
        '<p class="index-accepted-footer-paragraph">Khusus peserta KIP Kuliah, PTN tujuan juga dapat melakukan verifikasi data ekonomi dan/atau kunjungan ke tempat tinggal Anda sebelum menetapkan status penerimaan Anda.</p>' + */
        '</div>' +
		/*'<input type="button" class="index-form-content-footer-submit" id="index-form-kembali" value="KEMBALI" onclick="kembali()">' + */
        '</div>';
    document.getElementById('index').innerHTML = tmpl;
	
}

function rejected(data) {
    var tmpl =
        '<div id="index-rejected" class="index-rejected">' +
        '<div class="index-rejected-header">' +
        '<img src="https://um.ugm.ac.id/pengumuman/img/ugm-putih.png" alt="Logo" class="index-rejected-header-icon">' +
        '<div class="header-title">' +
        '<h1 class="index-rejected-header-title-text">ANDA DINYATAKAN TIDAK LULUS SELEKSI</h1>' +
        '<span class="index-rejected-header-title-sub">TERIMA KASIH TELAH MENGIKUTI UJIAN MASUK UNIVERSITAS GADJAH MADA.</span>' +
        ' </div>' +
        '</div>' +
        '<div class="index-rejected-content">' +
        '<div class="index-rejected-content-upper">' +
        '<div class="index-rejected-content-upper-bio">' +
        '<span class="index-rejected-content-upper-bio-nisn" id="index-rejected-nisn">' + no_peserta + '</span>' +
        '<span class="index-rejected-content-upper-bio-name" id="index-rejected-name">' + nama + '</span>' +
        '</div>' +
        '</div>' +
        '<div class="index-rejected-content-lower">' +
        '<div class="index-rejected-content-lower-column index-rejected-content-lower-column-25">' +
        '<div class="index-rejected-content-lower-column-field">' +
        '<span class="index-rejected-content-lower-column-field-caption">Tanggal Lahir</span>' +
        '<span class="index-rejected-content-lower-column-field-value" id="index-rejected-birthday">' + thn_lahir + ' - ' + bln_lahir + ' - ' + tgl_lahir + '</span>' +
        '</div>' +
        /* '<div class="index-rejected-content-lower-column-field">'+
            '<span class="index-rejected-content-lower-column-field-caption">Asal Sekolah</span>'+
            '<span class="index-rejected-content-lower-column-field-value" id="index-rejected-school">SMAS K KOLESE ST YUSUP</span>'+
        '</div>'+ */
        '</div>' +
        /* '<div class="index-rejected-content-lower-column index-rejected-content-lower-column-25">'+
            '<div class="index-rejected-content-lower-column-field">'+
                '<span class="index-rejected-content-lower-column-field-caption">Kabupaten/Kota</span>'+
                '<span class="index-rejected-content-lower-column-field-value" id="index-rejected-regency">Kota Malang</span>'+
            '</div>'+
            '<div class="index-rejected-content-lower-column-field">'+
                '<span class="index-rejected-content-lower-column-field-caption">Provinsi</span>'+
                '<span class="index-rejected-content-lower-column-field-value" id="index-rejected-province">Prov. Jawa Timur</span>'+
            '</div>'+
        '</div>'+ */
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    document.getElementById('index').innerHTML = tmpl;
}


function kembali() {
	//window.close();
	//window.location = 'pengumuman.html';
	window.location.reload();
	sessionStorage.clear();
}
