<template>
    <div class="detail-page">
        <h4 class="text-center">{{ post['title'] }}</h4>
        <v-md-editor class="preview" :model-value="post['body']" mode="preview"></v-md-editor>
        <hr>
        <div class="comment">
            <h5 class="q-ma-none q-mb-md">发表评论</h5>
            <q-input square outlined v-model="comment['email']" label="邮箱"/>
            <br>
            <q-input
                    v-model="comment['body']"
                    square
                    outlined
                    type="textarea"
                    placeholder="评论内容"
            />
            <br>
            <q-btn @click="createComment" class="float-right" square outline label="发表评论"/>
        </div>

        <div class="comment-list">
            <h5 class="q-mb-md">全部评论</h5>
            <div v-for="item in comments" class="comment-item">
                {{ item['body'] }}
            </div>
        </div>

    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {detail} from '@/api/post'
import {commentList, create} from '@/api/comment'
import Notify from '@/utils/notify'

const props = defineProps({
    uuid: {
        type: String
    }
})

const post = ref({
    uuid: props.uuid,
    title: '',
    body: '',
    createdAt: '',
    updatedAt: ''
})

const comment = ref({
    postUUID: props.uuid,
    email: '',
    body: ''
})

const comments = ref([])

onMounted(() => {
    detail(post.value['uuid']).then(
        response => {
            post.value = response.data
        }
    )

    getComments()
})

const createComment = () => {
    create(comment.value).then(
        response => {
            Notify.notifySuccess('评论成功')
            getComments()
            comment.value['body'] = ''
            comment.value['email'] = ''
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

const getComments = () => {
    commentList({postUUID: props.uuid}).then(
        response => {
            const result = response.data
            comments.value = result['comments']
        }
    )
}
</script>

<style scoped lang="sass">
.comment
  padding: 20px 16px

.comment-list
  padding: 20px 16px

.comment-item
  position: relative
  padding-left: 20px
  margin-bottom: 30px
  font-size: 18px

.comment-item:after
  content: ''
  position: absolute
  width: 8px
  height: 8px
  top: 10px
  left: 0
  border-radius: 99999px
  background-color: #1976D2
</style>