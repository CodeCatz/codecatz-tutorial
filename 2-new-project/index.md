---
layout: page
title: "Part 2: Create a new project"
permalink: /2-new-project/
---

In <a href="{{ "/1-installation" | prepend: site.baseurl }}">Part 1</a>, you installed everything we'll need to create a new Jekyll project. By doing that, you'll instantly get the basic elements of your new website.

# Start a new project

You will only have to do this once:

- `jekyll new project`

# Visit your first Jekyll website

- `cd project`
- `jekyll serve`, check out website at http://localhost:4000

# Get to know your website

open project in Sublime, explain what each folder is for:

- `_config.yml` file = website settings -> edit description
- `index.md` and `about.md` = two initial pages Jekyll creates
- `_includes` folder = contains various website elements
- `_layouts` folder = various templates for different pages, see how the default layout calls head, header, footer includes
- `_posts` folder = a folder for blog posts
- `_site` folder = a folder where Jekyll puts the final website when you run jekyll build (just creates the website) or jekyll serve (allows you to preview the website)
- `css` folder = a folder for CSS files, where you can define the design of your website 
change the background color of body in `css/main.css` to #AFCA5B —> nothing changes, stop server, run `jekyll serve --watch`
