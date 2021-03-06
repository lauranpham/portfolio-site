import React from 'react';
import {
	FaHome,
	FaGithub,
	FaLinkedin,
	FaYoutube,
	FaInstagram,
	FaExternalLinkAlt,
} from 'react-icons/fa';
import Intro from '../pages/Intro';
import About from '../pages/About';
import Work from '../pages/Work';
// import Testimonials from './Testimonials';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

export const projects = [
	{
		id: 1,
		title: 'Sammi',
		image: './images/sammi.jpg',
		desc: `Sammi is a supportive app for teachers to support the emotional and social development of their students. `,
		links: [
			{
				id: 1,
				type: 'github',
				url: 'https://github.com/lauranpham/Sammi',
			},
			{
				id: 3,
				type: 'youtube',
				url: 'https://www.youtube.com/watch?v=uayJ4QoKlVw&t=328s',
			},
			{
				id: 2,
				type: 'website',
				url: 'http://sammi.herokuapp.com/',
			},
		],
		languages: ['ruby', 'javascript'],
	},
	{
		id: 2,
		title: 'Furreal',
		image: './images/furreal.jpg',
		desc: `Furreal is an online marketplace to hire your next pet best friend! `,
		links: [
			{
				id: 2,
				type: 'website',
				url: 'http://furreal.herokuapp.com/',
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
	// 			type: 'github',
	// 			url: '',
	// 		},
	// 		{
	// 			id: 2,
	// 			type: 'website',
	// 			url: '',
	// 		},
	// 		{
	// 			id: 3,
	// 			type: 'youtube',
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
		links: [
			{
				id: 1,
				type: 'github',
				url: 'https://github.com/lauranpham/rails-mister-cocktail',
			},
			{
				id: 2,
				type: 'website',
				url: 'https://mister-cocktail-2311.herokuapp.com/',
			},
		],
		languages: ['react', 'javascript'],
	},
];

export const socials = [
	{
		id: 1,
		type: 'linkedin',
		url: 'https://www.linkedin.com/in/laura-pham-641ab462',
		icon: <FaLinkedin />,
	},
	{
		id: 2,
		type: 'github',
		url: 'https://github.com/lauranpham',
		icon: <FaGithub />,
	},
	{
		id: 3,
		type: 'instagram',
		url: 'https://www.instagram.com/lauracodes_/',
		icon: <FaInstagram />,
	},
	{
		id: 4,
		type: 'website',
		url: '',
		icon: <FaExternalLinkAlt />,
	},
	{
		id: 5,
		type: 'youtube',
		url: '',
		icon: <FaYoutube />,
	},
];

export const bio =
	"Hello my name is Laura. I am a driven, meticulous, and quick learning Full Stack Developer with a diverse skill set and experiences working at a London EdTech start-up, Australia's leading marketing operations platform, and Australian & UK education systems. I excel at teamwork, communication, and attention to detail to drive high-quality projects to completion.";

export const work = [
	{
		id: 'recAGJfiU4CeaV0HL',
		order: 3,
		title: 'Full Stack Web Developer',
		dates: 'January 2021 - Present',
		duties: [
			`Delivered 4 core product features and REST API upgrades that significantly improved users' overall platform experience and feature usage.`,
			`Write clean, testable, and performant code in React, Javascript, Elixir and PHP within an Agile and TDD environment.`,
			`Collaborate in cross-functional teams to drive product/design, customer, and testing-informed development.`,
			`Engage in the full development life cycle of new features including analysis, design, implementation, testing and deployment.`,
		],
		company: 'IntelligenceBank',
	},
	{
		id: 'recIL6mJNfWObonls',
		order: 2,
		title: 'Lead Website Developer',
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
			`Developed the Front End and UI/UX of the LearnerShape platform using Javascript, JQuery, JSON, AJAX, Ruby on Rails, Python,
			HTML & CSS.`,
		],
		company: 'LearnerShape',
	},
	{
		id: 'rec61x18GVY99hQq6',
		order: 4,
		title: 'Teaching Assistant',
		dates: 'Jan 2020 - Feb 2020',
		duties: [
			`Supported students to understand and solve coding challenges as part of the Le Wagon Full-Stack Web Development Bootcamp (Ruby, RoR, SQL, JS, HTML, CSS).`,
			`Delivered coding workshops to 30+ attendees on a range of topics including Git & GitHub`,
		],
		company: 'Le Wagon',
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
	{ id: 1, text: <FaHome />, component: <Intro socials={socials} /> },
	{
		id: 2,
		text: 'About',
		component: <About bio={bio} image='./images/profile-photo.jpg' />,
	},
	{
		id: 3,
		text: 'Work',
		component: <Work work={work} />,
	},
	{ id: 4, text: 'Projects', component: <Projects projects={projects} /> },
	// { id: 5, text: 'Testimonials', component: <Testimonials /> },
	{ id: 6, text: 'Contact', component: <Contact /> },
];
