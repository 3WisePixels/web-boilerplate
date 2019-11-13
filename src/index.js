import React from 'react';
import ReactDOM from 'react-dom';

import App from './client/pages/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
	// PRODUCTION
	// uri: "/graphql",
	// DEVELOPMENT
	uri: "http://localhost:4000/graphql",
	cache: new InMemoryCache({
    addTypename: false
  })
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>
	,document.getElementById('root')
);

serviceWorker.unregister();
