<template>
  <b-navbar toggleable="lg" type="dark" class="navsty">
    <b-navbar-brand>
      <img src="../assets/img/logo-ar.png" class="imgsty"
    /></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <div class="btnposition">
        <div>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto dropsty">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em class="dropsty">أصول</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em class="dropsty">البرامج</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em class="dropsty">الشهادات</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </div>
        <div>
          <router-link to="/register"
            ><button class="btnregistersty" left>
              أنشاء حساب
            </button></router-link
          >
          <router-link to="/login"
            ><button class="btnloginsty" left>تسجيل دخول</button></router-link
          >
        </div>
      </div>
    </b-collapse>
  </b-navbar>
</template>
<script>
</script>
<style scoped src="../assets/css/navbar.css">
</style>