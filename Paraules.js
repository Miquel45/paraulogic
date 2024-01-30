const  solucio="CAMISA"
function enviar(){
    let paraula = document.getElementById('Analitza').value.toUpperCase();
    console.log(paraula.length);
    if(paraula.length==6){
        console.log(paraula.length);
        let lletres =''
        for (let i =0;i<paraula.length;i++){

            if(paraula.charAt(i)==solucio.charAt(i) ){
                lletres+='<div class="slot green">'
            } else if (paraula.charAt(i)==) {
                lletres+='<div class="slot yellow">'
            }
            else {
                lletres+='<div class="slot">'
            }
            if(paraula.charAt(i))


            lletres+= paraula.charAt(i)
            lletres+='</div>'

        }
        document.getElementById('solucions').innerHTML=lletres
    }else{
        window.alert('aquesta parula no té sis lletres')
    }
}


