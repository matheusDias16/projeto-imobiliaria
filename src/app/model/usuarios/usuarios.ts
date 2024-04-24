export class Usuarios {
    public id : number
    public nomeCompleto : string
    public username : string
    public senha : string
    public favoritos : number 
    public tipo : string

    constructor(){
        this.id = 0
        this.nomeCompleto = ''
        this.username = ''
        this.senha = ''
        this.favoritos = 0 
        this.tipo = ''
    }

}
