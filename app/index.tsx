import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
	Modal,
	StyleSheet,
	Text,
	TextInput,
	TouchableNativeFeedback,
	View,
} from 'react-native';

export default function App() {
	const [modalVisible, setModalVisible] = useState(false);
	const [listName, setListName] = useState('');
	const router = useRouter();

	const handleConfirm = () => {
		setModalVisible(false);
		if (listName.trim()) {
			router.push(`/shopList?listName=${encodeURIComponent(listName)}`);
		}
	};

	return (
		<View style={styles.container}>
			<TouchableNativeFeedback
				onPress={() => setModalVisible(true)}
				background={TouchableNativeFeedback.Ripple('#ccc', false)}
			>
				<View style={styles.button}>
					<Text style={styles.buttonText}>Criar Nova Lista</Text>
				</View>
			</TouchableNativeFeedback>

			<TouchableNativeFeedback
				background={TouchableNativeFeedback.Ripple('#ccc', false)}
			>
				<View style={styles.button}>
					<Text style={styles.buttonText}>Histórico de Compras</Text>
				</View>
			</TouchableNativeFeedback>

			<Modal
				visible={modalVisible}
				animationType="fade"
				transparent
				onRequestClose={() => setModalVisible(false)}
			>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<Text>Digite o nome da lista:</Text>
						<TextInput
							style={styles.input}
							placeholder="Nome da lista"
							value={listName}
							onChangeText={setListName}
						/>
						<View style={styles.buttonContainer}>
							<TouchableNativeFeedback
								onPress={() => setModalVisible(false)}
								background={TouchableNativeFeedback.Ripple('#ccc', false)}
							>
								<View style={styles.cancelButton}>
									<Text style={styles.textButton}>Cancelar</Text>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback
								onPress={handleConfirm}
								background={TouchableNativeFeedback.Ripple('#ccc', false)}
							>
								<View style={styles.okButton}>
									<Text style={styles.textButton}>OK</Text>
								</View>
							</TouchableNativeFeedback>
						</View>
					</View>
				</View>
			</Modal>
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
	button: {
		backgroundColor: '#4CAF50',
		padding: 10,
		borderRadius: 35,
		margin: 10,
		minWidth: '50%',
		minHeight: '20%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 10,
		width: '80%',
		alignItems: 'center',
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
		marginVertical: 10,
		width: '100%',
		borderRadius: 5,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		width: '100%',
	},
	cancelButton: {
		backgroundColor: '#f44336',
		padding: 10,
		borderRadius: 5,
		marginRight: 15,
		width: '30%',
	},
	okButton: {
		backgroundColor: '#4CAF50',
		padding: 10,
		borderRadius: 5,
		width: '20%',
	},
	textButton: {
		color: '#fff',
		fontSize: 14,
		textAlign: 'center',
	},
});
