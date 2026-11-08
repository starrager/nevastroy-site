<template>
    <div class="inner-page">
        <Header/>
        <main>
            <section class="inner-hero">
                <div class="container">
                    <span class="page-kicker">04 / НАПРАВЛЕНИЯ</span>
                    <h1>Услуги<span>.</span></h1>
                    <p>Комплексные строительные и инженерные работы - от подготовки территории до сдачи готового объекта.</p>
                    <div class="page-breadcrumb">Главная / Услуги</div>
                </div>
            </section>
            <section class="inner-section">
                <div class="container">
                    <div class="page-heading">
                        <span>ЧТО МЫ ДЕЛАЕМ</span>
                        <span>{{ services.length }} НАПРАВЛЕНИЙ</span>
                    </div>
                    <div class="service-list">
                        <article v-for="(service,index) in services" :key="service.title" class="service-card">
                            <span class="service-number">0{{ index+1 }}</span>
                            <div class="service-content">
                                <h2>{{ service.title }}</h2>
                                <p>{{ service.description }}</p>
                            </div>
                            <span class="service-arrow">↗</span>
                        </article>
                    </div>
                </div>
            </section>
            <section class="inner-cta">
                <div class="container inner-cta-row">
                    <div>
                        <span>ЕСТЬ ЗАДАЧА ДЛЯ НАШЕЙ КОМАНДЫ?</span>
                        <h2>Обсудим ваш проект<span>.</span></h2>
                    </div>
                    <router-link to="/contacts"><a class="inner-button">Связаться <span>↗</span></a></router-link>
                </div>
            </section>
        </main>
        <Footer/>
    </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const services=[
    {title:'Генеральный подряд и строительство под ключ',description:'Организация и управление строительством на всех этапах. Координация специалистов, контроль сроков и качества выполнения работ.'},
    {title:'Монтаж металлических конструкций',description:'Монтаж металлокаркасов зданий и сооружений, установка несущих конструкций и элементов строительных систем.'},
    {title:'Электромонтажные и сантехнические работы',description:'Монтаж внутренних инженерных систем, прокладка коммуникаций и подключение необходимого оборудования.'},
    {title:'Горизонтально-направленное бурение',description:'Бестраншейная прокладка подземных коммуникаций с применением специализированных буровых установок.'},
    {title:'Земляные работы',description:'Разработка и подготовка участков, устройство котлованов, траншей и оснований под строительство.'},
    {title:'Демонтажные работы',description:'Безопасный демонтаж строительных конструкций и подготовка площадок к дальнейшим работам.'},
    {title:'Благоустройство и озеленение',description:'Комплексное благоустройство территорий, устройство площадок, дорожек и озеленение.'},
    {title:'Асфальтобетонные покрытия',description:'Подготовка оснований и устройство асфальтобетонных покрытий для дорог, проездов и площадок.'},
    {title:'Тепловые сети и наружные коммуникации',description:'Строительство и монтаж тепловых сетей, водопровода, канализации и ливневых систем.'}
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
.service-list{
    margin-top:25px;
    border-top:1px solid #dedfd9;
}
.service-card{
    display:grid;
    grid-template-columns:65px minmax(0,1fr) 45px;
    gap:25px;
    align-items:start;
    padding:29px 8px;
    border-bottom:1px solid #dedfd9;
    transition:background .3s;
}
.service-card:hover{
    background:#efefeb;
}
.service-number{
    font-size:14px;
    color:#d92f2f;
    padding-top:7px;
}
.service-content h2{
    margin:0 0 10px;
    font-size:25px;
    font-weight:500;
    letter-spacing:-.04em;
}
.service-content p{
    max-width:760px;
    margin:0;
    color:#777a73;
    font-size:15px;
    line-height:1.8;
}
.service-arrow{
    justify-self:end;
    color:#d92f2f;
    font-size:24px;
    transition:transform .25s;
}
.service-card:hover .service-arrow{
    transform:translate(4px,-4px);
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
    .service-card{
        grid-template-columns:35px minmax(0,1fr) 25px;
        gap:12px;
        padding:23px 4px;
    }
    .service-content h2{
        font-size:21px;
    }
    .service-content p{
        font-size:14px;
    }
    .inner-cta{
        padding:45px 0;
    }
    .inner-cta-row{
        align-items:flex-start;
        flex-direction:column;
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