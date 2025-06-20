import { del, get, patch, post } from "../utils/request";

export const getProductList = async () => {
    
    const result = await get("products");
    return result;
}

export const createProduct = async (options) => {
    const result = await post("products",options);
    return result;
}

export const deleteProduct = async (id) => {
    const result = await del(`products/${id}`);
    return result;
}

export const editProduct = async (id, options) => {
    const result = await patch(`products/${id}`,options);
    return result;
}

export const getCategory = async () => {
  const result = await get("products/categories");
  return result;
};
