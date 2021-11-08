import Header from './components/Header'
import Entry from './components/Entry'

function App() {

  return (
    <div className='container'>
      <Header />
      <Entry />
      <div id="watermark">made by <a href="https://dburenok.com/">dmitriy</a></div>
      <div id="bottom_left"><a href="https://github.com/dburenok/ubcgradebot-site">GitHub Repo</a></div>
    </div>
  );
}

export default App;
