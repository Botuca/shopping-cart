<template>
  <footer class="footer-base bg-gray-300 text-xs border-t border-gray-400">
    <span>Criado por: <b>Luiz Gustavo Eburneo</b></span>
    <div class="text-2xl ml-2">
      <a href="https://github.com/Botuca" target="_blank" class="pr-2">
        <i class="fa-brands fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/luizeburneo"
        target="_blank"
        class="pr-2"
      >
        <i class="fa-brands fa-linkedin" />
      </a>
      <a href="https://www.instagram.com/gustavo_eburneo" target="_blank">
        <i class="fa-brands fa-square-instagram" />
      </a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterBase',
  };
</script>

<style scoped>
  .footer-base {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 8px;
    height: 53px;
  }
</style>
