<template>
  <b-container class="stycop">
    <b-row class="flexres">
      <b-col md="6" xs="12">
        <p class="psty">
          احصل على نسختك من برنامج أصول<br />
          التدريبي لعام 2022 بعد تعبئتك لهذه الحقول
        </p>
        <b-row>
          <b-col md="6" xs="12">
            <label class="labelsty"
              >الإسم<span class="starsty"
                >*</span
              ></label
            >
            <b-form-input
              class="mb-2"
              placeholder="أدخل اسمك هنا"
            ></b-form-input>
          </b-col>
          <b-col md="6" xs="12">
                <label class="labelsty"
              >البريد الإلكتروني<span class="starsty"
                >*</span
              ></label
            >
            <b-form-input
              class="mb-2"
              placeholder="أدخل بريدك الإلكتروني هنا"
            ></b-form-input>
               </b-col>
        </b-row>
        <b-row>
          <b-col md="6" xs="12">
                <label class="labelsty"
              >رقم الهاتف
              </label
            >
            <b-form-input
              class="mb-2"
              placeholder="أدخل رقم الهاتف هنا"
            ></b-form-input>
             </b-col>
          <b-col md="6" xs="12">
                <label class="labelsty"
              >جهة العمل</label
            >
            <b-form-input
              class="mb-2"
              placeholder="أدخل جهة العمل هنا"
            ></b-form-input>
               </b-col>
        </b-row>
        <b-row>
          <b-col md="6" xs="12">
              <b-button class="btnstylogin" @click="login">احصل على النسخة</b-button>
               </b-col>
          <b-col md="6" xs="12"> 

          </b-col>
        </b-row>
      </b-col>
      <b-col md="6" xs="12"
        ><img class="imgbookssty" src="../assets/img/books.png"
      /></b-col>
    </b-row>
  </b-container>
</template>
<script>
</script>
<style scoped src="../assets/css/copyprogram.css">
</style>