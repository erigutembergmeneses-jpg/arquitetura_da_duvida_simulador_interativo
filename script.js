/**
 * Simulador "Desmonte a Engrenagem Triádica"
 * Lógica completa de interação, feedback e pontuação
 * @author Erigutemberg Meneses
 * @version 2.0
 */

class TriadicEngineSimulator {
    constructor(casos) {
        this.casos = casos;
        this.currentIndex = 0;
        this.score = {
            acertos: 0,
            total: casos.length,
            historico: []
        };
        this.selectedBias = null;
        this.answered = false;
        
        // Elementos DOM
        this.elements = {
            caseNumber: document.getElementById('caseNumber'),
            caseEstagio: document.getElementById('caseEstagio'),
            caseTitle: document.getElementById('caseTitle'),
            caseExcerpt: document.getElementById('caseExcerpt'),
            checkBtn: document.getElementById('checkBtn'),
            nextBtn: document.getElementById('nextBtn'),
            feedbackContent: document.getElementById('feedbackContent'),
            referenceList: document.getElementById('referenceList'),
            scoreAcertos: document.getElementById('scoreAcertos'),
            scoreTotal: document.getElementById('scoreTotal'),
            scorePercentual: document.getElementById('scorePercentual'),
            progressFill: document.getElementById('progressFill'),
            biasOptions: document.querySelectorAll('.bias-option'),
            biasRadios: document.querySelectorAll('input[name="bias"]'),
            infoBtn: document.getElementById('infoBtn'),
            shareBtn: document.getElementById('shareBtn'),
            exportBtn: document.getElementById('exportData'),
            heroCasos: document.getElementById('heroCasos'),
            heroVieses: document.getElementById('heroVieses'),
            heroEstagios: document.getElementById('heroEstagios')
        };
        
        this.init();
    }
    
    init() {
        this.loadCase(0);
        this.attachEvents();
        this.updateStats();
        this.animateHero();
    }
    
    attachEvents() {
        // Seleção de viés
        this.elements.biasOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                const radio = option.querySelector('input[type="radio"]');
                if (radio) {
                    radio.checked = true;
                    this.selectedBias = radio.value;
                    this.elements.checkBtn.disabled = false;
                    
                    // Feedback visual
                    this.elements.biasOptions.forEach(opt => {
                        opt.querySelector('.bias-card').classList.remove('selected');
                    });
                    option.querySelector('.bias-card').classList.add('selected');
                }
            });
        });
        
        // Botão verificar
        this.elements.checkBtn.addEventListener('click', () => this.checkAnswer());
        
        // Botão próximo
        this.elements.nextBtn.addEventListener('click', () => this.nextCase());
        
        // Botão info
        this.elements.infoBtn.addEventListener('click', () => this.showModal());
        
        // Botão compartilhar
        this.elements.shareBtn.addEventListener('click', () => this.shareResult());
        
        // Botão exportar
        if (this.elements.exportBtn) {
            this.elements.exportBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.exportData();
            });
        }
        
        // Fechar modal
        document.querySelector('.modal-close').addEventListener('click', () => {
            document.getElementById('infoModal').classList.remove('active');
        });
        
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('active');
            }
        });
        
        // Teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' && !this.answered) {
                this.nextCase();
            } else if (e.key === 'Enter' && this.selectedBias) {
                this.checkAnswer();
            } else if (e.key === 'Escape') {
                document.getElementById('infoModal').classList.remove('active');
            }
        });
    }
    
    loadCase(index) {
        const caso = this.casos[index];
        if (!caso) return;
        
        this.elements.caseNumber.textContent = `Caso ${index + 1}/${this.casos.length}`;
        this.elements.caseEstagio.textContent = caso.estagio;
        this.elements.caseTitle.textContent = caso.titulo;
        this.elements.caseExcerpt.innerHTML = `<p>${caso.excerpt}</p>`;
        
        // Resetar seleção
        this.elements.biasRadios.forEach(radio => radio.checked = false);
        this.elements.biasOptions.forEach(opt => {
            opt.querySelector('.bias-card').classList.remove('selected');
        });
        this.selectedBias = null;
        this.answered = false;
        this.elements.checkBtn.disabled = true;
        
        // Resetar feedback
        this.elements.feedbackContent.innerHTML = `
            <div class="feedback-card waiting">
                <div class="feedback-indicator waiting">⏳ Aguardando análise</div>
                <p class="feedback-text">
                    Selecione um viés e clique em "Verificar Análise" para receber feedback baseado na Tabela 2.2.
                </p>
            </div>
        `;
        
        // Atualizar referência
        this.updateReference(caso);
    }
    
    checkAnswer() {
        if (!this.selectedBias || this.answered) return;
        
        const caso = this.casos[this.currentIndex];
        const isCorrect = (this.selectedBias === caso.viesCorreto);
        
        // Atualizar score
        if (isCorrect) {
            this.score.acertos++;
            this.score.historico.push({
                caso: this.currentIndex,
                correto: true,
                selecionado: this.selectedBias
            });
        } else {
            this.score.historico.push({
                caso: this.currentIndex,
                correto: false,
                selecionado: this.selectedBias,
                corretoEra: caso.viesCorreto
            });
        }
        
        this.answered = true;
        this.updateStats();
        this.showFeedback(caso, isCorrect);
    }
    
    showFeedback(caso, isCorrect) {
        const feedbackClass = isCorrect ? 'correct' : 'incorrect';
        const indicatorText = isCorrect ? '✅ Análise Correta' : '❌ Análise Incorreta';
        
        let feedbackHTML = `
            <div class="feedback-card ${feedbackClass}">
                <div class="feedback-indicator ${feedbackClass}">${indicatorText}</div>
                <p class="feedback-text">${caso.explicacao}</p>
        `;
        
        if (!isCorrect) {
            feedbackHTML += `
                <p style="color: #fca5a5; margin-top: 0.5rem;">
                    <strong>Você selecionou:</strong> ${this.getBiasName(this.selectedBias)}<br>
                    <strong>Viés correto:</strong> ${this.getBiasName(caso.viesCorreto)}
                </p>
            `;
        }
        
        feedbackHTML += `</div>`;
        
        // Adicionar dica baseada na tabela
        feedbackHTML += `
            <div class="table-reference" style="margin-top: 1rem;">
                <h4>📌 Aplicação da Tabela 2.2</h4>
                <p style="color: var(--gray-300); font-size: 0.9rem;">
                    ${this.getTableHint(caso)}
                </p>
            </div>
        `;
        
        this.elements.feedbackContent.innerHTML = feedbackHTML;
    }
    
    getBiasName(bias) {
        const nomes = {
            'tunnel': 'Tunnel Vision',
            'confirmation': 'Confirmation Bias',
            'hindsight': 'Hindsight Bias'
        };
        return nomes[bias] || bias;
    }
    
    getTableHint(caso) {
        const dicas = {
            1: "Estágio 1 (0-24h): Fixação em suspeito sem descarte de alternativas - indicador crítico de tunnel vision.",
            2: "Estágio 2 (24h-7d): Reinterpretação de exculpatórias - característica central do confirmation bias.",
            3: "Estágio 3 (7d-sentença): Retrovalidação de ambiguidades - marca do hindsight bias.",
            4: "Estágio 4 (pós-condenação): Blindagem institucional - tunnel vision consolidado."
        };
        return dicas[caso.estagioNum] || "Consulte a Tabela 2.2 para análise detalhada.";
    }
    
    updateReference(caso) {
        let referenceHTML = '';
        
        const referencias = {
            1: {
                estagio: "Estágio 1: Hipótese inicial",
                desc: "Tunnel vision: fixação em suspeito com base em denúncia anônima não checada"
            },
            2: {
                estagio: "Estágio 2: Consolidação",
                desc: "Confirmation bias: reinterpretação de exculpatórias (álibi → fraude)"
            },
            3: {
                estagio: "Estágio 3: Ratificação",
                desc: "Hindsight bias: ambiguidades reinterpretadas como provas claras"
            },
            4: {
                estagio: "Estágio 4: Blindagem",
                desc: "Tunnel vision institucional: resistência à revisão"
            }
        };
        
        const ref = referencias[caso.estagioNum] || referencias[1];
        referenceHTML = `
            <div class="reference-item">
                <span class="reference-estagio">${ref.estagio}</span>
                <span class="reference-desc">${ref.desc}</span>
            </div>
        `;
        
        this.elements.referenceList.innerHTML = referenceHTML;
    }
    
    nextCase() {
        if (this.currentIndex < this.casos.length - 1) {
            this.currentIndex++;
            this.loadCase(this.currentIndex);
        } else {
            // Fim dos casos
            this.showCompletion();
        }
    }
    
    showCompletion() {
        const percentual = Math.round((this.score.acertos / this.score.total) * 100);
        
        this.elements.feedbackContent.innerHTML = `
            <div class="feedback-card correct">
                <div class="feedback-indicator correct">🎉 Simulação Concluída!</div>
                <p class="feedback-text">
                    Você completou todos os ${this.score.total} casos.<br>
                    <strong>Acertos: ${this.score.acertos}</strong> (${percentual}% de aproveitamento)
                </p>
                <p style="margin-top: 1rem; color: var(--gray-300);">
                    Baseado na Tabela 2.2, seu desempenho mostra que você ${
                        percentual >= 70 ? 'já identifica bem os vieses' : 
                        'pode melhorar na identificação dos vieses'
                    }. Continue praticando!
                </p>
            </div>
        `;
        
        this.elements.nextBtn.textContent = 'Reiniciar';
        this.elements.nextBtn.onclick = () => this.restart();
    }
    
    restart() {
        this.currentIndex = 0;
        this.score.acertos = 0;
        this.score.historico = [];
        this.loadCase(0);
        this.updateStats();
        this.elements.nextBtn.textContent = 'Próximo Caso →';
        this.elements.nextBtn.onclick = () => this.nextCase();
    }
    
    updateStats() {
        const percentual = this.score.total > 0 
            ? Math.round((this.score.acertos / this.score.total) * 100) 
            : 0;
        
        this.elements.scoreAcertos.textContent = this.score.acertos;
        this.elements.scoreTotal.textContent = this.score.total;
        this.elements.scorePercentual.textContent = percentual + '%';
        
        const progressWidth = (this.currentIndex + 1) / this.score.total * 100;
        this.elements.progressFill.style.width = progressWidth + '%';
    }
    
    showModal() {
        document.getElementById('infoModal').classList.add('active');
    }
    
    shareResult() {
        const text = `Desmonte a Engrenagem Triádica\nMeu resultado: ${this.score.acertos}/${this.score.total} acertos (${Math.round(this.score.acertos/this.score.total*100)}%)\n#ViesesCognitivos #ErroJudicial`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Desmonte a Engrenagem Triádica',
                text: text,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(text);
            alert('Resultado copiado para a área de transferência!');
        }
    }
    
    exportData() {
        const data = {
            timestamp: new Date().toISOString(),
            score: this.score,
            historico: this.score.historico,
            userAgent: navigator.userAgent
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `engrenagem-triadic-${new Date().toISOString().slice(0,10)}.json`;
        a.click();
    }
    
    animateHero() {
        if (this.elements.heroCasos) {
            this.elements.heroCasos.textContent = this.casos.length;
            this.elements.heroVieses.textContent = '3';
            this.elements.heroEstagios.textContent = '4';
        }
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Verificar se casos está definido (do arquivo casos.js)
    if (typeof casos !== 'undefined') {
        window.simulator = new TriadicEngineSimulator(casos);
    } else {
        console.error('Erro: Banco de casos não carregado');
    }
});
