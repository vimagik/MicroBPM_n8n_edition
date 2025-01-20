<script setup>
const leftDrawerOpen = ref(true)
</script>

<template>
    <q-layout view="lHh lpR fFf">

        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />

                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar>
                    Title
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left">
            <div class="nav">
                <q-img src="/images/white_logo.png"></q-img>
                <q-separator class="q-mx-md" color="grey-9" />
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
