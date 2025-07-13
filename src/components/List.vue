<template>
  <ul>
    <li v-for="item in source">
      <div class="item">
        <span class="left">
          {{ item.left }}
          <small>
            <a class="link" v-if="item.link" :href="item.link" target="_blank"> ({{ item.link }})</a>
          </small>
        </span>
        <span class="right">{{ item.right }}</span>
      </div>
      <ul>
        <li v-for="childrenItem in item.children">
          <p class="children-item">
            <span class="left">
              <span v-html="renderLeft(childrenItem.left)"></span>
              <a class="link" v-if="childrenItem.link" :href="childrenItem.link" target="_blank">
                <strong>（{{ childrenItem.link }}）</strong>
              </a>
            </span>
            <span class="right">{{ childrenItem.right }}</span>
          </p>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  source: {
    type: Array,
    required: true
  }
})
const renderLeft = left => {
  return left.replace(/\*([\w.\s&()\/+,，、-]+)\*/g, '<strong>$1</strong>')
}
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item,
.children-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.item {
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-quaternary) 100%);
  border-radius: 12px;
  border-left: 4px solid var(--accent-color);
  box-shadow: 0 2px 8px var(--shadow-light);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px var(--shadow-medium);
    border-left-color: var(--accent-hover);
  }

  .left {
    flex: 1;
    font-weight: 600;
    color: var(--text-primary);
    line-height: 1.6;
    transition: color 0.3s ease;
  }

  .right {
    font-weight: 500;
    color: var(--text-tertiary);
    white-space: nowrap;
    font-size: 0.95rem;
    transition: color 0.3s ease;
  }

  small {
    display: inline-block;
    margin-top: 0.5rem;
  }
}

.children-item {
  font-size: 0.9em;
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  background: var(--bg-secondary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;

  &:hover {
    background: var(--bg-tertiary);
    border-color: var(--accent-color);
  }

  .left {
    font-weight: 500;
    color: var(--text-secondary);
    transition: color 0.3s ease;
  }

  .right {
    color: var(--text-tertiary);
    font-size: 0.9rem;
    transition: color 0.3s ease;
  }
}

.link {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: rgba(102, 126, 234, 0.1);

  &:hover {
    color: var(--accent-hover);
    background: rgba(102, 126, 234, 0.2);
    text-decoration: none;
    transform: scale(1.05);
  }
}

// 嵌套列表样式
ul ul {
  margin-top: 1rem;
  padding-left: 0;

  li {
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .item,
  .children-item {
    flex-direction: column;
    gap: 0.5rem;
  }

  .item {
    padding: 1rem;
  }

  .children-item {
    padding: 0.75rem 1rem;
  }

  .right {
    align-self: flex-start;
    font-size: 0.9rem !important;
  }
}
</style>
