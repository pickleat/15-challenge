

export const state = () => ({
  something: 'for nothing',
  budget: 15
})

export const mutations = {
  alter(state) {
    state.something = state.changed
  }
}