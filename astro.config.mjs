// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // don't know what is this ()
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    starlight({
      title: "Drakai",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/codeshaine/drakai",
        },
      ],
      sidebar: [
        {
          label: "Cryptography",
          items: [
            // each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "cryptography/intro" },
            { label: "Cryptgraphy Concepts", slug: "cryptography/concepts" },
          ],
        },
        {
          label: "Community",
          items: [
            // each item here is one entry in the navigation menu.
            { label: "Contribution Guide", slug: "community/contributing" },
          ],
        },
      ],
    }),
  ],
});
