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
</script>

<template>
    <div class="q-px-xl">
        <h1 class="text-h5">{{ t('pageName') }}</h1>
    </div>
</template>