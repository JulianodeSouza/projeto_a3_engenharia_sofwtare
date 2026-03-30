# BarberShop API - Sistema de Barbearia com Visagismo

## 🎓 Trabalho Final - Modelos, Métodos e Técnicas de Engenharia de Software

**Instituição:** UNICURITIBA
**Matéria:** Modelos, Métodos e Técnicas de Engenharia de Software

Este projeto é o resultado do trabalho acadêmico final (A3) da matéria de **Modelos, Métodos e Técnicas de Engenharia de Software** da universidade UNICURITIBA. O objetivo é aplicar os conceitos de engenharia de software, arquitetura de sistemas, gestão de requisitos e boas práticas de desenvolvimento em um projeto real e funcional.

## 📋 Descrição

API REST completa para gerenciamento de uma barbearia com funcionalidades avançadas de visagismo. O sistema utiliza inteligência artificial integrada com Python para analisar fotos de usuários e gerar recomendações personalizadas de cortes de cabelo com base em características faciais.

## 🎯 Funcionalidades Principais

```
BarberShop API
├── 👥 Gerenciamento de Usuários (clientes)
├── 💈 Gerenciamento de Barbeiros (profissionais)
├── 📅 Sistema de Agendamentos
└── 🤖 Visagismo com IA (análise facial + recomendações)
```

## 🛠️ Stack Técnico

| Camada                       | Tecnologia                   |
| ---------------------------- | ---------------------------- |
| **Backend**                  | Node.js 18+ com TypeScript 5 |
| **Framework**                | Express.js 5.x               |
| **Banco de Dados**           | MySQL 8.0+                   |
| **ORM**                      | Sequelize 6.x                |
| **Upload de Arquivos**       | Multer 2.x                   |
| **AI**                       | Google Gemini                |
| **Processamento de Imagens** | Google Gemini                |
| **Versionamento**            | Git (GitHub)                 |

## 🌳 Estrutura Geral

```
projeto_a3_engenharia_sofwtare/
│
├── 🔐 .env.example                    # Template de variáveis
│
├── 📂 src/                            # Código fonte principal
│   ├── 📂 api/                        # API e roteamento
│   │   ├── 📄 index.ts                # Configuração de rotas principais
│   │   ├── 📂 routes/                 # Endpoints (endpoints específicas)
│   │   └── 📂 middlewares/            # Middlewares (lógica compartilhada)
│   │
│   ├── 📂 services/                   # Lógica de negócio
│   │
│   ├── 📂 infra/                      # Infraestrutura e dados
│   │   ├── 📂 config/                 # Configurações
│   │   │   ├── 📄 database.ts         # Configuração MySQL/Sequelize
│   │   │   ├── 📄 sequelize-config.js # CLI config
│   │   │
│   │   ├── 📂 models/                 # Modelos Sequelize (ORM)
│   │   │
│   │   ├── 📂 repository/             # Data Access Objects (DAO)
│   │   │
│   │   ├── 📂 migrations/             # Versionamento de banco de dados
│   │   │
│   │   └── 📂 scripts/             # Scripts utilitários
│   │       └── 📄 ask-name-migration.js # Gera nome personalizado para arquivo de migration
|   |   
│   ├── 📂 utils/                   # Funções utilitárias
│   │
│   └── 📂 types/                   # Tipos/Interfaces TypeScript
│
├── 📂 uploads/                     # Diretório de uploads (fotos de usuários)
│   └── (arquivos de fotos aqui)

```
