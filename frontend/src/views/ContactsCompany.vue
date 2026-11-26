<template>
<div class="inner-page">
    <Header/>
    <main>
        <section class="inner-hero">
            <div class="container">
                <span class="page-kicker">06 / БУДЕМ НА СВЯЗИ</span>
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
                            <p>562523134</p>
                            
                            <h5 class="h5">Юридический адрес:</h5>
                            <p>Республика Татарстан, 220002<br>г. Казань, пр-т. Машерова, 25-3, комн. 409</p>
                            
                            <h5>Телефоны:</h5>
                            <p>тел./ф.: +797 (23) 563 34 55</p>
                            <p>тел./ф. бухгалтерии: 8 (932) 84652 34</p>
                            <p>+795 (76) 968-57-25 – мобильный</p>
                            
                            <h5>Email:</h5>
                            <p><a href="mailto:nevastroy.by@gmail.com">nevastroy.by@gmail.com</a></p>
                            
                            <h5>Сайт:</h5>
                            <p><a href="" target="_blank"></a></p>
                            
                            <h5>Расчетный счет:</h5>
                            <p>4614112042569</p>
                            
                            <h5>Банк:</h5>
                            <p>ЗАО «Белорусско-Швейцарский Банк «БСБ Банк»<br>г. Минск, пр-т Победителей, д.23/4<br>БИК 592251975</p>
                            
                            <h5>Директор:</h5>
                            <p>Вечер Анатолий Дмитриевич</p>
                        </div>
                    </div>

                    <div class="contacts-form">
                        <h2 class="section-title">Обратная связь</h2>
                        <p class="section-desc">Оставьте нам сообщение</p>
                        <hr>
                        <form @submit.prevent="submit">
                            <div class="form-group">
                                <label>Имя <span>*</span></label>
                                <input type="text" v-model="name" placeholder="Иванов Иван Иванович" required>
                            </div>
                            <div class="form-group">
                                <label>E-mail <span>*</span></label>
                                <input type="text" v-model="email" placeholder="Ваш E-mail" required>
                            </div>
                            <div class="form-group">
                                <label>Телефон</label>
                                <input type="tel" v-model="phone" placeholder="Ваш телефон" required>
                            </div>
                            <div class="form-group">
                                <label>Сообщение <span>*</span></label>
                                <textarea rows="5" v-model="message" placeholder="Ваше сообщение" required></textarea>
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

import {ref} from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'

const name=ref('')
const email=ref('')
const phone=ref('')
const message=ref('')
const toast=useToast()

const submit=async()=>{
    try{
        if(!message.value||!name.value||!email.value||!phone){
            alert('Заполните все поля!')
            return
        }

        const response=await axios.post('http://localhost:5178/api/add',{
            name:name.value,email:email.value,phone:phone.value,message:message.value
        })

        name.value=''
        email.value=''
        phone.value=''
        message.value=''

        toast.success('Заявка отправлена')
    }catch(error){
        console.log(error)
    }
}

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
    margin:10px 0 10px 0;
    font-size:20px;
    font-weight:500;
    letter-spacing:-.04em;
    color:#292c28;
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