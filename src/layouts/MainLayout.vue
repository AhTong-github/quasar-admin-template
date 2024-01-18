<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <ToolbarLayout />
    </q-header>

    <q-drawer v-model="_store.show" show-if-above>
      <q-scroll-area class="fit">
        <SidebarLayout />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <Breadcrumbs />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import SidebarLayout from 'layouts/sidebar/SidebarLayout.vue'
import ToolbarLayout from 'layouts/toolbar/ToolbarLayout.vue'

import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs.vue'
import { useDrawerStore } from 'stores/modules/drawer-store'

const _store = useDrawerStore()
</script>
