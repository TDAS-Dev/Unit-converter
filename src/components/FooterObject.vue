<template>
    <div class="flex flex-col text-white gap-y-[12px] sm:mb-[32px]">
        <h1 class="font-[600] text-[14px] leading-[20px] text-[#98A2B3] mb-[16px]">{{header}}</h1>
        <p v-bind:class="pStyle">{{text1}}</p>
        <p v-bind:class="pStyle">{{text2}}</p>
        <div class="flex">
            <p v-bind:class="pStyle">{{text3}}</p>
            <p
                class="text-center text-[12px] font-[500] text-[#FFFFFF] leading-[18px] py-[2px] px-[8px] bg-white opacity-30 rounded-[16px] ml-[8px] border-[rgba(255, 255, 255, 0.3)] border-[1px]">
                New
            </p>
        </div>
        <p v-bind:class="pStyle">{{text4}}</p>
        <p v-bind:class="pStyle">{{text5}}</p>
        <p v-bind:class="pStyle">{{text6}}</p>
    </div>
</template>

<script>

export default {
  name: 'FooterObject',
  data() {
    return {
        pStyle : "font-[500] text-[16px] leading-[24px] text-[#EAECF0]",
    }
  },
  props: {
        header:{
            type: String,
            required: true,
        },
        text1:{
            type: String,
            required: true,
        },
        text2:{
            type: String,
            required: true,
        },
        text3:{
            type: String,
            required: true,
        },
        text4:{
            type: String,
            required: true,
        },
        text5:{
            type: String,
            required: true,
        },
        text6:{
            type: String,
            required: true,
        },
        new:{
            type: String,
            required: true,
        },
    }
}

</script>

