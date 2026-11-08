import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import AboutCompany from '@/views/AboutCompany.vue'
import ObjectsCompany from '@/views/ObjectsCompany.vue'
import CertificatesCompany from '@/views/CertificatesCompany.vue'
import ServicesCompany from '@/views/ServicesCompany.vue'
import OurTechnic from '@/views/OurTechnic.vue'
import GalleryCompany from '@/views/GalleryCompany.vue'
import ContactsCompany from '@/views/ContactsCompany.vue'

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
        },
        {
            path:'/ourservices',
            component:ServicesCompany
        },  
        {
            path:'/technic',
            component:OurTechnic
        },
        {
            path:'/gallery',
            component:GalleryCompany
        },
        {
            path:'/contacts',
            component:ContactsCompany
        }
    ]
})
export default router