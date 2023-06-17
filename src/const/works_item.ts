export type TWorkItem = {
	title: string;
	links: string;
	stacks: string[];
	repository: string;
	desc: string;
	category: string;
	image: string[];
};

export const works_item = [
	{
		title: "taxibintan.com",
		links: "https://taxibintan.com",
		stacks: ["Next.js", "SASS"],
		repository: "",
		desc: "a Responsive website for a touring and travelling services in Bintan, Kepulauan Riau called Travel & Taxi Naga Bintan. This project is built using Next for optimized SEO and SASS for the styling framework.",
		category: "Company Website",
		image: [
			"/projects/bintan-travel/bintan-travel-1.png",
			"/projects/bintan-travel/bintan-travel-2.png",
			"/projects/bintan-travel/bintan-travel-3.png",
		],
	},
	{
		title: "Handwritten Digit Classifier",
		links: "http://handwritten-classifier.vercel.app/",
		stacks: ["React.js", "Flask", "GSheets"],
		repository: "https://github.com/FelixFern/Handwritten-Classifier",
		desc: "a Web application build using react as the frontend, flask as the backend and google sheet to keep the dataset. This web app contain a neural network to predict digit written on the 28 x 28 grid available and user will be able to send data to the dataset to increase the model accuracy, the model used MNIST dataset and user generated data for the training data.",
		category: "Web Application",
		image: [
			"/projects/handwritten/handwritten-1.png",
			"/projects/handwritten/handwritten-2.png",
		],
	},
	{
		title: "SSK Interior Design",
		links: "https://sskdesigninterior.com/",
		stacks: ["React.js", "Express.js", "Node.js"],
		repository: "",
		desc: "a Fully responsive portfolio website created for Sinar Surya Kontrarindo. This project is built with React as the frontend and ExpressJS as the backend, this project utilise ExpressJS to crawl the folder project to access the portofolio by folder. This website project is designed in Figma.",
		category: "Web Application",
		image: [
			"/projects/ssk/ssk-1.png",
			"/projects/ssk/ssk-2.png",
			"/projects/ssk/ssk-3.png",
			"/projects/ssk/ssk-4.png",
			"/projects/ssk/ssk-5.png",
		],
	},
	{
		title: "Wordle Recreated",
		links: "https://felixfern.github.io/Wordle-React/",
		stacks: ["React.js"],
		repository: "https://github.com/FelixFern/Wordle-React",
		desc: "Wordle is a famous word guessing game created by Josh Wordle. In this project, the game is recreated using react with javascript local storage.",
		category: "Web Application",
		image: [
			"/projects/wordle/wordle-1.png",
			"/projects/wordle/wordle-2.png",
		],
	},
	{
		title: "Joel Foo's Portfolio Website",
		links: "",
		stacks: ["React.js", "Strapi"],
		repository: "https://joelfoofoo.netlify.app/",
		desc: "a Fully responsive portfolio website built for a videographer and filmographer based on Tangerang, Joel Foo. This website is built with Strapi as the CMS, React as the frontend, and designed with Figma.",
		category: "Personal Website",
		image: [
			"/projects/joel/joel-1.png",
			"/projects/joel/joel-2.png",
			"/projects/joel/joel-3.png",
			"/projects/joel/joel-4.png",
			"/projects/joel/joel-5.png",
			"/projects/joel/joel-6.png",
			"/projects/joel/joel-7.png",
		],
	},
];
