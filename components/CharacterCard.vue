
<template class="character-card">
 <button class="character-button" :class="{'selected' : isSelected, 'disabled' : !budgetRemaining}" :disabled="!budgetRemaining" :style="{ backgroundImage: `url(${character.image ? character.image : fallbackBackgroundURL})` }"  @click="subtractBudget(character.budget); useChar()"  >
   <div class="character-name">
   </div>
 </button>
</template>

<script>
  import yoda from 'assets/images/yoda-2.jpeg'
  import { mapState, mapMutations } from 'vuex'

  export default {
    props: {
      character: {
        type: Object,
        default(){
          return {
            "name": "No name", 
            "budget": 0, 
            "image" : null
          }
        },
      },
    },
    data(){
      return{
        isSelected: false,
        fallbackBackgroundURL: yoda
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