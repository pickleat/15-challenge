

export const state = () => ({
  something: 'for nothing',
  budget: 15
})

export const mutations = {
  subtractBudget(state, val) {
    if(state.budget <= 0){
      return
    }
    state.budget = state.budget - val
  },
}