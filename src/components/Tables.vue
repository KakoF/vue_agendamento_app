<template>
  <div>
    <b-row align-v="center" class="mb-3">
     <b-col xl="2" offset-xl="10" lg="3" offset-lg="9" md="3" offset-md="9"><b-button variant="primary">Novo Agendamento</b-button></b-col>
    </b-row>
     <b-row class="mb-3">
     <b-col md="3" offset-md="9">
      <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Escreva para Buscar"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Limpar</b-button>
            </b-input-group-append>
          </b-input-group>
      </b-col>
    </b-row>
      <b-table
        :filter="filter"
        sticky-header
        :items="items"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        sort-icon-left
        responsive="sm"
        @filtered="onFiltered"
      ></b-table>
      <div class="mt-3">
         <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" align="center"></b-pagination>
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    currentPage: 1,
    filter: null,
    rows: 1,
    perPage: 10,
    sortBy: 'age',
    sortDesc: false,
    fields: [
      { key: 'last_name', sortable: true },
      { key: 'first_name', sortable: true },
      { key: 'age', sortable: true },
      { key: 'isActive', sortable: false }
    ],
    items: [
      { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
      { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
      { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
      { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
      { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
      { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
      { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' }

    ]
  }),
  mounted () {
    this.rows = this.items.length
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    }
  },
  methods: {
    onFiltered (filteredItems) {
      console.log(filteredItems)
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.rows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>
