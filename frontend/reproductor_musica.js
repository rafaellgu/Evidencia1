// objetos
const reproductorMusica = {
    estado:"apagado",
    play : function(cancion){
        if(this.estado == "apagado"){
            console.log(`comenzando reproduccion de cancion ${cancion}...`)
            //cambiar el estado
            this.estado = "play"
        }else{
            console.log(`... cancion en ejecucion: stop para parar`)
        }
    },
    stop : function(){
        if(this.estado == "apagado"){
            console.log(`reproduccion ya esta apagado`)
        }else{
            console.log(`apagando reproductor...`)
            this.estado="apagado"
        }        
    },

    getEstado : function(){
        return this.estado
    },
    seteEstado : function(estado){
        this.estado = this.estado
    }
}
reproductorMusica.play("himno nacional");
// reproductorMusica.stop();
// reproductorMusica.stop();


