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
						<span>{{ filteredProjects.length }} ФОТОГРАФИЙ</span>
					</div>

					<div class="gallery-filters">
						<button v-for="category in categories" :key="category" :class="{active:activeCategory===category}" @click="activeCategory=category">
							{{ category }}
						</button>
					</div>

					<div class="gallery-grid">
						<article v-for="(project,index) in filteredProjects" :key="project.title" class="gallery-card" @click="openImage(project)">
							<div class="gallery-image">
								<img :src="project.image" :alt="project.title" loading="lazy">
								<span class="gallery-index">{{ String(index+1).padStart(2,'0') }}</span>
								<span class="gallery-zoom">↗</span>
							</div>
							<div class="gallery-info">
								<span>{{ project.category }}</span>
								<h2>{{ project.title }}</h2>
							</div>
						</article>
					</div>

					<div v-if="filteredProjects.length===0" class="empty-gallery">
						В этой категории пока нет фотографий.
					</div>
				</div>
			</section>

			<section class="inner-cta">
				<div class="container inner-cta-row">
					<div>
						<span>ВАШ ПРОЕКТ МОЖЕТ БЫТЬ СЛЕДУЮЩИМ</span>
						<h2>Начнём сотрудничество<span>.</span></h2>
					</div>
					<a href="/#contacts" class="inner-button">Связаться <span>↗</span></a>
				</div>
			</section>
		</main>

		<div v-if="selectedProject" class="lightbox" @click.self="selectedProject=null" @keydown.esc="selectedProject=null">
			<button class="lightbox-close" @click="selectedProject=null">×</button>
			<button class="lightbox-arrow prev" @click="changeImage(-1)">‹</button>
			<div class="lightbox-content">
				<img :src="selectedProject.image" :alt="selectedProject.title">
				<div class="lightbox-info">
					<span>{{ selectedProject.category }}</span>
					<h2>{{ selectedProject.title }}</h2>
				</div>
			</div>
			<button class="lightbox-arrow next" @click="changeImage(1)">›</button>
		</div>
	</div>
	<Footer></Footer>
</template>

<script setup lang="ts">
import {computed,ref} from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const activeCategory=ref('Все')
const selectedProject=ref<any>(null)

const categories=['Все','Строительство','Благоустройство','Дорожные работы','Инженерные сети']

const projects=[
	{title:'Строительство жилого комплекса',category:'Строительство',image:'/images/gallery/project-1.jpg'},
	{title:'Благоустройство территории',category:'Благоустройство',image:'/images/gallery/project-2.jpg'},
	{title:'Устройство дорожного покрытия',category:'Дорожные работы',image:'/images/gallery/project-3.jpg'},
	{title:'Монтаж инженерных коммуникаций',category:'Инженерные сети',image:'/images/gallery/project-4.jpg'},
	{title:'Строительство промышленного объекта',category:'Строительство',image:'/images/gallery/project-5.jpg'},
	{title:'Озеленение и благоустройство',category:'Благоустройство',image:'/images/gallery/project-6.jpg'},
	{title:'Ремонт и устройство дорог',category:'Дорожные работы',image:'/images/gallery/project-7.jpg'},
	{title:'Прокладка наружных сетей',category:'Инженерные сети',image:'/images/gallery/project-8.jpg'},
	{title:'Строительно-монтажные работы',category:'Строительство',image:'/images/gallery/project-9.jpg'}
]

const filteredProjects=computed(()=>{
	if(activeCategory.value==='Все') return projects
	return projects.filter(project=>project.category===activeCategory.value)
})

function openImage(project:any){
	selectedProject.value=project
}

function changeImage(direction:number){
	if(!selectedProject.value) return
	const index=filteredProjects.value.findIndex(project=>project===selectedProject.value)
	const nextIndex=(index+direction+filteredProjects.value.length)%filteredProjects.value.length
	selectedProject.value=filteredProjects.value[nextIndex]
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
.gallery-card:hover .gallery-image img{
    transform:scale(1.06);
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
.gallery-zoom{
    position:absolute;
    right:14px;
    bottom:14px;
    width:38px;
    height:38px;
    display:grid;
    place-items:center;
    background:#ed3434;
    color:#fff;
    font-size:21px;
    opacity:0;
    transform:translateY(8px);
    transition:all .25s;
}
.gallery-card:hover .gallery-zoom{
    opacity:1;
    transform:translateY(0);
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