<template>
  <div class="Enregistrement">
    <div>
      Register page
      <Registration />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Registration from '@/components/Registration.vue'

export default {
  name: 'Enregistrement',
  components: {
    Registration
  }
}
</script>
