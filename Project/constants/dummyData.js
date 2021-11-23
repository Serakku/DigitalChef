import images from "./images"
import icons from "./icons"
import { Alert } from "react-native"

const trendingRecipes = [
    {
        id: 1,
        name: "Kare-Kare",
        image: images.KareKare2,
        description: "Traditional Filipino stew with a rich and thick peanut sauce perfect for special occasions. ",
        duration: "2-3 hours",
        serving: 6,
        isBookmark: false,
        category: "Beef",
        author: {
            profilePic: images.UserProfile3,
            name: "Vanjo Merano",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.beef,
                description: "Beef Slices / Oxtail",
                quantity: "3 lbs"
            },
            {
                id: 2,
                icon: icons.bananaHeart,
                description: "Banana Flower Bud Sliced",
                quantity: "1 pc"
            },
            {
                id: 3,
                icon: icons.pechay,
                description: "Snow Cabbage / Pechay",
                quantity: "1 bundle"
            },
            {
                id: 4,
                icon: icons.eggplant,
                description: "Sliced Eggplants",
                quantity: "4 pieces"
            },
            {
                id: 5,
                icon: icons.groundPeanuts,
                description: "Ground Peanuts",
                quantity: "1 cup"
            },
            {
                id: 6,
                icon: icons.peanutButter,
                description: "Peanut Butter",
                quantity: "1/2 cup"
            },
            {
                id: 7,
                icon: icons.shrimpPaste,
                description: "Shrimp Paste",
                quantity: "1/2 cup"
            },
            {
                id: 8,
                icon: icons.water,
                description: "Water",
                quantity: "34 ounces"
            },
            {
                id: 9,
                icon: icons.annatto,
                description: "Annatto Seeds Soaked in a Cup of Water",
                quantity: "1/2 cup"
            },
            {
                id: 10,
                icon: icons.sitaw,
                description: "Sitaw",
                quantity: "1 cup"
            },
            {
                id: 11,
                icon: icons.mincedGarlic,
                description: "Minced Garlic",
                quantity: "1 tbsp"
            },
            {
                id: 12,
                icon: icons.onion,
                description: "Chopped Onion",
                quantity: "1 piece"
            },
            {
                id: 13,
                icon: icons.saltAndPepper,
                description: "Salt and Pepper",
                quantity: "To taste"
            },


        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                profilePic: images.UserProfile3
            },
        ],

        procedure: [
            {
                id: 1,
                step: "In a large pot, bring the water to a boil",
            },
            {
                id: 2,
                step: "Put in the oxtail followed by the onions and simmer for 2.5 to 3 hrs or until tender (35 minutes if using a pressure cooker)",
            },
            {
                id: 3,
                step: "Once the meat is tender, add the ground peanuts, peanut butter, and coloring (water from the annatto seed mixture) and simmer for 5 to 7 minutes",
            },
            {
                id: 4,
                step: "Add the toasted ground rice and simmer for 5 minutes",
            },
            {
                id: 5,
                step: "On a separate pan, saute the garlic then add the banana flower, eggplant, and string beans and cook for 5 minutes",
            },
            {
                id: 6,
                step: "Transfer the cooked vegetables to the large pot (where the rest of the ingredients are)",
            },
            {
                id: 7,
                step: "Add salt and pepper to taste",
            },
            {
                id: 8,
                step: "Serve hot with shrimp paste. Enjoy!",
            },

        ]
    },
    {
        id: 2,
        name: "Sinigang na Bangus",
        image: images.FishSinigang,
        duration: "50 mins",
        serving: 5,
        isBookmark: true,
        category: "Fish",
        author: {
            profilePic: images.UserProfile3,
            name: "Vanjo Merano",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.fish,
                description: "Fish Sliced",
                quantity: "2 lbs"
            },
            {
                id: 2,
                icon: icons.knorrSinigang,
                description: "Knorr Sinigang sa Sampalok Mix Original",
                quantity: "40g"
            },
            {
                id: 3,
                icon: icons.tomato,
                description: "Tomato cubed",
                quantity: "2 pcs."
            },
            {
                id: 4,
                icon: icons.radish,
                description: "Daikon Radish Sliced",
                quantity: "1 cup"
            },
            {
                id: 5,
                icon: icons.spinach,
                description: "Spinach",
                quantity: "3 cups"
            },
            {
                id: 6,
                icon: icons.okra,
                description: "Okra",
                quantity: "10 pcs."
            },
            {
                id: 7,
                icon: icons.eggplant,
                description: "Eggplant Sliced",
                quantity: "2 pcs."
            },
            {
                id: 8,
                icon: icons.pepper,
                description: "Long Green Pepper",
                quantity: "2 pcs."
            },
            {
                id: 9,
                icon: icons.water,
                description: "Water",
                quantity: "2 quarts"
            },
            {
                id: 10,
                icon: icons.oil,
                description: "Cooking Oil",
                quantity: "2 cup"
            },
            {
                id: 11,
                icon: icons.saltAndPepper,
                description: "Salt & Pepper",
                quantity: " To taste"
            },
            {
                id: 12,
                icon: icons.fishSauce,
                description: "Fish Sauce",
                quantity: "To taste"
            },
            {
                id: 13,
                icon: icons.onion,
                description: "Onion",
                quantity: "1 pc."
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile5
            },
            {
                id: 2,
                profilePic: images.UserProfile4
            },
            {
                id: 3,
                profilePic: images.UserProfile1
            },
            {
                id: 4,
                profilePic: images.UserProfile2
            },
            {
                id: 5,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 3,
        name: "Crispy Sisig",
        image: images.Sisig,
        duration: "30 mins",
        serving: 4,
        isBookmark: true,
        category: "Pork",
        author: {
            profilePic: images.UserProfile3,
            name: "Vanjo Merano",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.pork,
                description: "Pork Belly Boiled for 1 hr.",
                quantity: "1 1/2 lbs."
            },
            {
                id: 2,
                icon: icons.mayonnnaise,
                description: "Lady's Choice Mayonnaise",
                quantity: "1/2 cup"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Onion Chopped",
                quantity: "2 pcs."
            },
            {
                id: 4,
                icon: icons.chilli,
                description: "Thai Chili Pepper Chopped",
                quantity: "4 pcs"
            },
            {
                id: 5,
                icon: icons.pepper,
                description: "Long Green Pepper Chopped",
                quantity: "2 pcs."
            },
            {
                id: 6,
                icon: icons.knorrSinigang,
                description: "Knorr SavorRich Pork",
                quantity: "16 grams"
            },
            {
                id: 7,
                icon: icons.blackPepper,
                description: "Ground Black Pepper",
                quantity: "1/2 Teaspoon"
            },
            {
                id: 8,
                icon: icons.soySauce,
                description: "Soy Sauce",
                quantity: "2 tablespoons"
            },
            {
                id: 9,
                icon: icons.margarine,
                description: "Margarine",
                quantity: "1/4 cup"
            },
            {
                id: 10,
                icon: icons.oil,
                description: "Cooking Oil",
                quantity: "16 grams"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 4,
        name: "Pancit Bihon",
        image: images.PancitBihon,
        duration: "45 mins",
        serving: 4,
        isBookmark: true,
        category: "Noodles",
        author: {
            profilePic: images.UserProfile3,
            name: "Vanjo Merano",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.pasta,
                description: "Bihon",
                quantity: "1 lb."
            },
            {
                id: 2,
                icon: icons.carrot,
                description: "Carrot",
                quantity: "1 pc."
            },
            {
                id: 3,
                icon: icons.bellPepper,
                description: "Bell Pepper",
                quantity: "1/2 tsp."
            },
            {
                id: 4,
                icon: icons.soySauce,
                description: "Soy Sauce",
                quantity: "1/4 cup"
            },
            {
                id: 5,
                icon: icons.squidBall,
                description: "Squid Ball",
                quantity: "4 pcs"
            },
            {
                id: 6,
                icon: icons.kikiam,
                description: "Kikiam",
                quantity: "4 pcs"
            },
            {
                id: 7,
                icon: icons.sitaw,
                description: "Baguio Beans",
                quantity: "8 pcs"
            },
            {
                id: 8,
                icon: icons.cabbage,
                description: "Cabbage",
                quantity: "1 lb."
            },
            {
                id: 9,
                icon: icons.pork,
                description: "Pork",
                quantity: "1/2 cup"
            },
            {
                id: 10,
                icon: icons.onion,
                description: "Onion Sliced",
                quantity: "1 pc"
            },
            {
                id: 11,
                icon: icons.mincedGarlic,
                description: "Minced Garlic",
                quantity: "4 cloves"
            },
            {
                id: 12,
                icon: icons.water,
                description: "Water",
                quantity: "3 cups"
            },
            {
                id: 13,
                icon: icons.chayote,
                description: "Chayote",
                quantity: "1 pc"
            },
            {
                id: 14,
                icon: icons.oil,
                description: "Cooking Oil",
                quantity: "1/2 Cup"
            },


        ],
        viewers: [

        ]
    },
    {
        id: 5,
        name: "Pork Caldereta",
        image: images.PorkCaldereta,
        duration: "1 hour, 5 minutes",
        serving: 5,
        isBookmark: true,
        category: "Pork",
        author: {
            profilePic: images.UserProfile3,
            name: "Vanjo Merano"
        },
        ingredients: [
            {
                id: 1,
                icon: icons.pork,
                description: "Pork meat, cube slices",
                quantity: "2 lbs."
            },
            {
                id: 2,
                icon: icons.tomatoSauce,
                description: "Tomato sauce",
                quantity: "8 oz."
            },
            {
                id: 3,
                icon: icons.bellPepper,
                description: "Red & Green bell peppers (Sliced)",
                quantity: "1 pc. each"
            },
            {
                id: 4,
                icon: icons.potato,
                description: "Potatoes (Cubed)",
                quantity: "2 pcs."
            },
            {
                id: 5,
                icon: icons.onion,
                description: "Onion (Chopped)",
                quantity: "1 pc."
            },
            {
                id: 6,
                icon: icons.mincedGarlic,
                description: "Garlic (chopped)",
                quantity: "3 cloves"
            },
            {
                id: 7,
                icon: icons.oil,
                description: "Cooking Oil",
                quantity: "3 tablespoons"
            },
        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            }
        ]
    },

    {
        id: 6,
        name: "Lumpiang Shanghai",
        image: images.LumpiangShanghai,
        duration: "25 minutes",
        serving: 6,
        isBookmark: true,
        category: "Pork",
        author: {
            profilePic: images.UserProfile3,
            name: "Vanjo Merano"
        },
        ingredients: [
            {
                id: 1,
                icon: icons.lumpiaWrapper,
                description: "Lumpia Wrapper",
                quantity: "50 pcs."
            },
            {
                id: 2,
                icon: icons.pork,
                description: "Ground Pork",
                quantity: "1 1/2 lbs."
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Onion (Minced)",
                quantity: "2 pcs."
            },
            {
                id: 4,
                icon: icons.garlicPowder,
                description: "Garlic Powder",
                quantity: "1 1/2 teaspoons"
            },
            {
                id: 5,
                icon: icons.blackPepper,
                description: "Black Pepper (Ground)",
                quantity: "1/2 teaspoon"
            },
            {
                id: 6,
                icon: icons.salt,
                description: "Salt",
                quantity: "1 1/2 teaspoons"
            },
            {
                id: 7,
                icon: icons.oil,
                description: "Sesame Oil",
                quantity: "1 tablespoon"
            },
            {
                id: 8,
                icon: icons.egg,
                description: "Eggs",
                quantity: "2 pcs."
            },
        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            }
        ]
    },

    {
        id: 7,
        name: "Beef Bulalo",
        image: images.Bulalo,
        duration: "5 hours, 15 mins",
        serving: 4,
        isBookmark: true,
        category: "Beef",
        author: {
            profilePic: images.UserProfile4,
            name: "Lalaine Manalo"
        },
        ingredients: [
            {
                id: 1,
                icon: icons.beef,
                description: "Beef Shanks (Bone-In)",
                quantity: "3 pounds"
            },
            {
                id: 2,
                icon: icons.onion,
                description: "Onion (Peeled and Quartered)",
                quantity: "1 medium sized"
            },
            {
                id: 3,
                icon: icons.pepper,
                description: "Peppercorns",
                quantity: "1 tablespoon"
            },
            {
                id: 4,
                icon: icons.fishSauce,
                description: "Fish Sauce",
                quantity: "2 tablespoons"
            },
            {
                id: 5,
                icon: icons.corn,
                description: "Corn (Husked, and cut into 3)",
                quantity: "3 pcs."
            },
            {
                id: 6,
                icon: icons.greenOnion,
                description: "Green Onion",
                quantity: "1 pc."
            },
            {
                id: 7,
                icon: icons.pechay,
                description: "Pechay Leaves (Separated)",
                quantity: "1 bunch"
            },
            {
                id: 8,
                icon: icons.salt,
                description: "Salt to taste",
                quantity: "Up to you"
            },
        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            }
        ]

    },
    {
        id: 8,
        name: "Chicken Adobo",
        image: images.ChickenAdobo,
        duration: "40 minutes",
        serving: 4,
        isBookmark: true,
        category: "Chicken",
        author: {
            profilePic: images.UserProfile3,
            name: "Vanjo Merano"
        },
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Chicken (cut into serving pieces)",
                quantity: "2 lbs."
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Dried Bay Leaves",
                quantity: "3 pcs.",
            },
            {
                id: 3,
                icon: icons.soySauce,
                description: "Soy Sauce",
                quantity: "8 Tablespoons"
            },
            {
                id: 4,
                icon: icons.vinegar,
                description: "White Vinegar",
                quantity: "4 Tablespoons"
            },
            {
                id: 5,
                icon: icons.mincedGarlic,
                description: "Garlic (Crushed)",
                quantity: "5 cloves",
            },
            {
                id: 6,
                icon: icons.water,
                description: "Water",
                quantity: "1 & 1/2 cups"
            },
            {
                id: 7,
                icon: icons.oil,
                description: "Cooking Oil",
                quantity: "3 Tablespoons"
            },
            {
                id: 8,
                icon: icons.sugar,
                description: "Sugar",
                quantity: "1 teaspoon"
            },
            {
                id: 9,
                icon: icons.salt,
                description: "Salt (optional)",
                quantity: "1/4 teaspoon"
            },
            {
                id: 10,
                icon: icons.blackPepper,
                description: "Whole Peppercorn",
                quantity: "1 teaspoon"
            },
        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            },
        ],
    }
]

const categories = trendingRecipes

var booleanValue = true;


// const totooSya = () => {
//     if (author.name === "Vanjo Merano"){
//        return console.log(help);
//     }
// }

export default {
    trendingRecipes,
    categories,

}

