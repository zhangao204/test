<template>
    <div class="edit page q-pa-md">
        <div class="q-mb-md">
            <q-btn-group spread>
                <q-btn @click="updatePost(post.uuid)" v-if="post.uuid === 'new'" color="primary" label="发布"
                       icon="timeline"/>
                <q-btn @click="updatePost(post.uuid)" v-if="post.uuid !== 'new'" color="primary" label="保存"
                       icon="timeline"/>
                <q-btn color="purple" label="预览" icon="visibility"/>
                <q-btn @click="removePost(post.uuid)" v-if="post.uuid !== 'new'" color="negative" label="删除"
                       icon="error"/>
            </q-btn-group>
        </div>
        <q-input v-model="post.title" class="title q-mb-md" label="标题"/>
        <v-md-editor v-model="post.body" height="500px"></v-md-editor>
        <!--        <q-input v-model="post.body" class="body" autogrow label="正文"/>-->
        <div v-show="uuid !== 'new'" class="time">
            创建时间: {{ post.createdAt.substring(0, 10) }} | 上次修改时间: {{ post.updatedAt.substring(0, 10) }}
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {detail, create, update, remove} from '@/api/post'
import Notify from '@/utils/notify'
import {useRouter} from 'vue-router'

const router = useRouter()

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

onMounted(() => {
    const uuid = post.value['uuid']
    if (uuid === 'new') {
        return ''
    }

    detail(uuid).then(
        response => {
            post.value = response.data
        }
    )
})

const updatePost = (uuid) => {
    if (uuid === 'new') {
        create(post.value).then(
            response => {
                Notify.notifySuccess('已发布')
                router.push({
                    path: '/admin/edit/' + response.data['uuid']
                })

                detail(response.data['uuid']).then(
                    response => {
                        post.value = response.data
                    }
                )
            }
        )
    } else {
        update(uuid, post.value).then(
            response => {
                Notify.notifySuccess('已更新')
            }
        )
    }
}

const removePost = (uuid) => {
    remove(uuid).then(
        response => {
            Notify.notifySuccess('资源已删除')
            router.push({
                name: 'POST'
            })
        }
    )
}
</script>

<style scoped lang="sass">
.time
  color: gray
  margin: 12px 0

.title
  font-size: 26px

.body
  font-size: 20px
</style>