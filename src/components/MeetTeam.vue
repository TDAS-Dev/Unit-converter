<template>
    <div class="md:py-[96px] sm:py-[64px] md:px-[112px] sm:px-[16px]">
        <h2 class="text-[36px] font-[700] text-[#101828] sm:px-[16px] md:leading-[60px] sm:leading-[44px] text-center">Meet our team</h2>
        <p class="text-[20px] font-[400] text-[#667085] md:mt-[20px] sm:mt-[16px] md:leading-[30px] sm:leading-[28px] md:px-[336px] sm:px-[16px] text-center">
            Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.
        </p>
        <div class="flex md:flex-row sm:flex-col-reverse md:justify-center md:mt-[40px] sm:mt-[32px] text-center">
          <button class="text-[#344054] font-500 text-[16px] bg-none rounded-[8px] md:px-[20px] py-[12px] border-[1px] md:mr-[12px] border-[#D0D5DD] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">Read our principles</button>
          <button class="text-white font-500 text-[16px] bg-[#7F56D9] rounded-[8px] md:px-[20px] py-[12px] sm:mb-[12px] md:mb-0">We’re hiring!</button>
        </div>
        <section >
            <div v-if="members.length"
                class="md:grid md:grid-cols-3 sm:flex sm:flex-col sm:items-center md:gap-x-[32px] md:gap-y-[64px] sm:gap-y-[24px] md:pt-[64px] sm:pt-[48px]">
                <div v-for="(member, index) in members" v-bind:key="index">
                    <TeamMember
                        v-bind:Name ="member.Name"
                        v-bind:Position ="member.Position"
                        v-bind:Roles ="member.Roles"
                        v-bind:Image ="member.Image"
                    />
                </div>
            </div>
            <div v-else
                class="md:grid md:grid-cols-3 sm:flex sm:flex-col sm:items-center md:gap-x-[32px] md:gap-y-[64px] sm:gap-y-[24px] md:pt-[64px] sm:pt-[48px]"
            >
                <p> Loading Data...</p>
            </div>
        </section>
    </div>
</template>

<script>

import TeamMember from './TeamMember.vue'

export default {
    name: 'MeetTeam',
    components : { TeamMember },
    data(){
        return {
            members : []
        }
    },
    async created() {
        fetch("https://bafybeiahiqh2awz2foy3z5i7gwjgowrqldmpsuz3m6d6cbetenp54cd5ue.ipfs.infura-ipfs.io/", {method : "get"})
            .then(response => response.json())
            .then(json => {
                console.log(json.TeamMembers)
                this.members = json.TeamMembers})
            .catch(err => console.log(err.message))
    }
}

</script>

