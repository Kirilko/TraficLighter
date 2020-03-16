<template>
  <div class="home">
    <Table :color="$route.params.color"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Lighter.vue'

export default {
  name: 'Home',
  components: {
    Table
  },
}
</script>
