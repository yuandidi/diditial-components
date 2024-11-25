import type { Preview } from "@storybook/react";
// preview.ts
import '!style-loader!css-loader!resolve-url-loader!sass-loader!../src/styles/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
