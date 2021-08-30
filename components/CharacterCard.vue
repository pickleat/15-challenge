
<template class="character-card">
 <button class="character-button" :class="{'selected' : isSelected, 'disabled' : !budgetRemaining}" :disabled="!budgetRemaining" :style="{backgroundImage:`url(${character.image})`}" @click="subtractBudget(character.budget); useChar()"  >
   <div class="character-name">
   </div>
 </button>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    props: {
      character: {
        type: Object,
        default(){
          return {"name": "No name", "budget": 0, "image": "~/assets/images/yoda.jpg"}
        },
      }
    },
    data(){
      return{
        isSelected: false,
      }
    },
    computed: {
      ...mapState({
        budget: state => state.budget
      }),
      budgetRemaining(){
        return this.budget >= this.character.budget;
      },
    },
    methods: {
      ...mapMutations(['subtractBudget']),
      useChar(){
        this.isSelected = true
        this.budget -= this.character.budget
      }
    }
  }
</script>