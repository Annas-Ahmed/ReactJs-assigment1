import './App.css'
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';

function App() {
  return (
    <div className="App">
      <div className='head-section'>
        {/* <Navbar /> */}
        <button>Community</button>
        <button>Portfolios</button>
        <button>Inspirations</button>
        <button>News</button>
        <button>Features</button>
        <button>Jobs</button>
      </div>
      <section className='cards-container'>

        <div className='cards'>
          <h2>
            Services
          </h2>
          <img src={require('./assets/services_icon.png')} />
          <p>
            Suspendisse Solicitutun
          </p>
          <p>
            Duis vitae semper turpis
          </p>
          <p>

            Sodales fermentum
          </p>
          <p>
            Quam integer
          </p>
          <p>
            Nibh arcu
          </p>
        </div>
        <div className='cards'>
          <h2>
            Shared files
          </h2>
          <img src={require('./assets/services_icon.png')} />
          <p>
            Tempus sempun
          </p>
          <p>
            Nunc visit album
          </p>
          <p>

            Sodales fermentum
          </p>
          <p>
            Quam integer
          </p>
          <p>
            Nibh arcu
          </p>
        </div>
        <div className='cards'>
          <h2>
            Manage List & Subscribers
          </h2>
          <img src={require('./assets/services_icon.png')} />
          <p>
            Aliquam Massa
          </p>
          <p>
            Nam at rouciuos
          </p>
          <p>

            Sodales fermentum
          </p>
          <p>
            Quam integer
          </p>
          <p>
            Nibh arcu
          </p>
        </div>
        <div className='cards'>
          <h2>
            Videos & Photos
          </h2>
          <img src={require('./assets/services_icon.png')} />
          <p>
            Magna Consectuer
          </p>
          <p>
            Duis vitae semper turpis
          </p>
          <p>

            Sodales fermentum
          </p>
          <p>
            Quam integer
          </p>
          <p>
            Nibh arcu
          </p>
        </div>
      </section>
      <div className='container2'>

        <section className='section2'>
          <h1>
            Commited to our Clients
          </h1>
          <div>

            <img src={require('./assets/setting.png')} width="200px" height="120px" />
          </div>
          <LoremIpsum p={1} avgSentencesPerParagraph={5} style={{ fontSize: '0rem' }} />
        </section>
        <section className='section2'>
          <h1>
            Solution for th Bottom Line
          </h1>
          <div>

            <img src={require('./assets/bulb.png')} width="150px" height="120px" />
          </div>
          <LoremIpsum p={1} avgSentencesPerParagraph={3} style={{ fontSize: '0rem' }} />
        </section>
        <div>

          <img src={require('./assets/graph.png')} width="500px" />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
