// set up data objects

const mainStory = [
    {story: `You leave work on a    beautiful day and find $50 lying on the street.`,
    storyPic: `./assets/street01.jpg`,
    storyAlt: `A person walking the middle of the street, jumping for joy by @dre0316 on Unsplash`,
    breakoutPic: `./assets/sun.gif`,
    breakoutAlt: `an animated, handrawn sun`,
    choice01: `Call a taxi to zip you home to play with your pet ${userInfo.pet}`,
    choice01Pic: `./assets/taxi.jpg`,
    choice01Alt: `A yellow taxi cab by @cioni_mattia on Unsplash`,
    choice02: `Pocket the cash and enjoy the walk home`,
    choice02Pic: `./assets/cannTireCash.jpg`,
    choice02Alt: `Stacks of Canadian Tire money in a briefcase`,
    ending: `You get stuck in traffic for hours, using up your whole $50 and get home very late and very tired.`,
    endingPic: `./assets/traffic.jpg`,
    endingAlt: `Traffic jam on a foggy night by @dylu at Unsplash`,
    endingChoicePic: `A man walking dejectedly with his head down`,
    endingChoiceAlt: `./assets/sadWalk.gif`,
    endingBreakout: `./assets/oops.gif`,
    endingBreakoutAlt: `Animated letters spelling "oops"`,
    },

    {story: `The day gets hotter as you pass by a bespoke frozen treat pop up shoppe, so you decide to treat yo'self. Do you choose:`,
    storyPic: `./assets/gelatoShoppe.jpg`,
    storyAlt: `Sign on the window of an artisan, handmade, gluten free & vegan gelato & sorbetto shop by @bubo at Unsplash`,
    breakoutPic: `./assets/sweet.gif`,
    breakoutAlt: `Animated letters spelling "sweet"`,
    choice01: `A hand-churned ${userInfo.veg} ${userInfo.spice} gelato`,
    choice01Pic: `./assets/bigIcecream.jpg`,
    choice01Alt: `A large flower-shaped icecream scoop on a cone by  at Unsplash`,
    choice02: `An organic, vegan ${userInfo.fruit} ${userInfo.flower} popsicle`,
    choice02Pic: `./assets/bluePop.jpg`,
    choice02Alt: `A blue, handmade popsicle with berries and flower petals by  at Unsplash`,
    },

    {story: `It's really getting hot out, the sweat is starting to drip off of you.`,
    storyPic: `./assets/sweaty.jpg`,
    storyAlt: `A person swaeting through the back of their shirt`,
    breakoutPic: `./assets/hot.gif`,
    breakoutAlt: `Animated letters spelling "hot"`,
    choice01: `I love the heat, bring it on!`,
    choice01Pic: `./assets/hotHotHeat.jpg`,
    choice01Alt: `A man fanning himself in the heat, sitting atop a pedicar by @shandranick at Unsplash`,
    choice02: `Switch to the shady side of the street`,
    choice02Pic: `./assets/kangaShade.jpg`,
    choice02Alt: `A kangaroo lounging in the shade by @amati913 at Unsplash`,
    ending: `Your ${userInfo.treat} melts in the heat before you even finish half! You walk home to your pet ${userInfo.pet} sad and sweaty.`,
    endingPic01: `./assets/melted.jpg`,
    endingAlt01: `Icecream dropped and melted on the sidewalk by @pawelj at Unsplash`,
    endingPic02: `./assets/melt.jpg`,
    endingAlt02: `Melted green popsicle by @uniqueton at Unsplash`,
    endingChoicePic: `A man walking dejectedly with his head down`,
    endingChoiceAlt: `./assets/sadWalk.gif`,
    endingBreakout: `./assets/oops.gif`,
    endingBreakoutAlt: `Animated letters spelling "oops"`,
    },

    {story: `You enjoy your stroll until a crack of thunder rings out and rains pours down. There are only two places in sight to seek shelter from the raging storm:`,
    storyPic: `./assets/storm.jpg`,
    storyAlt: `Lighning striking a road in the middle of a field by @noaa at Unsplash`,
    breakoutPic: `./assets/boom02.gif`,
    breakoutAlt: `Animated letters spelling "boom" in a storm cloud`,
    choice01: `Wait it out on the spooky porch`,
    choice01Pic: `./assets/house.jpg`,
    choice01Alt: `Abandoned, dilapidated house in Kamloops, BC by @yann_allegre at Unsplash`,
    choice02: `Take your chances under the lonely tree`,
    choice02Pic: `./assets/tree.jpg`,
    choice02Alt: `Gnarled Japanese maple tree with red fall leaves by @fcornish at Unsplash`,
    },

    {story: `The rain gets even worse and you're soaked to the bone!`,
    storyPic: `./assets/wet.jpg`,
    storyAlt: `A soaking wet robin on a fence in the rain by @jcotten at Unsplash`,
    breakoutPic: `./assets/rainCloud.gif`,
    breakoutAlt: `an animated rain cloud`,
    choice01: `Stick it out`,
    choice01Pic: `./assets/stubbornRain.jpg`,
    choice01Alt: `A woman waiting in the rain`,
    choice02: `Run for it!`,
    choice02Pic: `./assets/run.jpg`,
    choice02Alt: `A person running away down a dark, wet street by @we_are_rising at Unsplash`,
    ending: `The rain turns the street into a river, sweeping you downstream. You catch pneumonia and miss weeks of work.`,
    endingPic: `./assets/flood.jpg`,
    endingAlt: `Flood waters as deep as car roofs, flowing through a parking lot by @chriswebdog at Unsplash`,
    endingChoicePic: `./assets/sick.gif`,
    endingChoiceAlt: `A man lying in bed, sick`,
    endingBreakout: `./assets/oops.gif`,
    endingBreakoutAlt: `Animated letters spelling "oops"`,
    },

    {story: `As you take shelter on the porch, you see hordes of ${userInfo.fright} surrounding you, trying to stay dry.`,
    storyPic: `./assets/porch.jpg`,
    storyAlt: `An old wooden rocking chair on a porch`,
    breakoutPic: `./assets/boo.gif`,
    breakoutAlt: `animated letters spelling the word "boo"`,
    choice01: `Try the doorbell`,
    choice01Pic: `./assets/doorbell.jpg`,
    choice01Alt: `Rusty, antique doorbell on an old, peeling wall by @__matthoffman__ at Unsplash`,
    choice02: `That's it, I'm out of here!`,
    choice02Pic: `./assets/scared02.jpg`,
    choice02Alt: `Scared child with hands covering face by @caleb_woods at Unsplash`,
    ending: `A sweet elderly lady welcomes you into her house for ${userInfo.fruit} cake and tea. While you dry off and wait out the storm, you both enjoy a Murder She Wrote marathon.`,
    endingPic: `./assets/grandma.jpg`,
    endingAlt: `Elderly lady smiling and eating cake`,
    endingChoicePic: `./assets/murder.gif`,
    endingChoiceAlt: `Elderly lady eating popcorn`,
    endingBreakout: `./assets/yay.gif`,
    endingBreakoutAlt: `animated letters spelling the word "yay"`,
    },

    {story: `Way too many ${userInfo.fright} come up from the sewer grate, surrounding you.`,
    storyPic: `Person standing on top of sewer grate by Barik5ive at pexels.com`,
    storyAlt: ``,
    breakoutPic: ``,
    breakoutAlt: ``,
    choice01: `Escape to the house`,
    choice01Pic: `./assets/house.jpg`,
    choice01Alt: `Abandoned, dilapidated house in Kamloops, BC by @yann_allegre at Unsplash`,
    choice02: `Nope right out of there`,
    choice02Pic: `./assets/scared03.jpg`,
    choice02Alt: `person covering face with hands by Ian Panelo at pexels.com`,
    ending: ``,
    endingPic: ``,
    endingAlt: ``,
    endingChoicePic: ``,
    endingChoiceAlt: ``,
    endingBreakout: ``,
    endingBreakoutAlt: ``,
    },

]



// const userInfo = {
//     name: ,
//     pet: ,
//     veg: ,
//     spice: ,
//     fruit: ,
//     flower: ,
//     treat: ,
//     fright: ,
// }