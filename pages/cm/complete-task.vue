<script setup>
const router = useRouter()
const store = useTaskStore()
const { contextId, taskId } = storeToRefs(store)
const { data: context } = await useProtectedFetch(`/items/cm/${contextId.value}`)
const { formatData } = useFormatData()

const taskStatus = ref(null)
const dueDate = ref(null)

const statusOptions = ['Перенос срока', 'Завершено']

const rules = {
    required: val => val && val.length > 0 || 'Обязательное поле'
}

function onReset() {
    dueDate.value = null
    store.resetTask()
    router.push('/')
}

async function onSubmit() {
    await useProtectedFetchN8N('/59f515f6-2d14-4091-8d5c-a6b2833f1ccc', {
        method: 'POST',
        body: {
            contextId,
            taskId,
            dueDate,
            taskStatus
        }
    }).then(() => {
        onReset()
    })
} 
</script>

<template>
    <div class="q-px-xl">
        <h1 class="text-h6 q-mt-xl">Выполнить поручение</h1>
        <p>Если появлись обстоятельства не позволяющие завершить задачу вовремя, инициируйте перенос срока</p>
        <q-form v-if="context" @submit="onSubmit" @reset="onReset">
            <q-input outlined v-model="context.data.name" label="Краткое наименование поручения" readonly></q-input>
            <q-input class="q-mt-md" v-model="context.data.desc" outlined label="Что нужно сделать" type="textarea"
                readonly></q-input>
            <q-input class="q-mt-md"
                :model-value="context.data.due_date ? formatData(context.data.due_date) : 'Срок не установлен'" outlined
                label="Выполнить до" readonly />
            <div class="row q-mt-md">
                <div class="col">
                    <q-select v-model="taskStatus" filled lazy-rules :rules="[rules.required]" :options="statusOptions"
                        label="Статус">
                        <template v-slot:append>
                            <q-icon name="done" />
                        </template>
                    </q-select>
                </div>
                <div class="col q-ml-md">
                    <app-data-picker v-if="taskStatus == 'Перенос срока'" v-model="dueDate"
                        label="Новый дата завершения" />
                </div>
            </div>
            <div class="q-mt-md">
                <q-btn label="Выполнить" type="submit" color="primary" />
                <q-btn label="Отмена" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>
    </div>
</template>