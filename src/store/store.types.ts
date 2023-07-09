import {ColorState} from './slices/ColorSlice'; // Assuming you have imported the ColorState interface from ColorSlice

interface RootState {
  color: ColorState;
  // Add other slices' state interfaces here
}

export default RootState;
