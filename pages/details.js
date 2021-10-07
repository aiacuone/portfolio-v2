import React from 'react'

export function handleDetailsPage(page) {
  currentDetails = page
}

var currentDetails

const detailsTextObj = {
  aboutMe: {
    myStory: `My love for computers goes back further than I can remember. I've always been drawn to anything with buttons and a screen. I've always had a passion for Software Development, and after I graduated from high school, I took part in a Web Development course.

        This was in 2006, Myspace was beginning to fade, Facebook had just started taking off, Youtube had just been created and the world of Software Development wasn't the industry it is today.
        
        The general consensus at the time was that Software Development was a risky industry to pursue, and instead it was advised to get a job with better security and steady income. As a result, I put my focus into being an electrician, which in Australia is considered respectable.
        
        Time has passed, times have changed and I wish to finish what I started.

        I am friendly, hard working, self motivated and eager to learn. My experience thus far will show that I can work with all levels of staff, in high pressured environments and can provide leadership as needed. I'm coming from a technical background, which will act as a catalyst for me to grow in this industry.`,
  },
  cheapshark: {
    why: `To gain experience using JSON files and REST API's. I've learnt that both JSON files and API's play a large part in the industry and should be a tool in every Software Developers kit.`,
    learn: `How to use JSON files and a REST API. To give myself an additional challenge, I created multiple range sliders from scratch, which can be found at the top of the application.
    To achieve this, I could have implemented ready made multiple range sliders from a library like Bootstrap, but instead created my own.`,
    hardest: `To create the desired outcome with a restricted API. Whilst creating this application, I learnt API's are not always free, easy to use and are not always versatile. For example, I wanted to use the API to filter by the games release date, however it was not possible by only using the API. To achieve this, I needed to implement JavaScript code filtering. As a result, the final product is a hybrid between JavaScript filtering and API filtering.`,
  },
  freecodecamp: {
    why: `I was advised by close friends that work in the industry, that Freecodecamp was a solid choice, and after months of using Freecodecamp I agree.`,
    learn: `The foundation of JavaScript, React, CSS, HTML and SASS`,
    hardest: `The JavaScript algorithms were challenging. There were times that I felt like Freecodecamp did a very good job in leading you up to challenging exercises, and there were times I felt like I was thrown in the deep end, resulting in hours of research. Luckily there are various resources that have solutions to the exercises. Whilst  used these resources, I did not heavily rely on them, but instead referred to them as a last resort.`,
  },
  noteTaker: {
    why: `	When I was first thinking about this project, I had the intention of challenging myself and using the CRUD system (create, read, update, delete). I felt like I had a good grasp of the basics of React, and wanted to express an idea that I had since the first time I saw a JavaScript object.

    When I first saw a JavaScript object, what came to mind was a folder, a folder that contains another folder and so on. Using this concept and my need for notes in my every day life, I wanted to develop an easy to use system that could create and store any type of note.`,
    learn: `This project challenged me to position elements correctly and comfortably for the user, using CSS positioning, displays and attributes likes margins and padding.
  
    I learnt alot about giving the user the ability to scroll within tight areas, pop up menus and arranging elements in a way that is easily viewed and accessed.
    
    I learnt how to implement the CRUD system. I created a system that can continuously build upon itself, as well as a system that gives the user the ability to store multiple types of information.`,
    hardest: `Object Oriented Programming. In Vanilla JavaScript, applying complicated object methods can be challenging and at times impossible. I found that implementing the Lodash Library, made what I was trying to achieve possible.`,
  },
  tekkenNext: {
    intro: ` My first ever project, which I am very proud of. A tip I was given when starting Software Development, was that you're not going to become a good developer by just watching tutorials. The way to become a good developer, is to focus in on a problem or idea that you have, and dive straight into the code, experimenting with how a computer can achieve your desired outcome.`,
    why: ``,
  },
}

const currentDetailsText = detailsTextObj[currentDetails]

export function details() {
  return <div></div>
}
