const autos = require ('./autos');

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
        if(autos.filter(row => row.vendido === true).length > 0){
            let precioAutoVendido = autos.filter(row => row.precio);
            return precioAutoVendido;
        } else {
            return null;    
        }
    },
        
    }





concesionaria.venderAuto('APL123');
console.log(concesionaria.listaDeVentas());


        
