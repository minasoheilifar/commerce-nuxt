<template>
  <div class="layout mb-5">
    <div class="app-content">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <AppHeader />
            <div class="app-main pt-3">
              <NuxtPage />
              <CartItems />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppFooter/>

</template>
<script setup lang="ts">
</script>
