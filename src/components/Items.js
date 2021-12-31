const itemsList= [
    {id:1, foto://www.google.com/imgres?imgurl=https%3A%2F%2Fhumanosveganos.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fpizza-vegana-con-espinaca.jpg&imgrefurl=https%3A%2F%2Fhumanosveganos.com%2Fpizzas%2Frellena-espinaca%2F&tbnid=SDdEH83DhxxH9M&vet=12ahUKEwjGnJqj_oz1AhUCRLgEHV0GCWMQMygMegUIARDhAQ..i&docid=VdVI71Hnx_KKLM&w=1824&h=1080&q=pizzas%20veganas&ved=2ahUKEwjGnJqj_oz1AhUCRLgEHV0GCWMQMygMegUIARDhAQ } ,
    {id:2, foto://www.google.com/imgres?imgurl=https%3A%2F%2Fi1.wp.com%2Fwww.disfrutarosario.com%2Fwp-content%2Fuploads%2F2021%2F05%2Fpizza-vegana.jpg%3Ffit%3D750%252C500%26ssl%3D1&imgrefurl=https%3A%2F%2Fwww.disfrutarosario.com%2Fpizza-vegana-receta%2F&tbnid=tD6j7ugsBdL7LM&vet=12ahUKEwjGnJqj_oz1AhUCRLgEHV0GCWMQMygGegUIARDQAQ..i&docid=ZIo4bX7HGJk7uM&w=750&h=500&q=pizzas%20veganas&ved=2ahUKEwjGnJqj_oz1AhUCRLgEHV0GCWMQMygGegUIARDQAQ} , 
    {id:3, foto://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.telesurtv.net%2Fexport%2Fsites%2Ftelesur%2Fimg%2Fmultimedia%2F2018%2F07%2F31%2Fcerveza-artesanal_preparacion_dia_cerveza.jpg_825434842.jpg&imgrefurl=https%3A%2F%2Fwww.telesurtv.net%2Fnews%2Fcomo-preparar-cerveza-artesanal-casera-ingredientes-20180731-0046.html&tbnid=PLuaogvNKpuGTM&vet=12ahUKEwiJ-eLS_oz1AhVsgpUCHZJ3BlkQMygEegUIARDNAg..i&docid=oB-HOk_UClhjqM&w=500&h=300&q=cerveza%20artesanal&ved=2ahUKEwiJ-eLS_oz1AhVsgpUCHZJ3BlkQMygEegUIARDNAg.}
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