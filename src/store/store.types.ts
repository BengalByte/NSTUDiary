import {ColorState} from './slices/ColorSlice';
import {PostsState} from './slices/PostsSlice';
import {ThemeState} from './slices/ThemeSlice';
import {TokenState} from './slices/TokenSlice';
import {UsersState} from './slices/UsersSlice';

interface RootState {
  color: ColorState;
  theme: ThemeState;
  users: UsersState;
  posts: PostsState;
  token: TokenState;
  // Add other slices' state interfaces here
}

export default RootState;
