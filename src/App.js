import Header from './components/Header'
import Entry from './components/Entry'
import { FaHeart } from 'react-icons/fa';

function App() {

  return (
    <div className='container'>
      {/* <div className="maintenance">
        <p>Down for maintenance (1-2 hours)</p>
      </div> */}
      <Header />
      <Entry />
      <div id="watermark">made by <a href="https://dburenok.com/">dmitriy</a></div>
      <div id="bottom_left"><a href="https://github.com/dburenok/ubcgradebot-site">GitHub Repo</a></div>
    </div>
  );
}

export default App;
