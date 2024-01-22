// Langkah 1: Mendefinisikan Fungsi getKelas
const getKelas = (id) => {
    const kelas = id === 1 ? "SIJA" : "RPL";
    return { id, kelas };
  }

const getItem = (kodeItem, nameItem , cooldown , damage ,type) => {
    return{kodeItem, nameItem , cooldown , damage ,type};
}

const getGameItem = (gameItemId) => {
    const items = gameItemId === 1 ? getItem("imo","imortal","216","hiduplagi","tank") : getItem("hs","hunter strike","250",0,"attack")
    return (gameItemId, items);
}

console.log(getGameItem(1));



// menambahkan multimedia dari kelas 
const classFunc = (kode , namaKelas) => {
    return {kode,namaKelas};
}

const kelasBaru = (id)=> {
    if (id === 1){
        return classFunc("SIJA","Sistem Informasi Jaringan dan Aplikasi");
    } else if (id === 2) {
        return classFunc("RPL","Rekayasa Perangkat Lunak");
    } else if (id === 3) {
        return classFunc("MULT","Multimedia");
    } 
    return {id};
}

// // async
// const getKelasAsync = async (kodeId) => {
//     const kelas = kodeId === 1 ? "SIJA" : "RPL";
//     return { kode, kelas }
// }
const getKelasAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kelas = id === 1 ? "SIJA" : "RPL";
            resolve({ id, kelas });
        }, 1000); // Menambahkan penundaan 1 detik untuk mensimulasikan operasi asynchronous
    });
};

const kelasAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let kelas
            if (id === 1) {
                kelas = classfunc("SIJA", "Sistem Informasi Jaringan dan Aplikasi")
            } else if (id === 2) {
                kelas = classfunc("RPL", "Rekayasa Perangkat Lunak")
                resolve({ id, kelas })
            }
        }, 1000)
    })
}


module.exports = { kelasBaru, getKelasAsync, kelasAsync }

