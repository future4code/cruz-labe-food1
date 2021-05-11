import ErrorBoundary from 'containers/ErrorBoundary'
import GlobalState from 'contexts/global'
import Router from 'router/routes'
import './styles/global.scss'

function App() {
  return (
    <ErrorBoundary>
      <GlobalState>
        <Router />
      </GlobalState>
    </ErrorBoundary>
  )
}

export default App
