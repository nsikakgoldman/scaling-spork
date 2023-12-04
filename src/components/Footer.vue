<script>

export default {
    name: 'FooterComponent',
    data() {
        return {
            foot_link : [{id:1}, {id:2}, {id:3}, {id:4}, {id:5}]
        }
    }
}
</script>

<template>
    <div class="col-12 col-lg-3">
        <p 
            class="text-lg-center text-left"
            style="
                font-family: Kaisei Tokumin;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
        ">Lorem Ipsum</p>
        <p
            v-for="x in foot_link"
            :key="x.id"
            class="text-lg-center text-left"
            style="
                font-family: Kaisei Tokumin;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            ">Lorem ipsum
        </p>
    </div>
</template>