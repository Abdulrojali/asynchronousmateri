
let input=document.querySelector('.ping')
let button=document.querySelector('.click')

// menggunakan promise
// button.addEventListener('click',function(){
//     let inputValue=input.value
//     let inputNilai=(value)=>{
//         return new Promise((sukses,failed)=>{
//             setTimeout(()=>{
//                 if(value>50){
//                     sukses(`your ping : ${value}`)
//                 }
//                 else{
//                     failed(`your ping : ${value}`)
//                 }
//             },500)
//         })
//     }
//     let hasil=inputNilai(inputValue)
//     hasil.then((respone)=>{
//         console.log(`${respone}, sukses!!`)
//     }).catch((respone)=>{
//         console.log(`${respone}, failed!!`)
//     })
// })



// menggunakan callback 

// button.addEventListener('click',function(){
//     let inputValue=input.value
//     let requestValue=(value,sukses,failed)=>{
//         setTimeout(()=>{
//             if(value>50){
//                 sukses(`your ping ${value}`)
//             }
//             else{
//                 failed(`your ping ${value}`)
//             }
//         },500)
//     }
//     requestValue(inputValue,function(respone){
//         console.log(`${respone}, sukses`)
//     },function(respone){
//         console.log(`${respone}, failed`)
//     })

// })