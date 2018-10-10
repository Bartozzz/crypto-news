<template>
  <div class="loader">
    <div class="loader-content">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        <rect x="0" y="13" width="4" height="5" fill="#fff">
          <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite" />
        </rect>

        <rect x="10" y="13" width="4" height="5" fill="#fff">
          <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
        </rect>

        <rect x="20" y="13" width="4" height="5" fill="#fff">
          <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style lang="scss" scoped>
.loader {
  position: absolute;

  width: 100vw;
  height: 100vh;

  &-content {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    /* Prevents showing loader if page loads quickly */
    opacity: 0;
    animation-name: fadeIn;
    animation-delay: 1000ms;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
