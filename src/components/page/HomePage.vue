<template>
    <div class="picture" :style="backgroundDiv"></div>
</template>

<script>
    export default {
        data() {
            return {
                backgroundDiv: {
                    backgroundImage: 'url(' + require('../../assets/img/bg.png') + ')'
                }
            }
        }
    }
</script>

<style>
    .picture {
        height: 100%;
        width: 100%;
        background: no-repeat center top;
        background-size: contain;
    }
</style>
