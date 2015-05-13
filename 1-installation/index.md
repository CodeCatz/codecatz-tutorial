---
layout: page
title: "Part 1: Let's get your computer ready!"
permalink: /1-installation/
---

You'll create your website with a framework called <a href="http://jekyllrb.com" target="_blank">Jekyll</a>. Despite the unusual name, Jekyll is a nice tool you can use to create simple, yet flexible websites that can grow with you as you learn more about various web technologies. 

Before we can get started, let's take a few minutes to get familiar with an app that allows you to command your computer. We'll also install a few tools on your computer that will make your work easier.

## Step 1: Get to know the Terminal

First, find and open an app called Terminal on your computer. It's usually in `/Applications/Utilities`. It looks like something from a sci-fi movie, but don't be intimidated by its looks.

// TODO: screenshot

The Terminal is a powerful tool that you can use to move around your computer and enter various commands. The Terminal is waiting for your commands if you see `$` at the end of the line. Let's start by typing a simple command first:

	$ whoami

Press the Enter key on your keyboard, and your Terminal should tell you your current username. For example, this is what you would see if your username were `codecat`:

	$ whoami
	codecat

<div class="hint">
Hint: don't worry if you make a typo when writing commands into the Terminal. It happens <em>all the time</em>, even to professional programmers. Usually, the Terminal will complain about the command not being found or something similar. Just retype the command again, eventually you'll get it right.
</div>

### Move to different folders using text commands

You probably use Finder to move from folder to folder and find different files on your computer. You can do the same in your Terminal by using text commands, no clicking required!

First, let's try a command that can show us the name and path of the current folder (also called directory):

	$ pwd

`pwd` is short for "**p**rint **w**orking **d**irectory". If your username were `codecat`(remember the `whoami` command?), the result should look something like this:

	$ pwd
	/Users/codecat

Now, to see a list of files and folders inside the current directory, use the following command:

	$ ls

`ls` is a command that "**l**i**s**ts" files in the current directory. The result should look something like this:

	$ ls
	Applications
	Desktop
	Documents
	Downloads
	...

Now, let's move into the `Desktop` directory:

	$ cd Desktop

`cd` stands for "**c**hange **d**irectory". You can use `pwd` to check whether you really moved into the right place. The result you should now see is:

	$ pwd
	/Users/codecat/Desktop

As before, you can now also display a list of files and folder on your desktop with a familiar command:

	$ ls

Now, let's make a new folder on your Desktop, using only text commands. Type in the following command:

	$ mkdir cat-folder

`mkdir` is just a super short version of "**m**a**k**e **dir**ectory" and `catfolder` is the name of the folder we want to create (you could choose any other name here). 

Now, check you Desktop and you'll see that a new folder with the name `cat-folder` just appeared! You can try and make another folder if you want.

To clean up the newly created empty folder, you can use the command:

	$ rm -r cat-folder

`rm` stand for "**r**e**m**ove". Be careful when using this command, there's no undo, so make sure you're only deleting files and folder you don't need anymore.

If you ever get lost and want to return back to your home folder, you can always type just:

	$ cd

Sometimes you'll also want to move to the folder that contains the current folder. For example, if you moved into `/Users/codecat/Desktop/cat-folder` and you want to go back to `/Users/codecat/Desktop`, just type the following command to move one level above:

	$ cd .

Feeling a bit confused? Reward yourself with some chocolate and feel free to take a few minutes to practice these new commands.

Right now the commands probably look confusing and unnecessary because you can do the same thing much faster using your mouse and Finder, but we promise they become easier with practice (plus, you can already impress your friends by talking to your computer like a hacker from the movies!)

It's not just about looking cool though, we promise. Eventually, moving through your computer with text commands can become more effecient than using Finder, and you'll be using the Terminal more and more as you learn about programming.

<div class="more">
You can learn more about the Terminal in <a href="http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line" target="_blank">this blog post</a>.
</div>

// TODO: add Windows version

## Step 2: Install Ruby

Ruby is a programming language. Don't worry, you won't have to learn it just yet, we just need to make sure it's installed so we can use Jekyll. 

Windows: use <a href="http://rubyinstaller.org/downloads/" target="_blank">RubyInstaller</a> 

On a Mac, you probably already have Ruby installed (see below to check your installation). If not, // TODO !!!

// TODO: which Ruby? 2.1.6 or 2.2.2? 

### Checking your Ruby installation

Now that you've become familiar with Terminal, you can always run the following command to check whether Ruby is installed and its version:

	$ ruby --version  

If you get a line that starts with `ruby`, followed by version number that is `1.9.3` or greater (for example, `2.1.6`, `2.2.2`), you're good to go!

## Step 3: Install the GitHub Pages gem

Next, we need to install everything you need to build your website and publish it online by the end of the day. Just type in the following command in your Terminal:

	$ gem install github-pages

## Step 4: Install a text editor

A text editor makes it easier to edit your website's files and can also help you edit your code by providing helpful suggestions. Pretty cool, eh? You'll be using this a lot today.

To make sure we're all using the same tools, let's go ahead and install <a href="http://www.sublimetext.com/2" target="_blank">Sublime Text 2</a> for your operating system:

- <a href="http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.2%20Setup.exe" target="_blank">Windows</a> or <a href="http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.2%20x64%20Setup.exe" target="_blank">Windows 64 bit</a>
- <a href="http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.2.dmg" target="_blank">Mac OS X</a> (OS X 10.6 or later required)
- <a href="http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.2.tar.bz2" target="_blank">Linux 32 bit</a> or <a href="http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.2%20x64.tar.bz2" target="_blank">Linux 64 bit</a>

## Step 5: Install GitHub

This app will make it easier to publish your website online at the end of the day.

// TODO: install links and instructions

# What did you learn?

Granted, this part of the tutorial wasn't very interesting, but you did install everything we'll need later on and learned the basics of using the Terminal.

In <a href="{{ "/2-new-project" | prepend: site.baseurl }}">Part 2</a>, you'll learn how to set up a new Jekyll project.
