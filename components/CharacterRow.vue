
<template >
 <div class="character-row">
   <div class="row-amount" :class="color" >   
    <sup class="dollar-superscript">$</sup>{{value}}
   </div>
   <slot></slot>
 </div>
</template>

<script>
  // import { mapState } from 'vuex'

  export default {
    props: {
      value: {
        type: Number,
        default(){
          return 13
        },
      },
      color: {
        type: String, 
        required: true,
        default(){
          return "pink"
        }
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>