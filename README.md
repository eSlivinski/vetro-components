# [vetro-components -- VETRO FiberMap Style Guide](https://eslivinski.github.io/vetro-components/)
vetro-components was designed to make documenting styles, posting snippets, and understanding global style changes a seemless and straight-forward processes.  The repo has no dependencies and could easily be configured for other applications.

Using HTML snippets, the styleguide showcases the **input code** and **output compontents**, by injecting both into the main document using a few simple markup parameters.  

Locally, vetro-components always stays fresh, referencing the latest local version of the vetro-main's css rather than a cached copy -- helping illustrate how your changes will impact global styling principles.


## EXAMPLE USAGE
The following examples demonstrate how to insert snippets into the main document, `index.html`.


**1. When the input code displayed will also render the output component.**
```html
<!-- Wrapper for a given example block with the title "Basic Buttons" -->
<div class="ex-block" block-title="Basic Buttons">
  <div class="output-block" file-src="./examples/buttons-basic.html"></div>
</div>
```


**2. Using different input and output markup** (helpful for frameworks)
```html
<div class="ex-block" block-title="Tabs">
  <!--  File containing the markup for the output component  -->
  <div class="output-block" file-src="./examples/tabs-basic.html"></div>
  
  <!--  File containing the input code to generate the component -->
  <!--  Useful for documenting the view syntax used with a framework -->
  <pre class="input-block"><code data-language="html" file-src="./examples/tabs-basic-angular.html"></code></pre>
</div>
```

**3. Compiling other html snippets**
```html
<div class="ex-block" block-title="Tabs">
  <!--  File containing the markup for the output component  -->
  <div class="output-block" file-src="./examples/tabs-basic.html"></div>
  
  <!--  File containing the input code to generate the component -->
  <!--  Useful for documenting the view syntax used with a framework -->
  <pre class="input-block"><code data-language="html" file-src="./examples/tabs-basic-angular.html"></code></pre>
</div>
```

```html
<section id="icons" section-title="Icons">
  <div block-title="Vetro Icons" file-src="./examples/icons-vetro.html"> </div>
</section>
```

## SETUP
- Clone the repo into the same root directory as your local instance of `vetro-main`
- Run `npm run bootstrap`
  * Installs githooks
  * Creates symlinks to vetro styles


## DEVELOPING
- Any webserver can be used to serve the repo, but npm scripts are available for node and python servers
  * Serve with python:
    + `npm run serve:python`
  * Serve with node:
    + Install http server: `npm install -g http-server`
    + `npm run serve:node`
- Open [localhost:3000](http://localhost:3000/#buttons) in your browser


## GITHOOKS 
1. Pre-Push - Designed to allow the style guide to be deployed to gh-pages 
  - Prior to pushing to a gh-pages branch
    * Replaces symbolic links to to vetro-main CSS with cached copies of VETRO's styles and media
    * Updates all font and media paths used in the vetro styles to use the correct location of the cached files
    * Commits all these changes :+1:
  - On all other branches: see Post-Checkout
2. Post-Checkout
  - Rebuilds symbolic links to VETRO media and styles
  
:bangbang: **NOTE:** The githooks used in this repo aren't the most seemless bits of code to ever be created and can be finicky. 
