import React from 'react'

export function handleDetailsPage(page) {
  currentDetails = page
}

var currentDetails

const detailsTextObj = {
  aboutMe: {
    myStory: `My love for computers goes back further than I can remember. I've always
        been drawn to anything with buttons and a screen. I've always had a passion
        for Software Development, and after I graduated from high school, I took
        part in a Web Development course.

        This was in 2006, Myspace was beginning to fade, Facebook had just
        started taking off, Youtube had just been created and the world of
        Software Development wasn't the industry it is today.
        
        The general consensus at the time was that Software Development was a
        risky industry to pursue, and instead it was advised to get a job with
        better security and steady income. As a result, I put my focus into
        being an electrician, which in Australia is considered respectable.
        
        Time has passed, times have changed and I wish to finish what I started.

        I am friendly, hard working, self motivated and eager to learn. My
        experience thus far will show that I can work with all levels of staff,
        in high pressured environments and can provide leadership as needed. I'm
        coming from a technical background, which will act as a catalyst for me to
        grow in this industry.`,
  },
  cheapshark: {
    why: `To gain experience using JSON files and REST API's.
    I've learnt that both JSON files and API's play a large part in the
    industry and should be a tool in every Software Developers kit.`,
    learn: `How to use JSON files and a REST API. To give myself an additional
    challenge, I created multiple range sliders from scratch, which can be found at
    the top of the application.
    To achieve this, I could have implemented ready made multiple range
	sliders from a library like Bootstrap, but instead created my own.`,
    hardest: `To create the desired outcome with a restricted API. Whilst creating
    this application, I learnt API's are not always free,
    easy to use and are not always versatile. For example, I wanted to use
    the API to filter by the games release date, however it was not
    possible by only using the API. To achieve this, I
    needed to implement JavaScript code filtering. As a result, the final
    product is a hybrid between JavaScript filtering and API filtering.`,
  },
  freecodecamp: {
    why: `I was advised by close friends that work in the industry, that
  Freecodecamp was a solid choice, and after months of using Freecodecamp I agree.`,
    learn: `The foundation of JavaScript, React, CSS, HTML and SASS`,
    hardest: `The JavaScript algorithms were challenging. There were times
    that I felt like Freecodecamp did a very good job in leading you up to
    challenging exercises, and there were times I felt like I was thrown in
    the deep end, resulting in hours of research. Luckily there are various resources that have solutions to the exercises. Whilst I used these resources, I did not heavily rely on them, but instead referred to them as a last resort.`,
  },
}

const currentDetailsText = detailsTextObj[currentDetails]

export function details() {
  return <div></div>
}
