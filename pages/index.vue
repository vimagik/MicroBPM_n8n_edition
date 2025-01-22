<script setup>
const leftDrawerOpen = ref(true)
</script>

<template>
    <q-layout view="lHh lpR fFf">
        <app-header />
        <app-left-bar />
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
