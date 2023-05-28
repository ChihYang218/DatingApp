import './Home.css';
import Header from './components/Header';
import DatingCards from './components/DatingCards'
import SwipeButtons from './components/SwipeButtons'

function Home() {
  return (
    <div className="Home">
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default Home;
