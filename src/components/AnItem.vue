<template>
  <li class="item">
    <label class="item__name">
      <input type="checkbox" class="hidden item__checkbox" v-model="state.isChecked">
      <span class="item__custom-checkbox" :class="classChecked" @click="changeCheckStatus"></span>
      {{ name }}
    </label>
    <input type="text" class="item__amount" v-model="state.amount" @change="changeAmount">
    <input type="color" class="item__color" v-model="state.color" @change="changeColor">
  </li>
</template>

<script>
import { defineComponent, reactive, ref, onMounted, watch } from 'vue'
import { setCheckboxStyle } from '@/hooks/useCheckbox'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    isChecked: { type: Boolean, required: true },
    amount: { type: Number, required: true },
    color: { type: String, required: true }
  },
  setup (props) {
    const $store = useStore()

    const state = reactive({
      isChecked: props.isChecked,
      amount: props.amount,
      color: props.color
    })
    const classChecked = ref('')

    onMounted(() => {
      classChecked.value = setCheckboxStyle('item__custom-checkbox', state.isChecked)
    })

    function changeCheckStatus () {
      $store.commit('changeItemChecked', props.id)
      classChecked.value = setCheckboxStyle('item__custom-checkbox', !state.isChecked)
    }

    function changeColor () {
      $store.commit('setNewItemColor', { itemId: props.id, newColor: state.color })
    }

    function changeAmount () {
      console.log('state.amount', state.amount)
      $store.commit('setNewItemAmount', { itemId: props.id, newAmount: state.amount })
    }

    watch(() => props.amount, (newAmount) => {
      state.amount = newAmount
    })

    watch(() => props.isChecked, (chandgedCheck) => {
      state.isChecked = chandgedCheck
      classChecked.value = setCheckboxStyle('item__custom-checkbox', chandgedCheck)
    })

    return {
      state,
      classChecked,

      changeColor,
      changeAmount,
      changeCheckStatus
    }
  }
})

</script>

<style lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .item {
    @include flex-row(left, center);

    justify-content: space-between;
    padding-left: calc($box-size * 2 + $column-gap-size * 2);
    width: calc(100% - $box-size * 2 - $column-gap-size * 2);

    &__name {
      @include flex-row(left, center);
      width: 80%
    }

    &__custom-checkbox {
      @include custom-checkbox (14px, 14px);

      &::after {
        //content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        height: 70%;
        width: 40%;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
        transform-origin: right bottom;
        transform: translateX(-130%) translateY(-25%) rotate(45deg);
      }
    }

    &__amount {
      width: 10%;
      text-align: end;
      border: none;
    }

    &__color {
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background: none;
      cursor: pointer;
      border: none;
      height: 27px;
      width: 27px;
      background: transparent;
    }
  }
</style>
