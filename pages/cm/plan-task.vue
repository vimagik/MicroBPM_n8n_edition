<script setup>
const store = useTaskStore()
const { contextId } = storeToRefs(store)

const { data: context } = await useProtectedFetch(`/items/cm/${contextId.value}`)
</script>

<template>
    <div class="q-px-xl">
        <h1 class="text-h6 q-mt-xl">Поставить задачу в план</h1>
        <p>Просьба определить дату выполнения поручения исходя из текущей нагрузки</p>
        <q-input v-model="context.data.name" outlined label="Краткое наименование поручения" readonly></q-input>
        <q-input v-model="context.data.desc" class="q-mt-md" outlined label="Что нужно сделать" type="textarea"
            readonly></q-input>
        <app-data-picker class="q-mt-md" label="Выполнить до" />
        <div class="q-mt-md">
            <q-btn label="Выполнить" color="primary" />
            <q-btn label="Отмена" color="primary" flat class="q-ml-sm" to="/" />
        </div>
    </div>
</template>
