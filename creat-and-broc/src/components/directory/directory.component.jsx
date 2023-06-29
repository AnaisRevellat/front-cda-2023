import CategoryItem from "../category-item/category-item.component";

import "./directory.styles.scss";

const Directory = ({ categories, homeUrl }) => {
	return (
		<>
			<main className='main-container'>
				<div className='home-category-container'>
					<div
						className='background-home'
						style={{ backgroundImage: `url(${homeUrl})` }}
					/>
				</div>
			</main>

			<section className='directory-container'>
				{categories.map((category) => (
					<CategoryItem key={category.id} category={category} />
				))}
			</section>
		</>
	);
};
export default Directory;
