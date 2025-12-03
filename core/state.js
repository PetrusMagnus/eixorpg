
export const state = {

  estabilidadeEixo: 7,        
  conscienciaPublica: 2,      
  influenciaYango: 1,         
  integridadeMoral: 0,        
  
  documentoApagado: false,
  denunciaEnviada: false,
  yangoProcurado: false,
  telefonemaRecebido: true,
  
  cenasVisitadas: [],
  escolhasFeitas: [],
  memoriaFragments: [],
  
  hora: "02:37",
  dia: 1
};

export const limites = {
  estabilidadeEixo: { min: 0, max: 10 },
  conscienciaPublica: { min: 0, max: 10 },
  influenciaYango: { min: 0, max: 10 },
  integridadeMoral: { min: -5, max: 5 }
};

export function aplicarConsequencias(effects) {
  Object.keys(effects).forEach(key => {
    if (state[key] !== undefined) {
      state[key] += effects[key];
      
      // Aplicar limites
      if (limites[key]) {
        state[key] = Math.max(limites[key].min, 
                             Math.min(limites[key].max, state[key]));
      }
    }
  });
}

export function registrarCena(sceneId) {
  if (!state.cenasVisitadas.includes(sceneId)) {
    state.cenasVisitadas.push(sceneId);
  }
}