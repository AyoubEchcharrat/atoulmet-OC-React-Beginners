import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

	function addToCart(name, price) {
		const items = Object.keys(cart)
		if (items.includes(name)) {
			updateCart({ ...cart, [name]: { amount: cart[name].amount + 1, price } })
		} else {
			updateCart({ ...cart, [name]: { amount: 1, price } })
		}
	}

	return (
		<div>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, category, price }) => {
					return !activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								key={id}
								cover={cover}
								name={name}
								water={water}
								light={light}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				})}
			</ul>
		</div>
	)
}

export default ShoppingList
