<template>
  <q-list>
    <template v-for="(item, index) in sidebarItems" :key="index">
      <q-item
        v-if="!item.children && !item.meta.hidden"
        :key="index"
        clickable
        v-ripple
        @click="toPage(item.path)"
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white" :icon="item.meta.icon" />
        </q-item-section>
        <q-item-section>
          {{ item.meta.title }}
        </q-item-section>
      </q-item>

      <q-item
        v-if="item.children && item.children.length === 1"
        clickable
        v-ripple
        @click="toPage(item.path)"
      >
        <q-item-section avatar>
          <q-avatar
            color="primary"
            text-color="white"
            :icon="item.children[0].meta.icon"
          />
        </q-item-section>
        <q-item-section>
          {{ item.children[0].meta.title }}
        </q-item-section>
      </q-item>

      <q-expansion-item
        v-if="item.children && item.children.length > 1"
        relative-position
        expand-separator
      >
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar
              :icon="item.meta.icon"
              color="primary"
              text-color="white"
            />
          </q-item-section>

          <q-item-section>
            {{ item.meta.title }}
          </q-item-section>
        </template>
        <Sidebar :sidebarItems="item.children" />
      </q-expansion-item>
    </template>
  </q-list>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps(['sidebarItems'])
const _router = useRouter()

const toPage = (path: string) => {
  _router.push(path)
}
</script>

<style scoped lang="sass">
.iconPanel
  width: 5px
</style>
