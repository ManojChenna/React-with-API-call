import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID leRo1zV8j_YwCYNCL0u4JGNr-Jd_kkLFmZ2MYdMMvPg"
  }
});
