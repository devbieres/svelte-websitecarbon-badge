# Svelte WebsiteCarbon Badge

## Introduction

The project includes :
* A component to directly import the badge from WebSiteCarbon, 
* A component which is port of the original badge in svelte (https://gitlab.com/wholegrain/website-carbon-badges).


## Presentation

A (very) little component to include the WebsiteCarbon badge in a Svelte / SvelteKit project.

More info on the badge here : https://www.websitecarbon.com/badge/

## Installation

Add a reference in your package.json :
```
"svelte-websitecarbon-badge":"git+https://github.com/devbieres/swb-package.git",
```

Call install :
```
npm install
```


## Usage

### V1

V1 aims to be a simple port of the badge while include the js script and load data.

```jsx
<script lang="ts" >
    import { WebCarbonBadgeV2 } from "svelte-websitecarbon-badge";
</script>
<WebCarbonBadge darkMode={true} />
```

### V2

V2 aims to re-implement the badge in svelte mode.

```jsx
<script lang="ts" >
    import { WebCarbonBadgeV2 } from "svelte-websitecarbon-badge";
    let darkMode = false;
</script>

<!-- Basic version -->
<WebCarbonBadgeV2 {darkMode} />
```

