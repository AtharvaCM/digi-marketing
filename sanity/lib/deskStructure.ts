import { EditIcon, RocketIcon } from '@sanity/icons';
import { BsDatabaseAdd } from 'react-icons/bs';
import { LuFileJson } from 'react-icons/lu';
import { VscFiles, VscServerProcess } from 'react-icons/vsc';
import { StructureBuilder } from 'sanity/structure';

import JsonPreview from '../plugins/sanity-plugin-json-preview/src/JsonPreview';
import { DeadLinks, Preflight } from '../plugins/sanity-plugin-preflight/src';
import { group, singleton } from '../utils';

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Growth Stats Content')
    .items([
      singleton(S, 'site').icon(VscServerProcess),
      S.divider(),

      S.documentTypeListItem('page').title('Pages').icon(VscFiles),
      S.documentTypeListItem('global-module').title('Global modules'),
      S.divider(),

      S.documentTypeListItem('blog.post').title('Blog posts'),
      S.documentTypeListItem('blog.category').title('Blog categories'),
      S.divider(),

      S.documentTypeListItem('navigation'),
      S.documentTypeListItem('redirect').title('Redirects'),
      S.divider(),

      group(S, 'Miscellaneous', [
        S.documentTypeListItem('announcement').title('Announcements'),
        S.documentTypeListItem('logo').title('Logos'),
        S.documentTypeListItem('person').title('People'),
        S.documentTypeListItem('pricing').title('Pricing tiers'),
        S.documentTypeListItem('testimonial').title('Testimonials'),
      ]).icon(BsDatabaseAdd),
    ]);

export const getDefaultDocumentNode = (S: StructureBuilder, { schemaType }: { schemaType: string }) => {
  // Only show the Preflight plugin on selected document types
  if (['blog.post', 'page'].includes(schemaType)) {
    return S.document().views([
      // Include the default content editor
      S.view.form().icon(EditIcon),

      // Add Preflight component
      S.view
        .component(
          Preflight({
            plugins: [
              DeadLinks({
                content: 'modules',
              }),
            ],
          }),
        )
        .title('Preflight')
        .icon(RocketIcon),

      // Add JSON Preview component
      S.view.component(JsonPreview).title('JSON').icon(LuFileJson),
    ]);
  }

  // Otherwise render the default content editor
  return S.document().views([S.view.form(), S.view.component(JsonPreview).title('JSON').icon(LuFileJson)]);
};
