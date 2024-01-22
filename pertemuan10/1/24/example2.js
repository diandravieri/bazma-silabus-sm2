const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input
})

// cek folder ada atau tidak jika tidak buatkan folder nya 
const directory = '/.db';
if(!fs.existsSync(directory)){
    fs.mkdirSync(directory);
}

// cek file ada atau tidak jika tidak buatkan filenyta
const checkFile = './db/data.json';
if(fs.existsSync(checkFile)){
    fs.writeFileSync(checkFile,'[]','utf-8');
}

const questionExample = (pertanyaan)=>{
    return new Promise((resolve,rejects)=>{
        rl.question(pertanyaan,(jawaban)=>{
            resolve(jawaban);
        });
    });
}

const addData = async() => {
    const nama = await questionExample("Masukkan nama anda :");
    const umur = await questionExample("Masukkan umur sekarang");
    const hobi = await questionExample("Masukkan 1 hobi");

    const data = {nama , umur ,hobi};
    const fileDb = fs.readFileSync('./db/data.json','utf-8');
        const dataDiri = JSON.parse(fileDb);
        
        dataDiri.push(data);
        fs.writeFileSync('./db/data.json',JSON.stringify(dataDiri));
        console.log("Terimakasih sudah memperkenalkan dirinya😁")
            rl.close()
}

addData();
