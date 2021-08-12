import Spinner from './components/Spinner/Spinner';
import { animationBuilder } from './functions/animation-builder';
import Electionchances from './pages/ElectionChances/ElectionChances';

/* Theme variables */
import './theme/variables.css';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import log from 'loglevel';
import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route } from 'react-router-dom';

const queryClient = new QueryClient();

const Home = React.lazy(() => import('./pages/Home'));
const AboutUs = React.lazy(() => import('./pages/AboutUs/AboutUs'));
const LegalNotice = React.lazy(() => import('./pages/Legal_Notice'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const SearchScreen = React.lazy(() => import('./pages/Search/SearchScreen/SearchScreen'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Position = React.lazy(() => import('./pages/Position'));
const Votes = React.lazy(() => import('./pages/Votes/Votes'));

const App: React.FC = () => {
	log.setLevel('DEBUG', true);
	return (
		<QueryClientProvider client={queryClient}>
			<IonApp>
				<Suspense fallback={<Spinner />}>
					<IonReactRouter>
						<IonSplitPane contentId="main">
							{/* Include the side menu */}
							<IonRouterOutlet id="main" animation={animationBuilder}>
								{/* Register each page with the router
								This works by defining a path and telling the router which component
								(page) to render for that path. */}
								<Route path="/" exact>
									<Home />
								</Route>
								<Route path="/about-us" exact>
									<AboutUs />
								</Route>
								<Route path="/legal-notice" exact>
									<LegalNotice />
								</Route>
								<Route path="/privacy" exact>
									<Privacy />
								</Route>
								<Route path="/search" exact>
									<SearchScreen />
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
								<Route path="/politician/:id/votes" exact>
									<Votes />
								</Route>
							</IonRouterOutlet>
						</IonSplitPane>
					</IonReactRouter>
				</Suspense>
			</IonApp>
		</QueryClientProvider>
	);
};

export default App;
