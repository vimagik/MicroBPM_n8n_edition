<i18n lang="yaml">
en:
  myTasks: 'My tasks'
  processes: 'Processes'
  directories: 'Directories'
  settings: 'Settings'
  about: 'About'
  links: 'Links'
ru:
  myTasks: 'Мои задачи'
  processes: 'Процессы'
  directories: 'Справочники'
  settings: 'Настройки'
  about: 'О проекте'
  links: 'Ссылки'
</i18n>

<script setup>
const store = useAppStore()
const { t } = useI18n({
    useScope: 'local'
})
</script>

<template>
    <q-drawer show-if-above v-model="store.leftDrawerOpen" side="left">
        <div class="nav">
            <q-img src="/images/logo.webp"></q-img>
            <q-separator class="q-mx-md" color="grey-9" />
            <q-list dark>
                <q-item clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="library_add_check" />
                    </q-item-section>
                    <q-item-section>
                        {{ t('myTasks') }}
                    </q-item-section>
                </q-item>
                <q-expansion-item expand-separator icon="cable" :label="t('processes')">
                    <q-list dark dense>
                        <q-item clickable v-ripple>
                            <q-item-section>
                                Непрерывный менеджмент
                            </q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-item-section>
                                Встреча
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-expansion-item>
                <q-item clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="description" />
                    </q-item-section>
                    <q-item-section>
                        {{ t('directories') }}
                    </q-item-section>
                </q-item>
            </q-list>
            <q-separator class="q-mx-md" color="grey-9" />
            <p class="text-subtitle1 text-grey-6 q-ml-md q-mt-md">{{ t('links') }}</p>
            <q-list dark dense>
                <q-item clickable v-ripple>
                    <q-item-section>
                        {{ t('settings') }}
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section>
                        {{ t('about') }}
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
    </q-drawer>
</template>

<style scoped>
.nav {
    background-color: #2C2C2C;
    height: 100vh;
}
</style>
