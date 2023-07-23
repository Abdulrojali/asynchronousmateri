
// setInterval(()=>{
//     function request(url,succses,failed){
//         let ping=Math.floor(Math.random()*1234)
//         setTimeout(()=>{
//             if(ping>200){
//                 succses('this ping already to use')
//             }
//             else{
//                 failed('this ping not use')
//             }
          
//         },500)
//     }
//     request('indihome.com',
//     function(){
//     console.log('suscces')
// },function(){
//     console.log('error')
// })
// },1000)

// const requestCallback=(url,succes,failed)=>{
//     let delay=Math.floor(Math.random()*1234)
//     setTimeout(()=>{
//         if(delay>200){
//             succes('succses')
//         }
//         else{
//             failed('failed')
//         }
//     })
// }

// setInterval(()=>{
//     requestCallback('indihome.com',
//     function(){
//         console.log('sukses')
//     },function(){
//         console.log('failed')
//     })
// },500)

 let ping=Math.floor(Math.random()*123)
let request=(url,succses,failed)=>{
    if(ping>50){
        succses('sukses')
    }
    else{
        failed('failed')
    }
    console.log(ping)
}
    request('htpp//img.com',function(){
        let req=request.url
        console.log(`success in url :${req} `)
    },function(){
        console.log(`failed in url : ${req}`)
    })
