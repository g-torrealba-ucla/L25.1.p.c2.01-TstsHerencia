import Cl_entidadA from "./Cl_entidadA.js";
import Cl_entidadB from "./Cl_entidadB.js";

export default class Cl_main {
  constructor() {
    let entH = new Cl_entidadA("5"),
      entJ = new Cl_entidadB("1", "2"),
      entI = new Cl_entidadB(3, 4);
  }
}
