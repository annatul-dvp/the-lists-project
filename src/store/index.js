import { createStore } from 'vuex'

export default createStore({
  state: {
    lists: [
      {
        id: 1,
        name: 'List1',
        isChecked: true,
        isOpened: true
      },
      {
        id: 2,
        name: 'List2',
        isChecked: true,
        isOpened: true
      },
      {
        id: 3,
        name: 'List3',
        isChecked: true,
        isOpened: true
      },
      {
        id: 4,
        name: 'List4',
        isChecked: true,
        isOpened: true
      },
      {
        id: 5,
        name: 'List5',
        isChecked: true,
        isOpened: true
      }
    ],
    items: [
      {
        id: 1,
        name: 'Item1',
        listId: 1,
        isChecked: true,
        amount: 10,
        color: '#42c0c9',
        squares: []
      },
      {
        id: 2,
        name: 'Item2',
        listId: 1,
        isChecked: true,
        amount: 5,
        color: '#5442c9',
        squares: []
      },
      {
        id: 3,
        name: 'Item3',
        listId: 1,
        isChecked: true,
        amount: 15,
        color: '#24d1a9',
        squares: []
      },
      {
        id: 4,
        name: 'Item4',
        listId: 1,
        isChecked: true,
        amount: 11,
        color: '#f04b35',
        squares: []
      },
      {
        id: 5,
        name: 'Item1',
        listId: 2,
        isChecked: true,
        amount: 15,
        color: '#42c0c9',
        squares: []
      },
      {
        id: 6,
        name: 'Item2',
        listId: 2,
        isChecked: true,
        amount: 5,
        color: '#24d1a9',
        squares: []
      },
      {
        id: 7,
        name: 'Item3',
        listId: 2,
        isChecked: true,
        amount: 7,
        color: '#5442c9',
        squares: []
      },
      {
        id: 8,
        name: 'Item4',
        listId: 2,
        isChecked: true,
        amount: 8,
        color: '#35f0b8',
        squares: []
      },
      {
        id: 9,
        name: 'Item5',
        listId: 2,
        isChecked: true,
        amount: 4,
        color: '#f04b35',
        squares: []
      },
      {
        id: 10,
        name: 'Item1',
        listId: 3,
        isChecked: true,
        amount: 3,
        color: '#42c0c9',
        squares: []
      },
      {
        id: 11,
        name: 'Item2',
        listId: 3,
        isChecked: true,
        amount: 10,
        color: '#24d1a9',
        squares: []
      },
      {
        id: 12,
        name: 'Item3',
        listId: 3,
        isChecked: true,
        amount: 12,
        color: '#5442c9',
        squares: []
      },
      {
        id: 13,
        name: 'Item4',
        listId: 3,
        isChecked: true,
        amount: 23,
        color: '#35f0b8',
        squares: []
      },
      {
        id: 14,
        name: 'Item5',
        listId: 3,
        isChecked: true,
        amount: 16,
        color: '#f04b35',
        squares: []
      },
      {
        id: 15,
        name: 'Item6',
        listId: 3,
        isChecked: true,
        amount: 10,
        color: '#a6db14',
        squares: []
      },
      {
        id: 16,
        name: 'Item7',
        listId: 3,
        isChecked: true,
        amount: 5,
        color: '#1428db',
        squares: []
      },
      {
        id: 17,
        name: 'Item1',
        listId: 4,
        isChecked: true,
        amount: 7,
        color: '#42c0c9',
        squares: []
      },
      {
        id: 18,
        name: 'Item2',
        listId: 4,
        isChecked: true,
        amount: 12,
        color: '#24d1a9',
        squares: []
      },
      {
        id: 19,
        name: 'Item3',
        listId: 4,
        isChecked: true,
        amount: 8,
        color: '#5442c9',
        squares: []
      },
      {
        id: 21,
        name: 'Item4',
        listId: 4,
        isChecked: true,
        amount: 25,
        color: '#35f0b8',
        squares: []
      },
      {
        id: 22,
        name: 'Item5',
        listId: 4,
        isChecked: true,
        amount: 22,
        color: '#f04b35',
        squares: []
      },
      {
        id: 23,
        name: 'Item6',
        listId: 4,
        isChecked: true,
        amount: 10,
        color: '#a6db14',
        squares: []
      },
      {
        id: 24,
        name: 'Item7',
        listId: 4,
        isChecked: true,
        amount: 5,
        color: '#1428db',
        squares: []
      },
      {
        id: 25,
        name: 'Item1',
        listId: 5,
        isChecked: true,
        amount: 8,
        color: '#42c0c9',
        squares: []
      },
      {
        id: 26,
        name: 'Item2',
        listId: 5,
        isChecked: true,
        amount: 6,
        color: '#24d1a9',
        squares: []
      },
      {
        id: 27,
        name: 'Item3',
        listId: 5,
        isChecked: true,
        amount: 2,
        color: '#5442c9',
        squares: []
      },
      {
        id: 28,
        name: 'Item4',
        listId: 5,
        isChecked: true,
        amount: 7,
        color: '#35f0b8',
        squares: []
      }
    ],
    squares: []
  },
  getters: {
    getItems (state) {
      return state.items
    },
    getLists (state) {
      return state.lists
    }
  },
  mutations: {
    setAllItemsChecked (state, listId) {
      state.items.forEach((item) => {
        if (item.listId === listId) {
          item.isChecked = true
        }
      })
    },
    setAllItemsUnChecked (state, listId) {
      state.items.forEach((item) => {
        if (item.listId === listId) {
          item.isChecked = false
        }
      })
    },
    changeItemChecked (state, itemId) {
      state.items.forEach((item) => {
        if (item.id === itemId) {
          item.isChecked = !item.isChecked
        }
      })
    },
    setNewItemColor (state, { itemId, newColor }) {
      state.items.forEach((item) => {
        if (item.id === itemId) {
          item.color = newColor
        }
      })
    },
    setNewItemAmount (state, { itemId, newAmount }) {
      state.items.forEach((item) => {
        if (item.id === itemId) {
          item.amount = newAmount
        }
      })
    },
    setSquares (state, itemId) {
      state.items.forEach((item) => {
        if (item.id === itemId) {
          for (let i = 0; i < item.amount; i += 1) {
            item.squares.push({
              id: `${item.id}_${i}`,
              itemId: item.id,
              color: item.color
            })
          }
        }
      })
    },
    setAllSquares (state) {
      state.items.forEach((item) => {
        for (let i = 0; i < item.amount; i += 1) {
          item.squares.push({
            id: `${item.id}_${i}`,
            itemId: item.id,
            color: item.color
          })
        }
      })
    },
    changeSquaresAmount (state, itemId, newAmount) {
      state.items.forEach((item) => {
        if (item.id === itemId && item.amount < newAmount) {
          item.squares.splice(newAmount, item.amount - newAmount)
        } else if (item.id === itemId && item.amount > newAmount) {
          for (let i = 0; i < newAmount - item.amount; i += 1) {
            item.squares.push({
              id: `${item.id}_${item.amount + i}`,
              itemId: `${item.id}`,
              color: item.color
            })
          }
        }
      })
    },
    deleteSquare (state, itemId, squareId) {
      state.items.forEach((item) => {
        if (item.id === itemId) {
          const position = item.squares.findIndex((sq) => sq.id === squareId)
          item.squares.splice(position, 1)
          item.amount -= 1
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
