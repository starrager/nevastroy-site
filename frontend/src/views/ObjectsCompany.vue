<template>
	<div class="inner-page">
		<Header/>
		<main>
			<section class="inner-hero">
				<div class="container">
					<span class="page-kicker">02 / ПОРТФОЛИО</span>
					<h1>Наши объекты<span>.</span></h1>
					<p>Реализованные строительные проекты и комплексные инженерные решения.</p>
					<div class="page-breadcrumb">Главная / Объекты</div>
				</div>
			</section>
			<section class="inner-section">
				<div class="container">
					<div class="page-heading">
						<span>ПОРТФОЛИО</span>
						<span>{{ projects.length }} ПРОЕКТОВ В СПИСКЕ</span>
					</div>
					<div class="project-filters">
						<button v-for="year in years" :key="year" :class="{active:activeYear===year}" @click="activeYear=year">{{ year }}</button>
					</div>
					<div class="object-list">
						<article v-for="(project,index) in filteredProjects" :key="project.title" class="object-card">
							<div class="object-number">{{ String(index+1).padStart(2,'0') }}</div>
							<div class="object-content">
								<span class="object-year">{{ project.year }}</span>
								<h2>{{ project.title }}</h2>
								<p>{{ project.description }}</p>
							</div>
							<div class="object-type">{{ project.type }}</div>
						</article>
					</div>
					<p class="objects-note">Перечень проектов представлен по информации, опубликованной компанией.</p>
				</div>
			</section>
			<section class="inner-cta">
				<div class="container inner-cta-row">
					<div>
						<span>ВАШ ОБЪЕКТ - СЛЕДУЮЩИЙ</span>
						<h2>Обсудим задачу<span>.</span></h2>
					</div>
					<a href="/#contacts" class="inner-button">Обсудить проект <span>↗</span></a>
				</div>
			</section>
		</main>
		<Footer/>
	</div>
</template>

<script setup lang="ts">
import {computed,ref} from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const years=['Все','2024-2025','2020-...','2019-2020','2018-2019','2017-2018','2016','2015','2014','2013']
const activeYear=ref('Все')

const projects=[
    {year:'2024-2025',title:'BELEXPO - Минский международный выставочный центр',description:'Благоустройство, парковки, подъездные пути, озеленение, малые архитектурные формы, асфальтобетонные покрытия, бордюры, ливневая канализация, освещение, каскадные лестницы и террасы.',type:'Благоустройство'},
    {year:'2020-...',title:'Экспериментальный многофункциональный комплекс «Минск-Мир»',description:'Проект застройки. Седьмая очередь строительства. Генеральный план, благоустройство и инженерные сети.',type:'Комплекс работ'},
    {year:'2019-2020',title:'Жилой комплекс в агрогородке Ратомка',description:'Строительство жилого комплекса с объектами инфраструктуры. Сети НВК, теплотрасса, наружное электроснабжение, благоустройство, малые архитектурные формы и озеленение.',type:'Жилое строительство'},
    {year:'2018-2019',title:'Здание на улице Франциска Скорины, 21',description:'Реконструкция здания с пристройкой административного корпуса, многоуровневой автостоянкой и спортивно-оздоровительным центром. Внутренняя отделка.',type:'Реконструкция'},
    {year:'2017-2018',title:'Торгово-административное здание по улице Кульман',description:'Строительство здания. Устройство вентилируемого фасада и благоустройство.',type:'Строительство'},
    {year:'2017-2018',title:'Объект торговли на проспекте Рокоссовского',description:'Подготовительный период и генеральный подряд. Комплекс строительных работ.',type:'Генподряд'},
    {year:'2016',title:'Административно-складское здание в Бобруйске',description:'Строительство здания с пунктом технического обслуживания и здания шиномонтажа по улице Орджоникидзе.',type:'Строительство'},
    {year:'2015',title:'Многофункциональный комплекс с гостиницей «КЕМПИНСКИ»',description:'Объект в квартале проспекта Независимости, улицы Купалы и реки Свислочь в Минске.',type:'Комплекс работ'},
    {year:'2014',title:'Гостиница «Беларусь»',description:'Реконструкция фасадов здания гостиницы по улице Сторожевской, 15.',type:'Реконструкция'},
    {year:'2013',title:'Многофункциональный развлекательный центр «Замок»',description:'Комплекс общественного питания с административно-социальной инфраструктурой по проспекту Победителей, 65 в Минске.',type:'Строительство'}
]

const filteredProjects=computed(()=>activeYear.value==='Все'?projects:projects.filter(project=>project.year===activeYear.value))
</script>

<style>
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
.inner-hero .page-kicker{
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
.about-layout{
	display:grid;
	grid-template-columns:1.1fr .9fr;
	gap:70px;
	padding:45px 0 55px;
}
.about-layout h2{
	margin:0;
	font-size:clamp(38px,4.5vw,58px);
	font-weight:500;
	line-height:1.15;
	letter-spacing:-.055em;
}
.about-layout h2 span{
	color:#999c92;
}
.about-copy p{
	margin:0 0 18px;
	color:#686b64;
	font-size:16px;
	line-height:1.9;
}
.about-stats{
	display:grid;
	grid-template-columns:repeat(3,1fr);
	border-top:1px solid #dedfd9;
	border-bottom:1px solid #dedfd9;
}
.about-stat{
	display:flex;
	flex-direction:column;
	gap:12px;
	padding:25px;
	border-right:1px solid #dedfd9;
}
.about-stat:first-child{
	padding-left:0;
}
.about-stat:last-child{
	border-right:0;
}
.about-stat strong{
	font-size:42px;
	font-weight:500;
	letter-spacing:-.06em;
}
.about-stat span{
	font-size:14px;
	line-height:1.7;
	color:#777a73;
}
.inner-section-muted{
	background:#efefeb;
}
.principle-grid{
	display:grid;
	grid-template-columns:repeat(3,1fr);
	gap:20px;
	padding-top:35px;
}
.principle-card{
	padding:30px 25px;
	background:#f7f7f4;
	border:1px solid #dedfd9;
}
.principle-card>span{
	color:#d92f2f;
	font-size:13px;
}
.principle-card h3{
	margin:32px 0 14px;
	font-size:25px;
	font-weight:500;
	letter-spacing:-.04em;
}
.principle-card p{
	margin:0;
	color:#777a73;
	font-size:15px;
	line-height:1.8;
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
}
.inner-button span{
	color:#ed3434;
	font-size:20px;
}
.inner-button:hover{
	background:#444740;
}
.project-filters{
	display:flex;
	flex-wrap:wrap;
	gap:9px;
	margin:28px 0 35px;
}
.project-filters button{
	padding:10px 16px;
	border:1px solid #d8d9d2;
	background:transparent;
	color:#686b64;
	font:inherit;
	font-size:13px;
	cursor:pointer;
	transition:background .2s,color .2s,border-color .2s;
}
.project-filters button.active,
.project-filters button:hover{
	background:#292c28;
	border-color:#292c28;
	color:#fff;
}
.object-list{
	border-top:1px solid #dedfd9;
}
.object-card{
	display:grid;
	grid-template-columns:65px minmax(0,1fr) 170px;
	gap:25px;
	align-items:start;
	padding:29px 8px;
	border-bottom:1px solid #dedfd9;
	transition:background .3s;
}
.object-card:hover{
	background:#efefeb;
}
.object-number{
	font-size:14px;
	color:#d92f2f;
	padding-top:5px;
}
.object-year{
	font-size:12px;
	color:#777a73;
	letter-spacing:.1em;
	font-weight:700;
}
.object-content h2{
	margin:10px 0;
	font-size:24px;
	font-weight:500;
	letter-spacing:-.035em;
	line-height:1.4;
}
.object-content p{
	max-width:760px;
	margin:0;
	color:#777a73;
	font-size:15px;
	line-height:1.8;
}
.object-type{
	justify-self:end;
	margin-top:4px;
	padding:7px 11px;
	border:1px solid #dedfd9;
	color:#777a73;
	font-size:11px;
	text-align:center;
}
.objects-note{
	margin-top:28px;
	color:#85887f;
	font-size:13px;
	line-height:1.7;
}
.certificate-grid{
	display:grid;
	grid-template-columns:repeat(3,minmax(0,1fr));
	gap:24px;
	margin-top:35px;
}
.certificate-card{
	min-width:0;
}
.certificate-preview{
	height:320px;
	position:relative;
	display:flex;
	align-items:center;
	justify-content:center;
	background:#e9eae4;
	border:1px solid #dedfd9;
	overflow:hidden;
}
.certificate-index{
	position:absolute;
	top:15px;
	left:16px;
	font-size:12px;
	color:#777a73;
}
.certificate-sheet{
	width:65%;
	height:76%;
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	gap:13px;
	padding:18px;
	background:#fff;
	border:1px solid #d6d7d0;
	box-shadow:0 12px 30px rgba(0,0,0,.07);
	transform:rotate(-2deg);
}
.certificate-emblem{
	width:35px;
	height:35px;
	display:grid;
	place-items:center;
	border:1px solid #d92f2f;
	color:#d92f2f;
	font-size:20px;
	font-weight:800;
}
.certificate-line{
	width:65%;
	height:2px;
	background:#dedfd9;
}
.certificate-sheet strong{
	font-size:12px;
	letter-spacing:.12em;
}
.certificate-subline{
	width:75%;
	height:3px;
	background:#e5e6e0;
}
.certificate-subline.short{
	width:48%;
}
.certificate-stamp{
	margin-top:10px;
	padding:5px 9px;
	border:1px solid #d92f2f;
	color:#d92f2f;
	font-size:9px;
	letter-spacing:.1em;
}
.certificate-label{
	position:absolute;
	right:14px;
	bottom:14px;
	color:#777a73;
	font-size:10px;
	letter-spacing:.1em;
}
.certificate-info{
	padding:17px 2px;
}
.certificate-info>span{
	font-size:11px;
	color:#777a73;
	letter-spacing:.1em;
}
.certificate-info h2{
	margin:9px 0 0;
	font-size:20px;
	font-weight:500;
	line-height:1.45;
	letter-spacing:-.025em;
}
@media(max-width:1000px){
	.about-layout{
		gap:35px;
	}
	.certificate-grid{
		grid-template-columns:repeat(2,minmax(0,1fr));
	}
	.object-card{
		grid-template-columns:45px minmax(0,1fr) 130px;
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
	.about-layout{
		grid-template-columns:1fr;
		gap:25px;
		padding:32px 0 38px;
	}
	.about-stats{
		grid-template-columns:1fr;
	}
	.about-stat{
		padding:20px 0;
		border-right:0;
		border-bottom:1px solid #dedfd9;
	}
	.about-stat:last-child{
		border-bottom:0;
	}
	.principle-grid{
		grid-template-columns:1fr;
	}
	.principle-card{
		padding:25px;
	}
	.principle-card h3{
		margin-top:20px;
	}
	.inner-cta{
		padding:45px 0;
	}
	.inner-cta-row{
		align-items:flex-start;
		flex-direction:column;
	}
	.object-card{
		grid-template-columns:30px minmax(0,1fr);
		gap:13px;
		padding:23px 4px;
	}
	.object-type{
		grid-column:2;
		justify-self:start;
	}
	.object-content h2{
		font-size:21px;
	}
	.object-content p{
		font-size:14px;
	}
	.certificate-grid{
		grid-template-columns:1fr 1fr;
		gap:15px;
	}
	.certificate-preview{
		height:245px;
	}
	.certificate-sheet{
		width:75%;
		height:75%;
	}
	.certificate-info h2{
		font-size:17px;
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
	.certificate-grid{
		grid-template-columns:1fr;
	}
	.certificate-preview{
		height:300px;
	}
	.project-filters{
		gap:7px;
	}
	.project-filters button{
		padding:9px 11px;
		font-size:12px;
	}
}
</style>