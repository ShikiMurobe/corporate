import axios from "axios"

class WPModule{
  static async getProfile(){
    const url = "http://3.112.34.58/wp-json/api/v1/getProfile"
    const result = await axios.get(url)
    return result.data.posts
  }
  static async getSkills(){
    const url = "http://3.112.34.58/wp-json/api/v1/getSkills"
    const result = await axios.get(url)
    return result.data.posts
  }
  static async getServices(){
    const url = "http://3.112.34.58/wp-json/api/v1/getServices"
    const result = await axios.get(url)
    return result.data.posts
  }
}

export default WPModule