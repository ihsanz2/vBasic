<template>
    <ul>
        <li><h2>Server Status : {{status}}</h2>
        <br>
        <button @click="changeStatus">changeStatus</button></li>
    </ul>
</template>

<script>
export default {
    data:function(){
        return{
            status:'Critical'
        }
    },
    methods:{
        changeStatus(){
            this.status='Normal'
        }
    }
}
</script>

