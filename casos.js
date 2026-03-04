/**
 * Banco de casos para o simulador "Desmonte a Engrenagem Triádica"
 * Baseado em trechos reais de inquéritos e sentenças
 */

const casos = [
    {
        id: 1,
        titulo: "Reconhecimento Fotográfico por WhatsApp",
        excerpt: `"A vítima foi contatada via WhatsApp pelo investigador, que enviou apenas uma foto do suspeito, questionando: 'É este mesmo?'. A vítima respondeu: 'Acho que é ele sim, parecido'. O investigador registrou como 'reconhecimento positivo'. Não foram realizadas outras diligências para buscar outros suspeitos com características similares."`,
        estagio: "Estágio 1",
        estagioNum: 1,
        viesCorreto: "tunnel",
        explicacao: "Fixação em suspeito único com base em reconhecimento sugestivo, sem descarte de alternativas (indicador crítico: <24h sem checagem). Caracteriza tunnel vision institucional."
    },
    {
        id: 2,
        titulo: "Álibi Desconsiderado",
        excerpt: `"O suspeito apresentou comprovante de ponto eletrônico e testemunha (chefe) confirmando que estava trabalhando no horário do crime. O delegado registrou: 'Álibi frágil, pois o chefe é amigo do suspeito. Mantemos a linha investigativa.' Não houve tentativa de corroborar ou refutar o álibi com outros meios."`,
        estagio: "Estágio 2",
        estagioNum: 2,
        viesCorreto: "confirmation",
        explicacao: "Reinterpretação hierárquica de exculpatórias (álibi → 'fraude'). Busca seletiva de elementos confirmatórios. Confirmation bias em ação."
    },
    {
        id: 3,
        titulo: "Sentença com Reinterpretação",
        excerpt: `"Embora o laudo pericial não tenha encontrado DNA do acusado, isso não exclui sua participação, pois pode ter utilizado luvas ou havido contaminação. As testemunhas, apesar de contraditórias, foram coerentes nos pontos principais. O conjunto probatório, ainda que indireto, é robusto para a condenação."`,
        estagio: "Estágio 3",
        estagioNum: 3,
        viesCorreto: "hindsight",
        explicacao: "Retrovalidação plena: ambiguidades reinterpretadas como provas claras após o desfecho. Hindsight bias na fundamentação judicial."
    },
    {
        id: 4,
        titulo: "Prisão Preventiva Decretada",
        excerpt: `"O Ministério Público, reproduzindo integralmente o relatório policial, requereu a prisão preventiva com base no 'forte indício de autoria' derivado do reconhecimento fotográfico. O juiz deferiu, destacando a 'consistência das provas' sem qualquer análise crítica do reconhecimento."`,
        estagio: "Estágio 3",
        estagioNum: 3,
        viesCorreto: "tunnel",
        explicacao: "Efeito cascata: promotor reproduz narrativa policial; juiz valida sem questionamento. Tunnel vision institucional em cadeia."
    },
    {
        id: 5,
        titulo: "Negativa de Revisão Criminal",
        excerpt: `"A defesa apresentou novas provas (imagens de câmera) demonstrando que o acusado estava em outro local. O tribunal negou o pedido de revisão criminal, sob o argumento de que 'a coisa julgada não pode ser relativizada por provas que deveriam ter sido produzidas na instrução'."`,
        estagio: "Estágio 4",
        estagioNum: 4,
        viesCorreto: "hindsight",
        explicacao: "Resistência institucional à revisão mesmo diante de novas provas robustas. Ilusão de inevitabilidade e blindagem."
    },
    {
        id: 6,
        titulo: "Denúncia Anônima Não Verificada",
        excerpt: `"Uma denúncia anônima apontou 'um homem moreno, de boné vermelho' como autor do roubo. Em menos de 6 horas, a polícia localizou M.S., único moreno de boné vermelho nas proximidades, e o apresentou à vítima, que o reconheceu. Não houve tentativa de verificar a credibilidade da denúncia ou buscar outras pessoas com características similares."`,
        estagio: "Estágio 1",
        estagioNum: 1,
        viesCorreto: "tunnel",
        explicacao: "Fixação em suspeito com base em denúncia anônima não checada. Tempo <24h sem descarte de alternativas. Tunnel vision inicial."
    },
    {
        id: 7,
        titulo: "Laudo Negativo Descartado",
        excerpt: `"O exame de DNA não identificou o suspeito, mas o perito consignou que 'a ausência de perfil não exclui a participação, pois a amostra pode estar degradada'. O promotor, na denúncia, afirmou que 'o laudo é inconclusivo, não afastando a autoria'. O juiz, na sentença, mencionou que 'a prova pericial não elidiu os demais indícios'."`,
        estagio: "Estágio 3",
        estagioNum: 3,
        viesCorreto: "confirmation",
        explicacao: "Reinterpretação hierárquica de exculpatórias (DNA negativo → 'inconclusivo'). Confirmation bias na cadeia institucional."
    },
    {
        id: 8,
        titulo: "Comportamento Nervoso como Indício",
        excerpt: `"O abordado demonstrou nervosismo e suor excessivo durante a abordagem, o que, segundo os policiais, é 'típico de criminoso'. Com base nisso, foi realizada busca pessoal, encontrando pequena quantidade de droga. O delegado, no relatório, destacou o 'comportamento suspeito' como indício de envolvimento com o tráfico."`,
        estagio: "Estágio 1",
        estagioNum: 1,
        viesCorreto: "tunnel",
        explicacao: "Fixaçã
