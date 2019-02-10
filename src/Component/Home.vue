<template>
    <div>
        <ServerStatus v-for="set in 10"></ServerStatus>
    </div>
</template>

<script>
import ServerStatus from './ServerStatus'
export default {
    components:{
        'ServerStatus':ServerStatus
    }
}
</script>

