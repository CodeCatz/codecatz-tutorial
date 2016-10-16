---
layout: tutorial
title: "Part 1: Let's get your computer ready!"
permalink: /1-installation/
---
You'll create your website with a framework called [Jekyll](http://jekyllrb.com). Despite the unusual name, Jekyll is a nice tool you can use to create simple, yet flexible websites that can grow with you as you learn more about various web technologies.

Before we can get started, let's take a few minutes to get familiar with an app that allows you to command your computer. We'll also install a few tools on your computer that will make your work easier.


## Get to know the <span class="os-switch"><span class="osx">Terminal</span><span class="wins">Command Prompt</span></span>
<img src="{{ "/images/terminal-icon-mac.png" | prepend: site.baseurl }}" class="icon"/> First, find and open an app called Terminal on your computer.
<span class="os-switch"><span class="osx">It's usually in the `/Applications/Utilities` folder or you can use Spotlight Search to find it.</span>
<span class="wins">You can find it by typing `cmd` in your search bar in windows menu</span></span>


The <span class="os-switch"><span class="osx">Terminal</span><span class="wins">Command Prompt</span></span> looks like something from a sci-fi movie, but don't be intimidated by its looks.

<span class="os-switch">
<span class="osx">
<img src="{{ "/images/terminal-mac.png" | prepend: site.baseurl }}"/>
</span>
<span class="wins">
<img src="{{ "/images/terminal-wins.png" | prepend: site.baseurl }}"/>
</span>
</span>

The <span class="os-switch"><span class="osx">Terminal</span><span class="wins">Command Prompt</span></span> is a powerful tool that you can use to move around your computer and enter various commands. The <span class="os-switch"><span class="osx">Terminal</span><span class="wins">Command Prompt</span></span> is waiting for your commands if you see <span class="os-switch"><span class="osx">`$`</span><span class="wins">`>`</span></span> at the end of the line. Let's start by typing a simple command first:


<div class="highlighter-rouge"><pre class="highlight"><code><span class="os-switch"><span class="osx">$ </span><span class="wins">> </span></span>whoami
</code></pre></div>

Press the Enter key on your keyboard, and your <span class="os-switch"><span class="osx">Terminal</span><span class="wins">Command Prompt</span></span> should tell you your current username. For example, this is what you would see if your username were `codecat`:

<div class="highlighter-rouge"><pre class="highlight"><code><span class="os-switch"><span class="osx">$ whoami
codecat</span><span class="wins">> whoami
comuter name\codecat</span></span>
</code></pre></div>

<div class="hint os-switch">
Hint: don't worry if you make a typo when writing commands into the <span class="osx">Terminal</span><span class="wins">Command Prompt</span>. It happens <em>all the time</em>, even to professional programmers. Usually, the <span class="osx">Terminal</span><span class="wins">Command Prompt</span> will complain about the command not being found or something similar. Just retype the command again, eventually you'll get it right.
</div>

### Move to different folders using text commands

<div class="os-switch show">
You probably use <span class="osx">Finder</span><span class="wins">File Explorer</span> to move from folder to folder and find different files on your computer. You can do the same in your <span class="osx">Terminal</span><span class="wins">Command Prompt</span> by using text commands, no clicking required!
</div>


First, let's try a command that can show us the name and path of the current folder (also called directory):

<div class="os-switch">
<span class="osx">

<div class="highlighter-rouge"><pre class="highlight"><code>$ pwd</code></pre></div>
<code class="highlighter-rouge">pwd</code> is short for "<strong>p</strong>rint <strong>w</strong>orking <strong>d</strong>irectory".

If your username were <code class="highlighter-rouge">codecat</code>(remember the <code class="highlighter-rouge">whoami</code> command?), the result should look something like this:

<div class="highlighter-rouge"><pre class="highlight"><code>$ pwd
</code><code>/Users/codecat</code></pre></div>

</span>
<span class="wins">

<div class="highlighter-rouge"><pre class="highlight"><code>> cd</code></pre></div>

<code class="highlighter-rouge">cd</code> is short for "<strong>c</strong>urrent <strong>d</strong>irectory".

If your username were <code class="highlighter-rouge">codecat</code>(remember the <code class="highlighter-rouge">whoami</code> command?), the result should look something like this:

<div class="highlighter-rouge"><pre class="highlight"><code>> cd
</code><code>C:\Users\codecat</code></pre></div>

</span>
</div>

Now, to see a list of files and folders inside the current folder, use the following command:

<div class="os-switch">
<span class="osx">
<div class="highlighter-rouge"><pre class="highlight"><code>$ ls</code></pre></div>

<code class="highlighter-rouge">ls</code> is a command that "<strong>l</strong>i<strong>s</strong>ts" files in the current folder. The result should look something like this:

<div class="highlighter-rouge"><pre class="highlight"><code>
$ ls
Applications
Desktop
Documents
Downloads
...
</code></pre></div>
</span>

<span class="wins">
<div class="highlighter-rouge"><pre class="highlight"><code>> dir</code></pre></div>

<code class="highlighter-rouge">dir</code> is a command used for file and "<strong>dir</strong>ectory" listing. The result should look something like this:

<div class="highlighter-rouge"><pre class="highlight"><code>
Directory of C:\Users\codecat

16.10.2015  09:32  .
16.10.2015  09:32  ..
16.10.2015  09:30  Desktop
16.10.2015  09:30  Documents
16.10.2015  11:06  Downloads
03.05.2015  17:17  Favorites
...
</code></pre></div>
</span>
</div>

Now, let's move into the `Desktop` folder:

	$ cd Desktop

<div class="os-switch">
<span class="osx">
<code class="highlighter-rouge">cd</code> stands for "<strong>c</strong>hange <strong>d</strong>irectory" (directory is just another name for a folder). You can use <code class="highlighter-rouge">pwd</code> to check whether you really moved into the right place. The result you should now see is:

<div class="highlighter-rouge"><pre class="highlight"><code>$ pwd
/Users/codecat/Desktop
</code></pre></div>

As before, you can now also display a list of files and folders on your desktop with a familiar command:

<div class="highlighter-rouge"><pre class="highlight"><code>$ ls
</code></pre></div>

</span>
<span class="wins">
<code class="highlighter-rouge">cd</code> with aditional arguments means "<strong>c</strong>hange <strong>d</strong>irectory" (remember before we just wanted to print the path of the current directory and we didn't pass any aditional arguments to the command). Now we moved to the directory  <code class="highlighter-rouge">Desktop</code> directory because we passed additional "Desktop" word to the command. The result you should now see is:

<div class="highlighter-rouge"><pre class="highlight"><code>C:\Users\codecat\Desktop
</code></pre></div>

As before, you can now also display a list of files and folders on your desktop with a familiar command:

<div class="highlighter-rouge"><pre class="highlight"><code>> dir
</code></pre></div>
</span>
</div>

Now, let's make a new folder on your Desktop, using only text commands. Type in the following command:

	$ mkdir cat-folder

`mkdir` is just a super short version of "**m**a**k**e **dir**ectory" and `cat-folder` is the name of the folder we want to create (you could choose any other name here).

Now, check you Desktop and you'll see that a new folder with the name `cat-folder` just appeared! You can try and make another folder if you want.

To clean up the newly created empty folder, you can use the command:

<div class="os-switch">
<span class="osx">
<div class="highlighter-rouge"><pre class="highlight"><code>$ rm -r cat-folder
</code></pre></div>
</span>
<span class="wins">
<div class="highlighter-rouge"><pre class="highlight"><code>> rmdir /s cat-folder
</code></pre></div>
</span>
</div>
<code class="highlighter-rouge"><span class="os-switch"><span class="osx">rm</span><span class="wins">rmdir</span></span></code> stands for "**r**e**m**ove". Be careful when using this command, there's no undo, so make sure you're only deleting files and folder you don't need anymore.

<div class="os-switch">
<span class="osx">
If you ever get lost and want to return back to your home folder, you can always type just:

<div class="highlighter-rouge"><pre class="highlight"><code>$ cd</code></pre></div>
</span>
</div>

Sometimes you'll want to move to the folder that contains the current folder. For example, if you moved into <code class="highlighter-rouge"><span class="os-switch"><span class="osx">/Users/codecat/Desktop/cat-folder</span><span class="wins">C:\Users\codecat\Desktop\code-cat</span></span></code> and you want to go back to <code class="highlighter-rouge"><span class="os-switch"><span class="osx">/Users/codecat/Desktop</span><span class="wins">C:\Users\codecat\Desktop</span></span></code>, just type the following command to move one level above:

<div class="os-switch">
<span class="osx">
<div class="highlighter-rouge"><pre class="highlight"><code>$ cd .
</code></pre></div>
</span>
<span class="wins">
<div class="highlighter-rouge"><pre class="highlight"><code>> cd ..
</code></pre></div>
</span>
</div>

Feeling a bit confused? Reward yourself with some chocolate and feel free to take a few minutes to practice these new commands.

Right now the commands probably look confusing and unnecessary because you can do the same thing much faster using your mouse and
<span class="os-switch"><span class="osx">Finder</span><span class="wins">File Explorer</span></span>, but we promise they become easier with practice (plus, you can already impress your friends by talking to your computer like a hacker from the movies!)

It's not just about looking cool though, we promise. Eventually, moving through your computer with text commands can become more effecient than using Finder, and you'll be using the Terminal more and more as you learn about programming.

<div class="more">
You can learn more about the <span class="os-switch"><span class="osx">Terminal in
<a href="http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line" target="_blank">this blog post</a></span><span class="wins">Command Prompt in <a href="http://www.makeuseof.com/tag/a-beginners-guide-to-the-windows-command-line/" target="_blank"> this blog post</a></span></span>.
</div>

## Install Ruby

Ruby is a programming language. Don't worry, you won't have to learn it just yet, we just need to make sure it's installed so we can use Jekyll.

<div class="os-switch show">
<div class="osx">
	<p>On a Mac, you probably already have Ruby installed. See the instructions below for more information on how to check your Ruby installation.</p>
	<p>You can find additional installation instructions on the <a href="https://www.ruby-lang.org/en/documentation/installation/#homebrew" target="_blank">Ruby website</a> (but this shouldn't be necessary).</p>
	<p>You will probably need to <a href="http://railsapps.github.io/xcode-command-line-tools.html" target="_blank">install Xcode Command Line Tools</a>. To do that, just type the following command in the Terminal:</p>
	<pre>$ <code>xcode-select --install</code></pre>
	<p>In case of problems, you can check out <a href="http://railsapps.github.io/xcode-command-line-tools.html" target="_blank">this page</a> for additional instructions</p>
</div>
<div class="wins">
	<p>On a Windows computer, use <a href="http://rubyinstaller.org/downloads/" target="_blank">RubyInstaller</a> to install <strong>Ruby 2.2.5</strong> on your computer.</p>

	<p>Once the Ruby installation is finished, open the <strong>Start Command Prompt With Ruby</strong> application to continue with this tutorial.</p>
</div>
</div>

### Checking your Ruby installation

Now that you've become familiar with <span class="os-switch"><span class="osx">Terminal</span><span class="wins">Command Prompt</span></span>, you can always run the following command to check whether Ruby is installed and its version:

	$ ruby --version  

If you get a line that starts with `ruby`, followed by version number that is `1.9.3` or greater (for example, `2.1.6`, `2.2.5`), you're good to go!

## Install some very useful gems

<img src="{{ "/images/RubyGems.png" | prepend: site.baseurl }}" class="text-icon"/>

Next, we need to install a few tools you'll need to build your website and publish it online by the end of the day. In Ruby, these additional tools are packaged as **gems** (pretty cool name, right?).

We'll need two gems for this tutorial: `github-pages` and `bundler`. To install them, just type in the following command in your <span class="os-switch"><span class="osx">Terminal</span><span class="wins">Command Prompt</span></span>:

	$ gem install github-pages bundler

<div class="os-switch show">
<div class="osx">

If you get a permission denied error, you can also try:

<div class="highlighter-rouge"><pre class="highlight"><code>$ sudo gem install github-pages bundler
</code></pre></div>

</div>
<div class="wins">

Sometimes things don't go smoothly and you can get pretty weird errors when you try to install gems. One of the common ones is when you run the above command you get something like this:
<div class="highlighter-rouge"><pre class="highlight"><code> SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed</code></pre></div>

Don't worry. In a typical day of a programmer there is more then one such moment and it's pretty normal to Google for solutions. So if this happens to you, we found a <a here="http://guides.rubygems.org/ssl-certificate-update/" target="_blank">page</a> where you can follow the steps and resolve this issue.
</div>
</div>

When you enter the command to install new gems, it will take some time for anything to happen. Don't worry, this is normal.


When you install new gems, your <span class="os-switch"><span class="osx">Terminal</span><span class="wins">Command Prompt</span></span> has to look for the right gems online, download them and install them on your computer.The `github-pages` gem includes a lot of smaller gems, so it can take a few minutes to install all of them. Let your <span class="os-switch"><span class="osx">Terminal</span><span class="wins">Command Prompt</span></span> do the work for you and feel free to grab a cup of coffee or tea while you wait.

Once the installation is done, you'll see a line telling you how many gems were installed, followed by the regular input prompt of your <span class="os-switch"><span class="osx">Terminal</span><span class="wins">Command Prompt</span></span>.

## Install a text editor

A text editor makes it easier to edit your website's files and can also help you edit your code by providing helpful suggestions. Pretty cool, eh? You'll be using this a lot today.

To make sure we're all using the same tools, let's go ahead and install **<a href="http://www.sublimetext.com/2" target="_blank">Sublime Text 2</a>** (direct download link for <span class="os-switch"><span class="osx"><a href="http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.2.dmg" target="_blank">Mac OS X</a></span><span class="wins"><a href="http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.2%20Setup.exe" target="_blank">Windows</a> or <a href="http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.2%20x64%20Setup.exe" target="_blank">Windows 64 bit</a></span></span>).

## Install GitHub Desktop

<img src="{{ "/images/github-icon-mac.png" | prepend: site.baseurl }}" class="text-icon"/> The **GitHub Desktop app** will make it easier to publish your website online at the end of the day, or any other time, for that matter.

Visit <a href="https://desktop.github.com/" target="_blank">this page</a> to install the app on your computer. There's also a <a href="https://help.github.com/desktop/" target="_blank">help page</a> if you'll ever need more information about the app and hints about how to use it.

<div class="os-switch show">
<div class="osx"></div>
<div class="wins">
	<p>And finally, download and <strong>install Git</strong> from <a href="https://git-scm.com/downloads" target="_blank">this page</a>. This is also something we'll need to publish your website. You don't need to change any settings in the installer.</p>
</div>
</div>

<div class="recap">
<h2>What did you learn?</h2>
Granted, this part of the tutorial wasn't very interesting, but you did install everything we'll need later on and learned the basics of using the <span class="os-switch"><span class="osx">Terminal</span><span class="wins">Command Prompt</span></span>.
</div>

In <a href="{{ "/2-new-project" | prepend: site.baseurl }}">Part 2</a>, you'll learn how to set up a new Jekyll project.
