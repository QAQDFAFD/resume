<template>
    <div>
        <li v-for="(item, index) in props.honor" :key="index">{{ item }}</li>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    honor: {
        typeof: Array,
        required: true
    }
})

</script>

<style lang="scss" scoped></style>