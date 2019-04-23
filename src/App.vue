<template>
  <div id="app">
    <counter></counter>
  </div>
</template>

<script>
  import Message from './components/Message';
  import Counter from './components/Counter';

  export default {
    name: 'app',
    components: { Message, Counter },
    data () {
      return {

      }
    }
  }
</script>

<style>

</style>
