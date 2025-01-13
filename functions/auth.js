import axios from "axios"
import * as Keychain from "react-native-keychain"

const baseURL = "http://192.168.18.222:3000/"

const saveToken = async (token)=>{
    await Keychain.setGenericPassword("token", token)
}

const SignIntoAccount = async (email, password)=>{
    console.log(email)
    try{
        const response = await axios.post(`${baseURL}auth/signin`, {email,password});
        console.log(response.data)
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    saveToken,
    SignIntoAccount
}