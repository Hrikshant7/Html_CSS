import './App.css';
import InfinteScroll from './components/infiniteScroll/InfiniteScroll';
import StopWatch from './components/stopWatch/StopWatch';
const App = () => {
  
  return (
    <div className='container'>
      <StopWatch />
      <InfinteScroll/>
    </div>
  );
}

export default App;
