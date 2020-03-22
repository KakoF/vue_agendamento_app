<template>
    <div>
      <header-page title="Bem-Vindo"/>
      <b-row>
          <b-col>
          <div>
              <card title="Lista de Agendamentos">
                  <tables />
              </card>
          </div>
          </b-col>
      </b-row>
    </div>
</template>
<script>
import HeaderPage from '@/components/HeaderPage'
import Card from '@/components/Card'
import Tables from '@/components/Tables'
export default {
  data: () => ({

  }),
  components: {
    HeaderPage,
    Card,
    Tables
  }
}
</script>
