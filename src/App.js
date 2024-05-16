

import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { EventsPage } from './pages/Events/EventsPage';
import { RegistrationPage } from './pages/Registration/RegistrationPage';
import { ParticipantsPage } from './pages/Participants/ParticipantsPage';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<EventsPage/>}/>
        <Route
          path="/register"
          element={<RegistrationPage/>}
        />
        <Route
          path="/view"
          element={<ParticipantsPage/>}
        />
      </Routes>
    </div>
    
  );
}

export default App;
