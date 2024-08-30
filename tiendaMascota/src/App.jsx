import { useState } from 'react';
import  {Header } from './Componentes/Header';
import { ProductList } from './Componentes/Tienda/listaProductos';
import Carousellayout from './Componentes/Carousel/Carousel';
import Nosotros from './Componentes/Nosotros';
import Presentacion from './Componentes/Store/Presentacion';


function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
		<>
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
      <Carousellayout/>
	  <Nosotros/>
	  <Presentacion/>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
		</>
	);
}

export default App;