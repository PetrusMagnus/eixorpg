const firebaseConfig = {
  apiKey: "AIzaSyBR0zf7uBOj1CTNDlVwOK06vUjE2Ky4Hfw",
  authDomain: "eixo-guerra-memorias.firebaseapp.com",
  projectId: "eixo-guerra-memorias",
  storageBucket: "eixo-guerra-memorias.firebasestorage.app",
  messagingSenderId: "952327023364",
  appId: "1:952327023364:web:3b7e8d7e91cb1f70367e51",
  measurementId: "G-BEZJ9TCTC6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        console.log("Persistência de auth configurada");
    })
    .catch((error) => {
        console.error("Erro na persistência:", error);
    });

const auth = firebase.auth();
const db = firebase.firestore();

db.enableNetwork().then(() => {
    console.log("Firestore conectado");
}).catch((error) => {
    console.error("Erro na conexão Firestore:", error);
});