let user=document.querySelector('.user')
let password=document.querySelector('.password')
let btnLogin=document.querySelector('.login')
let uid=Math.floor(Math.random()*12345)
function login(username,password){
    console.log(`username :${username}, password :${password}, uid : ${uid}`)
    getData(username,password,uid)
    getKey(uid);
}

btnLogin.addEventListener('click',function(){
    if(!user.value || !password.value) return alert('wrong include your password or  username')
    login(user.value,password.value)
})

function getData(user,password,uid){
        let data =[user,password,uid]
        console.log(`your data : ${data}`)
        return 
}

function getKey(key){
    if(key) return console.log(`your key :`,{keys:'41ffk2'})
}
