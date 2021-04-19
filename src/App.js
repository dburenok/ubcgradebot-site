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
      <div id="watermark">made by <a href="https://dburenok.com/">dmitriy</a> with <span id="icon_offset"><FaHeart color="orange" /></span></div>
      <div id="bottom_left"><a href="https://github.com/dburenok/ubcgradebot-site">GitHub Repo</a>{'\u00A0'}{'\u00A0'}7535 searches this month</div>
    </div>
  );
}

export default App;
