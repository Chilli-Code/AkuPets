
import { Path, Svg } from 'react-native-svg';
export default function IconProgress({ color = '#000', size = 25 }) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={size} height="25" viewBox="0 0 25 25" fill="none">
            <Path d="M22.4821 13C22.4723 18.5228 17.9872 22.992 12.4643 22.9821C6.94149 22.9723 2.47233 18.4872 2.48217 12.9643C2.49202 7.4415 6.97715 2.97234 12.5 2.98218C18.0228 2.99203 22.492 7.47715 22.4821 13Z" stroke="#000" strokeOpacity="0.3" strokeWidth="4" />
            <Path d="M12.4643 22.9821C17.9872 22.992 22.4723 18.5228 22.4822 13C22.492 7.47715 18.0228 2.99202 12.5 2.98218" stroke="#3669E8" strokeWidth="4" />
        </Svg>
    );
};