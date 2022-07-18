<template>
    <div class="md:py-[96px] sm:py-[64px] md:px-[208px] sm:px-[16px] text-center">
        <h1 class="md:text-[36px] sm:text-[30px] font-[500] text-[#101828] sm:px-[16px] md:leading-[60px] sm:leading-[30px]">
            Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.
        </h1>
        <div class="flex flex-col items-center mt-[32px]">
            <img v-bind:src=maggi alt="avatar" class="w-[64px] h-[64px] rounded-full" />
            <h2 class="text-[18px] font-[500] text-[#101828] sm:px-[16px] leading-[28px] md:mt-[16px] text-center">Kelly Williams</h2>
            <h2 class="text-[16px] font-[400] text-[#101828] sm:px-[16px] leading-[24px] md:mt-[4px] text-center">Head of Design, Layers</h2>
        </div>
        <div class="flex justify-center gap-x-[16px] mt-[39.5px]">
            <div class="w-[10px] aspect-square rounded-full bg-[#6941C6]"></div>
            <div class="w-[10px] aspect-square rounded-full bg-[#F2F4F7]"></div>
            <div class="w-[10px] aspect-square rounded-full bg-[#F2F4F7]"></div>
        </div>
    </div>
</template>

<script>
import maggi from "../assets/maggi.jpg"

export default {
  name: 'Feedback',
  data() {
    return {
        maggi: maggi
    }
  }
}

</script>

