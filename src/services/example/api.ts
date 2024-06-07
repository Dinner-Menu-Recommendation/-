import apiInstance from "../../apiInstance/apiInstance";

const exampleAPI = {
  example: async () => {
    const res = await apiInstance.get("/recipes/complexSearch");

    return res.data;
  },
};

export default exampleAPI;
