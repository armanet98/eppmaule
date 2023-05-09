import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Category from "../views/Category.vue";
import Cart from "../views/Cart.vue";
import Orders from "../views/Orders";
import Orders_Listos from "../views/Orders_Listos";
import All_Products from "../components/All_Prodcuts.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : "/Login",
    name : "Login",
    component : Login
  },
  {
    path : "/Register",
    name : "Register",
    component : Register
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/Orders",
    name: "Orders",
    component: Orders
  },
  {
    path: "/Orders_Listos",
    name: "Orders_Listos",
    component: Orders_Listos
  },
  {
    path: "/All_Products",
    name: "All_Products",
    component: All_Products
  },
  {
    path: "/:category",       // ruta dinamica
    component: Category,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
