
<template class="character-card">
 <div class="character-button" >
   <img :src="character.image" class="character-image" :alt="character.name"/>
 </div>
</template>

<script>
  // import { mapState } from 'vuex'

  export default {
    props: {
      character: {
        type: Object,
        default(){
          return {"name": "No name", "budget": 0, "image": "~/assets/images/yoda.jpg"}
        },
      }
    },
    computed: {
      // ...mapState({
      //   jedi: state => state.jedi.yoda
      // })
    },
    methods: {
      useJedi(e){
        this.$store.jedi.commit('jedi/useJedi', 'yoda dies')

      }, 
      // ...mapMutations({

      // })
    }
  }
</script>