const touristSpots = [
    {
        name: "Dashashwamedh Ghat",
        category: "ghat",
        description: "Famous for its spectacular evening Ganga Aarti. You can sit on the steps or hire a boat ride to watch the ritual from the river."
    },
    {
        name: "Assi Ghat",
        category: "ghat",
        description: "The best place to start your day. Experience the morning Subah-e-Banaras, listen to Vedic chants, and enjoy an early morning boat ride."
    },
    {
        name: "Kashi Vishwanath Temple",
        category: "temple",
        description: "One of the most sacred spiritual centers in India. Walk through the historic lanes to visit the magnificent golden spire temple."
    },
    {
        name: "Kachori Gali",
        category: "food",
        description: "A paradise for food lovers! Head here in the morning to try authentic Banarasi breakfast like hot, crispy kachoris and sweet jalebis."
    },
    {
        name: "Dhamek Stupa (Sarnath)",
        category: "temple",
        description: "Just a short drive from Varanasi, this is where Buddha gave his first sermon. Explore the ancient ruins and serene atmosphere."
    },
    {
        name: "Sarnath Museum",
        category: "heritage", // Fixed spelling from catagory to category
        description: "Located near the Dhamek Stupa, this museum houses a collection of artifacts and sculptures related to the life of Buddha and the history of Sarnath."
    },
    {
        name: "Ramnagar Fort",
        category: "heritage",
        description: "Located on the opposite bank of the Ganges, this fort offers a glimpse into the royal history of Varanasi. The museum inside is worth a visit."
    },
    {
        name: "Manikarnika Ghat",
        category: "ghat",
        description: "One of the most sacred ghats, known for its cremation rituals. It’s a place of spiritual significance and offers a unique perspective on life and death."
    },
    {
        name: "Tulsi Ghat",
        category: "ghat",
        description: "Named after the poet-saint Tulsidas, this ghat is perfect for a peaceful morning walk. Enjoy the serene atmosphere and beautiful views of the river."
    },
    {
        name: "Banaras Hindu University (BHU)",
        category: "heritage",
        description: "A sprawling campus with beautiful architecture and lush gardens. It’s a great place for a morning walk and to soak in the academic vibe of Varanasi."
    },
    {
        name: "Godowlia Market",
        category: "heritage",
        description: "Located near the Kashi Vishwanath Temple, this market has a rich history and offers a unique blend of religious and commercial architecture. It’s an interesting spot to explore during your walk."
    },
    {
        name: "Kaal Bhairav Temple",
        category: "temple",
        description: "Dedicated to the fierce form of Lord Shiva, this temple is a must-visit for those interested in spirituality and history. It’s a unique spot to explore during your walk."
    },
    {
        name: "Sankat Mochan Hanuman Temple",
        category: "temple",
        description: "A popular temple dedicated to Lord Hanuman, known for its vibrant atmosphere and spiritual significance. It’s a great place to visit during your walk."
    },
    {
        name: "Bharat Kala Bhavan Museum",
        category: "heritage",
        description: "Located within the BHU campus, this museum houses an impressive collection of artifacts, paintings, and sculptures that showcase the rich cultural heritage of Varanasi."
    },
    {
        name: "New Vishwanath Temple",
        category: "temple",
        description: "Located inside the sprawling BHU campus, this massive marble structure has one of the tallest temple towers in India. It’s a stunning architectural marvel and a peaceful place to visit during your walk."
    },
    {
        name: "Gyanvapi Mosque",
        category: "heritage",
        description: "Located near the Kashi Vishwanath Temple, this mosque has a rich history and offers a unique blend of religious and architectural significance. It’s an interesting spot to explore during your walk."
    },
    {
        name: "Bharat Mata Temple",
        category: "temple", // Fixed from array to string format for standard filtering
        description: "This temple is dedicated to Mother India and features a large relief map of the country. It’s a unique and patriotic spot to visit during your walk."
    },
    {
        name: "Sarnath Archaeological Site",
        category: "heritage",
        description: "Explore the ancient ruins of Sarnath, where Buddha gave his first sermon. The site includes stupas, monasteries, and other historical structures that offer a glimpse into the past."
    },
    {
        name: "Chet Singh Ghat & Fort",
        category: "ghat",
        description: "Located on the opposite bank of the Ganges, this ghat and fort offer a glimpse into the history of Varanasi. The fort has a rich history and the ghat is a peaceful spot to explore during your walk."
    },
    {
        name: "Darbhanga Ghat",
        category: "ghat",
        description: "A serene ghat located on the banks of the Ganges, known for its peaceful atmosphere and beautiful views. It’s a great spot for a morning or evening walk."
    },
    {
        name: "Shivala Ghat",
        category: "ghat",
        description: "One of the oldest ghats in Varanasi, known for its historical significance and beautiful architecture. It’s a great place to explore during your walk."
    },
    {
        name: "Ganges Riverfront",
        category: "ghat",
        description: "The riverfront along the Ganges offers stunning views and a vibrant atmosphere. It’s a great place for a morning or evening walk, especially during sunrise or sunset."
    },
    {
        name: "Kashi chat Bhandar",
        category: "food",
        description: "A popular street food stall in Varanasi, known for its delicious and authentic Banarasi chaat. It’s a must-visit spot for food lovers looking to experience the local flavors during their walk."
    },
    {
        name: "Deena chai & Chat Bhandar",
        category: "food",
        description: "A beloved spot for locals and tourists alike, this stall offers a variety of delicious chaat and refreshing chai. It’s a great place to stop for a quick bite and experience the vibrant street food culture of Varanasi during your walk."
    },
    {
        name: "The Ram Bhandar(Thatheri Bazar)",
        category: "food",
        description: "An iconic breakfast destination deep in the alleys, famous for deep-fried Kachori-Sabzi cooked in pure desi ghee. It’s a must-visit spot for food lovers looking to experience the authentic flavors of Varanasi during their morning walk."
    },
    {
        name: "Neelu Kachori Bhandar",
        category: "food",
        description: "Located in Kachori Gali; loved by locals for their crispy Hing (asafoetida) Kachoris served with a spicy chickpea curry. It’s a great place to stop for a delicious breakfast and experience the local flavors of Varanasi during your walk."
    },
    {
        name: "Chachi Ki Kachori(Lanka)",
        category: "food",
        description: "A multi-generational morning stall near the BHU gate renowned for its heavy, flavor-packed kachoris and hot jalebis. It’s a must-visit spot for food lovers looking to experience the authentic flavors of Varanasi during their morning walk."
    },
    {
        name: "Laxmi chai Wale",
        category: "food",
        description: " A legendary alleyway tea stall famous for its Malai Toast (thick bread toasted over coal and layered with heavy fresh cream). It’s a great place to stop for a refreshing chai and a delicious snack while exploring the vibrant street food culture of Varanasi during your walk."
    },
    {
        name: "Blue Lassi",
        category: "food",
        description: " A tiny, worldwide-famous shop near Manikarnika Ghat serving hand-churned, fruit-filled lassis in traditional clay cups. It’s a must-visit spot for food lovers looking to experience the authentic flavors of Varanasi during their walk."
    },
    {
        name: "Pahalwan Lassi",
        category: "food",
        description: "Situated near the Ravidas Gate, this spot serves incredibly thick, classic sweet lassis topped with a rich layer of rabri. It’s a great place to stop for a refreshing lassi and experience the local flavors of Varanasi during your walk."
    },
    {
        name: "Chaukhambha Gali (for Malaiyyo)",
        category: "food",
        description: "The birthplace of Malaiyyo, a unique, airy winter sweet made of frothed saffron milk, available from November to March. It’s a must-visit spot for food lovers looking to experience the authentic flavors of Varanasi during their walk."
    },
    {
        name: "Baati Chokha Restraunt:",
        category: "food",
        description: "A rustic, village-themed dining spot serving authentic clay-baked Sattu Baati with smoky eggplant-potato Chokha. It’s a great place to stop for a hearty meal and experience the local flavors of Varanasi during your walk."
    },
    {
        name: "Badri Nimbu Thandai", 
        category: "food",
        description: "Located near Godowlia crossing, perfect for a refreshing glass of traditional Thandai loaded with dry fruits and local spices. It’s a must-visit spot for food lovers looking to experience the authentic flavors of Varanasi during their walk."
    },
    {
        name: "Keshav Tamboli Paan Shop",
        category: "food",
        description: " Finish your culinary trail here to try the melt-in-the-mouth, iconic Banarasi Paan. It’s a great place to stop for a unique and flavorful experience while exploring the vibrant street food culture of Varanasi during your walk."
    }
];

//  catagory logic
function getRecommendation(chosenCategory) {
    const filteredSpots = touristSpots.filter(spot => spot.category === chosenCategory);
    
    // Check if category has items
    if (filteredSpots.length === 0) return;

    const randomIndex = Math.floor(Math.random() * filteredSpots.length);
    const selectSpot = filteredSpots[randomIndex];

    document.getElementById("place-name").innerText = selectSpot.name;
    document.getElementById("place-desc").innerText = selectSpot.description;
} // <--- Yeh functional block yahan khatam ho gaya!

//  Surprise Me) logic
function surpriseMe() {
    const randomIndex = Math.floor(Math.random() * touristSpots.length);
    const selectedSpot = touristSpots[randomIndex];

    document.getElementById("place-name").innerText = selectedSpot.name;
    document.getElementById("place-desc").innerText = selectedSpot.description;
}
