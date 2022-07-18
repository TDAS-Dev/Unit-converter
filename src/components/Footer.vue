<template>
    <div class="bg-[#1D2939] md:px-[112px] sm:px-[16px] pb-[48px] md:pt-[64px] sm:pt-[48px] w-full">
        <div class="flex md:flex-row sm:flex-col-reverse md:justify-between">
            <div class="md:grow sm:grow:none md:pr-[100px]">
                <FooterList />
            </div>
            <div class="flex flex-col">
                <h1 class="font-inter text-[#ffffff] font-[600] text-[14px] leading-[20px] mb-[20px]"> Get the App</h1>
                <div class="flex md:flex-col sm:flex-row sm:gap-x-[16px]">
                    <div v-bind:class="divIconStyle">
                        <div class="flex flex-col">
                            <h2 v-bind:class="h2Iconstyle">Download on the</h2>
                            <h1 v-bind:class="h1IconStyle">App Store</h1>
                        </div>
                    </div>
                    <div v-bind:class="divIconStyle">
                        <div class="flex flex-col">
                            <h2 v-bind:class="h2Iconstyle">GET IT ON</h2>
                            <h1 v-bind:class="h1IconStyle">Google Play</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- FooterBase start -->
        <div class="flex md:justify-between md:items-center md:flex-row sm:flex-col md:pt-[32px] sm:pt-[32px] md:px-[112px] sm:px-[16px] border-t-[0.5px] border-t-[#3f4859]">
            <div class="flex items-center cursor-pointer">
                <div class="relative flex justify-center items-center aspect-square w-[32px] border-[0.2px] border-[#D0D5DD] bg-gradient-to-b from-[#FFFFFF] to-[#D0D5DD] rounded-[8px]">
                    <div class="absolute top-[16px] w-[32px] h-[16px] rounded-b-[8px] backdrop-blur-[5px] bg-gray-100 opacity-50 shadow-[0_1px_3px_rgba(16,24,40,0.1)_0_1px_2px_rgba(16,24,40,0.06)]"></div>
                    <div class="flex justify-center items-center aspect-sqare w-[28.08px] rounded-[50%] bg-[#D0D5DD] border-[0.1px]">
                        <div class="aspect-square w-[16px] rounded-[50%] bg-gradient-to-b from-[#53389E] to-[#6941C6]"></div>
                    </div>
                </div>
                <h1 class="ml-[9.83px] font-inter text-white font-semibold text-[16px]">Untitled UI</h1>
            </div>
            <h1 class="font-inter text-[#98A2B3] font-[400] text-[16px] leading-[24px] sm:mt-[24px]">
                © 2077 Untitled UI. All rights reserved.
            </h1>
        </div>
        <!-- FooterBase end -->
    </div>
</template>

<script>

import FooterList from "./FooterList"

export default {
  name: 'Footer',
  data(){
    return{
        iconStyle : "text-[#ffffff] md:text-[32px] sm:text-[28px] mr-[6px]",
        h2Iconstyle : "font-inter text-[#ffffff] font-[600] md:text-[10px] sm:text-[8px] leading-[16px]",
        h1IconStyle : "font-inter text-[#ffffff] font-[500] md:text-[18px] sm:text-[16px] leading-[28px]",
        divIconStyle : "flex items-center border-[1px] border-[#fffff] rounded-[8px] mb-[20px] md:pl-[5px] sm:pl-[4px] md:py-[3px] sm:py-[2px] md:w-[160px] sm:w-[150px]",
    }
  },
  components : { FooterList },
}

</script>

