import React from 'react';
import { FaBehance, FaGithub, FaLinkedin, FaHome, FaInstagram } from 'react-icons/fa';
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Testimonials from './Testimonials';
import Projects from './Projects';
import Contact from './Contact';

export const projects = [
	{
		id: 1,
		title: 'Sammi',
		image: './images/sammi.jpg',
		desc: `Sammi is a supportive app for teachers to support the emotional and social development of their students. `,
		socials: [
			{
				id: 1,
				title: 'github',
				url: '',
			},
			{
				id: 2,
				title: 'website',
				url: '',
			},
			{
				id: 3,
				title: 'youtube',
				url: '',
			},
		],
		languages: ['ruby', 'javascript'],
	},
	{
		id: 2,
		title: 'Furreal',
		image: './images/furreal.jpg',
		desc: `Furreal is an online marketplace to hire your next pet best friend! `,
		socials: [
			{
				id: 1,
				title: 'github',
				url: '',
			},
			{
				id: 2,
				title: 'website',
				url: '',
			},
			{
				id: 3,
				title: 'youtube',
				url: '',
			},
		],
		languages: ['ruby', 'javascript'],
	},
	// {
	// 	id: 3,
	// 	title: 'React Counter',
	// 	image: './images/mrcocktail.jpg',
	// 	desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
	// 	socials: [
	// 		{
	// 			id: 1,
	// 			title: 'github',
	// 			url: '',
	// 		},
	// 		{
	// 			id: 2,
	// 			title: 'website',
	// 			url: '',
	// 		},
	// 		{
	// 			id: 3,
	// 			title: 'youtube',
	// 			url: '',
	// 		},
	// 	],
	// 	languages: ['react', 'javascript'],
	// },
	{
		id: 4,
		title: 'Mister Cocktail',
		image: './images/mrcocktail.jpg',
		desc: `Mister Cocktail is a website for an up and coming bar venue with its drinks menu and prices. `,
		socials: [
			{
				id: 1,
				title: 'github',
				url: '',
			},
			{
				id: 2,
				title: 'website',
				url: '',
			},
			{
				id: 3,
				title: 'youtube',
				url: '',
			},
		],
		languages: ['react', 'javascript'],
	},
];

export const socials = [
	{
		id: 3,
		title: 'linkedin',
		url: 'https://www.linkedin.com/in/laura-pham-641ab462',
		icon: <FaLinkedin />,
	},
	{
		id: 2,
		title: 'github',
		url: 'https://github.com/lauranpham',
		icon: <FaGithub />,
	},
	{
		id: 2,
		title: 'instagram',
		url: 'https://www.instagram.com/lauracodes_/',
		icon: <FaInstagram />,
	},
];

export const bio =
	"Hello my name is Laura Pham. I am a driven, meticulous, and quick learning Full Stack Developer with a diverse skill set and experiences working at a London EdTech start-up, Australia's leading marketing operations platform, and Australian & UK education systems. I excel at teamwork, communication, and attention to detail to drive high- quality projects to completion.";

export const experiences = [
	{
		id: 'recAGJfiU4CeaV0HL',
		order: 3,
		title: 'Full Stack Web Developer',
		dates: 'January 2021 - Present',
		duties: [
			`Write clean, testable, and performant code in React, Javascript, Elixir and PHP within an Agile and TDD environment.`,
			`Delivered 4 core product features and REST API upgrades that significantly improved users' overall platform experience and feature usage.`,
			`Actively contribute and collaborate in cross-functional teams to drive product/design, customer, and testing-informed development.`,
			`Engage in the full development life cycle of new features including analysis, design, implementation, testing and deployment.`,
		],
		company: 'IntelligenceBank',
	},
	{
		id: 'recIL6mJNfWObonls',
		order: 2,
		title: 'Lead Web Developer',
		dates: 'June 2020 - December 2020',
		duties: [
			`Led web development projects for 100+ ANZ clients from start to finish.`,
			`Translated client requirements and brand guidelines into responsive and maintainable websites using Ruby on Rails, Javascript, JQuery, HTML & CSS, & AWS Web Services.`,
		],
		company: 'Eagle Software',
	},
	{
		id: 'rec61x18GVY99hQq5',
		order: 1,
		title: 'Full Stack Developer',
		dates: 'Feb 2020 - May 2020',
		duties: [
			`Managed the Front End Development and UI/UX of the LearnerShape platform using Javascript, JQuery, JSON, AJAX, Ruby on Rails, Python,
			HTML & CSS.`,
		],
		company: 'LearnerShape',
	},
];

export const testimonials = [
	{
		id: 1,
		//   name: 'susan smith',
		job: 'senior QA manager',
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		//   name: 'anna johnson',
		job: 'senior product manager',
		text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
	},
	{
		id: 3,
		//   name: 'peter jones',
		job: 'engineering manager',
		text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
	},
	{
		id: 4,
		//   name: 'bill anderson',
		job: 'team lead',
		text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
	},
	{
		id: 4,
		//   name: 'bill anderson',
		job: 'team lead',
		text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
	},
];

export const links = [
	{ id: 1, text: <FaHome/>, component: <Intro socials={socials} /> },
	{
		id: 2,
		text: 'About',
		component: <About bio={bio} image='./images/profile-photo.jpg' />,
	},
	{
		id: 3,
		text: 'Experience',
		component: <Experience experiences={experiences} />,
	},
	{ id: 4, text: 'Projects', component: <Projects projects={projects} /> },
	// { id: 5, text: 'Testimonials', component: <Testimonials /> },
	{ id: 6, text: 'Contact', component: <Contact /> }
];
