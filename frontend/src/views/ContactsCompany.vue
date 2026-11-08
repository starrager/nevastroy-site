<template>
<div class="inner-page">
    <Header/>
    <main>
        <section class="inner-hero">
            <div class="container">
                <span class="page-kicker">07 / БУДЕМ НА СВЯЗИ</span>
                <h1>Контакты<span>.</span></h1>
                <p>Свяжитесь с нами, чтобы обсудить ваш проект, получить консультацию или задать вопрос.</p>
                <div class="page-breadcrumb">Главная / Контакты</div>
            </div>
        </section>
        <section class="inner-section">
            <div class="container">
                <div class="page-heading">
                    <span>КОНТАКТНАЯ ИНФОРМАЦИЯ</span>
                    <span>НЕВАСТРОЙ</span>
                </div>
                <div class="contacts-layout">
                    <div class="contacts-main">
                        <div class="contact-item">
                            <span>ТЕЛЕФОН</span>
                            <a :href="`tel:${phoneLink}`">{{ phone }}</a>
                        </div>
                        <div class="contact-item">
                            <span>ЭЛЕКТРОННАЯ ПОЧТА</span>
                            <a :href="`mailto:${email}`">{{ email }}</a>
                        </div>
                        <div class="contact-item">
                            <span>АДРЕС</span>
                            <p>{{ address }}</p>
                        </div>
                        <div class="contact-item">
                            <span>РЕЖИМ РАБОТЫ</span>
                            <p>{{ schedule }}</p>
                        </div>
                    </div>
                    <div class="contacts-aside">
                        <span class="contacts-aside-kicker">НЕВАСТРОЙ</span>
                        <h2>Открыты к новым проектам<span>.</span></h2>
                        <p>Оставьте заявку или свяжитесь с нами удобным способом. Обсудим детали и подберём решение под вашу задачу.</p>
                        <a :href="`mailto:${email}`" class="inner-button">Написать нам <span>↗</span></a>
                    </div>
                </div>
            </div>
        </section>
        <section class="inner-cta">
            <div class="container inner-cta-row">
                <div>
                    <span>ЕСТЬ ВОПРОСЫ ПО ПРОЕКТУ?</span>
                    <h2>Мы готовы помочь<span>.</span></h2>
                </div>
                <a :href="`tel:${phoneLink}`" class="inner-button">Позвонить <span>↗</span></a>
            </div>
        </section>
    </main>
    <Footer/>
</div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const phone='+7 (999) 999-99-99'
const phoneLink='+7__________'
const email='info@.ru'
const address='Укажите адрес офиса'
const schedule='Понедельник - пятница, 09:00-18:00'
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
.inner-cta h2 span,
.contacts-aside h2 span{
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
.contacts-layout{
    display:grid;
    grid-template-columns:1fr .8fr;
    gap:65px;
    padding-top:40px;
}
.contacts-main{
    border-top:1px solid #dedfd9;
}
.contact-item{
    display:flex;
    flex-direction:column;
    gap:12px;
    padding:25px 5px;
    border-bottom:1px solid #dedfd9;
}
.contact-item>span{
    font-size:11px;
    font-weight:700;
    letter-spacing:.12em;
    color:#85887f;
}
.contact-item a,
.contact-item p{
    margin:0;
    color:#292c28;
    font-size:21px;
    line-height:1.5;
    text-decoration:none;
}
.contact-item a:hover{
    color:#d92f2f;
}
.contacts-aside{
    padding:35px;
    background:#e9eae4;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
}
.contacts-aside-kicker{
    font-size:12px;
    font-weight:700;
    letter-spacing:.13em;
    color:#777a73;
}
.contacts-aside h2{
    margin:30px 0 18px;
    font-size:clamp(32px,4vw,46px);
    font-weight:500;
    line-height:1.15;
    letter-spacing:-.05em;
}
.contacts-aside p{
    margin:0 0 28px;
    color:#777a73;
    font-size:15px;
    line-height:1.8;
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
    .contacts-layout{
        grid-template-columns:1fr;
        gap:25px;
        padding-top:28px;
    }
    .contacts-aside{
        padding:28px;
    }
    .contact-item a,
    .contact-item p{
        font-size:18px;
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