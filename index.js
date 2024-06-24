let palavra;
let letras;
let anagrama;

console.log("Digite uma palavra...");

process.stdin.on("data", function(data) {
    palavra = data.toString().trim().toLowerCase();
    
    if (palavra) {
        letras = palavra.split('');
        
        // Embaralhamento do array de letras
        for (let i = letras.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // Troca de elementos
            const temp = letras[i];
            letras[i] = letras[j];
            letras[j] = temp;
        }
        
        anagrama = letras.join('');
        
        console.log("Anagrama de '" + palavra + "': " + anagrama);
    } else {
        console.log("Palavra inválida. Tente novamente.");
    }
});
