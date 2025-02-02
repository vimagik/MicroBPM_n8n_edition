<i18n lang="yaml">
en-US:
  tasks: 'Tasks'
  activeTasks: 'Active tasks'
ru:
  tasks: 'Задачи'
  activeTasks: 'Активные задачи'
</i18n>

<script setup>
const { t, locale } = useI18n({
    useScope: 'local'
})

const { formatData } = useFormatData()

const current = reactive({
    limit: 2,
    page: 1,
    meta: 'filter_count',
})

const { data: tasks } = await useGetItems('task', current, {
    watch: [current]
})
</script>


<template>
    <div class="q-mt-xl q-mx-xl">
        <div class="row">
            <q-space />
            <div class="col-6">
                <div class="row items-center">
                    <div class="col-8">
                        <span class="text-h5">{{ t('tasks') }}</span>
                        <q-btn class="q-ml-sm q-mb-sm" round color="grey-4" icon="add" text-color="black" />
                    </div>
                    <q-space />
                    <div class="col-4">
                        <q-input v-model="current.filter" rounded standout label="Поиск" />
                    </div>
                </div>
                <q-card class="bg-grey-4 q-mt-md">
                    <q-card-section>
                        <div class="text-h6">{{ t('activeTasks') }}</div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <q-list>
                            <q-item v-for="task in tasks.data" :key="task.id" clickable v-ripple
                                class="q-mb-sm bg-white" active-class="cyan-5">
                                <q-item-section>
                                    <div class="q-my-sm q-ml-sm">
                                        <div class="text-body1">{{ locale === 'en-US' ? task.name_en : task.name }}
                                        </div>
                                        <div class="text-caption">{{ task.process }}</div>
                                    </div>
                                </q-item-section>
                                <q-item-section v-if="task.due_date" class="a-ml-sm" side>
                                    <q-btn outline rounded color="red" :label="formatData(task.due_date)" />
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>
                    <q-card-section>
                        <div class="flex flex-center">
                            <q-pagination v-model="current.page" direction-links
                                :max="tasks.meta.filter_count / 2 + 1" />
                        </div>
                    </q-card-section>
                </q-card>
            </div>
            <q-space />
        </div>
    </div>
</template>
