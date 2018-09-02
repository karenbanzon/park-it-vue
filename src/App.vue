<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :clipped="nav.isClipped"
      v-model="nav.isDrawerOpen"
      disable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in nav.items"
          :key="i"
          router
          :to="{ name: item.routeName }"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      dark
      color="primary"
      :clipped-left="nav.isClipped"
    >
      <v-toolbar-side-icon @click.stop="nav.isDrawerOpen = !nav.isDrawerOpen"></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-btn
          flat
          router
          :to="{ name: 'home' }"
        >{{ title }}</v-btn>
        <v-icon v-if="this.$route.name !== 'home'">arrow_right</v-icon>
        <span v-if="this.$route.name !== 'home'" class="pl-3">Showing {{ this.$route.params.filter }} parking spaces</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-speed-dial
      v-model="fabSettings.fab"
      bottom
      right
      fixed
      direction="top"
      open-on-hover
    >
      <v-btn
        slot="activator"
        v-model="fabSettings.fab"
        color="primary darken-2"
        dark
        fab
      >
        <v-icon>directions_car</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="blue"
        router
        :to="{ name: 'parking-nearby' }"
      >
        <v-icon>near_me</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="teal"
        router
        :to="{ name: 'parking-all' }"
      >
        <v-icon>view_list</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="orange"
        @click.stop="showSearch = !showSearch"
      >
        <v-icon>search</v-icon>
      </v-btn>
    </v-speed-dial>
    <v-dialog
      v-model="showSearch"
      width="500"
    >
      <v-card class="pa-3">
        <v-autocomplete
          v-model="searchQuery"
          :items="allSpaces"
          item-text="name"
          :label="`Search for parking spaces`"
          prepend-icon="search"
        >
        </v-autocomplete>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="primary"
            :disabled="searchQuery === ''"
            >Navigate</v-btn>
          <v-btn
            flat
            color="primary"
            :disabled="searchQuery === ''"
            >Book space</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      title: 'Park It!',
      showSearch: false,
      searchQuery: '',
      isEditingSearch: false,
      nav: {
        isClipped: true,
        isDrawerOpen: false,
        isFixed: false,
        items: [
          {
            icon: 'home',
            title: 'Home',
            routeName: 'home'
          },
          {
            icon: 'info',
            title: 'About',
            routeName: 'about'
          }
        ]
      },
      fabSettings: {
        direction: 'top',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-y-reverse-transition'
      }
    }
  },
  computed: {
    ...mapState(['allSpaces']),

    activeFab() {
      switch (this.tabs) {
        case 'one':
          return { class: 'purple', icon: 'account_circle' }
        case 'two':
          return { class: 'red', icon: 'edit' }
        case 'three':
          return { class: 'green', icon: 'keyboard_arrow_up' }
        default:
          return {}
      }
    }
  }
}
</script>
