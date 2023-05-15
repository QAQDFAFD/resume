<template>
    <div v-for="(item, index) in props.opt" :key="index" class="project-box">
        <div class="company">{{ item.company }}</div>
        <div class="name-time">
            <div class="name">{{ item.name }}</div>
            <div class="time">{{ item.time }}</div>
        </div>
        <div class="intro">{{ item.intro }}</div>
        <div class="responsibility">
            <li v-for="(item1, index) in item.responsibility">{{ item1.left }}</li>
        </div>
        <div class="harvest">{{ item.harvest }}</div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    opt: {
        type: Array,
        required: true
    }

})
</script>

<style lang="scss" scoped></style>