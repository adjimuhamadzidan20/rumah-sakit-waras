// button next data pasien
let next = document.getElementById('data');
next.addEventListener('click', function() {

	// memanggil bagian menu poli
	let poli = document.getElementsByClassName('poli')[0];
	poli.style.display = 'block';

	// menyembunyikan bagian data pasien
	let data = document.getElementsByClassName('data-pasien')[0];
	data.style.display = 'none';
});

// pilihan poli
// button next menu poli
let btnPoli = document.getElementById('poli-btn');
btnPoli.onclick = function() {

	// inputan pilihan poli
	let pilihPoli = parseInt(document.getElementById('poli').value);

	// poli gigi
	if(pilihPoli == 1) {

		// memanggil bagian pilih dokter
		let dokter = document.getElementsByClassName('dokter')[0];
		dokter.style.display = 'block';

		// menyembunyikan bagian menu poli
		let poli = document.getElementsByClassName('poli')[0];
		poli.style.display = 'none';

		// button next pilih dokter
		let btnDokter = document.getElementById('dokter-btn');
		btnDokter.onclick = function() {

			// inputan pilihan dokter
			let pilihDokter = parseInt(document.getElementById('dokter').value);

			// drg. ahmad afandi
			if(pilihDokter == 1) {

				// menampilkan bagian keterangan
				var keterangan = document.getElementsByClassName('keterangan')[0];
				keterangan.style.display = 'block';

				// memanggil bagian pilih dokter
				let dokter = document.getElementsByClassName('dokter')[0];
				dokter.style.display = 'none';

				// button next keterangan
				let btnKeterangan = document.getElementById('keterangan-btn');
				btnKeterangan.onclick = function() {

					// input bagian keterangan
					let descKet = document.getElementById('keterangan').value;

					// memanggil bagian administrasi
					let administrasi = document.getElementsByClassName('administrasi')[0];
					administrasi.style.display = 'block';

					// menyembunyikan bagian keterangan
					let keterangan = document.getElementsByClassName('keterangan')[0];
					keterangan.style.display = 'none';

					// button administrasi
					let btnAdmin = document.getElementById('admin-btn');
					btnAdmin.onclick = function() {

						// input administrasi
						let daftar 	= parseInt(document.getElementById('biaya').value);
						let obat 	= parseInt(document.getElementById('obat').value);
						let vitamin = parseInt(document.getElementById('vitamin').value);
						let dokter 	= parseInt(document.getElementById('periksa').value);

						// jumlah total
						let total = daftar + obat + vitamin + dokter; 

						// input nama pasien
						let namaPasien = document.getElementById('nama').value;

						// nama poli
						let poli1 = 'Gigi';

						// nama dokter
						let dok1 = 'drg. ahmad afandi';

						alert(`poli ${poli1}\ndokter ${dok1}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}`);
						alert(`salam sehat ${namaPasien} dari rumah sakit waras`);

						let hasil = document.getElementsByClassName('hasil')[0];
						hasil.style.display = 'block';

						let administrasi = document.getElementsByClassName('administrasi')[0];
						administrasi.style.display = 'none';

						let desc = document.getElementsByClassName('desc')[0];
						desc.innerHTML = `poli ${poli1}\ndokter ${dok1}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}\nsalam sehat ${namaPasien} dari rumah sakit waras`;
						desc.style.textTransform = 'capitalize';
						desc.style.lineHeight = '33px';
						desc.style.fontFamily = 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif';
					}
				} 
			}

			// dr. arid wicaksono
			else if(pilihDokter == 2) {

				// menampilkan bagian keterangan
				let keterangan = document.getElementsByClassName('keterangan')[0];
				keterangan.style.display = 'block';

				// memanggil bagian pilih dokter
				let dokter = document.getElementsByClassName('dokter')[0];
				dokter.style.display = 'none';

				// button next keterangan
				let btnKeterangan = document.getElementById('keterangan-btn');
				btnKeterangan.onclick = function() {

					// input bagian keterangan
					let descKet = document.getElementById('keterangan').value;

					// memanggil bagian administrasi
					let administrasi = document.getElementsByClassName('administrasi')[0];
					administrasi.style.display = 'block';

					// menyembunyikan bagian keterangan
					let keterangan = document.getElementsByClassName('keterangan')[0];
					keterangan.style.display = 'none';

					// button administrasi
					let btnAdmin = document.getElementById('admin-btn');
					btnAdmin.onclick = function() {
						// input administrasi
						let daftar 	= parseInt(document.getElementById('biaya').value);
						let obat 	= parseInt(document.getElementById('obat').value);
						let vitamin = parseInt(document.getElementById('vitamin').value);
						let dokter 	= parseInt(document.getElementById('periksa').value);

						// jumlah total
						let total = daftar + obat + vitamin + dokter;

						// input nama pasien
						let namaPasien = document.getElementById('nama').value;

						// nama poli
						let poli1 = 'Gigi';

						// nama dokter
						let dok2 = 'dr. arid wicaksono';

						alert(`poli ${poli1}\ndokter ${dok2}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}`);
						alert(`salam sehat ${namaPasien} dari rumah sakit waras`);

						let hasil = document.getElementsByClassName('hasil')[0];
						hasil.style.display = 'block';

						let administrasi = document.getElementsByClassName('administrasi')[0];
						administrasi.style.display = 'none';

						let desc = document.getElementsByClassName('desc')[0];
						desc.innerHTML = `poli ${poli1}\ndokter ${dok2}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}\nsalam sehat ${namaPasien} dari rumah sakit waras`;
						desc.style.textTransform = 'capitalize';
						desc.style.lineHeight = '33px';
						desc.style.fontFamily = 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif';
					}
				} 
			}

			// dr alfia putri
			else if(pilihDokter == 3) {

				// menampilkan bagian keterangan
				let keterangan = document.getElementsByClassName('keterangan')[0];
				keterangan.style.display = 'block';

				// memanggil bagian pilih dokter
				let dokter = document.getElementsByClassName('dokter')[0];
				dokter.style.display = 'none';

				// button next keterangan
				let btnKeterangan = document.getElementById('keterangan-btn');
				btnKeterangan.onclick = function() {

					// input bagian keterangan
					let descKet = document.getElementById('keterangan').value;

					// memanggil bagian administrasi
					let administrasi = document.getElementsByClassName('administrasi')[0];
					administrasi.style.display = 'block';

					// menyembunyikan bagian keterangan
					let keterangan = document.getElementsByClassName('keterangan')[0];
					keterangan.style.display = 'none';

					// button administrasi
					let btnAdmin = document.getElementById('admin-btn');
					btnAdmin.onclick = function() {
						// input administrasi
						let daftar 	= parseInt(document.getElementById('biaya').value);
						let obat 	= parseInt(document.getElementById('obat').value);
						let vitamin = parseInt(document.getElementById('vitamin').value);
						let dokter 	= parseInt(document.getElementById('periksa').value);

						// jumlah total
						let total = daftar + obat + vitamin + dokter;

						// input nama pasien
						let namaPasien = document.getElementById('nama').value;

						// nama poli
						let poli1 = 'Gigi';

						// nama dokter
						let dok3 = 'dr. alfia putri';

						alert(`poli ${poli1}\ndokter ${dok3}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}`);
						alert(`salam sehat ${namaPasien} dari rumah sakit waras`);

						let hasil = document.getElementsByClassName('hasil')[0];
						hasil.style.display = 'block';

						let administrasi = document.getElementsByClassName('administrasi')[0];
						administrasi.style.display = 'none';

						let desc = document.getElementsByClassName('desc')[0];
						desc.innerHTML = `poli ${poli1}\ndokter ${dok3}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}\nsalam sehat ${namaPasien} dari rumah sakit waras`;
						desc.style.textTransform = 'capitalize';
						desc.style.lineHeight = '33px';
						desc.style.fontFamily = 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif';
					}
				} 
			}

			else {
				alert('Maaf, inputan tidak sesuai');
			}
		}
	}

	// poli anak
	else if(pilihPoli == 2) {

		// memanggil bagian pilih dokter
		let dokter = document.getElementsByClassName('dokter')[0];
		dokter.style.display = 'block';

		// menyembunyikan bagian menu poli
		let poli = document.getElementsByClassName('poli')[0];
		poli.style.display = 'none';

		// button next pilih dokter
		let btnDokter = document.getElementById('dokter-btn');
		btnDokter.onclick = function() {

			// inputan pilihan dokter
			let pilihDokter = parseInt(document.getElementById('dokter').value);

			// 'drg. ahmad afandi'
			if(pilihDokter == 1) {
			
				// menampilkan bagian keterangan
				let keterangan = document.getElementsByClassName('keterangan')[0];
				keterangan.style.display = 'block';

				// memanggil bagian pilih dokter
				let dokter = document.getElementsByClassName('dokter')[0];
				dokter.style.display = 'none';

				// button next keterangan
				let btnKeterangan = document.getElementById('keterangan-btn');
				btnKeterangan.onclick = function() {

					// input bagian keterangan
					let descKet = document.getElementById('keterangan').value;

					// memanggil bagian administrasi
					let administrasi = document.getElementsByClassName('administrasi')[0];
					administrasi.style.display = 'block';

					// menyembunyikan bagian keterangan
					let keterangan = document.getElementsByClassName('keterangan')[0];
					keterangan.style.display = 'none';

					// button administrasi
					let btnAdmin = document.getElementById('admin-btn');
					btnAdmin.onclick = function() {

						// input administrasi
						let daftar 	= parseInt(document.getElementById('biaya').value);
						let obat 	= parseInt(document.getElementById('obat').value);
						let vitamin = parseInt(document.getElementById('vitamin').value);
						let dokter 	= parseInt(document.getElementById('periksa').value);

						// jumlah total
						let total = daftar + obat + vitamin + dokter;

						// input nama pasien
						let namaPasien = document.getElementById('nama').value;

						// nama poli
						let poli2 = 'Anak';

						// nama dokter
						let dok1 = 'drg. ahmad affandi';

						alert(`poli ${poli2}\ndokter ${dok1}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}`);
						alert(`salam sehat ${namaPasien} dari rumah sakit waras`);

						let hasil = document.getElementsByClassName('hasil')[0];
						hasil.style.display = 'block';

						let administrasi = document.getElementsByClassName('administrasi')[0];
						administrasi.style.display = 'none';

						let desc = document.getElementsByClassName('desc')[0];
						desc.innerHTML = `poli ${poli2}\ndokter ${dok1}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}\nsalam sehat ${namaPasien} dari rumah sakit waras`;
						desc.style.textTransform = 'capitalize';
						desc.style.lineHeight = '33px';
						desc.style.fontFamily = 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif';
					}
				} 
			}

			// dr. arid wicaksono
			else if(pilihDokter == 2) {

				// menampilkan bagian keterangan
				let keterangan = document.getElementsByClassName('keterangan')[0];
				keterangan.style.display = 'block';

				// memanggil bagian pilih dokter
				let dokter = document.getElementsByClassName('dokter')[0];
				dokter.style.display = 'none';

				// button next keterangan
				let btnKeterangan = document.getElementById('keterangan-btn');
				btnKeterangan.onclick = function() {

					// input bagian keterangan
					let descKet = document.getElementById('keterangan').value;

					// memanggil bagian administrasi
					let administrasi = document.getElementsByClassName('administrasi')[0];
					administrasi.style.display = 'block';

					// menyembunyikan bagian keterangan
					let keterangan = document.getElementsByClassName('keterangan')[0];
					keterangan.style.display = 'none';

					// button administrasi
					let btnAdmin = document.getElementById('admin-btn');
					btnAdmin.onclick = function() {
						// input administrasi
						let daftar 	= parseInt(document.getElementById('biaya').value);
						let obat 	= parseInt(document.getElementById('obat').value);
						let vitamin = parseInt(document.getElementById('vitamin').value);
						let dokter 	= parseInt(document.getElementById('periksa').value);

						// jumlah total
						let total = daftar + obat + vitamin + dokter;

						// input nama pasien
						let namaPasien = document.getElementById('nama').value;

						// nama poli
						let poli2 = 'Anak';

						// nama dokter
						let dok2 = 'dr. arid wicaksono';

						alert(`poli ${poli2}\ndokter ${dok2}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}`);
						alert(`salam sehat ${namaPasien} dari rumah sakit waras`);

						let hasil = document.getElementsByClassName('hasil')[0];
						hasil.style.display = 'block';

						let administrasi = document.getElementsByClassName('administrasi')[0];
						administrasi.style.display = 'none';

						let desc = document.getElementsByClassName('desc')[0];
						desc.innerHTML = `poli ${poli2}\ndokter ${dok2}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}\nsalam sehat ${namaPasien} dari rumah sakit waras`;
						desc.style.textTransform = 'capitalize';
						desc.style.lineHeight = '33px';
						desc.style.fontFamily = 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif';
					}
				} 
			}

			// dr alfia putri
			else if(pilihDokter == 3) {

				// menampilkan bagian keterangan
				let keterangan = document.getElementsByClassName('keterangan')[0];
				keterangan.style.display = 'block';

				// memanggil bagian pilih dokter
				let dokter = document.getElementsByClassName('dokter')[0];
				dokter.style.display = 'none';

				// button next keterangan
				let btnKeterangan = document.getElementById('keterangan-btn');
				btnKeterangan.onclick = function() {

					// input bagian keterangan
					let descKet = document.getElementById('keterangan').value;

					// memanggil bagian administrasi
					let administrasi = document.getElementsByClassName('administrasi')[0];
					administrasi.style.display = 'block';

					// menyembunyikan bagian keterangan
					let keterangan = document.getElementsByClassName('keterangan')[0];
					keterangan.style.display = 'none';

					// button administrasi
					let btnAdmin = document.getElementById('admin-btn');
					btnAdmin.onclick = function() {
						// input administrasi
						let daftar 	= parseInt(document.getElementById('biaya').value);
						let obat 	= parseInt(document.getElementById('obat').value);
						let vitamin = parseInt(document.getElementById('vitamin').value);
						let dokter 	= parseInt(document.getElementById('periksa').value);

						// jumlah total
						let total = daftar + obat + vitamin + dokter;

						// input nama pasien
						let namaPasien = document.getElementById('nama').value;

						// nama poli
						let poli2 = 'Anak';

						// nama dokter
						let dok3 = 'dr alfia putri';

						alert(`poli ${poli2}\ndokter ${dok3}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}`);
						alert(`salam sehat ${namaPasien} dari rumah sakit waras`);

						let hasil = document.getElementsByClassName('hasil')[0];
						hasil.style.display = 'block';

						let administrasi = document.getElementsByClassName('administrasi')[0];
						administrasi.style.display = 'none';

						let desc = document.getElementsByClassName('desc')[0];
						desc.innerHTML = `poli ${poli2}\ndokter ${dok3}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}\nsalam sehat ${namaPasien} dari rumah sakit waras`;
						desc.style.textTransform = 'capitalize';
						desc.style.lineHeight = '33px';
						desc.style.fontFamily = 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif';
					}
				} 
			}

			else {
				alert('Maaf, inputan tidak sesuai');
			}
		}
	}

	// poli umum
	else if(pilihPoli == 3) {

		// memanggil bagian pilih dokter
		let dokter = document.getElementsByClassName('dokter')[0];
		dokter.style.display = 'block';

		// menyembunyikan bagian menu poli
		let poli = document.getElementsByClassName('poli')[0];
		poli.style.display = 'none';

		// button next pilih dokter
		let btnDokter = document.getElementById('dokter-btn');
		btnDokter.onclick = function() {

			// inputan pilihan dokter
			let pilihDokter = parseInt(document.getElementById('dokter').value);

			// 'drg. ahmad afandi'
			if(pilihDokter == 1) {

				// menampilkan bagian keterangan
				let keterangan = document.getElementsByClassName('keterangan')[0];
				keterangan.style.display = 'block';

				// memanggil bagian pilih dokter
				let dokter = document.getElementsByClassName('dokter')[0];
				dokter.style.display = 'none';

				// button next keterangan
				let btnKeterangan = document.getElementById('keterangan-btn');
				btnKeterangan.onclick = function() {

					// input bagian keterangan
					let descKet = document.getElementById('keterangan').value;

					// memanggil bagian administrasi
					let administrasi = document.getElementsByClassName('administrasi')[0];
					administrasi.style.display = 'block';

					// menyembunyikan bagian keterangan
					let keterangan = document.getElementsByClassName('keterangan')[0];
					keterangan.style.display = 'none';

					// button administrasi
					let btnAdmin = document.getElementById('admin-btn');
					btnAdmin.onclick = function() {

						// input administrasi
						let daftar 	= parseInt(document.getElementById('biaya').value);
						let obat 	= parseInt(document.getElementById('obat').value);
						let vitamin = parseInt(document.getElementById('vitamin').value);
						let dokter 	= parseInt(document.getElementById('periksa').value);

						// jumlah total
						let total = daftar + obat + vitamin + dokter;

						// input nama pasien
						let namaPasien = document.getElementById('nama').value;

						// nama poli
						let poli3 = 'Umum';

						// nama dokter
						let dok1 = 'drg. ahmad afandi';

						alert(`poli ${poli3}\ndokter ${dok1}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}`);
						alert(`salam sehat ${namaPasien} dari rumah sakit waras`);

						let hasil = document.getElementsByClassName('hasil')[0];
						hasil.style.display = 'block';

						let administrasi = document.getElementsByClassName('administrasi')[0];
						administrasi.style.display = 'none';

						let desc = document.getElementsByClassName('desc')[0];
						desc.innerHTML = `poli ${poli3}\ndokter ${dok1}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}\nsalam sehat ${namaPasien} dari rumah sakit waras`;
						desc.style.textTransform = 'capitalize';
						desc.style.lineHeight = '33px';
						desc.style.fontFamily = 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif';
					}
				} 
			}

			// dr. arid wicaksono
			else if(pilihDokter == 2) {

				// menampilkan bagian keterangan
				let keterangan = document.getElementsByClassName('keterangan')[0];
				keterangan.style.display = 'block';

				// memanggil bagian pilih dokter
				let dokter = document.getElementsByClassName('dokter')[0];
				dokter.style.display = 'none';

				// button next keterangan
				let btnKeterangan = document.getElementById('keterangan-btn');
				btnKeterangan.onclick = function() {

					// input bagian keterangan
					let descKet = document.getElementById('keterangan').value;

					// memanggil bagian administrasi
					let administrasi = document.getElementsByClassName('administrasi')[0];
					administrasi.style.display = 'block';

					// menyembunyikan bagian keterangan
					let keterangan = document.getElementsByClassName('keterangan')[0];
					keterangan.style.display = 'none';

					// button administrasi
					let btnAdmin = document.getElementById('admin-btn');
					btnAdmin.onclick = function() {

						// input administrasi
						let daftar 	= parseInt(document.getElementById('biaya').value);
						let obat 	= parseInt(document.getElementById('obat').value);
						let vitamin = parseInt(document.getElementById('vitamin').value);
						let dokter 	= parseInt(document.getElementById('periksa').value);

						// jumlah total
						let total = daftar + obat + vitamin + dokter;

						// input nama pasien
						let namaPasien = document.getElementById('nama').value;

						// nama poli
						let poli3 = 'Umum';

						// nama dokter
						let dok2 = 'dr. arid wicaksono';

						alert(`poli ${poli3}\ndokter ${dok2}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}`);
						alert(`salam sehat ${namaPasien} dari rumah sakit waras`);

						let hasil = document.getElementsByClassName('hasil')[0];
						hasil.style.display = 'block';

						let administrasi = document.getElementsByClassName('administrasi')[0];
						administrasi.style.display = 'none';

						let desc = document.getElementsByClassName('desc')[0];
						desc.innerHTML = `poli ${poli3}\ndokter ${dok2}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}\nsalam sehat ${namaPasien} dari rumah sakit waras`;
						desc.style.textTransform = 'capitalize';
						desc.style.lineHeight = '33px';
						desc.style.fontFamily = 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif';
					}
				} 
			}

			// dr alfia putri
			else if(pilihDokter == 3) {

				// menampilkan bagian keterangan
				let keterangan = document.getElementsByClassName('keterangan')[0];
				keterangan.style.display = 'block';

				// memanggil bagian pilih dokter
				let dokter = document.getElementsByClassName('dokter')[0];
				dokter.style.display = 'none';

				// button next keterangan
				let btnKeterangan = document.getElementById('keterangan-btn');
				btnKeterangan.onclick = function() {

					// input bagian keterangan
					let descKet = document.getElementById('keterangan').value;

					// memanggil bagian administrasi
					let administrasi = document.getElementsByClassName('administrasi')[0];
					administrasi.style.display = 'block';

					// menyembunyikan bagian keterangan
					let keterangan = document.getElementsByClassName('keterangan')[0];
					keterangan.style.display = 'none';

					// button administrasi
					let btnAdmin = document.getElementById('admin-btn');
					btnAdmin.onclick = function() {
						// input administrasi
						let daftar 	= parseInt(document.getElementById('biaya').value);
						let obat 	= parseInt(document.getElementById('obat').value);
						let vitamin = parseInt(document.getElementById('vitamin').value);
						let dokter 	= parseInt(document.getElementById('periksa').value);

						// jumlah total
						let total = daftar + obat + vitamin + dokter;

						// input nama pasien
						let namaPasien = document.getElementById('nama').value;

						// nama poli
						let poli3 = 'Umum';

						// nama dokter
						let dok3 = 'dr alfia putri';

						alert(`poli ${poli3}\ndokter ${dok3}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}`);
						alert(`salam sehat ${namaPasien} dari rumah sakit waras`);

						let hasil = document.getElementsByClassName('hasil')[0];
						hasil.style.display = 'block';

						let administrasi = document.getElementsByClassName('administrasi')[0];
						administrasi.style.display = 'none';

						let desc = document.getElementsByClassName('desc')[0];
						desc.innerHTML = `poli ${poli3}\ndokter ${dok3}\nketerangan ${descKet}\ntotal biaya yang dibayar pasien Rp. ${total.toFixed(3)}\nsalam sehat ${namaPasien} dari rumah sakit waras`;
						desc.style.textTransform = 'capitalize';
						desc.style.lineHeight = '33px';
						desc.style.fontFamily = 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif';
					}
				} 
			}

			else {
				alert('Maaf, inputan tidak sesuai');
			}
		}
	}

	else {
		alert('Maaf, inputan tidak sesuai');
	}
}