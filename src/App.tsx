import config from '../gitprofile.config';
import GitProfile from './components/gitprofile';
import {} from 'styled-components/cssprop';

function App() {
  return <GitProfile config={config} css="height: 10px;" />;
}

export default App;
