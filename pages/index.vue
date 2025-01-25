<i18n lang="yaml">
en-US:
  tasks: 'Tasks'
  activeTasks: 'Active tasks'
ru:
  tasks: 'Задачи'
  activeTasks: 'Активные задачи'
</i18n>

<script setup>
const { t } = useI18n({
    useScope: 'local'
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
                        <q-input rounded standout label="Поиск" />
                    </div>
                </div>
                <q-card class="bg-grey-4 q-mt-md">
                    <q-card-section>
                        <div class="text-h6">{{ t('activeTasks') }}</div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <q-list>
                            <q-item clickable v-ripple class="q-mb-sm bg-white" active-class="cyan-5">
                                <q-item-section>
                                    <div class="q-my-sm q-ml-sm">
                                        <div class="text-body1">Сделай раз</div>
                                        <div class="text-caption">Процесс абв</div>
                                    </div>
                                </q-item-section>
                                <q-item-section class="a-ml-sm" side>
                                    <q-btn outline rounded color="red" label="01/08/1984" />
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>
                </q-card>
            </div>
            <q-space />
        </div>
    </div>
</template>
