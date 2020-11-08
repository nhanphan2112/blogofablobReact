import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardHeader } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (storeState) => {
	return {
		homepics: storeState.homepics,
	};
};

function RenderCard({ item }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{item.name}</CardTitle>
			</CardHeader>
			<CardBody>
				<CardText>{item.description}</CardText>
				<CardImg src={item.image} alt={item.name} />
			</CardBody>
		</Card>
	);
}

function Home(props) {
	const homepic = props.homepics.map((homepic) => {
		return (
			<div key={homepic.id} className="col-md m-1">
				<RenderCard item={homepic} />
			</div>
		);
	});

	return (
		<div className="container">
			<div className="row">{homepic}</div>
		</div>
	);
}

export default connect(mapStateToProps)(Home);
