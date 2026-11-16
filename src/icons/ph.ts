import { createIconPack } from 'astro-icon/pack';

// Resolve Phosphor icons directly: the legacy astro-icon proxy is unavailable.
export default createIconPack({ url: 'https://api.iconify.design/ph/' });
