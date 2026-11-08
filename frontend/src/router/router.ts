import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import AboutCompany from '@/views/AboutCompany.vue'
import ObjectsCompany from '@/views/ObjectsCompany.vue'
import CertificatesCompany from '@/views/CertificatesCompany.vue'

const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            component:MainPage
        },
        {
            path:'/aboutus',
            component:AboutCompany
        },
        {
            path:'/ourobjects',
            component:ObjectsCompany
        },
        {
            path:'/ourcertificates',
            component:CertificatesCompany
        }
    ]
})
export default router