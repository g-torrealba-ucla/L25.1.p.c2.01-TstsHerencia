import Cl_entidadA from "./Cl_entidadA.js";
export default class Cl_entidadB extends Cl_entidadA {
  constructor(attX, attY) {
    super(attX);
    this.attX *= 2;
    this.attY = attY;
  }
  set attY(a) {
    this._attY = a;
  }
  get attY() {
    return this._attY;
  }
  metodoA() {
    return 3;
  }
  metodoB() {
    return super.metodoB() + 2;
  }
  metodoC() {
    return this.metodoB() + 5;
  }
  metodoD() {
    return super.metodoA() + this.attY;
  }
}
