
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import EditContact from './components/EditContact';
import Home from './components/Home';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="/addcontact" element={<AddContact />} />
        <Route path="/editcontact/:id" element={<EditContact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
