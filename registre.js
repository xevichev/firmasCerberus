let llistafirmas=[];

function añadirfirma(pdni, pnom, pprimercognom,psegoncognom, pmail) {

    let nuevafirma={
        dninie: pdni,
        nom: pnom,
        primercongom: pprimercognom,
        segoncognom: psegoncognom,
        mail:pmail
    }
    console.log(nuevafirma)

    llistafirmas.push(nuevafirma);
    
}

console.log(llistafirmas);