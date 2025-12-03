export const prologo = {
  id: "prologo",
  text: `
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
          
          <p class="destaque-personagem">É aqui que você entra, <span class="dynamic-name">[NOME_DO_JOGADOR]</span>.<br>
          Em um escritório qualquer, em uma madrugada qualquer,<br>
          prestes a abrir um arquivo que não deveria existir.</p>
        </div>
        
        <div class="instrucao">
          <p>Para começar, digite seu nome:</p>
          <input type="text" id="playerNameInput" placeholder="Seu nome ou codinome" maxlength="20">
          <button onclick="iniciarJogo()" class="btn-continuar">INICIAR JORNADA</button>
        </div>
      </div>
    </div>
    
    <script>
      window.iniciarJogo = async () => {
        const nome = document.getElementById('playerNameInput').value;
        if (!nome || nome.trim() === '') {
          alert('O Eixo exige identificação.');
          return;
        }
        
        // Importar e configurar jogador
        const playerModule = await import('../core/player.js');
        playerModule.player.setName(nome);
        
        // Carregar Ato I
        const ato1Module = await import('./ato1.js');
        const engine = (await import('../core/engine.js')).engine;
        engine.carregarCena('ato1_cena1', ato1Module.ato1_cena1);
      };
    </script>
  `
};