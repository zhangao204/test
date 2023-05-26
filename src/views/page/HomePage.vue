<template>
    <div class="home-page">
        <h3>博客</h3>

        <div class="post-list">
            <div class="post-item" v-for="item in posts">
                <router-link :to="'/post/'+item['uuid']">
                    <h3 class="title">{{ item['title'] }}</h3>
                </router-link>
                <v-md-editor class="preview" :model-value="item['body']" mode="preview"></v-md-editor>
            </div>
        </div>

        <div class="q-pa-lg flex flex-center">
            <q-pagination
                    v-model="current"
                    :max="max"
                    @update:model-value="update"
            />
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {postList} from '@/api/post'

const current = ref(1)
const max = ref(1)
const posts = ref([])

onMounted(() => {
    onRequest(1)
})

const update = (value) => {
    onRequest(value)
}

const onRequest = (page) => {
    const filter = {
        page,
        size: 6
    }
    postList(filter).then(
        response => {
            const result = response.data
            const pagination = result['pagination']
            const currentPosts = result['posts']
            max.value = Math.ceil(pagination['recordCount'] / pagination['pageSize'])
            current.value = Number(pagination['currentPage'])
            posts.value = currentPosts
        },
        error => {

        }
    )
}</script>

<style scoped lang="sass">
.ad
  margin-bottom: 30px
  position: relative
  padding: 30px
  font-size: 32px
  color: white
  background: #3967ff

.post-item
  padding-bottom: 20px
  max-height: 300px
  overflow: hidden
  border: 3px dashed gray
  margin-bottom: 24px
  position: relative

.post-item:after
  content: ''
  position: absolute
  left: 0
  bottom: 0
  width: 100%
  height: 40px
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 80%)
  z-index: 99999

.title
  text-align: center
  margin: 12px 0 0 0
  font-size: 26px

.home-page
  padding: 18px
</style>