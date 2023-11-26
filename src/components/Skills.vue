<template>
    <ul>
        <li><strong>技术：</strong>{{ skills.techs.join(', ') }}</li>
        <li v-if="skills.tests"><strong>测试 & 部署：</strong>{{ skills.tests.join(', ') }}</li>
    </ul>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    skills: {
        type: Object,
        required: true
    }
})
</script>

<style scoped lang="scss"></style>
