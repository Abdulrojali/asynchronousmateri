// asyn and await untuk menghandle operasi asynchronous dengan syntax yang lebih mirip dengan synchronous.

// Async/Await sendiri dibuat di atas Promise.

// contoh asyn await
const getStatus = (url) => {
    console.log(`Downloading from ${url}...`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Download Complete');
      }, 3000);
    });
  };
  async function download(url) {
    let status = await getStatus(url); // tunggu sampai promise selesai
    console.log(status);
  }
  const url = 'https://brachio.site/download';
  download(url);