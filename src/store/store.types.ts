import {ColorState} from './slices/ColorSlice'; // Assuming you have imported the ColorState interface from ColorSlice
import {ThemeState} from './slices/ThemeSlice';

interface RootState {
  color: ColorState;
  theme: ThemeState;
  // Add other slices' state interfaces here
}

export default RootState;
