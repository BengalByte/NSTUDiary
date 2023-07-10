import {ColorState} from './slices/ColorSlice'; // Assuming you have imported the ColorState interface from ColorSlice
import {PostsState} from './slices/PostsSlice';
import {ThemeState} from './slices/ThemeSlice';
import {UsersState} from './slices/UsersSlice';

interface RootState {
  color: ColorState;
  theme: ThemeState;
  users: UsersState;
  posts: PostsState;
  // Add other slices' state interfaces here
}

export default RootState;
