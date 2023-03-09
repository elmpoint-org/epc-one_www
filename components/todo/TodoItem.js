import { useRecoilState } from 'recoil';

import { todoListState } from '../../state/todoList';

import CloseIcon from '../svg/icon_close';

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((it) => it === item);

  const editItemText = ({ target: { value } }) =>
    setTodoList(replace(todoList, index, { ...item, text: value }));
  const toggleItem = () =>
    setTodoList(
      replace(todoList, index, { ...item, isComplete: !item.isComplete })
    );
  const deleteItem = () => setTodoList(remove(todoList, index));

  return (
    <>
      <div className="flex flex-row gap-3 rounded-full bg-zinc-100 py-2 pl-5 pr-2">
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItem}
        />

        <input
          className="block flex-1 bg-transparent outline-none"
          type="text"
          value={item.text}
          onChange={editItemText}
        />
        <button
          className="rounded-full bg-red-700 stroke-zinc-100 px-1 py-1 font-bold lowercase text-zinc-100/90 opacity-90 hover:opacity-100 hover:shadow-md"
          onClick={deleteItem}
        >
          <CloseIcon />
        </button>
      </div>
    </>
  );
};

function replace(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function remove(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem;
