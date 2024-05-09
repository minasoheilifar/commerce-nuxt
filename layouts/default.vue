
<template>
    <div class="layout">
      <!-- <AppSidebar /> -->
  
      <div class="app-content">
        <AppHeader/>
        <NuxtPage/>
<!-- 
        <div class="app-main pt-3">
          <el-scrollbar id="page-wrapper" :class="orderSidebar && 'orderSidebarOpen'">
            <NuxtPage />
          </el-scrollbar>
          <OrderSideBar />
        </div> -->
      </div>
    </div>
  
    <!-- <FoodDetailsModal /> -->
  </template>


<!-- <template>
    <DataLoading />
    <SearchKeypad />
    <div class="layout">
      <AppSidebar />
  
      <div class="app-content">
        <AppHeader />
        <div class="app-main pt-3">
          <el-scrollbar id="page-wrapper" :class="orderSidebar && 'orderSidebarOpen'">
            <NuxtPage />
          </el-scrollbar>
          <OrderSideBar />
        </div>
      </div>
    </div>
  
    <FoodDetailsModal />
    <div id="logout-confirm-wrapper" />
  </template> -->