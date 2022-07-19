<template>
    <div class="md:py-[96px] sm:py-[64px] md:px-[64px] sm:px-4 text-center">
        <h2 class="md:text-[30px] sm:text-[30px] font-[500] text-[#d73030] sm:px-[16px] md:leading-[38px] sm:leading-[30px]">
            {{remValue}} rem
        </h2>
        <h2 class="md:text-[30px] sm:text-[30px] font-[500] text-[#d73030] sm:px-[16px] md:leading-[38px] sm:leading-[30px]">
            {{tailwindRemValue}} tailwindRem
        </h2>
        <div class="flex flex-col items-center mt-[32px]">
            <label for="name" class="md:text-[14px] font-[500] text-[#344054] md:leading-[20px] mb-[6px]">Pixel Value</label>
            <input id="name" type="number" :class="inputBox" v-model="pxValue">
            <button class="text-white font-500 text-[16px] bg-[#7F56D9] rounded-[8px] py-[10px] w-[100%] sm:mb-[12px] mt-[16px]" @click="calcRemValue">
                Calculate
            </button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Feedback',
  data(){
    return {
        inputBox : "md:text-[16px] font-[400] text-[#667085] md:leading-[24px] pl-[14px] py-[10px] rounded-[8px] border-[#D0D5DD] border-[1px] shadow-[0_1px_2px_rgba(16,24,40,0.05)] text-center",
        remValue : "",
        tailwindRemValue : "",
        pxValue : "",
    }
  },
  methods : {
    calcRemValue() {
        this.remValue = this.pxValue / 16
        this.tailwindRemValue = this.pxValue / 4
    }
  }
}

</script>

