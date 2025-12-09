function genera(){
    let nome = document.getElementById("nome").value;
    let cog = document.getElementById("cognome").value; 
    let data = document.getElementById("data").value; 
    let sesso = document.querySelector('input[name="sesso"]:checked');
    if (!nome || !cog || sesso == "" || !data ){
        document.getElementById("errore").innerHTML="Errore, inserisci dei valori reali";
        return;
    }
    let lcog = [];
    for ( let i = 0; i < cog.lenght; i++){
        if (cog[i] !=="A" || cog[i] !=="E" || cog[i] !=="I" || cog[i] !=="O" || cog[i] !=="U")
            lcog.push(cog[i]);
        }
    let pcog = lcog[0]; //prende le prime tre consonanti del cognome
    let scog = lcog[1];
    let tcog = lcog[2];
    if (pcog == ""){
        for ( let i = 0; i < cog.lenght; i++){
        if (cog[i] =="A" || cog[i] =="E" || cog[i] =="I" || cog[i] =="O" || cog[i] =="U")
            lcog.push(cog[i]);
        }        
    let pcog = lcog[0]; //prende le prime tre vocali del cognome
    let scog = lcog[1];
    let tcog = lcog[2];
    return;
    }else if(pcog == ""){
    }

    for ( let i = 0; i < nome.lenght; i++){
        if(cog[i] !=="A" || cog[i] !=="E" || cog[i] !=="I" || cog[i] !=="O" || cog[i] !=="U"){

        }
    }
}