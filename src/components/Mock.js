import img from './imagenes/galeria'

const productos= [
    {id:'1', foto: img[0], title:'Crema Hidratante', text:'Libre de parabenos y no contiene derivado de petrolatos. Posee vitamina E, extracto de caléndula, y leche de almendras.'},
    {id:'2', foto: img[1], title:'Jabón Vegetal', text:'Limpian e hidratan la piel de manera natural y delicada. Biodegradable, libre de químicos, sulfatos y parabenos.'}, 
    {id:'3', foto: img[2], title:'Paper Box', text:'Si queres tener un Packaging ecológico para tu emprendimiento, lo fabricamos a tu medida'},
    {id:'4', foto: img[3], title:'Balsamo labial', text:'Mantiene los labios super humectados.Combate paspaduras, y repara grietas y resequedad.' }
];

export const llamado= new Promise ((resolve, reject)=>{
    let condicion= true;
    if(condicion){
        setTimeout(()=>{
            resolve(productos)
        },2000)
    }else{
        reject ('error')
    }
});
