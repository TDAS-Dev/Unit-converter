<template>
    <div className="py-[32px] px-[24px] border-[1px] border-[rgba(255,255,255,0.5)] md:w-[341px] md:h-[233px] sm:w-[295px] sm:h-[220px] bg-[rgba(255,255,255,0.3) backdrop-blur-[24px]">
        <h2 className="md:text-[60px] sm:text-[48px] font-[600] text-[#FFFFFF] md:leading-[72px] sm:leading-[60px]">
            {{main}}
        </h2>
        <h3 className="md:text-[18px] font-[600] text-[#FFFFFF] md:leading-[28px] mt-[12px]">
            {{sub1}}
        </h3>
        <p className="md:text-[16px] font-[400] text-[#FFFFFF] leading-[24px] mt-[8px]">
            {{sub2}}
        </p>
    </div>
</template>

<script>

export default {
    name: 'AccoladesCard',
    props: {
        main:{
            type: String,
            required: true,
        },
        sub1:{
            type: String,
            required: true,
        },
        sub2:{
            type: String,
            required: true,
        },
    }
}

</script>

