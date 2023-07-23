
const donwload=(url)=>{
    return new Promise((sukses,failed)=>{
        let ping=Math.floor(Math.random()*1234)
        setTimeout(()=>{
            if(ping>100){
                sukses(`url : ${url}, ping :${ping}, status : sukses`)
            }
            else{
                failed(`url :${url}, ping :${ping}, status : failed`)
            }
        },1000)
    })
}

donwload('goggle.com')
.then((sukses)=>{
    console.log(sukses)
})
.catch((failed)=>{
    console.log(failed)
})
