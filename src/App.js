

import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { EventsPage } from './pages/Events/EventsPage';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<EventsPage/>}/>
        
      </Routes>
    </div>
    
  );
}

export default App;
