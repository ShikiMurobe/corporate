import axios from "axios"

class WPModule{
  static async getProfile(){
    const baseURL = "https://www.skbfantasy.link/wp-json/api/v1/"
    const url = baseURL + "getProfile"
    console.log(url)
    const result = await axios.get(url)
    
    return result.data.posts
  }
  static async getSkills(){
    const baseURL = "https://www.skbfantasy.link/wp-json/api/v1/"
    const url =  baseURL + "getSkills"
    const result = await axios.get(url)
    return result.data.posts
  }
  static async getServices(){
    const baseURL = "https://www.skbfantasy.link/wp-json/api/v1/"
    const url =  baseURL + "getServices"
    const result = await axios.get(url)
    return result.data.posts
  }
}

export default WPModule