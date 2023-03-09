import { atom, selector } from 'recoil';

const todoListState = atom({
  key: 'TodoList',
  default: [],
});

const todoListFilterState = atom({
  key: 'TodoListFilter',
  default: 'Show All',
});

const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

const uncompletedItemsState = selector({
  key: 'UncompletedItems',
  get: ({ get }) => {
    const list = get(todoListState);

    return list.filter((it) => !it.isComplete).length;
  },
});

export {
  todoListState,
  todoListFilterState,
  filteredTodoListState,
  uncompletedItemsState,
};
