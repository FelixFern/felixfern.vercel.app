import React from "react";
import "./ImageCarousel.scss";

const ImageCarousel = ({ images }) => {
	return (
		<div className="flex items-center min-h-screen justify-center w-screen overflow-hidden">
			<div className="w-[100%] h-1/2 flex items-center justify-around absolute left-0 animate gap-2 animate -z-50">
				{images.map((image) => (
					<img src={image} key={image} className="w-1/2"></img>
				))}
				{images.map((image) => (
					<img src={image} key={image} className="w-1/2"></img>
				))}
				{images.map((image) => (
					<img src={image} key={image} className="w-1/2"></img>
				))}
			</div>
		</div>
	);
};

export default ImageCarousel;
