<template>
<div class="options-container">
  <ul>
    <li v-for="pokemon in options" :key="pokemon.id" @click="Selected(pokemon.id)">
      {{pokemon.name}}
    </li>
  </ul>
</div>

</template>

<script>
import getPokemonOptions from '../helpers/pokemonOptions'

export default {
  name: "pokemonOptions",
  props: {
    options: {
      required: true,
      type: Array,
    },
  },
  methods: {
    Selected(id){
      this.$emit('selectedPokemonId', id)
    },
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  color: #03609e;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: #ffb000;
  color: #03609e;
}
ul li {
  align-items:center;
  background-color: #f1f1f1;
  border: solid 2px #03609e;
  border-radius: 10px;
  display: flex;
  height:40px;
  justify-content:center;
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>