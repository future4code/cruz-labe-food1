import ErrorBoundary from 'containers/ErrorBoundary'
import GlobalState from 'contexts/global'
import Router from 'router/routes'
import './styles/global.scss'

const App = () => (
  <ErrorBoundary>
    <GlobalState>
      <Router />
    </GlobalState>
  </ErrorBoundary>
)

export default App
