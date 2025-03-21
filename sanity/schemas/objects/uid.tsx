import { Box, Button, Flex, Text, TextInput } from '@sanity/ui';
import { ReactNode, useState } from 'react';
import { VscCheck, VscCopy } from 'react-icons/vsc';
import { defineType } from 'sanity';

export default defineType({
  name: 'uid',
  title: 'Unique Identifier',
  description: 'Used for anchor/jump links (HTML `id` attribute).',
  type: 'string',
  validation: (Rule) => Rule.regex(/^[a-zA-Z0-9-]+$/g).error('Must not contain spaces or special characters'),
  components: {
    input: ({ elementProps, path }): ReactNode => {
      const indexOfModule = path.indexOf('modules');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const moduleKey = (path[indexOfModule + 1] as any)?._key;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [checked, setChecked] = useState(false);

      return (
        <Flex gap={1} align="center">
          <Text muted>#</Text>

          <Box flex={1}>
            <TextInput {...elementProps} placeholder={moduleKey} radius={2} />
          </Box>

          <Button
            title="Click to copy"
            mode="ghost"
            icon={checked ? VscCheck : VscCopy}
            disabled={checked}
            onClick={() => {
              navigator.clipboard.writeText('#' + (elementProps.value ?? moduleKey));
              setChecked(true);
              setTimeout(() => setChecked(false), 1000);
            }}
          />
        </Flex>
      );
    },
  },
});
