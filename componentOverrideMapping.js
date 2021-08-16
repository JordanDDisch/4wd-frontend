const supacentrePwaOverrides = require('supacentre-pwa/componentOverrideMapping');

const overrideReMap = {};

Object.entries(supacentrePwaOverrides).forEach(([coreFile, overrideFile]) => {
    overrideReMap[coreFile] = `supacentre-pwa/${overrideFile}`;
});

module.exports = {
    ...overrideReMap,

    // Only add overrides here that are specific to 4WD Supacentre, and aren't to be applied to the Kings applications
    [`@magento/venia-ui/lib/components/Routes`]: 'src/components/Routes'
};
