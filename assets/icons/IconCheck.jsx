
import { Path, Svg } from 'react-native-svg';
export default function IconCheck({ color = '#000', size = 25 }) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={size} height="25" viewBox="0 0 24 24" fill="none">
            <Path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" fill="#3669E8" />
            <Path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
};