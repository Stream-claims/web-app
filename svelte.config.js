import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';
import { join } from 'path';

export default {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      autoDeploy: true,
      cdkProjectPath: join(process.cwd(), './infrastructure/deploy.js')
    }),
  },
};