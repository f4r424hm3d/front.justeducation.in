// src/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://justeducation.britannicaoverseas.com/api/",
  headers: {
    "X-API-KEY": "dfhsdfhsd8fysd8fsd8fysdfyysd8fysd8fysd8fysd8dsfsd",
    "Content-Type": "application/json",
  },
});

export default api;