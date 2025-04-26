import { defineConfig } from '@fullstacksjs/eslint-config';

export default defineConfig({
  strict: true,
  node: true,
  typescript: {
    tsconfigRootDir: import.meta.dirname,
    projectService: {
      allowDefaultProject: ['tsdown.config.ts'],
    },
  },
});
