// callback asynchronous adalah sebuah function tambahan untuk menampung nilai dari code asynchronous
// contoh 1
function sapaan(user,sapaanLanjut){
    console.log(`halo ${user}`)
    setTimeout(()=>{
    sapaanLanjut(user)
    },200)  
}
function sapaanLanjut(user){
    if(user) return console.log('selamat datang')
}
sapaan('rizky')
// output hallo rizky 
//        selamat datang 

// contoh 2
// let uid=Math.floor(Math.random()*12345)
// function login(user,callback){
//     return {username:user, id:uid}
// }

// let user1=login('rizky',function(){
//     console.log(`halo ${user1.username}, dengan uid ${user1.id}`)
// })
// let user2=login('budi',function(){
//     console.log(`halo ${user2.username},dengan uid ${user2.id}`)
// })
// output 'hallo rizky , dengan uid 44512'