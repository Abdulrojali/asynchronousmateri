// perbedaan callback dan promise

// ini adalah callback hall 
// const download = (url, callback) => {
//     console.log(`Downloading from ${url}....`);
//     callback();
//   };
//   const url1 = 'https://brachio.site/download';
//   const url2 = 'https://trex.site/download';
//   const url3 = 'https://stego.site/download';
//   download(url1, function () {
//     download(url2, function () {
//       download(url3, function () {
//         console.log('Download complete!');
//       });
//     });
//   });

//   // dapat kita atasi dengan promise 
//   // menjadi seperti ini
//   const download = (url) => {
//     return new Promise((resolve, reject) => {
//       resolve(`Downloading from ${url}....`);
//     });
//   };
//   const url1 = 'https://brachio.site/download';
//   const url2 = 'https://trex.site/download';
//   const url3 = 'https://stego.site/download';
//   Promise.all([download(url1), download(url2), download(url3)]).then((result) => {
//     for (let downloadInfo of result) {
//       console.log(downloadInfo);
//     }
//     console.log('Download Complete');
//   });