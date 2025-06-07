<template>
  <div class="resume-container">
    <div class="resume-content">
      <!-- 个人信息头部 -->
      <div class="header-section">
        <div class="personal-info">
          <h1 class="name">
            {{ info.name }}
            <svg
              height="28"
              aria-hidden="true"
              viewBox="0 0 24 24"
              version="1.1"
              width="28"
              data-view-component="true"
              class="github-icon"
              @click="goGithub">
              <path
                d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
            </svg>
          </h1>
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span class="contact-text">{{ info.tel }}</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <span class="contact-text">{{ info.email }}</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">💼</span>
              <span class="contact-text">前端开发工程师</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 个人链接 -->
      <div class="section-card">
        <div class="section-header">
          <h3 class="section-title">个人链接</h3>
          <div class="section-divider"></div>
        </div>
        <div class="links-grid">
          <div class="link-item">
            <span class="link-label">Github:</span>
            <a :href="info.github" target="_blank" class="link-url">{{ info.github }}</a>
          </div>
          <div class="link-item">
            <span class="link-label">知乎:</span>
            <a :href="info.zhihu" target="_blank" class="link-url">{{ info.zhihu }}</a>
          </div>
        </div>
      </div>

      <!-- 教育背景 -->
      <div class="section-card">
        <div class="section-header">
          <h3 class="section-title">教育背景</h3>
          <div class="section-divider"></div>
        </div>
        <List :source="info.edus"></List>
      </div>

      <!-- 技能清单 -->
      <div class="section-card">
        <div class="section-header">
          <h3 class="section-title">技能清单</h3>
          <div class="section-divider"></div>
        </div>
        <Skills :skills="info.skills"></Skills>
      </div>

      <!-- 实习经历 -->
      <div class="section-card">
        <div class="section-header">
          <h3 class="section-title">实习经历</h3>
          <div class="section-divider"></div>
        </div>
        <List :source="info.works"></List>
      </div>

      <!-- 项目经历 -->
      <div class="section-card">
        <div class="section-header">
          <h3 class="section-title">项目经历</h3>
          <div class="section-divider"></div>
        </div>
        <Project :opt="info.projects"></Project>
      </div>

      <!-- 荣誉证书 -->
      <div class="section-card">
        <div class="section-header">
          <h3 class="section-title">荣誉证书</h3>
          <div class="section-divider"></div>
        </div>
        <Honor :honor="info.honor"></Honor>
      </div>
    </div>
  </div>
</template>

<script setup>
import List from '../components/List.vue'
import Skills from '../components/Skills.vue'
import Project from '../components/Project.vue'
import Honor from '../components/Honor.vue'
import info from '../assets/info'

const goGithub = () => {
  window.open(info.github, '_blank')
}
</script>

<style lang="scss" scoped>
.resume-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.resume-content {
  max-width: 900px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.header-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 3rem 2rem;
  text-align: center;
  color: white;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }

  .personal-info {
    position: relative;
    z-index: 1;
  }
}

.name {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.github-icon {
  cursor: pointer;
  transition: all 0.3s ease;
  fill: currentColor;

  &:hover {
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  }
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }
}

.contact-icon {
  font-size: 1.2rem;
}

.contact-text {
  font-weight: 500;
  font-size: 1rem;
}

.section-card {
  padding: 2.5rem;
  border-bottom: 1px solid #f0f2f5;
  transition: all 0.3s ease;

  &:hover {
    background: #fafbfc;
  }

  &:last-child {
    border-bottom: none;
  }
}

.section-header {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;
}

.section-divider {
  height: 3px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
  width: 60px;
  margin-bottom: 1rem;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.link-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid #667eea;
  transition: all 0.3s ease;

  &:hover {
    background: #e9ecef;
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
  }
}

.link-label {
  font-weight: 600;
  color: #495057;
  min-width: 80px;
}

.link-url {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: #764ba2;
    text-decoration: underline;
  }
}

// 响应式设计
@media (max-width: 768px) {
  .resume-container {
    padding: 1rem 0.5rem;
  }

  .resume-content {
    border-radius: 15px;
  }

  .header-section {
    padding: 2rem 1rem;
  }

  .name {
    font-size: 2.2rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .contact-info {
    flex-direction: column;
    gap: 1rem;
  }

  .contact-item {
    justify-content: center;
  }

  .section-card {
    padding: 1.5rem;
  }

  .links-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .name {
    font-size: 1.8rem;
  }

  .section-card {
    padding: 1rem;
  }

  .contact-item {
    padding: 0.5rem 1rem;
  }
}
</style>
