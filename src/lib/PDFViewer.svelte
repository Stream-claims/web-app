<script>
  import { onMount } from 'svelte';

  let pdfDoc;
  let currentPage = 1;
  let totalPages = 0;
  let canvasRef;
  let context;

  async function loadPDF(url) {
    const loadingTask = pdfjsLib.getDocument(url);
    pdfDoc = await loadingTask.promise;
    totalPages = pdfDoc.numPages;
    renderPage(currentPage);
  }

  async function renderPage(pageNumber) {
    const page = await pdfDoc.getPage(pageNumber);

    const scale = 1.5;
    const viewport = page.getViewport({ scale });

    const canvas = canvasRef;
    context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };

    await page.render(renderContext);
  }

  function goToPage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      currentPage = pageNumber;
      renderPage(currentPage);
    }
  }

  onMount(() => {
    const url = 'path/to/your/pdf/file.pdf';
    loadPDF(url);
  });
</script>

<main>
  <canvas bind:this={canvasRef}></canvas>

  <div>
    <button on:click={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
    <span>{currentPage} of {totalPages}</span>
    <button on:click={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
  </div>
</main>

<style>
  canvas {
    border: 1px solid #ccc;
  }
</style>

<!-- <script>
  import * as PdfViewer from 'svelte-pdf-viewer'

  let myFileUrl = '../assets/file.pdf';
  let pdfInfos

</script>

<PdfViewer file={ myFileUrl} bind:infos={ pdfInfos }/>
-->
