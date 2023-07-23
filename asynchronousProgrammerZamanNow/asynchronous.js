// synchronous adalah sebuah code yang berjalan sesuai urutan yang di tentutkan
// contoh
console.log('login1')
console.log('login2')
console.log('login3')
// output (login1,login2,login3)

// Asynchronous adalah jeda dari sebuah code tanpa menghambat block code lain
console.log('login1')
setTimeout(()=>{
    console.log('login2')
},500)
console.log('login3')
// output (login1,login3,login2)


// methode asynchronous 

// 1. setTimeout digunakan untuk menjeda code secara sekali
// contoh
console.log('login pending..')
setTimeout(()=>{
    console.log('login sukses')
},500)
// output (loginpending, login sukses)


// 2. setInterval digunakan untuk menjeda code secara berulang kali sesuai periode yang di tentutkan
console.log('login pending..')
setInterval(()=>{
    console.log('login sukses')
},500)

// output (login pending, login sukses,login sukses.....) akan terulang terus sesuai waktu yang di tentutkan

