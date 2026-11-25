<template>
	<div class="inner-page">
		<main>
			<section class="inner-hero">
				<div class="container admin-header">
					<div>
						<span class="page-kicker">07 / АДМИН-ПАНЕЛЬ</span>
						<h1>Заявки<span>.</span></h1>
					</div>
					<button @click="logout" class="logout-btn">Выйти</button>
				</div>
			</section>

			<section class="inner-section">
				<div class="container">
					<div class="page-heading">
						<span>ИСТОРИЯ ЗАЯВОК</span>
						<span>ВСЕГО: {{ requests.length }}</span>
                        <button class="btn" @click="showallrequests()">
                            {{showflag?'Активные':'Архив'}}
                        </button>
					</div>

					<div class="admin-grid">
						<article v-for="(req,index) in requests":key="req.id" class="admin-card">
							<div class="admin-card-header">
								<span class="req-id"># {{ index+1 }}</span>
								<span class="req-date">{{ new Date(req.createdAt).toLocaleDateString('ru-RU') }}</span>
							</div>
							<div class="admin-card-body">
								<h3>{{ req.name }}</h3>
								<div class="req-contacts">
									<a :href="`tel:${req.phone}`">{{ req.phone }}</a>
									<a :href="`mailto:${req.email}`">{{ req.email }}</a>
								</div>
								<p class="req-message">{{ req.message }}</p>
                                <button class="btn" @click="changestatus(req.id)">В архив</button>
							</div>
						</article>
						
						<div v-if="requests.length===0" class="empty-state">
							Заявок пока нет.
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'

const router=useRouter()
const requests=ref<any[]>([])
const showflag=ref(true)

const logout=()=>{
    localStorage.removeItem('token')
    router.push('/login')
}

const showallrequests=async()=>{
    try{
        showflag.value=!showflag.value

        const response=await axios.get('http://localhost:5178/api/requests',{
            params:{choice:showflag.value?'1':'2'}
        })

        requests.value=response.data
    }catch(error){
        console.error(error)
    }
}

const getrequests=async()=>{
    try{
        const response=await axios.get('http://localhost:5178/api/requests',{
            params:{choice:'1'}
        })
        requests.value=response.data
    }catch(error){
        console.error(error)
    }
}

const changestatus=async(id:number)=>{
    try{
        const response=await axios.put(`http://localhost:5178/api/change/${id}`,{status:'archived'})
        getrequests()
    }catch(error){
        console.error(error)
    }
}

const deletefrombd=async(id:number)=>{
    try{
        const response=await axios.delete(`http://localhost:5178/api/deletefrombd/${id}`)
        getrequests()
        console.log('success deleted')
    }catch(error){
        console.error(error)
    }
}

onMounted(()=>{
    getrequests()
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
    padding:65px 0 36px;
}
.admin-header{
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
}
.page-kicker{
    font-size:13px;
    letter-spacing:.14em;
    color:#c5c8c0;
    font-weight:700;
}
.inner-hero h1{
    margin:20px 0 0;
    font-size:clamp(36px,5vw,60px);
    font-weight:500;
    letter-spacing:-.06em;
}
.inner-hero h1 span{
    color:#ed3434;
}
.logout-btn{
    padding:12px 24px;
    background:transparent;
    border:1px solid rgba(255,255,255,0.3);
    color:#fff;
    font-family:inherit;
    font-size:14px;
    cursor:pointer;
    transition:all .2s;
}
.logout-btn:hover{
    background:#ed3434;
    border-color:#ed3434;
}
.inner-section{
    padding:50px 0 80px;
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
.admin-grid{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:24px;
    margin-top:30px;
}
.admin-card{
    background:#fff;
    border:1px solid #dedfd9;
    padding:24px;
    display:flex;
    flex-direction:column;
}
.admin-card-header{
    display:flex;
    justify-content:space-between;
    font-size:12px;
    color:#777a73;
    font-weight:700;
    margin-bottom:15px;
}
.req-id{
    color:#ed3434;
}
.admin-card-body h3{
    margin:0 0 10px;
    font-size:20px;
    font-weight:500;
}
.req-contacts{
    display:flex;
    flex-direction:column;
    gap:5px;
    margin-bottom:15px;
}
.req-contacts a{
    color:#292c28;
    text-decoration:none;
    font-size:14px;
    transition:color .2s;
}
.req-contacts a:hover{
    color:#ed3434;
}
.req-message{
    margin:0 0 20px;
    color:#777a73;
    font-size:14px;
    line-height:1.6;
    flex-grow:1;
}
.admin-card-footer{
    display:flex;
    gap:10px;
    margin-top:auto;
}
.action-btn{
    padding:10px 16px;
    border:none;
    font-family:inherit;
    font-size:12px;
    font-weight:700;
    cursor:pointer;
    transition:opacity .2s;
}
.action-btn:hover{
    opacity:0.8;
}
.action-btn.done{
    background:#e9eae4;
    color:#292c28;
}
.action-btn.delete{
    background:#fff;
    border:1px solid #ed3434;
    color:#ed3434;
}
.empty-state{
    padding:50px;
    text-align:center;
    color:#777a73;
    border:1px dashed #dedfd9;
}
@media (max-width:768px){
    .admin-grid{
        grid-template-columns:1fr;
    }
}
</style>