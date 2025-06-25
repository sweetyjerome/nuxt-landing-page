# Web Developer and Designer Screening Assessment - Landing Page

## Overview

Thanks for taking part in our Web Developer and Designer screening assessment at Red Interactive! We're excited to see your skills in action. In this project, you'll create a landing page for an online casino!

The tech stack you'll use will be Nuxt.js (Nuxt 4), styling it with SCSS to capture the lively, engaging vibe of the iGaming world (here is an existing landing page of an online casino for inspiration: https://offers.kiwistreasure.com/kwt/3steps/home). 

We've provided Header.vue and Footer.vue components so you can focus on developing out the main content and layout. 

Feel free to get creative with how you arrange the page! We have also provided various game assets (located in the public dir of the project) so you can hit the ground running with pre-designed creative.


## Task Requirements

### 1. Create the Landing Page

Build a responsive landing page in Nuxt.js to promote the following online casino offer: 200 Free Spins on "Atlantean Treasures: Mega Moolah". The page should include:



**Hero Section**: A full-width section with a headline (e.g., "Grab 200 Free Spins on Atlantean Treasures: Mega Moolah!"), a subheadline, a "Claim Now" button, and a jackpot value fetched from the provided API endpoint (link is provided below). 

The API endpoint will return jackpot values for multiple games, so you will need to identify the correct game and show the correct jackpot value. The game is "Atlantean Treasures: Mega Moolah". There will be duplicates objects, so please handle this.


**Offer Details Section**: A section explaining the offer, use the below high-level information about the offer:

* **Game name**: Atlantean Treasures: Mega Moolah
* **Free Spins**: 200
* **Minimum deposit**: $10 to activate the free spins
* **Spin Value**: 0.10
* **Wagering Requirement**: 35x
* **Offer Expiry**: 7 days from signing up
* **Game Volatility**: Medium

Use placeholder text for anything you are unsure of. You will not be judged on placeholder content. Your structure for laying out this section can be based on the provided inspiration at the end of this readme.


**Call-to-Action Section**: A final section with a "Sign Up or Claim Now" button to encourage conversions.



**Pre-built Components**: Use the provided Header.vue (with "King Neptune" logo and Sign In/Sign Up buttons) and Footer.vue (Copyright line) in your layout.

### 2. API Integration

Fetch the progressive jackpot values from the provided endpoint and filter to obtain the correct value: https://jackpots.desdev.co

Use a composable (e.g., useCasinoJackpotApi) to handle API requests and manage data fetching logic.

Show the progressive jackpot value in the hero section, formatted as $ currency (e.g., "$1,234,567.89").

Handle loading and error states gracefully (e.g., show a spinner or use a skeleton screen while the request is pending).


### 3. Project Structure and tips


This project uses Nuxt 4. For more information regarding Nuxt 4 and the breaking changes between 3 and 4 please visit the Nuxt website.


**Composables**: Leverage Nuxt composables for reusable logic, such as API fetching or formatting (e.g., useCasinoJackpotApi for API calls).



**Components**: Create reusable components for each content section (e.g., Hero.vue, OfferDetails.vue,  CtaSection.vue, Button.vue).



**TypeScript (bonus points)**: TypeScript is preferred but not required. If used, ensure type safety for API responses and component props.



**Styling**: Use SCSS for styling, utilizing the provided CSS variables (--primary-accent, --secondary-accent, --tertiary-accent, --primary-text). Ensure a mobile-first, responsive design. Feel free to change up the colours and styling!

**Gameplay video**: A video of the slot game has been provided in the project and as a link, please include this in the landing page in a section that you feel makes the most sense. 

**Performance (bonus points)** : Optimize assets (e.g., lazy-load images and use webp/avif) for fast load times.

### 4. Provided Assets/Resources

* **components/Header.vue**: Includes "King Neptune" text logo and Sign In/Sign Up buttons.

* **components/Footer.vue**: Includes a basic copyright line.

* **public/img/hero.jpg** - Hero image to use on the landing page

* **Gameplay video** - https://cdn.desdev.co/atlanteantreasures.webm 

* **Jackpot API Endpoint** https://jackpots.desdev.co


### 5. Submission Instructions





#### Option 1: Git Repository

Upload the completed project to a GitLab or GitHub repository.



Ensure the repository is public



Include an INSTRUCTIONS.md file in your repository with:





Instructions to clone, install dependencies, and run the project locally (e.g., npm install, npm run dev) and anything else that you feel will be relevant for us to know.



Share the repository URL with the hiring team via email.



#### Option 2: ZIP File





Create a ZIP file of your repository, excluding the **node_modules** folder.



Include a INSTRUCTIONS.md with the same instructions as above.



Email the ZIP file to the hiring team.



#### Deadline: Submit within 5 days of receiving this assessment.

## Setup Instructions





Download the ZIP file and place it into a working directory that you have read/write permissions for



**Install dependencies**: npm install.



**Run locally**: npm run dev.



## Evaluation Criteria


When you have completed your landing page, we will be focusing on the below criteria:


**Code Quality**: Clean, modular code with proper use of composables and components.



**API Integration**: Correct use of the API endpoint with proper error/loading handling.



**Design & UX**: Responsive, visually appealing design that drives conversions

## Resources and inspiration





[Nuxt website](https://nuxt.com)


[Example landing page 1](https://offers.kiwistreasure.com/kwt/3steps/home)

[Example landing page 2](https://offers.jackpotcitycasino.com/jpc/mm)

[Example landing page 3](https://jackpotcityontario.com/ontario)

[Inspiration for casino page layouts](https://games.paddypower.com/)


If you have any questions, please contact the hiring team via email. Good luck!