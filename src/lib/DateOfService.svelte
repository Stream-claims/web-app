<script lang="ts">
  let serviceDates = ['2023-05-17', '2023-05-18', '2023-05-19'];
  let selectedDate;
</script>

  <div class="element">
    <p>Date of service</p>
    <select bind:value={selectedDate}>
      <option disabled>Select a date</option>
      {#each serviceDates as date}
        <option value={date}>{date}</option>
      {/each}
    </select>
  </div>
