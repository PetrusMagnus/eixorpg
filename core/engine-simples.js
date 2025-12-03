class EngineSimples {
    constructor() {
        this.currentScene = null;
        this.playerName = "Agente";
        this.state = {
            estabilidadeEixo: 7,
            conscienciaPublica: 2,
            influenciaYango: 1,
            integridadeMoral: 0,
            escolhas: []
        };
    }
    
    async carregarCena(sceneId) {
        console.log("Tentando carregar cena:", sceneId);
        const container = document.getElementById('game-content');
        
        if (!container) {
            console.error("Container 'game-content' não encontrado!");
            return;
        }
        
        try {
            let sceneContent = '';
            
            switch(sceneId) {
                case 'prologo':
                    sceneContent = this.getPrologoContent();
                    break;
                case 'ato1_cena1':
                    const ato1Module = await import('../scenes/ato1.js');
                    sceneContent = ato1Module.ato1_cena1.text;
                    break;
                case 'ato1_cena2':
                    const ato1Module2 = await import('../scenes/ato1.js');
                    sceneContent = ato1Module2.ato1_cena2.text;
                    break;
                case 'ato1_cena3':
                    const ato1Module3 = await import('../scenes/ato1.js');
                    sceneContent = ato1Module3.ato1_cena3.text;
                    break;
                case 'ato1_escolha':
                    const ato1Module4 = await import('../scenes/ato1.js');
                    sceneContent = ato1Module4.ato1_escolha.text;
                    break;
                default:
                    sceneContent = this.getPrologoContent();
            }
            
            sceneContent = sceneContent.replace(/\[NOME_DO_JOGADOR\]/g, this.playerName);
            
            container.innerHTML = sceneContent;
            
            this.currentScene = sceneId;
            
            await this.salvarProgresso();
            
            window.scrollTo(0, 0);
            
            console.log("✅ Cena carregada:", sceneId);
            
        } catch (error) {
            console.error("❌ Erro ao carregar cena:", error);
            container.innerHTML = `
                <div class="error-screen">
                    <h2><i class="fas fa-exclamation-triangle"></i> ERRO</h2>
                    <p>Falha ao carregar a cena ${sceneId}.</p>
                    <p><small>${error.message}</small></p>
                    <button onclick="window.engine.carregarCena('prologo')" class="btn btn-secondary">
                        <i class="fas fa-home"></i> VOLTAR AO INÍCIO
                    </button>
                </div>
            `;
        }
    }
    
    getPrologoContent() {
        return `
            <div class="scene prologo">
                <div class="narrador">
                    <h1>EIXO: A Guerra das Memórias</h1>
                    
                    <div class="text-block">
                        <p>Brasília não nasceu apenas de concreto.</p>
                        <p>Entre eixos, asas e monumentos, ergueu-se também algo invisível:<br>
                        uma máquina paciente, feita de decisões, omissões e memórias arquivadas.</p>
                        
                        <p class="destaque">Alguns a chamam de governo.<br>
                        Outros, de sistema.<br>
                        Nos documentos mais antigos, porém, ela recebe outro nome: <strong>Eixo</strong>.</p>
                        
                        <p>O Eixo não tem rosto.<br>
                        Ele usa rostos.</p>
                        
                        <p>E, quando a verdade é distorcida vezes demais,<br>
                        a própria realidade começa a falhar.</p>
                        
                        <p class="destaque-personagem">É aqui que você entra, <span class="player-name">${this.playerName}</span>.<br>
                        Em um escritório qualquer, em uma madrugada qualquer,<br>
                        prestes a abrir um arquivo que não deveria existir.</p>
                    </div>
                    
                    <button onclick="window.engine.carregarCena('ato1_cena1')" class="btn btn-primary">
                        <i class="fas fa-play"></i> INICIAR JORNADA
                    </button>
                </div>
            </div>
        `;
    }
    
    executarEscolha(opcao) {
        console.log("Executando escolha:", opcao);
        
        switch(opcao) {
            case 'A':
                this.state.estabilidadeEixo += 2;
                this.state.integridadeMoral -= 1;
                break;
            case 'B':
                this.state.conscienciaPublica += 1;
                this.state.estabilidadeEixo -= 2;
                break;
            case 'C':
                this.state.influenciaYango += 2;
                this.state.integridadeMoral += 1;
                break;
        }
        
        this.state.escolhas.push(opcao);
        
        const container = document.getElementById('game-content');
        container.innerHTML = `
            <div class="scene resultado">
                <div class="narrador">
                    <h2>ESCOLHA REGISTRADA</h2>
                    <p>Você escolheu a Opção ${opcao}.</p>
                    
                    <div class="terminal">
                        <div class="terminal-line">> Escolha ${opcao} registrada no sistema</div>
                        <div class="terminal-line">> Consequências aplicadas</div>
                        <div class="terminal-line">> Estado atual:</div>
                        <div class="terminal-line">  - Estabilidade do Eixo: ${this.state.estabilidadeEixo}/10</div>
                        <div class="terminal-line">  - Consciência Pública: ${this.state.conscienciaPublica}/10</div>
                        <div class="terminal-line">  - Influência de Yango: ${this.state.influenciaYango}/10</div>
                        <div class="terminal-line">  - Sua Integridade Moral: ${this.state.integridadeMoral}/5</div>
                    </div>
                    
                    <p class="destaque">O Eixo observa sua decisão. As consequências virão.</p>
                    
                    <button onclick="window.engine.carregarCena('prologo')" class="btn btn-secondary">
                        <i class="fas fa-redo"></i> REINICIAR
                    </button>
                    <button onclick="window.engine.continuarJornada()" class="btn btn-primary" style="margin-left: 10px;">
                        <i class="fas fa-forward"></i> CONTINUAR
                    </button>
                </div>
            </div>
        `;
        
        
        this.salvarProgresso();
    }
    
    continuarJornada() {
   
        alert("ATO II em desenvolvimento... Voltando ao início.");
        this.carregarCena('prologo');
    }
    
    async salvarProgresso() {
  
        const user = firebase.auth().currentUser;
        if (!user) return;
        
        try {
            await firebase.firestore().collection('saves').doc(user.uid).set({
                estado: this.state,
                cenaAtual: this.currentScene,
                jogador: this.playerName,
                salvoEm: firebase.firestore.FieldValue.serverTimestamp()
            });
            console.log("✅ Progresso salvo");
        } catch (error) {
            console.error("❌ Erro ao salvar:", error);
        }
    }
    
    setPlayerName(name) {
        this.playerName = name;
    }
}

window.engine = new EngineSimples();