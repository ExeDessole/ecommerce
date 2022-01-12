const item= {
    id:1,
    foto:'./imagenes/jabon',
    desc: 'Jabon hidratante y exfoliante natural realizado con aceite vegetal',
    precio: '$350'
};


export const llamado= new Promise ((resolve, reject)=>{
    let condicion= true;
    if(condicion){
        setTimeout(()=>{
            resolve(item)
        },2000)
    }else{
        reject ('error')
    }
});
