export default class Cl_entidadA{
    constructor(attX){
      this.attX = attX
    }
    set attX(a){
      this._attX = +a
    }
    get attX(){
      return this._attX
    }
    metodoA(){
      return this.attX * 2
    }
    metodoB(){
      return this.attX * 3
    }
  }
  