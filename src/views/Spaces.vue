<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs6 sm8 md9>
            <h1>Showing <strong>{{ this.$route.params.filter }}</strong> parking spaces</h1>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex v-for="item in allSpaces" :key="item.index" xs12 sm6 md4 pa-2>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h1 class="headline">
                    <v-icon
                      v-if="item.slotsFree < 5 && item.slotsFree > 0"
                      color="warning"
                      class="pa-1"
                    >warning</v-icon>
                    <v-icon
                      v-if="item.slotsFree === 0"
                      color="error"
                      class="pa-1"
                    >error</v-icon> {{ item.slotsFree }} <small class="grey--text">slots free</small></h1>
                  <h2>{{ item.name }}</h2>
                  <span class="grey--text">{{ item.distance }} ● {{ item.priceRange }}</span>
                  <!-- <v-rating
                    dense
                    color="primary"
                    background-color="grey"
                    v-model="item.rating"
                  ></v-rating> -->
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn icon @click="item.favorite = !item.favorite">
                  <v-icon
                    v-if="item.favorite === true"
                    color="red"
                  >favorite</v-icon>
                  <v-icon
                    v-else
                    color="grey"
                  >favorite</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn flat color="primary">Navigate</v-btn>
                <v-btn flat color="primary">Book space</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
</style>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
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
  }),
  computed: {
    ...mapState(['nearby', 'recent', 'allSpaces'])
  },
  watch: {}
}
</script>
