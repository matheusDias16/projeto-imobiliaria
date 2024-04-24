
export class ConteudoSite {
   public home :{
      textoBusca : string
      textoDestaque: string
      imoveisDestaque: number[] 
     
  }

   constructor(){
      this.home = {
         textoBusca : '',
         textoDestaque : '',
         imoveisDestaque : [] 
     } 
   }


}
