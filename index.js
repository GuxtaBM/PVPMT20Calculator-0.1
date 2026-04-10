
//pvi = Pontos de Vida Iniciais, pvn = Pontos de Vida por Nivel, pmn = Pontos de Mana por nivel
let pvi, pvn, pmn;

//bonusA = Bonus de arcanista, seria a soma do atributo chave para usar magias somado com o PM
let bonusA;


//Classes, pois mudam o quanto de pv/pm que os players ganham por nivel e inicialmente
document.getElementById("classe").addEventListener('change', function() {
    const escolha = this.value;

    if(escolha === "arcb"){
        pvi = 8; 
        pvn = 2;
        pmn = 6;
        bonusA = 1
    }
     if(escolha === "arcf"){
        pvi = 8; 
        pvn = 2;
        pmn = 6;
        bonusA = 2
    }   
     if(escolha === "arcm"){
        pvi = 8; 
        pvn = 2;
        pmn = 6;
        bonusA = 1
    }
    else if(escolha ==="barb"){

        pvi = 24;
        pvn = 6;
        pmn = 3;
    }
    else if(escolha ==="bardo"){

        pvi = 12;
        pvn = 3;
        pmn = 4;
    }
    else if(escolha ==="buc"){

        pvi = 16;
        pvn = 4;
        pmn = 3;
    }
    else if(escolha ==="cac"){

        pvi = 16;
        pvn = 4;
        pmn = 4;
    }  
    else if(escolha ==="cav"){

        pvi = 20;
        pvn = 5;
        pmn = 3;
    }
     else if(escolha ==="cle"){

        pvi = 16;
        pvn = 4;
        pmn = 5;
    }     
    else if(escolha ==="dru"){

        pvi = 16;
        pvn = 4;
        pmn = 4;
    }
    else if(escolha ==="fra"){

        pvi = 12;
        pvn = 3;
        pmn = 6;
    }
    else if(escolha ==="gue"){

        pvi = 20;
        pvn = 5;
        pmn = 3;
    }
    else if(escolha ==="in"){

        pvi = 12;
        pvn = 4;
        pmn = 4;
     }
    else if(escolha ==="la"){

        pvi = 12;
        pvn = 3;
        pmn = 4;
    }
    else if(escolha ==="lu"){

        pvi = 20;
        pvn = 5;
        pmn = 3;
    }
    else if(escolha ==="no"){

        pvi = 16;
        pvn = 4;
        pmn = 4;
    }
    else if(escolha ==="pa"){

        pvi = 20;
        pvn = 5;
        pmn = 3;
    }

});


//função para calcular vida e pm
document.getElementById("mandar").onclick = function calculo(){

//Atributos necessarios para calculo de vida pm e sanidade
const cons = Number(document.getElementById("cons").value);
const sab = Number(document.getElementById("sab").value);
const nivel = Number(document.getElementById("nivel").value);
const car = Number(document.getElementById("car").value);
const int = Number(document.getElementById("int").value);
let bonus


//Caso não tenha o pvi(Pontos de vida inicial) setado, pede para selecionar uma classe.

    if(!pvi){
        alert("selecione uma classe")
    }
    else{
        


    //Quando o Jogador usa elfo ele ganha +1 ponto de mana por nivel
        const elfo = (document.getElementById("elfo").checked);
        if(elfo==true){
            bonus = 1
        }
        else{  
            bonus = 0
        }



        let PMT, PVT, PVST, PMsT;

        PVST = nivel*(cons+pvn);
        PVT = pvi+(PVST);
        //Bonus de mana para arcanistas:
        if(bonusA==1)
            {PMT =nivel*(pmn+bonus)+int}
        else if(bonusA==2)
            {PMT =nivel*(pmn+bonus)+car}
        //se não for arcanista
        else{
            PMT = nivel*(pmn+bonus);
        };

      
    


        //caso o Player não tenha preenchido os atributos:
        if(!cons||!sab){
            alert("Coloque Constituição e Sabedoria");
        }
        else{
            document.getElementById("pv").textContent = `PV TOTAL: ${PVT}`
            document.getElementById("pmm").textContent = `PM TOTAL: ${PMT}`
        }
    }
}