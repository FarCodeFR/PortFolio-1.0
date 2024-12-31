import "../../style/card.css";
import data from "../../mocks/apiCardsProjects.json";
import "../../models/DataModel";

function CardProjects() {
	return (
		<>
			<section className="container-placement-cards">
				{data.map((el) => {
					return (
						<section
							id={el.title}
							key={el.id}
							className="container-card-projects"
						>
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
			</section>
		</>
	);
}

export default CardProjects;
