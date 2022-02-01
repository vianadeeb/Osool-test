<template>
<div>
<div class="navsty">
    <img class="imgsty" src="../assets/img/logo-ar.png" />
</div>


<div class="login">
        <div class="login-card">
                <p class="loginstyp">تسجيل الدخول<br/>قم بتعبئة المعلومات في الحقول</p>
                <label class="labelsty">البريد الإلكتروني أو رقم الهاتف<span class="starsty">*</span></label>
                <b-form-input  class="mb-2" placeholder="أدخل البريد الإلكتروني أو رقم الهاتف"></b-form-input>
                <label class="labelsty">كلمة المرور<span class="starsty">*</span></label>
                <b-form-input class="mb-2" placeholder="أدخل كلمة المرور هنا"></b-form-input>
                <b-button class="btnstylogin" @click="login">تسجيل الدخول</b-button>
                <span class="spansty">نسيت كلمة المرور؟</span>
                <div class="regsty">
                <span class="stylhaveaccount">ليس لديك حساب؟</span>
               <router-link class="spansty"
  to="/register"> <span>إنشاء حساب</span></router-link>
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
<style scoped src="../assets/css/login.css">
</style>