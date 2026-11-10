<template>
    <div class="inner-page">
        <Header></Header>
        <main>
            <section class="inner-hero">
                <div class="container">
                    <span class="page-kicker">01 / КОМПАНИЯ</span>
                    <h1>О компании<span>.</span></h1>
                    <p>Опыт, инженерный подход и ответственность на каждом этапе строительства.</p>
                    <div class="page-breadcrumb">Главная / О компании</div>
                </div>
            </section>
            <section class="inner-section">
                <div class="container">
                    <div class="page-heading">
                        <span>НАША ИСТОРИЯ</span>
                        <span>С 2004 ГОДА</span>
                    </div>
                    <div class="about-centered">
                        <h2 class="about-title">
                            Создаём объекты.<br />
                            <span>Формируем будущее.</span>
                        </h2>
                        <div class="about-copy">
                            <p>Группа строительных компаний "НЕВА-СТРОЙ" основана в феврале 2004 года и уже более 10 лет безупречно работает на рынке строительных услуг для Вас. Постоянное и динамичное развитие группы компаний позволяет нам усовершенствоваться, применять новые технологии, повышать квалификацию инженерно-технического состава, обучать персонал новым разработкам в сфере строительства.</p>
                            <p>Наша организация обладает большим опытом строительства зданий и сооружений любой сложности. Материально-техническая база позволяет нам выполнять все работы собственными силами, начиная с подготовительного периода, прокладки инженерных сетей, возведением каркаса здания и заканчивая благоустройством и озеленением!</p>
                            <p>Штат нашей компании насчитывает порядка 150 человек различных специальностей включая ИТР, что позволяет нам выполнять любые задачи при строительстве объектов! Гибкий подход и точное планирование позволяют нам в срок и с высочайшим качеством выполнять строительно-монтажные работы на наших объектах!</p>
                        </div>
                    </div>
                    <div class="about-stats">
                        <div class="about-stat">
                            <strong>2004</strong>
                            <span>Год основания компании</span>
                        </div>
                        <div class="about-stat">
                            <strong>150</strong>
                            <span>Сотрудников различных специальностей</span>
                        </div>
                        <div class="about-stat">
                            <strong>360°</strong>
                            <span>Полный цикл строительных работ</span>
                        </div>
                    </div>
                </div>
            </section>
            <section class="inner-section inner-section-muted">
                <div class="container">
                    <div class="page-heading">
                        <span>НАШ ПОДХОД</span>
                        <span>ПРИНЦИПЫ РАБОТЫ</span>
                    </div>
                    <div class="principle-grid">
                        <article class="principle-card">
                            <span>01</span>
                            <h3>Профессионализм</h3>
                            <p>Опыт инженерно-технических специалистов и постоянное развитие профессиональных навыков.</p>
                        </article>
                        <article class="principle-card">
                            <span>02</span>
                            <h3>Ответственность</h3>
                            <p>Планирование работ, организация процессов и контроль выполнения обязательств.</p>
                        </article>
                        <article class="principle-card">
                            <span>03</span>
                            <h3>Комплексность</h3>
                            <p>Выполнение строительных задач собственными силами на разных этапах реализации объекта.</p>
                        </article>
                    </div>
                </div>
            </section>
            <section class="inner-cta">
                <div class="container inner-cta-row">
                    <div>
                        <span>ЕСТЬ ПРОЕКТ?</span>
                        <h2>Давайте обсудим<span>.</span></h2>
                    </div>
                    <a href="/#contacts" class="inner-button">Связаться с нами <span>↗</span></a>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
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

/* НОВЫЕ СТИЛИ ДЛЯ ЦЕНТРИРОВАННОГО БЛОКА */
.about-centered{
	max-width:850px;
	margin:0 auto;
	padding:55px 0;
	text-align:center;
}
.about-title{
	margin:0 0 40px;
	font-size:clamp(38px,4.5vw,58px);
	font-weight:500;
	line-height:1.15;
	letter-spacing:-.055em;
}
.about-title span{
	color:#999c92;
}
.about-copy p{
	margin:0 0 20px;
	color:#686b64;
	font-size:16px;
	line-height:1.9;
	text-align:left;
}
.about-copy p:last-child{
	margin-bottom:0;
}
/* ----------------------------------- */

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