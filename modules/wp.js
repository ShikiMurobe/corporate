import axios from "axios"
import axiosJsonpAdapter from 'axios-jsonp'

class WPModule{
  static async getProfile(){
    const baseURL = "https://www.skbfantasy.link/wp-json/api/v1/"
    const url = baseURL + "getProfile"
    const option = {
      'Content-Type': "application/json;charset=utf-8",
      'Access-Control-Allow-Origin': "*"
    }
    const result = await axios.get(url, option)
    
    return result.data.posts
  }
  static async getSkills(){
    const baseURL = "https://www.skbfantasy.link/wp-json/api/v1/"
    const url =  baseURL + "getSkills"
    const option = {
      'Content-Type': "application/json;charset=utf-8",
      'Access-Control-Allow-Origin': "*"
    }
    const result = await axios.get(url, option)
    return result.data.posts
  }
  static async getServices(){
    const baseURL = "https://www.skbfantasy.link/wp-json/api/v1/"
    const url =  baseURL + "getServices"
    const option = {
      'Content-Type': "application/json;charset=utf-8",
      'Access-Control-Allow-Origin': "*"
    }
    const result = await axios.get(url, option)
    return result.data.posts
  }
  static async getWorks(){
    const baseURL = "https://www.skbfantasy.link/wp-json/api/v1/"
    const url =  baseURL + "getWorks"
    const option = {
      'Content-Type': "application/json;charset=utf-8",
      'Access-Control-Allow-Origin': "*"
    }
    const result = await axios.get(url, option)
    console.log(result)
    return result.data.posts
  }
}

export default WPModule