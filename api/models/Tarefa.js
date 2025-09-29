import { v4 as uuidv4 } from "uuid";

class Tarefa {
  constructor(descricao, concluida = false) {
    this.id = uuidv4();
    this.descricao = descricao;
    this.concluida = concluida;
  }
}

export default Tarefa;
