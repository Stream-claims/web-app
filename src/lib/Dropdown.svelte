<script lang="ts">
  import { onMount, afterUpdate, onDestroy } from 'svelte';
  import { clickOutside } from "./click_outside.js";

  export let options = [];
  export let selectedOption = null; 

  let isOpen = false;
  let fileInput;

  function selectOption(option) {
    selectedOption = option;
    isOpen = false;
  }

  function handleFilePickerClick() {
    fileInput.click();
  }

  function dropdownToggle() {
    isOpen = !isOpen;
  }

    function handleFileUpload(event) {
    const file = event.target.files[0];
    // Perform further processing with the uploaded file
    console.log('Uploaded file:', file);
  }
</script>


<div class="dropdown-container">

  <p class="dropdown-text"> Claims </p>

  <button class="dropdown-toggle" on:click={dropdownToggle} use:clickOutside on:outclick={() => (isOpen = false)}>
    {selectedOption ? selectedOption : 'Select an option'}
    <span class="dropdown-icon">{isOpen ? '▲' : '▼'}</span>
  </button>

  {#if isOpen}
    <ul class="dropdown-menu">
      {#each options as option}
        <li class="dropdown-option" on:click={() => selectOption(option)}>{option}</li>
      {/each}
    </ul>
  {/if}

<button class="file-picker" on:click={handleFilePickerClick}>
Choose File
</button>

<input type="file" bind:this={fileInput} hidden on:change={handleFileUpload}>

</div>



<style>
  .dropdown-text {
    font-weight: bold;
  }

  .dropdown-container {
    display: flex;
    position: relative;
    gap: 30px;
    margin-bottom: 25px;
  }

  .dropdown-toggle {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  .dropdown-icon {
    margin-left: 4px;
    transform: rotate(0deg);
    transition: transform 0.2s;
  }

  .dropdown-icon.rotate {
    transform: rotate(180deg);
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 4px 0;
    z-index: 999;
  }

  .dropdown-option {
    padding: 8px 12px;
    cursor: pointer;
  }
  
</style>
