
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner'
import Post from './Components/Post/Post'
import {actions,trending, originals, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries} from './urls'

function App() {
  return (
    <div>
     <NavBar />
     <Banner />
     <Post url={originals} title="Netflix Original"/>
     <Post url={actions} title="Action" isSmall />
     <Post url={trending} title="Trending" isSmall />
     <Post url={ComedyMovies} title="Comedy Movie" isSmall />
     <Post url={HorrorMovies} title="Horror Movies" isSmall />
     <Post url={RomanceMovies} title="Romance Movies" isSmall />
     <Post url={Documentaries} title="Documentaries" isSmall />
     


     
    </div>
  );
}

export default App;
