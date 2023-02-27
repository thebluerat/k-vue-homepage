<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class="container">
      <div class="title">
          <div class="inner">
              <h1>DATA Solution</h1>
              <h1>Provider</h1>
              <span>기업의 데이터 분석을 통한 종합적인 상황분석,</span>
              <span>신속한 의사결정, 전략경영을 위한</span>
              <span>최적의 솔루션을 공급합니다.</span>
          </div>
      </div>
  </div>
</template>
<style scoped>
.container {
    background-image: url("@/assets/images/mainimg.jpg");
    background-size: cover;
    height: 100vh;
}
.title {
    display: flex;
    height: calc(100vh - 70px);
    align-items: center;
}
.title .inner > h1 {
    font-size: 4em;
}
.title .inner > span {
    font-size: 1.5em;
    display: block;
}
@media screen and (max-width: 768px) {
    .container {
        background-position: center center;
        background-repeat: no-repeat;background-attachment: fixed;background-size: cover;
    }
    .title .inner {
        width: 100%;
        padding: 30px;
    }
    .title .inner > h1 {
        margin: 0;
        line-height: 1em;
    }
    .title .inner > h1, .title .inner > span {
        background-color: #dcfaffd2;
        mix-blend-mode: luminosity;
    }
    .title .inner > span {
        font-size: 1.2em;
        padding: 10px 0;
    }
}
</style>
