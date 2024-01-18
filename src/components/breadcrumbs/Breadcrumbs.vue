<script setup lang="ts">
import { useRouter } from 'vue-router'


const _router = useRouter()

</script>

<template>
  <div class="q-ma-md">
    <q-breadcrumbs gutter="sm">
      <template v-for="(item, index) in _router.currentRoute.value.matched" :key="index">
        <q-breadcrumbs-el :to="item.path" v-show="item.meta.title" :icon="item.meta.icon" :label="item.meta.title" />
      </template>
    </q-breadcrumbs>
  </div>
</template>

<style scoped lang="sass">

</style>
