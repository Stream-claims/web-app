<script lang="ts">
    import DateOfService from '../lib/DateOfService.svelte'
    import DocumentDetails from '../lib/DocumentDetails.svelte'
    import PDFViewer from '../lib/PDFViewer.svelte'
</script>


<div class="container">

<div class="element">
  <DateOfService/>
</div>

<div class="element"> 
  <DocumentDetails/>
 </div>

  <div class="element"> Element 3 </div>
   <!-- <PDFViewer {pdfUrl} /> -->
</div>

<style>
  .container {
    display: flex;
    gap: 20px;
    flex-grow: 1;
  }
  .element {
    padding: 10px;
    border: 1px solid black;
    flex-grow: 1
  }
</style>