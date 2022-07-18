<template>
    <div class="md:flex md:justify-between sm:grid sm:grid-cols-2 sm:">
        <div v-for="(item, index) in footerItems" v-bind:key="index">
            <FooterObject
                v-bind:header ="item.header"
                v-bind:text1 ="item.text1"
                v-bind:text2 ="item.text2"
                v-bind:text3 ="item.text3"
                v-bind:text4 ="item.text4"
                v-bind:text5 ="item.text5"
                v-bind:text6 ="item.text6"
                v-bind:new ="item.new"
            />
        </div>
    </div>
</template>

<script>

import FooterObject from "./FooterObject.vue"

export default {
    name: 'FooterList',
    data(){
        return {
            footerItems : []
        }
    },
    async created() {
        fetch("https://bafybeiahiqh2awz2foy3z5i7gwjgowrqldmpsuz3m6d6cbetenp54cd5ue.ipfs.infura-ipfs.io/", {method : "get"})
            .then(response => response.json())
            .then(json => this.footerItems = json.Footer)
            .catch(err => console.log(err.message))
    },
    components : { FooterObject },
}

</script>

