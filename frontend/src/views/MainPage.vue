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
                            <router-link to="/aboutus"><a class="underlined-link">Подробнее о компании <span>↗</span></a></router-link>
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
                            <strong>RT</strong>
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
                        <a v-for="(project,index) in projects" :key="project.title" class="project-card" href="#contacts">
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
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

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
    font-size:16px;
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
.hero{
    position:relative;
    min-height:620px;
    display:flex;
    align-items:stretch;
    background:#252b2c;
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
    object-position:center 52%;
    filter:saturate(0.82) brightness(0.78) contrast(1.08);
}
.hero-overlay{
    background:linear-gradient(90deg,rgba(13,20,22,0.88) 0%,rgba(19,27,29,0.62) 48%,rgba(19,27,29,0.20) 100%),linear-gradient(0deg,rgba(13,20,22,0.52),transparent 48%);
}
.hero-content{
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding-top:clamp(70px,7vw,96px);
    padding-bottom:30px;
}
.eyebrow,
.section-index{
    font-size:13px;
    letter-spacing:0.13em;
    font-weight:700;
}
.hero-eyebrow{
    display:flex;
    align-items:center;
    gap:12px;
    color:#d5d7ce;
}
.hero h1{
    margin:26px 0 20px;
    max-width:720px;
    font-size:clamp(48px,5.5vw,74px);
    line-height:1.06;
    letter-spacing:-.055em;
    font-weight:500;
}
.hero h1 span{
    color:#d1d2c9;
}
.hero-description{
    max-width:520px;
    margin:0;
    color:#e1e2dc;
    font-size:18px;
    line-height:1.7;
}
.hero-actions{
    display:flex;
    align-items:center;
    gap:28px;
    margin-top:34px;
}
.button{
    min-height:54px;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    gap:30px;
    padding:0 24px;
    font-size:16px;
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
    font-size:16px;
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
    padding-top:42px;
    color:#dedfd9;
    font-size:12px;
    letter-spacing:0.1em;
}
.section{
    padding-block:68px;
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
    font-size:14px;
}
.section-title-row{
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    gap:40px;
    margin:28px 0 30px;
}
.section-title-row h2{
    margin:0;
    font-size:clamp(34px,3.8vw,48px);
    font-weight:500;
    letter-spacing:-0.055em;
    line-height:1.15;
}
.section-title-row>p{
    max-width:340px;
    margin:0 0 5px;
    color:var(--muted);
    font-size:16px;
    line-height:1.75;
}
.intro{
    background:var(--paper);
}
.intro-grid{
    display:grid;
    grid-template-columns:1.25fr 0.75fr;
    gap:56px;
    padding:34px 0 42px;
}
.intro-grid h2{
    max-width:650px;
    margin:0;
    font-size:clamp(34px,3.8vw,48px);
    line-height:1.15;
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
    font-size:16px;
    line-height:1.75;
}
.underlined-link{
    display:inline-flex;
    align-items:center;
    gap:22px;
    padding-bottom:8px;
    border-bottom:1px solid #999c92;
    font-size:16px;
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
    min-height:108px;
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
    font-size:34px;
    font-weight:500;
    letter-spacing:-0.05em;
}
.stat>span{
    color:var(--muted);
    font-size:14px;
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
    padding:20px 12px 20px 0;
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
    font-size:14px;
}
.service-main h3{
    margin:0 0 8px;
    font-size:clamp(21px,2.62vw,28px);
    font-weight:500;
    letter-spacing:-0.035em;
}
.service-main p{
    margin:0;
    color:var(--muted);
    font-size:15px;
    line-height:1.8;
}
.service-arrow{
    justify-self:end;
    font-size:23px;
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
    gap:30px 22px;
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
    font-size:21px;
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
    font-size:14px;
}
.project-info h3{
    margin:8px 0 0;
    font-size:23px;
    font-weight:500;
    letter-spacing:-0.035em;
}
.project-location{
    flex-shrink:0;
    color:var(--muted);
    font-size:14px;
}
.portfolio-disclaimer{
    margin:32px 0 0;
    color:var(--muted);
    font-size:14px;
    line-height:1.8;
}
.contact-banner{
    background:#e9eae4;
    padding:58px 0;
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
    font-size:16px;
    line-height:1.75;
}
.button-dark{
    flex-shrink:0;
    background:var(--dark);
    color:#fff;
}
.button-dark:hover{
    background:#484b44;
}

@media (max-width:1000px){
    .container{
        width:calc(100% - 48px);
    }
    .intro-grid{
        gap:34px;
    }
    .section{
        padding-block:64px;
    }
}

@media (max-width:760px){
    .container{
        width:calc(100% - 40px);
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
    .hero-bottom span:nth-child(2){
        display:none;
    }
    .section{
        padding-block:50px;
    }
    .section-heading{
        align-items:flex-start;
    }
    .intro-grid{
        grid-template-columns:1fr;
        gap:22px;
        padding:28px 0 34px;
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
    .section-title-row{
        flex-direction:column;
        align-items:flex-start;
        gap:16px;
        margin:26px 0;
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
        font-size:14px;
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
    .contact-banner{
        padding-block:48px;
    }
    .contact-banner-inner{
        align-items:flex-start;
        flex-direction:column;
        gap:30px;
    }
}

@media (max-width:420px){
    .container{
        width:calc(100% - 32px);
    }
    .hero h1{
        font-size:40px;
    }
    .hero-description{
        font-size:15px;
    }
    .hero-actions{
        align-items:flex-start;
        flex-direction:column;
        gap:21px;
    }
    .hero-bottom{
        font-size:8.75px;
    }
    .section-note{
        max-width:145px;
        text-align:right;
        line-height:1.6;
    }
}
</style>