
"use client";

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
    script.onload = () => {
      window.CMS.init({
        config: {
          backend: {
            name: 'git-gateway',
            branch: 'main',
          },
          media_folder: '/public/img',
          public_folder: '/img',
          collections: [
            {
              name: 'pages',
              label: 'Pages',
              files: [
                {
                  label: 'Home',
                  name: 'home',
                  file: 'content/home.md',
                  fields: [
                    { label: 'Title', name: 'title', widget: 'string' },
                    { label: 'Publish Date', name: 'date', widget: 'datetime' },
                    { label: 'Body', name: 'body', widget: 'markdown' },
                    {
                      label: 'Cats',
                      name: 'cats',
                      widget: 'list',
                      fields: [
                        { label: 'Name', name: 'name', widget: 'string' },
                        { label: 'Description', name: 'description', widget: 'text' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      });
    };
    document.body.appendChild(script);

    const identityScript = document.createElement('script');
    identityScript.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
    document.body.appendChild(identityScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(identityScript);
    };
  }, []);

  return (
    <div id="nc-root"></div>
  );
}


