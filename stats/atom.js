import axios from 'axios';
import {atom, selector} from 'recoil';
import {getToken} from "../functions/auth"


const baseURL = "http://192.168.18.222:3000/"

const MyPostsAtom = selector({
  key: 'MyPostsAtom',
  get : async () => {
    const token = await getToken();
    const response = await axios.get(`${baseURL}posts/yourposts`, {
      headers: { authorization : token},
    });
    if (response.data.status === 'success') {
      console.log(response.data.posts)
      return response.data.posts;
    }
    return []
    throw new Error('No Posts Found');
  }
});

const NameSelector = selector({
  key: 'NameSelector',
  get: async () => {
    const token = await getToken();
    const response = await axios.get(`${baseURL}get/name`, {
      headers: { token },
    });
    if (response.data.status === 'success') {
      return response.data.Name;
    }
    return "hello"
    throw new Error('No Name Found');
  },
});

export const PostsAtom = atom({
  key: 'PostsAtom',
  default: MyPostsAtom,
});

export const NameAtom = atom({
  key: 'NameAtom',
  default: NameSelector,
});
