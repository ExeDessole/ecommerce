import imagenes from './imagenes/galeria'

const itemList= [
    {id:1, foto: imagenes[0] },
    {id:2, foto: imagenes[1] }, 
    {id:3, foto: imagenes[2] }
];

export const llamado= new Promise ((resolve, reject)=>{
    let condicion= true;
    if(condicion){
        setTimeout(()=>{
            resolve(itemList)
        },3000)
    }else{
        reject ('error')
    }
});
