<i18n lang="yaml">
en-US:
  pageName: 'Conducting the meeting'
  keywordSearch: 'Keyword search'
  timePeriod: 'Time period'
  status: 'Status'
ru:
  pageName: 'Проведение встречи'
  keywordSearch: 'Поиск по ключевым словам'
  timePeriod: 'Период'
  status: 'Статус'
</i18n>

<script setup>
const { t, locale } = useI18n({
    useScope: 'local'
})
</script>

<template>
    <div class="q-px-xl">
        <h1 class="text-h5">{{ t('pageName') }}</h1>
    </div>
</template>