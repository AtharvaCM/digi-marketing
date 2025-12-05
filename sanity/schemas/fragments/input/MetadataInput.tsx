import { useEffect } from 'react';
import { ObjectInputProps, PatchEvent, set, unset } from 'sanity';

const isObject = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === 'object' && !Array.isArray(value);

const MetadataInput = (props: ObjectInputProps) => {
  const { value, onChange } = props;

  useEffect(() => {
    if (!isObject(value)) {
      onChange(PatchEvent.from([set({ _type: 'metadata' })]));
      return;
    }

    const patches = [];

    if (!value._type) {
      patches.push(set({ ...value, _type: 'metadata' }));
    }

    if (value.image && !isObject(value.image)) {
      patches.push(unset(['image']));
    } else if (isObject(value.image) && value.image._type !== 'image') {
      patches.push(set({ ...value.image, _type: 'image' }, ['image']));
    }

    if (value.openGraph && !isObject(value.openGraph)) {
      patches.push(unset(['openGraph']));
    } else if (isObject(value.openGraph) && value.openGraph.images && !Array.isArray(value.openGraph.images)) {
      patches.push(unset(['openGraph', 'images']));
    }

    if (patches.length) {
      onChange(PatchEvent.from(patches));
    }
  }, [onChange, value]);

  return props.renderDefault(props);
};

export default MetadataInput;
