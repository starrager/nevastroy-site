<template>
    <div class="inner-page">
        <Header/>
        <main>
            <section class="inner-section">
                <div class="container">
                    <div class="page-heading">
                        <span class="price">ПАРК ТЕХНИКИ</span>
                        <span class="price">{{ equipment.length }} ЕДИНИЦ</span>
                    </div>
                    <div class="equipment-grid">
                        <article v-for="(item,id) in equipment" :key="id" class="equipment-card">
                            <div class="equipment-preview">
                                <img :src="getImageUrl(id+1)" alt="Загрузка изображения">
                            </div>
                            <div class="equipment-info">
                                <h2>{{ item.name }}</h2>
                                <p><span class="price">ЦЕНА ПО ЗАПРОСУ</span></p>
                            </div>
                        </article>
                    </div>
                    <p class="objects-note">Состав и доступность техники уточняются при согласовании проекта.</p>
                </div>
            </section>
        </main>
        <Footer/>
    </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const getImageUrl=(number:number)=>{                         
    return new URL(`../images/technic/photo${number}.jpg`,import.meta.url).href
}

const equipment=[
    {name:'ЭКСКAВАТОР-ПОГРУЗЧИК CASE 695'},
    {name:'ЭКСКAВАТОР-ПОГРУЗЧИК JCB 4 CX'},
    {name:'ЭКСКAВАТОР-ПОГРУЗЧИК CAT 428'},
    {name:'ФРОНТАЛЬНЫЙ ПОГРУЗЧИК SHANTUI SL30'},
    {name:'МИНИ-ПОГРУЗЧИК BOBCAT 190'},
    {name:'ГУСЕНИЧНЫЙ ЭКСКAВАТОР HITACHI ZX200-5G'},
    {name:'САМОСВАЛ МАН TGA 390'},
    {name:'ЭКСКАВАТОР КОЛЕСНЫЙ CAT 318'},
    {name:'КАТОК ГРУНТОВЫЙ CAT CS68B 16ТОНН'},
    {name:'БУЛЬДОЗЕР CAT D5K'},
    {name:'ЭКСКАВАТОР HYUNDAI 250'},
    {name:'ЭКСКАВАТОР ГУСЕНИЧНЫЙ HITACHI 200'},
    {name:'Фронтальный погрузчик LiuGong 835H'},
    {name:'Бульдозер LIEBHERR PR 734 LGP'},
    {name:'Погрузчик фронтальный SDLG'},
    {name:'Эксковатор SUNWARD 265F'},
]
</script>

<style scoped>
.price{
    color:rgb(199, 9, 9);
}
.inner-page{
    background:#f7f7f4;
    color:#252724;
    min-height:100vh;
}
.inner-hero{
    background:#252c2e;
    color:#fff;
    padding:88px 0 36px;
}
.page-kicker{
    font-size:13px;
    letter-spacing:.14em;
    color:#c5c8c0;
    font-weight:700;
}
.inner-hero h1{
    margin:34px 0 18px;
    font-size:clamp(48px,6vw,76px);
    font-weight:500;
    letter-spacing:-.06em;
    line-height:1.05;
}
.inner-hero h1 span,
.inner-cta h2 span{
    color:#ed3434;
}
.inner-hero p{
    max-width:570px;
    color:#d1d3cd;
    font-size:18px;
    line-height:1.8;
}
.page-breadcrumb{
    margin-top:65px;
    padding-top:18px;
    border-top:1px solid rgba(255,255,255,.2);
    font-size:13px;
    color:#b8bbb3;
}
.inner-section{
    padding:65px 0 80px;
}
.page-heading{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:20px;
    padding-bottom:20px;
    border-bottom:1px solid #dedfd9;
    color:#74776e;
    font-size:12px;
    font-weight:700;
    letter-spacing:.12em;
}
.equipment-grid{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:24px;
    margin-top:35px;
}
.equipment-card{
    display:flex;
    flex-direction:column;
    background:#f3f4f6;
    border:1px solid #dedfd9;
    height:100%;
    overflow:hidden;
}
.equipment-preview img{
    height:100%;
    width:100%;
    object-fit:cover;
    display:block;
}
.equipment-info{
    margin-left:20px;
    display:flex;
    flex-direction:column;
    flex-grow:1;
}
.equipment-info h2{
    margin:0; 
    font-size:18px;
    font-weight:500;
    line-height:1.3;
}
.equipment-info p{
    margin:0;
    margin-top:auto;
    font-size:12px;
}
.equipment-symbol{
    font-size:100px;
    font-weight:500;
    letter-spacing:-.08em;
    color:#d0d2ca;
}
.equipment-index{
    position:absolute;
    top:15px;
    left:16px;
    font-size:12px;
    color:#777a73;
}
.equipment-category{
    position:absolute;
    right:14px;
    bottom:14px;
    color:#777a73;
    font-size:10px;
    letter-spacing:.1em;
    text-transform:uppercase;
}
.equipment-info{
    padding:17px 2px;
}
.equipment-info>span{
    font-size:11px;
    color:#777a73;
    letter-spacing:.1em;
}
.equipment-info h2{
    margin:9px 0;
    font-size:20px;
    font-weight:500;
    line-height:1.4;
    letter-spacing:-.025em;
}
.equipment-info p{
    margin:0;
    color:#777a73;
    font-size:14px;
    line-height:1.7;
}
.objects-note{
    margin-top:28px;
    color:#85887f;
    font-size:13px;
    line-height:1.7;
}
.inner-cta{
    padding:65px 0;
    background:#e9eae4;
}
.inner-cta-row{
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    gap:30px;
}
.inner-cta-row>div>span{
    font-size:12px;
    font-weight:700;
    letter-spacing:.13em;
    color:#777a73;
}
.inner-cta h2{
    margin:22px 0 0;
    font-size:clamp(38px,5vw,60px);
    font-weight:500;
    letter-spacing:-.055em;
}
.inner-button{
    min-height:54px;
    padding:0 24px;
    display:inline-flex;
    align-items:center;
    gap:30px;
    background:#292c28;
    color:#fff;
    font-size:15px;
    font-weight:700;
    text-decoration:none;
    transition:background .2s;
}
.inner-button span{
    color:#ed3434;
    font-size:20px;
}
.inner-button:hover{
    background:#444740;
}
@media(max-width:1000px){
    .equipment-grid{
        grid-template-columns:repeat(2,minmax(0,1fr));
    }
}
@media(max-width:760px){
    .inner-hero{
        padding-top:65px;
    }
    .inner-hero h1{
        font-size:48px;
    }
    .inner-hero p{
        font-size:16px;
    }
    .inner-section{
        padding:48px 0 55px;
    }
    .equipment-grid{
        gap:15px;
    }
    .equipment-preview{
        height:190px;
    }
    .equipment-info h2{
        font-size:17px;
    }
    .inner-cta{
        padding:45px 0;
    }
    .inner-cta-row{
        align-items:flex-start;
        flex-direction:column;
    }
}
@media(max-width:480px){
    .equipment-grid{
        grid-template-columns:1fr;
    }
    .equipment-preview{
        height:240px;
    }
}
@media(max-width:420px){
    .inner-hero h1{
        font-size:41px;
    }
    .inner-hero p{
        font-size:15px;
    }
    .page-heading{
        font-size:10px;
    }
}
</style>