import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './componenys/LittleLemonFooter';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <LittleLemonHeader />
      
    </View>
    <View style={{ backgroundColor: '#495E57' }}>
    <LittleLemonFooter />
  </View>
  );
}
