window.onload= function(){
    let contg=0;
    let contp=0;
    document.getElementById('envia').onclick = function(){ 

        if (document.querySelectorAll('input[type="radio"]:checked').length === 0){document.getElementById('resultat').innerHTML=('<label>No has respos per tant has perdut :c</label>');;}
            if (document.querySelector('input[name="resposta"]:checked').value=='pedra') {
                let n=Rand();
                if (n==3) {
                    document.getElementById('resultat').innerHTML=('<label>L\'ordinador ha tret tisora, has guanyat!!</label>');
                    contg++;
                }
                else if (n==2) {
                    document.getElementById('resultat').innerHTML=('<label>L\'ordinador ha tret paper, has perdut :c</label>');
                    contp++;
                }
                else {
                    document.getElementById('resultat').innerHTML=('<label>L\'ordinador ha tret pedra, aixo és un empat</label>');
                }
            }
            if (document.querySelector('input[name="resposta"]:checked').value=='paper') {
                let n=Rand();
                if (n==3) {
                    document.getElementById('resultat').innerHTML=('<label>L\'ordinador ha tret tisora, has perdut :c</label>');
                    contp++;
                }
                else if (n==2) {
                    document.getElementById('resultat').innerHTML=('<label>L\'ordinador ha tret paper, aixo és un empat </label>');
                }
                else {
                    document.getElementById('resultat').innerHTML=('<label>L\'ordinador ha tret pedra,  has guanyat!!</label>');
                    contg++;
                }
            }
            if (document.querySelector('input[name="resposta"]:checked').value=='tisora') {
                let n=Rand();
                if (n==3) {
                    document.getElementById('resultat').innerHTML=('<label>L\'ordinador ha tret tisora, aixo és un empat</label>');
                }
                else if (n==2) {
                    document.getElementById('resultat').innerHTML=('<label>L\'ordinador ha tret paper, has guanyat!!</label>');
                    contg++;
                }
                else {
                    document.getElementById('resultat').innerHTML=('<label>L\'ordinador ha tret pedra, has perdut :c</label>');
                    contp++;
                }
                document.getElementById('contg').innerHTML=('<label>'+contg+'</label>');
                document.getElementById('contp').innerHTML=('<label>'+contp+'</label>');
            }
    }
    function Rand(){
        let rand = Math.floor(Math.random() * 4);
        return rand;
    }
}