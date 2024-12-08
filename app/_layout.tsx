import { Stack } from 'expo-router';

export default function Layout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: 'Home' }} />
			<Stack.Screen
				name="shopList"
				options={{ title: 'Nova Lista de Compras' }}
			/>
			<Stack.Screen
				name="shopRegister"
				options={{ title: 'Histórico de Compras' }}
			/>
		</Stack>
	);
}
