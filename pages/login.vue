<i18n lang="yaml">
en-US:
  login: 'Login'
  password: 'Password'
  loginAction: 'Log in'
  errorMessage: 'Wrong login-password pair'
  reqField: 'Required field'
ru:
  login: 'Логин'
  password: 'Пароль'
  loginAction: 'Войти'
  errorMessage: 'Неверная пара логин-пароль'
  reqField: 'Обязательное поле'
</i18n>

<script setup>
definePageMeta({
    layout: false,
});

const email = ref('')
const password = ref('')
const loadingStatus = ref(false)
const errorLogin = ref(false)
const errorMessage = ref('')

const store = useAppStore()
const router = useRouter();

function onSubmit() {
    errorLogin.value = false
    loadingStatus.value = true
    store.login(email.value, password.value).then(() => {
        loadingStatus.value = false
        router.push('/')
    }).catch(() => {
        errorMessage.value = t('errorMessage')
        errorLogin.value = true
    }).finally(() => {
        loadingStatus.value = false
    })
}

const rules = [val => val && val.length > 0 || t('reqField')]

function resetErrorStatus() {
    errorLogin.value = false
    errorMessage.value = ''
}

const { t, locale, setLocale } = useI18n({
    useScope: 'local'
})

const localeNameToBeSwitched = computed(() => {
    if (locale.value == 'ru') {
        return 'English'
    }
    return 'Русский'
})

function switchLocale() {
    if (locale.value == 'ru') {
        setLocale('en-US')
    } else {
        setLocale('ru')
    }
}
</script>

<template>
    <div class="main row justify-center items-center q-pa-sm">
        <q-card class="my-card">
            <q-img src="/images/logo_customcolor.png" />

            <q-card-section>
                <q-form @submit="onSubmit">
                    <q-input v-model="email" @change="resetErrorStatus" :label="t('login')" lazy-rules
                        :error-message="errorMessage" :error="errorLogin" :rules="rules">
                    </q-input>
                    <q-input v-model="password" type="password" :label="t('password')" lazy-rules
                        :rules="rules"></q-input>
                    <q-btn flat class="q-mt-sm" :label="t('loginAction')" type="submit" color="primary"
                        :loading="loadingStatus" />
                    <q-btn flat class="q-mt-sm float-right" :label="localeNameToBeSwitched" @click="switchLocale"
                        color="primary" />
                </q-form>
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