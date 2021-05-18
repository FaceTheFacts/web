import { IonReactRouter } from '@ionic/react-router';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { Route } from 'react-router-dom';
import log from 'loglevel';
import React, { useState } from 'react';
import Electionchances from './pages/ElectionChances';
import Discover from './pages/Discover';
import Profile from './pages/Profile';
import News from './pages/News';
import Votes from './pages/Votes/Votes';
import Bio from './pages/Bio';
import Home from './pages/Home';
import LegalNotice from './pages/Legal_Notice';
import Privacy from './pages/Privacy';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

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

/* Global Types */
import { Candidate, Politician } from './Types';

/* Hardcoded Amthor */
import { amthor } from './amthor';
import Position from './pages/Position';

let politician: Politician;
const queryClient = new QueryClient();

const App: React.FC = () => {
	const [candidate, setCandidate] = useState<Politician>(politician);

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
						<Route path="/discover" exact>
							<Discover candidate={politician} setCandidate={setCandidate}></Discover>
						</Route>
						{/* <Route path="/politician/:id/election">
							<Electionchances candidate={candidate as Candidate} />
						</Route> */}
							<Route path="/politician/:id/profile" exact>
								<Profile candidate={candidate}></Profile>
							</Route>
							{/* 						<Route path="/politician/:id/news" exact>
							<News candidate={candidate as Candidate}></News>
						</Route>
						<Route path="/politician/:id/bio" exact>
							<Bio candidate={candidate as Candidate}></Bio>
						</Route>
						<Route path="/politician/:id/votes" exact>
							<Votes candidate={candidate as Candidate}></Votes>
						</Route>
						<Route path="/politician/:id/position" exact>
							<Position candidate={candidate}></Position>
						</Route>

						{/* Redirect '/' to '/scan', since that will be our starting point */}
						</IonRouterOutlet>
					</IonSplitPane>
				</IonReactRouter>
			</IonApp>
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	);
};

export default App;
