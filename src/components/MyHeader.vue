<template>
  <div class="my-header">
    <a href="/"><img src="../assets/layout/header-logo.png" alt="Space Science"></a>
    <ul>
      <a v-for="item in menu_items" v-bind:href="item.url" v-on:click.prevent="toggleMenu">
        <li :class="{'active':active_menu == item.name}">{{item.name}}</li>
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {
      active_menu: 'Home',
      menu_items: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'About',
          url: '/about'
        },
        {
          name: 'Projects',
          url: '/projects'
        },
        {
          name: 'Blog',
          url: '/blog'
        },
        {
          name: 'Contact',
          url: '/contact'
        }
      ]
    }
  },
  methods: {
    toggleMenu: function() {
      console.log("don't know yet")
    }
  }
}
</script>
