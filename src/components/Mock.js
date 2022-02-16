import img from './imagenes/galeria'

const productos= [
    {id:'1', foto: img[3], title:'CREMA FACIAL - PIEL EQUILIBRADA - FORMULA DIA', categoria:'Cremas', text:'Clínica y dermatológicamente testeada.Formulada con aceite de almendras, manteca de mango, aceite de sésamo y extractos botánicos 100% naturales. Contiene agentes hidratantes que balancean la microbiota de la piel, regulan el ph y estimulan los mecanismos de defensa, con un suave aroma a durazno.', precio:'$1600'},
    {id:'2', foto: img[3], title:'CREMA FACIAL - PIEL EQUILIBRADA - FORMULA NOCHE', categoria:'Cremas', text:'Clínica y dermatológicamente testeada.Formulada con aceite de almendras, manteca de mango, aceite de sésamo y extractos botánicos 100% naturales. Contiene agentes hidratantes que balancean la microbiota de la piel, regulan el ph y estimulan los mecanismos de defensa, con un suave aroma a durazno.', precio:'$1600'}, 
    {id:'3', foto: img[3], title:'CREMA PARA ROSTRO - PIEL GRASA - FORMULA DIA', categoria:'Cremas', text:'Clínica y dermatológicamente testeada.Formulada con aceite de ricino, aceite de lino, aceite de sésamo y extractos botánicos 100% naturales.Contiene activos concentrados de Fomes Officinalis (hongo que crece sobre los alerces), aminoácidos, vitaminas del grupo B y un fresco aroma a peonia.', precio:'$1600'},
    {id:'4', foto: img[3], title:'CREMA PARA ROSTRO - PIEL GRASA - FORMULA NOCHE', categoria:'Cremas', text:'Clínica y dermatológicamente testeada.Formulada con aceite de ricino, aceite de lino, aceite de sésamo y extractos botánicos 100% naturales.Contiene activos concentrados de Fomes Officinalis (hongo que crece sobre los alerces), aminoácidos, vitaminas del grupo B y un fresco aroma a peonia.', precio:'$1600'},
    {id:'5', foto: img[1], title:'JABONES VEGETALES - LÍNEA ESENCIAL', categoria:'Jabones', text:'Nuestros JABONES VEGETALES - LINEA ESENCIAL están elaborados con aceite de coco. Limpian e hidratan la piel de manera natural y delicada.', precio:'$420'},
    {id:'6', foto: img[1], title:'JABÓN VEGETAL EXFOLIANTE', categoria:'Jabones', text:'Elaborado con Aceite de Coco y Aceite de Oliva Orgánico, junto a la acción exfoliante de las SEMILLAS DE AMARANTO, deja la piel suave, libre de impurezas.', precio:'$420'}, 
    {id:'7', foto: img[1], stock: 30, title:'JABONES VEGETALES - CLÁSICOS BOTÁNICOS', categoria:'Jabones', text:'Nuestros JABONES VEGETALES están elaborados con Aceite de Coco y Aceite de Oliva Orgánico, junto a aceites escenciales. Son súper humectantes, ideales para dejar la piel suave e hidratada.', precio:'$420'},
    {id:'8', foto: img[1], stock: 30, title:'JABÓN DE COLECCIÓN DE JENGIBRE - ENERGÍA', categoria:'Jabones', text:'Te damos la bienvenida a una nueva concepción en JABONES VEGETALES: nuestra LÍNEA DE JABONES DE COLECCIÓN está diseñada para brindarte todos los beneficios que nos da la naturaleza, para cuidar nuestro cuerpo y equilibrar la energía que convive en él.', precio:'$420'},
    {id:'9', foto: img[0], stock: 30, title:'ACEITE DE ABEDUL Y CENTELLA ASIÁTICA', categoria:'Aceites', text:'Es el complemento ideal junto a una alimentación saludable y actividad física, para reducir los signos de celulitis y flaccidez. Los aceites vegetales de Abedul y Centella Asiática ayudan a prevenir y reducir las adiposidades que se alojan bajo la piel formando la celulitis. Su uso diario reafirma y alisa la piel, mejorando su aspecto y textura.', precio:'$1900'}, 
    {id:'10', foto: img[0], stock: 30, title:'ACEITE ORGÁNICO DE ROSA MOSQUETA', categoria:'Aceites', text:'Brinda un cuidado especial para la piel por su excepcional capacidad de nutrición, consiguiendo que se torne tersa y luminosa.', precio:'$1900'},
    {id:'11', foto: img[0], stock: 30, title:'ACEITE DE JOJOBA ORGANICO', categoria:'Aceites', text:'Contiene ceramidas, encargadas de hidratar la piel. Propiedades antisépticas y astringentes. Aporta elasticidad y firmeza.', precio:'$1900'},
    {id:'12', foto: img[0], stock: 30, title:'ACEITE DE COCO VIRGEN & ORGANICO', categoria:'Aceites', text:'Contiene nutrientes y vitaminas A y E. Hidrata en profundidad la piel y el cabello. Favorece la regeneración celular. Aporta suavidad. Preserva el colágeno y la eslatina propias de la piel. Ideal para incluirlo en mascararillas faciales o capilares.', precio:'$1900'},
    {id:'13', foto: img[2], stock: 30, title:'SHAMPOO SÓLIDO - CABELLO GRASO/ANTICASPA', categoria:'Shampoo',text:'Cocoil Isetionato de Sodio (tensioactivo natural derivado del coco), Aceite de coco, enriquecido con aceite de ricino y aceite esencial de limòn. Elimina la grasitud y barre la caspa.', precio:'$960'},
    {id:'14', foto: img[2], stock: 30, title:'ACONDICIONADOR SÓLIDO', categoria:'Acondicionador',text:'BTMS, Manteca de cacao, enriquecido con aceite de coco y aceite de jojoba. Nutre el cabello, dejándolo suave y sedoso de manera natural, sin efecto graso.', precio:'$960'}
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
