<script setup>
const store = useAppStore()
</script>

<template>
    <q-header elevated class="bg-white text-grey-7">
        <q-toolbar>
            <q-btn dense flat round icon="menu" @click="store.openCloseBar" />
            <q-img v-if="!store.leftDrawerOpen" style="width: 32px" src="/images/logo-mini.webp" />
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
</template>
