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
			"/public/projects/bintan-travel/bintan-travel-1.png",
			"/public/projects/bintan-travel/bintan-travel-2.png",
			"/public/projects/bintan-travel/bintan-travel-3.png",
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
			"/public/projects/handwritten/handwritten-1.png",
			"/public/projects/handwritten/handwritten-2.png",
		],
	},
];
