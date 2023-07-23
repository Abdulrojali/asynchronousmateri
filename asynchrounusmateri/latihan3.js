// let uid=Math.floor(Math.random()*12345);

// function login(username,callback){
//     console.log('login pending....')
//     setTimeout(()=>{
//          callback({uid:uid,username :username})
//     },300)
  
// }

// function getToken(uid,callback){
//     console.log('pending token...')
//     setTimeout(()=>{
//         if(uid) 
//         callback({token:'441kkf1t'})
//     },500)
   
// }

// let pic=['img1.jpg','img2.jpg','img3.jpg']
// function getPicture(token,callback){
//     console.log('img pending....')
//     setTimeout(()=>{
//         if(token) return callback({picture:pic})

//     },1500)
// }

// login('rizky',function(respone){
//     console.log(`user is : `,respone);
//     const {uid}=respone
//     getToken(uid,function(respone){
//         console.log('token :',respone)
//         const {token}=respone
//         getPicture(token,function(respone){
//             const {picture}=respone
//             console.log('img :',picture)
//         })
//     })

// })


let uid=Math.floor(Math.random()*12345);

function login(username){
    {uid:uid}
    return console.log(`username :${username}, uid : ${uid}`)
}

function getKey(keys){
    {keys:'4fkk1z'}
    if(keys)return console.log(`your key :`,{keys})
}

let picture=['1.jpg','2.jpg','3.jpg']
function getPicture(pic){
    if(pic)return console.log(`your picture ${picture}`)
}

let user=login('rizky')
let key=getKey(uid)
let pic=getPicture(key.keys)