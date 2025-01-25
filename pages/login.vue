<i18n lang="yaml">
en-US:
  login: 'Login'
  password: 'Password'
  loginAction: 'Log in'
  errorMessage: 'Wrong login-password pair'
ru:
  login: 'Логин'
  password: 'Пароль'
  loginAction: 'Войти'
  errorMessage: 'Неверная пара логин-пароль'
</i18n>

<script setup>
definePageMeta({
    layout: false,
});
</script>

<template>
    <div class="main row justify-center items-center q-pa-sm">
        <q-card class="my-card">
            <q-img src="/images/logo_customcolor.png" />

            <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                123
            </q-card-section>
        </q-card>
    </div>
</template>

<style scoped>
.main {
    background-image: -moz-linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    background-image: -webkit-linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    height: 100vh;
}

.my-card {
    width: 100%;
    max-width: 500px;
}
</style>