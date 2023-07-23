// Ada 3 teknik yang digunakan untuk menghandle proses asynchronous pada JavaScript:

// Callback
// Promise
// Async Await


// 1.  callback adalah function yang menjadi argument untuk function lain dan akan dieksekusi pada poin tertentu, bisa jadi saat ini atau nanti.

// notify adalah function callback karena dia menjadi argument pada function download
const notify = () => {
    console.log('Download complete!');
  };
  // url adalah arguments pertama dari function download
  const url = 'https://brachio.site/download';
  
  // donwload adalah function utama yang menjalankan asyn callback
  const download = (url, callback) => {
    console.log(`Downloading from ${url}....`);
  
    // function callback di dalam download mengambil argument kedua yaitu callback, yang di gunakan untuk menjalankan function notify
    callback();
  };
  
  // pengisian arguments pada function download 
  download(url, notify);

// output download from url 'https://brachio.site/download'
// donwload complete ...

// callback hall
const down = (url, callback) => {
  console.log(`Downloading from ${url}....`);
  callback();
};
const url1 = 'https://brachio.site/download';
const url2 = 'https://trex.site/download';
const url3 = 'https://stego.site/download';
down(url1, function () {
  down(url2, function () {
    down(url3, function () {
      console.log('Download complete!');
    });
  });
});





