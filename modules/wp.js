import axios from "axios"

class WPModule{
  static async getProfile(){
    const baseURL = "https://www.skbfantasy.link/wp-json/api/v1/"
    const url = baseURL + "getProfile"
    const option = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }
    const result = await axios.get(url, option)
    
    return result.data.posts
  }
  static async getSkills(){
    const baseURL = "https://www.skbfantasy.link/wp-json/api/v1/"
    const url =  baseURL + "getSkills"
    const option = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }
    const result = await axios.get(url, option)
    return result.data.posts
  }
  static async getServices(){
    const baseURL = "https://www.skbfantasy.link/wp-json/api/v1/"
    const url =  baseURL + "getServices"
    const option = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }
    const result = await axios.get(url, option)
    return result.data.posts
  }
}

export default WPModule