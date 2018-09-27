<template>
  <b-row>
    <b-col class="mb-3" xs="12" sm="6">
      <b-card bg-variant="card" border-variant="transparent">
        <div class="mt-1">
          <b-dropdown text="Select coin" variant="transparent">
            <b-dropdown-item>Item</b-dropdown-item>
          </b-dropdown>

          <span class="float-right">Foo</span>
        </div>

        <b-form-group description="Price actualized each 10 seconds">
          <b-form-input class="my-1" placeholder="Amount" disabled></b-form-input>
          <b-form-input class="my-1" placeholder="Price in USD" disabled></b-form-input>
        </b-form-group>
      </b-card>
    </b-col>

    <b-col class="mb-3" xs="12" sm="6">
      <b-card bg-variant="card" border-variant="transparent">
        <div class="mt-1">
          <b-dropdown text="Select coin" variant="transparent">
            <b-dropdown-item>Item</b-dropdown-item>
          </b-dropdown>

          <span class="float-right">Foo</span>
        </div>

        <b-form-group description="Price actualized each 10 seconds">
          <b-form-input class="my-1" placeholder="Amount" disabled></b-form-input>
          <b-form-input class="my-1" placeholder="Price in USD" disabled></b-form-input>
        </b-form-group>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Converter"
}
</script>

<style scoped>
.row {
  max-width: 610px;
}
</style>
