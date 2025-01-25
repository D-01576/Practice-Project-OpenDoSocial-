import axios from "axios";
import { router, useNavigation, useRouter } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import Toast from 'react-native-toast-message';
import { Header } from "react-native/Libraries/NewAppScreen";

const baseURL = "http://192.168.18.222:3000/";

// Save token to Keychain
const saveToken = async (token) => {
    await SecureStore.setItemAsync('token', token);
}

// Get token from Keychain
const getToken = async () => {
    const credentials = await SecureStore.getItemAsync("token");
    return credentials
}

// Sign in user
const SignIntoAccount = async (email, password, setloading, router) => {
    setloading(true);
    try {
        const response = await axios.post(`${baseURL}auth/signin`, { email, password });
        if (response.data.status === "failed") {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: response.data.message,
            });
        } else if (response.data.status === "success") {
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: response.data.message,
            });
            saveToken(response.data.token);
            router.push("/(tabs)/home");
        }
        setloading(false);
    } catch (error) {
        Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Something went wrong. Please try again.',
        });
        setloading(false);
    }
}

// Sign up user
const SignUp = async (email, password,setloading,router) => {
    setloading(true);
    try {
        const response = await axios.post(`${baseURL}auth/signup`, { email, password });
        if (response.data.status === "failed") {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: response.data.message,
            });
        } else if (response.data.status === "success") {
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: response.data.message,
            });
            saveToken(response.data.token);
            router.push("/(tabs)/home");
        }
        setloading(false);
    } catch (error) {
        Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Something went wrong during sign-up. Please try again.',
        });
        setloading(false);
    }
}
const IsLogin = async (router) => {
    const token = await getToken();
    if (token) {
        // const response = await axios.get(`${baseURL}auth/verify`, {Header : { token }});
        const response = await axios.get(`${baseURL}auth/verify`, {
            headers: {
                token: token
            }
        });
        if (response.data.status === "success") {
            router.push("/(tabs)/home");
            return true
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const Upload = async (title, content, setloading, setposts, posts) => {
    setloading(true);
    try {
        const token = await getToken();
        const response = await axios.post(`${baseURL}posts/upload`, { title, content }, {
            headers: {
                authorization: token
            }
        });
        if (response.data.status === "success") {
            setposts([...posts, response.data.newPost]);
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: response.data.message,
            });
        }else{
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: response.data.message,
            });
        }
        setloading(false);
    } catch (error) {
        console.log(error);
        Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Something went wrong during upload. Please try again.',
        });
        setloading(false);
    }
}
module.exports = {
    Upload,
    saveToken,
    SignUp,
    SignIntoAccount,
    getToken,
    IsLogin
};
