import { useMediaQueryMatcher } from './hooks/useMediaQueryMatcher';
import './App.css';

const App = () => {
  const md = useMediaQueryMatcher('(max-width: 991.98px)');

  return (
    <div className="app">
      <p>Medium devices (tablets, less than 992px): {`${md}`}</p>
    </div>
  );
};

export default App;
