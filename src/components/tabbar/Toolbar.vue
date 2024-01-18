<script setup lang="ts">
import { useQuasar } from 'quasar'
import { useDrawerStore } from 'stores/modules/drawer-store'
import { useRouter } from 'vue-router'

const $q = useQuasar()
const _store = useDrawerStore()
const _router = useRouter()

const switchTheme = () => {
  if ($q.dark.isActive) {
    $q.dark.set(false)
  } else {
    $q.dark.set(true)
  }
}

const showDrawer = () => {
  _store.show = !_store.show
}

const logoutHandler = () => {
  _router.replace('/signIn')
}
</script>

<template>
  <q-btn @click="showDrawer" round flat icon="menu" />
  <q-toolbar-title>Quasar Admin Template</q-toolbar-title>
  <q-space />
  <q-icon @click="switchTheme" class="toolbar-icon" name="dark_mode" />
  <q-icon class="toolbar-icon" name="settings_input_component" />
  <q-btn flat round>
    <q-avatar size="42px">
      <img src="https://cdn.quasar.dev/img/avatar2.jpg">

      <q-menu>
        <q-list style="min-width: 100px">
          <q-item clickable v-close-popup @click="logoutHandler">
            <q-item-section>Log out</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-avatar>
  </q-btn>
</template>

<style scoped lang="sass">
.toolbar-icon
  font-size: 16px
  margin-right: 25px
</style>
