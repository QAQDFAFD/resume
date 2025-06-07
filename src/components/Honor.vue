<template>
  <div class="honors-container">
    <div class="honors-grid">
      <div v-for="(item, index) in props.honor" :key="index" class="honor-item">
        <div class="honor-icon">🏆</div>
        <div class="honor-content">
          <span class="honor-text">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  honor: {
    typeof: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.honors-container {
  padding: 0;
}

.honors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.honor-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
  border-radius: 12px;
  border-left: 4px solid #ffa726;
  box-shadow: 0 2px 8px rgba(255, 167, 38, 0.15);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 167, 38, 0.1) 0%, transparent 70%);
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 25px rgba(255, 167, 38, 0.25);
    border-left-color: #ff9800;

    &::before {
      transform: scale(1);
    }

    .honor-icon {
      transform: scale(1.2) rotate(10deg);
    }
  }

  &:nth-child(even) {
    background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
    border-left-color: #66bb6a;
    box-shadow: 0 2px 8px rgba(102, 187, 106, 0.15);

    &::before {
      background: radial-gradient(circle, rgba(102, 187, 106, 0.1) 0%, transparent 70%);
    }

    &:hover {
      box-shadow: 0 8px 25px rgba(102, 187, 106, 0.25);
      border-left-color: #4caf50;
    }
  }

  &:nth-child(3n) {
    background: linear-gradient(135deg, #f0f4ff 0%, #e8f2ff 100%);
    border-left-color: #667eea;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.15);

    &::before {
      background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
    }

    &:hover {
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.25);
      border-left-color: #764ba2;
    }
  }
}

.honor-icon {
  font-size: 2rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.honor-content {
  flex: 1;
  position: relative;
  z-index: 1;
}

.honor-text {
  font-weight: 600;
  color: #2c3e50;
  font-size: 1rem;
  line-height: 1.5;
  display: block;
}

// 响应式设计
@media (max-width: 768px) {
  .honors-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .honor-item {
    padding: 1rem;
  }

  .honor-icon {
    font-size: 1.5rem;
  }

  .honor-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .honor-item {
    padding: 0.75rem;
    gap: 0.75rem;
  }

  .honor-icon {
    font-size: 1.3rem;
  }

  .honor-text {
    font-size: 0.85rem;
  }
}
</style>
