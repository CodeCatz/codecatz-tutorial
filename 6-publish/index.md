---
layout: tutorial
title: "Part 6: Publish your website online"
permalink: /6-publish/
---

In <a href="{{ "/5-design" | prepend: site.baseurl }}">Part 5</a>, you made your website much better looking. It looks so good it's time to share it with the world and send the link to your friends.

At the moment, you awesome website lives on your computer. You can visit it in your web browser after you run it from the Terminal with `jekyll serve`. Unfortunately, this doesn't yet make it available to anyone else. Which is why we'll now see how you can publish it online with a little help from <a href="https://github.com" target="_blank">GitHub</a>.

<div class="hint">
Note: You can skip this part and come back to it later.
</div>

## Create your free GitHub account

GitHub is a website where people from all over the world share and work together on big and small coding projects. In other words, GitHub is a super cool website where you can share your projects for free. This allows other users to learn from your code and even suggest improvements.

<img src="{{ "/images/female_coder_octocat.png" | prepend: site.baseurl }}"/>

A lot of GitHub users are professional programmers, but there are also many people who are just starting to learn coding — just like you. Looking at other people's code and playing with it on your own computer is a great way to improve your programming skills or find solutions for your coding problems. Just make sure to add attribution if you use other people's code in your projects!

We also like GitHub because it plays really nice with Jekyll, the tool we're using to build your website. In fact, GitHub likes Jekyll so much that it allows you to publish your Jekyll projects online for free, through a service called <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>.

In <a href="{{ "/1-installation" | prepend: site.baseurl }}">Part 1</a>, you probably already installed **<a href="https://desktop.github.com/">GitHub Desktop</a>** on your computer. If not, visit <a href="https://desktop.github.com/" target="_blank">this page</a> to download the app now. And while you're waiting for the app to download and install, **[sign up](https://github.com/join) for your own GitHub account** (choose the Free plan). If you already have a GitHub account, you can skip this step. Either way, make sure to remember your GitHub username.

## Turn your project into a Git repository (just once)

Once you have your GitHub account, **open the GitHub Desktop app** on your computer. When you do this for the first time, you'll see tips for completing a tutorial. Let's skip that for now, you can also come back to the tutorial later, when you learn more about Git.

What we want to do right now is tell Git that it should start tracking changes in your project. To do that, click the Add icon in the top right of the app, switch to the Add tab, and add the folder, where your website is saved (for example, `Users/codecat/Documents/Websites/my-website`). This will add and set up your project folder as a repository, which is just a fancy name for a project.

<img src="{{ "/images/github-mac-0-add-repo-part.png" | prepend: site.baseurl }}"/>

Your project will now appear in the left sidebar. If you right click on the name, you'll even get handy shortcuts that open your project online on GitHub (we'll make that possible in a minute) and on your computer in Finder or Terminal.

<div class="more">
GitHub uses something called Git to keep track of changes in your repository (project). Don't worry about all these new words, we're just mentioning them to make Googling stuff easier and so that you can come back to these parts when you want to learn more. And by the way, GitHub also has several beginner-friendly <a href="https://guides.github.com/" target="_blank">Guides</a> you can use when you want to learn more about Git.
</div>

## Syncing step 1: review and commit your changes

When you select your project now, you'll see a list of changes since the last commit (save) in the middle column of the app under the Uncommited Changes section. When you do this for the first time, all your files will appear as changed. By clicking on each of the files, you can review the changes you made in the selected file since the last commit in the right column.

Before you can publish and sync changes, you first have to commit them as a package. It's good practice to do this every time you make any significant changes to the website (add a new blog post, make design changes etc).

<img src="{{ "/images/github-mac-1-review-changes.png" | prepend: site.baseurl }}"/>

Enter a Summary (a short title) for your commit and optionally a brief description. For your first commit, the title can simply be "Setting up the website". Click the Commit to master button. 

<div class="hint">
When you add commits, it's good practice for the title and description to briefly describe the changes you made, so you can easily find these changes in the history.
</div>

## Syncing step 2: publish and sync with your GitHub repository

Once all changes have been added to a commit (if you make additional changes, you can make a new commit), it's time to sync them with the online copy of your repository which will be hosted on GitHub.

The commit package you just saved will now appear under the History section. When you do this for the first time, you'll see a Publish option in the top right corner of the app. 

<img src="{{ "/images/github-mac-1-review-changes-sync.png" | prepend: site.baseurl }}"/>

Click the Publish icon to continue. The app will ask you to login with your GitHub account. After you do this, a window will appear, asking you for a name and description for the repository, as it will appear on GitHub.

It's important to name the repository for your Jekyll website in the following format: **username.github.io** - but replace the username part with your own GitHub username. For example, if your username was *codecat*, the name of your repository would be *codecat.github.io*. Once you've changed that, click the Push Repository button.

<img src="{{ "/images/github-mac-2-create-repo.png" | prepend: site.baseurl }}"/>

Congratulations! Your website is now on GitHub! Go on, you can check your project's code at https://github.com/username/username.github.io (just replace the `username` part with your own GitHub username). You'll see all the files are the same as the files in the project on your computer.

<img src="{{ "/images/github-published-repo.png" | prepend: site.baseurl }}"/>

In a few minutes, the website should also be available online, for anyone in the world to visit, at https://username.github.io (again, replace the `username` with your own username). Once the website comes online, you can send the link to your friends. 

The next time you'll have changes to commit, you can just click on the Sync button in the top right corner to upload recent changes. Your website will also be updated automatically when you do that. 

<img src="{{ "/images/github-mac-3-update.png" | prepend: site.baseurl }}"/>

<div class="recap">
<h2>What did you learn?</h2>
Whew, you now actually published your website online! You set up your GitHub account, and learned how to use the GitHub app to 1.) commit changes and 2.) sync them to an online copy of your project (your GitHub repository). Syncing with your GitHub repository also automatically updates the public copy of your website.
</div>

In <a href="{{ "/7-update" | prepend: site.baseurl }}">Part 7</a>, you'll add some images and update your website again.
