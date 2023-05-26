<template>
    <div class="header">
        <div class="logo">
            <q-avatar size="60px">
                <img class="avatar" src="https://avatars.githubusercontent.com/u/109642163?v=4" alt="avatar">
            </q-avatar>
            <router-link to="/" style="text-decoration: none">
                <div class="text-h2 title">影歌 | SHADOWSONG</div>
            </router-link>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="sass">
.header
  display: flex
  align-items: center
  justify-content: space-between

.logo
  display: flex
  align-items: center

.title
  margin-left: 16px
  font-weight: bold
  font-size: 26px
  color: white

.avatar
  border: 3px solid white
  padding: 3px
</style>