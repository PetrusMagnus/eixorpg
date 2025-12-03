
export class Player {
  constructor() {
    this.name = "Agente";
    this.codename = "";
    this.startedAt = null;
    this.lastScene = "prologo";
  }

  setName(name) {
    if (name && name.trim() !== "") {
      this.name = name.trim();
      localStorage.setItem('playerName', this.name);
      
      
      this.updateTexts();
    }
  }

  setCodename(codename) {
    this.codename = codename;
  }

  updateTexts() {
    
    const elements = document.querySelectorAll('.dynamic-name');
    elements.forEach(el => {
      if (el.textContent.includes('[NOME_DO_JOGADOR]')) {
        el.textContent = el.textContent.replace(/\[NOME_DO_JOGADOR\]/g, this.name);
      }
    });
  }

  loadFromSave(data) {
    if (data.name) this.name = data.name;
    if (data.codename) this.codename = data.codename;
    if (data.lastScene) this.lastScene = data.lastScene;
    this.updateTexts();
  }

  toJSON() {
    return {
      name: this.name,
      codename: this.codename,
      lastScene: this.lastScene,
      startedAt: this.startedAt
    };
  }
}

export const player = new Player();