import Vue from "vue"
import VueRouter from "vue-router";
import SellerPage from "../views/SellerPage"

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/sellerpage",
            component:SellerPage
        }
    ]
})