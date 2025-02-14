<i18n lang="yaml">
en-US:
  pageName: 'Continius management'
ru:
  pageName: 'Непрерывный менеджмент'
</i18n>

<script setup>
const { t, locale } = useI18n({
  useScope: 'local'
})

const { data: cmData, refresh } = await useProtectedFetch('/items/cm',
  {
    query: {
      fields: '*,process.*, responsible.first_name, responsible.last_name, status.*'
    }
  }
)

const { formatData } = useFormatData()

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Краткое описание',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'due',
    align: 'center',
    label: 'Выполнить до',
    field: 'due_date',
    format: val => val ? formatData(val) : '',
    sortable: true
  },
  {
    name: 'responsible',
    align: 'center',
    label: 'Ответственный',
    field: 'responsible',
    format: val => `${val.first_name} ${val.last_name}`,
    sortable: true
  },
  {
    name: 'date_created',
    align: 'center',
    label: 'Дата создания',
    field: 'date_created',
    format: val => formatData(val),
    sortable: true
  },
  {
    name: 'status',
    align: 'left',
    label: 'Текущий статус',
    field: 'status',
    format: val => val.name,
    sortable: true
  },
]

const createTask = ref(false)
</script>

<template>
  <div class="q-px-xl">
    <div class="q-mt-md">
      <span class="text-h5">{{ t('pageName') }}</span>
      <q-btn class="q-ml-sm q-mb-sm" @click="createTask = true" round color="grey-4" icon="add" text-color="black" />
    </div>
    <q-table card-class="bg-grey-3" class="q-mt-md" :rows="cmData.data" :columns="columns" />
    <cm-create-task-dialog v-model="createTask" @cm-update="refresh" />
  </div>
</template>