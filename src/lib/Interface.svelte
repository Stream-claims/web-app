<script lang="ts">
    import DateOfService from '../lib/DateOfService.svelte'
    import DocumentDetails from '../lib/DocumentDetails.svelte'
    import PDFViewer from '../lib/PDFViewer.svelte'
</script>


<div class="container">

<div class="element dos">
  <DateOfService/>
</div>

<div class="element docdetails"> 
  <DocumentDetails/>
 </div>

  <div class="element pdfviewer"> PDF
     <PDFViewer/>
    </div>

</div>

<style>
  .container {
    display: flex;
    gap: 20px;
    flex-grow: 1;
    text-align: center;
  }
  .element {
    padding: 10px;
    border: 1px solid black;
    flex-grow: 1
  }
  .dos {
    display: flex;
    flex-direction: column;
    flex-grow: 1
  }
  .docdetails {
    flex-grow: 6
  }
  .pdfviewer {
    flex-grow: 13
  }
</style>