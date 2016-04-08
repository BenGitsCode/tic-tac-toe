#GA WDI Project-1 - Tic Tac Toe

## Github pages link: http://benjamski.github.io/tic-tac-toe/index.html

## User Stories:
https://github.com/Benjamski/tic-tac-toe/blob/master/assets/user-stories.md

The main creative spin I focused on was using images of Xzibit and Oprah instead of X's and O's because they are both great sources of funny gifs, and because alliteration is great.

## Data Structure-
  * I used Html and bootstrap CSS as the foundation for my project.
  * I originally started writing vanilla javascript for my game logic, switched to jQuery when I realized I would have to translate it into that after, and wasted some more valuable time bouncing between the two methods instead of incrementally following through with one or the other.
  * I used ajax requests to communicate CRUDs to the API and may have saved time in troubleshooting them if I had utilized curl requests to test them as they were built.
  * I tried to use local images in my assets directory as player tokens in my board but ran into countless issues incorporating them properly. I would consistently time block 30 minute segments to work on this, in an effort to not waste time on it--as it was a non-essential aesthetic element in our deliverables requirement--but continued to block out small chunks for it as it was the cornerstone to my creative spin and tonal focus of my user story beyond pure mechanical function.
  * I definitely made changes to my wireframe, but generally maintained the gestalt of its original design.
    -Even in making a simple wireframe, I hade never communicated such a design into front-end presentation before, so the gap between "i want it to look like this" and "how I will make it look like This" was vast--providing an immense learning experience. That same gap was present in almost every space between design and execution of code to get there, be it HTML, CSS or js.

## Issues:

  * The biggest issue I ran into with that was that I didn't have the foresight to build the structure of my javascript game logic around that conceit. This resulted in me getting my game logic working, and not being able to incorporate images as player tokens without a high risk of breaking my game logic, or its connection the API.

  * Whether I could go back and start over, or have more time to work on it, I would want to structure the game logic around that concept from the start or refactor my current code around it, respectively.
    * I didn't have enough time to get truly comfortable with CSS before starting the project, which made my original approach of "build the HTML and CSS skeleton first, and then build functionality into it" actually consume the majority of my first 20-40 hours, instead of being a simple foundation step.
    * using bootstrap allowed me to weave around some of those tasks with fancy bootstrap shortcuts faster than hard-coding all of my style elements would have been--but not yet having familiarity with bootstrap idiosyncracies created more speed bumps as well.
   * GIT
    * I both learned invaluable git lessons in this project and made enumerable, ghastly mistakes. My good intentions of many commits resulted in many that were not of the quality they should be, and created confusion that resulted in several major merge conflicts. On the bright side, I'm now very familar with merge conflicts, and understand the downside of overly-complex commits and branching.
 * Concision (lackthereof)
    * I struggle with the acheiving the elegancy of brevity in my code (and elsewhere, this README is a un unfortunate testament to that)
    * while it's an area of weakness for me at present, I see the value in refactoring code, and far-more-importantly, in building it in very small, purposeful increments and how it affects the final product, and the ease of which you can later manipulate it--or ease of which another developer can read-through/refactor it

## Unsolved problems:
  * I was never able to get player images to show up as player tokens--but, I was able to use images in representing, win and tie states using a variable to hold the images, and interpolating that variable through a jQuery HTML method.
    * This got me VERY close to my goal, but the "aha" moments of greatest value came to me late at night in the final hours of the project and I did not want to risk breaking my working code with such a complex refactoring.
  * On at least two occasions I made an attempt to both refactor my index.js code into cleaner components and export and import them from separate, concise files. On both occasions, I ran into too many bugs. Between not being YET comfortable enough with managing exports and structuring multiple connected files in a way that was organized and executed them efficaciously, the risk outweighed the reward. It became a pipe dream--but either starting over with more methodology to my data structure or refactoring everything piece by piece, is a beautiful dream nonetheless, one that will forever haunt me.













## Wireframe links

https://gyazo.com/d1123fb0b2b972d431d8372da9644c06
https://gyazo.com/07da39b3c99adaf5a489ed662934e6e8
