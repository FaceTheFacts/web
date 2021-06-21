import { IonReactRouter } from '@ionic/react-router';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { Route } from 'react-router-dom';
import log from 'loglevel';
import React from 'react';
import Electionchances from './pages/ElectionChances';
import Search from './pages/Search/Search';
import Profile from './pages/Profile';
import Home from './pages/Home';
import LegalNotice from './pages/Legal_Notice';
import Privacy from './pages/Privacy';
import { QueryClient, QueryClientProvider } from 'react-query';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './pages/mobile-view.css';
import Position from './pages/Position';

const queryClient = new QueryClient();

const App: React.FC = () => {
	log.setLevel('DEBUG', true);
	return (
		<QueryClientProvider client={queryClient}>
			<IonApp>
				<IonReactRouter>
					<IonSplitPane contentId="main">
						{/* Include the side menu */}
						<IonRouterOutlet id="main">
							{/* Register each page with the router
							This works by defining a path and telling the router which component
							(page) to render for that path. */}
							<Route path="/" exact>
								<Home />
							</Route>
							<Route path="/legal-notice" exact>
								<LegalNotice />
							</Route>
							<Route path="/privacy" exact>
								<Privacy />
							</Route>
							<Route path="/search" exact>
								<Search />
							</Route>
							<Route path="/politician/:id/election">
								<Electionchances />
							</Route>
							<Route path="/politician/:id/profile" exact>
								<Profile />
							</Route>
							<Route path="/politician/:id/position" exact>
								<Position />
							</Route>
						</IonRouterOutlet>
					</IonSplitPane>
				</IonReactRouter>
			</IonApp>
		</QueryClientProvider>
	);
};

export default App;
