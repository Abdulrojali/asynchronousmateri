// 2. promise adalah teknik handler asyncronus kedua untuk menangani kasus callback hell
// Promise bisa dikatakan sebagai object yang menyimpan hasil dari sebuah operasi asynchronous baik itu hasil yang diinginkan (resolved value) atau alasan kenapa operasi itu gagal (failure reason).

//Sebuah Promise berada di salah satu diantara 3 kondisi(state):
// pending, operasi sedang berlangsung
// fulfilled, operasi selesai dan berhasil
// rejected, operasi selesai namun gagal

// contoh penggunaan promise
let progress = 100;
const download = new Promise((resolve, reject) => {
  if (progress === 100) {
    resolve('Download complete');
  } else {
    reject('Download failed');
  }
});

// promise handler adalah sebuah methode untuk menghandle resolve dan reject
// beberapa methode pada promise
// 1 then() di gunakan untuk resolve
// 2 catch() di gunakan untuk reject
// contoh
download
  .then((result) => {
    console.log(result); // Download complete
  })
  .catch((error) => {
    console.log(error); // Download failed atau tidak ditampilkan jika tidak ada error
  });

  let initProgress = 0;
  const download = new Promise((resolve, reject) => {
    let progress = initProgress + 25;
    resolve(progress);
    reject(initProgress)
  });
  download
    .then((result) => {
      console.log(`Download progress is ${result}%`);
      return result + 25;
    })
    .then((result) => {
      console.log(`Download progress is ${result}%`);
      return result + 50;
    })
    .then((result) => {
      if (result === 100) {
        console.log('Download complete');
      }
    });
    download 
     .catch((err)=>{
        console.log(`download progress is error ${err}`)
     })

    // 3. methode promise.all()digunakan untuk mengeksekusi Promise secara paralel.
    // contoh
    const downloadStart = new Promise((resolve, reject) => {
        resolve('0%');
      });
      const downloadHalf = new Promise((resolve, reject) => {
        resolve('50%');
      });
      const downloadFull = new Promise((resolve, reject) => {
        resolve('100%');
      });
      Promise.all([downloadStart, downloadHalf, downloadFull]).then((result) => {
        console.log(result); // [ '0%', '50%', '100%' ]
      });
      

