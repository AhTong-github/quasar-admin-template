import { defineStore } from 'pinia'

const useDrawerStore = defineStore('Drawer', {
  state() {
    return {
      show: true
    }
  },
  actions: {
  },
  getters: {},
})

export { useDrawerStore }
