// set up data objects
// Input variables
const userInfo = {
    name: '',
    pet: '',
    veg: '',
    spice: '',
    fruit: '',
    flower: '',
    fright: '',
};

const mainStory = [
    {story: ``,
    storyPic: ``,
    storyAlt: ``,
    breakoutPic: ``,
    breakoutAlt: ``,
    choice01: ``,
    choice01Pic: ``,
    choice01Alt: ``,
    choice02: ``,
    choice02Pic: ``,
    choice02Alt: ``,
    ending: ``,
    endingPic: ``,
    endingAlt: ``,
    endingChoicePic: ``,
    endingChoiceAlt: ``,
    endingBreakout: ``,
    endingBreakoutAlt: ``,
    },

    {story: ``,
    storyPic: ``,
    storyAlt: ``,
    breakoutPic: ``,
    breakoutAlt: ``,
    choice01: ``,
    choice01Pic: ``,
    choice01Alt: ``,
    choice02: ``,
    choice02Pic: ``,
    choice02Alt: ``,
    ending: ``,
    endingPic: ``,
    endingAlt: ``,
    endingChoicePic: ``,
    endingChoiceAlt: ``,
    endingBreakout: ``,
    endingBreakoutAlt: ``,
    },

    {story: ``,
    storyPic: ``,
    storyAlt: ``,
    breakoutPic: ``,
    breakoutAlt: ``,
    choice01: ``,
    choice01Pic: ``,
    choice01Alt: ``,
    choice02: ``,
    choice02Pic: ``,
    choice02Alt: ``,
    ending: ``,
    endingPic: ``,
    endingAlt: ``,
    endingChoicePic: ``,
    endingChoiceAlt: ``,
    endingBreakout: ``,
    endingBreakoutAlt: ``,
    },

    {story: ``,
    storyPic: ``,
    storyAlt: ``,
    breakoutPic: ``,
    breakoutAlt: ``,
    choice01: ``,
    choice01Pic: ``,
    choice01Alt: ``,
    choice02: ``,
    choice02Pic: ``,
    choice02Alt: ``,
    ending: ``,
    endingPic: ``,
    endingAlt: ``,
    endingChoicePic: ``,
    endingChoiceAlt: ``,
    endingBreakout: ``,
    endingBreakoutAlt: ``,
    },

    {story: ``,
    storyPic: ``,
    storyAlt: ``,
    breakoutPic: ``,
    breakoutAlt: ``,
    choice01: ``,
    choice01Pic: ``,
    choice01Alt: ``,
    choice02: ``,
    choice02Pic: ``,
    choice02Alt: ``,
    ending: ``,
    endingPic: ``,
    endingAlt: ``,
    endingChoicePic: ``,
    endingChoiceAlt: ``,
    endingBreakout: ``,
    endingBreakoutAlt: ``,
    },

    {story: ``,
    storyPic: ``,
    storyAlt: ``,
    breakoutPic: ``,
    breakoutAlt: ``,
    choice01: ``,
    choice01Pic: ``,
    choice01Alt: ``,
    choice02: ``,
    choice02Pic: ``,
    choice02Alt: ``,
    ending: ``,
    endingPic: ``,
    endingAlt: ``,
    endingChoicePic: ``,
    endingChoiceAlt: ``,
    endingBreakout: ``,
    endingBreakoutAlt: ``,
    },

    {story: ``,
    storyPic: ``,
    storyAlt: ``,
    breakoutPic: ``,
    breakoutAlt: ``,
    choice01: ``,
    choice01Pic: ``,
    choice01Alt: ``,
    choice02: ``,
    choice02Pic: ``,
    choice02Alt: ``,
    ending: ``,
    endingPic: ``,
    endingAlt: ``,
    endingChoicePic: ``,
    endingChoiceAlt: ``,
    endingBreakout: ``,
    endingBreakoutAlt: ``,
    },

];

// namespace
const storyApp = {};

// get form values on submit and store them in variables with an event listener
storyApp.getInfo = () => {
    $('#userChoices').on('submit', function(e) {
        // prevent page reloading
        e.preventDefault();
        // populate userInfo object with data from form
        userInfo.name = $('#name').val();
        userInfo.pet = $('#pet').val();
        userInfo.veg = $('#veg').val();
        userInfo.spice= $('#spice').val();
        userInfo.fruit = $('#fruit').val();
        userInfo.flower = $('#flower').val();
        userInfo.fright = $("input[name='fright']:checked").val();
        console.log(userInfo);
        // append user name to header
        $('.author').append(userInfo.name);
    
        // story array, yeah, it's long...
        mainStory[0].story = `You leave work on a  beautiful day and find $50 lying on the street.`;
        mainStory[0].storyPic = `./assets/street01.jpg`;
        mainStory[0].storyAlt = `A person walking the middle of the street, jumping for joy by @dre0316 on Unsplash`;
        mainStory[0].breakoutPic = `./assets/sun01.gif`;
        mainStory[0].breakoutAlt = `an animated, handrawn sun`;
        mainStory[0].choice01 = `Call a taxi to zip you home to play with your pet ${userInfo.pet}`;
        mainStory[0].choice01Pic = `./assets/taxi.jpg`;
        mainStory[0].choice01Alt = `A yellow taxi cab by @cioni_mattia on Unsplash`;
        mainStory[0].choice02 = `Pocket the cash and enjoy the walk home`;
        mainStory[0].choice02Pic = `./assets/cannTireCash.jpg`;
        mainStory[0].choice02Alt = `Stacks of Canadian Tire money in a briefcase`;
        mainStory[0].ending = `You get stuck in traffic for hours, using up your whole $50 and get home very late and very tired.`;
        mainStory[0].endingPic = `./assets/traffic.jpg`;
        mainStory[0].endingAlt = `Traffic jam on a foggy night by @dylu at Unsplash`;
        mainStory[0].endingChoicePic = `./assets/sadWalk.gif`;
        mainStory[0].endingChoiceAlt = `A man walking dejectedly with his head down`;
        mainStory[0].endingBreakout = `./assets/rainCloud.gif`;
        mainStory[0].endingBreakoutAlt = `Animated rain cloud`;
        mainStory[1].story = `The day gets hotter as you pass by a bespoke frozen treat pop up shoppe, so you decide to treat yo'self. Do you choose:`;
        mainStory[1].storyPic = `./assets/gelatoShoppe.jpg`;
        mainStory[1].storyAlt = `Sign on the window of an artisan, handmade, gluten free & vegan gelato & sorbetto shop by @bubo at Unsplash`;
        mainStory[1].breakoutPic = `./assets/sweet.gif`;
        mainStory[1].breakoutAlt = `Animated letters spelling "sweet"`;
        mainStory[1].choice01 = `A hand-churned ${userInfo.veg} ${userInfo.spice} gelato`;
        mainStory[1].choice01Pic = `./assets/bigIcecream.jpg`;
        mainStory[1].choice01Alt = `A large flower-shaped icecream scoop on a cone by  at Unsplash`;
        mainStory[1].choice02 = `An organic, vegan ${userInfo.fruit} ${userInfo.flower} popsicle`;
        mainStory[1].choice02Pic = `./assets/bluePop.jpg`;
        mainStory[1].choice02Alt = `A blue, handmade popsicle with berries and flower petals by  at Unsplash`;
        mainStory[1].ending = `Your treat melts in the heat before you even finish half! You walk home to your pet ${userInfo.pet} sad and sweaty.`;
        mainStory[1].endingPic = `./assets/melted.jpg`;
        mainStory[1].endingAlt = `Icecream dropped and melted on the sidewalk by @pawelj at Unsplash`;
        mainStory[1].endingChoicePic = `./assets/sadWalk.gif`;
        mainStory[1].endingChoiceAlt = `A man walking dejectedly with his head down`;
        mainStory[1].endingBreakout = `./assets/oops.gif`;
        mainStory[1].endingBreakoutAlt = `Animated letters spelling "oops"`;
        mainStory[2].story = `It's really getting hot out, the sweat is starting to drip off of you.`;
        mainStory[2].storyPic = `./assets/sweaty.jpg`;
        mainStory[2].storyAlt = `A person swaeting through the back of their shirt`;
        mainStory[2].breakoutPic = `./assets/heat.gif`;
        mainStory[2].breakoutAlt = `Animated letters spelling "hot"`;
        mainStory[2].choice01 = `I love the heat, bring it on!`;
        mainStory[2].choice01Pic = `./assets/hotHotHeat.jpg`;
        mainStory[2].choice01Alt = `A man fanning himself in the heat, sitting atop a pedicar by @shandranick at Unsplash`;
        mainStory[2].choice02 = `Switch to the shady side of the street`;
        mainStory[2].choice02Pic = `./assets/kangaShade.jpg`;
        mainStory[2].choice02Alt = `A kangaroo lounging in the shade by @amati913 at Unsplash`;
        mainStory[2].ending = `Your treat melts in the heat before you even finish half! You walk home to your pet ${userInfo.pet} sad and sweaty.`;
        mainStory[2].endingPic = `./assets/melt.jpg`;
        mainStory[2].endingAlt = `Melted green popsicle by @uniqueton at Unsplash`;
        mainStory[2].endingChoicePic = `./assets/sadWalk.gif`;
        mainStory[2].endingChoiceAlt = `A man walking dejectedly with his head down`;
        mainStory[2].endingBreakout = `./assets/oops.gif`;
        mainStory[2].endingBreakoutAlt = `Animated letters spelling "oops"`;
        mainStory[3].story = `You enjoy your stroll until a crack of thunder rings out and the rain pours down. There are only two places in sight to seek shelter from the raging storm:`;
        mainStory[3].storyPic = `./assets/storm.jpg`;
        mainStory[3].storyAlt = `Lighning striking a road in the middle of a field by @noaa at Unsplash`;
        mainStory[3].breakoutPic = `./assets/boom02.gif`;
        mainStory[3].breakoutAlt = `Animated letters spelling "boom" in a storm cloud`;
        mainStory[3].choice01 = `Wait it out on the porch of the spooky house`;
        mainStory[3].choice01Pic = `./assets/house.jpg`;
        mainStory[3].choice01Alt = `Abandoned, dilapidated house in Kamloops, BC by @yann_allegre at Unsplash`;
        mainStory[3].choice02 = `Take your chances under the lonely tree`;
        mainStory[3].choice02Pic = `./assets/tree.jpg`;
        mainStory[3].choice02Alt = `Gnarled Japanese maple tree with red fall leaves by @fcornish at Unsplash`;
        mainStory[4].story = `The rain gets even worse and now you're soaked to the bone!`;
        mainStory[4].storyPic = `./assets/wet.jpg`;
        mainStory[4].storyAlt = `A soaking wet robin on a fence in the rain by @jcotten at Unsplash`;
        mainStory[4].breakoutPic = `./assets/rainCloud.gif`;
        mainStory[4].breakoutAlt = `an animated rain cloud`;
        mainStory[4].choice01 = `Stick it out`;
        mainStory[4].choice01Pic = `./assets/stubbornRain.jpg`;
        mainStory[4].choice01Alt = `A woman waiting in the rain`;
        mainStory[4].choice02 = `Run for it!`;
        mainStory[4].choice02Pic = `./assets/run.jpg`;
        mainStory[4].choice02Alt = `A person running away down a dark, wet street by @we_are_rising at Unsplash`;
        mainStory[4].ending = `The rain turns the street into a river, sweeping you downstream. You catch pneumonia and miss weeks of work.`;
        mainStory[4].endingPic = `./assets/flood.jpg`;
        mainStory[4].endingAlt = `Flood waters as deep as car roofs, flowing through a parking lot by @chriswebdog at Unsplash`;
        mainStory[4].endingChoicePic = `./assets/sick.gif`;
        mainStory[4].endingChoiceAlt = `A man lying in bed, sick`;
        mainStory[4].endingBreakout = `./assets/fail.gif`;
        mainStory[4].endingBreakoutAlt = `Animated letters spelling fail`;
        mainStory[5].story = `As you take shelter on the porch, hordes of ${userInfo.fright} surround you, escaping the rain.`;
        mainStory[5].storyPic = `./assets/porch.jpg`;
        mainStory[5].storyAlt = `An old wooden rocking chair on a porch`;
        mainStory[5].breakoutPic = `./assets/boo.gif`;
        mainStory[5].breakoutAlt = `animated letters spelling the word "boo"`;
        mainStory[5].choice01 = `Try the doorbell`;
        mainStory[5].choice01Pic = `./assets/doorbell.jpg`;
        mainStory[5].choice01Alt = `Rusty, antique doorbell on an old, peeling wall by @__matthoffman__ at Unsplash`;
        mainStory[5].choice02 = `That's it, I'm out of here!`;
        mainStory[5].choice02Pic = `./assets/scared02.jpg`;
        mainStory[5].choice02Alt = `Scared child with hands covering face by @caleb_woods at Unsplash`;
        mainStory[5].ending = `A sweet elderly lady welcomes you into her house for ${userInfo.fruit} cake and tea. While you dry off and wait out the storm, you both enjoy a Murder She Wrote marathon.`;
        mainStory[5].endingPic = `./assets/grandma.jpg`;
        mainStory[5].endingAlt = `Elderly lady smiling and eating cake`;
        mainStory[5].endingChoicePic = `./assets/murder.gif`;
        mainStory[5].endingChoiceAlt = `Elderly lady eating popcorn`;
        mainStory[5].endingBreakout = `./assets/yay.gif`;
        mainStory[5].endingBreakoutAlt = `animated letters spelling the word "yay"`;
        mainStory[6].story = `A stream of ${userInfo.fright} come up from the sewer grate, surrounding you.`;
        mainStory[6].storyPic = `./assets/sewerDrain.jpg`;
        mainStory[6].storyAlt = `Person standing on top of sewer grate by Barik5ive at pexels.com`;
        mainStory[6].breakoutPic = ``;
        mainStory[6].breakoutAlt = ``;
        mainStory[6].choice01 = `Escape to the house`,
        mainStory[6].choice01Pic = `./assets/house.jpg`;
        mainStory[6].choice01Alt = `Abandoned, dilapidated house in Kamloops, BC by @yann_allegre at Unsplash`;
        mainStory[6].choice02 = `Nope right out of there`;
        mainStory[6].choice02Pic = `./assets/scared03.jpg`;
        mainStory[6].choice02Alt = `person covering face with hands by Ian Panelo at pexels.com`;
        mainStory[6].ending = ``;
        mainStory[6].endingPic = ``;
        mainStory[6].endingAlt = ``;
        mainStory[6].endingChoicePic = ``;
        mainStory[6].endingChoiceAlt = ``;
        mainStory[6].endingBreakout = ``;
        mainStory[6].endingBreakoutAlt = ``;
    });
};

// updated HTML to pass into DOM when a story choice is made
storyApp.populator = (arrayIndex) => {
    const fill = `
        <div class="container">
            <div class="mainGraphic">
                <img src="${mainStory[arrayIndex].storyPic}" alt="${mainStory[arrayIndex].storyAlt}" class="mainImage">
                <img src="${mainStory[arrayIndex].breakoutPic}" alt="${mainStory[arrayIndex].breakoutAlt}" class="breakout">
                <div class="story">
                    <p class="storyText">${mainStory[arrayIndex].story}</p>
                </div>
            </div>
            <div class="navigation">
                <img class="navImg navImgOne" src="${mainStory[arrayIndex].choice01Pic}" alt="${mainStory[arrayIndex].choice01Alt}">
                <button class="choice choiceOne">${mainStory[arrayIndex].choice01}</button>
                <img class="navImg navImgTwo" src="${mainStory[arrayIndex].choice02Pic}" alt="${mainStory[arrayIndex].choice02Alt}">
                <button class="choice choiceTwo">${mainStory[arrayIndex].choice02}</button>
            </div>
        </div>
    `;
    return fill;
};
// same same, but for an ending scene
storyApp.endingPopulator = (arrayIndex) => {
    const fill = `
        <div class="container">
            <div class="mainGraphic">
                <img src="${mainStory[arrayIndex].endingPic}" alt="${mainStory[arrayIndex].endingAlt}" class="mainImage">
                <img src="${mainStory[arrayIndex].endingBreakout}" alt="${mainStory[arrayIndex].endingBreakoutAlt}" class="breakout breakoutEnd">
                <div class="story">
                    <p class="storyText">${mainStory[arrayIndex].ending}</p>
                </div>
            </div>
            <div class="navigation">
                <img class="navImgEnd" src="${mainStory[arrayIndex].endingChoicePic}" alt="${mainStory[arrayIndex].endingChoiceAlt}">
                <button class="choice restart" onClick="window.location.reload()">Start Over</button>
            </div>
        </div>
    `;
    return fill;
};

// html for cockroach user choice
const roachesHtml = `<img src="./assets/roaches.gif" alt="Silhouetted roaches crawling up the screen" class="breakout breakoutRoach">`;

// html for clowns user choice
const clownsHtml = `<img src="./assets/clown.gif" alt="A creepy clown holding a red balloon and smiling" class="breakout breakoutClown1">
<img src="./assets/clown.gif" alt="A creepy clown holding a red balloon and smiling" class="breakout breakoutClown2">
<img src="./assets/clown.gif" alt="A creepy clown holding a red balloon and smiling" class="breakout breakoutClown3">
<img src="./assets/clown.gif" alt="A creepy clown holding a red balloon and smiling" class="breakout breakoutClown4">
<img src="./assets/clown.gif" alt="A creepy clown holding a red balloon and smiling" class="breakout breakoutClown5">`;


// Okay, so I had this grand idea to do this up quick and easy with a loop, but then the story would have to have been more predictable, so I slogged through writing it out in this crazy, nested mess:

// there is one ending where the styling is bad, and I've looked and looked , and can't find it!
storyApp.read = () => {
    // progress through the story with an event listener
    $('.navigation').on('click', function() {
        // replace html with next page of story
        $('#story').html(storyApp.populator(0));
        // scroll to the top of the story page
        $('body').scrollTop();
        // change class on buttons to progress to next page
        $('.choiceOne').addClass('choiceOne0');
        $('.choiceTwo').addClass('choiceTwo0');
        // change class on breakout image for styling
        $('.breakout').addClass('breakout0');
        
        // first endpoint
        // replace html with ending page
        $('.choiceOne0').on('click', function() {
            $('#story').html(storyApp.endingPopulator(0));
            // scroll to the top of the story page
            $('body').scrollTop();
        });

        // first branch
        $('.choiceTwo0').on('click', function() {
            // replace html with next page of story
            $('#story').html(storyApp.populator(1));
            // scroll to the top of the story page
            $('body').scrollTop();
            // change class on buttons to progress to next page
            $('.choiceOne').addClass('choiceOne1');
            $('.choiceTwo').addClass('choiceTwo1');
            // change class on breakout image for styling
            $('.breakout').addClass('breakout1');

            // second branch
            $('.choiceOne1',).on('click', function() {
                // replace html with next page of story
                $('#story').html(storyApp.populator(2));
                // scroll to the top of the story page
                $('body').scrollTop();
                // change class on buttons to progress to next page
                $('.choiceOne').addClass('choiceOne2');
                $('.choiceTwo').addClass('choiceTwo2');
                // change class on breakout image for styling
                $('.breakout').addClass('breakout2');

                // second endpoint
                // replace html with ending page
                $('.choiceOne2').on('click', function() {
                    $('#story').html(storyApp.endingPopulator(1));
                    // scroll to the top of the story page
                    $('body').scrollTop();
                });

                // third branch
                $('.choiceTwo2',).on('click', function() {
                    // replace html with next page of story
                    $('#story').html(storyApp.populator(3));
                    // scroll to the top of the story page
                    $('body').scrollTop();
                    // change class on buttons to progress to next page
                    $('.choiceOne').addClass('choiceOne3');
                    $('.choiceTwo').addClass('choiceTwo3');
                    // change class on breakout image for styling
                    $('.breakout').addClass('breakout3');

                    // fourth branch
                    $('.choiceOne3',).on('click', function() {
                        // replace html with next page of story
                        $('#story').html(storyApp.populator(5));
                        // scroll to the top of the story page
                        $('body').scrollTop();
                        // change class on buttons to progress to next page
                        $('.choiceOne').addClass('choiceOne5');
                        $('.choiceTwo').addClass('choiceTwo5');
                        // change class on breakout image for styling
                        $('.breakout').addClass('breakout5');
                        // show clowns or cockroaches based on user choice
                        if (userInfo.fright === 'cockroaches') {
                            $('img.breakout').remove();
                            $('div.mainGraphic').append(roachesHtml);    
                        } else {
                            $('img.breakout').remove();
                            $('div.mainGraphic').append(clownsHtml);
                        };

                        // third endpoint
                        // replace html with ending page
                        $('.choiceOne5').on('click', function() {
                            $('#story').html(storyApp.endingPopulator(5));
                            // scroll to the top of the story page
                            $('body').scrollTop();
                            // change class on breakout image for styling
                            $('.breakoutEnd').addClass('breakoutEnd2');
                        });

                        // fourth endpoint
                        $('.choiceTwo5').on('click', function() {
                            $('#story').html(storyApp.endingPopulator(4));
                            // scroll to the top of the story page
                            $('body').scrollTop();
                            // change class on breakout image for styling
                            $('.breakoutEnd').addClass('breakoutEnd2');
                        });
                    });

                    $('.choiceTwo3',).on('click', function() {
                        // replace html with next page of story
                        $('#story').html(storyApp.populator(4));
                        // scroll to the top of the story page
                        $('body').scrollTop();
                        // change class on buttons to progress to next page
                        $('.choiceOne').addClass('choiceOne4');
                        $('.choiceTwo').addClass('choiceTwo4');
                        // change class on breakout image for styling
                        $('.breakout').addClass('breakout4');

                        // fourth endpoint
                        // replace html with ending page
                        $('.choiceTwo4').on('click', function() {
                            $('#story').html(storyApp.endingPopulator(4));
                            // scroll to the top of the story page
                            $('body').scrollTop();
                            // change class on breakout image for styling
                            $('.breakoutEnd').addClass('breakoutEnd2');
                        });

                        // fifth branch
                        $('.choiceOne4',).on('click', function() {
                            // replace html with next page of story
                            $('#story').html(storyApp.populator(6));
                            // scroll to the top of the story page
                            $('body').scrollTop();
                            // change class on buttons to progress to next page
                            $('.choiceOne').addClass('choiceOne6');
                            $('.choiceTwo').addClass('choiceTwo6');
                            // change class on breakout image for styling
                            $('.breakout').addClass('breakout6');
                            // show clowns or cockroaches based on user choice
                            if (userInfo.fright === 'cockroaches') {
                                $('img.breakout').remove();
                                $('div.mainGraphic').append(roachesHtml);    
                            } else {
                                $('img.breakout').remove();
                                $('div.mainGraphic').append(clownsHtml);
                            };

                            // third endpoint
                            // replace html with ending page
                            $('.choiceOne6').on('click', function() {
                                $('#story').html(storyApp.endingPopulator(5));
                                // scroll to the top of the story page
                                $('body').scrollTop();
                                // change class on breakout image for styling
                                $('.breakoutEnd').addClass('breakoutEnd2');
                            });

                            // fourth endpoint
                            // replace html with ending page
                            $('.choiceTwo6').on('click', function() {
                                $('#story').html(storyApp.endingPopulator(4));
                                // scroll to the top of the story page
                                $('body').scrollTop();
                                // change class on breakout image for styling
                                $('.breakoutEnd').addClass('breakoutEnd2');
                            });
                        });
                    });
                });    
            });

            $('.choiceTwo1',).on('click', function() {
                // replace html with next page of story
                $('#story').html(storyApp.populator(2));
                // scroll to the top of the story page
                $('body').scrollTop();
                // change class on buttons to progress to next page
                $('.choiceOne').addClass('choiceOne2');
                $('.choiceTwo').addClass('choiceTwo2');
                // change class on breakout image for styling
                $('.breakout').addClass('breakout2');

                // second endpoint
                // replace html with ending page
                $('.choiceOne2').on('click', function() {
                    $('#story').html(storyApp.endingPopulator(2));
                    // scroll to the top of the story page
                    $('body').scrollTop();
                });

                // third branch
                $('.choiceTwo2',).on('click', function() {
                    // replace html with next page of story
                    $('#story').html(storyApp.populator(3));
                    // scroll to the top of the story page
                    $('body').scrollTop();
                    // change class on buttons to progress to next page
                    $('.choiceOne').addClass('choiceOne3');
                    $('.choiceTwo').addClass('choiceTwo3');
                    // change class on breakout image for styling
                    $('.breakout').addClass('breakout3');

                    // fourth branch
                    $('.choiceOne3',).on('click', function() {
                        // replace html with next page of story
                        $('#story').html(storyApp.populator(5));
                        // scroll to the top of the story page
                        $('body').scrollTop();
                        // change class on buttons to progress to next page
                        $('.choiceOne').addClass('choiceOne5');
                        $('.choiceTwo').addClass('choiceTwo5');
                        // change class on breakout image for styling
                        $('.breakout').addClass('breakout5');
                        // show clowns or cockroaches based on user choice
                        if (userInfo.fright === 'cockroaches') {
                            $('img.breakout').remove();
                            $('div.mainGraphic').append(roachesHtml);    
                        } else {
                            $('img.breakout').remove();
                            $('div.mainGraphic').append(clownsHtml);
                        };

                        // third endpoint
                        // replace html with ending page
                        $('.choiceOne5').on('click', function() {
                            $('#story').html(storyApp.endingPopulator(5));
                        });
                        // scroll to the top of the story page
                        $('body').scrollTop();
                        // change class on breakout image for styling
                        $('.breakoutEnd').addClass('breakoutEnd2');

                        // fourth endpoint
                        // replace html with ending page
                        $('.choiceTwo5').on('click', function() {
                            $('#story').html(storyApp.endingPopulator(4));
                            // scroll to the top of the story page
                            $('body').scrollTop();
                            // change class on breakout image for styling
                            $('.breakoutEnd').addClass('breakoutEnd2');
                        });
                    });

                    $('.choiceTwo3',).on('click', function() {
                        // replace html with next page of story
                        $('#story').html(storyApp.populator(4));
                        // scroll to the top of the story page
                        $('body').scrollTop();
                        // change class on buttons to progress to next page
                        $('.choiceOne').addClass('choiceOne4');
                        $('.choiceTwo').addClass('choiceTwo4');
                        // change class on breakout image for styling
                        $('.breakout').addClass('breakout4');

                        // fourth endpoint
                        // replace html with ending page
                        $('.choiceTwo4').on('click', function() {
                            $('#story').html(storyApp.endingPopulator(4));
                            // scroll to the top of the story page
                            $('body').scrollTop();
                            // change class on breakout image for styling
                            $('.breakoutEnd').addClass('breakoutEnd2');
                        });

                        // fifth branch
                        // replace html with ending page
                        $('.choiceOne4',).on('click', function() {
                            // replace html with next page of story
                            $('#story').html(storyApp.populator(6));
                            // scroll to the top of the story page
                            $('body').scrollTop();
                            // change class on buttons to progress to next page
                            $('.choiceOne').addClass('choiceOne6');
                            $('.choiceTwo').addClass('choiceTwo6');
                            // show clowns or cockroaches based on user choice
                            if (userInfo.fright === 'cockroaches') {
                                $('img.breakout').remove();
                                $('div.mainGraphic').append(roachesHtml);    
                            } else {
                                $('img.breakout').remove();
                                $('div.mainGraphic').append(clownsHtml);
                            };

                            // third endpoint
                            // replace html with ending page
                            $('.choiceOne6').on('click', function() {
                                $('#story').html(storyApp.endingPopulator(5));
                                // scroll to the top of the story page
                                $('body').scrollTop();
                                // change class on breakout image for styling
                                $('.breakoutEnd').addClass('breakoutEnd2');
                            });

                            // fourth endpoint
                            // replace html with ending page
                            $('.choiceTwo6').on('click', function() {
                                $('#story').html(storyApp.endingPopulator(4));
                                // scroll to the top of the story page
                                $('body').scrollTop();
                                // change class on breakout image for styling
                                $('.breakoutEnd').addClass('breakoutEnd2');
                            });
                        });
                    });
                });
            });
        });
    });
};

storyApp.init = () => {
    $('#userChoices').on('submit', function() {
        // remove form and show story cover page
        $('#form').toggleClass('formSectionOff');
        $('#story').toggleClass('storyContainerOn');
    });
    storyApp.getInfo();
    storyApp.read();
};


$(function() {
    console.log('ready');
    storyApp.init();
});