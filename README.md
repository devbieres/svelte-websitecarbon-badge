# Svelte WebsiteCarbon Badge

## Introduction

The project includes :
* A component to directly import the badge from WebSiteCarbon, 
* A component which is port of the original badge in svelte (https://gitlab.com/wholegrain/website-carbon-badges).


## Presentation

A (very) little component to include the WebsiteCarbon badge in a Svelte / SvelteKit project.

More info on the badge here : https://www.websitecarbon.com/badge/

## Usage

### V1

V1 aims to be a simple port of the badge while include the js script and load data.

```jsx
<script lang="ts" >
    import { WebCarbonBadge } from "$lib";
</script>
<WebCarbonBadge darkMode={true} />
```

### V2

V2 aims to re-implement the badge in svelte and added a new option : url and manage error.

```jsx
<script lang="ts" >
    import WebCarbonBadgeV2 from "$lib";
    let darkMode = false;
</script>

<!-- Basic version -->
<WebCarbonBadgeV2 {darkMode} />
<!-- Set an url to check while develop -->
<WebCarbonBadgeV2 url='https://sveltekit-github-issues.vercel.app/app' {darkMode} />
```

