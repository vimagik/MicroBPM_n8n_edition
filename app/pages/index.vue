<i18n lang="yaml">
en-US:
  tasks: 'Tasks'
  activeTasks: 'Active tasks'
  search: 'Search'
ru:
  tasks: 'Задачи'
  activeTasks: 'Активные задачи'
  search: 'Поиск'
</i18n>

<script setup>
const { t } = useI18n({
    useScope: 'local'
})

const filterStr = ref('')
const curPage = ref(1)

const { data: tasksData, refresh } = await useProtectedFetch('/items/task',
    {
        method: 'SEARCH',
        query: {
            page: curPage,
            limit: 4,
            meta: 'filter_count',
            search: filterStr,
            fields: '*,process.*',
            filter: {
                "status": {
                    "_neq": 2
                }
            }
        }
    }
)
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
                        <q-input v-model="filterStr" @update:model-value="refresh" rounded standout
                            :label="t('search')" />
                    </div>
                </div>
                <q-card class="bg-grey-4 q-mt-md">
                    <q-card-section>
                        <div class="text-h6">{{ t('activeTasks') }}</div>
                    </q-card-section>
                    <q-card-section v-if="tasksData" class="q-pt-none">
                        <app-tasks :task-data="tasksData.data" />
                    </q-card-section>
                    <q-card-section v-if="tasksData">
                        <div class="flex flex-center">
                            <q-pagination v-model="curPage" @update:model-value="refresh" direction-links
                                :max="tasksData.meta.filter_count / 4 + 1" />
                        </div>
                    </q-card-section>
                </q-card>
            </div>
            <q-space />
        </div>
    </div>
</template>
