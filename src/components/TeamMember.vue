<template>
    <div v-bind:class="imageStyle">
        <img v-bind:src="Image"
            alt=""
            class="absolute top-0 left-0 md:h-[480px] md:w-[384px] sm:h-[432px] sm:w-[343px] object-cover"
        />
        <div class="py-[24px] md:px-[20px] sm:px-[16px] border-[1px] border-[rgba(255,255,255,0.5)] md:w-[336px] md:h-[238px] sm:w-[311px] sm:h-[204px] bg-[rgba(255,255,255,0.3)] backdrop-blur-[24px]">
            <h1 class="md:text-[30px] sm:text-[24px] font-[600] text-[#FFFFFF] md:leading-[38px] sm:leading-[32px]">{{Name}}</h1>
            <h2 class="md:text-[18px] sm:text-[16px] font-[600] text-[#FFFFFF] md:leading-[28px] sm:leading-[24px] mb-[4px]">{{Position}}</h2>
            <p class="md:text-[16px] sm:text-[14px] font-[400] text-[#FFFFFF] md:leading-[24px] sm:leading-[20px] md:mb-[32px] sm:mb-[24px]">{{Roles}}</p>
        </div>
    </div>
</template>

<script>

export default {
  name : 'TeamMember',
    data(){
        return {
            imageStyle : "relative flex items-end md:h-[480px] md:w-[384px] sm:h-[432px] sm:w-[343px] bg-no-repeat bg-cover bg-center md:p-[24px] sm:p-[16px]",
        }
    },
    props: {
        Name:{
            type: String,
            required: true,
        },
        Position:{
            type: String,
            required: true,
        },
        Roles:{
            type: String,
            required: true,
        },
        Image:{
            type: String,
            required: true,
        }
    }
}

</script>

