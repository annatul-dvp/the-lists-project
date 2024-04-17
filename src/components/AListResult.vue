<template>
  <div class="list-results">
    <h4 class="list-results__name">{{ listName }}</h4>
    <button>{{ btn.name }}</button>
    <div class="list-results__squares">
      <ColorSquare v-for="square in squares" :key="square.id"
      v-model:id="square.id" v-model:color="square.color" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'
import ColorSquare from './ColorSquare.vue'

export default defineComponent({
  props: {
    name: { type: String, required: true }
  },
  components: {
    ColorSquare
  },
  setup (props) {
    const listName = ref(props.name)

    const $store = useStore()
    const items = computed(() => $store.getters.getItems.filter(item => item.listName === listName.value))
    const squares = computed(() => $store.getters.getItems.reduce((acc, currentItem) => acc.concat(currentItem.squares), []))

    const btn = ref({
      id: 1,
      name: 'Перемешать'
    })

    const color = ref('#532973')

    return {
      listName,
      items,
      squares,
      btn,
      color
    }
  }
})
</script>

<style lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .list-results {
    @include flex-row(space-between, flex-start, wrap);

    padding: 10px;
    border: 1px solid black;
    min-height: 100px;

    &__name {
      font-size: 1rem;
      text-align: left;
    }

    &__squares {
      // display: grid;
      // row-gap: 5px;
      // column-gap: 5px;
      // grid-template-areas:
      //                     "a a a"
      //                     "b b b"
      //                     "b c c";
      // width: 100%;
      // min-height: 20px;
    }
  }
</style>
