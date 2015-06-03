---
layout: page
title: "Part 2: Create a new project"
permalink: /2-new-project/
---

In <a href="{{ "/1-installation" | prepend: site.baseurl }}">Part 1</a>, you installed everything we'll need to create a new Jekyll project. With a new Jekyll project, you'll instantly get the basic elements for your new website.

# Start a new project

You will only have to do start a new project once. In the Terminal, move to a folder, where you want to save your website. 

For example, you might want to create a new directory called `Websites` in your existing `Documents` directory and move into the new directory. These are the commands you'd use:

	$ cd Documents
	$ mkdir Websites
	$ cd Websites
	$ pwd
	/Users/codecat/Documents/Websites

You can of course create the directory for your Jekyll project somehwere else. Just make sure to use the Terminal to move into that directory. Once you're in the right place (remember: you can always check with `pwd`), run this command:

	$ jekyll new my-website

This command is made out of three parts. `jekyll` lets the Terminal know that we want to talk to Jekyll. `new` is the command that tells Jekyll to generate a new project, and `my-website` is the name of your new project. 

For example, if you wanted to create a website about cats versus dogs, you would use the command `jekyll new cats-vs-dogs`.

# Visit your first Jekyll website

If you installed Jekyll correctly and typed the command to start a new project correctly, you should now have a new folder `my-website`.

In the Terminal, make sure to move into the project directory:

	$ cd my-website

And now enter the following command to start running website on your computer:

	$ jekyll serve

After you press enter, the output in your Terminal should look something like this:

	$ jekyll serve
	Configuration file: /Users/codecat/Documents/Websites/my-website/_config.yml
	            Source: /Users/codecat/Documents/Websites/my-website
	       Destination: /Users/codecat/Documents/Websites/my-website/_site
	      Generating... 
	                    done.
	 Auto-regeneration: enabled for '/Users/codecat/Documents/Websites/my-website'
	Configuration file: /Users/codecat/Documents/Websites/my-website/_config.yml
	    Server address: http://0.0.0.0:4000/
	  Server running... press ctrl-c to stop.

That's a lot of words that basically mean one thing: your website is now running in your computer, and you can visit it in your web browser (Chrome, Safari, Firefox etc) by entering the address <a href="http://0.0.0.0:4000/" target="_blank">http://0.0.0.0:4000/</a>.

The website should look something like this:

// TODO: screenshot

Click around a bit. The website doesn't look like much, but it already has an About page and a blog post that you'll soon be able to edit.

After you've explored the website, go back to the Terminal. Press the Control and C keys (not `cmd`!) on your keyboard to stop running the website. If you go back to your web browser now and refresh your website, it won't work anymore. Go back to the Terminal and run the website again with `jekyll serve`.

<div class="hint">
Hint: remember this part, so you can visit your website on your own later on. Remember to run <code>jekyll serve</code> from the Terminal inside the folder of your Jekyll project (use <code>pwd</code> to check whether you're in the right folder).
</div>

# Get to know your website

In order to edit the website, you'll need a text editor. You should already have Sublime 2 installed on your computer (if not, go back to <a href="{{ "/1-installation/#step-4-install-a-text-editor" | prepend: site.baseurl }}">Part 1</a>). Once you open Sublime, use the File > Open menu to find and open your project directory.

// TODO: screenshot

On the left side, you'll see a list of files and folders in your project. That's a lot of work Jekyll did for us! Click on file names to see what's inside and on folder names to reveal their contents.

These are the main folders and files you should see:

- `_includes` folder: this folder contains various website elements, like the footer and header that are included in the page template.
- `_layouts` folder: this folder includes templates for different page types. If you click on the file `default.html`, you'll see lines where the head, header and footer are called in.
- `_posts` folder: this is where blog posts are stored. Go ahead and click on the post that's already in the folder. The text is the same as on the "Welcome to Jekyll!" post you can click on your website.
- `_sass` and `css` folders: both of these folders are used for files that define the design of the website, written in a language called CSS. We'll learn more about design and CSS later on. 
- `_site` folder: this is where Jekyll saves your website when you run `jekyll serve`. You'll see a lot of files with familiar names here, but don't edit them as they are erased and generated again whenever you run your website.
- `_config.yml` file: this is where the main settings for your website are saved. 
- `index.md` and `about.md`: these are the two initial pages Jekyll creates. `index.md` is the first page you see when you open the website, while `about.md` is the page you see when you click on the About link on the website.

# Customize the text on the front page

Let's start making this website your own. In Sublime, open the `_config.yml` file in your project, and replace the title, email, and description with your own content.

Make sure to only edit the text after `:`. The text after the hash sign (`#`) are comments that won't be displayed, but can help you understand what each part of the file is for.

For example, these is how CodeCat edited her `_config.yml` file:

	# Site settings
	title: CodeCat's Lair
	email: codecat@gmail.com
	description: > # this means to ignore newlines until "baseurl:"
	  CodeCat is a smart, 5-years old calico cat with a passion for coding. 
	  Click around to learn more about her recent projects.
	baseurl: "" # the subpath of your site, e.g. /blog/
	url: "http://yourdomain.com" # the base hostname & protocol for your site
	twitter_username: jekyllrb
	github_username:  jekyll

	# Build settings
	markdown: kramdown

Once you add your own text, save the file in Sublime (hint: Cmd + S is the keyboard shortcut for saving files), refresh your website in the web browser, and you should see your own title, email and description on the website now.

<div class="hint">
Hint: make sure Jekyll is running in the Terminal (remember <code>jekyll serve</code>?). If there's anything wrong with the code, the Terminal will also show you potential errors, so check your Terminal window whenever the website doesn't load.
</div>

# What did you learn?

Wow, you have your own website now! You created it by starting a new Jekyll project through the Terminal (`jekyll new my-website`) and then running the website with `jekyll serve`. You were then able to open the website in your web browser, and edit the title, email and description on the front page. 

In <a href="{{ "/3-pages" | prepend: site.baseurl }}">Part 3</a>, you'll learn more about editing the content of pages and basics of HTML, the language of the web.
