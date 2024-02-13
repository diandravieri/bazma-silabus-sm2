## pertemuan 1

## Cara membuka database di terminal

buka terminal lalu ketikan 'mysql -u root -p' dan paswordnya (enter aja)
default mysql adalah username root dan pasword: (kosong)

## Cara membuat dara base baru 

berikan kode yang ada di module dengan cara 'create database nama_database';

## membuat table baru di smk_personal 

Disiniakan membuat tabel baru bernama biodata dan kolumnya:
-id,nama,kelas,jurusan,umur;
-id int primary key not null,
-nama varchar(255),
-kelas varchar(20),
-jurusan varchar(255),
-umur int,

## lihat data table biodata 

Dapat menggunakan query desc biodata;
Dapat menggunakan select * from biodata;

## membuat data baru pada tabel biodata

insert into biodata (id,nama,kelas,jurusan,umur) values(1,"diandra","xi","sija","17");

Bagaimana jika ingin melihat datanya? select * from biodata 

## mencari data berdasarkan id

Disini menggunakan query;
select * from biodata where id=1;

Kita akan memfilter data berdasarkan kelas

select * from biodata where kelas = "xi";

memfilter berdasarkan jurusan

select * from biodata where jurusan = "sija";


## update data berdasarkan id
disini dapat mengubah sesuai dengan kebutuhan query yang ingin diubah:

UPDATE biodata SET NAMA="namanya" WHERE id=1;

## hapus data berdasarkan id 
Dengan menggunakan query seperti ini:

DELETE FROM biodata WHERE id=1;

## TUGAS
Memahami mysql
Buatlah sebuah table dengan nama "sekolahan", didalam table sekolahan, terdapat beberapa kolum: id, nama_sekolah, jurusan,kapasitas_siswa, alamat. Buatlah sebanyak 10 data dengan berbagai jenis jurusan dan kapasitas_siswa ;
Sifat datanya dalam video:
Insert Data
Mencari data berdasarkan field
Mengubah Data
Delete Data 

## select berdasarkan id, nama_sekolahan,jurusan ,dana kapasitas

select ...,..., from sekolahan where alamat =? and kapasitas_siswa =? and jurusan =?;

bagaimana jika alamat = bogor ,dengan minimum kapasitas_siswa >= 20

...sql
select * from sekolahan where alamat = ? and kapasitas_siswa = ?;
...

select * from sekolahan where kapasitas_siswa > 300 or alamat = 'bogor';

select * from sekolahan where (jurusan = 'sija' and kapasitas_siswa >200) or (jurusan ='rpl' and kapasitas_siswa > 300);

### NOT
select * from sekolahan where not alamat = 'bogor';

select * from sekolahan where jurusan = 'sija' and not alamat = 'bogor';

select * from sekolahan where alamat not in ('bogor','jakarta');

### Order By

- Descending => dimulai dari tulisan z-a /id/created_at(tanggal_buat)
- Ascending => dimulai dari tulisan a-z /id/ created_at(tanggal_buat)

...sql
mengambil jurusan dari z-a
select * from sekolahan ORDER BY jurusan DESC;
mengambil jurusan dari a-z
select * from sekolan ORDER BY jurusan ASC;

### LIMIT
menambah jumlah data
select * from tabel Limit 5 ;

membatasi jumlah dengan desc/asc
select * from tabel ORDER BY condition LIMIT 5;

dengan where membatasi jumlah dengan desc/asc
select * from tabel WHERE condition LIMIT 5;

select * from sekolahan where jurusan = "RPL" and kapasitas_siswa >= 200 and alamat = "BOGOR" or alamat = "CIAMPEA" order by id asc limit ? ofset ? ;

### LIKE => pencarian DATA
%huruf(dicarinya diawali huruf belakang)
huruf%(dicarinya diawali huruf depan)


select * from tabel where field like 'huruf bebas%';

select * from tabel where field like %or%;

### Aliases
alias adalah nama yg dipake untuk mempermudah operasinya, alias tidak bisa digunakan di dalam database.
mendefinisikan pergantian field
SELECT fields AS asfield,FROM tabel;

nama_sekolah = namaSekolah,kapasitas_siswa = kapasitas,alamat = tempat

SELECT nama_sekolah as namaSekolah from sekolahan;
SELECT id,nama_sekolah as namaSekolah,jurusan,kapasitas_siswa as kapasitasSiswa from sekolahan;

### in 
select column_name(s)
FROM table_name 
WHERE column_name IN (SELECT STATEMENT);

## tugas 
1.filtering data (where)
2.cari data dengan (like) = judul,kategori,penulis
3. Data id desc
4.Filtering jumlah halaman >=/</= (bebas)
5.tahun terbit >= 2020 =< 2026
6.batas umur dimulai dari 8 sampai 20
7.harga dimulai dari desc /asc
8.harga range dari 1-15000
9.update dan delete




