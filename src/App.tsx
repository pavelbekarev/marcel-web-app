import './styles/App.scss';
import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  return (
    <>
      <section className='section'>
        <div className='container'>
          <Header />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Slider />
        </div>
      </section>
    </>
  );
}

export default App;
