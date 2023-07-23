// perbedaan antara asynchrounus dan synchrounus

// synchrounus adalah pengeksekusian kode secara terurut 
// contoh :
console.log('dijalankan pertama')
console.log('dijalankan kedua')
console.log('dijalankan ketiga')
console.log('dijalankan keempat')


// asynchrounus adalah pengeksekusian kode secara tidak terurut
// contoh :
console.log('dijalankan pertama')
setTimeout(()=>{
    console.log('dijalankan kedua')
},1500)
setTimeout(()=>{
    console.log('dijalankan ketiga')
},900)
console.log('dijalankan keempat')

// hasil inputnya pertama,keempat,ketiga,kedua


// event loop
// Untuk lebih memahami asynchronous pada JavaScript kita perlu mengetahui apa itu Event Loop.

// Event loop adalah bagian dari JavaScript Runtime yang bertugas untuk menangani Event Callback, Event Callback sendiri adalah bagian dari code yang dieksekusi setelah event tertentu.

// Contoh Kasus: Klik tombol Download di browser.

// mouse click adalah event
// function yang bertugas untuk mengunduh adalah callback
// Ketika event terjadi maka callback dari event tersebut akan ditempatkan pada suatu tempat yang disebut Event Handler Queue atau Queue.

// Event Loop akan terus memonitor Queue dan akan mengeksekusi callback sesuai urutan siapa yang pertama masuk ke dalam Queue.