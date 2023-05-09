import { createStore } from 'vuex'

export default createStore({
  state: {
    showCart: false,
    buscarxnom: null,
    showEntregados: false,
    showProgreso: false,
    showBoleta: false,
    totalxfecha: '',
    totalxfechayDebito: '',
    totalxfechayCredito:'',
    totalxfechayEfectivo: '',
    totalxfechayTransferencia: '',
    openmenu: false,
    opensubmenu: false,
    openagregado:0,
    cantidadProd:1,
    totalProd:0,
  },
  getters: {
  },
  mutations: {
    setShowCart(state, payload){
      state.showCart = payload;
    },
    buscarxnom(state,payload){
      state.buscarxnom = payload;
    },
    setShowEntregados(state,payload){
      state.showEntregados = payload;
    },
    setShowProgreso(state,payload){
      state.showProgreso = payload;
    },
    setShowBoleta(state,payload){
      state.showBoleta = payload;
    },
    setTotalxFecha(state,payload){
      state.totalxfecha = payload;
    },
    setTotalxFechayDebito(state,payload){
      state.totalxfechayDebito = payload;
    },
    setTotalxFechayCredito(state,payload){
      state.totalxfechayCredito = payload;
    },
    setTotalxFechayEfectivo(state,payload){
      state.totalxfechayEfectivo = payload;
    },
    setTotalxFechayTransferencia(state,payload){
      state.totalxfechayTransferencia = payload;
    },
    setOpenMenu(state,payload){
      state.openmenu = payload;
    },
    setOpenSubMenu(state,payload){
      state.opensubmenu = payload;
    },
    setOpenAgregados(state,payload){
      state.openagregado = payload;
    },
    setCantidadProd(state,payload){
      state.cantidadProd= payload;
    },
    setTotalProd(state,payload){
      state.totalProd= payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
