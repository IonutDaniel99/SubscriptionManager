import { getDefaultConfig } from '@react-native/metro-config';
import { withNativeWind } from 'nativewind/metro';
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = getDefaultConfig(__dirname);

export default withNativeWind(config, { input: './styles/globals.css' });
