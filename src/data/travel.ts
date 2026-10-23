export const photo = (id: string, width = 1200) =>
	`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const destinations = [
	{
		slug: 'swiss-alps', name: 'The Swiss Alps', country: 'Switzerland', region: 'Europe',
		days: 7, price: 1290, category: 'Mountains', tag: 'Mountain escape',
		image: 'photo-1531366936337-7c912a4589a7',
		intro: 'Slow mornings above the clouds, quiet trails through wildflower meadows, and evenings in a little mountain village.',
		bestTime: 'June to September', pace: 'Active & restorative',
		itinerary: ['Arrive in Zermatt and settle into the village', 'Ride the Gornergrat railway for high Alpine views', 'Walk the Five Lakes trail with a local guide', 'A free day for a picnic, spa, or a slower wander', 'Take the scenic train to a family-run mountain inn', 'Explore the valley villages and their local markets', 'A relaxed breakfast before your journey home'],
	},
	{
		slug: 'amalfi-coast', name: 'Amalfi Coast', country: 'Italy', region: 'Europe',
		days: 5, price: 980, category: 'Coast', tag: 'Coastal favorite',
		image: 'photo-1533105079780-92b9be482077',
		intro: 'A sunlit stretch of coastline made for long lunches, lemon groves, hidden coves, and finding your own favorite view.',
		bestTime: 'April to June, September', pace: 'Easy & unhurried',
		itinerary: ['Arrive in Sorrento and take in the sea views', 'A private boat day along the coast and hidden coves', 'Walk the Path of the Gods with a local guide', 'Free time for a cooking class or a beach afternoon', 'A slow breakfast and onward travel'],
	},
	{
		slug: 'kyoto', name: 'Kyoto in bloom', country: 'Japan', region: 'Asia',
		days: 8, price: 1640, category: 'Culture', tag: 'Seasonal journey',
		image: 'photo-1493976040374-85c8e12f0c0e',
		intro: 'Old lanes, quiet gardens, neighborhood tea houses, and the gentle rhythm of a city that rewards taking your time.',
		bestTime: 'March to May, October', pace: 'Cultural & considered',
		itinerary: ['Arrive and settle into a traditional machiya stay', 'Visit the eastern temples before the crowds arrive', 'A market walk and hands-on seasonal cooking class', 'Take the train to Arashiyama for a riverside afternoon', 'A free day to follow your curiosity through the city', 'Meet a tea teacher for a private tea ceremony', 'Day trip to Nara and its ancient temples', 'A quiet breakfast before departure'],
	},
	{
		slug: 'marrakech', name: 'Marrakech & the Atlas', country: 'Morocco', region: 'Africa',
		days: 6, price: 1120, category: 'Culture', tag: 'Desert & city',
		image: 'photo-1539020140153-e479b8c22e70',
		intro: 'Lose yourself in the medina, share mint tea with local hosts, then trade the city rhythm for the stillness of the Atlas foothills.',
		bestTime: 'October to April', pace: 'Colorful & balanced',
		itinerary: ['Arrive at your riad in the heart of the medina', 'Explore the souks with a local storyteller', 'A hands-on cooking class in a family home', 'Travel into the Atlas foothills for a village stay', 'A guided walk and a slow afternoon with your hosts', 'Return to Marrakech and depart'],
	},
	{
		slug: 'bali', name: 'Bali, beyond the beach', country: 'Indonesia', region: 'Asia',
		days: 9, price: 1890, category: 'Nature', tag: 'Island slow-down',
		image: 'photo-1537996194471-e657df975ab4',
		intro: 'Follow the island inland for rice terrace walks, early swims, creative village stays, and days with space to breathe.',
		bestTime: 'May to October', pace: 'Restorative & outdoorsy',
		itinerary: ['Arrive in Ubud and ease into island time', 'Walk the rice terraces with a local farmer', 'A free day for galleries and a riverside lunch', 'Travel north for waterfalls and a mountain stay', 'Sunrise at the caldera with a local guide', 'Transfer to the coast for a slower finish', 'Two open days by the water', 'A final island breakfast and departure'],
	},
	{
		slug: 'patagonia', name: 'Wild Patagonia', country: 'Chile & Argentina', region: 'South America',
		days: 10, price: 2480, category: 'Mountains', tag: 'Big-sky adventure',
		image: 'photo-1464822759023-fed622ff2c3b',
		intro: 'A wide-open journey through glacial lakes, granite peaks, and welcoming estancias at the edge of the map.',
		bestTime: 'November to March', pace: 'Active & wild',
		itinerary: ['Arrive in Puerto Natales and meet your guide', 'A warm-up walk along the fjord', 'Travel into Torres del Paine National Park', 'A guided trail day beneath the granite towers', 'A rest day at a working estancia', 'Cross into Argentina by scenic overland route', 'Explore El Chaltén with a local mountain guide', 'Choose a glacier walk or an easy lakeside day', 'Return to town for a celebratory dinner', 'Depart from El Calafate'],
	},
];

export const stories = [
	{ slug: 'a-slower-way-through-kyoto', category: 'FIELD NOTES', date: 'May 18, 2025', title: 'A slower way through Kyoto', excerpt: 'The best morning in Kyoto started with no plan at all, just a quiet lane and the smell of fresh tea.', image: 'photo-1493976040374-85c8e12f0c0e', readTime: '5 min read', body: ['Kyoto rewards the early riser, but it rewards the unhurried traveler even more. We left our small machiya just after sunrise with nowhere to be and followed the soft sound of a temple bell through the neighborhood.', 'A tea shop owner waved us inside. We stayed for a cup, a conversation, and a list of favorite places written on the back of a paper bag. None were the famous ones. Every one was worth finding.', 'That is the feeling we hope to make room for: the small, unscheduled moments that become the reason you remember a place.'] },
	{ slug: 'the-long-way-to-the-sea', category: 'PEOPLE & PLACES', date: 'April 02, 2025', title: 'The long way to the sea', excerpt: 'On Italy’s southern coast, there is no rush to arrive. The winding road is part of the story.', image: 'photo-1533105079780-92b9be482077', readTime: '4 min read', body: ['The road from Sorrento curls around the coastline in a way that makes every journey feel like a small event. Lemon groves appear between the houses, and then the sea opens up again, impossibly blue.', 'We stopped in a village where our driver knew the baker by name. We ate warm bread on the harbor wall and let the afternoon pass. We had booked a table for later. There was plenty of time.', 'Travel can be a list of places, or it can be the space between them. Along this coast, the space is often the best part.'] },
	{ slug: 'a-night-under-atlas-stars', category: 'TRAVEL NOTES', date: 'February 11, 2025', title: 'A night under Atlas stars', excerpt: 'A family-run guesthouse in the foothills reminded us that hospitality is a language of its own.', image: 'photo-1539020140153-e479b8c22e70', readTime: '6 min read', body: ['By the time we reached the foothills, the city felt a world away. Our host welcomed us with mint tea and a bowl of dates, then pointed out the mountain line where tomorrow’s walk would begin.', 'Dinner lasted for hours. There were stories about the valley, about the changing seasons, and about the recipes passed from one generation to the next. We understood only some of the words, but all of the warmth.', 'In the morning the mountains were close enough to touch. We walked slowly, stopping often, carrying the feeling of that welcome with us.'] },
];
