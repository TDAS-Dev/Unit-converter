<template>
    <nav class="flex items-center justify-between md:h-[80px] sm:h-[72px] border-b-[1px] border-b-[#F2F4F7] md:px-[112px] sm:pl-[20px] sm:pr-[23px]">
        <div class="flex items-center">
            <Logo />
            <div class="md:flex sm:hidden font-inter space-x-[32px] ml-[40.73px]">
                <a href="/" v-bind:class="aStyle">Home</a>
                <a href="/" v-bind:class="aStyle">Resources</a>
                <a href="/" v-bind:class="aStyle">Resources</a>
                <a href="/" v-bind:class="aStyle">Pricing</a>
            </div>
        </div>
        <div class=" md:flex sm:hidden flex items-center">
            <a href="/" v-bind:class="aStyle">Log in</a>
            <button class="ml-[30px] text-white font-500 text-[16px] bg-[#7F56D9] rounded-[8px] px-[18px] py-[10px]">Sign up</button>
        </div>
    </nav>

</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'NavBar',
  components : { Logo },
  data() {
    return {
            aStyle: "text-[16px] font-[500] text-[#667085]"
        }
    }
}

</script>

