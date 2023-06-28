import './categories.styles.scss'

const App = () => {

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

        <main className="main-container">

          <div className="home-category-container">

            <div className="background-home" style={{ backgroundImage: `url(${homeUrl})` }} />

          </div>

        </main>

        <section className="categories-container">

          {categories.map(({ id, title, subtitle, backUrl }) => (
            <div className="category-container" key={id}>
              {/* <img alt="" /> */}
              <div className="background-image" style={{ backgroundImage: `url(${backUrl})` }} />

              <div className="category-body-container" >
                <h2>{title}</h2>
                <p>{subtitle}</p>
              </div>
            </div>
          ))}

        </section>
      </div>
    </>
  );
}

export default App;
