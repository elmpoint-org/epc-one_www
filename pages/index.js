import LinkBlock from '../components/LinkBlock';
import TitleBlock from '../components/TitleBlock';

const titleblock = {
  title: 'Welcome to the new Elm Point website!',
  description: `See below for links to commonly used pages on this website. Items with locks will require you to log in to see them.`,
};

const links = [
  {
    name: 'Visitor calendar',
    url: '/calendar',
    description: `Click here to see camp availability and let everyone know when you're coming.`,
    secure: true,
    highlight: true,
  },
  {
    name: 'Project list',
    url: '/projects',
    description: `Click to find the current "fridge list" of tasks needed to keep camp in good condition. Please work on a task (or a few!) while you're here.`,
    secure: true,
  },
  {
    name: 'Document center',
    url: '/documents',
    description: `This is where you can find important camp documentation like budget history, opening instructions, guest waivers, etc.`,
    secure: true,
  },
  {
    name: 'Photo contest',
    url: '/photocontest',
    description: `Click here to submit your entry to the annual photo contest, and browse past years' submissions!`,
  },
  {
    name: 'Elm Point history',
    url: '/history',
    description: `Click here to read about family history, browse old photos, and help out with research efforts.`,
    secure: true,
  },
  {
    name: 'Directions',
    url: 'https://www.google.com/maps/place/14+Elm+Point+Rd,+Mirror+Lake,+NH+03853/',
    external: true,
    description: `Click here to see Google Maps directions from your location to Elm Point.`,
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-stretch gap-5 p-2.5">
        <TitleBlock
          title={titleblock.title}
          description={titleblock.description}
        />

        {/* common links */}
        <div className="grid auto-rows-fr grid-cols-1 gap-2.5 p-2.5 md:grid-cols-3">
          {links.map((it, i) => (
            <LinkBlock
              key={i}
              name={it.name}
              url={it.url}
              description={it.description}
              secure={it.secure}
              external={it.external}
              highlight={it.highlight}
            />
          ))}
        </div>
      </div>
    </>
  );
}
