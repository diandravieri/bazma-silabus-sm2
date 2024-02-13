### MEMBUAT DATA BASE BARU (foreign_key)
CREATE DATABASE nama_database;
USE nama_database
### MEMBUAT 3 TABEL
Mari kita siapkan tiga tabel: author, rak, dan buku, dimana buku akan menggunakan foreign keys untuk merujuk pada author dan rak.

('RAK1'),
('RAK2'),
('RAK3'),
('RAK4'),
('RAK5');

('JK Rowling'),
('George Orwell'),
('Stephen King'),
('William Shakespeare'),
('Tere Liye');

('Harry Potter', 350, 1, 1, '1997-06-26'),
('1984', 300, 2, 2, '1949-06-08'),
('A Tale of Two Cities', 400, 3, 3, '2022-04-24'),
('Pulang',404,4,4,'1999-02-20'),
('Pergi',394,5,5,'2017-09-22');

selanjutnya kita menambahkan/memasukkan 5 data ke dalam table yang sudah kita buat dengan menggunakan INSERT INTO 


### Latihan Memahami foreign key, memahami leftJoin, RightJoin dan Join.

### Menambahkan Data dengan Referensi Valid
INSERT INTO `author` (`nama_author`) VALUES ('JK Rowling'), ('George Orwell');
INSERT INTO `rak` (`nomor_rak`) VALUES ('RAK1'), ('RAK2');
lalu tambahkan buku yang merujuk pada penulis dan rak yang sudah Anda tambahkan:
INSERT INTO `buku` (`nama_buku`, `halaman_buku`, `author_id`, `rak_id`, `rilis_buku`) VALUES
('Harry Potter', 350, 1, 1, '1997-06-26'),
('1984', 300, 2, 2, '1949-06-08');
DONE

### Menggunakan Query untuk Join Tabel
SELECT
    buku.nama_buku,
    buku.rilis_buku,
    author.nama_author,
    rak.nomor_rak
FROM
    buku
JOIN author ON buku.author_id = author.id
JOIN rak ON buku.rak_id = rak.id;

### Menghapus Data dengan Referensi
DELETE FROM `buku` WHERE `id` = 1;
sekarang kita coba menghapus buku dengan id 1 seperti kode di atas 
kita lihat id 1 adalah buku harry potter yang akan kita hapus 
NAH SUDAH TERHAPUS MARI KITA CEK APAKAH MASIH ADA ATAU SUDAH TERHAPUS
NAH TERLIHAT SUDAH TERHAPUS Buku dengan id 1
### Memahami LEFT JOIN, RIGHT JOIN, Dan JOIN

### LEFT JOIN
LEFT JOIN dalam SQL digunakan untuk menggabungkan dua tabel, di mana hasil akan menyertakan semua baris dari tabel kiri (buku), bahkan jika tabel kanan (author atau rak) tidak memiliki baris yang cocok. Jika tidak ada kecocokan, hasil di sisi kanan akan berisi NULL.
Contoh penggunaan LEFT JOIN dengan tabel buku dan author:

SELECT
  buku.nama_buku,
  author.nama_author
FROM
  buku
LEFT JOIN author ON buku.author_id = author.id;

### RIGHT JOIN
RIGHT JOIN bekerja dengan cara yang sama seperti LEFT JOIN, tetapi sebaliknya. Semua baris dari tabel kanan akan disertakan dalam hasil gabungan, dan jika tidak ada kecocokan di tabel kiri, maka hasilnya akan berisi NULL di bagian kiri.
Contoh penggunaan RIGHT JOIN dengan tabel buku dan rak:

SELECT
  buku.nama_buku,
  rak.nomor_rak
FROM
  buku
RIGHT JOIN rak ON buku.rak_id = rak.id;

ini ada sedikit pemahan menurus riset saya 
### PEMAHAMAN MENURUT RESEARCH SAYA
1. Foreign Key:

Definisi: Foreign key (kunci asing) adalah field atau sekumpulan field di dalam tabel yang merujuk langsung pada primary key di tabel lain.
Fungsi:
Memastikan integritas referensial antar tabel.
Mencegah data yang tidak valid dengan memastikan bahwa nilai dalam field foreign key selalu sesuai dengan nilai primary key yang ada di tabel referensi.
Mempermudah pemeliharaan dan keberlanjutan data di masa depan.

2. LEFT JOIN:

Definisi: LEFT JOIN digunakan untuk menggabungkan dua tabel, menyertakan semua baris dari tabel kiri (tabel pertama dalam klausa JOIN), bahkan jika tidak ada kecocokan di tabel kanan.
Hasil:
Semua baris dari tabel kiri akan dimasukkan dalam hasil.
Jika tidak ada kecocokan di tabel kanan, nilai-nilai di sisi kanan akan diisi dengan NULL.

3. RIGHT JOIN:

Definisi: RIGHT JOIN bekerja dengan cara yang mirip dengan LEFT JOIN, tetapi fokus pada semua baris dari tabel kanan (tabel kedua dalam klausa JOIN).
Hasil:
Semua baris dari tabel kanan akan dimasukkan dalam hasil.
Jika tidak ada kecocokan di tabel kiri, nilai-nilai di sisi kiri akan diisi dengan NULL.

4. INNER JOIN (atau JOIN):

Definisi: INNER JOIN digunakan untuk menggabungkan baris dari dua tabel berdasarkan kondisi tertentu, hanya menyertakan baris yang memiliki kecocokan di kedua tabel.
Hasil:
Hanya baris yang memiliki kecocokan di kedua tabel akan dimasukkan dalam hasil.

OK TERIMAKASIH TELAH MENONTON VIDIO SAYA SAMPAI AKHIR SEMUA KALIAN BISA MENCOBANYA SENDIRI DI RUMAH......


## MEMBUAT DB SISWA XI 
NAMA LENGKAP SISWA 
('Adli Fathi Rayhan'),
('Ahmad Tauhid'),
('Attar Rifai'),
('Dhiaraqi Ahmad Khaizuran'),
('Diandra Vieri Dwi Airlangga'),
('Fadhil Rabbani'),
('Fayyadh Rantisi'),
('Gemi Widodo'),
('Hafith Muhammad Fauzan'),
('Hanif Gibran Sidik'),
('Ibrahim'),
('Mufiz Ihsanulhaq'),
('Muhammad Abdullah Al Aziz'),
('Muhammad Faiq Mustanir'),
('Muhammad Ibrahim'),
('Muhammad Saeful Ramadhan'),
('Radid Aditia Renaldi'),
('Rofi Dzaki Abdul Aziz'),
('Sahrul Romadhon'),
('Syahban Syaputra');

NISN SISWA
('0085123133'),
('0059123270'),
('0071827655'),
('0076045544'),
('0076395222'),
('0019200703'),
('0063678285'),
('0065548996'),
('0064672913'),
('0062947776'),
('0074741320'),
('0075722604'),
('0071982390'),
('0071377026'),
('0062522463'),
('0060566162'),
('0076629332'),
('0078167158'),
('0068489246'),
('0077226568');

NIS SISWA 
('2223001'),
('2223002'),
('2223004'),
('2223005'),
('2223006'),
('2223007'),
('2223008'),
('2223009'),
('2223010'),
('2223011'),
('2223012'),
('2223013'),
('2223014'),
('2223015'),
('2223016'),
('2223018'),
('2223019'),
('2223020'),
('2223021'),
('2223022');

ALAMAT SISWA 
('Jln.pembangunan 3 rawabadak utara jakarta utara no 29'),
('Jl. Taqwa Barandasi no. 21 Maros Sulsel'),
('Jl RAYA CENTEX GG SENGGOL RT 013/003, CIRACAS JAKARTA TIMUR'),
('Perum. Villa Mutiara Bogor 1 sektor 2 Blok F3 No. 15 RT.08/12 Mekarwangi Tanah Sareal Kota Bogor 16168'),
('Jakarta Timur, Kec Jatinegara,kel Cipinang Besar Utara, JL CIPINANG PULO RT/RW:011/014 No.44'),
('Jl.Sabeni,Rt.11.Rw.12,No.10,Kbon melati, Tanah Abang'),
('Batang Biyu, Lingkungan Aua, Pasaman, Pasaman Barat, Sumatera Barat.'),
('Jalan Armed RT002/003 Desa Munggu Kecamatan Petanahan Kabupaten Kebumen Jawa Tengah'),
('Kp. Curug, RT 003/001 Pakansari, Cibinong, Bogor'),
('jl.raya jakarta pakupatan serang banten'),
('Tolada, Malangke, Luwu Utara'),
('Perumahan Grand Residence City cluster Prapanca 1 blok bd 33 no 15'),
('Rempoah rt03/RW 01'),
('Prmh Alam Sinar Sari II'),
('JL. TIPALA III NO 28 KEL. MAKASAR KEC. MAKASAR JAKARTA TIMUR 13570'),
('Desa Astana Blok Kebuyutan RT 10 RW 03 Kode POS 45151 Kecamatan Gunung Jati Kabupaten Cirebon'),
('Dusun Gandri 1, RT/RW 001/001, Desa Gandri, Kecamatan Penengahan, Kabupaten Lampung Selatan.'),
('Perum Bumi Kahuripan Indah Blok C1 No 14 Cikahuripan Klapanunggal Bogor'),
('Kp.jengkol desa malasari kecamatan nanggung kabupaten bogor'),
('Cakke, Kel. Lakawa, Kec. Anggeraja, Kabupaten Enrekang, Sulawesi Selatan');

TB SISWA 
('155cm'),
('164cm'),
('173cm'),
('170cm'),
('170cm'),
('165cm'),
('163cm'),
('152cm'),
('171cm'),
('168cm'),
('165cm'),
('165cm'),
('173cm'),
('166cm'),
('162cm'),
('160cm'),
('173cm'),
('165cm'),
('158cm'),
('166cm'),
('170cm'),
('169cm');

BB SISWA 
35kg
60kg
52kg
52kg
78kg
39kg
37kg
59kg
67kg
55kg
49kg
65kg
46kg
45kg
55kg
56kg
55kg
48kg
45kg
65kg

('Adli Fathi Rayhan', 'Jln.pembangunan 3 rawabadak utara jakarta utara no 29', 101, 1, '155cm', '35kg'),
('Ahmad Tauhid', 'Jl. Taqwa Barandasi no. 21 Maros Sulsel', 102, 2, '164cm', '60kg'),
('Attar Rifai', 'Jl RAYA CENTEX GG SENGGOL RT 013/003, CIRACAS JAKARTA TIMUR', 103, 3, '173cm', '52kg'),
('Dhiaraqi Ahmad Khaizuran', 'Perum. Villa Mutiara Bogor 1 sektor 2 Blok F3 No. 15 RT.08/12 Mekarwangi Tanah Sareal Kota Bogor 16168', 104, 4, '170cm', '52kg'),
('Diandra Vieri Dwi Airlangga', 'Jakarta Timur, Kec Jatinegara,kel Cipinang Besar Utara, JL CIPINANG PULO RT/RW:011/014 No.44', 105, 5, '170cm', '78kg'),
('Fadhil Rabbani', 'Jl.Sabeni,Rt.11.Rw.12,No.10,Kbon melati, Tanah Abang', 106, 6, '165cm', '39kg'),
('Fayyadh Rantisi', 'Batang Biyu, Lingkungan Aua, Pasaman, Pasaman Barat, Sumatera Barat.', 107, 7, '163cm', '37kg'),
('Gemi Widodo', 'Jalan Armed RT002/003 Desa Munggu Kecamatan Petanahan Kabupaten Kebumen Jawa Tengah', 108, 8, '152cm', '59kg'),
('Hafith Muhammad Fauzan', 'Kp. Curug, RT 003/001 Pakansari, Cibinong, Bogor', 109, 9, '171cm', '67kg'),
('Hanif Gibran Sidik', 'jl.raya jakarta pakupatan serang banten', 110, 10, '168cm', '55kg'),
('Ibrahim', 'Tolada, Malangke, Luwu Utara', 111, 11, '165cm', '49kg'),
('Mufiz Ihsanulhaq', 'Perumahan Grand Residence City cluster Prapanca 1 blok bd 33 no 15', 112, 12, '165cm', '65kg'),
('Muhammad Abdullah Al Aziz', 'Rempoah rt03/RW 01', 113, 13, '173cm', '46kg'),
('Muhammad Faiq Mustanir', 'Prmh Alam Sinar Sari II', 114, 14, '166cm', '45kg'),
('Muhammad Ibrahim', 'JL. TIPALA III NO 28 KEL. MAKASAR KEC. MAKASAR JAKARTA TIMUR 13570', 115, 15, '162cm', '55kg'),
('Muhammad Saeful Ramadhan', 'Desa Astana Blok Kebuyutan RT 10 RW 03 Kode POS 45151 Kecamatan Gunung Jati Kabupaten Cirebon', 116, 16, '160cm', '56kg'),
('Radid Aditia Renaldi', 'Dusun Gandri 1, RT/RW 001/001, Desa Gandri, Kecamatan Penengahan, Kabupaten Lampung Selatan.', 117, 17, '173cm', '55kg'),
('Rofi Dzaki Abdul Aziz', 'Perum Bumi Kahuripan Indah Blok C1 No 14 Cikahuripan Klapanunggal Bogor', 118, 18, '165cm', '48kg'),
('Sahrul Romadhon', 'Kp.jengkol desa malasari kecamatan nanggung kabupaten bogor', 119, 19, '158cm', '45kg'),
('Syahban Syaputra', 'Cakke, Kel. Lakawa, Kec. Anggeraja, Kabupaten Enrekang, Sulawesi Selatan', 120, 20, '166cm', '65kg');


('Adli Fathi Rayhan', 'Jakarta Utara', 1, 1, '155cm', '35kg'),
('Ahmad Tauhid', 'Maros', 2, 2, '164cm', '60kg'),
('Attar Rifai', 'Jakarta Timur', 3, 3, '173cm', '52kg'),
('Dhiaraqi Ahmad Khaizuran', 'Bogor', 4, 4, '170cm', '52kg'),
('Diandra Vieri Dwi Airlangga', 'Jakarta Timur', 5, 5, '170cm', '78kg'),
('Fadhil Rabbani', 'Tanah Abang', 6, 6, '165cm', '39kg'),
('Fayyadh Rantisi', 'Pasaman Barat', 7, 7, '163cm', '37kg'),
('Gemi Widodo', 'Kebumen', 8, 8, '152cm', '59kg'),
('Hafith Muhammad Fauzan', 'Bogor', 9, 9, '171cm', '67kg'),
('Hanif Gibran Sidik', 'Banten', 10, 10, '168cm', '55kg'),
('Ibrahim', 'Luwu Utara', 11, 11, '165cm', '49kg'),
('Mufiz Ihsanulhaq', 'Bogor', 12, 12, '165cm', '65kg'),
('Muhammad Abdullah Al Aziz', 'Bogor', 13, 13, '173cm', '46kg'),
('Muhammad Faiq Mustanir', 'Unknown', 14, 14, '166cm', '45kg'),
('Muhammad Ibrahim', 'Jakarta Timur', 15, 15, '162cm', '55kg'),
('Muhammad Saeful Ramadhan', 'Cirebon', 16, 16, '160cm', '56kg'),
('Radid Aditia Renaldi', 'Lampung Selatan', 17, 17, '173cm', '55kg'),
('Rofi Dzaki Abdul Aziz', 'Bogor', 18, 18, '165cm', '48kg'),
('Sahrul Romadhon', 'Bogor', 19, 19, '158cm', '45kg'),
('Syahban Syaputra', 'Enrekang', 20, 20, '166cm', '65kg');

INSERT INTO siswa (NamaSiswa,AlamatSiswa,Nisn_id,Nis_id,TinggiBadan,BeratBadan) VALUES

CREATE TABLE siswa (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `NamaSiswa` VARCHAR(255) NOT NULL,
  `AlamatSiswa` VARCHAR(255)NOT NULL,
  `Nisn_id` INT,
  `Nis_id` INT,
  `TinggiBadan` VARCHAR(50) NOT NULL,
  `BeratBadan` VARCHAR(50) NOT NULL,
  FOREIGN KEY (`Nisn_id`) REFERENCES `nisn`(`id`),
  FOREIGN KEY (`Nis_id`) REFERENCES `nis`(`id`)
);

## SELECT
SELECT
    siswa.NamaSiswa,
    siswa.AlamatSiswa,
    nisn.NISN,
    nis.NIS,
    siswa.TinggiBadan,
    siswa.BeratBadan
FROM
    siswa
JOIN nisn ON siswa.Nisn_id = Nisn.id
JOIN nis ON siswa.Nis_id = Nisn.id;


## LEFT JOIN
SELECT
    siswa.NamaSiswa,
    nisn.NISN
FROM
  siswa
LEFT JOIN nisn ON siswa.Nisn_id = Nisn.id;

## RIGHT JOIN
SELECT
    siswa.NamaSiswa,
    nis.NIS
FROM
  siswa
RIGHT JOIN nis ON siswa.Nis_id = Nis.id;

## INNER JOIN 
SELECT
  siswa.NamaSiswa,
  nisn.NISN,
  nis.NIS
FROM
  siswa
JOIN nisn ON siswa.Nisn_id = Nisn.id
JOIN nis ON siswa.Nis_id = Nis.id;

## DELETE
DELETE FROM `author` WHERE `id` = 1;
