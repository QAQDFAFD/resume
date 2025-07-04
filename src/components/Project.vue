<template>
  <div class="projects-container">
    <div v-for="(item, index) in props.opt" :key="index" class="project-card">
      <div v-if="item.company" class="company-badge">
        <span class="company-icon">🏢</span>
        <strong>{{ item.company }}</strong>
      </div>

      <div class="project-header">
        <div class="project-name">
          <span class="project-icon">🚀</span>
          <strong>{{ item.name }}</strong>
        </div>
        <div class="project-time">
          <span class="time-icon">📅</span>
          <strong>{{ item.time }}</strong>
        </div>
      </div>

      <div class="project-section">
        <div class="section-title">
          <span class="section-icon">📋</span>
          <strong>项目介绍</strong>
        </div>
        <p class="section-content">{{ item.intro }}</p>
      </div>

      <div class="project-section">
        <div class="section-title">
          <span class="section-icon">⚡</span>
          <strong>技术选型</strong>
        </div>
        <div class="tech-stack">
          <span v-for="tech in item.techStack.split('、')" :key="tech" class="tech-tag">
            {{ tech.trim() }}
          </span>
        </div>
      </div>

      <div class="project-section">
        <div class="section-title">
          <span class="section-icon">👨‍💻</span>
          <strong>个人职责</strong>
        </div>
        <ul class="responsibility-list">
          <li v-for="(resp, idx) in item.responsibility" :key="idx" class="responsibility-item">
            {{ resp.left }}
          </li>
        </ul>
      </div>

      <div class="project-section">
        <div class="section-title">
          <span class="section-icon">🎯</span>
          <strong>个人收获</strong>
        </div>
        <p class="section-content highlight">{{ item.harvest }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  opt: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.projects-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.08);
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.15);
    border-color: #667eea;
  }
}

.company-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.25);
}

.company-icon {
  font-size: 1rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e9ecef;
}

.project-name {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.3rem;
  color: #2c3e50;
  flex: 1;
}

.project-icon {
  font-size: 1.4rem;
}

.project-time {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6c757d;
  font-size: 1rem;
  background: #f8f9fa;
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.time-icon {
  font-size: 1rem;
}

.project-section {
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.75rem;
}

.section-icon {
  font-size: 1.1rem;
}

.section-content {
  color: #495057;
  line-height: 1.6;
  margin: 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 3px solid #667eea;

  &.highlight {
    background: linear-gradient(135deg, #f0f4ff 0%, #e8f2ff 100%);
    border-left-color: #764ba2;
    font-weight: 500;
  }
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
  box-shadow: 0 2px 6px rgba(79, 172, 254, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 12px rgba(79, 172, 254, 0.4);
  }
}

.responsibility-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.responsibility-item {
  position: relative;
  padding: 0.75rem 0 0.75rem 2rem;
  color: #495057;
  line-height: 1.6;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s ease;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    top: 0.75rem;
    width: 1.5rem;
    height: 1.5rem;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: bold;
  }

  &:hover {
    background: #f8f9fa;
    padding-left: 2.5rem;
  }

  &:last-child {
    border-bottom: none;
  }
}

// 响应式设计
@media (max-width: 768px) {
  .project-card {
    padding: 1.5rem;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .project-name {
    font-size: 1.2rem;
  }

  .project-time {
    align-self: flex-end;
  }

  .tech-stack {
    gap: 0.4rem;
  }

  .tech-tag {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
}

@media (max-width: 480px) {
  .projects-container {
    gap: 1.5rem;
  }

  .project-card {
    padding: 1rem;
  }

  .project-name {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 1rem;
  }

  .responsibility-item {
    padding-left: 1.5rem;

    &::before {
      width: 1.2rem;
      height: 1.2rem;
      font-size: 0.7rem;
    }

    &:hover {
      padding-left: 2rem;
    }
  }
}
</style>
