import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	return [{ slug: '2024/test-post' }, { slug: '2024/another-post' }];
};
