<template>
  <nav class="siteHeader">
    <!-- test tailwindcss -->
    <div class="container mx-auto">
      <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
        <p class="font-bold"><span class="fab fa-dashcube"></span>
         Be Warned</p>
        <p>Something not ideal might be happening.</p>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'Stonks',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
