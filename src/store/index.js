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
        listName: 'List1',
        isChecked: true,
        amount: 10,
        color: '#42c0c9'
      },
      {
        id: 2,
        name: 'Item2',
        listName: 'List1',
        isChecked: true,
        amount: 5,
        color: '#5442c9'
      },
      {
        id: 3,
        name: 'Item3',
        listName: 'List1',
        isChecked: true,
        amount: 15,
        color: '#24d1a9'
      },
      {
        id: 4,
        name: 'Item4',
        listName: 'List1',
        isChecked: true,
        amount: 11,
        color: '#f04b35'
      },
      {
        id: 5,
        name: 'Item1',
        listName: 'List2',
        isChecked: true,
        amount: 15,
        color: '#42c0c9'
      },
      {
        id: 6,
        name: 'Item2',
        listName: 'List2',
        isChecked: true,
        amount: 5,
        color: '#24d1a9'
      },
      {
        id: 7,
        name: 'Item3',
        listName: 'List2',
        isChecked: true,
        amount: 7,
        color: '#5442c9'
      },
      {
        id: 8,
        name: 'Item4',
        listName: 'List2',
        isChecked: true,
        amount: 8,
        color: '#35f0b8'
      },
      {
        id: 9,
        name: 'Item5',
        listName: 'List2',
        isChecked: true,
        amount: 4,
        color: '#f04b35'
      },
      {
        id: 10,
        name: 'Item1',
        listName: 'List3',
        isChecked: true,
        amount: 3,
        color: '#42c0c9'
      },
      {
        id: 11,
        name: 'Item2',
        listName: 'List3',
        isChecked: true,
        amount: 10,
        color: '#24d1a9'
      },
      {
        id: 12,
        name: 'Item3',
        listName: 'List3',
        isChecked: true,
        amount: 12,
        color: '#5442c9'
      },
      {
        id: 13,
        name: 'Item4',
        listName: 'List3',
        isChecked: true,
        amount: 23,
        color: '#35f0b8'
      },
      {
        id: 14,
        name: 'Item5',
        listName: 'List3',
        isChecked: true,
        amount: 16,
        color: '#f04b35'
      },
      {
        id: 15,
        name: 'Item6',
        listName: 'List3',
        isChecked: true,
        amount: 10,
        color: '#a6db14'
      },
      {
        id: 16,
        name: 'Item7',
        listName: 'List3',
        isChecked: true,
        amount: 5,
        color: '#1428db'
      },
      {
        id: 17,
        name: 'Item1',
        listName: 'List4',
        isChecked: true,
        amount: 7,
        color: '#42c0c9'
      },
      {
        id: 18,
        name: 'Item2',
        listName: 'List4',
        isChecked: true,
        amount: 12,
        color: '#24d1a9'
      },
      {
        id: 19,
        name: 'Item3',
        listName: 'List4',
        isChecked: true,
        amount: 8,
        color: '#5442c9'
      },
      {
        id: 21,
        name: 'Item4',
        listName: 'List4',
        isChecked: true,
        amount: 25,
        color: '#35f0b8'
      },
      {
        id: 22,
        name: 'Item5',
        listName: 'List4',
        isChecked: true,
        amount: 22,
        color: '#f04b35'
      },
      {
        id: 23,
        name: 'Item6',
        listName: 'List4',
        isChecked: true,
        amount: 10,
        color: '#a6db14'
      },
      {
        id: 24,
        name: 'Item7',
        listName: 'List4',
        isChecked: true,
        amount: 5,
        color: '#1428db'
      },
      {
        id: 25,
        name: 'Item1',
        listName: 'List5',
        isChecked: true,
        amount: 8,
        color: '#42c0c9'
      },
      {
        id: 26,
        name: 'Item2',
        listName: 'List5',
        isChecked: true,
        amount: 6,
        color: '#24d1a9'
      },
      {
        id: 27,
        name: 'Item3',
        listName: 'List5',
        isChecked: true,
        amount: 2,
        color: '#5442c9'
      },
      {
        id: 28,
        name: 'Item4',
        listName: 'List5',
        isChecked: true,
        amount: 7,
        color: '#35f0b8'
      }
    ]
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
    setAllItemsChecked (state, listName) {
      state.items.forEach((i) => {
        if (i.listName === listName) {
          i.isChecked = true
        }
      })
    },
    setAllItemsUnChecked (state, listName) {
      state.items.forEach((i) => {
        if (i.listName === listName) {
          i.isChecked = false
        }
      })
    },
    setNewItemColor (state, itemId, newColor) {
      state.items.forEach((i) => {
        if (i.id === itemId) {
          i.color = newColor
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
