import { FlatList, StyleSheet, Text, View } from 'react-native';

const dataTest = [
	{
		id: '1',
		title: 'First Item',
		price: 100,
	},
	{
		id: '2',
		title: 'Second Item',
		price: 200,
	},
	{
		id: '3',
		title: 'Third Item',
		price: 300,
	},
	{
		id: '44',
		title: 'Four Item',
		price: 400,
	},
	{
		id: '5',
		title: 'Five Item',
		price: 300,
	},
];

type ItemProps = { title: string; price: number };

const Item = ({ title, price }: ItemProps) => (
	<View style={styles.itemContainer}>
		<Text style={styles.item}>{title}</Text>
		<Text style={styles.item}>{price}</Text>
	</View>
);

export default function ShopList() {
	return (
		<>
			<View style={styles.headerList}>
				<Text>NOME DA LISTA DE COMPRAS</Text>
			</View>
			<View style={styles.bodyList}>
				<FlatList
					data={dataTest}
					renderItem={({ item }) => (
						<Item title={item.title} price={item.price} />
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	headerList: {
		height: '8%',
		backgroundColor: '#ccc',
		justifyContent: 'center',
		alignItems: 'center',
	},
	bodyList: {
		flex: 1,
		backgroundColor: '#eaeaea',
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemContainer: {
		backgroundColor: '#f9c2ff',
		marginVertical: 4,
		minWidth: '90%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	item: {
		fontSize: 16,
	},
});
