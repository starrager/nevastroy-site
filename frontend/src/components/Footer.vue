<template>
    <footer id="contacts" class="footer">
        <div class="container">
            <div class="footer-main">
                <div class="footer-brand">
                    <a class="brand">
                        <span class="brand-mark">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span class="brand-copy">
                            <strong>НЕВАСТРОЙ</strong>
                            <small>СТРОИТЕЛЬНАЯ КОМПАНИЯ</small>
                        </span>
                    </a>
                    <p>Строительство и реализация<br />объектов в Татарстане.</p>
                </div>
                <div class="footer-column">
                    <span class="footer-heading">НАВИГАЦИЯ</span>
                    <router-link to="/aboutus">О КОМПАНИИ</router-link>
                    <router-link to="/ourservices">УСЛУГИ</router-link>
                    <router-link to="/ourobjects">ОБЪЕКТЫ</router-link>
                </div>
                <div class="footer-column">
                    <span class="footer-heading">КОНТАКТЫ</span>
                    <a href="tel:+79999999999">+7 999 999-99-99</a>
                    <a href="mailto:info@example.by">info@example.by</a>
                    <span>Казань, Татарстан</span>
                </div>
                <div class="footer-column footer-contact">
                    <span class="footer-heading">ОБСУДИТЬ ПРОЕКТ</span>
                    <p>Готовы ответить на вопросы и обсудить вашу задачу.</p>
                    <a class="underlined-link" href="mailto:info@example.by">Написать нам <span>↗</span></a>
                </div>
            </div>
            <div class="footer-bottom">
                <span>© 2026 НЕВАСТРОЙ</span>
                <a href="#top" @click.prevent="scrollToTop">Наверх ↑</a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const scrollToTop=()=>{
    window.scrollTo({top:0,behavior:'smooth'})
}
</script>

<style scoped>
.container{
	width:min(1240px,calc(100% - 80px));
	margin-inline:auto;
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
.brand{
	display:inline-flex;
	align-items:center;
	gap:11px;
	flex-shrink:0;
	text-decoration:none;
}
.brand-mark{
	width:33px;
	height:33px;
	display:flex;
	align-items:flex-end;
	gap:3px;
	padding:4px;
	border:1px solid #81857b;
}
.brand-mark span{
	display:block;
	flex:1;
	background:#f1f1ed;
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
	color:#fff;
	font-size:20px;
	line-height:1;
	letter-spacing:0.045em;
	font-weight:800;
}
.brand-copy small{
	color:#a3a69d;
	font-size:10px;
	letter-spacing:0.13em;
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
	text-decoration:none;
}
.footer-column>a:hover{
	color:#aeb1a6;
}
.footer-contact p{
	margin:0 0 4px;
}
.underlined-link{
	display:inline-flex;
	align-items:center;
	gap:22px;
	padding-bottom:8px;
	border-bottom:1px solid #777b70;
	font-size:13.75px;
	font-weight:700;
	text-decoration:none;
	color:#e2e3dd;
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
	text-decoration:none;
}
@media (max-width:1000px){
	.container{
		width:calc(100% - 48px);
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
	.brand-copy strong{
		font-size:17.5px;
	}
	.brand-copy small{
		font-size:8.75px;
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
</style>