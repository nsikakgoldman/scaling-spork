<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
</script>

<script>
import img from '../assets/kun-x_logo.svg'
export default {
    data() {
        return {
            logo_image : img,
            
        }
    },
    methods : {
        scrollIntoView(id) {
            var elem = document.getElementById(id);
            elem.scrollIntoView();
        }
    }
}
</script>

<template>
    <div class="container px-5 text-center">
        <div class="col-12">
                </div>
            <div>
                <nav class="navbar navbar-expand-lg bg-transparent">
                    <div class="container">
                        <RouterLink to="/" class="navbar-brand kun-x_nav-btn kun-x_ld-nav-txt-sz">
                            <img :src="logo_image">
                        </RouterLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <!-- <RouterLink to="/about" class="nav-link active kun-x_nav-btn kun-x_ld-nav-txt-sz" aria-current="page">Service</RouterLink> -->
                                <a href="#service" @click="scrollIntoView('service')" class="nav-link active kun-x_nav-btn kun-x_ld-nav-txt-sz" aria-current="page" >Service</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active kun-x_nav-btn kun-x_ld-nav-txt-sz" @click="scrollIntoView('support')" href="#how-it-works">How it works</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active kun-x_nav-btn kun-x_ld-nav-txt-sz" @click="scrollIntoView('pricing')" href="#pricing">Pricing</a>
                            </li>
                        </ul>
                            
                            <span class=" active me-3 kun-x_nav-btn" id="login-btn">
                                Log In
                            </span>
                            <span class=" active">
                                <button type="button" class="btn btn-primary kun-x_nav-btn" id="open-account">Open an account</button> 
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
</template>


<style>
.kun-x_ld-nav-txt-sz {
     font-size: 24px; 
}
.kun-x_nav-btn {
    font-family: "Kaisei Tokumin";
    font-weight: 700;
}
#login-btn {
    font-size: 32px;
    
}
#open-account {
    font-size: 20px;
}
</style>