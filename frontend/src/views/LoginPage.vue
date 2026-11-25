<template>
	<div class="inner-page">
		<main class="auth-wrapper">
			<div class="auth-box">
				<span class="page-kicker">АВТОРИЗАЦИЯ</span>
				<h1>Вход в панель<span>.</span></h1>
				<p>Введите логин и пароль для доступа к заявкам.</p>
				
				<form @submit.prevent="loginin" class="auth-form">
					<div class="form-group">
						<label>Логин</label>
						<input type="text" v-model="login" placeholder="admin" required>
					</div>
					<div class="form-group">
						<label>Пароль</label>
						<input type="password" v-model="password" placeholder="***********" required>
					</div>
					<button type="submit" class="submit-btn">Войти</button>
					<p class="error-msg" v-if="error">{{ error }}</p>
				</form>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios'

const router=useRouter()
const login=ref('')
const password=ref('')
const error=ref('')

const loginin=async()=>{
    try{
        const response=await axios.post('http://localhost:5178/login',{login:login.value,password:password.value})
        localStorage.setItem('token','fake-jwt-token-123')
        router.push('/adminpanel')
    }catch(error){
        console.error(error)
    }
}
</script>

<style scoped>
.inner-page{
    background:#f7f7f4;
    color:#252724;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
}
.auth-wrapper{
    width:100%;
    padding:40px 20px;
    display:flex;
    justify-content:center;
}
.auth-box{
    background:#fff;
    padding:50px;
    max-width:450px;
    width:100%;
    border:1px solid #dedfd9;
    box-shadow:0 10px 30px rgba(0,0,0,0.05);
}
.page-kicker{
    font-size:12px;
    letter-spacing:.14em;
    color:#ed3434;
    font-weight:700;
    text-transform:uppercase;
}
h1{
    margin:20px 0 10px;
    font-size:36px;
    font-weight:500;
    letter-spacing:-.04em;
}
h1 span{
    color:#ed3434;
}
p{
    color:#777a73;
    font-size:15px;
    margin-bottom:30px;
    line-height:1.6;
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
.form-group input{
    padding:14px 16px;
    border:1px solid #d8d9d2;
    background:#f7f7f4;
    color:#292c28;
    font-family:inherit;
    font-size:15px;
    transition:border-color .2s;
}
.form-group input:focus{
    outline:none;
    border-color:#292c28;
}
.submit-btn{
    width:100%;
    padding:16px;
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
.error-msg{
    color:#ed3434;
    font-size:13px;
    margin-top:15px;
    text-align:center;
}
</style>