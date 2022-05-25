import { useState, useEffect, useMemo } from "react";

function App() {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);

	const datas = useMemo(
		() => [
			{
				id: 1,
				nama: "Ari",
				alamat: "Batam",
			},
			{
				id: 2,
				nama: "Budi",
				alamat: "Jakarta",
			},
			{
				id: 3,
				nama: "Ani",
				alamat: "Semarang",
			},
		],
		[loading]
	);

	const renderData = () => {
		setProducts([
			{
				id: 1,
				nama: "Buku",
				quantity: 15,
			},
		]);
	};

	useEffect(() => renderData, [loading]);

	return (
		<div className="App">
			<button type="button" onClick={() => setLoading(!loading)}>
				Test
			</button>
			<table>
				<tr>
					<td>No</td>
					<td>Nama</td>
					<td>Alamat</td>
				</tr>
				{!loading &&
					datas.map((v) => (
						<tr>
							<td>{v.id}</td>
							<td>{v.nama}</td>
							<td>{v.alamat}</td>
						</tr>
					))}
			</table>

			<table>
				<tr>
					<td>No</td>
					<td>Nama Barang</td>
					<td>Jumlah</td>
				</tr>
				{!loading &&
					products.map((v) => (
						<tr>
							<td>{v.id}</td>
							<td>{v.nama}</td>
							<td>{v.quantity}</td>
						</tr>
					))}
			</table>
		</div>
	);
}

export default App;
