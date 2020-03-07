<template>
  <header class="d-flex justify-space-around app-bar">
    <div class="background-container">
      <div class="text-center background-color">
        <h1 v-if="$route.path === '/'" class="header-heading m0">
          宇都宮大学のサークルビラ一覧
        </h1>
        <p v-else class="header-heading m0">
          宇都宮大学のサークルビラ一覧
        </p>
        <p class="mb-0 header-subheading">企画・運営 U-lab</p>
      </div>
    </div>
  </header>
</template>
