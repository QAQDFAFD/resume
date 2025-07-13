<template>
  <div class="theme-toggle" @click="toggleTheme" :title="isDarkMode ? '切换到亮色模式' : '切换到黑夜模式'">
    <div class="toggle-container">
      <div class="toggle-track" :class="{ active: isDarkMode }">
        <div class="toggle-thumb" :class="{ active: isDarkMode }">
          <div class="toggle-icon">
            <svg
              v-if="!isDarkMode"
              class="sun-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2">
              <circle cx="12" cy="12" r="5" />
              <path
                d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <svg v-else class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const { isDarkMode, toggleTheme } = inject('darkMode')
</script>

<style scoped lang="scss">
.theme-toggle {
  position: relative;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
}

.toggle-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.toggle-track {
  position: relative;
  width: 60px;
  height: 30px;
  background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%);
  border-radius: 15px;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05);

  &.active {
    background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: radial-gradient(circle, #fbbf24 0%, #f59e0b 100%);
    border-radius: 50%;
    opacity: 1;
    transition: all 0.3s ease;
    box-shadow: 0 0 8px rgba(251, 191, 36, 0.6);
  }

  &.active::before {
    opacity: 0;
    transform: translateY(-50%) scale(0.5);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background: radial-gradient(circle, #e2e8f0 0%, #cbd5e0 100%);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: -2px -2px 4px rgba(226, 232, 240, 0.8), 0 0 6px rgba(203, 213, 224, 0.4);
  }

  &.active::after {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
}

.toggle-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    transform: translateX(30px);
    background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);
  }
}

.toggle-icon {
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }

  .sun-icon {
    color: #f59e0b;
    filter: drop-shadow(0 0 2px rgba(245, 158, 11, 0.5));
  }

  .moon-icon {
    color: #e2e8f0;
    filter: drop-shadow(0 0 2px rgba(226, 232, 240, 0.5));
  }
}

// 添加一些动画效果
@keyframes sunRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes moonGlow {
  0%,
  100% {
    filter: drop-shadow(0 0 2px rgba(226, 232, 240, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 6px rgba(226, 232, 240, 0.8));
  }
}

.toggle-thumb:not(.active) .sun-icon {
  animation: sunRotate 20s linear infinite;
}

.toggle-thumb.active .moon-icon {
  animation: moonGlow 3s ease-in-out infinite;
}

// 响应式设计
@media (max-width: 768px) {
  .toggle-track {
    width: 50px;
    height: 26px;
  }

  .toggle-thumb {
    width: 20px;
    height: 20px;
    top: 3px;
    left: 3px;

    &.active {
      transform: translateX(24px);
    }
  }

  .toggle-icon {
    width: 12px;
    height: 12px;
  }
}
</style>
