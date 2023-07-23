// async adalah sebuah proses mengembalikan nilai promise
// contoh async
// const sapa=async(nama)=>{
//     // throw keyword async untuk mengatasi error
//     throw 'maaf gagal'
//     // return keyword async untuk mengatasi resolve
//     return `hello ${nama} selamat datang`
// }
// sapa('rizky')
// .then((respone)=>{
//     console.log(respone)
// })
// .catch((respone)=>{
//     console.log(respone)
// })
// sedangkan await adalah menunggu promise di jalankan dalam async
// contoh await

// contoh 1
// const data=(input)=>{
//     return new Promise((sukses,failed)=>{
//         let ping=Math.floor(Math.random()*1234)
//         setTimeout(()=>{
//             if(ping>200){
//                 sukses(`link : ${input}, ping :${ping}, status :sukses`)
//             }
//             else{
//                 failed(`link :${input}, ping: ${ping}, status : failed`)
//             }
//         },500)
//     })
// }
// let input=prompt('masukkan link')
// async function Proses(){
//     let delay=await data(input)
//     .then((respone)=>{
//         console.log(respone)
//     })
//     .catch((respone)=>{
//         console.log(respone)
//     })
//     console.log(delay)
// }
// Proses()



// contoh 2
// const randomBackground=(warna,delay)=>{
//     return new Promise((sukses,failed)=>{
//         setTimeout(()=>{
//             let warnaAcak=document.body.style.backgroundColor=warna
//             sukses()
//             if(warnaAcak==null || warnaAcak==undefined){
//                 failed('error')
//             }
//         },delay)
//     })
// }

// // randomBackground('red',1000)
// // .then(()=>randomBackground('blue',1000))
// // .then(()=>randomBackground('green',1000))
// // .then(()=>randomBackground('orange',1000))
// // .then(()=>randomBackground('black',1000))
// // .then(()=>randomBackground('white',1000))
// // .then(()=>console.log('sukses'))
// // .catch(()=>console.log('error'))

// // menjalankan kode di atas menggunakan async await
// async function color(){
//     await randomBackground('red',1000)
//     await randomBackground('blue',1000)
//     await randomBackground('orange',1000)
//     await randomBackground('black',1000)
//     await randomBackground('purple',1000)
//     await randomBackground('white',1000)
//     return 'sukses'
// }
// color().then((res)=>console.log(res))



