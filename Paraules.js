const  solucio="CAMISA"
function enviar(){
    //Possa les lletres en majuscules
    let paraula = document.getElementById('Analitza').value.toUpperCase();
    console.log(paraula.length);
    if(paraula.length==6){
        console.log(paraula.length);
        let lletres =''
        lletres+="<div class=\"resposta\">"
        for (let i =0;i<paraula.length;i++){
            //Si la paraula és la solució la pinta de verd
            if(paraula.charAt(i)==solucio.charAt(i) ){
                lletres+='<div class="slot green">'
                //Si la paraula inclou lletres de la solució peró en el lloc incorrecta les pinta de groc
            } else if (solucio.includes(paraula.charAt(i))) {
                lletres+='<div class="slot yellow">'
            }
            else {
                lletres+='<div class="slot">'
            }
            lletres+= paraula.charAt(i)
            lletres+='</div>'
        }
        document.getElementById('solucions').innerHTML+=lletres
    }else{
        //Si no te sis lletres t'avisa
        window.alert('aquesta parula no té sis lletres')
    }
}


