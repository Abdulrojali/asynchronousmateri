// function satu(){
//     console.log('satu')
// }
// function dua(callback){
//     setTimeout(()=>{
//         console.log('dua')
//         callback()
//     },1000)

// }
// function tiga(){
//     console.log('tiga')
// }


// satu()
// dua(tiga)

// const down=(url,download)=>{
//     console.log(`download in url ${url}`)
//     download()
// }
// const url1=`https://facebook.com`
// const url2=`https://instagram.com`
// const url3=`https://whatsapp.com`

// down(url1,function(){
//     down(url2,function(){
//         down(url3,function(){
//             console.log('download complete')
//         })
//     })
// })


let click=document.querySelector('.click')
let cancel=document.querySelector('.cancel')
let username=document.querySelector('.username')
let password=document.querySelector('.password')

//variabel data
let dataInput=[]
let dataPass=[]

// simpan data
function storage(username,password){
    dataInput.push(username)
    dataPass.push(password)
}

click.addEventListener('click',function(){
    storage(username.value,password.value)
    
})


