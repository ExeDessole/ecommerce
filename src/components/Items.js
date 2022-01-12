const itemList= [
    {id:1, foto: './imagenes/botellas' } ,
    {id:2, foto: './imagenes/jabon'} , 
    {id:3, foto: './imagenes/paperBox'}
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
