<template>
    <div class="index">
        <div class="head">
            <Header class="header-content"/>
        </div>

        <div class="main">
            <div class="content">
                <RouterView/>
            </div>

            <div class="side">
                <InfoCard title="关于" content="👋 你好，我是@影歌，"/>
            </div>
        </div>
        <div class="foot">
            <Footer class="footer-content"/>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import InfoCard from '@/components/InfoCard.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped lang="sass">
.head
  padding-top: 160px
  background-color: #7149C6
  background-image: url("/images/background.png")
  background-position: center
  background-size: cover

.header-content,
.footer-content
  max-width: 1200px
  margin: auto
  padding: 16px

.main
  max-width: 1200px
  margin: auto
  display: flex

.content
  flex: 1

.side
  padding: 0 50px
  width: 340px

.foot
  margin-top: 50px
  min-height: 300px
  background-color: #262626

@media screen and (max-width: 680px)
  .main
    display: block
  .side
    width: 100%
</style>