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
                    <div v-for="(group,groupIndex) in groupedProjects":key="group.year" class="year-block" data-aos="fade-up">
                        <div class="year-header">
                            <h2>{{ group.year }}</h2>
                        </div>
                        <div class="year-content">
                            <div class="year-text">
                                <ul>
                                    <li v-for="(project,index) in group.projects":key="index">
                                        {{ project.description }}
                                    </li>
                                </ul>
                            </div>
                            <div class="year-images">
                                <div v-for="n in 5":key="n" class="image-placeholder" data-aos="fade-up" :data-aos-delay="(n%3)*100">
                                    <img :src="getImageUrl(`photo${n}`)" alt="Загрузка изображения">
                                </div>
                            </div>
                        </div>
                    </div>
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
import{onMounted}from'vue'
import AOS from'aos'
import'aos/dist/aos.css'
import Header from'../components/Header.vue'
import Footer from'../components/Footer.vue'

const getImageUrl=(name:any)=>{
  return new URL(`../images/objects/div1/${name}.png`,import.meta.url).href
}

const groupedProjects=[
    {
        year:'2024-2025',
        imageCount:5,
        projects:[
            {description:'BELEXPO - Минский Международный Выставочный Центр. Благоустройство, парковки, подъездные пути, озеленение, МАФ.'},
            {description:'Асфальтобетонные покрытия, бордюры, ливневая канализация, освещение, каскадные лестницы и террасы.'},
            {description:'Строительно-монтажные работы 2024-2025 гг.'}
        ]
    },
    {
        year:'2020-...',
        imageCount:9,
        projects:[
            {description:'Экспериментальный многофункциональный комплекс "Минск-Мир". Проект застройки. 7-я очередь строительства. Генплан, благоустройство, инженерные сети.'}
        ]
    },
    {
        year:'2019-2020',
        imageCount:8,
        projects:[
            {description:'Строительство жилого комплекса с объектами инфраструктуры по адресу: Минский р-н., Ждановичский с/с, аг. Ратомка. 22-я очередь строительства. Жилой дом № 1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, и 4 по ГП. (Сети НВК, Теплотрасса, Наружное электроснабжение, Благоустройство, МАФы и Озеленение)'}
        ]
    },
    {
        year:'2018-2019',
        imageCount:3,
        projects:[
            {description:'Реконструкция здания неустановленного назначения по улице Франциска Скорины, 21, с пристройкой административного корпуса с многоуровневой автостоянкой и спортивно-оздоровительного центра. (внутренняя отделка)'}
        ]
    },
    {
        year:'2017-2018',
        imageCount:7,
        projects:[
            {description:'Строительство торгово-административного здания по ул. Кульман (УСТРОЙСТВО ВЕНТИЛИРУЕМОГО ФАСАДА, БЛАГОУСТРОЙСТВО)'}
        ]
    },
    {
        year:'2017',
        imageCount:5,
        projects:[
            {description:'«Строительство объекта торговли по проспекту Рокоссовского. Подготовительный период. Генподрядчик, весь комплекс работ. Заказчик: ООО "Фармстрой"»'}
        ]
    },
    {
        year:'2016',
        imageCount:4,
        projects:[
            {description:'«Строительство административно-складского здания с пунктом технического обслуживания и здания шиномонтажа по ул. Орджоникидзе в г. Бобруйске». Ген. подряд, весь комплекс работ.'},
            {description:'«Объект торговли строительными материалами по ул. Гоголя, 170а в г. Бобруйске». Ген. подряд, сеть «Практик».'},
            {description:'«Реконструкция капитального строения под магазин розничной торговли в г. Городок». Ген. подряд.'},
            {description:'«Реконструкция магазина под объект общественного питания (кафе Golden Coffe) по ул. Кирова, 2». Ген. подряд.'},
            {description:'«Реконструкция здания столовой под магазин в г. Чаусы». Ген. подряд.'},
            {description:'«Ветропарк на пять ветрогенераторов общей мощностью 5МВт».'},
            {description:'«Капитальный ремонт, благоустройство территорий, прилегающих к зданиям АТС в г. Минске». Ген. подряд.'},
            {description:'«Капитальный ремонт с благоустройством территорий прилегающих к зданиям АТС в г. Минске».'},
            {description:'«Строительство жилого дома в д. Дуброво Минского района»'}
        ]
    },
    {
        year:'2015',
        imageCount:3,
        projects:[
            {description:'«Многофункциональный комплекс с гостиницей «КЕМПИНСКИ», г. Минск».'},
            {description:'«Строительство административного здания по ул. Пинская, 28а в г. Минске».'},
            {description:'«Объект торговли строительными материалами по ул. Гоголя, 170а в г. Бобруйске».'},
            {description:'«Реконструкция магазина "Евроопт" по адресу г. Орша».'},
            {description:'«Реконструкция здания д/с №18 для проживания слушателей».'},
            {description:'«Физкультурно-оздоровительный комплекс в квартале ул. Ангарская-Артема-Герасименко-Нестерова».'},
            {description:'«Модернизация здания общежития №2 по ул. Беды, 4, корп.1».'},
            {description:'«Модернизация восточного и северного фасадов МСК-2».'},
            {description:'«Строительство многофункционального здания в Минской области, район аг. Михановичи».'}
        ]
    },
    {
        year:'2014',
        imageCount:6,
        projects:[
            {description:'«Модернизация магазина ООО "Евроторг" по адресу: г. Орша, ул. Семенова, 27А».'},
            {description:'«Гостиница «Беларусь» по ул. Сторожевской, 15 с выделением 1 этапа-реконструкция фасадов».'},
            {description:'Тепловая модернизация фасада здания шиномонтажного отделения.'},
            {description:'Строительство молочно-товарной фермы 45х126х4,2.'},
            {description:'«Строительство многофункционального комплекса в г. Минске по проспекту Победителей».'},
            {description:'Строительство овощехранилища 18х60х8 Брестская область.'},
            {description:'Модернизация здания общежития №2 по ул. Беды, 4.'},
            {description:'«Модернизация здания торгового дома «Кросны» с благоустройством прилегающей территории».'},
            {description:'«Текущий ремонт склада, расположенного по адресу: г. Витебск, ул. Ленинградская, д. 155А».'},
            {description:'«Помещения участка технического обслуживания ЦСО Филиала «ВТС» ОАО «МЗКТ».'},
            {description:'Текущий ремонт «Кабинет №619, учебный класс, холл, коридоры».'},
            {description:'«Текущий ремонт подъездной автомобильной дороги и проездов из бетонного покрытия».'},
            {description:'Строительство общественно-торгового центра г. Высокое.'},
            {description:'«Производственно-складские помещения и транспортно-логистический центр на территории Минского района».'},
            {description:'«Строительство административного объекта по ул. Пинской, 28а».'}
        ]
    },
    {
        year:'2013',
        imageCount:2,
        projects:[
            {description:'«Молочно-товарная ферма на 600 голов дойного стада» д. Лешница, Березинского района.'},
            {description:'«Строительство многофункционального здания в Минской области, район аг. Михановичи».'},
            {description:'«Комплекс общественного питания с административно-социальной инфраструктурой (типа Lido) по пр. Победителей, 65 в г. Минске. Многофункциональный торгово-развлекательный центр «Замок».'},
            {description:'Строительство многофункционального здания в Минской области, Минский р-н, а.г. Новоселье.'},
            {description:'«Капитальный ремонт жилого дома №10 по бульвару Дзержинского в г. Узда».'},
            {description:'«Здание Октябрьского районного военного комиссариата г. Минск по ул. Казинца».'},
            {description:'«Административное здание на территории в границах ул. Орловская - пр. Победителей - р. Свислочь в г. Минске».'}
        ]
    }
]

onMounted(()=>{
    AOS.init({
        duration:800,
        once:true,
        offset:100
    })
})
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
.year-block{
	margin-bottom:80px;
}
.year-block:last-child{
	margin-bottom:0;
}
.year-header{
	margin-bottom:30px;
	border-bottom:1px solid #dedfd9;
	padding-bottom:15px;
}
.year-header h2{
	margin:0;
	font-size:36px;
	font-weight:500;
	letter-spacing:-.04em;
	color:#252724;
}
.year-content{
	display:grid;
	grid-template-columns:340px 1fr;
	gap:50px;
	align-items:start;
}
.year-text ul{
	list-style:none;
	padding:0;
	margin:0;
}
.year-text li{
	position:relative;
	padding-left:20px;
	margin-bottom:15px;
	font-size:15px;
	line-height:1.7;
	color:#525550;
}
.year-text li::before{
	content:"•";
	position:absolute;
	left:0;
	top:0;
	color:#d92f2f;
	font-size:18px;
	line-height:1.4;
}
.year-images{
	display:grid;
	grid-template-columns:repeat(3, 1fr);
	gap:15px;
}
.image-placeholder{
	background:#e9eae4;
	aspect-ratio: 4 / 3;
	position:relative;
	overflow:hidden;
	border:1px solid #dedfd9;
	display:flex;
	align-items:center;
	justify-content:center;
	transition:transform 0.3s;
}
.image-placeholder:hover{
	transform:scale(1.02);
	z-index:2;
}
.placeholder-inner{
	display:flex;
	flex-direction:column;
	align-items:center;
	gap:10px;
	color:#a1a5a0;
}
.placeholder-inner .icon{
	font-size:30px;
	line-height:1;
	font-weight:300;
}
.placeholder-inner .text{
	font-size:11px;
	text-transform:uppercase;
	letter-spacing:2px;
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
@media(max-width:1000px){
	.year-content{
		grid-template-columns:1fr;
		gap:30px;
	}
	.year-images{
		grid-template-columns:repeat(2, 1fr);
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
	.year-images{
		grid-template-columns:1fr;
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
	.year-header h2{
		font-size:28px;
	}
}
</style>