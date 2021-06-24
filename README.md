# Conduit Website

This repository contains the source code for the Conduit website
at [theconduit.dev](https://theconduit.dev).

## Setup and building

Follow the instructions to install [Anvil](https://github.com/ethanblake4/anvil).
In the root folder of this project, run `anvil serve`. To generate the production
output, run `anvil build`.

## Structure

The website is a statically-generated site built with 
[Anvil](https://github.com/ethanblake4/anvil). 

* The `templates` directory contains Jinja templates used to define the basic site
structure and different types of pages.
  
* The `content` directory contains HTML and Markdown files, each of which define
a page. Each specifies a template to define its surrounding structure and layout.
These pages can also incorporate their own Jinja code.
  
* The `data` directory contains JSON files, the data from which is automatically
made available to Jinja and thus every page.
  
* The `styles` directory contains SCSS style code, which is compiled by Anvil to
CSS.
  
* The `static` directory contains static content such as images.