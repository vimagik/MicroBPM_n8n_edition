<script setup>
const router = useRouter()
const store = useTaskStore()
const { contextId, taskId } = storeToRefs(store)
const { data: context } = await useProtectedFetch(`/items/cm/${contextId.value}`)

const dueDate = ref(null)

function onReset() {
    dueDate.value = null
    store.resetTask()
    router.push('/')
}

async function onSubmit() {
    await useProtectedFetchN8N('/9a8caf48-8c0a-4c33-86bd-f9af51a99965', {
        method: 'POST',
        body: {
            contextId,
            taskId,
            dueDate
        }
    }).then(() => {
        onReset()
    })
} 
</script>

<template>
    <div class="q-px-xl">
        <h1 class="text-h6 q-mt-xl">Поставить задачу в план</h1>
        <p>Просьба определить дату выполнения поручения исходя из текущей нагрузки</p>
        <q-form v-if="context" @submit="onSubmit" @reset="onReset">
            <q-input v-model="context.data.name" outlined label="Краткое наименование поручения" readonly></q-input>
            <q-input v-model="context.data.desc" class="q-mt-md" outlined label="Что нужно сделать" type="textarea"
                readonly></q-input>
            <app-data-picker v-model="dueDate" class="q-mt-md" label="Выполнить до" />
            <div class="q-mt-md">
                <q-btn label="Выполнить" type="submit" color="primary" />
                <q-btn label="Отмена" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>
    </div>
</template>
