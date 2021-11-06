import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginPage'
import Home from './components/Home'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
    </Switch>
  </>
)

export default App
