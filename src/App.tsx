import config from '../gitprofile.config';
import GitProfile from './components/gitprofile';

function App() {
  return <GitProfile config={config} />;
}

export default App;
