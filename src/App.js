import './App.css';
import Navbar from './components/Navbar'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import thumb from './images/thumbnails/6.jpg'



function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className=''>
      <img src={thumb} alt='thumbnail' style={{height:'90vh', width: '100vw', opacity: '0.2'}}/>
      <div className='centered-img-text'>
        <h1 className='img-h1'>FULLSTACK</h1>
        <h1 className='img-h1'>MOBILE & WEB</h1>
        <h1 className='img-h1'>DEVELOPMENT</h1>
      </div>

        {/* <img src={image} style={imageStyles}/> */}
        <div className='flex-container container'>


          {/* <span className='my-card'>Full Stack </span>
          <span className='my-card'>Web, </span>
          <span className='my-card'>Mobile App, </span>
          <span className='my-card'>Click Funnel, </span>
          <span className='my-card'>Digital Marketing, </span> */}


          {/* <p className='my-card'>Web, Mobile App, Wordpress, Click Funnel Development</p> */}
        </div>
      </div>

      <div className='container'>
          <Projects/>
          <Services/>
          <div className='container'>
            <Contact/>
          </div>
      </div>
      </div>
  );
}

export default App;
