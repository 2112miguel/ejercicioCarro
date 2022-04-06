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
    exhibido:false,
    inflar: false,
    viaje:false
};

const colors=[
    "Azul",
    "Rojo",
    "Negro",
    "Blanco"
]

const colocarAceite=(carro)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            carro.aceite=6
            resolve(carro)
        },1500);
    });
};

const colocarGasolina =(carro)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            carro.gasolina=30
            console.log("El carro se ha llenado de gasolina")
            resolve(carro)
        },4000);
    });
};

const colocarLLanta =(carro)=>{
    return new Promise((resolve,reject)=>{
        if(carro.inflar==true){
            carro.carroceria.llantas=4;
            console.log("Llantas montadas con exito")
            resolve(carro)
        }
    });
};

const pintar = (carro,color) => {  
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("El carro se esta pintando")
            carro.chasis.vestidura=true;
            
            if(colors.find(colorArray=>colorArray==color)==color){
                carro.carroceria.color=color
                resolve(carro)
            }
            else{
                reject("Color incorrecto")
            }
        },2000);
    })
};

const ensamblarPuertas =(carro)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Se estan ensamblando las puertas")
            carro.carroceria.puertas=5;
            carro.carroceria.puertas=true;
            resolve(carro)
        },1000)
    })
}

const colocarVidrio =(carro,numVidrio)=>{
    return new Promise((resolve,reject)=>{
        console.log("Se estan montando los vidrios");
        setTimeout(()=>{
            if(numVidrio==6){
                carro.carroceria.ventana=6;
                resolve(carro)
            }
            else{
                reject("Numero de vidrios invalido")
            }
        },1000);
    })
}

const lijarCarroceria = (carro) => {
    
    return new Promise((resolve,reject)=>{
     //   carro.carroceria.llantas=4
        setTimeout(()=>{
            console.log("El carro se esta lijando")
            carro.carroceria.lijada=true;
            resolve(carro) 
        },3000);
    });
};

const inflarLLanta = (carro)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            carro.inflar=true
            console.log("Las llantas se han inflado")
            resolve(carro)
        },2500);
    });
}

const construirChasis = async(carro,color)=>{
    console.log("El carro esta siendo construido",carro1)
    const carroVestir = await pintar(carro,color);
    const colocarVidrios = await colocarVidrio(carroVestir,6);
    const lijarCarro= await lijarCarroceria(colocarVidrios);
    const colocarPuertas = await ensamblarPuertas(lijarCarro);
    carro.chasis.ensamblado=true;
    console.log("El carro fue ensamblado");
   // const carroEnsamblar = await ensamblar(carroVestir);
};

const lavarCarro=(carro)=>{
    return new Promise((resolve,reject)=>{
        console.log("Carro lavado");
        carro.limpio=true;
        resolve(carro)
    });
};

const llevarAgencia = (carro)=>{
    setTimeout(() => {
        lavarCarro(carro)
        carro.location="Agencia";
        console.log("El carro esta en viaje");
        carro.viaje=true;
    }, 4000);
}

const recibirAgencia=(carro)=>{
    if(carro.viaje==true){
        console.log("El carro llego a la agencia");
        console.log("El carro esta en exhibixion");
        carro.viaje=false;
    }
}

const prepararVenta = (carro)=>{
    console.log("El carro se esta preparando para enviar a la agencia")
    const inflarLlantas= inflarLLanta(carro);
    const montarLlantas=  colocarLLanta(inflarLlantas);
    const llenarTanque=  colocarGasolina(montarLlantas);
    const llenarAceite=  colocarAceite(llenarTanque)
    console.log("El carro esta preparando para enviar a la agencia")
}

construirChasis(carro1, "Rojo");
prepararVenta(carro1);
llevarAgencia(carro1);
recibirAgencia(carro1);
