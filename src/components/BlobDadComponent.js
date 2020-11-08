import React from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

const mapStateToProp = (storeState) => {
	return {
		blobdadcarousels: storeState.blobdadcarousels,
		blobdad: storeState.blobdad,
	};
};

function RenderBlobDadCarousels(props) {
	const blobdadcarousel = props.blobdadcarousels.map((blobdadcarousel) => {
		return (
			<Carousel.Item>
				<img className="d-block w-100" src={blobdadcarousel.src} />
				<Carousel.Caption>
					<h3>{blobdadcarousel.caption}</h3>
					<p>{blobdadcarousel.text}</p>
				</Carousel.Caption>
			</Carousel.Item>
		);
	});

	return <Carousel className="my-4">{blobdadcarousel}</Carousel>;
}

function RenderBlobDad(props) {
	return (
		<div className="col-md-4">
			<img
				src={props.blobdad[0].image}
				alt="Blob Dad with Tree"
				className="mt-4"
				id="imgblobdadwithtree"
			/>
		</div>
	);
}

function BlobDad(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<RenderBlobDadCarousels blobdadcarousels={props.blobdadcarousels} />
				</div>
				<RenderBlobDad blobdad={props.blobdad} />
			</div>
		</div>
	);
}

export default connect(mapStateToProp)(BlobDad);
