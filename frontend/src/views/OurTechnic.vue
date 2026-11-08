<template>
    <div class="inner-page">
        <Header/>
        <main>
            <section class="inner-hero">
                <div class="container">
                    <span class="page-kicker">05 / ТЕХНИЧЕСКАЯ БАЗА</span>
                    <h1>Наша техника<span>.</span></h1>
                    <p>Собственный парк строительной и специальной техники для выполнения работ различной сложности.</p>
                    <div class="page-breadcrumb">Главная / Наша техника</div>
                </div>
            </section>
            <section class="inner-section">
                <div class="container">
                    <div class="page-heading">
                        <span>ПАРК ТЕХНИКИ</span>
                        <span>{{ equipment.length }} ЕДИНИЦ</span>
                    </div>
                    <div class="equipment-grid">
                        <article v-for="(item,index) in equipment" :key="item.name" class="equipment-card">
                            <div class="equipment-preview">
                                <span class="equipment-index">0{{ index+1 }}</span>
                                <div class="equipment-symbol">{{ item.symbol }}</div>
                                <span class="equipment-category">{{ item.category }}</span>
                            </div>
                            <div class="equipment-info">
                                <span>СПЕЦТЕХНИКА</span>
                                <h2>{{ item.name }}</h2>
                                <p>{{ item.description }}</p>
                            </div>
                        </article>
                    </div>
                    <p class="objects-note">Состав и доступность техники уточняются при согласовании проекта.</p>
                </div>
            </section>
            <section class="inner-cta">
                <div class="container inner-cta-row">
                    <div>
                        <span>НУЖНА ТЕХНИКА НА ОБЪЕКТ?</span>
                        <h2>Обсудим условия<span>.</span></h2>
                    </div>
                    <a href="/#contacts" class="inner-button">Оставить заявку <span>↗</span></a>
                </div>
            </section>
        </main>
        <Footer/>
    </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const equipment=[
    {name:'Экскаватор-погрузчик CASE 695',category:'Экскаватор-погрузчик',symbol:'Э',description:'Земляные, погрузочные и планировочные работы.'},
    {name:'Экскаватор-погрузчик JCB 4 CX',category:'Экскаватор-погрузчик',symbol:'Э',description:'Разработка грунта и работа на строительных площадках.'},
    {name:'Экскаватор-погрузчик CAT 428',category:'Экскаватор-погрузчик',symbol:'Э',description:'Погрузка материалов и выполнение земляных работ.'},
    {name:'Фронтальный погрузчик SHANTUI SL30',category:'Погрузчик',symbol:'П',description:'Перемещение сыпучих материалов и погрузка.'},
    {name:'Мини-погрузчик BOBCAT 190',category:'Мини-погрузчик',symbol:'М',description:'Работы на ограниченных площадках и в стеснённых условиях.'},
    {name:'Гусеничный экскаватор HITACHI ZX200-5G',category:'Экскаватор',symbol:'Э',description:'Разработка котлованов, траншей и перемещение грунта.'},
    {name:'Самосвал MAN TGA 390',category:'Самосвал',symbol:'С',description:'Перевозка грунта, строительных материалов и отходов.'},
    {name:'Колёсный экскаватор CAT 318',category:'Экскаватор',symbol:'Э',description:'Земляные и погрузочные работы на строительных объектах.'},
    {name:'Грунтовый каток CAT CS68B',category:'Дорожная техника',symbol:'К',description:'Уплотнение грунта при подготовке оснований.'},
    {name:'Бульдозер CAT D5K',category:'Бульдозер',symbol:'Б',description:'Планировка площадок и перемещение грунта.'},
    {name:'Экскаватор HYUNDAI 250',category:'Экскаватор',symbol:'Э',description:'Выполнение масштабных земляных работ.'},
    {name:'Гусеничный экскаватор HITACHI 200',category:'Экскаватор',symbol:'Э',description:'Разработка грунта и подготовка строительных площадок.'}
]
</script>

<style scoped>
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
    min-width:0;
}
.equipment-preview{
    height:230px;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#e9eae4;
    border:1px solid #dedfd9;
    overflow:hidden;
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