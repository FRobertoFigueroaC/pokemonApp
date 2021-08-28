<template>
  <div class="pokemon-container whosThatPokemon">
    <img
        class="hidden-pokemon"
        :src="imgSrc"
        alt="Pokemon">

    <img
        v-if="showPokemon"
        class="fade-in"
        :src="imgSrc"
        alt="Pokemon">
  </div>

</template>

<script>
export default {
  name: "pokemonPicture",
  props: {
    pokemonId: {
      required: true,
      type: Number,
    },
    showPokemon: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    },
  },
}
</script>

<style scoped>
.pokemon-container {
  height: 540px;
  width: 750px;
}
img {
  height: 200px;
  left: -20%;
  right: 0;
  top: 30%;
  margin: auto;
  position: absolute;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>