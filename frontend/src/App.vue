<template>
    <div class="site-shell">
        <Header></Header>
        <main>
            <section class="hero">
                <img class="hero-image" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90" alt="Современная архитектура коммерческого здания" />
                <div class="hero-overlay"></div>
                <div class="container hero-content">
                    <div class="eyebrow hero-eyebrow">
                        СТРОИТЕЛЬСТВО · ПРОЕКТИРОВАНИЕ · РЕАЛИЗАЦИЯ
                    </div>
                    <h1>
                        Создаём<br/>
                        пространство<br/>
                        <span>для будущего.</span>
                    </h1>
                    <p class="hero-description">
                        Комплексный подход к строительству объектов -
                        от первоначальной идеи до её воплощения.
                    </p>
                    <div class="hero-actions">
                        <a class="button button-light" href="#projects">Наши проекты <span>↗</span></a>
                        <a class="text-link hero-link" href="#about">Узнать о компании <span>↓</span></a>
                    </div>
                    <div class="hero-bottom">
                        <span>01 / 04</span>
                        <span>Надёжность в каждом решении</span>
                        <span>КАЗАНЬ · Татарстан</span>
                    </div>
                </div>
            </section>
            <section id="about" class="intro section">
                <div class="container">
                    <div class="section-heading">
                        <span class="section-index">01 - О КОМПАНИИ</span>
                        <span class="section-note">Профессиональный подход к каждому объекту</span>
                    </div>
                    <div class="intro-grid">
                        <h2>
                            Строим не просто здания.
                            <span>Создаём основу для развития.</span>
                        </h2>
                        <div class="intro-copy">
                            <p>
                                Мы объединяем инженерный подход, современные технологии
                                и внимание к деталям, чтобы создавать функциональные
                                и долговечные объекты.
                            </p>
                            <p>
                                Каждый проект требует точности, ответственности
                                и согласованной работы на всех этапах реализации.
                            </p>
                            <a class="underlined-link" href="#contacts">Подробнее о компании <span>↗</span></a>
                        </div>
                    </div>
                    <div class="stats">
                        <div class="stat">
                            <strong>01</strong>
                            <span>Единый подход к реализации</span>
                        </div>
                        <div class="stat">
                            <strong>360°</strong>
                            <span>Внимание ко всему проекту</span>
                        </div>
                        <div class="stat">
                            <strong>BY</strong>
                            <span>Работаем в Татарстане</span>
                        </div>
                        <div class="stat stat-note">
                            <span>Качество начинается</span>
                            <span>с продуманных решений.</span>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" class="services section">
                <div class="container">
                    <div class="section-heading">
                        <span class="section-index">02 - НАПРАВЛЕНИЯ</span>
                        <a class="underlined-link" href="#contacts">Все услуги <span>↗</span></a>
                    </div>
                    <div class="section-title-row">
                        <h2>Что мы делаем</h2>
                        <p>От отдельных строительных задач до комплексной реализации объектов.</p>
                    </div>
                    <div class="service-list">
                        <a v-for="service in services" :key="service.number" class="service-item" href="#contacts">
                            <span class="service-number">{{ service.number }}</span>
                            <div class="service-main">
                                <h3>{{ service.title }}</h3>
                                <p>{{ service.description }}</p>
                            </div>
                            <span class="service-arrow">↗</span>
                        </a>
                    </div>
                </div>
            </section>
            <section id="projects" class="projects section">
                <div class="container">
                    <div class="section-heading">
                        <span class="section-index">03 - ПОРТФОЛИО</span>
                        <span class="section-note">Примеры направлений работ</span>
                    </div>
                    <div class="section-title-row">
                        <h2>В фокусе - результат</h2>
                        <p>Каждый объект - это сочетание инженерных решений, функциональности и архитектуры.</p>
                    </div>
                    <div class="project-grid">
                        <a v-for="(project,index) in projects":key="project.title" class="project-card" href="#contacts">
                            <div class="project-image-wrap">
                                <img :src="project.image" :alt="project.title" loading="lazy" />
                                <span class="project-number">0{{ index + 1 }}</span>
                                <span class="project-open">↗</span>
                            </div>
                            <div class="project-info">
                                <div>
                                    <span class="project-category">{{ project.category }}</span>
                                    <h3>{{ project.title }}</h3>
                                </div>
                                <span class="project-location">{{ project.location }}</span>
                            </div>
                        </a>
                    </div>
                    <p class="portfolio-disclaimer">
                        Визуальные примеры для концепции сайта. Не являются подтверждёнными объектами компании.
                    </p>
                </div>
            </section>
            <section class="contact-banner">
                <div class="container contact-banner-inner">
                    <div>
                        <span class="section-index">04 - СОТРУДНИЧЕСТВО</span>
                        <h2>
                            Есть задача?<br />
                            <span>Давайте обсудим.</span>
                        </h2>
                        <p>Расскажите о проекте - обсудим возможные решения и дальнейшие шаги.</p>
                    </div>
                    <a class="button button-dark" href="#contacts">Связаться с нами <span>↗</span></a>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const menuOpen=ref(false)
const scrollToTop=()=>{
    window.scrollTo({top:0,behavior:'smooth'})
}

const services=[
    {
        number:'01',
        title:'Промышленное строительство',
        description:'Строительство производственных зданий и промышленных объектов.',
    },
    {
        number:'02',
        title:'Коммерческая недвижимость',
        description:'Возведение зданий для бизнеса, торговли и инфраструктуры.',
    },
    {
        number:'03',
        title:'Общестроительные работы',
        description:'Комплексная реализация строительных и монтажных работ.',
    },
    {
        number:'04',
        title:'Реконструкция объектов',
        description:'Модернизация и обновление существующих зданий и сооружений.',
    }
]   
const projects=[
    {
        title:'Промышленный комплекс',
        category:'Промышленное строительство',
        location:'Республика Татарстан',
        image:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    },
    {
        title:'Современный деловой центр',
        category:'Коммерческая недвижимость',
        location:'Казань',
        image:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
    },
    {
        title:'Объект городской инфраструктуры',
        category:'Общестроительные работы',
        location:'Республика Татарстан',
        image:'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85',
    }
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
:root{
    font-family:'Manrope',Arial,sans-serif;
    font-size:18px;
    color:#252724;
    background:#f7f7f4;
    font-synthesis:none;
    text-rendering:optimizeLegibility;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    --paper:#f7f7f4;
    --white:#fff;
    --ink:#252724;
    --muted:#777a73;
    --line:#dedfd9;
    --dark:#292c28;
    --container:1240px;
}
*{
    box-sizing:border-box;
}
html{
    scroll-behavior:smooth;
    scroll-padding-top:90px;
}
body{
    margin:0;
    min-width:320px;
}
body,
button,
a{
    font-family:'Manrope',Arial,sans-serif;
}
a{
    color:inherit;
    text-decoration:none;
}
button{
    color:inherit;
}
img{
    display:block;
    max-width:100%;
}
button,
a{
    -webkit-tap-highlight-color:transparent;
}
button:focus-visible,
a:focus-visible{
    outline:2px solid #797d72;
    outline-offset:4px;
}
.container{
    width:min(var(--container),calc(100% - 80px));
    margin-inline:auto;
}
.site-shell{
    overflow:clip;
}
.topbar{
    background:var(--dark);
    color:#e6e7e1;
    font-size:12.5px;
    letter-spacing:0.07em;
}
.topbar-inner,
.topbar-right{
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.topbar-inner{
    min-height:36px;
    gap:20px;
}
.topbar-right{
    gap:28px;
}
.topbar a{
    color:#fff;
}
.header{
    position:relative;
    z-index:10;
    background:var(--paper);
    border-bottom:1px solid var(--line);
}
.header-inner{
    min-height:86px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:30px;
}
.brand{
    display:inline-flex;
    align-items:center;
    gap:11px;
    flex-shrink:0;
}
.brand-mark{
    width:33px;
    height:33px;
    display:flex;
    align-items:flex-end;
    gap:3px;
    padding:4px;
    border:1px solid #8b8e85;
}
.brand-mark span{
    display:block;
    flex:1;
    background:var(--ink);
}
.brand-mark span:nth-child(1){
    height:45%;
}
.brand-mark span:nth-child(2){
    height:75%;
}
.brand-mark span:nth-child(3){
    height:100%;
}
.brand-copy{
    display:flex;
    flex-direction:column;
    gap:4px;
}
.brand-copy strong{
    font-size:20px;
    line-height:1;
    letter-spacing:0.045em;
    font-weight:800;
}
.brand-copy small{
    font-size:10px;
    letter-spacing:0.13em;
    color:var(--muted);
}
.desktop-nav{
    display:flex;
    align-items:center;
    gap:clamp(18px,2.5vw,38px);
}
.desktop-nav a,
.phone{
    font-size:15px;
    font-weight:600;
    transition:color 0.2s ease;
}
.desktop-nav a:hover,
.phone:hover{
    color:#898d82;
}
.header-contact{
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    gap:7px;
}
.header-cta{
    font-size:12.5px;
    color:var(--muted);
}
.header-cta span{
    margin-left:5px;
}
.menu-toggle,
.mobile-nav{
    display:none;
}
.hero{
    position:relative;
    min-height:590px;
    height:min(690px,74vw);
    max-height:760px;
    display:flex;
    align-items:stretch;
    background:#42453f;
    color:#fff;
}
.hero-image,
.hero-overlay{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
}
.hero-image{
    object-fit:cover;
    object-position:center 48%;
}
.hero-overlay{
    background:linear-gradient(90deg,rgba(22,24,22,0.83) 0%,rgba(22,24,22,0.54) 47%,rgba(22,24,22,0.12) 100%),linear-gradient(0deg,rgba(22,24,22,0.38),transparent 35%);
}
.hero-content{
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding-top:clamp(72px,9vw,128px);
    padding-bottom:32px;
}
.eyebrow,
.section-index{
    font-size:12.5px;
    letter-spacing:0.13em;
    font-weight:700;
}
.hero-eyebrow{
    display:flex;
    align-items:center;
    gap:12px;
    color:#d5d7ce;
}
.eyebrow-line{
    width:27px;
    height:1px;
    background:#d5d7ce;
}
.hero h1{
    margin:34px 0 22px;
    max-width:760px;
    font-size:clamp(53.76px,8.12vw,96.32px);
    line-height:0.99;
    letter-spacing:-0.065em;
    font-weight:500;
}
.hero h1 span{
    color:#d1d2c9;
}
.hero-description{
    max-width:430px;
    margin:0;
    color:#e1e2dc;
    font-size:17.5px;
    line-height:1.9;
}
.hero-actions{
    display:flex;
    align-items:center;
    gap:28px;
    margin-top:34px;
}
.button{
    min-height:49px;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    gap:30px;
    padding:0 20px;
    font-size:13.75px;
    font-weight:700;
    transition:background 0.2s ease,color 0.2s ease,border-color 0.2s ease;
}
.button span{
    font-size:20px;
}
.button-light{
    background:var(--paper);
    color:var(--ink);
}
.button-light:hover{
    background:#dedfd9;
}
.text-link{
    display:inline-flex;
    align-items:center;
    gap:12px;
    font-size:13.75px;
    font-weight:600;
}
.hero-link{
    color:#fff;
}
.hero-bottom{
    width:100%;
    display:flex;
    justify-content:space-between;
    gap:20px;
    margin-top:auto;
    padding-top:60px;
    color:#dedfd9;
    font-size:11.25px;
    letter-spacing:0.1em;
}
.section{
    padding-block:100px;
}
.section-heading{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:20px;
    padding-bottom:19px;
    border-bottom:1px solid var(--line);
}
.section-index{
    color:#6c7067;
}
.section-note{
    color:var(--muted);
    font-size:12.5px;
}
.section-title-row{
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    gap:40px;
    margin:42px 0 45px;
}
.section-title-row h2{
    margin:0;
    font-size:clamp(38.08px,5.38vw,60.48px);
    font-weight:500;
    letter-spacing:-0.055em;
    line-height:1.12;
}
.section-title-row>p{
    max-width:340px;
    margin:0 0 5px;
    color:var(--muted);
    font-size:15px;
    line-height:1.9;
}
.intro{
    background:var(--paper);
}
.intro-grid{
    display:grid;
    grid-template-columns:1.25fr 0.75fr;
    gap:100px;
    padding:56px 0 72px;
}
.intro-grid h2{
    max-width:650px;
    margin:0;
    font-size:clamp(38.08px,5.38vw,60.48px);
    line-height:1.17;
    letter-spacing:-0.055em;
    font-weight:500;
}
.intro-grid h2 span{
    display:block;
    color:#92958c;
}
.intro-copy{
    padding-top:5px;
}
.intro-copy p{
    margin:0 0 17px;
    color:#696c65;
    font-size:15px;
    line-height:2;
}
.underlined-link{
    display:inline-flex;
    align-items:center;
    gap:22px;
    padding-bottom:8px;
    border-bottom:1px solid #999c92;
    font-size:13.75px;
    font-weight:700;
}
.intro-copy .underlined-link{
    margin-top:12px;
}
.stats{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    border-top:1px solid var(--line);
    border-bottom:1px solid var(--line);
}
.stat{
    min-height:125px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:12px;
    padding:20px 24px;
    border-right:1px solid var(--line);
}
.stat:first-child{
    padding-left:0;
}
.stat:last-child{
    border-right:0;
}
.stat strong{
    font-size:34.72px;
    font-weight:500;
    letter-spacing:-0.05em;
}
.stat>span{
    color:var(--muted);
    font-size:12.5px;
    line-height:1.7;
}
.stat-note{
    justify-content:center;
    gap:3px;
}
.services{
    background:#efefeb;
}
.service-list{
    border-top:1px solid #d5d6d0;
}
.service-item{
    display:grid;
    grid-template-columns:70px minmax(0,1fr) 30px;
    align-items:center;
    gap:24px;
    padding:26px 12px 26px 0;
    border-bottom:1px solid #d5d6d0;
    transition:padding 0.8s ease;
}
.service-item:hover{
    padding-left:10px;
    padding-right:2px;
}
.service-number{
    align-self:start;
    padding-top:6px;
    color:#85887f;
    font-size:13.75px;
}
.service-main h3{
    margin:0 0 8px;
    font-size:clamp(21.25px,2.62vw,28.75px);
    font-weight:500;
    letter-spacing:-0.035em;
}
.service-main p{
    margin:0;
    color:var(--muted);
    font-size:13.75px;
    line-height:1.8;
}
.service-arrow{
    justify-self:end;
    font-size:23.75px;
    transition:transform 0.2s ease;
}
.service-item:hover .service-arrow{
    transform:translate(3px,-3px);
}
.projects{
    background:var(--paper);
}
.project-grid{
    display:grid;
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:42px 24px;
}
.project-card:first-child{
    grid-column:span 2;
}
.project-image-wrap{
    position:relative;
    height:300px;
    overflow:hidden;
    background:#dedfd9;
}
.project-card:first-child .project-image-wrap{
    height:clamp(300px,44vw,520px);
}
.project-image-wrap img{
    width:100%;
    height:100%;
    object-fit:cover;
    filter:saturate(0.65);
}
.project-number,
.project-open{
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(247,247,244,0.94);
    color:var(--ink);
}
.project-number{
    top:15px;
    left:15px;
    min-width:35px;
    height:30px;
    font-size:12.5px;
}
.project-open{
    right:15px;
    bottom:15px;
    width:37px;
    height:37px;
    font-size:21.25px;
}
.project-info{
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    gap:20px;
    padding-top:18px;
}
.project-category{
    color:var(--muted);
    font-size:12.5px;
}
.project-info h3{
    margin:8px 0 0;
    font-size:22.5px;
    font-weight:500;
    letter-spacing:-0.035em;
}
.project-location{
    flex-shrink:0;
    color:var(--muted);
    font-size:12.5px;
}
.portfolio-disclaimer{
    margin:32px 0 0;
    color:var(--muted);
    font-size:12.5px;
    line-height:1.8;
}
.contact-banner{
    background:#e9eae4;
    padding:76px 0;
}
.contact-banner-inner{
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    gap:40px;
}
.contact-banner h2{
    margin:28px 0 18px;
    font-size:clamp(44.8px,6.25vw,71.68px);
    line-height:1.05;
    letter-spacing:-0.06em;
    font-weight:500;
}
.contact-banner h2 span{
    color:#898d82;
}
.contact-banner p{
    max-width:380px;
    margin:0;
    color:#696c65;
    font-size:15px;
    line-height:1.9;
}
.button-dark{
    flex-shrink:0;
    background:var(--dark);
    color:#fff;
}
.button-dark:hover{
    background:#484b44;
}
.footer{
    background:#292c28;
    color:#f1f1ed;
    padding-top:64px;
}
.footer-main{
    display:grid;
    grid-template-columns:1.5fr 0.8fr 1fr 1fr;
    gap:45px;
    padding-bottom:58px;
}
.footer .brand-mark{
    border-color:#81857b;
}
.footer .brand-mark span{
    background:#f1f1ed;
}
.footer .brand-copy small{
    color:#a3a69d;
}
.footer-brand>p,
.footer-contact p{
    color:#b2b4ad;
    font-size:13.75px;
    line-height:1.9;
}
.footer-brand>p{
    margin-top:24px;
}
.footer-column{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:15px;
}
.footer-heading{
    margin-bottom:5px;
    color:#a3a69d;
    font-size:11.25px;
    letter-spacing:0.12em;
}
.footer-column>a,
.footer-column>span:not(.footer-heading){
    font-size:13.75px;
    color:#e2e3dd;
}
.footer-column>a:hover{
    color:#aeb1a6;
}
.footer-contact p{
    margin:0 0 4px;
}
.footer-contact .underlined-link{
    border-color:#777b70;
}
.footer-bottom{
    min-height:57px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:20px;
    border-top:1px solid #454841;
    color:#a3a69d;
    font-size:11.25px;
}
.footer-bottom a{
    color:#e2e3dd;
}
@media (max-width:1000px){
    .container{
    width:calc(100% - 48px);
    }
    .header-inner{
    gap:18px;
    }
    .desktop-nav{
    gap:17px;
    }
    .desktop-nav a,
    .phone{
    font-size:13.75px;
    }
    .header-cta{
    font-size:11.25px;
    }
    .intro-grid{
    gap:55px;
    }
    .stat{
    padding-inline:16px;
    }
    .footer-main{
    grid-template-columns:1.3fr 0.8fr 1fr;
    gap:38px 25px;
    }
    .footer-contact{
    grid-column:2 / 4;
    }
}
@media (max-width:760px){
    .container{
    width:calc(100% - 40px);
    }
    .topbar-inner{
    min-height:33px;
    }
    .topbar-inner>span{
    max-width:60%;
    }
    .topbar-right{
    gap:0;
    }
    .topbar-right>span{
    display:none;
    }
    .topbar,
    .topbar a{
    font-size:11.25px;
    }
    .header-inner{
    min-height:74px;
    }
    .brand-copy strong{
    font-size:17.5px;
    }
    .brand-copy small{
    font-size:8.75px;
    }
    .desktop-nav,
    .header-contact{
    display:none;
    }
    .menu-toggle{
    width:42px;
    height:42px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:6px;
    border:1px solid var(--line);
    background:transparent;
    cursor:pointer;
    }
    .menu-toggle span{
    width:17px;
    height:1px;
    background:var(--ink);
    }
    .mobile-nav{
    display:flex;
    flex-direction:column;
    gap:0;
    padding:4px 20px 18px;
    border-top:1px solid var(--line);
    }
    .mobile-nav a{
    padding:13px 0;
    border-bottom:1px solid var(--line);
    font-size:16.25px;
    }
    .hero{
    min-height:590px;
    height:78svh;
    max-height:740px;
    }
    .hero-image{
    object-position:57% center;
    }
    .hero-overlay{
    background:linear-gradient(90deg,rgba(22,24,22,0.8),rgba(22,24,22,0.35)),linear-gradient(0deg,rgba(22,24,22,0.48),transparent 45%);
    }
    .hero-content{
    padding-top:88px;
    }
    .hero-eyebrow{
    font-size:10px;
    line-height:1.8;
    letter-spacing:0.09em;
    }
    .hero h1{
    margin-top:31px;
    font-size:clamp(52.64px,12.75vw,80.64px);
    }
    .hero-description{
    max-width:360px;
    font-size:15px;
    }
    .hero-bottom{
    font-size:10px;
    padding-top:35px;
    }
    .hero-bottom span:nth-child(2){
    display:none;
    }
    .section{
    padding-block:72px;
    }
    .section-heading{
    align-items:flex-start;
    }
    .section-index,
    .section-note{
    font-size:11.25px;
    }
    .intro-grid{
    grid-template-columns:1fr;
    gap:26px;
    padding:38px 0 48px;
    }
    .intro-grid h2{
    max-width:580px;
    font-size:clamp(38.08px,9.75vw,54.88px);
    }
    .intro-copy{
    max-width:500px;
    }
    .stats{
    grid-template-columns:repeat(2,minmax(0,1fr));
    }
    .stat{
    min-height:108px;
    padding:18px 14px;
    border-bottom:1px solid var(--line);
    }
    .stat:first-child{
    padding-left:0;
    }
    .stat:nth-child(2){
    border-right:0;
    }
    .stat:nth-child(3),
    .stat:nth-child(4){
    border-bottom:0;
    }
    .stat strong{
    font-size:33.75px;
    }
    .section-title-row{
    flex-direction:column;
    align-items:flex-start;
    gap:16px;
    margin:32px 0;
    }
    .section-title-row h2{
    font-size:clamp(38.08px,10vw,53.76px);
    }
    .section-title-row>p{
    max-width:410px;
    }
    .service-item{
    grid-template-columns:35px minmax(0,1fr) 20px;
    gap:12px;
    padding-block:23px;
    }
    .service-main h3{
    font-size:21.25px;
    line-height:1.5;
    }
    .service-main p{
    font-size:12.5px;
    }
    .project-grid{
    grid-template-columns:1fr;
    gap:34px;
    }
    .project-card:first-child{
    grid-column:auto;
    }
    .project-image-wrap,
    .project-card:first-child .project-image-wrap{
    height:clamp(230px,60vw,380px);
    }
    .project-info{
    align-items:flex-start;
    flex-direction:column;
    gap:10px;
    }
    .project-info h3{
    font-size:21.25px;
    }
    .contact-banner{
    padding-block:64px;
    }
    .contact-banner-inner{
    align-items:flex-start;
    flex-direction:column;
    gap:30px;
    }
    .contact-banner h2{
    font-size:clamp(47.04px,11.25vw,64.96px);
    }
    .footer{
    padding-top:48px;
    }
    .footer-main{
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:36px 22px;
    padding-bottom:42px;
    }
    .footer-brand{
    grid-column:1 / -1;
    }
    .footer-contact{
    grid-column:auto;
    }
    .footer-bottom{
    flex-wrap:wrap;
    padding-block:17px;
    font-size:10px;
    }
}
@media (max-width:420px){
    .container{
    width:calc(100% - 32px);
    }
    .topbar-inner>span{
    max-width:58%;
    font-size:10px;
    }
    .brand{
    gap:8px;
    }
    .brand-mark{
    width:29px;
    height:29px;
    }
    .brand-copy strong{
    font-size:15px;
    }
    .brand-copy small{
    font-size:7.5px;
    }
    .hero{
    min-height:560px;
    }
    .hero-content{
    padding-top:78px;
    }
    .hero h1{
    font-size:51.52px;
    }
    .hero-actions{
    align-items:flex-start;
    flex-direction:column;
    gap:21px;
    }
    .hero-bottom{
    font-size:8.75px;
    }
    .section-heading{
    gap:12px;
    }
    .section-note{
    max-width:145px;
    text-align:right;
    line-height:1.6;
    }
    .stat{
    padding-inline:10px;
    }
    .footer-main{
    gap:32px 14px;
    }
    .footer-column>a,
    .footer-column>span:not(.footer-heading),
    .footer-contact p{
    font-size:12.5px;
    line-height:1.8;
    }
}
@media (prefers-reduced-motion:reduce){
    *,
    *::before,
    *::after{
    scroll-behavior:auto !important;
    transition-duration:0.01ms !important;
    animation-duration:0.01ms !important;
    }
}
.topbar{
    font-size:15px;
    letter-spacing:0.04em;
}
.topbar-inner{
    min-height:40px;
}
.desktop-nav a,
.phone{
    font-size:17.5px;
}
.header-cta{
    font-size:15px;
}
.hero-eyebrow,
.section-index{
    font-size:15px;
}
.hero-description{
    font-size:21.25px;
    line-height:1.8;
}
.button{
    min-height:54px;
    padding-inline:24px;
    font-size:16.25px;
}
.text-link,
.underlined-link{
    font-size:16.25px;
}
.hero-bottom{
    font-size:13.75px;
}
.section-note{
    font-size:15px;
}
.section-title-row>p,
.intro-copy p,
.contact-banner p{
    font-size:18.75px;
    line-height:1.85;
}
.stat>span{
    font-size:16.25px;
}
.service-number{
    font-size:16.25px;
}
.service-main p{
    font-size:17.5px;
}
.project-category,
.project-location,
.portfolio-disclaimer{
    font-size:15px;
}
.project-info h3{
    font-size:26.25px;
}
.footer-brand>p,
.footer-contact p{
    font-size:17.5px;
}
.footer-heading{
    font-size:13.75px;
}
.footer-column>a,
.footer-column>span:not(.footer-heading){
    font-size:16.25px;
}
.footer-bottom{
    font-size:13.75px;
}
.hero{
    background:#252b2c;
}
.hero-image{
    filter:saturate(0.82) brightness(0.78) contrast(1.08);
    object-position:center 52%;
}
.hero-overlay{
    background:
    linear-gradient(90deg,rgba(13,20,22,0.88) 0%,rgba(19,27,29,0.62) 48%,rgba(19,27,29,0.20) 100%),
    linear-gradient(0deg,rgba(13,20,22,0.52),transparent 48%);
}
@media (max-width:1000px){
    .desktop-nav a,
    .phone{
    font-size:16.25px;
    }
    .header-cta{
    font-size:13.75px;
    }
    .intro-copy p,
    .section-title-row>p,
    .contact-banner p{
    font-size:17.5px;
    }
}
@media (max-width:760px){
    .topbar,
    .topbar a{
    font-size:13.75px;
    }
    .hero-eyebrow{
    font-size:12.5px;
    }
    .hero-description{
    font-size:18.75px;
    }
    .hero-bottom{
    font-size:12.5px;
    }
    .section-index,
    .section-note{
    font-size:13.75px;
    }
    .intro-copy p,
    .section-title-row>p,
    .contact-banner p{
    font-size:17.5px;
    }
    .stat>span{
    font-size:15px;
    }
    .service-number{
    font-size:15px;
    }
    .service-main h3{
    font-size:23.75px;
    }
    .service-main p{
    font-size:16.25px;
    }
    .project-category,
    .project-location,
    .portfolio-disclaimer{
    font-size:15px;
    }
    .footer-brand>p,
    .footer-contact p,
    .footer-column>a,
    .footer-column>span:not(.footer-heading){
    font-size:16.25px;
    }
    .footer-heading{
    font-size:13.75px;
    }
    .footer-bottom{
    font-size:12.5px;
    }
}
html{
    font-size:22.5px;
}
body{
    font-size:22.5px;
}
:where(p,a,span,small,button,label,li){
    font-size:1.35em;
}
:where(h1,h2,h3,h4){
    letter-spacing:-0.035em;
}
.topbar{
    min-height:34px;
    padding:5px 0px 5px 0px;
    font-size:15px;
    letter-spacing:0.025em;
    background:#171d1f;
}
.topbar-inner{
    min-height:34px;
}
.header{
    background:#252c2e;
    color:#f7f7f4;
    border-bottom:1px solid rgba(255,255,255,.12);
    box-shadow:0 8px 24px rgba(0,0,0,.13);
}
.header-inner{
    min-height:104px;
    gap:28px;
    padding-block:12px;
}
.header .desktop-nav a,
.header .phone{
    color:#f4f5f1;
    font-size:18.75px;
    font-weight:600;
}
.header .desktop-nav a:hover,
.header .phone:hover{
    color:#ed3434;
}
.header .header-cta{
    color:#d7d9d3;
    font-size:16.25px;
}
.header .header-cta span{
    color:#ed3434;
}
.header .brand-mark{
    border-color:rgba(255,255,255,.55);
}
.header .brand-mark span{
    background:#f4f5f1;
}
.header .brand-copy strong{
    color:#fff;
    font-size:23.75px;
}
.header .brand-copy small{
    color:#c1c5bf;
    font-size:12.5px;
}
.menu-toggle{
    border-color:rgba(255,255,255,.35);
}
.menu-toggle span{
    background:#fff;
}
.mobile-nav{
    background:#252c2e;
    color:#fff;
    border-top-color:rgba(255,255,255,.14);
}
.mobile-nav a{
    border-bottom-color:rgba(255,255,255,.14);
    font-size:18.75px;
}
.hero{
    min-height:560px;
}
.hero-image{
    filter:saturate(.78) brightness(.68) contrast(1.12);
}
.hero-overlay{
    background:linear-gradient(90deg,rgba(10,16,18,.9) 0%,rgba(15,22,24,.68) 52%,rgba(15,22,24,.22) 100%),
    linear-gradient(0deg,rgba(10,16,18,.5),transparent 55%);
}
.hero-description{
    font-size:21.25px;
    line-height:1.75;
}
.hero-eyebrow,
.section-index{
    font-size:15px;
}
.button{
    font-size:17.5px;
    min-height:54px;
}
.text-link,
.underlined-link{
    font-size:17.5px;
}
.section-note,
.section-title-row>p,
.intro-copy p,
.contact-banner p,
.service-main p{
    font-size:18.75px;
}
.stat>span,
.service-number,
.project-category,
.project-location,
.portfolio-disclaimer{
    font-size:16.25px;
}
.project-info h3{
    font-size:27.5px;
}
.footer-brand>p,
.footer-contact p,
.footer-column>a,
.footer-column>span:not(.footer-heading){
    font-size:17.5px;
}
.footer-heading{
    font-size:15px;
}
.footer-bottom{
    font-size:15px;
}
.section{
    padding-block:76px;
}
.section-title-row{
    margin:30px 0 32px;
}
.intro-grid{
    gap:64px;
    padding:38px 0 48px;
}
.stats .stat{
    min-height:108px;
}
.service-item{
    padding-block:20px;
}
.project-grid{
    gap:30px 22px;
}
.contact-banner{
    padding-block:58px;
}
.footer{
    padding-top:48px;
}
.footer-main{
    padding-bottom:42px;
    gap:32px;
}
@media (max-width:1000px){
    .header-inner{
    min-height:88px;
    }
    .header .desktop-nav a,
    .header .phone{
    font-size:17.5px;
    }
    .section{
    padding-block:64px;
    }
}
@media (max-width:760px){
    .header-inner{
    min-height:76px;
    }
    .header .brand-copy strong{
    font-size:20px;
    }
    .header .brand-copy small{
    font-size:10px;
    }
    .hero-description{
    font-size:18.75px;
    }
    .section{
    padding-block:54px;
    }
    .intro-grid{
    gap:22px;
    padding:30px 0 36px;
    }
    .section-title-row{
    margin:26px 0;
    }
    .service-main p{
    font-size:16.25px;
    }
    .contact-banner{
    padding-block:48px;
    }
    .footer-main{
    gap:28px 18px;
    padding-bottom:34px;
    }
}
@media (max-width:420px){
    .topbar{
    font-size:12.5px;
    }
    .header-inner{
    min-height:70px;
    }
    .hero-description{
    font-size:17.5px;
    }
    .footer-column>a,
    .footer-column>span:not(.footer-heading),
    .footer-contact p{
    font-size:15px;
    }
}
body,
button,
a{
    font-size:16px;
}
.topbar{
    font-size:13px;
}
.header .desktop-nav a,
.header .phone{
    font-size:17px;
}
.header .header-cta{
    font-size:15px;
}
.header .brand-copy strong{
    font-size:22px;
}
.header .brand-copy small{
    font-size:12px;
}
.hero-description{
    font-size:19px;
}
.hero-eyebrow,
.section-index,
.section-note{
    font-size:14px;
}
.button,
.text-link,
.underlined-link{
    font-size:16px;
}
.intro-copy p,
.section-title-row>p,
.contact-banner p,
.service-main p{
    font-size:17px;
}
.stat>span,
.service-number,
.project-category,
.project-location,
.portfolio-disclaimer{
    font-size:15px;
}
.project-info h3{
    font-size:24px;
}
.footer-brand>p,
.footer-contact p,
.footer-column>a,
.footer-column>span:not(.footer-heading){
    font-size:16px;
}
.footer-heading,
.footer-bottom{
    font-size:14px;
}
@media (max-width:760px){
    body,
    button,
    a{
    font-size:15px;
    }
    .topbar{
    font-size:12px;
    }
    .header .brand-copy strong{
    font-size:19px;
    }
    .header .brand-copy small{
    font-size:10px;
    }
    .hero-description{
    font-size:17px;
    }
    .hero-eyebrow,
    .section-index,
    .section-note{
    font-size:12px;
    }
    .intro-copy p,
    .section-title-row>p,
    .contact-banner p,
    .service-main p{
    font-size:15px;
    }
    .stat>span,
    .service-number,
    .project-category,
    .project-location,
    .portfolio-disclaimer{
    font-size:13px;
    }
    .footer-brand>p,
    .footer-contact p,
    .footer-column>a,
    .footer-column>span:not(.footer-heading){
    font-size:14px;
    }
}
:root{
    font-size:16px;
}
::selection{
    background:rgba(237,52,52,.38);
    color:#fff;
}
.brand-logo{
    display:flex;
    align-items:center;
}
.brand-logo img{
    width:250px;
    max-height:114px;
    object-fit:contain;
}
.hero{
    min-height:620px;
}
.hero-content{
    padding-top:clamp(70px,7vw,96px);
    padding-bottom:30px;
}
.hero h1{
    max-width:720px;
    margin:26px 0 20px;
    font-size:clamp(48px,5.5vw,74px);
    line-height:1.06;
    letter-spacing:-.055em;
}
.hero-description{
    max-width:520px;
    font-size:18px;
    line-height:1.7;
}
.hero-eyebrow,
.section-index{
    font-size:13px;
}
.hero-bottom{
    font-size:12px;
    padding-top:42px;
}
.section{
    padding-block:68px;
}
.section-title-row h2,
.intro-grid h2{
    font-size:clamp(34px,3.8vw,48px);
    line-height:1.15;
}
.section-title-row{
    margin:28px 0 30px;
}
.intro-grid{
    gap:56px;
    padding:34px 0 42px;
}
.intro-copy p,
.section-title-row>p,
.contact-banner p{
    font-size:16px;
    line-height:1.75;
}
.stat>span,
.service-number,
.project-category,
.project-location,
.portfolio-disclaimer{
    font-size:14px;
}
.service-main p{
    font-size:15px;
}
.project-info h3{
    font-size:23px;
}
.footer-brand>p,
.footer-contact p,
.footer-column>a,
.footer-column>span:not(.footer-heading){
    font-size:15px;
}
.footer-heading,
.footer-bottom{
    font-size:13px;
}
@media (max-width:1000px){
    .brand-logo img{
    width:180px;
    }
    .hero h1{
    font-size:clamp(46px,6vw,66px);
    }
    .intro-grid{
    gap:34px;
    }
}
@media (max-width:760px){
    .brand-logo img{
    width:160px;
    max-height:52px;
    }
    .hero{
    min-height:600px;
    height:auto;
    }
    .hero-content{
    padding-top:76px;
    padding-bottom:24px;
    }
    .hero h1{
    font-size:clamp(42px,9vw,60px);
    line-height:1.08;
    margin:28px 0 18px;
    }
    .hero-description{
    font-size:16px;
    line-height:1.7;
    }
    .hero-eyebrow,
    .section-index,
    .section-note{
    font-size:12px;
    }
    .hero-bottom{
    font-size:11px;
    padding-top:34px;
    }
    .section{
    padding-block:50px;
    }
    .section-title-row h2,
    .intro-grid h2{
    font-size:clamp(32px,7.5vw,44px);
    }
    .intro-grid{
    gap:22px;
    padding:28px 0 34px;
    }
    .intro-copy p,
    .section-title-row>p,
    .contact-banner p{
    font-size:15px;
    }
    .service-main p{
    font-size:14px;
    }
    .project-info h3{
    font-size:20px;
    }
    .footer-brand>p,
    .footer-contact p,
    .footer-column>a,
    .footer-column>span:not(.footer-heading){
    font-size:14px;
    }
}
@media (max-width:420px){
    .brand-logo img{
    width:140px;
    }
    .hero h1{
    font-size:40px;
    }
    .hero-description{
    font-size:15px;
    }
}
.service-item{
	transition:padding 0.4s ease !important;
}
</style>