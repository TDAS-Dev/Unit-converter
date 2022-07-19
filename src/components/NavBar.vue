<template>
    <nav class="flex items-center justify-between md:h-[80px] sm:h-[72px] border-b-[1px] border-b-[#F2F4F7] md:px-[32px] sm:pl-[20px] sm:pr-[23px]">
        <Logo />
    </nav>
</template>

<script>
import Logo from './Logo.vue'

export default {
    name: 'NavBar',
    components : { Logo },
}

</script>

