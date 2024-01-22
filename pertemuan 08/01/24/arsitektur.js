// Langkah 1: Mendefinisikan Fungsi getKelas
const getKelas = (id) => {
    const kelas = id === 1 ? "SIJA" : "RPL";
    return { id, kelas };
  }
  console.log(getKelas(1))
  console.log(getKelas(2))
  console.log(getKelas(3))
  console.log(getKelas(4))

const getItem = (kodeItem, nameItem , cooldown , damage ,type) => {
    return{kodeItem, nameItem , cooldown , damage ,type};
}

const getGameItem = (gameItemId) => {
    const items = gameItemId === 1 ? getItem("imo","imortal","216","hiduplagi","tank") : getItem("hs","hunter strike","250",0,"attack")
    return (gameItemId, items);
}

console.log(getGameItem(1));

