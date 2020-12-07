# Portfolio 💼

</br>
<p align="center">
    <img src="https://img.shields.io/github/languages/count/kqarlos/professional-portfolio?style=for-the-badge" alt="Languages" />
    <img src="https://img.shields.io/github/languages/top/kqarlos/professional-portfolio?style=for-the-badge" alt="Top Language" />
    <img src="https://img.shields.io/github/languages/code-size/kqarlos/professional-portfolio?style=for-the-badge" alt="Code Size" />
    <img src="https://img.shields.io/github/repo-size/kqarlos/professional-portfolio?style=for-the-badge" alt="Repo Size" />   
    <img src="https://img.shields.io/tokei/lines/github/kqarlos/professional-portfolio?style=for-the-badge" alt="Total Lines" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/professional-portfolio/axios?style=for-the-badge" alt="Axios Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/professional-portfolio/express?style=for-the-badge" alt="Express Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/professional-portfolio/express-handlebars?style=for-the-badge" alt="Express- handlebars Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/professional-portfolio/mysql2?style=for-the-badge" alt="Mysql2 Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/professional-portfolio/sequelize?style=for-the-badge" alt="Sequelize Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/professional-portfolio/handlebars-helpers?style=for-the-badge" alt="Handlebars Helpers Version" />
    <img src="https://img.shields.io/github/last-commit/kqarlos/professional-portfolio?style=for-the-badge" alt="Last Commit" />  
    <img src="https://img.shields.io/github/issues/kqarlos/professional-portfolio?style=for-the-badge" alt="Issues" />  
    <img src="https://img.shields.io/github/followers/kqarlos?style=social" alt="Followers" />  
</p>


## Description

This website contains my professional informationshows some of the projects that I have worked on.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
    * [Screenshots](#screenshots)
    * [Snippets](#snippets)
* [Credits](#credits)
* [License](#license)

## Installation

This application is compatible with the most commonly used web browsers.

<p align="center">
    <a href="https://professional-portfolio2020.herokuapp.com/"><img src="https://img.shields.io/badge/-👉 See Live Site-success?style=for-the-badge"  alt="Live Site" /></a>
</p>

## Usage

### Screenshots

Live Site:
 * Uses smooth scrolling
 * Has sticky navigation bar
 * Links to pdf files

![Site](public/assets/images/fullsite.gif)


Responsiveness:
 * Navigation bar collapses
 * Content width takes a higher percentage.
 * back to top button shortens


![Site](public/assets/images/responsive.gif)



### Snippets

Portfolio Row code

```html

      <!-- second row / content -->
      <div class="row">

        <div class="col-12 col-lg-6 col-xl-4 my-2">

          <div class="card">
            <img src="assets/images/code-quiz.png" class="card-img" alt="Code Quiz">
            <div class="card-img-overlay">
              <a href="https://kqarlos.github.io/code-quiz/" target="_blank"
                class="btn text-white bg-info position-absolute contentText projectBtn">Code Quiz</a>
            </div>
          </div>

        </div>

        <div class="col-12 col-lg-6 col-xl-4 my-2">

          <div class="card">
            <img src="assets/images/password-generator.png" class="card-img" alt="Password Generator">
            <div class="card-img-overlay">
              <a href="https://kqarlos.github.io/password-generator/" target="_blank"
                class="btn text-white bg-info position-absolute contentText projectBtn">Password Generator</a>
            </div>
          </div>

        </div>

        <div class="col-12 col-lg-6 col-xl-4 my-2">

          <div class="card">
            <img src="assets/images/day-planner.png" class="card-img" alt="Day Planner">
            <div class="card-img-overlay">
              <a href="https://kqarlos.github.io/day-planner/" target="_blank"
                class="btn text-white bg-info position-absolute contentText projectBtn">Day Planner</a>
            </div>
          </div>

        </div>

      </div>

```


* This code snippet had an example of a row from the Bootstrap grid system used in the Portfolio page. The column &lt;div class="col-12 col-lg-6 col-xl-4 my-2"&gt; includes the Bootstrap styling necessary to make the project cards responsive to three different browser dimensions. Each project card takes 4 columns at xl size, then 6 columns at lg size and all 12 columns at smaller sizes.

Navigation Bar code 

```html

  <!-- nav bar -->
<nav class="py-0 navbar sticky-top navbar-expand-lg navbar-light bg-info">
    <a class="navbar-brand bg-info text-white font-weight-bold p-3 headingText" href="#about">Carlos Toledo</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item border-right">
          <a class="nav-link contentText text-white" href="#portfolio">Portfolio</a>
        </li>
        <li class="nav-item border-right">
          <a class="nav-link contentText text-white" href="#contact">Contact</a>
        </li>
        <li class="nav-item border-right">
          <a class="nav-link contentText text-white" target="_blank" href="assets/resume.pdf">Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link contentText text-white" target="_blank" href="assets/cover-letter.pdf">Cover Letter</a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- end nav-bar -->

```

* This shows the code used to create the navigation bar using a Bootstrap Navbar. In addition to formatting the objects through Bootstrap's styling, I can also add my own css styling as is shown. For example, &lt;a class="nav-link contentText text-white"&gt; uses Bootstrap styling like _text-white_ which adjust the color of the text. It also uses my own styling _contentText_ which tells it the font type and spacing between lines for the text in the list. What's different about this navigation bar is that it has links to diffferent elements within the DOM. In addition, it has links to two pdf files that open in a separate tab.

## Credits 

### Author

- 💼 Carlos Toledo: [portfolio](https://professional-portfolio2020.herokuapp.com/)
- :octocat: Github: [kqarlos](https://www.github.com/kqarlos)
- LinkedIn: [carlos-toledo415](https://www.linkedin.com/in/carlos-toledo415/)

### Built With

</br>
<p align="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML-orange?style=for-the-badge"  alt="HMTL" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS-blue?style=for-the-badge" alt="CSS" /></a>
    <a href="https://www.javascript.com/"><img src="https://img.shields.io/badge/-Javascript-yellow?style=for-the-badge" alt="Javascript" /></a>
    <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/-Bootstrap-blueviolet?style=for-the-badge" alt="Bootstrap" /></a>
    <a href="https://momentjs.com/docs/"><img src="https://img.shields.io/badge/-Handlebars-orange?style=for-the-badge" alt="Handlebars" /></a>
    <a href="https://jquery.com/"><img src="https://img.shields.io/badge/-JQuery-blue?style=for-the-badge" alt="JQuery" /></a>
</p>
## License

</br>
<p align="center">
    <img align="center" src="https://img.shields.io/github/license/kqarlos/professional-portfolio?style=for-the-badge" alt="MIT license" />
</p>