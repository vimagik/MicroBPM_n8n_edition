<script setup>
defineProps(['taskData'])

const { formatData } = useFormatData()
const { locale } = useI18n({
    useScope: 'local'
})

const store = useTaskStore()
const router = useRouter()

function openTask(task) {
    store.setContext(task.context)
    router.push(`${task.process.url}/${task.type}`)
}
</script>

<template>
    <q-list>
        <q-item v-for="task in taskData" :key="task.id" @click="openTask(task)" clickable v-ripple
            class="q-mb-sm bg-white" active-class="cyan-5">
            <q-item-section>
                <div class="q-my-sm q-ml-sm">
                    <div class="text-body1">{{ task.name }}
                    </div>
                    <div class="text-caption">{{ locale == 'en-US' ? task.process.name_en :
                        task.process.name }}</div>
                </div>
            </q-item-section>
            <q-item-section v-if="task.due_date" class="a-ml-sm" side>
                <q-btn outline rounded color="red" :label="formatData(task.due_date)" />
            </q-item-section>
        </q-item>
    </q-list>
</template>