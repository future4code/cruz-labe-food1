import Layout from 'components/Layout';
import ErrorBoundary from 'containers/ErrorBoundary';
import GlobalState from 'contexts/GlobalState';
import Router from 'router/routes';
import './styles/global.scss';

function App() {
  return (
    <ErrorBoundary>
      <GlobalState>
        {/* <Layout> */}
          <Router />
        {/* </Layout> */}
      </GlobalState>
    </ErrorBoundary>
  );
}

export default App;
