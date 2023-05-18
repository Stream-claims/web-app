<script>
  import { onMount } from "svelte";
  // import { getDocument } from 'pdfjs-dist/es5/build/pdf';

  export let url = '';

  let pdfDoc = null;
  let pageNum = 1;
  let pageNumPending = null;
  let scale = 0.8;
  let canvas = null;
  let ctx = null;

  async function renderPage(num) {
    const page = await pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    const renderTask = page.render(renderContext);
    await renderTask.promise;
    pageNumPending = null;
  }

  function queueRenderPage(num) {
    if (pageNumPending !== null) {
      pageNumPending = num;
    } else {
      renderPage(num);
    }
  }

  async function onPrevPage() {
    if (pageNum <= 1) {
      return;
    }
    pageNum--;
    queueRenderPage(pageNum);
  }

  async function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
      return;
    }
    pageNum++;
    queueRenderPage(pageNum);
  }

  onMount(async () => {
    canvas = document.getElementById('pdfCanvas');
    ctx = canvas.getContext('2d');
    pdfDoc = await getDocument(url).promise;
    renderPage(pageNum);
  });
</script>

<button on:click={onPrevPage}>Prev</button>
<button on:click={onNextPage}>Next</button>
<canvas id="pdfCanvas"></canvas>

<style>
  /* Add styles here */
</style>
