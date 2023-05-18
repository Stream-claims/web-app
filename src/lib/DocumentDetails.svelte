<script lang="ts">
let documentData = [
    { key: 'Key1', value: 'Value1' },
    { key: 'Key2', value: 'Value2' },
    { key: 'Key3', value: 'Value3' },
    // Add more key-value pairs as needed
  ];
</script>

<div class="element">
    <p>Document data</p>
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {#each documentData as item (item.key)}
          <tr>
            <td>{item.key}</td>
            <td>{item.value}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>