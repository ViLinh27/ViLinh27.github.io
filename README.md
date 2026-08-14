# ViLinh27.github.io

## 2025

I wanted to overhaul my portfolio website to put a bigger emphasis on code as my academic career has lead me into computer science and human-computer interaction. The flexibility and vastness of the field has allowed me to try different aspects of the domain. So this site will show the projects that have lead me to where I am now, including the art projects from my time in undergrad.

I made a Codepen rendition to help visualize the idea: https://codepen.io/vilinh27/pen/ByBGBrY

### screenshots

![portfolio screenshot](/assets/code/dumping-ground-revamp/2024-revamp/Image%208-14-26%20at%209.39%20AM.jpg)
![portfolio screenshot 2](/assets/code/dumping-ground-revamp/2024-revamp/Image%208-14-26%20at%209.40%20AM.jpg)

## 2026

I am no longer satisfied with the layout of my multi-disciplinary portfolio so ths site will be getting another overhaul that will hopefully. be more scalable.

### concept

I'm basing the new format off of India Boechk's site here: https://indiaboeckh.com . She separates her disciplines by role. I did too techncally but it's not obvious enough since it's just a lot of modals and filtering on one whole page. Plus this is a good chance to include other more miscellaneous stuff I do like traditional art and fibre arts and sculpting (among other things). The main portfolio focuses will be visual development and illustration, software development and UX research.

### prototype

I'm working on a prototype (low fidelity) to have a visual plan for how this site will look. I'm missing a few disciplines and flows but overall helps the plan out of the site.
https://design.penpot.app/#/view?file-id=81f57451-85cc-819d-8008-76595b67a5e2&page-id=512cf32f-1db5-804d-8008-7663d8b8e6b0&section=interactions&index=0&share-id=3be9e5e1-190f-8090-8008-7a8550576425

### flowchart

The flow chart is a more complete overview of how the user is meant to navigate the information on the new multi disciplinary site. It helps me see what information I need to add to the site.

Here's the flow chart:
![user flow chart](/assets/code/dumping-ground-revamp/dumpingground-portfolio-revamp-2026.webp)

### design system

Here is a spreadsheet of a rudimentary design system (with some resources on how to achieve some goals for the website):
| **#** | **Colours** | \***\* | \*\*** | **Font choices** | \***\* | \*\*** | \***\* | **Website references** | \*\*** | \*\*\*\* |
|-------|--------------------------------------------|---------|--------------------|-----------------------------|--------------------------------------------|-----------------------------------------------------------------------------|---------|---------------------------------|--------------------------------------------------------------------------|--------------------------------------------------|
| 1 | LIGHT MODE | | | name | where to find it | notes | example | goal | website | notes |
| 2 | primary bg | ebebfb | rgb(235, 235, 251) | Atkinson Hyperlegibile font | https://www.brailleinstitute.org/freefont/ | seems to have good review and its’ free | | toggle dark mode in vanilla js | https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp | TOGGLE CLASSE |
| 3 | secondary (button) bg | #A492D4 | rgb(164, 146, 212) | | | https://fonts.google.com/specimen/Atkinson+Hyperlegible?preview.script=Latn | | audio playing (onclick I guess) | https://jorpantech.medium.com/triggering-audio-w-vanilla-js-bc1235273c1a | would be good for record player bg music effect. |
| 4 | accent bg | bdbbf2 | Rgb(189, 187, 242) | Roboto | https://fonts.google.com/specimen/Roboto | | | | https://www.w3schools.com/jsref/met_audio_play.asp | |
| 5 | font colour | #110638 | rgb(17, 6, 56) | | | | | | | |
| 6 | link | #244570 | rgb(36, 69, 112) | | | | | | | |
| 7 | link hover | #F2D049 | Rgb(242, 208, 73) | | | | | | | |
| 8 | link clicked | #684399 | rgb(104, 67, 153) | | | | | | | |
| 9 | DARK MODE | | | | | | | | | |
| 10 | primary bg | #544F70 | rgb(84, 79, 112) | | | | | | | |
| 11 | secondary (button) bg | #78527D | Rgb(120, 82, 125) | | | | | | | |
| 12 | accent bg | 957BB0 | rgb(149, 123, 176) | | | | | | | |
| 13 | font colour | #FAF7FF | rgb(250, 247, 255) | | | | | | | |
| 14 | link | #D9E3FF | rgb(217, 227, 255) | | | | | | | |
| 15 | link hover | FFECA1 | rgb(255, 236, 161) | | | | | | | |
| 16 | link clicked | #E3C0FA | rgb(227, 192, 250) | | | | | | | |
| 17 | WHERE TO FIND MORE COLOURS: | | | | | | | | | |
| 18 | https://htmlcolors.com/google-color-picker | | | | | | | | | |

### references for extra effects

#### web components

This is the one I used:
https://medium.com/front-end-weekly/how-to-build-reusable-html-components-without-component-based-frameworks-2f7747f4c5db

This is extra:
https://www.reddit.com/r/Frontend/comments/v2lqvv/begginer_question_how_to_write_reusable_part_of_a/

#### flexbox

Always handy for styling:
https://the-echoplex.net/flexyboxes/?fixed-height=on&display=flex&flex-direction=column&flex-wrap=nowrap&justify-content=space-between&align-items=center&align-content=stretch&order%5B%5D=0&flex-grow%5B%5D=0&flex-shrink%5B%5D=1&flex-basis%5B%5D=auto&align-self%5B%5D=auto&order%5B%5D=0&flex-grow%5B%5D=0&flex-shrink%5B%5D=1&flex-basis%5B%5D=auto&align-self%5B%5D=auto&order%5B%5D=0&flex-grow%5B%5D=0&flex-shrink%5B%5D=1&flex-basis%5B%5D=auto&align-self%5B%5D=auto

#### navbar

Talks about <nav>:
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav

Has styling tips:
https://www.w3schools.com/css/css_navbar.asp

for the dropdown part of the navbar:
https://www.w3schools.com/css/css_dropdowns.asp

## Issues encountered while trying to revamp dumping ground 2026

### responsive nav bar

I have a bug in this block in one of the 600 px media queries:

```
 .main-nav.icon {
        display: block;
        float: right;
    }
```

First off I mixed off the selector types. `.main-nav.icon` tells css to look for element that has both classes on exact same element. `.icon` is a child of `<nav>` on an `<a>`, so the selector I had doesn't work period.

There's also this issue on specificity. This code block:

```
.main-nav a{
        display: none;
    }
```

targets all `<a>` inside `.main-nav` class, so `.main-nav.icon` doesn't match the block above.

How to fix is it is add a space and an extra `a` tag so the block looks like this:

```
.main-nav a.icon {
        display: block;
        float: right;
    }
```
