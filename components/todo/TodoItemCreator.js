import { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

import { todoListState } from '../../state/todoList';

const TodoItemCreator = () => {
  const [input, setInput] = useState('');
  const [, setTodoList] = useRecoilState(todoListState);

  const inpRef = useRef(null);

  const addItem = (e) => {
    e.preventDefault();

    if (!input) return;
    setTodoList((old) => [
      ...old,
      {
        id: crypto.randomUUID(),
        text: input,
        isComplete: false,
      },
    ]);
    setInput('');
    inpRef.current.focus();
  };

  const onChange = ({ target: { value } }) => setInput(value);

  useEffect(() => inpRef.current.focus(), []);

  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-between rounded-xl bg-zinc-300 py-2 px-10">
        <div className="font-bold">Add new TODO item &rarr;</div>
        {/* <div className="h-0 basis-full"></div> */}
        <div className="flex flex-row items-center gap-4">
          <form onSubmit={addItem}>
            <input
              className="h-full rounded-lg border border-zinc-400/70 py-1.5 px-2 text-sm"
              type="text"
              ref={inpRef}
              value={input}
              onChange={onChange}
            />
          </form>
          <button
            className="rounded-full bg-emerald-700 px-5 py-1 font-bold lowercase text-zinc-100/90 hover:shadow-md"
            onClick={addItem}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItemCreator;
