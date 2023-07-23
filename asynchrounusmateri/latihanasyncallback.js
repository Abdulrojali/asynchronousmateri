let input=document.querySelector('div .test input')
let button=document.querySelector('.click')


button.addEventListener('click',function(){
const confirm=()=>{
  console.log(`donwload success`)
    
 }
 let url=input.value
const download=(url,callback)=>{
 console.log(`donwload dari url.. ${url}`)
  callback();
}
download(url,confirm)
})

// const notify = () => {
//   console.log('Download complete!');
// };

// const download = (url, callback) => {
//   console.log(`Downloading from ${url}....`);

//   callback();
// };

// const url = 'https://brachio.site/download';

// download(url, notify);


let ping=parseInt(prompt('masukkan ping anda :'))


let cekPing=(ping,err,success)=>{
  if(ping<200){
    err(`your ping ${ping} this is error!!`)
  }
  else if(ping>300){
    success(`your ping ${ping}, this is success`)
  }
}
