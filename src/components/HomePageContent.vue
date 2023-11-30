<script setup>
import ServiceCard from './ServiceCard.vue'
import QuickSignUpFormField from './QuickSIgnUpFormField.vue'
import SecondSectionSubtitle from './SecondSectionSubtitle.vue'
import SupportCard from './SupportCard.vue'
import FooterComponent from './Footer.vue'
</script>

<script>
import aircraft from '../assets/nick-morales-BwYcH78rcpI-unsplash 1aircraft.png'

export default {
    data() {
        return {
            aircraft,
        }
    }
}
</script>

<template>
    <div class="container" >
        <div class="row">
        <div class="col-12" style="margin-top: 66px;"></div>
        <div class="col-6 mt-5">
            <div class="col-12 kun-x_main-text">
                There’s nothing more 
Precious than time so
save it
            </div>
            <div class="col-12 kun-x_sub-text" style="margin-top: 36px;" >
                We are determined to deliver swiftly and 
safely.
            </div>
            
            <a href="#" class="btn btn-primary" style="color: #000;
                    font-family: Kaisei Tokumin;
                    font-size: 32px;
                    font-style: normal;
                    font-weight: 700;
                    width: 393px;
                    height: 88px;
                    flex-shrink: 0;
                    margin-top: 83px;
                    padding-top: 21px;
                    padding-left: 73;
                    padding-bottom: 21;
                    padding-right: 73;
                    border-radius: 15px;
                    background: #2864BF;
                    line-height: normal;">Open an account</a>
        </div>
        <div class="col-6">
            <img :src="aircraft" alt="">
        </div>
        
        </div>
    </div>
    <!-- the line after the advert part -->
    <div style="margin-top: 133px; background-color: transparent;">
        <hr>
    </div>
    <div class="container" id="service" style="padding-top: 107px;">
        <div class="row">
            <P class="text-center kun-x_main-text" >Our service is to keep you convenient </P>
            <P class="text-center kun-x_sub-text" style="font-size: 20px !important;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi justo, euismod quis nulla vitae, placerat pellentesque eros. Duis fermentum rutrum mollis</P>
            <div class="" style="margin-top: 64px;"></div>
            <ServiceCard />
        </div>
    </div>
    <div style="margin-top: 161px;" >
        <hr>
    </div>
    <div class="container" id="pricing" style="padding-top: 100px;">
        <div class="row">
            <div class="col-6 kun-x_main-text">
                Lorem Ipsum consectetur adipiscing elit
                <SecondSectionSubtitle />
                <SecondSectionSubtitle />
                <SecondSectionSubtitle />
                <SecondSectionSubtitle />
            </div>
            <div class="col-6 p-4" style="border-radius: 15px;
                height: 100%;
                background: #D9D9D9; ">
                <p style="
                    font-family: Kaisei Tokumin;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                    margin-bottom: 7px;
                    line-height: normal;" >New Payment</p>
                <QuickSignUpFormField />
                <QuickSignUpFormField />
                <QuickSignUpFormField />
                <div style="margin-top: 61;" class="row p-4">
                    <div class="col-6">
                        <a href="#" class="btn btn-primary ms-5" style="
                            font-family: Kaisei Tokumin;
                            font-size: 20px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: normal;
                            flex-shrink: 0;
                            flex-shrink: 0;
                            padding-top: 23px;
                            padding-bottom: 25px;
                            padding-left: 46px;
                            padding-right: 46px;
                            ">New Payment
                        </a>
                    </div>
                    <div class="col-6">
                        <a href="#" class="btn btn-primary ms-5" style="
                            font-family: Kaisei Tokumin;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: normal;
                            flex-shrink: 0;
                            flex-shrink: 0;
                            padding-top: 31px;
                            padding-bottom: 23px;
                            padding-left: 20px;
                            padding-right: 20px;
                            ">Scheduled Payment
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="margin-top: 0px;" >
        <hr>
    </div> 
    <div class="container" id="support">
        <div class="row">
            <div class="col-12" style="margin-bottom: 30px;">
                <p class="kun-x_main-text">Lorem Ipsum consectetur adipiscing <br> elit</p>
            </div>
            <SupportCard />
            <SupportCard />
            <SupportCard />
        </div>
    </div>
    <div style="margin-top: 200px;" >
        <hr>
    </div>
    <div class="container" style="padding-top: 48px;" >
        <div class="row">
            <FooterComponent />
            <FooterComponent />
            <FooterComponent />
            <FooterComponent />
            <div class="col-2"></div>
            <div class="col-2" 
                style="margin-top: 48px;
                    margin-bottom: 13px;
                " >
                <i class="fa-brands fa-twitter fa-2xl"></i>
            </div>
            <div class="col-12"></div>
            <p 
                class="text-center col-4"
                style="
                    color: #000;
                    font-family: Kaisei Tokumin;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;">Lorem ipsum dolor </p>
        </div>
    </div>
</template>

<style>
.kun-x_main-text {
  font-family: Kaisei Tokumin;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}
.kun-x_sub-text {
font-family: Kaisei Tokumin;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
</style>