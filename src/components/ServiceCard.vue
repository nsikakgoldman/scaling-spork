<script>

const services = [{title: "Speed"},{title: "Security"}, {title: "Efficiency"}, {title: "Support"}];
export default {
    data() {
            return {
                services
            }
    }
}
</script>

<template>
    <div class="col-12">
        <div class="row">
            <div class="col-6" v-for="x in services" :key="x.title" >
                <div class="card border-0 bg-transparent mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4 border-1 bg-info rounded">
                    <img src="" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{x.title}}</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi justo, euismod quis nulla vitae.</p>
                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>