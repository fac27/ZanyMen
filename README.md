# ZanyMen
Your one place for inflatable guys!

## The Client
ZanyMen is an up-and-coming name in the market of for-rental wacky arm-waving inflatable men. They are looking to upgrade their online presence and have commissioned a webpage that can represent their startup ethos and connect them with businesses looking to fulfil their waky arm-waving inflatable men needs.

## User Story
Customers of ZanyMen are looking for what the founders call a 'vintage service' which only ZanyMen is bringing into the 21st century. ZanyMen works with a lot of small businesses and comunity groups and have for many years handled the rental of inflatable men through paper-based admin. They recognise a need to update their systems but have been reticent about alienating their customers with the technology. Below are two User Stories for customers of ZanyMen using the website:

<details><summary>Shitterton Community Centre</summary>
The centre is run by community volunteers and regularly orders inflatable men from ZenyMen for special events, like car washes and church potlucks. Many of the volunteers are senior citizens or have some form of impairment, which means accessibility is of the highest importance to them. The Shitterton Community Centre is an esteemed long-time customer of ZanyMen and alienating them with a difficult-to-understand or uninviting website would be a great cost to the business.</details>

<details><summary>Wig Wig's Used Tractor Emporium</summary>
Wig Wig's used tractor emporium is an old-fashioned, family-owned used tractor dealorship that's served farmers in the area for several decades. The approachability of the family and their personal in every transaction are the staple of the business, as such, these are also the qualities they look for and value in their partnerships. It's important for ZanyMen that, while bringing the business to the 21st Century with an online presence, they still maintain a personal touch and approachable character, so as to not push away customers like Wig Wig's Used Tractor Emporium.</details>

## Page Requirements
Taking into account the User Stories, ZanyMen's webpage must have the following:
- **accessibility**
  - users must be able to use screen readers and navigate the page with their keyboard when on desktop
  - the website must be appealing and easy to navigate in any device (phone, tablet, laptop, etc..)
- **personality**
  - users must be able to recognise the small company behind the website. It's important to let them know the founders through personal bios

## Installation Guide
If you are given access and need to review or contribute to the project, follow the steps below:

- Clone the repository by running this command on your terminal
  ``` terminal
  git clone https://github.com/fac27/ZanyMen
  ```
- Open the cloned repository in your preferred code editor
  - You can also run the Index.html file through your browser if needed
- This page is being developed using a mobile-first approach. We recommend that you preview the page for mobile devices on your browser console when reviewing the code or submitting any changes.
  
## Debugging
The current version of this page shows a score of 89% on lighthouse when reporting on accessibility. This result is traced back to some aria properties attributed to buttons in our page. In this case, a perfect score has been exchanged for a practical improvement to the accessibility of our page. The aria properties ('aria-expanded' and 'aria-activedescendant') allow screen reader users to know that these buttons are collapsed by default and will direct the screen reader to the intended text once the button is expanded. These functionalities are not present otherwise, so the properties have been kept.

## Learning Outcomes
This page is the outcome of the first project in our skills bootcamp at Founders and Coders Cohort 27. It aims at the fulfilling the learning outcomes below:

### Accessibility
- [x] Structure a site using semantic HTML to aid accessibility
- [x] Ensure a we page is readable for screen readers
- [x] Ensure our UI has sufficient colour contrast so that everyone can perceive it comfortably
- [x] Use various tools to check that our website meets accessibility criteria

### Design
- [x] Use CSS media queries to ensure our content is always presented affectively on screens of different sizes
- [x] Demonstrate a mobile-first approach to building a website
- [x] Use CSS variables to apply repeated colours to HTML elements
- [x] Use CSS Flexbox to style children in a single-dirrection layout (ie a row or a column)
- [x] Use CSS Grid to style children in a two-direction layout

### Worflow
- [x] Ensure our Git commit history tells a coherent story

### HTML Forms
- [x] Use the appropriate input types in HTML forms for gathering different types of information

## Other Notes

- All mentions of the arm-flailling-inflatable-tube-men market is facetious and should not be taken as a literal representation of the author's opinios.
