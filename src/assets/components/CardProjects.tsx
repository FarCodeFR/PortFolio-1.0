import "../../style/card.css";
import data from "../../mocks/apiCardsProjects.json";
import "../../models/DataModel";

function CardProjects() {
	return (
		<>
			{data.map((el) => {
				return (
					<section id={el.name} key={el.id} className="container-card-projects">
						<section>
							<h2>{el.name}</h2>
						</section>
						<section className="container-card-titre">
							<h3>{el.title}</h3>
							<h3>info</h3>
						</section>
						<picture>
							<img src={el.image} alt="" />
						</picture>
					</section>
				);
			})}
		</>
	);
}

export default CardProjects;
