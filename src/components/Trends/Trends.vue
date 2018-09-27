<template>
  <b-table
    outlined
    responsive
    caption="Data provided in real-time from CryptoCurrency API."
    class="trend"
    thead-class="trend-thead"
    thead-tr-class="trend-thead-tr"
    tbody-class="trend-tbody"
    tbody-tr-class="trend-tbody-tr"
    tfoot-class="trend-tfoot"
    tfoot-tr-class="trend-tfoot-tr"
    :items="items"
    :fields="fields"
  >
    <template slot="show_details" slot-scope="row">
      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
       {{ row.detailsShowing ? 'Hide' : 'Show'}} details
      </b-button>
    </template>

    <template slot="row-details" slot-scope="row">
      <b-card bg-variant="card">
        Tutaj wykres…
      </b-card>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "Trends",

  data() {
    return {
      fields: [
        {
          key: 'fsym',
          label: 'Name',
          sortable: false
        },
        {
          key: 'low',
          label: 'Min.',
          sortable: true
        },
        {
          key: 'high',
          label: 'Max.',
          sortable: true
        },
        {
          key: 'open',
          label: 'Open',
          sortable: true,
        },
        {
          key: 'close',
          label: 'Close',
          sortable: true,
        },
        {
          key: "show_details"
        }
      ],
      items: [
        { fsym: "BTC", low: 6333.21, high: 6583.54, close: 12123, open: 6583.53 },
        { fsym: "BTC", low: 6333.21, high: 6583.54, close: 12123, open: 6583.53 },
        { fsym: "BTC", low: 6333.21, high: 6583.54, close: 12123, open: 6583.53 }
      ]
    }
  }
}
</script>

<style>
.trend {
  background-color: #323639;
  box-shadow: 0 0 15px 10px #323639;
}

.trend .border,
.trend-thead-tr th {
  border-color: transparent !important;
}

.trend-tbody-tr td {
  border-color: #6c757d !important;
}

.trend-thead-tr th:last-child,
.trend-tbody-tr td:last-child {
  text-align: right;
}

.trend-tbody,
.trend-thead {
}

.trend-thead-tr {
  font-size: 0.85em;
  text-transform: uppercase;
}

.trend-tbody-tr {
}
</style>
