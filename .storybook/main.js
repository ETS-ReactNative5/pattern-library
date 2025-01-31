module.exports = {
  stories: [
    '../src/other/pages/landingpage/story.js',
    '../src/other/pages/guides/getting-started/story.jsx',
    '../src/other/pages/guides/structure-approach/story.js',
    '../src/other/pages/what-is-new/story.js',
    '../src/other/pages/contact/story.js',
    '../src/components/**/@(story|demo).@(js|jsx)',
    '../src/other/pages/showcases/axa-ch-main/story.js',
  ],
  addons: [
    '@storybook/addon-knobs',
    './addons/readme/register',
    './addons/usage/register',
    './addons/changelog/register',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
};
