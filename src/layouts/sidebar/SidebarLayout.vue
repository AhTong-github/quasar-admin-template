<template>
  <q-list>
    <q-item-label header>Essential Links</q-item-label>
  </q-list>
  <Sidebar :sidebarItems="useUserStore().sidebarRoutes" />
</template>

<script lang="ts" setup>
import Sidebar from 'components/sidebar/Sidebar.vue'
import { useUserStore } from 'stores/modules/user-store'
</script>
