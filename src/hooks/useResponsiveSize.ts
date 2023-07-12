import {useWindowDimensions} from 'react-native';

const useResponsiveSize = () => {
  const {height, width, scale, fontScale} = useWindowDimensions();

  const Rp = (value: number) => {
    return width * (value / 1000);
  };
  const Rh = (value: number) => {
    return height * (value / 1000);
  };
  return {
    Rp,
    Rh,
  };
};

export default useResponsiveSize;
