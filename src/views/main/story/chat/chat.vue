<template>
  <div class="chat">
    <jp-editor v-model:value="htmlString" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import JpEditor from '@/base-ui/editor'

export default defineComponent({
  name: 'chat',
  components: {
    JpEditor
  },
  setup() {
    const htmlString = ref<string>('jpliu')
    return {
      htmlString
    }
  }
})
</script>

<style scoped></style>
