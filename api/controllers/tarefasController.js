import Tarefa from "../models/Tarefa.js";

let tarefas = [];

// Criar nova tarefa
export const criarTarefa = (req, res) => {
  const { descricao, concluida } = req.body;

  if (!descricao) {
    return res.status(400).json({ erro: "Descrição é obrigatória!" });
  }

  const novaTarefa = new Tarefa(descricao, concluida || false);
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
};

// Listar todas as tarefas
export const listarTarefas = (req, res) => {
  res.json(tarefas);
};

// Buscar tarefa por ID
export const buscarTarefa = (req, res) => {
  const { id } = req.params;
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada!" });
  }

  res.json(tarefa);
};

// Atualizar tarefa
export const atualizarTarefa = (req, res) => {
  const { id } = req.params;
  const { descricao, concluida } = req.body;

  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada!" });
  }

  if (descricao !== undefined) tarefa.descricao = descricao;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.json(tarefa);
};

// Remover tarefa
export const deletarTarefa = (req, res) => {
  const { id } = req.params;
  const index = tarefas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Tarefa não encontrada!" });
  }

  tarefas.splice(index, 1);
  res.json({ mensagem: "Tarefa removida com sucesso!" });
};
