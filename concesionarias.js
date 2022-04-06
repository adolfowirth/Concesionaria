const autos = require ('./autos');
let persona = require ('./personas');


const concesionaria = {
    autos: autos,

    buscarAuto : function(patente){
        if(autos.filter(row => row.patente === patente).length > 0){
            let patenteBuscada = autos.filter(row => row.patente === patente);
            return patenteBuscada[0];
        } else {
            return null;    
        }
    },

    venderAuto : function(patente){
        let autoVendido = this.buscarAuto(patente);
        return autoVendido.vendido = true;
    },

    autosParaLaVenta : function(){
        let paraVenta = autos.filter(row => row.vendido == false);
        return paraVenta;
    },

    autosNuevos : function (){
        let autoNuevo = this.autosParaLaVenta();
        let filtroNuevo = autoNuevo.filter (row => row.km <= 100);
        return filtroNuevo;
    },

    
    listaDeVentas : function (){
        let autoVendido = this.autos.filter(row =>{
            return row.vendido === true;
        })
        let ganancia = autoVendido.map(row => {
            return row.precio;
        })
        return console.log(ganancia);
    },

    totalDeVentas : function (){
        let listaTotal = this.listaDeVentas();
        if(listaTotal.length === 0){
           return 0;
        } else {
       let total = this.listaDeVentas().reduce(function(acum, valor){
          return acum + valor;
       })
          return total;
        }
     },
        
     
     puedeComprar : function (auto, persona) {
        
        let valorAuto = auto.precio;
        let valorCuotas = valorAuto / auto.cuotas;
        let totalCliente = persona.capacidadDePagoTotal;
        let cuotasCliente = persona.capacidadDePagoEnCuotas;

        if((valorAuto <= totalCliente) && (valorCuotas <= cuotasCliente)){
            return true;
        } else {
            return false;
        }
    },

    autosQuePuedeComprar : function (persona){
        let autosParaVender = this.autosParaLaVenta();
        let autosAptos = autosParaVender.filter( auto => {
            if(this.puedeComprar(auto.patente, persona)){
                return auto;
            }
        })
        return autosAptos;
        
        
    }
    
}

console.log(autosQuePuedeComprar(persona));
