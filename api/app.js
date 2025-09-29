import express from "express";
import tarefasRoutes from "./routes/tarefasRoutes.js";
import cors from "cors"; // 💡 Importe o CORS

const app = express();

// 💡 1. Use o CORS antes de qualquer rota ou body-parser
app.use(cors()); 

// 2. Middleware para processar JSON (body-parser)
app.use(express.json()); 

// 3. Adicione a rota de status (para resolver o "Cannot GET /" no navegador)
app.get('/', (req, res) => {
    res.status(200).json({ message: 'API de Tarefas online!', endpoints: 'Use /tarefas' });
});

// 4. Suas rotas
app.use(tarefasRoutes);

// ... remova ou comente app.listen(...)

export default app;