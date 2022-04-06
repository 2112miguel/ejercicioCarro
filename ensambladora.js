const carro1= {
    chasis: {
        vestidura: false,
        ensamblado: false
    },
    carroceria: {
        puertas:false,
        ventana:0,
        lijada:false,
        color: "",
        llantas: 0,
    },
    gasolina: 0,
    aceite: 0,
    limpio: false,
    location: "Fabrica",
    inventario: false,
    exhibido:false
};

const colors=[
    "Azul",
    "Rojo",
    "Negro",
    "Blanco"
]

const pintar = (carro,color) => {  
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("El carro se esta pintnado")
            carro.chasis.vestidura=true;
            
            if(colors.find(colorArray=>colorArray==color)==color){
                carro.carroceria.color=color
                //resolve(carro.carroceria.color)
            }
            else{
                reject("Color incorrecto")
            }
        },1000);
    })
};

const colocarVidrio =(carr,numVidrio)=>{
    return new Promise((resolve,reject)=>{
        console.log("Se estan montando los vidrios");
        setTimeout(()=>{
            if(numVidrio==6){
                carro.carroceria.ventana=6;
            }
            else{
                reject("Numero de vidrios invalido")
            }
        });
    })
}

const ensamblar = (carro) => {
    return new Promise(()=>{
        carro.carroceria.puertas=true;
        
        carro.carroceria.lijada=true;
        carro.carroceria.llantas=4
        
        setTimeout(()=>{
            console.log("El carro se esta ensamblando")
            carro.chasis.ensamblado=true;
        },3000);
    });
};

const construirChasis = async(carro,color)=>{
    console.log("El carro esta siendo construido",carro1)
    const carroVestir = await vestir(carro,color);
    const carroEnsamblar = await ensamblar(carroVestir);
};

const llevarAgencia = (carro)=>{
    setTimeout(() => {
        carro.aceite=6;
        carro.gasolina=20;
        carro.limpio=true;
        carro.location="Agencia"
        carro.inventario=true;
        carro.exhibido=true
        console.log("El carro esta en la agencia: ",carro1)
    }, 4000);
}

//console.log(carro1)
construirChasis(carro1, "rojo");
llevarAgencia(carro1)
