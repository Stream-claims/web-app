<script lang="ts">
  export let dates;

  let serviceDates = ['2023-05-17', '2023-05-18', '2023-05-19'];
  let selectedDate;
</script>


<p>Date of service</p>
{#each serviceDates as date}
	<button class="date">
		{date}
	</button>
{/each}
