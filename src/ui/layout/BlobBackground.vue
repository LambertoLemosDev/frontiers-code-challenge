<script lang="ts" setup>
import BlobShape from '@/ui/components/BlobShape.vue'
import { defineOptions } from 'vue'

defineOptions({
  name: 'BlobBackground',
  components: BlobShape,
})
</script>
<template>
  <section class="blob-background">
    <BlobShape class="blob-background__blob blob-background__blob--top-left"></BlobShape>
    <BlobShape class="blob-background__blob blob-background__blob--bottom-right"></BlobShape>
  </section>
</template>

<style lang="css" scoped>
.blob-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  overflow: hidden;
  pointer-events: none;
}

.blob-background__blob {
  position: absolute;
  opacity: 0.6;
}

.blob-background__blob--top-left {
  top: -6rem;
  left: -6rem;
  width: 18rem;
  height: 18rem;
  border-radius: 100%;
}

.blob-background__blob--bottom-right {
  bottom: -8rem;
  right: -8rem;
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
}

@media (min-width: 640px) {
  .blob-background__blob--top-left {
    width: 24rem;
    height: 24rem;
  }

  .blob-background__blob--bottom-right {
    width: 28rem;
    height: 28rem;
  }
}

@media (min-width: 1024px) {
  .blob-background__blob--top-left {
    width: 32rem;
    height: 32rem;
  }

  .blob-background__blob--bottom-right {
    width: 36rem;
    height: 36rem;
  }
}
</style>
