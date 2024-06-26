<template>
  <ul class="ul list">
    <div class="list__title">
      <span class="list__button"></span>
      <label class="list__name">
        <input type="checkbox" class="hidden list__checkbox" v-model="state.isChecked">
        <span class="list__custom-checkbox" :class="classChecked" @click="changeCheckStatus"></span>
        {{ name }}
      </label>
    </div>
    <AnItem class="list__item" v-for="item in items" :key="item.id"
    v-model:name="item.name" v-model:isChecked="item.isChecked"
    v-model:amount="item.amount" v-model:color="item.color"
    v-model:id="item.id"/>
  </ul>
</template>

<script>
import { defineComponent, ref, computed, reactive, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import AnItem from '@/components/AnItem.vue'
import { setCheckboxStyle } from '@/hooks/useCheckbox'

export default defineComponent({
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    isChecked: { type: Boolean, required: true },
    isOpened: { type: Boolean, required: true }
  },
  emits: ['update:isChecked', 'update:isOpened'],
  components: {
    AnItem
  },
  setup (props) {
    const $store = useStore()
    const items = computed(() => $store.getters.getItems.filter(item => item.listId === props.id))
    const isAnyItemChecked = computed(() => {
      if (items.value.find((i) => i.isChecked === true) !== undefined) {
        $store.commit('setListChecked', props.id)
        return true
      } else {
        return false
      }
    })
    const classChecked = ref('')

    function checkItems () {
      let countChecked = 0
      items.value.forEach((i) => {
        if (i.isChecked === true) {
          countChecked += 1
        }
      })

      return countChecked
    }

    onMounted(() => {
      classChecked.value = setCheckboxStyle('list__custom-checkbox', state.isChecked)
    })

    const state = reactive({
      isChecked: props.isChecked | isAnyItemChecked.value,
      isOpened: props.isOpened
    })

    function changeCheckStatus () {
      $store.commit('changeListChecked', props.id)
      classChecked.value = setCheckboxStyle('list__custom-checkbox', !state.isChecked) // меняем стиль отображения кастомного чекбокса
    }

    watch(() => props.isChecked, () => {
      const itemsCheckStatus = checkItems()
      // console.log(itemsCheckStatus)
      if (itemsCheckStatus === 0) {
        $store.commit('setAllItemsChecked', props.id)
      }
      if (itemsCheckStatus === items.value.length) {
        $store.commit('setAllItemsUnChecked', props.id)
      }
    })

    return {
      classChecked,
      state,
      items,

      changeCheckStatus
    }
  }
})
</script>

<style lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .list {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    justify-content: left;
    align-items: center;

    &__title {
      @include flex-row(left, center);

      height: 100%;
      width: 100%;
    }

    &__button {
      position: relative;
      display: inline-block;
      width: 18px;
      height: 18px;

      &::before {
        content: '';
        position: absolute;
        top: 3px;
        bottom: 3px;
        left: 3px;
        right: 3px;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
        transform-origin: right bottom;
        transform: translateY(-50%) rotate(-45deg);
      }

      &_opened {
        transform: translateX(-50%) translateY(-25%) rotate(45deg);
      }

    }

    &__name {
      @include flex-row(left, center);
    }

    &__custom-checkbox {
      @include custom-checkbox (18px, 18px);

      &::after {
        //content: '';
        position: absolute;
        top: 6px;
        bottom: 6px;
        left: 6px;
        right: 6px;
        background-color: black;
      }
    }

    &__item {
      width: 100%;
    }

  }
</style>
