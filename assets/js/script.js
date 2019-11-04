
//on compte la lettre a l'appui du bouton
document.getElementById("validButton").addEventListener('click', function() {
    alert(compte());
});

function compte(){
    var phrase = document.getElementById('phrase'); 
    var elements=phrase.value.split(''); //creation d'un tableau comptenant chacune des lettres de la phrase
    var j=0; // j = nombre de lettre 'b'
    for(i=0; i< phrase.textLength; i++){ //pour chaque element du tableau, on compte combien contient la lettre 'd'; i= nombre de lettre dans la phrase.
        
        if (elements[i] == 'b'){
           j++;
        }
    }
 return (`Il ya ${j} fois la lettre 'b' dans la phrase.`);
}


