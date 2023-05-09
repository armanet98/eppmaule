import { API_URL} from "../utils/constants";


export async function getCategoriesApi(){
    try {
        const  response = await fetch(`${API_URL}/api/categorias`);
        const  result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}