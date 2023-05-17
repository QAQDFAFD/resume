<template>
    <div v-for="(item, index) in props.opt" :key="index" class="project-box">
        <div v-if="item.company" class="company"><strong>{{ item.company }}</strong></div>
        <div class="name-time">
            <div class="name"><strong>项目名称：{{ item.name }}</strong></div>
            <div class="time"><strong>{{ item.time }}</strong></div>
        </div>
        <div class="intro"><strong>项目介绍：</strong>{{ item.intro }}</div>
        <div class="techStack"><strong>技术选型：</strong>{{ item.techStack }}</div>
        <div class="responsibility">
            <div><strong>个人职责</strong></div>
            <li v-for="(item1, index) in item.responsibility">{{ item1.left }}</li>
        </div>
        <div class="harvest"><strong>个人收获：</strong>{{ item.harvest }}</div>
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

<style lang="scss" scoped>
.project-box {
    margin-bottom: 1rem;

    .name-time {
        display: flex;
        justify-content: space-between;
    }
}
</style>