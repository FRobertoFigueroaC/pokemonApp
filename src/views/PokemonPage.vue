<template>
  <div v-if="pokemon">
    <h1  v-if="!msg">Who's that Pokemon?</h1>
    <!--  Pokemon Image-->
    <pokemon-picture :pokemonId="pokemon?.id" :showPokemon="showPokemon"/>
    <!--  Options-->
    <pokemon-options v-if="!msg"
                     :options="pokemonOptions" @selectedPokemonId="CheckAnswer"/>
    <template v-if="msg" class="fade-in">
      <h1>{{msg}}</h1>
      <button class="btn" @click="Reset">Nuevo Juego</button>
    </template>
  </div>
  <div v-else class="pokemon"/>
</template>

<script>
// Components
import pokemonPicture from '@/components/pokemon-picture'
import pokemonOptions from '@/components/pokemon-options'
import getPokemonOptions from "../helpers/pokemonOptions";
// Components
export default {
  name: "PokemonPage",
  components: {
    "pokemon-picture": pokemonPicture,
    "pokemon-options": pokemonOptions,
  },
  data(){
    return{
      pokemonOptions: [],
      pokemon: null,
      showPokemon: false,
      msg: '',
    }
  },
  methods: {
    async Reset(){
      this.msg = ''
      this.showPokemon = false
      await this.mixPokemonOptions()
    },
    async mixPokemonOptions() {
      this.pokemonOptions = await getPokemonOptions()
      const randomPokemon = Math.floor(Math.random() *4)
      this.pokemon = this.pokemonOptions[randomPokemon]
    },
    CheckAnswer(id){
      this.showPokemon = true
      if (this.pokemon.id === id) {
        this.msg = `Its!,${this.pokemon.name}`
      } else this.msg = `No, it's ${this.pokemon.name}`
    },
  },
  async mounted() {
    await this.mixPokemonOptions()
  }
}
</script>

<style scoped>
.btn {
  height: 40px;
  border-radius: 10%;
  background-color: #03609e;
  color: whitesmoke;
  font-weight: bold;
}
</style>