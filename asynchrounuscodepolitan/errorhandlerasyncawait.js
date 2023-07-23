


let ambilData=(data)=>{
    return new Promise((sukses,failed)=>{
        setTimeout(()=>{
            if(data)sukses(`data anda :${data}, status : sukses`)
            else{
                failed('error data not undfiend')
            }
        },1000)
    })
}