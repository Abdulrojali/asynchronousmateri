let username =document.querySelector('.username')
let password =document.querySelector('.password')
let btnLogin=document.querySelector('.btnLogin')
let btnCancel=document.querySelector('.cancel')

// btnLogin.addEventListener('click',function(){
//     if (!username.value || !password.value)return alert('sorry input your username or password'); 
// })
// btnCancel.addEventListener('click',function(){
//     return confirm('ulangi??')
// })

let nid=Math.floor(Math.random()*12345)

btnLogin.addEventListener('click',function(){
    setTimeout(()=>{
        console.log('pending username...')
    },100)
    setTimeout(()=>{
        function getUsername(user){
            console.log(`username : ${user}`)
        }
        getUsername(username.value)
    },150)
    setTimeout(()=>{
        console.log('pending password...')
    },200)

    setTimeout(()=>{
        function getPassword(password){
            console.log(`password :${password}`)
        }
        getPassword(password.value)
    },250)

    setTimeout(()=>{
        console.log(`pending uid...`)
    },300)
    setTimeout(()=>{
        function getUid(nid){
            console.log(`your uid ${nid}`)
        }
        getUid(nid)
    },350)
    setTimeout(()=>{
        console.log(`pending data...`)
    },400)
    setTimeout(()=>{
        function getData(user,pass,uid){
            let input={user,pass,uid}
            console.log(`your data : ${input}`)
        }
        getData(username.value,password.value,nid)
    },450)

})



