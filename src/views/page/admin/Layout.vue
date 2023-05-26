<template>
    <q-layout view="hHh lpR fFf">

        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-toolbar-title>
                    {{ $t('message.TERMINATOR_LINE') }}
                </q-toolbar-title>

                <q-btn dense flat round icon="menu" @click="toggleRightDrawer"/>
            </q-toolbar>
        </q-header>

        <!--        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>-->
        <!--            &lt;!&ndash; left &ndash;&gt;-->
        <!--            -->

        <!--        </q-drawer>-->

        <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
            <!-- drawer content -->
            <div class="login-info q-pa-md text-white">
                <q-avatar class="avatar">

                </q-avatar>
                <h6 class="username">{{ username }}</h6>
                <p class="text-body2">{{ email }}</p>
            </div>
            <q-list class="rounded-borders text-primary">
                <q-item
                        to="/admin/home"
                        clickable
                        v-ripple
                        :active="link === 'home'"
                        @click="link = 'home'"
                        active-class="active-link">

                    <q-item-section avatar>
                        <q-icon name="home"/>
                    </q-item-section>

                    <q-item-section>{{ $t('message.HOME') }}</q-item-section>
                </q-item>

                <q-item
                        to="/admin/post"
                        clickable
                        v-ripple
                        :active="link === 'post'"
                        @click="link = 'post'"
                        active-class="active-link">
                    <q-item-section avatar>
                        <q-icon name="inventory"/>
                    </q-item-section>

                    <q-item-section>{{ $t('message.ARTICLE_MANAGEMENT') }}</q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <q-page-container class="main">
            <router-view/>
        </q-page-container>

    </q-layout>
</template>

<script setup>
import {ref} from 'vue'
import {getLoginUserInfo} from '@/api/user'
import {setUserInfo, getUserInfo} from '@/utils/auth.js'
import Notify from '@/utils/notify'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)
const link = ref('home')
const username = ref('TerminatorLine')
const email = ref('TerminatorLine@stoutstorm.com')

let linkString = route['path']

linkString = linkString.substring(7)
link.value = linkString

let userInfo = getUserInfo()
if (userInfo) {
    username.value = userInfo['username']
    email.value = userInfo['email']
}

getLoginUserInfo().then(
    (response) => {
        setUserInfo(response.data)
        userInfo = getUserInfo()
        username.value = userInfo['username']
        email.value = userInfo['email']
    },
    (error) => {
        if (error.response) {
            console.log(error.response.data)
            Notify.notifyFailure(error.response.data['err_msg'])
            router.push({name: 'LOGIN'})
        } else {
            Notify.notifyFailure('请求已发出，但未收到服务器的任何响应，请检查你的网络情况以及后端服务器的在线状态')
        }
    }
)

const toggleRightDrawer = () => {
    rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>

<style scoped lang="sass">
.main
  overflow: hidden

.active-link
  color: white
  background: $secondary

.username
  margin: 10px 0 0 0

.avatar
  margin-top: 60px

.login-info
  background-image: linear-gradient(45deg, #FFAACF, #B4E4FF)

</style>