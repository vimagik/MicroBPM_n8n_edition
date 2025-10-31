<i18n lang="yaml">
en-US:
  mainPage: 'Main page'
  exit: 'Exit'
ru:
  mainPage: 'Главная страница'
  exit: 'Выйти'
</i18n>

<script setup>
const store = useAppStore()
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

const router = useRouter()

async function onLogout() {
    store.logout()
    router.push('/login')
}
</script>

<template>
    <q-header elevated class="bg-white text-grey-7">
        <q-toolbar>
            <q-btn dense flat round icon="menu" @click="store.openCloseBar" />
            <q-img v-if="!store.leftDrawerOpen" style="width: 32px" src="/images/logo-mini.webp" />
            <div class="q-ml-sm">{{ t('mainPage') }}</div>
            <q-space />
            <q-btn flat round dense icon="more_vert">
                <q-menu>
                    <q-list style="min-width: 100px">
                        <q-item clickable v-close-popup @click="switchLocale">
                            <q-item-section>{{ localeNameToBeSwitched }}</q-item-section>
                        </q-item>
                        <q-separator />
                        <q-item clickable v-close-popup @click="onLogout">
                            <q-item-section>{{ t('exit') }}</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
        </q-toolbar>
    </q-header>
</template>
