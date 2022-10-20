import pics from '../api/pics'

export const PlaceData = [
    {
        id: "01",
        name: "Asia",
        Description: "Asia is a landmass, which is either considered a continent in its own right or a subcontinent of Eurasia. It shares the continental landmass with Afro-Eurasia with Africa. Asia covers an area of 44,579,000 square kilometres, about 30% of Earth's total land area and 8.7% of the Earth's total surface area.",
        Population: "4 561 000 000",
        image: pics.pic_asia,
        attractions:[
            {
                id: "001",
                place: "Mount Fuji",
                province: "Japan",
                images: "https://www.planetware.com/wpimages/2019/10/asia-best-places-to-visit-mount-fuji-japan.jpg",
                Description: "Although Mount Fuji is an active stratovolcano, it hasn't erupted since 1708. The stunning snowcapped mountain is one of Japan's Three Holy Mountains, which are traditionally considered to hold a particular power–Mount Fuji has volcanic power."
            },
            {
                id: "002",
                place: "Dead Sea",
                province: "Israel",
                images: "https://www.planetware.com/wpimages/2019/10/asia-best-places-to-visit-dead-sea-israel-city.jpg",
                Description: "The dark blue waters of the Dead Sea touch the borders of both Jordan and Israel. Actually a lake despite its name, the Dead Sea sits at the lowest land elevation on Earth–over 430 meters below sea level. With a salt concentration of around 31 percent–almost 10 times saltier than the ocean –the Dead Sea is so thick, nothing can sink into it, and everyone who walks into it will naturally float."
            },
            {
                id: "003",
                place: "Phuket",
                province: "Thailand",
                images: "https://www.planetware.com/wpimages/2019/10/asia-best-places-to-visit-phuket-thailand.jpg",
                Description: "Thailand's biggest island is also a magnet for visitors–and for good reason. Phuket boasts some of the best beaches in the country, with clean, soft, rolling sands and turquoise waters as far as the eye can see."
            },
            {
                id: "004",
                place: "Beijing",
                province: "China",
                images: "https://www.planetware.com/wpimages/2019/10/asia-best-places-to-visit-beijing-china.jpg",
                Description: "One of the most populous cities in the world, Beijing is also one of the oldest. You can get a peek into that history by walking the hutongs of Beijing, the narrow alleyways lined up with traditional homes and courtyards."
            },
        ]
    },

    {
        id: "02",
        name: "Europe",
        Description: "Europe is a landmass, which is either considered a continent in its own right or a subcontinent of Eurasia, located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. Comprising the westernmost peninsulas of Eurasia, it shares the continental landmass of Afro-Eurasia with both Africa and Asia.",
        Population: "746 400 000",
        image: pics.pic_europe,
        attractions:[
            {
                id: "001",
                place: "Eiffel Tower",
                province: "France",
                images: "https://www.planetware.com/wpimages/2020/11/europe-top-attractions-eiffel-tower.jpg",
                Description: "The Eiffel Tower is one of France's most famous sights. Sitting in the heart of the Champ de Mars in Paris, the wrought-iron tower was originally built to serve as the entrance to the 1889 World's Fair."
            },
            {
                id: "002",
                place: "Colosseum",
                province: "Italy",
                images: "https://www.planetware.com/wpimages/2020/11/europe-top-attractions-colosseum-rome.jpg",
                Description: "Rome's Flavian Amphitheater, better known as the Colosseum, remains one of the most iconic symbols of Imperial Rome and is one of the most visited tourist sites in Italy. It was built in AD 70-80 using travertine limestone and volcanic rock. At the time of its construction, and for a long time after, it was the world's largest amphitheater and held up to 80,000 spectators."
            },
            {
                id: "003",
                place: "Acropolis of Athens",
                province: "Greece",
                images: "https://www.planetware.com/wpimages/2020/11/europe-top-attractions-acropolis-athens-greece.jpg",
                Description: "The Acropolis' most famous buildings were all constructed in the fifth century BC under the watchful eye of statesman and general Pericles. The heart of the Acropolis is the Parthenon, a temple built to thank the gods for the victory over Persian invaders (though it also served as the city treasury for a time). Other prominent buildings include the gateway Propylaea (which serves as the entrance to Acropolis), the Erechtheion Temple (dedicated to Athena and Poseidon), and the tiny but beautiful Temple of Athena Nike."
            },
            {
                id: "004",
                place: "Stonehenge",
                province: "England",
                images: "https://www.planetware.com/wpimages/2020/11/europe-top-attractions-stonehenge-england.jpg",
                Description: "The prehistoric monument of Stonehenge is one of the most famous landmarks in the UK. Built between 3000 BC and 2000 BC, Stonehenge sits in an area of England known for its many burial mounds. A massive ring of four-meter-tall sandstones with an inner horseshoe-shaped stone circle, the breathtaking Stonehenge and its surroundings are a UNESCO World Heritage Site."
            },
        ]
    },

    {
        id: "03",
        name: "Australia",
        Description: "Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.",
        Population: "25 000 000",
        image: pics.pic_australia,
        attractions:[
            {
                id: "001",
                place: "Sydney Opera House",
                province: "New South Wales",
                images: "https://www.planetware.com/photos-large/AUS/australia-new-south-wales-sydney-opera-house.jpg",
                Description: "Mention Sydney, Australia and most people think of the Opera House. Shaped like huge shells or billowing sails, this famous building on Sydney's Bennelong Point graces the list of UNESCO World Heritage Sites and is one of the world's great architectural icons. The location is stunning. Water surrounds the structure on three sides, and the Royal Botanic Gardens border it to the south."
            },
            {
                id: "002",
                place: "Great Barrier Reef Marine Park",
                province: "Queensland",
                images: "https://www.planetware.com/photos-large/AUS/australia-queensland-great-barrier-reef-2.jpg",
                Description: "You can't leave Australia without seeing the Great Barrier Reef. This World Heritage-listed natural wonder is one of the largest living structures on the planet. It's so vast, you can see it from outer space. For divers, snorkelers, island aficionados, and nature lovers, it's a bucket list destination. In 1975, the Great Barrier Reef Marine Park was established to protect its fragile ecosystems. These include more than 3,000 coral reefs; 600 continental islands, including the beautiful Whitsunday group; 300 coral cays; and inshore mangrove islands."
            },
            {
                id: "003",
                place: "Melbourne's Culture",
                province: "Victoria",
                images: "https://www.planetware.com/photos-large/AUS/australia-victoria-melbourne.jpg",
                Description: "Melbourne, Australia's second largest city, is a popular stop on many Australian itineraries – especially for culture vultures. Galleries, theaters, restaurants, shops, and its distinctly European feel are the main draws of this sophisticated city on the Yarra River. It's also a green city, with parks, gardens, and open spaces occupying almost a third of its total area. The cultural highlights of Melbourne are many. Gape at the masterpieces at the National Gallery of Victoria, watch a performance at Arts Centre Melbourne, or head to Federation Square. Here, you can browse Australian artworks at the Ian Potter Gallery and learn about the nation's screen culture at the Australian Centre for the Moving Image (ACMI)."
            },
            {
                id: "004",
                place: "Kakadu National Park",
                province: "Northern Territory",
                images: "https://www.planetware.com/photos-large/AUS/australia-northern-territory-kakadu-national-park-4.jpg",
                Description: "When it comes to wilderness areas, Kakadu National Park showcases the best of Australia. Covering more than 19,840 square kilometers in the Northern Territory, it's the second largest national park in the world. Within its borders, you can explore monsoon rainforests, mangrove swamps, rivers, gorges, ancient rock paintings, wetlands, and waterfalls. Kakadu is also home to an astounding diversity of wildlife. In addition to the many mammals, reptiles, and fish, more than 300 different species of birds make their home here, and both freshwater and saltwater crocodiles lurk in the wetlands. To explore the park's diverse ecosystems, hop aboard a cruise along the waterways, or hike the vast network of trails. You can also take a scenic flight."
            },
        ]
    },

    {
        id: "04",
        name: "Africa",
        Description: "Africa is the world's second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km² including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.4 billion people as of 2021, it accounts for about 18% of the world's human population.",
        Population: "1 216 000 000",
        image: pics.pic_africa,
        attractions:[
            {
                id: "001",
                place: "Cape Town",
                province: "South Africa",
                images: "https://www.planetware.com/wpimages/2021/04/africa-best-places-to-visit-cape-town-south-africa.jpg",
                Description: "One of the most beloved destinations on the continent, Cape Town sits at the southern tip of South Africa, near where the Atlantic Ocean and Indian Ocean meet at the Cape of Good Hope. It is a culturally rich and visually stunning city that is very easy to fall in love with on a first visit."
            },
            {
                id: "002",
                place: "Zanzibar",
                province: "Tanzania",
                images: "https://www.planetware.com/wpimages/2021/04/africa-best-places-to-visit-back-in-time-zanzibar-tanzania.jpg",
                Description: "A visit to Zanzibar feels like stepping into another world, one where time stands still, and the only city, Stone Town, is a UNESCO World Heritage Site. The island in the Indian Ocean just off the coast of Tanzania is a place where Arab dhows (fishing boats) still ply the picture-perfect turquoise sea, and you can get lost in the beauty of Stone Town, wandering its narrow alleys past old mosques, vibrant bazaars, and riads with intricately carved doorways."
            },
            {
                id: "003",
                place: "Giza",
                province: "Egypt",
                images: "https://www.planetware.com/wpimages/2021/04/africa-best-places-to-visit-great-pyramids-cairo-egypt.jpg",
                Description: "Watching the sun rise or set over the Pyramids of Giza in Egypt from the back of a camel is an experience you'll never forget. The pyramids and the Great Sphinx date back to the 26th century BCE and are Egypt's most iconic attractions."
            },
            {
                id: "004",
                place: "Victoria Falls",
                province: "Zimbabwe",
                images: "https://www.planetware.com/wpimages/2021/04/africa-best-places-to-visit-experience-victoria-falls-zimbabwe-zambia.jpg",
                Description: "Visit Victoria Falls during the rainy seasons, when the water volume is high, and you'll understand why locals call this impressive waterfall The Smoke That Thunders. The sound of water rushing over rock before dropping into a pool some 300-plus-feet below sounds like the roll of thunder, and the mist that spews back up resembles thick smoke. It is an impressive sight."
            },
        ]
    }, 

    {
        id: "05",
        name: "North America",
        Description: "North America is a continent in the Northern Hemisphere and almost entirely within the Western Hemisphere. It is bordered to the north by the Arctic Ocean, to the east by the Atlantic Ocean, to the southeast by South America and the Caribbean Sea, and to the west and south by the Pacific Ocean.",
        Population: "579 000 000 000",
        image: pics.pic_north_america,
        attractions:[
            {
                id: "001",
                place: "Grand Canyon",
                province: "Colorado ",
                images: "https://www.planetware.com/wpimages/2021/02/arizona-united-states-top-attractions-grand-canyon-panorama.jpg",
                Description: "This incredible natural attraction is one of the most visited places in the United States. Carved out by the Colorado River, the Grand Canyon cuts deep into the landscape, creating dramatic cliff walls and ledges. Visitors standing on the rim of the canyon can see down to the canyon floor a mile below, and look out over the ridges and cliffs that run as far as the eye can see."
            },
            {
                id: "002",
                place: "Las Vegas Strip",
                province: "Nevada",
                images: "https://www.planetware.com/photos-large/US/nevada-las-vegas-strip-2.jpg",
                Description: "Walking along the Las Vegas Strip, the main street leading through the city past the mega resorts, is like strolling through an amusement park for adults. Recreations of the New York skyline, the Eiffel Tower, the canals of Venice, and many more foreign sites line this famous street."
            },
            {
                id: "003",
                place: "Yosemite National Park",
                province: "California",
                images: "https://www.planetware.com/wpimages/2021/02/california-united-states-top-attractions-yosemite-view-of-valley.jpg",
                Description: "One of America's most loved parks, Yosemite National Park is one of the best places to visit in California, particularly for nature lovers. Famous sights, like the incredible granite domes of El Capitan and Half Dome, have to be seen in person to fully appreciate their grandeur. The massive waterfalls that tumble off sheer cliffs from mountain snowfall or sudden summer rainstorms are another of the park's highlights."
            },
            {
                id: "004",
                place: "Golden Gate Bridge",
                province: "San Francisco",
                images: "https://www.planetware.com/photos-large/US/california-san-francisco-golden-gate-bridge-2.jpg",
                Description: "Arching across San Francisco Bay, joining San Francisco and Marin County, the Golden Gate Bridge has been a California icon since it was built in the 1930s. Contrasting with the blue water, the bridge's orangish-red color is an aesthetic accent that brings a unique quality to the city. It also has a unique presence when it's shrouded in fog with just the peaks of the main towers projecting through the low-lying cloud. The bridge is approximately two miles long and part of Hwy 101 or SR 1. If the day is clear, one of the best viewing spots is on Conzelman Road, located in Golden Gate National Recreation Area."
            },

        ]
    },

    {
        id: "06",
        name: "South America",
        Description: "South America is a continent entirely in the Western Hemisphere and mostly in the Southern Hemisphere, with a relatively small portion in the Northern Hemisphere. It can also be described as the southern subregion of a single continent called America.",
        Population: "422 500 000",
        image: pics.pic_south_america,
        attractions:[
            {
                id: "001",
                place: "Rio de Janeiro",
                province: "Brazil ",
                images: "https://cdn.travelstride.com/media/wysiwyg/rio-de-janeiro-809756_1920.jpg",
                Description: "Rio is a top must see destination for many traveling to South America. The large seaside city in Brazil is known for the recongnizable Christ the Redeemer statue at the top of Corcovado Mountain, as well as Sugarloaf Mountain, a granite peak with cable cars to its summit, and the famous carnaval festivities which feature elaborate floats, incredible costumes, and samba dancers. Rio is widely considered as somewhere that the party doesn't stop!"
            },
            {
                id: "002",
                place: "Cartagena",
                province: "Colombia",
                images: "https://cdn.travelstride.com/media/wysiwyg/cartagena-colombia-south-america-lighthouse-2516803_1920.jpg",
                Description: "Like many cities in South America, Cartagena in Colombia once held a reputation for being unsafe for travelers. Today, the vibrant coastal city has shaken it's ugly past and is an extremely popular attraction in South America. Heavily influenced by Spanish colonialism, the Old Town of Cartagena is a small walled city with a distintly European feel, right down to the cobblestone streets. There's a reason for the saying Castagena Hot, the high temperatures in Cartagena are on another level, especially when you add the 80-90% humidity. December-April is considered the dry season in Colombia, and it's also the peak tourist season."
            },
            {
                id: "003",
                place: "Iguassu Falls",
                province: "Argentina",
                images: "https://cdn.travelstride.com/media/wysiwyg/iguazu-falls-south-america-2773777_1280.jpg",
                Description: "Eleanor Roosevelt expressed her awe at seeing Iguazu by saying poor Niagara! That should tell you something! This incredible waterfall on the Iguazu River is the largest in the world. It is actually claimed by both Argentina and Brazil, as it spans the border. The falls can be reached from either Foz de Iguaçu in Brazil, Puerto Iguazú in Argentina, or Cuidad del Este in Paraguay. Helicopter rides are offered in Brazil for aerial views of the falls. Inflatable boat rides are offered in Argentina that take visitors close to falls. Otherwise you can reach the falls by walking or driving through Iguazú National Park."
            },
            {
                id: "004",
                place: "Easter Island",
                province: "Chile",
                images: "https://cdn.travelstride.com/media/wysiwyg/easter-island-statues-moai-1857652_1920_1_.jpg",
                Description: "Another enigmatic archaeological site in South America, Easter Island has puzzled historians for centuries. Recent discoveries have revealed that the nearly 1,000 large stone heads rising out of the ground on an island off the coast of Chile, were even larger than previously thought. These statues are called Moai, and they were created by the early Rapa Nui people."
            },
        ]
    },

    {
        id: "07",
        name: "Antarctica",
        Description: "Antarctica is Earth's southernmost and least-populated continent. Situated almost entirely south of the Antarctic Circle and surrounded by the Southern Ocean, it contains the geographic South Pole.",
        Population: "5 000",
        image: pics.pic_Antarctica,
        attractions:[
            {
                id: "001",
                place: "Falkland Islands",
                province: "",
                images: "https://assets3.thrillist.com/v1/image/2853332/1584x1008/scale;webp=auto;jpeg_quality=60.jpg",
                Description: "About 250 miles south of Tierra del Fuego, the still-contested Falklands are a must-see on any Antarctica trip—especially for birdwatchers, who will find dozens of species of seabirds and five varieties of (yup) penguins amid their 4,700 square miles of landmass. Technically, you’re still in South America here: Ushuaia may be the southernmost South American city, but this is the southernmost South American anything."
            },
            {
                id: "002",
                place: "South Georgia Island",
                province: "",
                images: "https://assets3.thrillist.com/v1/image/2852876/1584x1108/scale;webp=auto;jpeg_quality=60.jpg",
                Description: "Teeming with penguins and seals (both elephant and fur), South Georgia is even better-known for its pristine glaciers and fjords. It’s part of the same territory as a chain of smaller, less-trafficked islands to the southeast known as the South Sandwich Islands."
            },
            {
                id: "003",
                place: "Drake Passage",
                province: "",
                images: "https://www.onthegotours.com/repository/Drake-Passage--Best-Places--Antarctica--On-The-Go-Tours-309721469618351_crop_305_0.jpg",
                Description: "The Drake Passage is an infamous stretch of water. It connects the Atlantic and Pacific oceans, passing between the southernmost point of Argentina and the northern tip of the Antarctic Peninsula. Named after the famous English explorer Sir Francis Drake, the passage is renowned for its strong winds and brutal weather conditions. It's not for the fainthearted and seasickness is always a possibility, but it's the only way to navigate to Antarctica from South America. Plus, the marvellous open views of rolling ocean and icebergs is worth the journey."
            },
            {
                id: "004",
                place: "South Orkney Islands",
                province: "",
                images: "https://assets3.thrillist.com/v1/image/2853331/1584x1056/scale;webp=auto;jpeg_quality=60.jpg",
                Description: "Northeast of the Antarctic Peninsula lie the South Orkney Islands. Frigid, windy, and generally inhospitable, these magnificent islands are home to two research stations, plus (wait for it...) chinstrap and Adéie penguins."
            },
        ]
    },
];
