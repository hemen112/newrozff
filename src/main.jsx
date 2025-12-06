import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SponsorPage from './pages/SponsorPage.jsx'
import VisionPage from './pages/VisionPage.jsx'
import EventsPage from './pages/EventsPage.jsx'
import './App.css'

const getRoute = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const path = window.location.pathname
    .replace(base, '')
    .replace(/^\/|\/$/g, '')
    .replace(/\.html$/, '');
  if (path === 'sponsor') return 'sponsor';
  if (path === 'vision' || path === 'lang') return 'vision';
  if (path === 'events') return 'events';
  return 'home';
};

function Router() {
  const [route, setRoute] = React.useState(getRoute());

  React.useEffect(() => {
    const onPop = () => setRoute(getRoute());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [route]);

  if (route === 'sponsor') return <SponsorPage />;
  if (route === 'vision') return <VisionPage />;
  if (route === 'events') return <EventsPage />;
  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
