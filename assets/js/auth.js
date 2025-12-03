// assets/js/auth.js - VERSÃO DEFINITIVA

// Estado global
let authState = {
    user: null,
    loading: true,
    error: null
};

// Inicializar Firebase
function initFirebase() {
    // Já inicializado? Verificar
    if (!firebase.apps.length) {
        try {
            firebase.initializeApp(firebaseConfig);
            console.log("Firebase inicializado");
        } catch (error) {
            console.error("Erro ao inicializar Firebase:", error);
            return;
        }
    }
    
    // Configurar persistência LOCAL (mantém login)
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            console.log("Persistência LOCAL ativada");
        })
        .catch((error) => {
            console.error("Erro na persistência:", error);
        });
    
    // Ouvir mudanças de autenticação
    firebase.auth().onAuthStateChanged(async (user) => {
        authState.loading = false;
        
        if (user) {
            authState.user = user;
            console.log("Usuário autenticado:", user.email, "UID:", user.uid);
            
            // Atualizar UI se estiver na página de login
            updateUIForUser(user);
            
            // Criar/atualizar documento do agente automaticamente
            await ensureAgentDocument(user);
        } else {
            authState.user = null;
            console.log("Nenhum usuário autenticado");
        }
    });
}

// Garantir que o documento do agente existe
async function ensureAgentDocument(user) {
    try {
        const db = firebase.firestore();
        const agentRef = db.collection('agentes').doc(user.uid);
        
        // Tentar ler primeiro
        const agentDoc = await agentRef.get();
        
        if (!agentDoc.exists) {
            // Criar documento se não existir
            await agentRef.set({
                username: user.email.split('@')[0],
                email: user.email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
                nivelAcesso: 1,
                status: 'ativo',
                codename: generateCodename(),
                progresso: {
                    cenaAtual: 'prologo',
                    iniciadoEm: new Date().toISOString()
                }
            });
            console.log("✅ Documento do agente criado");
        } else {
            // Atualizar último login
            await agentRef.update({
                lastLogin: firebase.firestore.FieldValue.serverTimestamp()
            });
            console.log("✅ Último login atualizado");
        }
    } catch (error) {
        console.error("❌ Erro ao garantir documento:", error);
        // Não bloquear o usuário por causa disso
    }
}

// Atualizar UI quando usuário está logado
function updateUIForUser(user) {
    // Se estiver na página de login, mostrar info
    if (window.location.pathname.includes('index.html')) {
        const messageEl = document.getElementById('message');
        if (messageEl) {
            showMessage('message', `✅ Já autenticado como ${user.email}. Redirecionando...`, 'success');
            
            // Redirecionar após 2 segundos
            setTimeout(() => {
                window.location.href = 'game.html';
            }, 2000);
        }
    }
}

// Mostrar mensagens
function showMessage(elementId, text, type = 'info') {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const icon = type === 'success' ? 'check' : 
                 type === 'error' ? 'times' : 
                 type === 'warning' ? 'exclamation' : 'info';
    
    element.innerHTML = `<i class="fas fa-${icon}"></i> ${text}`;
    element.className = `message ${type}`;
    element.style.display = 'block';
    
    // Auto-esconder mensagens de sucesso
    if (type === 'success' && !elementId.includes('reg')) {
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }
}

// Alternar entre login/registro
function showRegister() {
    document.getElementById('loginCard').style.display = 'none';
    document.getElementById('registerCard').style.display = 'block';
    document.getElementById('message').style.display = 'none';
    document.getElementById('regMessage').style.display = 'none';
}

function showLogin() {
    document.getElementById('registerCard').style.display = 'none';
    document.getElementById('loginCard').style.display = 'block';
    document.getElementById('message').style.display = 'none';
    document.getElementById('regMessage').style.display = 'none';
}

// LOGIN - Versão Robusta
async function login() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Validação
    if (!email || !password) {
        showMessage('message', 'Preencha todos os campos', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showMessage('message', 'Email inválido', 'error');
        return;
    }
    
    showMessage('message', '<i class="fas fa-cog fa-spin"></i> Conectando ao Eixo...', 'info');
    
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        console.log("✅ Login bem-sucedido para:", user.email);
        
        await ensureAgentDocument(user);
        
        showMessage('message', '<i class="fas fa-check"></i> Credenciais validadas. Acessando sistema...', 'success');
        
        setTimeout(() => {
            window.location.href = 'game.html';
        }, 1500);
        
    } catch (error) {
        console.error("❌ Erro no login:", error.code, error.message);
        
        let errorMessage = 'Falha na autenticação';
        switch (error.code) {
            case 'auth/user-not-found':
                errorMessage = 'Agente não registrado. Crie uma conta primeiro.';
                break;
            case 'auth/wrong-password':
                errorMessage = 'Senha incorreta';
                break;
            case 'auth/invalid-email':
                errorMessage = 'Formato de email inválido';
                break;
            case 'auth/too-many-requests':
                errorMessage = 'Muitas tentativas. Tente novamente em alguns minutos.';
                break;
            case 'auth/network-request-failed':
                errorMessage = 'Erro de conexão. Verifique sua internet.';
                break;
            default:
                errorMessage = `Erro: ${error.message}`;
        }
        
        showMessage('message', `<i class="fas fa-times"></i> ${errorMessage}`, 'error');
    }
}

async function register() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (!username || !email || !password || !confirmPassword) {
        showMessage('regMessage', 'Todos os campos são obrigatórios', 'error');
        return;
    }
    
    if (username.length < 3) {
        showMessage('regMessage', 'Nome deve ter pelo menos 3 caracteres', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showMessage('regMessage', 'Email inválido', 'error');
        return;
    }
    
    if (password.length < 6) {
        showMessage('regMessage', 'Senha deve ter pelo menos 6 caracteres', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showMessage('regMessage', 'As senhas não coincidem', 'error');
        return;
    }
    
    showMessage('regMessage', '<i class="fas fa-cog fa-spin"></i> Registrando nova identidade...', 'info');
    
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        console.log("✅ Usuário criado:", user.uid);
        
        try {
            await user.sendEmailVerification();
            console.log("✅ Email de verificação enviado");
        } catch (verificationError) {
            console.warn("Aviso: não foi possível enviar email de verificação:", verificationError);
        }
        
        const db = firebase.firestore();
        await db.collection('agentes').doc(user.uid).set({
            username: username,
            email: user.email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
            nivelAcesso: 1,
            status: 'ativo',
            codename: generateCodename(),
            progresso: {
                cenaAtual: 'prologo',
                iniciadoEm: new Date().toISOString(),
                estado: {}
            }
        });
        
        console.log("✅ Documento Firestore criado");
        
        showMessage('regMessage', 
            '<i class="fas fa-check"></i> Identidade registrada com sucesso!<br>' +
            '<small>Redirecionando para o sistema...</small>', 
            'success'
        );
        
        setTimeout(async () => {
            
            window.location.href = 'game.html';
        }, 2000);
        
    } catch (error) {
        console.error("❌ Erro no registro:", error.code, error.message);
        
        let errorMessage = 'Falha no registro';
        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMessage = 'Este email já está registrado. Faça login.';
                break;
            case 'auth/invalid-email':
                errorMessage = 'Email inválido';
                break;
            case 'auth/operation-not-allowed':
                errorMessage = 'Registro por email está desativado. Contate o administrador.';
                break;
            case 'auth/weak-password':
                errorMessage = 'Senha muito fraca. Use uma combinação mais forte.';
                break;
            case 'auth/network-request-failed':
                errorMessage = 'Erro de conexão. Verifique sua internet.';
                break;
            default:
                errorMessage = `Erro: ${error.message}`;
        }
        
        showMessage('regMessage', `<i class="fas fa-times"></i> ${errorMessage}`, 'error');
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function generateCodename() {
    const prefixos = ['FANTASMA', 'ESPECTRO', 'ECO', 'SOMBRA', 'RUIDO', 'SUSPIRO'];
    const numeros = ['317', '71', '90', '13', '256', '290'];
    return `${prefixos[Math.floor(Math.random() * prefixos.length)]}-${numeros[Math.floor(Math.random() * numeros.length)]}`;
}

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (document.getElementById('loginCard').style.display !== 'none') {
            login();
        } else {
            register();
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada, inicializando Firebase...");
    initFirebase();
    
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const error = urlParams.get('error');
    if (error) {
        showMessage('message', decodeURIComponent(error), 'error');
    }
});

window.logout = async function() {
    try {
        await firebase.auth().signOut();
        window.location.href = 'index.html';
    } catch (error) {
        console.error("Erro no logout:", error);
    }
};