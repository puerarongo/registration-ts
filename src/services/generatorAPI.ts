import axios from "axios";

const BASE_URL: string = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data";
const ACCESS_TOKEN: string = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

const fetchGenerator = async () => {
    const response = await axios.get(`${BASE_URL}?access_token=${ACCESS_TOKEN}`);
    return response;
};

export default fetchGenerator;