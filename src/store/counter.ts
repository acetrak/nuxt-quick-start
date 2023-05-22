

const useCounterStore = defineStore('counter', {
  state: () => ({count: 1, name: 'Eduardo'}),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },

})

export default useCounterStore
