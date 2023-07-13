import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className='app'>
      <Nav/>
   <Banner/>
   <Row 
   title="NETFLIX ORIGINALS"
   isLargeRow 
    fetchUrl={requests.fetchNetflixOriginals}/>
   <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
   <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
   <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
   <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
   <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
   <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
   <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries} />
   
   
   
   </div>
  );
}

export default App;


//27722148d89d71e4d5329ed3ef764c93