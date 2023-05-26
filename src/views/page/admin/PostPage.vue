<template>
    <div class="post page q-pa-md">

        <q-banner v-for="item in posts" class="bg-grey-3 q-mb-md">
            <h3 class="title">{{ item['title'] }}</h3>
            <div class="author">{{ item['User']['username'] }} | {{ item['createdAt'].substring(0, 10) }}</div>
            <v-md-editor :model-value="item['body']" mode="preview"></v-md-editor>
            <template v-slot:action>
                <q-btn flat color="red" label="删除" @click="removePost(item['uuid'])"/>
                <q-btn flat color="blue" label="编辑" :to="'/admin/edit/'+item['uuid']"/>
            </template>
        </q-banner>

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
import {postList, remove} from '@/api/post'
import Notify from '@/utils/notify'

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
        size: 3
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
}

const removePost = (uuid) => {
    remove(uuid).then(
        response => {
            Notify.notifySuccess('资源已删除')
            onRequest(1)
        },
        error => {
            if (error.response) {
                console.log(error.response.data)
                Notify.notifyFailure(error.response.data['err_msg'])
            } else {
                Notify.notifyFailure('请求已发出，但未收到服务器的任何响应，请检查你的网络情况以及后端服务器的在线状态')
            }
        }
    )
}
</script>

<style scoped lang="sass">
.title
  margin: 12px 0

.author
  margin-bottom: 16px
  color: gray

</style>