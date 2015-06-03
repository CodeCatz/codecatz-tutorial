---
layout: page
title: "Part 5: Make your website pretty"
permalink: /5-design/
---

In <a href="{{ "/4-posts" | prepend: site.baseurl }}">Part 4</a>, you learned how to add new content to the blog on your website. Now that you know how to add different types of content, let's take a look at how you can make your website truly your own with your favorite colors and other design improvements.

# CSS, the design language of the web

In previous parts, you learned the basics of HTML. We called HTML the language of the web, which is true, as it helps us define the content and structure of websites. When we want to style various HTML elements, we use another language, CSS. 

It's a good practice to keep your content separated from design, which is why your Jekyll project saved stylesheet files in their own folder. To be more precise, you can find files that define your website's design on the following two folders: `_sass` and `css`.

Your website has to be told where design styles are saved. If you look in the file `_includes/head.html`, you'll find this line:

    {% raw %}<link rel="stylesheet" href="{{ "/css/main.css" | prepend: site.baseurl }}">{% endraw %}

The `<link>` HTML tag is used to define links between your website and other files. In our case, the link points to the folder `css` and its file `main.css`.

If you open the file `css/main.scss`, you'll see a list of various style definitions. At the end of the file, you'll find the line `@import` that lists additional style files from the `_sass` folder. For example, the part `"base"` imports the file `_sass/_base.scss`. If you ever add new style files to the `_sass` folder, make sure to include them in this part or the website will ignore them. 

If you wanted to add a new CSS file from somewhere else, you'd have to use the `<link>` tag with the right path in the file `_includes/head.html`. The order in which stylesheet files are linked in the website head is important. You should include the most general files fist, and specific files that override general styles later (we'll see an example of this later on).

## SASS? SCSS? CSS?

You might have noticed that the design files we've mentioned so far end with `.scss` and not `.css`. And why is one folder named `css` and the other `_sass`?

CSS is the design language of the web, but it can be difficult to write and maintain on large website. This is where <a href="http://sass-lang.com/" target="_blank">SASS</a> comes in. SASS is a CSS extension language, which simply means that it makes working with CSS much easier. It allows us to define our favorite color once and use it as many times as we want for different elements. All the `.scss` files you see in your Jekyll project can take advantage of all the superpowers SASS has to offer.

# CSS basics

But don't worry, defining styles is similar in both CSS and SASS. The general rule is this:

	element {
		element-property: value;
	}


For example, if we want to change the font size of all level 1 headings (remember the `<h1>` tag?) to 36 pixels, we can use CSS to write: 

	h1 {
		font-size: 36px;
	}

Depending on the element we're styling, we can change different properties. For text elements, we change things like font size, color, line spacing etc. For images, changing width and height is usually more relevant. On the website <a href="http://www.w3schools.com/cssref/" target="_blank">W3Schools</a>, you can find a complete reference of CSS properties and values that you can use depending on what you want to style. 

Don't worry, you don't have to memorize all of them, you'll soon remember those that are most commonly used and Google the rest (no kidding, we all do this!).


## Defining custom CSS classes

Often, you don't want to change the style of all elements, but just a certain group that has a certain role on the page. In this case, we can add a custom class to a HTML element. Usually we do this to `<div>` elements that are used for blocks of content. 

Let's say we want to use some blocks of text to display warnings. We want the warning blocks of text to be written in red text.

First, we have to define the type (class) of block in HTML:

	<div class="warning">This will be a warning and it should be red!</div>

Now that our block of text, enclosed with the `<div>` tag, has the class "warning", we can use CSS to display the warning text in red:

	.warning {
		color: red;
	}

This is similar to what we did before with the `h1` element, but because "warning" is a class we made up, it has to have a dot in front of its name in the CSS file.

You can reuse this class anywhere on the page. All the blocks with this class will be displayed red.

# Change the main color of your website

Let's put what you've learned about CSS into practice. Open the file `css/main.scss`, which begins with a list of variables, which are basically settings that can be reused in all design files.

Find the line that starts with `$base-font-family:` and change the entire line to:

	$base-font-family: "Merriweather", "Helvetica Neue", Arial, sans-serif;

Don't forget the semicolon at the end of each line when writing CSS or you might get errors or unexpected results.

Now find the line that starts with `$brand-color:` and set the value to `#27ae60`. This line should now read:

	$brand-color:      #27ae60;

Wait a minute, what's with this mysterious color code? You can use common color names such as `red`, `blue`, but if you want to pick a more specific shade, you'll use HEX color codes. 

Hex color codes start with a hashtag, followed by values for red, green, blue in hexadecimal values. Sounds complicated? Don't worry, you can easily find <a href="http://www.w3schools.com/tags/ref_colorpicker.asp" target="_blank">HEX color pickers</a> that help you find the right HEX code just for the color you want.

Save the style file and reload your website. You'll see that all links on the page turned into a green color! Don't like green? Use a color picker website to find a better colors. <a href="http://flatuicolors.com" target="_blank">Flat UI colors</a> is another website that offers cool color pallets for your website.

Before we move to other files, let's just add another line to the `css/main.scss` file:

	$heading-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;

You can add this after the `$base-font-family:` line. You can use this approach whenever you want to add general website variables that you want to reuse. Just make sure to use variable names that don't use spaces, you can separate multiple words with dashes (the same goes for longer class names).

# Change the color of headings

Let's use the same color the links use for all headings on the website. Open the file `_sass/_base.scss` and find the section:

	/**
	 * Headings
	 */

You'll see that one line lists headings from level 1 to 6. We want to change the color for all of them, and while we're at it, we'll also change the font used and the thickness of the font (defined by the property `font-weight`). This will be the results:

	/**
	 * Headings
	 */
	h1, h2, h3, h4, h5, h6 {
	    font-family: $heading-family;
	    font-weight: 700;
	    color: $brand-color;
	}

For the font, we used the variable `$heading-family` that we defined earlier on and the color was changed to get the value of `$brand-color` that we also changed. If you go back and change `$brand-color` again, the heading color will also change automatically.

Don't forget to save the file and refresh the website in your browser whenever you make any changes you want to see.

# Change the website header color

The website looks much better with more color. Let's now use the same color for the header background.

Open the file `_sass/_layout.scss` and find the line `.site-header`. Between the brackets (`{}`) add another line to change the background color:

	background-color: $brand-color;

Save, refresh, and voila! The same color we've used for headings and links is now used in the background of the header. 

If you've used a stronger color, your thin website title now looks a bit lost in the background. To make it white and bigger, find the line `.site-title`:

Between the brackets, add the lines:

	font-family: $heading-family;
	font-weight: 500;

And make the size of the title a bit bigger:

	font-size: 28px;

And also change the color in the following lines to white (the HEX color for white is #ffffff):

    &,
    &:visited {
        color: #ffffff;
    }


`.site-title` should now have the following attributes:

	.site-title {
	    font-size: 28px;
	    line-height: 56px;
	    letter-spacing: -1px;
	    margin-bottom: 0;
	    float: left;
	    font-family: $heading-family;
	    font-weight: 500;

	    &,
	    &:visited {
	        color: #FFFFFF;
	    }
	}

Save, refresh. Don't like what you see? Feel free to play around and experiment with different colors and other attributes! Have fun!

# Bonus points: meet Bootstrap

If you want to learn a cool trick that can help you make prettier website designs faster, we also want to show you a little tool called <a href="http://getbootstrap.com">Bootstrap</a>. Feel free to ship this part and return back to it at a later time. 

Bootstrap is a framework that comes with a wide range of pre-defined styles for common website elements like buttons, web forms and more. It's very popular among web developers. It also makes it easy to build websites that work well on a wide range of devices, from desktops to smaller screens on phones (you might have heard this called <a href="http://www.w3schools.com/html/html_responsive.asp" target="_blank">responsive web design</a>).

## Add Bootstrap to your website

There are different ways to add Bootstrap to your website. You can copy the latest SASS version to you `_sass` folder (hint: remember the part about including any new styles you add in the main style file?), but we'll choose the faster way and link to an online version. You can find out more about other approaches on the <a href="http://getbootstrap.com/getting-started/" target="_blank">Bootstrap page</a>.

But let's just go with the easy way of adding a link. Open the file `_includes/head.html` and add the Bootstrap link right before the `<link>` tag that points to our local CSS file. You should now have two links (the order is important):

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
	<link rel="stylesheet" href="{{ "/css/main.css" | prepend: site.baseurl }}">

If you save the file and refresh your website, you'll only notice minor differences. Let's add some Bootstrap elements to our page!

## Add a Glyphicon

Find an icon you like on the <a href="http://getbootstrap.com/components/" target="_blank">Bootstrap page</a> and copy its class names somewhere. For example, if you like the leaf icon, you're going to need the class names `glyphicon glyphicon-leaf`. 

As we don't have a logo, we'll add it to the site title to make it stand out a bit more. Open the file `_includes/header.html`, find where the title is displayed and add an in-line text tag with the name of the Glyphicon (icon) you want to use, for example:

	<span class="glyphicon glyphicon-leaf"></span>

The tag doesn't have any content as we're just going to use it to display the icon, but it's important to close it with `</span>`.

You should now have a line like this:

     <a class="site-title" href="{{ site.baseurl }}/">{{ site.title }} <span class="glyphicon glyphicon-leaf"></span></a>

Save, refresh, enjoy your new icon. Have fun adding more icons to other parts of the website, perhaps to the navigation menu?

## Get to know the Bootstrap grid system

One of the really cool things that Bootstrap makes easy is displaying content in columns that adjust to the width of the browser. On a desktop, you may want to display your content in three or four columns, but you want to shrink all that down into one on a mobile phone screen.

Bootstrap makes this easy with the built-in grid system that divides the page in up to 12 columns. All you need to do to take advantage of this is use the right class names. You can find more examples on the <a href="http://getbootstrap.com/css/#grid" target="_blank">Bootstrap page</a>.

Let's take a look at a simple example. Open the file `index.html` and add the following content anywhere you like:

	<p>Things that will help me build websites:</p>

	<div class="row">
		<div class="col-md-4">
			<h2>HTML</h2>
			<p>Used for content and structure of web pages.</p>
		</div>
		<div class="col-md-4">
			<h2>CSS</h2>
			<p>Defines the design of website elements.</p>
		</div>
		<div class="col-md-4">
			<h2>JavaScript</h2>
			<p>Can add cool effects to otherwise boring pages.</p>
		</div>
	</div>	

Save, refresh the website. You'll see three perfectly divided columns. Try stretching your browser window and observe how the width of columns changes with the size of the windows. If you make the window narrow enough, the content will collapse into a single column. This is responsive design!

And all you need to make your content responsive with bootstrap is define rows (`<div class="row">`) that include more `<div>` elements with classes that define how much room they can take on page (`class="col-md-4"`). All you have to keep in mind that the maximum number of columns is 12. Try changing all `<div class="col-md-4">` from the example above to `<div class="col-md-3">` and see how that affects the layout of the page. Again, feel free to play around and experiment!

# What did you learn?

You're learned the basics of CSS, the design language of the web. This allowed you to add more color to the website. You also know about Bootstrap, a cool tool that can make designing website easier and faster.

In <a href="{{ "/6-publish" | prepend: site.baseurl }}">Part 6</a>, you'll learn how to publish your pretty new website online, so you can share it with the whole world.
