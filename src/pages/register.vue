<template>
  <div>
    <div class="navsty">
      <img class="imgsty" src="../assets/img/logo-ar.png" />
    </div>

    <div class="login">
      <div class="login-card">
        <p class="loginstyp">
          إنشاء حساب<br />انضم لعائلة أصول للتنمية والإبداع
        </p>
        <label class="labelsty"
          >الإسم<span class="starsty">*</span></label
        >
        <b-form-input
          class="mb-2"
          placeholder="أدخل اسمك هنا"
        ></b-form-input>
        <label class="labelsty"
          >البريد الإلكتروني<span class="starsty">*</span></label
        >
        <b-form-input
          class="mb-2"
          placeholder="أدخل البريد الإلكتروني هنا"
        ></b-form-input>
        <label class="labelsty"
          >رقم الهاتف<span class="starsty">*</span></label
        >
        <b-form-input
          class="mb-2"
          placeholder="أدخل رقم الهاتف هنا"
        ></b-form-input>
        <label class="labelsty"
          >كلمة المرور<span class="starsty">*</span></label
        >
        <b-form-input
          class="mb-2"
          placeholder="يجب أن لا تقل كلمة المرور عن 6 خانات"
        ></b-form-input>
        <div class="regsty1">
          <span class="stylhaveaccount1">  عند الضغط على انشاء حساب فإنك توافق على</span>
          <span class="spansty1">سياسة الإستخدام</span>
        </div>
        <b-button class="btnstylogin" @click="login">انشاء حساب</b-button>
        <div class="regsty">
          <span class="stylhaveaccount">لديك حساب؟</span>
          <router-link class="spansty"
  to="/login"><span>تسجيل الدخول</span></router-link>
        </div>
      </div>
    </div>

    <div class="footersty">
      <p>جميع الحقوق محفوظة © شركة أصول للتدريب والاستشارات 2022</p>
    </div>
  </div>
</template>
<script>
</script>
<style scoped src="../assets/css/register.css">
</style>