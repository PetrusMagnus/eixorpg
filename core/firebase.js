import { state } from './state.js';
import { player } from './player.js';

class SaveSystem {
  constructor() {
    this.currentUser = null;
    this.isAuthenticated = false;
  }

  async registrarAgente(username, email, password) {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      this.currentUser = userCredential.user;
      
      await db.collection('agentes').doc(this.currentUser.uid).set({
        username: username,
        codename: this.gerarCodename(),
        registradoEm: firebase.firestore.FieldValue.serverTimestamp(),
        ultimoAcesso: null,
        nivelAcesso: 1
      });
      
      return { success: true, user: this.currentUser };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async login(email, password) {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      this.currentUser = userCredential.user;
      this.isAuthenticated = true;
      
      const savedState = await this.carregarJogo();
      
      return { 
        success: true, 
        user: this.currentUser,
        hasSave: savedState !== null
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async salvarJogo() {
    if (!this.currentUser) return false;
    
    try {
      const saveData = {
        estadoJogo: { ...state },
        jogador: player.toJSON(),
        salvoEm: firebase.firestore.FieldValue.serverTimestamp(),
        horaJogo: state.hora,
        diaJogo: state.dia
      };
      
      await db.collection('saves').doc(this.currentUser.uid).set(saveData);
      
      await db.collection('agentes').doc(this.currentUser.uid).update({
        ultimoAcesso: firebase.firestore.FieldValue.serverTimestamp()
      });
      
      console.log('✅ Progresso salvo no Eixo');
      return true;
    } catch (error) {
      console.error('❌ Erro ao salvar:', error);
      return false;
    }
  }


  async carregarJogo() {
    if (!this.currentUser) return null;
    
    try {
      const doc = await db.collection('saves').doc(this.currentUser.uid).get();
      
      if (doc.exists) {
        const data = doc.data();
        
       
        Object.keys(data.estadoJogo).forEach(key => {
          state[key] = data.estadoJogo[key];
        });
        
  
        player.loadFromSave(data.jogador);
        
     
        state.hora = data.horaJogo || "02:37";
        state.dia = data.diaJogo || 1;
        
        console.log('✅ Memória restaurada do Eixo');
        return {
          scene: data.jogador.lastScene || "prologo",
          timestamp: data.salvoEm
        };
      }
      return null;
    } catch (error) {
      console.error('❌ Erro ao carregar memória:', error);
      return null;
    }
  }

  
  async logout() {
    await this.salvarJogo();
    await auth.signOut();
    this.currentUser = null;
    this.isAuthenticated = false;
    window.location.href = 'index.html';
  }

  
  iniciarAutoSave(intervaloMinutos = 3) {
    setInterval(() => {
      if (this.isAuthenticated) {
        this.salvarJogo();
        console.log('💾 Auto-save realizado');
      }
    }, intervaloMinutos * 60 * 1000);
  }

  
  gerarCodename() {
    const prefixos = ["FANTASMA", "ESPECTRO", "ECO", "SOMBRA", "RUIDO", "SUSPIRO"];
    const sufixos = ["317", "71", "90", "13", "256", "290"];
    return `${prefixos[Math.floor(Math.random() * prefixos.length)]}-${sufixos[Math.floor(Math.random() * sufixos.length)]}`;
  }
}

export const saveSystem = new SaveSystem();