import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Link href={'/shopList'}>Criar Nova Lista</Link>
			<Link href={'/shopRegister'}>Histórico de Compras</Link>
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
});
