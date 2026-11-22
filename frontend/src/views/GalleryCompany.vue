<template>
	<div class="inner-page">
		<main>
			<Header></Header>
			<section class="inner-hero">
				<div class="container">
					<span class="page-kicker">06 / НАШИ РАБОТЫ</span>
					<h1>Галерея<span>.</span></h1>
					<p>Результаты нашей работы — реализованные строительные проекты, благоустройство территорий и инженерные решения.</p>
					<div class="page-breadcrumb">Главная / Галерея</div>
				</div>
			</section>

			<section class="inner-section">
				<div class="container">
					<div class="page-heading">
						<span>РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</span>
						<span>{{ projects.length }} ФОТОГРАФИЙ</span>
					</div>

					<div class="gallery-grid">
						<article v-for="(project,id) in projects" :key="id" class="gallery-card">
							<div class="gallery-image">
								<img :src="getImageUrl(`photo${id+1}`)" :alt="project.title" loading="lazy">
							</div>
							<div class="gallery-info">
								<span>{{ project.category }}</span>
								<h2>{{ project.title }}</h2>
							</div>
						</article>
					</div>
				</div>
			</section>
		</main>
	</div>
	<Footer></Footer>
</template>

<script setup lang="ts">
import {computed,ref} from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const projects=[
	{title:'Торгово-административное здание',category:'Строительство'},
	{title:'Здание неустановленного назначения по улице Франциска Скорины, 21',category:'Реконструкция'},
	{title:'Жилого комплекса с объектами инфраструктуры по адресу: Минский р-н., Ждановичский с/с, аг. Ратомка',category:'Дорожные работы'},
	{title:'Экспериментальный многофункциональный комплекс “Минск-Мир”. Проект застройки. 7-я очередь строительства. Генплан, благоустройство, инженерные сети.',category:'Строительство'},
	{title:'Объект торговли строительными материалами по ул.Гоголя, 170а в г.Бобруйске',category:'Строительство'},
	{title:'Административное здание по ул.Пинская 28а, г.Минск',category:'Строительство'},
	{title:'Магазин «Евроопт» по адресу г.Орша, пер. 4-й Чернышевского, д. 4',category:'Реконструкция'},
	{title:'Административно-складское здание с пунктом технического обслуживания и здание шиномонтажа по ул. Орджоникидзе, 104 в г. Бобруйске',category:'Строительство'},
	{title:'Многофункциональное здание ООО «Еврологистик» корпус №1',category:'Строительство'},
    {title:'Жилой дом в д. Дуброво Минского района',category:'Строительство'},
    {title:'МСК-2 МЗКТ',category:'Модернизация фасадов'},
    {title:'Многофункциональный комплекс в г. Минске по проспекту Победителей',category:'Строительство'},
    {title:'Молочно-товарная ферма в д.Лешница Березинского района',category:'Модернизация фасадов'},
    {title:'Реконструкция магазина общей площадью 1700м2 - наружные и внутренние отделочные работы, внутренние электромонтажные и сантехнические работы',category:'Модернизация'},
    {title:'Поликлиника №17 по ул.Герасименко, 49 в г.Минске',category:'Комплекс работ'},
    {title:'Многофункциональное здание ООО «Еврологистик» корпус №2',category:'Строительство'},
    {title:'Жилой дом №10 по бульвару Дзержинского в г. Узда с устройством скатной кровли и благоустройством дворовой территории',category:'Капитальный ремонт'},
    {title:'Многофункциональный развлекательный центр «Замок» по пр. Победителей, 65',category:'Комплекс работ'},
]

const getImageUrl=(name:any)=>{
    return new URL(`../images/gallery/${name}.png`,import.meta.url).href
}
</script>
    
<style scoped>
.inner-page{
    background:#f7f7f4;
    color:#252724;
    min-height:100vh;
}
.container{
    width:min(1240px,calc(100% - 80px));
    margin-inline:auto;
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
.gallery-filters{
    display:flex;
    flex-wrap:wrap;
    gap:9px;
    margin:28px 0 35px;
}
.gallery-filters button{
    padding:10px 16px;
    border:1px solid #d8d9d2;
    background:transparent;
    color:#686b64;
    font:inherit;
    font-size:13px;
    cursor:pointer;
    transition:background .2s,color .2s,border-color .2s;
}
.gallery-filters button.active,
.gallery-filters button:hover{
    background:#292c28;
    border-color:#292c28;
    color:#fff;
}
.gallery-grid{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:28px 24px;
}
.gallery-card{
    min-width:0;
    cursor:pointer;
}
.gallery-image{
    height:260px;
    position:relative;
    overflow:hidden;
    background:#e9eae4;
    border:1px solid #dedfd9;
}
.gallery-image img{
    width:100%;
    height:100%;
    display:block;
    object-fit:cover;
    transition:transform .5s ease;
}
.gallery-index{
    position:absolute;
    top:14px;
    left:15px;
    padding:6px 9px;
    background:rgba(37,44,46,.8);
    color:#fff;
    font-size:11px;
}
.gallery-info{
    padding:16px 2px;
}
.gallery-info>span{
    font-size:11px;
    color:#d92f2f;
    letter-spacing:.1em;
    text-transform:uppercase;
}
.gallery-info h2{
    margin:9px 0 0;
    font-size:20px;
    font-weight:500;
    line-height:1.4;
    letter-spacing:-.025em;
}
.empty-gallery{
    padding:50px 0;
    text-align:center;
    color:#777a73;
    font-size:15px;
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
.lightbox{
    position:fixed;
    inset:0;
    z-index:1000;
    background:rgba(15,18,18,.94);
    display:flex;
    align-items:center;
    justify-content:center;
    padding:45px 80px;
}
.lightbox-content{
    max-width:1000px;
    width:100%;
    max-height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
}
.lightbox-content img{
    max-width:100%;
    max-height:75vh;
    object-fit:contain;
}
.lightbox-info{
    width:100%;
    padding-top:18px;
    color:#fff;
}
.lightbox-info span{
    font-size:11px;
    color:#ed3434;
    letter-spacing:.12em;
    text-transform:uppercase;
}
.lightbox-info h2{
    margin:8px 0 0;
    font-size:22px;
    font-weight:500;
}
.lightbox-close,
.lightbox-arrow{
    position:absolute;
    border:0;
    background:transparent;
    color:#fff;
    cursor:pointer;
}
.lightbox-close{
    top:20px;
    right:28px;
    font-size:42px;
}
.lightbox-arrow{
    top:50%;
    font-size:55px;
    transform:translateY(-50%);
}
.lightbox-arrow.prev{
    left:25px;
}
.lightbox-arrow.next{
    right:25px;
}
@media(max-width:1000px){
    .gallery-grid{
        grid-template-columns:repeat(2,minmax(0,1fr));
    }
    .gallery-image{
        height:240px;
    }
}
@media(max-width:760px){
    .container{
        width:calc(100% - 40px);
    }
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
    .gallery-grid{
        gap:20px 15px;
    }
    .gallery-image{
        height:200px;
    }
    .gallery-info h2{
        font-size:17px;
    }
    .inner-cta{
        padding:45px 0;
    }
    .inner-cta-row{
        align-items:flex-start;
        flex-direction:column;
    }
    .lightbox{
        padding:45px 20px;
    }
    .lightbox-arrow.prev{
        left:3px;
    }
    .lightbox-arrow.next{
        right:3px;
    }
}
@media(max-width:520px){
    .gallery-grid{
        grid-template-columns:1fr;
    }
    .gallery-image{
        height:260px;
    }
    .gallery-filters button{
        padding:9px 11px;
        font-size:12px;
    }
}
@media(max-width:420px){
    .container{
        width:calc(100% - 32px);
    }
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