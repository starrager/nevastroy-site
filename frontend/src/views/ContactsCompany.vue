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
                    <div class="contacts-info">
                        <h2 class="section-title">Информация</h2>
                        <p class="section-desc">Контактные данные</p>
                        <hr>
                        <div class="info-block">
                            <p><strong>Торговая марка НЕВАСТРОЙ</strong></p>
                            
                            <h5>Реквизиты:</h5>
                            <p>ООО «Авикомтрейд»</p>
                            
                            <h5>УНП:</h5>
                            <p>191773148</p>
                            
                            <h5>Юридический адрес:</h5>
                            <p>Республика Беларусь, 220002<br>г. Минск, пр-т. Машерова, 25-3, комн. 409</p>
                            
                            <h5>Телефоны:</h5>
                            <p>тел./ф.: +375 (17) 334 66 14</p>
                            <p>тел./ф. бухгалтерии: 8 (017) 35013 27</p>
                            <p>+375 (29) 669-66-20 – мобильный</p>
                            
                            <h5>Email:</h5>
                            <p><a href="mailto:avik@neva.by">avik@neva.by</a></p>
                            
                            <h5>Сайт:</h5>
                            <p><a href="https://www.neva.by" target="_blank">www.neva.by</a></p>
                            
                            <h5>Расчетный счет:</h5>
                            <p>3012172040007</p>
                            
                            <h5>Банк:</h5>
                            <p>ЗАО «Белорусско-Швейцарский Банк «БСБ Банк»<br>г. Минск, пр-т Победителей, д.23/4<br>БИК 153001175</p>
                            
                            <h5>Директор:</h5>
                            <p>Вечер Дмитрий Анатольевич</p>
                        </div>
                    </div>

                    <div class="contacts-form">
                        <h2 class="section-title">Обратная связь</h2>
                        <p class="section-desc">Оставьте нам сообщение</p>
                        <hr>
                        <form @submit.prevent>
                            <div class="form-group">
                                <label>Имя <span>*</span></label>
                                <input type="text" placeholder="Ваше имя" required>
                            </div>
                            <div class="form-group">
                                <label>E-mail <span>*</span></label>
                                <input type="email" placeholder="Ваш E-mail" required>
                            </div>
                            <div class="form-group">
                                <label>Телефон</label>
                                <input type="tel" placeholder="Ваш телефон">
                            </div>
                            <div class="form-group">
                                <label>Сообщение <span>*</span></label>
                                <textarea rows="5" placeholder="Ваше сообщение" required></textarea>
                            </div>
                            <button type="submit" class="submit-btn">Отправить</button>
                            <p class="form-note">* обязательные поля</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer/>
</div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<style>
.section-title{
    margin:0 0 10px;
    font-size:28px;
    font-weight:500;
    letter-spacing:-.04em;
    color:#292c28;
}
.section-desc{
    margin:0 0 20px;
    font-size:14px;
    color:#777a73;
}
hr{
    margin:0 0 30px;
    border:0;
    border-top:1px solid #dedfd9;
}
.info-block h5{
    margin:25px 0 8px;
    font-size:13px;
    font-weight:700;
    color:#777a73;
    text-transform:uppercase;
    letter-spacing:.05em;
}
.info-block p{
    margin:0 0 10px;
    font-size:16px;
    line-height:1.6;
    color:#292c28;
}
.info-block a{
    color:#292c28;
    text-decoration:none;
    transition:color .2s;
}
.info-block a:hover{
    color:#d92f2f;
}
.form-group{
    margin-bottom:20px;
    display:flex;
    flex-direction:column;
    gap:8px;
}
.form-group label{
    font-size:13px;
    font-weight:700;
    color:#292c28;
}
.form-group label span{
    color:#d92f2f;
}
.form-group input,
.form-group textarea{
    width:100%;
    padding:14px 16px;
    border:1px solid #d8d9d2;
    background:#fff;
    color:#292c28;
    font-family:inherit;
    font-size:15px;
    transition:border-color .2s;
}
.form-group input:focus,
.form-group textarea:focus{
    outline:none;
    border-color:#292c28;
}
.form-group textarea{
    resize:vertical;
}
.submit-btn{
    padding:15px 30px;
    background:#292c28;
    color:#fff;
    border:none;
    font-family:inherit;
    font-size:15px;
    font-weight:700;
    cursor:pointer;
    transition:background .2s;
}
.submit-btn:hover{
    background:#444740;
}
.form-note{
    margin:10px 0 0;
    font-size:12px;
    color:#777a73;
}
.contacts-layout{
    display:grid;
    grid-template-columns:1fr 1.5fr;
    gap:65px;
    padding-top:40px;
}
</style>