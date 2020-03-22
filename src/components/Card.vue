<template>
  <div class="mt-10">
    <b-card bg-variant="light" :header="title" class="text-center">
       <slot>
       </slot>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: 'Título' }
  }
}
</script>
