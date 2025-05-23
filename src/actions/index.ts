
import { setUserAddress } from './address/set-user-address';
import { deleteUserAddress} from './address/delete-user-address';
import { getUserAddress } from './address/get-user-address';


import { placeOrder } from './order/place-order';
import {getOrderById} from './order/get-order-by-id';
import { getPaginatedOrders } from './order/get-paginated-orders';
import { getOrdersByUser } from './order/get-orders-by-user'


import { logout } from './auth/logout';
import { login } from './auth/login';
import { registerUser } from './auth/register';

import { getCategories } from './category/get-categories';

import { getCountries } from './country/get-countries';

import { getPaginatedProductsWithImages } from './product/product-pagination';
import { getProductBySlug } from './product/get-product-by-slug';
import { getStockBySlug } from './product/get-stock-by-slug';
import { createUpdateProduct } from './product/create-update-product';
import { deleteProductImage } from './product/delete-product-image';


import { changeUserRole } from './user/change-user-role';
import { getPaginatedUsers } from './user/get-paginated-users';

export { getPaginatedProductsWithImages, getProductBySlug, getStockBySlug, login, logout, registerUser, getCountries, setUserAddress, deleteUserAddress, getUserAddress, placeOrder, getOrderById, getOrdersByUser, getPaginatedOrders, getPaginatedUsers, changeUserRole, getCategories, createUpdateProduct, deleteProductImage}








//export * from './auth/login';
//export * from './auth/logout';
//export * from './auth/register';