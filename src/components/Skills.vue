<template>
  <div class="skills-container">
    <div class="skill-category">
      <div class="skill-item">
        <span class="skill-label">技术栈</span>
        <div class="skill-tags">
          <span v-for="tech in skills.techs" :key="tech" class="skill-tag tech-tag">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
    <div v-if="skills.tests" class="skill-category">
      <div class="skill-item">
        <span class="skill-label">测试 & 部署</span>
        <div class="skill-tags">
          <span v-for="test in skills.tests" :key="test" class="skill-tag test-tag">
            {{ test }}
          </span>
        </div>
      </div>
    </div>
  </div>
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

<style scoped lang="scss">
.skills-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skill-category {
  background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-quaternary) 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid var(--accent-color);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px var(--shadow-medium);
    border-left-color: var(--accent-hover);
  }
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-label {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &::before {
    content: '🔧';
    font-size: 1.2rem;
  }
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-2px) scale(1.05);
  }
}

.tech-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.25);

  &:hover {
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.35);
  }
}

.test-tag {
  background: linear-gradient(135deg, #a8e6cf 0%, #88d8a3 100%);
  color: var(--text-primary);
  box-shadow: 0 2px 8px rgba(168, 230, 207, 0.25);
  transition: color 0.3s ease;

  &:hover {
    box-shadow: 0 4px 15px rgba(168, 230, 207, 0.35);
  }
}

// 为测试&部署类别添加不同的图标
.skill-category:has(.test-tag) .skill-label::before {
  content: '🚀';
}

// 响应式设计
@media (max-width: 768px) {
  .skills-container {
    gap: 1.5rem;
  }

  .skill-category {
    padding: 1rem;
  }

  .skill-tags {
    gap: 0.5rem;
  }

  .skill-tag {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .skill-label {
    font-size: 1rem;
  }

  .skill-tag {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }
}
</style>
