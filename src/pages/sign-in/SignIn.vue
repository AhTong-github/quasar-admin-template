<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useUserStore } from 'stores/modules/user-store'
import { useRouter } from 'vue-router'

const loginForm = reactive({ username: 'admin', password: 'admin' })
const isPwd = ref(true)
const linearState = ref(false)
const _store = useUserStore()
const _router = useRouter()

const loginHandler = () => {
  linearState.value = true
  _store.userLogin(loginForm).then(() => {
    _router.replace('/')
    linearState.value = false
  })
}
</script>

<template>
  <div class="row" style="width: 100%; height: 100vh">
    <q-img
      src="src/assets/background/7c.jpg"
      fit="cover"
      class="col-lg-9 col-md-0 col-xs-0"
    >
    </q-img>
    <div class="flex flex-center q-mx-auto q-my-auto">
      <div class="column">
        <div class="col flex flex-center inputPanel">
          <q-avatar class="justify-center q-my-md">
            <q-img src="src/assets/logo.svg"></q-img>
          </q-avatar>
          <span class="text-h6 q-ma-sm">Quasar Admin Template</span>
        </div>
        <div class="col">
          <q-form @submit="loginHandler" class="q-gutter-md">
            <q-input
              filled
              v-model="loginForm.username"
              label="Account"
              lazy-rules
              :rules="[
                (val: string) =>
                  (val && val.length > 0) || 'Please type something',
              ]"
              class="inputPanel"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input
              filled
              v-model="loginForm.password"
              label="Password"
              lazy-rules
              :type="isPwd ? 'password' : 'text'"
              :rules="[
                (val: string) =>
                  (val && val.length > 0) || 'Please type your password.',
                (val: string) => val.length >= 4 || 'Password length less 4.',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <q-btn
              label="Sign In"
              type="submit"
              color="primary"
              class="signBtn"
            >
              <q-circular-progress
                v-show="linearState"
                indeterminate
                :thickness="0.4"
                rounded
                color="white"
                class="q-ml-lg q-ma-xs"
              />
            </q-btn>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inputPanel {
  width: 300px;
}
.signBtn {
  width: 300px;
}
</style>
