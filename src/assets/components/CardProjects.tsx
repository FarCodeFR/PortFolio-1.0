import "../../styles/card.css";
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
								<h3>
									<a target="_blanck" className="link-card" href={el.info}>
										{el.title}
									</a>
								</h3>

								<h3>
									<a target="_blanck" href={el.link}>
										Voir plus
									</a>
								</h3>
							</section>

							<picture>
								<img src={el.image} alt={el.alt} />
							</picture>
						</section>
					);
				})}
			</section>
		</>
	);
}

export default CardProjects;
