const BASE_URL = process.env.VUE_APP_BASE_URL;

export const api = {
  //POST
  async post(url, data) {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Unknown error");
    }
    return result;
  },

//GET
  async get(url, data) {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Unknown error");
    }
    return result;
  },
  // Add other methods like GET, PUT, DELETE as needed
};