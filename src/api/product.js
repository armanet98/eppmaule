import {API_URL} from "../utils/constants";


export async function getProducts(limit = 1000){
    try {
        const response = await fetch(
            `${API_URL}/api/productos?sort=createdAt:ASC&pagination[limit]=${limit}&populate=image,image2,categoria`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getPoductsCategory(category){
    try {
        const response = await fetch(
            `${API_URL}/api/productos?_sort=created_at:desc&populate=image,image2,categoria,descripcion&filters[categoria][slug][$eq]=${category}`
        );
        const result = await response.json();
        return result
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getProductsSinLimit(){
    try {
        const response = await fetch(
            `${API_URL}/api/productos?_sort=created_at:desc&populate=image,image2,categoria,descripcion`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getPoductsxNom(nombre_product){
    try {
        const response = await fetch(
            `${API_URL}/api/productos?_sort=created_at:desc&populate=image,categoria&_q=${nombre_product}`
        );
        const result = await response.json();
        return result
    } catch (error) {
        console.log(error);
        return null;
    }

   
}


export async function getTodos(){
    try {
        const response = await fetch(
            `${API_URL}/api/productos?_pageSize=9999&sort=name:DESC&populate=image,categoria`
        );
        const result = await response.json();
        return result
    } catch (error) {
        console.log(error);
        return null;
    }

   
}
