import config from '../gitprofile.config';
import GitProfile from './components/GitProfile';
import '@splidejs/react-splide/css';

function App() {
  return <GitProfile config={config} />;
}

export default App;
