import { PlatformOSType } from 'react-native-web';
import { Fonts } from '../types';
export default function configureFonts(config?: {
    [platform in PlatformOSType | 'default']?: Fonts;
}): Fonts;
