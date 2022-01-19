// import imagenes from './imagenes'

const itemList= [
    {id:1, foto: './imagenes/botellas.jpg'} ,
    {id:2, foto: './imagenes/jabon.png'} , 
    {id:3, foto: './imagenes/paperBox.jpg'}
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
