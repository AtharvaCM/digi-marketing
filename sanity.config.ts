/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */
import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { LuPencil } from 'react-icons/lu';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { media } from 'sanity-plugin-media';

import LogoIcon from './components/LogoIcon';
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env';
import { deskStructure, getDefaultDocumentNode } from './sanity/lib/deskStructure';
import { presentation } from './sanity/presentation/presentation';
import { schemaTypes } from './sanity/schemas';

const singletonTypes = ['site'];

export default defineConfig({
  title: 'Growth Stats',
  basePath: '/studio',
  icon: LogoIcon,
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType)),
  },
  plugins: [
    structureTool({
      title: 'Content',
      structure: (S) => deskStructure(S),
      defaultDocumentNode: getDefaultDocumentNode,
      icon: LuPencil,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ title: 'GROQ', defaultApiVersion: apiVersion }),
    presentation,
    codeInput(),
    media(),
  ],
  document: {
    actions: (input, { schemaType }) => {
      const docActionComponents = singletonTypes.includes(schemaType)
        ? input.filter(({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : input;

      return docActionComponents;
    },
  },
});
