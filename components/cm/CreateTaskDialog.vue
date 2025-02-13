<i18n lang="yaml">
en-US:
  pageName: 'New assignment'
  create: 'Create'
  cancel: 'Cancel'
  due: 'Execute until'
ru:
  pageName: 'Новое поручение'
  create: 'Создать'
  cancel: 'Отмена'
  due: 'Выполнить до'
</i18n>

<script setup>
const alert = defineModel()

const { t } = useI18n({
    useScope: 'local'
})

const rules = {
    required: val => val && val.length > 0 || 'Обязательное поле'
}

const formData = reactive({
    name: '',
    responsible: null,
    due_date: null,
    desc: ''
})

const { data: optionsUsers } = await useProtectedFetch('/users', {
    query: {
        fields: 'id, first_name, last_name'
    }
})

function onReset() {
    formData.name = ''
    formData.responsible = null
    formData.due_date = null
    formData.desc = ''
    alert.value = false
}
</script>

<template>
    <q-dialog v-model="alert">
        <q-card style="min-width: 500px;">
            <q-card-section>
                <div class="text-h6">{{ t('pageName') }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                    <q-input filled v-model="formData.name" label="Краткое наименование" lazy-rules
                        :rules="[rules.required]">
                        <template v-slot:append>
                            <q-icon name="done" />
                        </template>
                    </q-input>

                    <q-input v-model="formData.desc" filled type="textarea" label="Описание" lazy-rules
                        :rules="[rules.required]">
                        <template v-slot:append>
                            <q-icon name="done" />
                        </template>
                    </q-input>

                    <div class="row">
                        <div class="col">
                            <q-select v-model="formData.responsible" filled :options="optionsUsers.data"
                                option-value="id" :option-label="opt => `${opt.first_name} ${opt.last_name}`"
                                label="Ответственный" lazy-rules :rules="[rules.required]" emit-value map-options>
                                <template v-slot:append>
                                    <q-icon name="done" />
                                </template>
                            </q-select>
                        </div>
                        <div class="col q-ml-sm">
                            <app-data-picker v-model="formData.due_date" :label="t('due')" />
                        </div>
                    </div>

                    <div class="right">
                        <q-btn :label="t('create')" type="submit" color="primary" />
                        <q-btn :label="t('cancel')" type="reset" color="primary" flat class="q-ml-sm" />
                    </div>
                </q-form>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>