import React from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

const mapStateToProp = (storeState) => {
	return {
		merchcarousels: storeState.merchcarousels,
		maskfanatics: storeState.maskfanatics,
		yawnlovers: storeState.yawnlovers,
	};
};

function RenderMerchCarousels(props) {
	const merchcarousel = props.merchcarousels.map((merchcarousel) => {
		return (
			<Carousel.Item>
				<img className="img-fluid" src={merchcarousel.src} />
			</Carousel.Item>
		);
	});

	return <Carousel className="my-4">{merchcarousel}</Carousel>;
}

function RenderSideBar() {
	return (
		<React.Fragment>
			<h1 className="my-4">Habitat Blob</h1>
			<div className="list-group">
				<a className="list-group-item">Mask Fanatic</a>
				<a className="list-group-item">Yawn Lover</a>
			</div>
		</React.Fragment>
	);
}

function RenderMaskFanatic(props) {
	const maskfanatic = props.maskfanatics.map((maskfanatic) => {
		return (
			<div className="col-lg-4 col-md-6 mb-4">
				<div className="card h-100">
					<img className="card-img-top" src={maskfanatic.image} />
					<div className="card-body">
						<h4 className="card-title">
							<a href="#">{maskfanatic.name}</a>
						</h4>
						<h5>{maskfanatic.price}</h5>
						<p className="card-text">{maskfanatic.text}</p>
						<p>
							<button>
								Add to <i className="fa fa-shopping-cart" aria-hidden="true"></i>
							</button>
						</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
					</div>
				</div>
			</div>
		);
	});

	return maskfanatic;
}

function RenderYawnLover(props) {
	const yawnlover = props.yawnlovers.map((yawnlover) => {
		return (
			<div className="col-lg-4 col-md-6 mb-4">
				<div className="card h-100">
					<img className="card-img-top" src={yawnlover.image} />
					<div className="card-body">
						<h4 className="card-title">
							<a href="#">{yawnlover.name}</a>
						</h4>
						<h5>{yawnlover.price}</h5>
						<p className="card-text">{yawnlover.text}</p>
						<p>
							<button>
								Add to <i className="fa fa-shopping-cart" aria-hidden="true"></i>
							</button>
						</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
					</div>
				</div>
			</div>
		);
	});

	return yawnlover;
}

function Merch(props) {
	return (
		<div className="container">
			<div className="row ">
				<div className="col-lg-3">
					<RenderSideBar />
				</div>
				<div className="col-lg-9">
					<RenderMerchCarousels merchcarousels={props.merchcarousels} />
					<div className="row">
						<RenderMaskFanatic maskfanatics={props.maskfanatics} />
            <RenderYawnLover yawnlovers={props.yawnlovers} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default connect(mapStateToProp)(Merch);
