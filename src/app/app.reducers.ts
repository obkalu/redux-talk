import { combineReducers } from 'redux';

import { mockPosts } from './timeline/mock-posts';
import {
  POST_ADD,
  POST_TOGGLE_LIKE,
  POST_TOGGLE_REPOST,
  NEW_POST_IDS_RESET,
} from './app.action-types';

const LAST_TWO_POST_IDS = mockPosts.slice(0, 2).map(post => post.id);
function newPostIds(state: string[] = LAST_TWO_POST_IDS, action) {
  if (action.type === POST_ADD) {
    return [action.value.id, ...state];
  }
  if (action.type === NEW_POST_IDS_RESET) {
    return [];
  }
  return state;
}

function posts(state: IPost[] = mockPosts, action) {
  switch (action.type) {
    case POST_ADD:
      return [action.value, ...state];
    case POST_TOGGLE_LIKE:
      return state.map(post => {
        if (post.id === action.value.id) {
          return Object.assign({}, action.value, { liked: !action.value.liked });
        }
        return post;
      });
    case POST_TOGGLE_REPOST:
      return state.map(post => {
        if (post.id === action.value.id) {
          return Object.assign({}, action.value, { reposted: !action.value.reposted });
        }
        return post;
      });
    default:
      return state;
  }
}

const USER_INITIAL_STATE = {
  name: 'Jesse Pinho',
  handle: 'jessepinho',
  headerPhotoURL: 'https://pbs.twimg.com/profile_banners/16901789/1398787929/1500x500',
  profilePhotoURL: 'https://pbs.twimg.com/profile_images/378800000310650745/5e38031f42fdbacc2c2041f021460f02.jpeg',
};
function user(state = USER_INITIAL_STATE, action) {
  return state;
}

export const rootReducer = combineReducers({
  newPostIds,
  posts,
  user,
});
