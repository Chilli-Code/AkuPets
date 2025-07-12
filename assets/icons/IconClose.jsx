
import { Path, Svg } from 'react-native-svg';
export default function IconClose({ color = '#000', size = 25 }) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={size} height="25" viewBox="0 0 25 24" fill="none">
            <Path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" fill="#FE506F" />
            <Path d="M15.5 9L9.5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M9.5 9L15.5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );

}