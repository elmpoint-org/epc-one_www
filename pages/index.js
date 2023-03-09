import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import axios from 'axios';

import { uncompletedItemsState } from '../state/todoList';

import { api } from '../utils/dev';

import LinkBlock from '../components/LinkBlock';
import TitleBlock from '../components/TitleBlock';

const titleblock = {
  title: 'Welcome to the new Elm Point website!',
  description: `See below for links to commonly used pages on this website. Items with locks will require you to log in to see them.`,
};

export default function Home({ links }) {
  const leftTodo = useRecoilValue(uncompletedItemsState);

  return (
    <>
      <div className="flex flex-col items-stretch gap-5 p-2.5">
        <TitleBlock {...titleblock} />

        {/* common links */}
        <div className="grid auto-rows-fr grid-cols-1 gap-2.5 p-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {links
            .sort((a, b) => a.order - b.order)
            .map((props, i) => (
              <LinkBlock key={i} {...props} />
            ))}
        </div>

        <div className="text-sm italic opacity-80">
          <p className="inline">
            You have <span className="font-black">{leftTodo}</span> uncompleted
            todo list items{leftTodo ? '.' : '!'}&nbsp;
          </p>
          <Link className="text-blue-600 hover:underline" href="/atoms">
            Update your list here.
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const props = {};

  try {
    const { data } = await axios.get(api + '/cms/home_links');
    if (!data) throw new Error('no home links!');
    props.links = data.links;
  } catch (e) {
    if (e.response)
      throw new Error(
        (({ status, statusText, data }) => `${status} ${statusText}: ${data}`)(
          e.response
        )
      );
    throw new Error(e);
  }

  return { props };
}
