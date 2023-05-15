<template>
    <div>
        <div class="info">
            <h1 class="name">{{ info.name }}</h1>
            <p>
                电话: <strong class="tel">{{ info.tel }}</strong>
                邮件: <strong class="email">{{ info.email }}</strong>
            </p>
        </div>

        <div class="contact">
            <h4>个人链接</h4>
            <hr>
            <div class="blogs">
                个人主页: <strong><a :href="website" target="_blank">{{ info.website }}</a></strong>
            </div>
            <div class="links">
                Github: <strong><a :href="github" target="_blank">{{ info.github }}</a></strong>
            </div>
            <div class="links">
                知乎: <strong><a :href="zhihu" target="_blank">{{ info.zhihu }}</a></strong>
            </div>
            <div class="links">
                知识库: <strong><a :href="konwledge" target="_blank">{{ info.konwledge }}</a></strong>
            </div>
        </div>

        <div class="edu">
            <h4>教育背景</h4>
            <hr>
            <List :source="info.edus"></List>
        </div>

        <div class="skills">
            <h4>技能清单</h4>
            <hr>
            <Skills :skills="info.skills"></Skills>
        </div>

        <div v-if="works" class="interns">
            <h4>工作经历</h4>
            <hr>
            <List :source="info.works"></List>
        </div>

        <div class="projects">
            <h4>项目经历</h4>
            <hr>
            <Project :opt="info.projects"></Project>
        </div>
    </div>
</template>

<script setup>
import List from '../components/List.vue';
import Skills from '../components/Skills.vue';
import Project from '../components/Project.vue';
import info from '../assets/info';


</script>

<style lang="scss" scoped></style>