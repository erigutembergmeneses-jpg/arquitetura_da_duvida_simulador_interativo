# ⚙️ Desmonte a Engrenagem Triádica

[![Licença: CC BY-NC-SA 4.0](https://img.shields.io/badge/Licença-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Versão](https://img.shields.io/badge/versão-2.0-blue)](https://github.com/seu-usuario/desmonte-engrenagem-triadic)
[![Demo](https://img.shields.io/badge/demo-online-brightgreen)](https://seu-usuario.github.io/desmonte-engrenagem-triadic)

**Simulador interativo para identificação de vieses cognitivos em investigações criminais**  
Baseado na obra *"Arquiteturas da Dúvida: Como Redesenhar o Sistema Penal Contra os Vieses da Mente Humana"* de **Erigutemberg Meneses**.

![Hero Image](assets/images/hero-bg.jpg)

## 📋 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Fundamentação Teórica](#-fundamentação-teórica)
- [A Tabela 2.2](#-a-tabela-22)
- [Funcionalidades](#-funcionalidades)
- [Como Usar](#-como-usar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Instalação](#-instalação)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Referências](#-referências)
- [Contato](#-contato)

## 🎯 Sobre o Projeto

O **Desmonte a Engrenagem Triádica** é uma ferramenta educacional desenvolvida para capacitar operadores do direito (delegados, promotores, juízes, advogados) e estudantes a identificar precocemente padrões de erro judicial causados por vieses cognitivos.

O simulador apresenta **trechos reais de inquéritos e sentenças** (anonimizados e adaptados) onde o usuário deve identificar qual dos três vieses está predominante:

| Viés | Descrição | Impacto |
|------|-----------|---------|
| **🎯 Tunnel Vision** | Fixação institucional em uma única linha investigativa | Descarte prematuro de hipóteses alternativas |
| **🔍 Confirmation Bias** | Busca seletiva de provas confirmatórias | Reinterpretação de evidências contrárias |
| **👁️ Hindsight Bias** | Reinterpretação retrospectiva de ambiguidades | Ilusão de inevitabilidade da condenação |

### Objetivos Educacionais

- ✅ Identificar **red flags** de tunnel vision em investigações criminais
- ✅ Reconhecer manifestações operacionais de confirmation bias
- ✅ Compreender como o hindsight bias contamina decisões judiciais
- ✅ Aplicar os critérios da **Tabela 2.2** na análise de casos concretos
- ✅ Desenvolver ceticismo saudável em relação a evidências frágeis

## 📚 Fundamentação Teórica

O simulador é fundamentado em pesquisas empíricas sobre vieses cognitivos no sistema de justiça criminal:

### 🔬 Principais Referências

| Autor | Contribuição | Relevância |
|-------|--------------|------------|
| **Kahneman (2011)** | Arquitetura dual da mente (Sistema 1 vs Sistema 2) | Explica a rapidez do julgamento intuitivo |
| **Garrett (2022)** | Análise de 375 exonerações por DNA nos EUA | Identifica padrões recorrentes de erro |
| **Elaad (2022)** | Reinterpretação hierárquica de provas exculpatórias (d=0,48-0,61) | Mensura o efeito do viés de confirmação |
| **PPSC (2019)** | Protocolos canadenses de prevenção de erro judicial | Fornece diretrizes institucionais |
| **STJ - HC 598.886** | Nulidade de reconhecimento fotográfico sugestivo | Jurisprudência aplicada |

### 📊 A Tabela 2.2

O coração do simulador é a **Tabela 2.2 – Progressão do contágio probatório**, que descreve como os vieses se manifestam em cada estágio da investigação:

| Estágio | Tunnel Vision | Confirmation Bias | Hindsight Bias | Indicador Crítico |
|---------|---------------|-------------------|-----------------|-------------------|
| **1. Hipótese inicial (0–24h)** | Fixação em suspeito com base em denúncia anônima não checada | Busca seletiva de elementos confirmatórios | Não ativo | Tempo <24h sem descarte de alternativas |
| **2. Consolidação (24h–7d)** | Descarte não documentado de hipóteses alternativas | Reinterpretação de exculpatórias (ex.: álibi → fraude) | Emergência incipiente | Ausência de registro de hipóteses testadas |
| **3. Ratificação (7d–sentença)** | Efeito cascata: instituições reproduzem narrativa | Subordinação hierárquica de exculpatórias | Retrovalidação plena | Sentença descarta exculpatórias com justificativas especulativas |
| **4. Blindagem (pós-condenação)** | Resistência institucional à revisão | Belief perseverance | Ilusão de inevitabilidade | Recusa em analisar novas provas |

## ✨ Funcionalidades

### 🎮 Simulador Interativo

| Funcionalidade | Descrição |
|----------------|-----------|
| **10 casos reais** | Trechos adaptados de inquéritos e sentenças |
| **3 vieses** | Tunnel vision, confirmation bias e hindsight bias |
| **4 estágios** | Casos distribuídos nos 4 estágios da Tabela 2.2 |
| **Feedback imediato** | Explicação detalhada baseada na literatura |
| **Referência à Tabela 2.2** | Cada resposta vincula-se ao estágio correspondente |

### 📈 Sistema de Progresso

- **Pontuação em tempo real**: Acertos são contabilizados automaticamente
- **Barra de progresso**: Visualização do avanço nos casos
- **Histórico**: Registro das respostas para autoavaliação
- **Exportação de dados**: Possibilidade de exportar resultados em JSON

### 🎨 Interface Moderna

- **Design responsivo**: Funciona em desktop, tablet e mobile
- **Tema escuro**: Desenvolvido para reduzir fadiga visual
- **Animações suaves**: Transições que melhoram a experiência
- **Acessibilidade**: Navegação por teclado e leitores de tela

## 🚀 Como Usar

### Online (recomendado)

Acesse: [https://seu-usuario.github.io/desmonte-engrenagem-triadic](https://seu-usuario.github.io/desmonte-engrenagem-triadic)

### Passo a Passo

1. **Leia atentamente** o trecho do caso apresentado
2. **Identifique** qual viés cognitivo está predominante:
   - 🎯 **Tunnel Vision** – foco exclusivo em uma linha investigativa
   - 🔍 **Confirmation Bias** – busca seletiva de provas confirmatórias
   - 👁️ **Hindsight Bias** – reinterpretação retrospectiva de ambiguidades
3. **Selecione** uma das três opções
4. **Clique em "Verificar Análise"** para receber feedback
5. **Estude o feedback** baseado na Tabela 2.2
6. **Avance** para o próximo caso

### Dicas para Melhor Aproveitamento

- 💡 Os vieses podem atuar em conjunto, mas um costuma ser predominante
- 💡 Consulte a Tabela 2.2 sempre que tiver dúvidas
- 💡 Anote os casos que errou para revisão posterior
- 💡 Compartilhe seus resultados com colegas para discussão

## 📁 Estrutura do Projeto
