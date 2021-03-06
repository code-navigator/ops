import { mapState, mapActions, mapGetters } from 'vuex'
import dataTable from '@Controls/dataTable/index'
import contextMenu from '@Controls/contextMenu/index'

export default {
  components: {
    dataTable: dataTable,
    contextMenu: contextMenu
  },

  computed: {
    ...mapState('specHelper', [
      'headers',
      'isEdit',
      'pdf',
      'activeTab',
      'tabs'
    ]),

    ...mapGetters('specHelper', {
      id: 'currentRequirementId',
      items: 'requirements'
    }),

    active: {
      get () {
        return this.activeTab
      },
      set (newValue) {
        this.setActiveTab(newValue)
      }
    },

    menuItems () {
      return [
        {
          title: 'Edit',
          handler: this.edit,
          show: !this.isEdit,
          separator: true
        },
        {
          title: 'Add',
          handler: this.addRequirement,
          shortcut: ['ctrl', 'alt', 'enter'],
          show: this.isEdit,
          separator: false
        },
        {
          title: 'Remove',
          handler: this.removeRequirement,
          show: this.isEdit,
          separator: false
        },
        {
          title: 'Remove All',
          handler: this.removeAllRequirements,
          show: this.isEdit,
          separator: true
        },
        {
          title: 'Save',
          handler: this.save,
          show: this.isEdit,
          separator: false
        },
        {
          title: 'Cancel',
          handler: this.cancelEdit,
          show: this.isEdit,
          separator: false
        }
      ]
    }
  },

  data () {
    return {
      destination: Object, // Element for dropping dragged element
      menuEvents: Object, // Events for displaying Menu
      source: 0 // Element dragged
    }
  },

  methods: {
    ...mapActions('specHelper', [
      'addRequirement',
      'cancelEdit',
      'edit',
      'expandRequirements',
      'openTab',
      'removeAllRequirements',
      'removeRequirement',
      'reorderRequirements',
      'save',
      'selectRequirement',
      'setActiveTab'
    ]),

    // Show menu
    show (e) {
      // Save event variable to update Menu props
      this.menuEvents = e
      // Hide standard menu
      e.preventDefault()
    },

    // -- DRAG & DROP METHODS
    // Start drag
    dragStarted (item, e) {
      this.source = item
      e.dataTransfer.setData('text', e.target.innerHTML)
      e.dataTransfer.effectAllowed = 'move'
    },

    // Drag element
    draggingOver (e) {
      e.preventDefault()
      e.dataTransfer.dropEffect = 'move'
    },

    // Drop element
    dropped (item, e) {
      e.preventDefault()
      e.stopPropagation()

      if (this.isEdit) {
        this.destination = item

        this.reorderRequirements({
          source: this.source,
          destination: this.destination
        })
      }
    }
  }
}
