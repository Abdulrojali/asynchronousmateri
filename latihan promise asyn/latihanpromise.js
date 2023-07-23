// menggunakan callback

// function request(url,sukses,failed){
//     let ping=Math.floor(Math.random()*1234)
//     setTimeout(()=>{
//         if(ping>100){
//             sukses(`link :${url}, ping :${ping}`)
//         }
//         else{
//             failed(`link :${url}, ping :${ping}`)  
//         }
//     },500)
// }


// let link=request('goggle.com',function(respone){
//     console.log(`${respone} ,status : sukses`)
// },function(respone){
//     console.log(`${respone},status : failed`)
// })


// menggunakan promise 

// let link=(url)=>{
//     return new Promise((sukses,failed)=>{
//         let ping=Math.floor(Math.random()*123)
//         if(ping>60){
//             sukses(`link : ${url}, ping :${ping}`)
//         }
//         else{
//             failed(`link :${url}, ping :${ping}`)
//         }
//     })
// };

// let url=link('goggle.com')

// url.then((respone)=>{
//     console.log(`${respone}, sukses`)
// }).catch((respone)=>{
//     console.log(`${respone}, failed`)
// })



// let request=(url)=>{
//     return new promise =((sukses,failed)=>{
//         let delay=Math.floor(Math.random()*1234)
//         setTimeout(()=>{
//             if(delay>100){
//                 sukses(`url ${url}, status : sukses`)
//             }
//             else{
//                 failed(`url ${url}, status : failed`)
//             }
//         },delay)
//     })
// }

// request('goggle.com')
// .then((sukses)=>{
//     console.log('page 1')
//     console.log(sukses)
// })
// .then((sukses)=>{
//     console.log('page 2')
//     console.log(sukses) 
// })
// .then((sukses)=>{
//     console.log('page 3')
//     console.log(sukses) 
// })
// .catch((failed)=>{
//     console.log(failed)
// })

let inputValue=document.querySelector('.number')
let button=document.querySelector('.click')

button.addEventListener('click',function(){
    let input=(value)=>{
        return new Promise((sukses,failed)=>{
            setTimeout(()=>{
                if(value>100){
                    sukses(`ping :${value}, status : sukses`)
                }
                else{
                    failed(`ping :${value}, status : failed`)
                }
            },1000)
        })
    }
    input(inputValue.value)
    .then((sukses)=>{
        console.log(sukses)
    })
    .catch((failed)=>{
        console.log(failed)
    })
    })


