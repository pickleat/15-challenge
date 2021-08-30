<template>
  <main class="fifteen-challenge">
    <h1>$15 Challenge</h1>
    <AmountRemaining />
    <section class="character-area">
      <CharacterRow :value="5" color="orange"> 
        <CharacterCard v-for="character in five_dollar_characters" :key="character.name" :character="character"></CharacterCard>
      </CharacterRow>
      <CharacterRow :value="4" color="purple">  
        <CharacterCard v-for="character in four_dollar_characters" :key="character.name" :character="character"></CharacterCard>
      </CharacterRow>
      <CharacterRow :value="3" color="teal">  
        <CharacterCard v-for="character in three_dollar_characters" :key="character.name" :character="character"></CharacterCard>
      </CharacterRow>
      <CharacterRow :value="2" color="lime">  
        <CharacterCard v-for="character in two_dollar_characters" :key="character.name" :character="character"></CharacterCard>
      </CharacterRow>
      <CharacterRow :value="1" color="white">  
        <CharacterCard v-for="character in one_dollar_characters" :key="character.name" :character="character"></CharacterCard>
      </CharacterRow>
    </section>
  </main>
</template>

<script>

import { mapState } from 'vuex'
import CharacterRow from '../components/CharacterRow.vue'

export default {
  components: { CharacterRow },
  data() {
    return {
      five_dollar_characters: [],
      four_dollar_characters: [],
      three_dollar_characters: [],
      two_dollar_characters: [],
      one_dollar_characters: [],
    }
  }, 
  computed: {
    ...mapState({
      // Get Initial State of our Characters
      characters: state => state.jedi.characters,
      budget: state => state.budget
    }),
    organize(){
      // Loop through inital state and organize characters by their "budget"
      this.characters.map((character) => {
        if(!character.budget){
          // early return if no character budget is found. 
          return null
        }
        if(character.budget === 5 ){
          this.five_dollar_characters.push(character);
          return 5
        }
        if(character.budget === 4 ){
          this.four_dollar_characters.push(character);
          return 4
        }
        if(character.budget === 3 ){
          this.three_dollar_characters.push(character);
          return 3
        }
        if(character.budget === 2 ){
          this.two_dollar_characters.push(character);
          return 2
        }
        if(character.budget === 1 ){
          this.one_dollar_characters.push(character);
          return 1
        }
        return 'No Chars Found'
      })
      return "Finished Organizing";
    },
  }
}
</script>
