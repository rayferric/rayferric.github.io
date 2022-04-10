import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {
	HashRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import Vignette from './common/vignette';
import Navbar from './common/navbar';
import Footer from './common/footer';

import Home from './page/home';
import About from './page/about';
import Blog from './page/blog';
import BlogView from './page/blog-view';
import Project from './page/project';
import ProjectView from './page/project-view';
import NotFound from './page/not-found';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Vignette />
			<Navbar />
			<Routes>
     			{/* <Route path="/" element={<Home />} /> */}
				<Route path="/about/" element={<About />} />
				<Route path="/blog/" element={<Blog />} />
				{/* <Route path="/blog/:id/" element={<BlogView />} />
				<Route path="/project/" element={<Project />} />
				<Route path="/project/:id/" element={<ProjectView />} /> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
, document.getElementById('root'));
