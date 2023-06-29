import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {

  const { backUrl, title, subtitle} = category;

	return (
		<div className='category-container'>
			{" "}
			{/* <img alt="" /> */}
			<div
				className='background-image'
				style={{ backgroundImage: `url(${backUrl})` }}
			/>
			<div className='category-body-container'>
				<h2>{title}</h2>
				<p>{subtitle}</p>
			</div>
		</div>
	);
};

export default CategoryItem;
