# UI Resource Platform Architecture

## Overview

A static-first platform for:

- UI Components

- Design System resources

- Motion / Animation examples

- Fonts

- Documentation

- Code snippets

Main principles:

- No database at first

- No asset storage

- Content driven by JSON + code

- Fast SEO pages

- CDN friendly

# Tech Stack

## Framework

- Next.js (App Router)

- TypeScript

## Styling

- Tailwind CSS

- shadcn/ui

## Animation

- Motion

## Content

- MDX

- JSON Registry

## Deployment

- Vercel

## Search

- Algolia / Meilisearch (optional later)

# Folder Structure

app/

├── fonts/

│   └── [slug]/

│

├── components/

│   └── [slug]/

│

├── motion/

│   └── [slug]/

│

└── docs/

components/

├── ui/

│   ├── button/

│   │

│   ├── Button.tsx

│   ├── Demo.tsx

│   ├── variants.ts

│   └── meta.json

│

└── card/

content/

├── docs/

│   ├── button.mdx

│   └── card.mdx

│

├── fonts/

│   ├── inter.json

│   └── geist.json

│

└── motion/

    ├── hover.mdx

    └── transition.mdx

registry/

├── components.json

├── fonts.json

└── motion.json

# Component Storage

Components are stored as source code.

Example:

components/ui/button/

Button.tsx

Demo.tsx

meta.json

meta.json

{

  "name": "Button",

  "category": "form",

  "tags": [

    "button",

    "interactive"

  ],

  "preview": true

}

The registry is generated from component metadata.

components.json

{

  "button": {

    "title": "Button",

    "path": "/components/button"

  }

}

Do not store component code in database.

# Documentation

Use MDX.

Example:

button.mdx

Contains:

- description

- usage

- API

- examples

- preview

Build:

MDX -> Static HTML

Advantages:

- SEO friendly

- fast loading

- easy editing

# Font System

Fonts are NOT stored locally.

No:

- S3

- R2

- font storage

- database

Only store font metadata.

fonts.json

{

  "name": "Inter",

  "family": "Inter",

  "category": "sans-serif",

  "weights": [

    400,

    700

  ],

  "license": "OFL",

  "source": {

    "provider": "external",

    "url": "[https://external-font-source.com/inter](https://external-font-source.com/inter)"

  }

}

# Font Loading

Website provides:

- font preview

- metadata

- external download link

Flow:

User

 |

 |

Font page

 |

 |

Read JSON

 |

 |

Render preview

 |

 |

Redirect external URL

# Preview Strategy

Do not preload all resources.

Use:

- lazy loading

- dynamic import

- intersection observer

Example:

Component card

      |

 user scrolls

      |

 load preview

# Performance Rules

Avoid:

- loading all components

- loading all fonts

- rendering thousands of animations

Use:

- static generation

- ISR

- CDN caching

- optimized images

# Data Flow

                Source Code

                    |

          ---------------------

          |                   |

     Components             MDX

          |                   |

          ---- Build Process --

                    |

                Next.js

                    |

              JSON Registry

                    |

                Frontend

# Future Expansion

If needed later add:

Database:

- users

- favorites

- collections

- analytics

Search index:

- Algolia

- Meilisearch

# Philosophy

The website is a resource index.

The heavy assets stay external.

The frontend only manages:

- metadata

- previews

- navigation

- discovery

