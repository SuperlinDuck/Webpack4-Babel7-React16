import { hot } from 'react-hot-loader/root';
import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import loadable from '@loadable/component';

// import Index from 'pages/IndexPage';
// import Login from 'pages/LoginPage';

const Loading = () => {
  return (<div>loading...</div>);
}

const LoginPage = loadable(() => import('pages/LoginPage'), {
  fallback: <Loading />
});

const IndexPage = loadable(() => import('pages/IndexPage'), {
  fallback: <Loading />
});

// const LoadableComponent = loadable({
// 	loder: () => import('pages/LoginPage'),
//   loading: Loading,
// });


class App extends React.Component{
	render(){
		return (
			<BrowserRouter>
				<ul>
					<li><Link to="/">Index</Link></li>
					<li><Link to="/login">Login</Link></li>
				</ul>
			<Switch>
				<Route path="/" exact component={IndexPage} />
				<Route path="/login" component={LoginPage} />
			</Switch>
		</BrowserRouter>
	);
  }
}

export default hot(App);