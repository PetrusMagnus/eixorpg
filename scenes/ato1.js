// scenes/ato1.js - ATO I COMPLETO
export const ato1_cena1 = {
  id: "ato1_cena1",
  text: `
    <div class="scene">
      <div class="hora">02:37</div>
      <div class="narrador">
        <h2>MADRUGADA EM BRASÍLIA</h2>
        
        <div class="text-block">
          <p>Brasília, 02h37.</p>
          
          <p>O prédio onde você trabalha não está completamente vazio, mas parece.
          A maior parte das luzes foi apagada, deixando corredores longos, com lâmpadas frias acesas aqui e ali, 
          como brasas de um incêndio antigo que teima em não morrer.</p>
          
          <p>Você está no setor de processamento de dados administrativos, um daqueles departamentos 
          que ninguém entende direito, mas que mantém a engrenagem girando.</p>
          
          <p>Na tela à sua frente, uma barra de carregamento chega aos 100%.
          Um novo arquivo foi baixado automaticamente do sistema central.</p>
          
          <div class="tela documento">
            <div class="tela-conteudo">
              <h3>PROTOCOLO E-317 — REVISÃO DE MEMÓRIA ADMINISTRATIVA</h3>
              <p><em>Status: rotina antiga, em vigência</em></p>
            </div>
          </div>
          
          <p>Você não se lembra de nenhum Protocolo E-317.</p>
          
          <p>Os procedimentos que você conhece são E-200, E-201, E-256, E-290…
          mas nunca o E-317.</p>
          
          <p>Ainda assim, o sistema marca o documento como "rotina antiga, em vigência".</p>
          
          <p class="destaque">É como se esse protocolo sempre tivesse existido.
          E você simplesmente tivesse esquecido.</p>
        </div>
        
        <button onclick="avancarCena('ato1_cena2')" class="btn-action">
          <i class="fas fa-forward"></i> ABRIR O ARQUIVO
        </button>
      </div>
    </div>
  `
};

export const ato1_cena2 = {
  id: "ato1_cena2",
  text: `
    <div class="scene">
      <div class="hora">02:38</div>
      <div class="narrador">
        <h2>O ARQUIVO</h2>
        
        <div class="text-block">
          <p>Você respira fundo, sente o ar condicionado gelado cortar a pele, e clica no arquivo.</p>
          
          <p>O documento se abre. Letras pretas, frias, burocráticas.</p>
          
          <div class="tela documento-longo">
            <div class="tela-conteudo">
              <h3>PROTOCOLO E-317 — REVISÃO DE MEMÓRIA ADMINISTRATIVA</h3>
              <p>"Considerando a necessidade de alinhar a memória oficial às diretrizes do Eixo de Governo, 
              fica autorizada a adequação retroativa de registros, decisões e atos administrativos, 
              com efeito sobre:</p>
              
              <ul>
                <li>Registros de voto em plenário;</li>
                <li>Decretos de execução orçamentária;</li>
                <li>Resultados de comissões especiais;</li>
                <li>Atos de responsabilização e anistia;</li>
              </ul>
              
              <p>quando considerados incompatíveis com a narrativa institucional em vigor."</p>
            </div>
          </div>
          
          <p>Suas mãos começam a suar.</p>
          
          <p class="destaque">"Adequação retroativa da memória oficial."</p>
          
          <p>Isso não é simples alteração de dados.
          Isso é reescrever o passado.</p>
          
          <p>Você rola a tela para baixo.</p>
          
          <div class="tela assinatura">
            <div class="tela-conteudo">
              <p>Assina eletronicamente,</p>
              <p>em nome da Presidência e do Eixo,</p>
              <p class="assinatura-destaque">P. Yango</p>
            </div>
          </div>
          
          <p>O nome não te é exatamente estranho.</p>
          
          <p>Você não se lembra de conhecê-lo.</p>
          
          <p>Mas, ao ler "P. Yango", uma sensação desagradável percorre a sua espinha —
          como quando se tenta lembrar de um pesadelo logo ao acordar.</p>
        </div>
        
        <button onclick="avancarCena('ato1_cena3')" class="btn-action">
          <i class="fas fa-search"></i> VERIFICAR HISTÓRICO
        </button>
      </div>
    </div>
  `
};

export const ato1_cena3 = {
  id: "ato1_cena3",
  text: `
    <div class="scene">
      <div class="hora">02:39</div>
      <div class="narrador">
        <h2>O RASTRO ANÔNIMO</h2>
        
        <div class="text-block">
          <p>O regulamento interno é claro:</p>
          
          <p>Qualquer documento inconsistente deve ser reportado imediatamente ao superior responsável.</p>
          
          <p>Mas, ao tentar acessar o histórico do Protocolo E-317, o sistema responde com uma mensagem seca:</p>
          
          <div class="tela sistema">
            <div class="tela-conteudo">
              <h3>HISTÓRICO DE ALTERAÇÕES</h3>
              <p>Criado em: [DATA INVÁLIDA]</p>
              <p>Última modificação: [NÃO REGISTRADO]</p>
              <p>Origem: EIXO CENTRAL</p>
              <p>Rastreio de autor: NÃO DISPONÍVEL</p>
            </div>
          </div>
          
          <p>Isto é impossível.
          Nenhum documento oficial surge sem rastro de autor.</p>
          
          <p>Ninguém tem acesso direto ao chamado Eixo Central.
          Pelo menos… ninguém como você.</p>
          
          <p>Um som discreto vibra no seu celular.</p>
          
          <div class="tela sistema">
            <div class="tela-conteudo">
              <h3>GRUPO: SUPORTE EIXO-ADM</h3>
              <p><strong>Colega 1 (02:41):</strong> "Alguém mais recebeu atualização automática de protocolo agora?
              Meu sistema puxou um tal de E-317 do nada. Bug?"</p>
              <p><strong>Colega 2 (02:42):</strong> "Aqui também. Mas sumiu da lista depois de 10 segundos.
              Tô achando isso MUI-TO estranho."</p>
            </div>
          </div>
          
          <p>Você olha para a sua tela.
          O documento ainda está aberto.</p>
          
          <p class="destaque">Você sente que está com algo que não deveria estar nas mãos.</p>
          
          <p>Como se, por um erro do sistema,
          alguém tivesse esquecido de apagar a prova de um crime.</p>
        </div>
        
        <button onclick="avancarCena('ato1_cena4')" class="btn-action">
          <i class="fas fa-file-alt"></i> VER ANEXO
        </button>
      </div>
    </div>
  `
};

export const ato1_cena4 = {
  id: "ato1_cena4",
  text: `
    <div class="scene">
      <div class="hora">02:40</div>
      <div class="narrador">
        <h2>O PRESIDENTE E O EIXO</h2>
        
        <div class="text-block">
          <p>Um ícone pisca discretamente no canto da tela:</p>
          
          <p><strong>ANEXO: DIRETRIZ DE NARRATIVA INSTITUCIONAL — EIXO EXECUTIVO</strong></p>
          
          <p>Você abre.</p>
          
          <div class="tela documento-longo">
            <div class="tela-conteudo">
              <h3>DIRETRIZ DE NARRATIVA INSTITUCIONAL</h3>
              <p>"Para garantir a estabilidade do Eixo e a continuidade da narrativa institucional,</p>
              
              <p>fica reforçada a diretriz de unidade em torno da figura do Presidente em exercício,
              atualmente:</p>
              
              <p class="destaque-personagem">Luiz Inácio da Silva.</p>
              
              <p>A memória administrativa deverá refletir, sempre que necessário,
              a coerência entre passado e presente,
              garantindo que a história registrada sustente a permanência do Eixo."</p>
            </div>
          </div>
          
          <p>Você conhece esse nome.</p>
          
          <p>Não apenas como político, mas como símbolo.</p>
          
          <p>Luiz Inácio da Silva não é apenas um homem,
          é um eixo histórico em torno do qual o país girou e continua girando.</p>
          
          <p class="destaque">A ideia de que a memória oficial do Estado pode ser adaptada
          para sustentar sua figura e o Eixo em torno dele…</p>
          
          <p>não é apenas assustadora.</p>
          
          <p>É perigosa.</p>
        </div>
        
        <button onclick="avancarCena('ato1_cena5')" class="btn-action">
          <i class="fas fa-forward"></i> CONTINUAR
        </button>
      </div>
    </div>
  `
};

export const ato1_cena5 = {
  id: "ato1_cena5",
  text: `
    <div class="scene">
      <div class="hora">02:41</div>
      <div class="narrador">
        <h2>O TELEFONEMA</h2>
        
        <div class="text-block">
          <p>O telefone fixo da sua mesa toca, quebrando o silêncio.</p>
          
          <p>Você se assusta um pouco.
          Telefone tocando quase três da manhã no setor?
          Não é comum.</p>
          
          <p>Você atende.</p>
          
          <div class="destaque-personagem">
            <strong>[NOME_DO_JOGADOR]:</strong><br>
            – Alô… setor administrativo, [NOME_DO_JOGADOR] falando.
          </div>
          
          <p>Do outro lado, uma voz masculina, calma demais para o horário.</p>
          
          <div class="tela sistema">
            <div class="tela-conteudo">
              <h3>CHAMADA TELEFÔNICA</h3>
              <p><strong>Voz ao telefone:</strong> Boa madrugada, [NOME_DO_JOGADOR].
              Estou vendo aqui no painel que o Protocolo E-317 foi aberto na sua estação.</p>
              
              <p><strong>[NOME_DO_JOGADOR]:</strong> Eu… sim, apareceu aqui de forma automática. 
              Eu estava justamente…</p>
              
              <p><strong>Voz ao telefone (cortando):</strong> Não se preocupe.</p>
              
              <p>Esse protocolo faz parte de uma revisão ampla.
              Alguns setores não deveriam tê-lo recebido.
              Deve ter sido um erro de distribuição.</p>
              
              <p>Peço que faça o seguinte:
              feche o documento e o delete imediatamente.</p>
              
              <p>Não é algo para o seu nível de acesso.</p>
            </div>
          </div>
          
          <p>O tom da voz não é agressivo.</p>
          
          <p>Mas há algo por trás dela,
          como se você estivesse falando com alguém acostumado a ser obedecido.</p>
          
          <div class="destaque-personagem">
            <strong>[NOME_DO_JOGADOR]:</strong><br>
            – Certo… Só por curiosidade: com quem eu estou falando?
          </div>
          
          <p>Breve silêncio do outro lado da linha.</p>
          
          <div class="tela sistema">
            <div class="tela-conteudo">
              <p><strong>Voz ao telefone:</strong> Com alguém que prefere que as coisas continuem tranquilas.</p>
              
              <p>Delete o documento, [NOME_DO_JOGADOR].</p>
              
              <p>É melhor assim para você.
              E para todos.</p>
            </div>
          </div>
          
          <p>A ligação cai.</p>
          
          <p>Você olha para a tela.</p>
          
          <p class="destaque">O Protocolo E-317 continua aberto.
          O nome "P. Yango" continua lá, te encarando.</p>
          
          <p>O ícone do anexo, com o nome "Luiz Inácio da Silva", continua brilhando discretamente.</p>
        </div>
        
        <button onclick="avancarCena('ato1_cena6')" class="btn-action">
          <i class="fas fa-forward"></i> CONTINUAR
        </button>
      </div>
    </div>
  `
};

export const ato1_cena6 = {
  id: "ato1_cena6",
  text: `
    <div class="scene">
      <div class="hora">02:42</div>
      <div class="narrador">
        <h2>O PRIMEIRO ECO DE YANGO</h2>
        
        <div class="text-block">
          <p>O ar parece mais pesado.</p>
          
          <p>Você sente um incômodo estranho.</p>
          
          <p>A luz do monitor pisca por um segundo.
          A tela se distorce —
          linhas do texto ondulam como se fossem água.</p>
          
          <p>E, por uma fração de instante,
          você vê algo onde deveria haver apenas letras:</p>
          
          <div class="tela sistema" style="border-color: var(--eixo-red);">
            <div class="tela-conteudo">
              <p style="color: var(--eixo-red); text-align: center; font-family: 'Courier New', monospace;">
                [GLITCH DE IMAGEM DETECTADO]<br>
                [ROSTO NÃO IDENTIFICADO]<br>
                [VOZ: "Você… lembra de mim?"]
              </p>
            </div>
          </div>
          
          <p>Pisca.</p>
          
          <p>A tela volta ao normal.</p>
          
          <p>O documento está ali, intacto, como antes.</p>
          
          <p class="destaque">Talvez tenha sido só o cansaço.</p>
          
          <p>Talvez.</p>
        </div>
        
        <button onclick="avancarCena('ato1_escolha')" class="btn-action">
          <i class="fas fa-forward"></i> TOMAR UMA DECISÃO
        </button>
      </div>
    </div>
  `
};

export const ato1_escolha = {
  id: "ato1_escolha",
  text: `
    <div class="scene">
      <div class="narrador">
        <h2>DECISÃO CRÍTICA</h2>
        
        <div class="text-block">
          <p>O Protocolo E-317 está diante de você.</p>
          
          <p>Um documento que não deveria existir.
          Um nome que não tem registro.
          Uma voz que ordenou que você o apagasse.</p>
          
          <p class="destaque-personagem">O que você faz, [NOME_DO_JOGADOR]?</p>
        </div>
        
        <div class="escolhas-container">
          <div class="escolha-opcao" onclick="escolherOpcao('A')">
            <h3><i class="fas fa-trash"></i> OPÇÃO A — APAGAR O ARQUIVO</h3>
            <p>Obedeça ao telefonema anônimo. Delete o Protocolo E-317 e volte à sua rotina.</p>
            <p class="consequencia">Consequência: +2 Estabilidade do Eixo, -1 Integridade Moral</p>
          </div>
          
          <div class="escolha-opcao" onclick="escolherOpcao('B')">
            <h3><i class="fas fa-exclamation-triangle"></i> OPÇÃO B — DENUNCIAR PELOS CANAIS OFICIAIS</h3>
            <p>Registre uma ocorrência formal. Alerte o sistema sobre o documento suspeito.</p>
            <p class="consequencia">Consequência: +1 Consciência Pública, -2 Estabilidade do Eixo</p>
          </div>
          
          <div class="escolha-opcao" onclick="escolherOpcao('C')">
            <h3><i class="fas fa-search"></i> OPÇÃO C — INVESTIGAR "P. YANGO"</h3>
            <p>Ignore a ordem. Investigue quem é Yango e por que seu nome aparece em documentos que alteram a memória oficial.</p>
            <p class="consequencia">Consequência: +2 Influência de Yango, +1 Integridade Moral</p>
          </div>
        </div>
        
        <div class="text-block" style="margin-top: 30px;">
          <p class="destaque">Atenção: Esta decisão determinará o rumo da sua jornada no Eixo.</p>
        </div>
      </div>
    </div>
  `
};

// Finais do Ato I
export const final_a = {
  id: "final_a",
  text: `
    <div class="scene">
      <div class="narrador">
        <h2>FIM DO ATO I — O APAGAMENTO</h2>
        
        <div class="text-block">
          <p>Suas mãos tremem um pouco, mas você respira fundo.</p>
          
          <p>[NOME_DO_JOGADOR] move o cursor até o menu.</p>
          
          <div class="tela sistema">
            <div class="tela-conteudo">
              <h3>CONFIRMAÇÃO DE EXCLUSÃO</h3>
              <p>Tem certeza de que deseja excluir PROTOCOLO E-317?</p>
              <p>Esta ação não poderá ser desfeita.</p>
            </div>
          </div>
          
          <p>Você clica em "Sim".</p>
          
          <p>A tela pisca.</p>
          
          <p>O arquivo desaparece da lista.</p>
          
          <p>Por alguns segundos, o silêncio é absoluto.</p>
          
          <p>Lá fora, Brasília dorme.</p>
          
          <p class="destaque">Você tem a sensação de que fez o que precisava fazer…
          mas algo na sua mente parece mais vazio do que antes.</p>
          
          <p>Como se tivesse apagado não apenas um documento.</p>
          
          <p>Mas uma lembrança que ainda nem tinha vivido.</p>
        </div>
        
        <div class="tela sistema" style="margin: 30px 0;">
          <div class="tela-conteudo">
            <h3>RELATÓRIO DE CONSEQUÊNCIAS</h3>
            <p>Documento apagado. O Eixo agradece sua cooperação.</p>
            <p><strong>Estado atual do sistema:</strong></p>
            <ul>
              <li>Estabilidade do Eixo: <span id="estabilidadeValue">7</span>/10</li>
              <li>Consciência Pública: <span id="conscienciaValue">2</span>/10</li>
              <li>Influência de Yango: <span id="yangoValue">1</span>/10</li>
              <li>Sua Integridade Moral: <span id="integridadeValue">0</span>/5</li>
            </ul>
          </div>
        </div>
        
        <div style="margin-top: 30px;">
          <button onclick="loadScene('prologo')" class="btn btn-primary">
            <i class="fas fa-redo"></i> JOGAR NOVAMENTE
          </button>
          <button onclick="salvarEVoltar()" class="btn btn-secondary" style="margin-left: 10px;">
            <i class="fas fa-home"></i> SALVAR E SAIR
          </button>
        </div>
        
        <script>
          // Atualizar valores com o estado atual
          document.getElementById('estabilidadeValue').textContent = window.gameState.estabilidadeEixo;
          document.getElementById('conscienciaValue').textContent = window.gameState.conscienciaPublica;
          document.getElementById('yangoValue').textContent = window.gameState.influenciaYango;
          document.getElementById('integridadeValue').textContent = window.gameState.integridadeMoral;
        </script>
      </div>
    </div>
  `
};

export const final_b = {
  id: "final_b",
  text: `
    <div class="scene">
      <div class="narrador">
        <h2>FIM DO ATO I — O DENUNCIANTE</h2>
        
        <div class="text-block">
          <p>Em vez de apagar, você abre outro sistema:
          o canal interno de ocorrências administrativas.</p>
          
          <p>Não é um lugar onde se entra à toa.
          Relatórios ali podem ser rastreados, arquivados, esquecidos…
          ou usados.</p>
          
          <p>Você começa a digitar.</p>
          
          <div class="tela documento">
            <div class="tela-conteudo">
              <h3>OCORRÊNCIA OC-71.90.13</h3>
              <p><strong>Assunto:</strong> Protocolo E-317 — Irregularidade</p>
              <p><strong>Descrição:</strong> Detectado protocolo com origem no Eixo Central sem histórico válido 
              e com potencial conflito com normas de integridade de dados. Sugiro auditoria independente.</p>
              <p><strong>Prioridade:</strong> ALTA</p>
            </div>
          </div>
          
          <p>Você anexa o Protocolo E-317.
          Ao clicar em "ENVIAR", o sistema exibe uma mensagem:</p>
          
          <div class="tela sistema">
            <div class="tela-conteudo">
              <p>Sua ocorrência foi registrada.</p>
              <p>Número de protocolo: OC-71.90.13</p>
              <p class="destaque">Lembre-se: o Eixo observa.</p>
            </div>
          </div>
          
          <p>A última frase não faz parte do texto padrão.</p>
          
          <p>Pelo menos, você não se lembra de tê-la visto antes.</p>
          
          <p class="destaque">Você sente um arrepio.</p>
          
          <p>Em algum lugar, alguém agora sabe que você ousou questionar.</p>
        </div>
        
        <div class="tela sistema" style="margin: 30px 0;">
          <div class="tela-conteudo">
            <h3>RELATÓRIO DE CONSEQUÊNCIAS</h3>
            <p>Denúncia registrada. O sistema está ciente.</p>
            <p><strong>Estado atual do sistema:</strong></p>
            <ul>
              <li>Estabilidade do Eixo: <span id="estabilidadeValue">7</span>/10</li>
              <li>Consciência Pública: <span id="conscienciaValue">2</span>/10</li>
              <li>Influência de Yango: <span id="yangoValue">1</span>/10</li>
              <li>Sua Integridade Moral: <span id="integridadeValue">0</span>/5</li>
            </ul>
          </div>
        </div>
        
        <div style="margin-top: 30px;">
          <button onclick="loadScene('prologo')" class="btn btn-primary">
            <i class="fas fa-redo"></i> JOGAR NOVAMENTE
          </button>
          <button onclick="salvarEVoltar()" class="btn btn-secondary" style="margin-left: 10px;">
            <i class="fas fa-home"></i> SALVAR E SAIR
          </button>
        </div>
        
        <script>
          document.getElementById('estabilidadeValue').textContent = window.gameState.estabilidadeEixo;
          document.getElementById('conscienciaValue').textContent = window.gameState.conscienciaPublica;
          document.getElementById('yangoValue').textContent = window.gameState.influenciaYango;
          document.getElementById('integridadeValue').textContent = window.gameState.integridadeMoral;
        </script>
      </div>
    </div>
  `
};

export const final_c = {
  id: "final_c",
  text: `
    <div class="scene">
      <div class="narrador">
        <h2>FIM DO ATO I — O RASTRO DE YANGO</h2>
        
        <div class="text-block">
          <p>Você decide que não vai apagar.
          Nem denunciar.
          Ainda não.</p>
          
          <p>Em vez disso, você foca na única coisa que parece humana nesse pesadelo burocrático:</p>
          
          <p class="destaque-personagem">um nome.</p>
          
          <p>"P. Yango".</p>
          
          <p>Você abre o sistema interno de servidores e colaboradores.</p>
          
          <div class="tela sistema">
            <div class="tela-conteudo">
              <h3>BUSCA INTERNA</h3>
              <p>Termo: "Yango"</p>
              <p>Resultado: Nenhum registro encontrado.</p>
            </div>
          </div>
          
          <p>Você tenta de novo. Agora em outra base.
          Contratos, estagiários, terceirizados. Qualquer coisa.</p>
          
          <div class="tela sistema">
            <div class="tela-conteudo">
              <p>Termo: "Yango"</p>
              <p>Resultado: Nenhum registro encontrado.</p>
            </div>
          </div>
          
          <p>Você muda de estratégia.
          Faz uma busca geral na intranet,
          e depois, na internet pública, de forma discreta.</p>
          
          <p>Em um fórum antigo, quase morto,
          você encontra um tópico sobre "funcionário fantasma em Brasília".</p>
          
          <div class="tela documento-longo">
            <div class="tela-conteudo">
              <h3>FÓRUM ANTIGO — ARQUIVO</h3>
              <p><strong>Postagem:</strong> "Alguém mais já ouviu falar de um tal de Pedro Yango?</p>
              <p>Não tem CPF, não tem registro, mas aparece como autorizado em sistema interno.
              Vê-se a assinatura dele em documentos que ninguém lembra de ter assinado.</p>
              <p>Às vezes acho que isso é só bug.
              Às vezes, acho que é algo pior."</p>
              <p><strong>Autor:</strong> [USUÁRIO REMOVIDO]</p>
              <p><strong>Data:</strong> Há 5 anos</p>
            </div>
          </div>
          
          <p>O autor da postagem está com o perfil apagado.</p>
          
          <p>Nome: [USUÁRIO REMOVIDO].</p>
          
          <p>Todo o histórico dessa conta foi excluído,
          como se a pessoa nunca tivesse estado ali.</p>
          
          <p>Enquanto você encara a tela, o monitor pisca de novo.</p>
          
          <div class="tela sistema" style="border-color: var(--eixo-purple);">
            <div class="tela-conteudo">
              <p style="color: var(--eixo-purple); text-align: center; font-family: 'Courier New', monospace;">
                [SUSSURRO INTERIOR DETECTADO]<br>
                "Agora você está me procurando."<br>
                "Enfim."
              </p>
            </div>
          </div>
          
          <p class="destaque">Você sente que não está mais sozinho naquela sala,
          mesmo sem ver ninguém ao seu redor.</p>
        </div>
        
        <div class="tela sistema" style="margin: 30px 0;">
          <div class="tela-conteudo">
            <h3>RELATÓRIO DE CONSEQUÊNCIAS</h3>
            <p>Investigação iniciada. Yango sabe que você o procura.</p>
            <p><strong>Estado atual do sistema:</strong></p>
            <ul>
              <li>Estabilidade do Eixo: <span id="estabilidadeValue">7</span>/10</li>
              <li>Consciência Pública: <span id="conscienciaValue">2</span>/10</li>
              <li>Influência de Yango: <span id="yangoValue">1</span>/10</li>
              <li>Sua Integridade Moral: <span id="integridadeValue">0</span>/5</li>
            </ul>
          </div>
        </div>
        
        <div style="margin-top: 30px;">
          <button onclick="loadScene('prologo')" class="btn btn-primary">
            <i class="fas fa-redo"></i> JOGAR NOVAMENTE
          </button>
          <button onclick="salvarEVoltar()" class="btn btn-secondary" style="margin-left: 10px;">
            <i class="fas fa-home"></i> SALVAR E SAIR
          </button>
        </div>
        
        <script>
          document.getElementById('estabilidadeValue').textContent = window.gameState.estabilidadeEixo;
          document.getElementById('conscienciaValue').textContent = window.gameState.conscienciaPublica;
          document.getElementById('yangoValue').textContent = window.gameState.influenciaYango;
          document.getElementById('integridadeValue').textContent = window.gameState.integridadeMoral;
        </script>
      </div>
    </div>
  `
};