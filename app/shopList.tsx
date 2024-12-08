import { useLocalSearchParams } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const dataTest = [
	{ id: '1', title: 'First Item', price: 100 },
	{ id: '2', title: 'Second Item', price: 200 },
	{ id: '3', title: 'Third Item', price: 300 },
	{ id: '44', title: 'Four Item', price: 400 },
	{ id: '5', title: 'Five Item', price: 300 },
];

type ItemProps = { title: string; price: number };

const Item = ({ title, price }: ItemProps) => (
	<View style={styles.itemContainer}>
		<Text style={styles.item}>{title}</Text>
		<Text style={styles.item}>{price}</Text>
	</View>
);

export default function ShopList() {
	const { listName } = useLocalSearchParams();

	return (
		<View style={styles.container}>
			<View style={styles.headerList}>
				<Text style={styles.headerText}>{listName || 'Lista de Compras'}</Text>
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
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerList: {
		height: '10%',
		backgroundColor: '#4caf50',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
	headerText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff',
	},
	bodyList: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		width: '100%',
		paddingHorizontal: 20,
		justifyContent: 'flex-start',
	},
	itemContainer: {
		backgroundColor: '#8fbc8f',
		marginVertical: 8,
		paddingVertical: 10,
		width: '100%',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	item: {
		fontSize: 14,
		color: '#333',
	},
});
