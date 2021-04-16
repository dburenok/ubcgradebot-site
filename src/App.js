import Header from './components/Header'
import Entry from './components/Entry'
import { FaHeart } from 'react-icons/fa';


// import { useEffect } from 'react'

function App() {
    return (
        <div className="container">
            <Header />
            <Entry />
            <div id="watermark">made by <a href="https://dburenok.com/">dmitriy</a> with <span id="icon_offset"><FaHeart color="orange" /></span></div>
        </div>
    );
}

export default App;
