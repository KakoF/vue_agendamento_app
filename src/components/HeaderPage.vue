<template>
       <b-row class="m-5">
                <b-col>
                    <h2>
                       {{ title }}
                    </h2>
                </b-col>
            </b-row>
</template>
<script>
export default {
  props: {
    title: { type: String, default: '' }
  }
}
</script>
