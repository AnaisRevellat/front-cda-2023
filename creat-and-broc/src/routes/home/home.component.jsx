import Directory from '../../components/directory/directory.component';

import './home.styles.scss'

const Home = () => {

  const homeUrl = 'https://zupimages.net/up/23/26/yv4t.png';

  const categories = [
    {
      id: 1,
      title: 'Art de la table',
      subtitle: 'Inspiration',
      backUrl: 'https://zupimages.net/up/23/26/pq25.png',
    },
    {
      id: 2,
      title: 'Décorer',
      subtitle: 'Inspiration',
      backUrl: 'https://zupimages.net/up/23/26/cb98.png',
    },
    {
      id: 3,
      title: 'Luminaires',
      subtitle: 'Inspiration',
      backUrl: 'https://zupimages.net/up/23/26/i6zs.png',
    },
    {
      id: 4,
      title: 'Textile',
      subtitle: 'Inspiration',
      backUrl: 'https://zupimages.net/up/23/26/wldy.png',
    },
    {
      id: 5,
      title: 'Mobilier',
      subtitle: 'Inspiration',
      backUrl: 'https://zupimages.net/up/23/26/jvpr.png',
    }
  ]

  return (
    <>
      <div className="home-container">
        <Directory categories={categories} homeUrl={homeUrl} />       
      </div>
    </>
  );
}

export default Home;