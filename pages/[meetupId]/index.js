import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Brno_Parnas_Fountain-02.jpg/1280px-Brno_Parnas_Fountain-02.jpg"
      title="The First Meetup"
      address="Zelný trh 295, 602 00 Brno"
      description="Our first meetup"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Brno_Parnas_Fountain-02.jpg/1280px-Brno_Parnas_Fountain-02.jpg',
        title: 'The First Meetup',
        address: 'Zelný trh 295, 602 00 Brno',
        description: 'Our first meetup',
      },
    },
  };
}

export default MeetupDetails;
