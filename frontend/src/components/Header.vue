<template>
    <div class="topbar">
        <div class="container topbar-inner">
            <span>Качество, которому доверяют!</span>
            <div class="topbar-right">
                <span>Республика Татарстан</span>
                <a href="mailto:info@example.by">info@example.by</a>
            </div>
        </div>
    </div>
    <header class="header">
        <div class="container header-inner">
            <a class="brand" href="#" aria-label="Главная страница">
                <span class="brand-logo">
                    <img src="@/assets/logo2.png" alt="НЕВАСТРОЙ">
                </span>
            </a>
            <nav class="desktop-nav" aria-label="Основная навигация">
                <a href="#about">О компании</a>
                <a href="#services">Услуги</a>
                <a href="#projects">Объекты</a>
                <a href="#contacts">Контакты</a>
            </nav>
            <div class="header-contact">
                <a class="phone" href="tel:+79999999999">+7 999 999-99-99</a>
                <a class="header-cta" href="#contacts">Обсудить проект <span>↗</span></a>
            </div>
            <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Открыть меню" @click="menuOpen=!menuOpen">
                <span></span>
                <span></span>
            </button>
        </div>
        <nav v-if="menuOpen" class="mobile-nav" aria-label="Мобильная навигация">
            <a href="#about" @click="menuOpen = false">О компании</a>
            <a href="#services" @click="menuOpen = false">Услуги</a>
            <a href="#projects" @click="menuOpen = false">Объекты</a>
            <a href="#contacts" @click="menuOpen = false">Контакты</a>
            <a href="tel:+79999999999">+7 999 999-99-99</a>
        </nav>
    </header>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const menuOpen=ref(false)
</script>

<style scoped>
.container{
    width:min(1240px,calc(100% - 80px));
    margin-inline:auto;
}
.topbar{
    background:#171d1f;
    color:#e6e7e1;
    font-size:13px;
    letter-spacing:0.04em;
    min-height:34px;
    padding:5px 0;
}
.topbar-inner,
.topbar-right{
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.topbar-inner{
    min-height:34px;
    gap:20px;
}
.topbar-right{
    gap:28px;
}
.topbar a{
    color:#fff;
    text-decoration:none;
}
.header{
    position:relative;
    z-index:10;
    background:#252c2e;
    color:#f7f7f4;
    border-bottom:1px solid rgba(255,255,255,.12);
    box-shadow:0 8px 24px rgba(0,0,0,.13);
}
.header-inner{
    min-height:104px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:28px;
    padding-block:12px;
}
.brand{
    display:inline-flex;
    align-items:center;
    flex-shrink:0;
    text-decoration:none;
}
.brand-logo{
    display:flex;
    align-items:center;
}
.brand-logo img{
    width:250px;
    max-height:114px;
    object-fit:contain;
}
.desktop-nav{
    display:flex;
    align-items:center;
    gap:clamp(18px,2.5vw,38px);
}
.desktop-nav a,
.phone{
    color:#f4f5f1;
    font-size:17px;
    font-weight:600;
    transition:color 0.2s ease;
    text-decoration:none;
}
.desktop-nav a:hover,
.phone:hover{
    color:#ed3434;
}
.header-contact{
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    gap:7px;
}
.header-cta{
    color:#d7d9d3;
    font-size:15px;
    text-decoration:none;
}
.header-cta span{
    color:#ed3434;
    margin-left:5px;
}
.menu-toggle,
.mobile-nav{
    display:none;
}
@media (max-width:1000px){
    .container{
        width:calc(100% - 48px);
    }
    .header-inner{
        min-height:88px;
        gap:18px;
    }
    .desktop-nav{
        gap:17px;
    }
    .desktop-nav a,
    .phone{
        font-size:16px;
    }
    .header-cta{
        font-size:14px;
    }
    .brand-logo img{
        width:180px;
    }
}
@media (max-width:760px){
    .container{
        width:calc(100% - 40px);
    }
    .topbar-inner{
        min-height:33px;
    }
    .topbar-inner>span{
        max-width:60%;
        font-size:12px;
    }
    .topbar-right{
        gap:0;
    }
    .topbar-right>span{
        display:none;
    }
    .topbar,
    .topbar a{
        font-size:12px;
    }
    .header-inner{
        min-height:76px;
    }
    .desktop-nav,
    .header-contact{
        display:none;
    }
    .menu-toggle{
        width:42px;
        height:42px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:6px;
        border:1px solid rgba(255,255,255,.35);
        background:transparent;
        cursor:pointer;
    }
    .menu-toggle span{
        width:17px;
        height:1px;
        background:#fff;
    }
    .mobile-nav{
        display:flex;
        flex-direction:column;
        gap:0;
        padding:4px 20px 18px;
        background:#252c2e;
        color:#fff;
        border-top:1px solid rgba(255,255,255,.14);
    }
    .mobile-nav a{
        padding:13px 0;
        border-bottom:1px solid rgba(255,255,255,.14);
        font-size:16px;
        text-decoration:none;
        color:#fff;
    }
    .brand-logo img{
        width:160px;
        max-height:52px;
    }
}
@media (max-width:420px){
    .container{
        width:calc(100% - 32px);
    }
    .topbar-inner>span{
        max-width:58%;
        font-size:10px;
    }
    .header-inner{
        min-height:70px;
    }
    .brand-logo img{
        width:140px;
    }
}
</style>