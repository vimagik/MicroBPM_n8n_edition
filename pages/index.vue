<script setup>
const leftDrawerOpen = ref(true)
</script>

<template>
    <q-layout view="lHh lpR fFf">

        <q-header elevated class="bg-white text-grey-7">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
                <q-img v-if="!leftDrawerOpen" style="width: 32px" src="/images/logo-mini.webp" />
                <div class="q-ml-sm">Главная страница</div>
                <q-space />
                <q-btn flat round dense icon="more_vert">
                    <q-menu>
                        <q-list style="min-width: 100px">
                            <q-item clickable v-close-popup>
                                <q-item-section>English</q-item-section>
                            </q-item>
                            <q-separator />
                            <q-item clickable v-close-popup>
                                <q-item-section>Выйти</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>


            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left">
            <div class="nav">
                <q-img src="/images/logo.webp"></q-img>
                <q-separator class="q-mx-md" color="grey-9" />
                <q-list dark>
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="library_add_check" />
                        </q-item-section>
                        <q-item-section>
                            Мои задачи
                        </q-item-section>
                    </q-item>
                    <q-expansion-item expand-separator icon="cable" label="Процессы">
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
                            Справочники
                        </q-item-section>
                    </q-item>
                </q-list>
                <q-separator class="q-mx-md" color="grey-9" />
                <p class="text-subtitle1 text-grey-6 q-ml-md q-mt-md">Ссылки</p>
                <q-list dark dense>
                    <q-item clickable v-ripple>
                        <q-item-section>
                            Настройки
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                        <q-item-section>
                            О проекте
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>

    </q-layout>
</template>

<style scoped>
.nav {
    background-color: #2C2C2C;
    height: 100vh;
}
</style>
