import { useRecoilState } from 'recoil';

import { RadioGroup } from '@headlessui/react';

import { todoListFilterState } from '../../state/todoList';

const TodoFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  // const updateFilter = ({ target: { value } }) => setFilter(value);

  return (
    <>
      <div className="flex flex-col items-center">
        <RadioGroup
          value={filter}
          onChange={setFilter}
          className="lg flex w-full flex-col items-stretch justify-center gap-1  rounded-2xl bg-zinc-300 p-2.5 sm:w-auto sm:flex-row sm:items-center"
        >
          {['Show All', 'Show Completed', 'Show Uncompleted'].map((it, i) => (
            <RadioGroup.Option key={i} value={it}>
              {({ checked }) => (
                <div
                  className={`w-full cursor-pointer rounded-lg px-4 py-1  ${
                    checked
                      ? 'border-2 border-emerald-700 bg-emerald-200 text-zinc-900'
                      : 'bg-zinc-500/80 text-zinc-200'
                  }`}
                >
                  {it}
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>
    </>
  );
};

export default TodoFilter;
