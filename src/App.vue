<template>
  <div id="app">
    <my-header></my-header>
    <home></home>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import Home from './components/Home'
import './assets/css/base.css'

export default {
  name: 'app',
  components: {
    MyHeader,
    Home
  }
}
</script>
