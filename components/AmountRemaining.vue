<template>
  <div class="amount-remaining"> 
    <h2>Budget Remaining: <span class="budget-remaining">${{budget}}</span></h2>
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  computed: {
        ...mapState({
      budget: state => state.budget
    }),
  }
}
</script>
