<template>
    <div class="song">
        <a @click="previousRoute">Back</a>
    </div>
</template>

<script>
export default {
    methods: {
        previousRoute(){
            this.$router.back()
        }
    },
}
</script>

<style scoped>

</style>