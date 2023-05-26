<template>
    <div class="InfoCard">
        <h6 class="title">{{ title }}</h6>
        <p class="content">{{ content }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

</script>

<style scoped lang="sass">
.title
  margin-bottom: 0
  font-weight: bold
  font-size: 24px
  line-height: 200%

.content
  font-size: 18px
</style>