import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import Vignette from './common/vignette';
import Navbar from './common/navbar';
import Footer from './common/footer';

import Home from './page/home';
import Posts from './page/posts';
import PostView from './page/post-view';
import About from './page/about';
import NotFound from './page/not-found';

// Render application

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Vignette />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/posts/" element={<Posts />} />
				<Route path="/posts/:id/" element={<PostView />} />
				<Route path="/about/" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
, document.getElementById('app'));
