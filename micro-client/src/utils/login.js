import axios from "axios";

export const login = async ({ email, password, url }) => {
  try {
    const result = await axios.post(
      url ? url : "http://localhost:3000/api/users/login",
      {
        email,
        password,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
