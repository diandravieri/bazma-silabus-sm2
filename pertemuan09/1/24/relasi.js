function namaRelasi(nama) {
    return `Hello my name is ${nama}`;
}


function namaDaerah(daerah) {
    return `Saya tinggal di ${daerah}`;
}


function namaSekolah(namaSekolah,jurusanSekolah) {
    return data = {
        namaSekolah,
        jurusanSekolah
    }
}

function array() {
    const arr = ['a', 'b', 'c', 'd'];
    return arr;
  }

function angkaHari(hari){
    switch(hari ){
        case 1:
            return "Hari senin";
            break;
        case 2:
            return "Hari selasa";
            break;
        case 3:
            return "Hari rabu";
            break;
        case 4:
            return "Hari kamis";
            break;
        case 5:
            return "Hari jumat";
            break;
        default:
            return "Hari saptu dan minggu libur";
            break;
    }
} 

module.exports = {namaRelasi, namaDaerah,namaSekolah}
