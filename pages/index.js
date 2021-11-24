import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'The First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Brno_Parnas_Fountain-02.jpg/1280px-Brno_Parnas_Fountain-02.jpg',
    address: 'Zelný trh 295, 602 00 Brno',
    desctiption: 'Our first meetup',
  },
  {
    id: 'm2',
    title: 'The Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Brno_Parnas_Fountain-02.jpg/1280px-Brno_Parnas_Fountain-02.jpg',
    address: 'Zelný trh 295, 602 00 Brno',
    desctiption: 'Our second meetup',
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
};

export default HomePage;
