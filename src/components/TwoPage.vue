<template>
    <div>
        
        <el-input v-model="hot"></el-input>
        <el-button @click="doyouseeme">喜欢你哦</el-button>

    </div>
</template>


<script>
export default {
    name: 'TwoPage',

    methods:{
        doyouseeme() {
this.$emit('LOVE',{color:'colorful'})//子向父传
        }
    },

    data() {
        return {
           hot:''
        }
    },

    mounted() {
        
    }



}
</script>


<style>
</style>