# [vetro-components -- VETRO FiberMap Style Guide](https://eslivinski.github.io/vetro-components/)
vetro-components was designed to make documenting styles, posting snippets, and understanding global style changes a seemless and straight-forward processes.  The repo has no dependencies and could easily be configured for other applications.

Using HTML snippets, the styleguide showcases the **input code** and **output compontents**, by injecting both into the main document using a few simple markup parameters.  

Locally, vetro-components always stays fresh, referencing the latest local version of the vetro-main's css rather than a cached copy -- helping illustrate how your changes will impact global styling principles.

## SYNTAX
| **PROPERTY**      | **DESCRIPTION**                                                              |
|------------------------------ | ---------------------------------------------------------------------------- |
| `["file-src"]`                | Path of snippet file - the contents of which will be injected into the element |
| `section`                     | Block of related examples that should appear on the same page when selected from the left menu |
| `section["section-title"]`    | Text that should appear in the left menu and at the top of the section   |
| `section["id"]`               | Hash used in the site url when the section is active  |
| `.ex-block`                   | Wrapper for a single example (contains the input and/or output blocks) |
| `.ex-block["block-title"]`    | Header text for the example |
| `.ex-block > .output-block`   | Container for the HTML markup used to generate the output of the example -- if no input is given for the ex-block, the output-block contents will be used |
| `.ex-block > pre.input-block` | Wrapper containing the input syntax used to generate the output -- Generally only necessary if the example accounts for a front-end framework |


## EXAMPLE USAGE
The following examples demonstrate how to insert snippets into the main document, `index.html`.

### 1. Injecting HTML
```html
<div file-src="./examples/snippet.html"> 
  <!--  The contents of the file will be injected here  -->
</div>
```

### 2. Adding a section
```html
<section id="section-url-id" section-title="Section Name">
  <!--  Examples and paragraph text go here  -->
</section>
```

### 3. Snippet using the same input and ouput markup (most of the time)
```html
<!-- Wrapper for a given example block with the title "Basic Snippet" -->
<div class="ex-block" block-title="Basic Snippet">
  
  <!--  File containing the markup for the output component  -->
  <!--  Will also be used to generate the input HTML code because no input-block is listed -->
  <div class="output-block" file-src="./examples/basic-snippet.html"></div>
</div>
```


### 4. Snippet using different input and output markup (helpful for frameworks)
```html
<div class="ex-block" block-title="Complicated Snippet">
  <!--  File containing the markup for the output component  -->
  <div class="output-block" file-src="./examples/complicated-snippet-output.html"></div>
  
  <!--  File containing the input code to generate the component -->
  <!--  Note: The example can use any coding language to generate the synatax highlighting  -->
  <pre class="input-block"><code data-language="html" file-src="./examples/complicated-snippet-input.html"></code></pre>
</div>
```

### 5. Inline snippets
```html
<div class="ex-block" block-title="Inline Snippet">
  <!-- Snippets don't have to be stored in the examplses directory -->
  <!-- The contents of the output block will be used to generate code and HTML components for the example -->
  <div class="output-block"><p>I am but a simple snippet</p></div>
</div>
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
