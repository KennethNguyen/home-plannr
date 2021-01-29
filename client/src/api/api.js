import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000", timeout: 60000 });

export const login = (formData) => API.post("/user/login", formData);
export const signup = (formData) => API.post("/user/signup", formData);
