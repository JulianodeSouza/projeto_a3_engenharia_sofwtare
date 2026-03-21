import express, { Express } from "express";
import multer from "multer";
import * as dotenv from "dotenv";
import { router } from "./api";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar multer
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "uploads/");
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Rotas
app.use("/", router);

// Iniciar servidor com verificação de migrations
async function startServer() {
  try {
    // Iniciar servidor
    app.listen(port, () => {
      console.log(`\n✅ Servidor rodando em http://localhost:${port}\n`);
    });
  } catch (error) {
    console.error("❌ Erro ao iniciar servidor:", error);
    process.exit(1);
  }
}

// Executar servidor
startServer();

export default app;
