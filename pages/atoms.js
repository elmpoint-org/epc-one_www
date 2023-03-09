import Head from 'next/head';
import { useRecoilValue } from 'recoil';

import { filteredTodoListState } from '../state/todoList';

import TodoItemCreator from '../components/todo/TodoItemCreator';
import TodoFilter from '../components/todo/TodoFilter';
import TodoItem from '../components/todo/TodoItem';

const pagetitle = `To-Do List`;

const Atoms = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <Head>
        <title>{`${pagetitle} - Elm Point`}</title>
      </Head>
      <div className="flex flex-col items-stretch gap-5 p-2.5">
        <TodoFilter />
        <TodoItemCreator />
        <div className="flex flex-col items-stretch gap-2">
          {todoList.map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Atoms;
