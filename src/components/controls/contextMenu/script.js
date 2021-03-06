export default {
  props: [
    'menuItems',
    'menuEvents'
  ],

  data () {
    return {
      showMenu: false,
      x: 0, // Horizontal position of menu
      y: 0 // Vertical position of menu
    }
  },

  watch: {
    menuEvents (event) {
      // Hide menu until position is set
      this.showMenu = false
      // Set position of menu to position of cursor
      this.x = event.clientX
      this.y = event.clientY

      // Show menu after DOM is updated
      this.$nextTick(() => {
        this.showMenu = true
      })
    }
  }
}
