import { Suspense, lazy } from 'react';

import './App.css'
import { Router } from './Router.jsx';
import Page404 from './assets/pages/404.jsx';
import SearchPage from './assets/pages/Search.jsx';
import { Route } from './Route.jsx';

const HomePage = lazy(() => import('./assets/pages/Home.jsx'))
const AboutPage = lazy(() => import('./assets/pages/About.jsx'))

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]


function App() {
  
  
  return(
    <Suspense fallback={<div>Loading ...</div>}>
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path='/' Component={HomePage}/>
        <Route path='/about' Component={AboutPage}/>
      </Router>
    </main>
    </Suspense>
    )

}

export default App
