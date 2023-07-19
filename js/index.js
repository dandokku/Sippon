// PRELOADER FUNCTIONALITY
$(window).on("load", function () {
    $('#js-preloader').addClass('loaded');
  $(".home-header").addClass("show"); 
})

$(document).ready(function () {
  // FIXED NAVBAR FUNCTIONALITY
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
          $(".header").addClass("fixed");
          $(".active-page").addClass("fixed");
          $(".brand-name span").addClass("fixed");
          $(".nav ul li a").addClass("fixed");
          $(".other-links ul li a").addClass("fixed")
          $(".back-top-btn").fadeIn()
        } else{
          $(".header").removeClass("fixed");
          $(".active-page").removeClass("fixed");
          $(".brand-name span").removeClass("fixed");
          $(".nav ul li a").removeClass("fixed");
          $(".other-links ul li a").removeClass("fixed")
          $(".back-top-btn").fadeOut()
        }
    })
  

// SORTING FUNCTIONALITY
  
// Sorting buttons
var actionBtn = $('.action-btn');
var rpgBtn = $('.rpg-btn');
var adventureBtn = $('.adventure-btn');
var exploreWraps = $('.explore-wraps');

// Event listener for action button
actionBtn.click(function() {
  sortItems('Action');
  $(".action-btn").addClass("clicked")
  $(".adventure-btn").removeClass("clicked")
  $(".rpg-btn").removeClass("clicked")
  $(".showall-btn").removeClass("clicked")

});

// Event listener for RPG button
rpgBtn.click(function() {
  sortItems('RPG');
  $(".rpg-btn").addClass("clicked")
  $(".adventure-btn").removeClass("clicked")
  $(".action-btn").removeClass("clicked")
  $(".showall-btn").removeClass("clicked")

});

// Event listener for adventure button
adventureBtn.click(function() {
  sortItems('Adventure');
  $(".adventure-btn").addClass("clicked")
  $(".rpg-btn").removeClass("clicked")
  $(".action-btn").removeClass("clicked")
  $(".showall-btn").removeClass("clicked")

});

// Unsorting Items
$(".showall-btn").click(function () {
  unsortItems()
})

// Function to sort items based on the provided category
function sortItems(category) {
  exploreWraps.each(function() {
    var exploreWrap = $(this);
    exploreWrap.find('.explore-wrap').hide(); // Hide all explore wraps

    // Show explore wraps with matching category
    exploreWrap.find('.image-tag').each(function() {
      var imageTag = $(this);
      if (imageTag.text() === category) {
        imageTag.closest('.explore-wrap').show();
      }
    });
  });
}

function unsortItems() {
  $(".explore-wrap").show()
  $(".adventure-btn").removeClass("clicked")
  $(".rpg-btn").removeClass("clicked")
  $(".action-btn").removeClass("clicked")
  $(".showall-btn").addClass("clicked")

} 

// GAME DETAILS FUNCTIONALITY

$(".explore-wrap img").on("click", function () {
  $(".gamee-details").show()
})

$(".close-btn").on("click", function () {
  $(".gamee-details").fadeOut()
})



// SEARCH FUNCTIONALITY

$(".search").on("input", function (e) {
  e.preventDefault();
      var searchText = $(".search input").val().toLowerCase(); // Get the search input value
  
      $(".explore-wrap").each(function () {
        var gameName = $(this).find(".explore-name").text().toLowerCase();
  
        if (gameName.includes(searchText)) {
          $(this).show(); // Show the matching game
          $(".search-results").html(`<p>Results for "${searchText}"</p>`)
        } else {
          $(this).hide();  // Hide the non-matching game
          $(".search-results").html(`<p>Results for "${searchText}"</p>`)
        }

        if (searchText === "") {
          unsortItems()
          $(".search-results").empty()
          console.log("Sw")
        }
      });
  
});
  
// SHOWING FAQ FUNCTIONALITY
$(document).ready(function() {
  $(".faq-wraps").on("click", ".showc", function() {
    var faqWrap = $(this).closest(".faq-wrap");
    var faqAnswer = faqWrap.find(".faq-answer");

    faqAnswer.slideToggle(function() {
      faqWrap.toggleClass("show");
    });
    $(this).toggleClass("fa-plus fa-minus");
  });
});  

})


// DISPLAYING GAME CARDS FUNCTIONALITY
const allGames = [
  {
    id: 110,
    gameTitle: "Attack Titans",
    tag: "Adventure",
    image: "./images/aot.jfif",
    description: "Attack Titans is an adrenaline-fueled adventure game that plunges players into a captivating world of epic battles and heart-pounding action. Set in a post-apocalyptic universe, humanity faces the looming threat of gigantic, ferocious creatures known as Titans. As a skilled and courageous soldier, players must harness their abilities, forge alliances, and embark on a perilous journey to defend what remains of humanity and eliminate the Titan menace.",
  },
  {
    id: 111,
    gameTitle: "Assasinate Creed",
    tag: "RPG",
    image: "./images/banner-image.jpg",
    description: "Assainate Creed is an action-packed RPG (role-playing game) that immerses players in a thrilling world of ancient secrets, assassins, and historical intrigue. Set in an expansive and meticulously crafted historical backdrop, players assume the role of a highly skilled assassin embarking on a dangerous journey through various eras to uncover hidden truths and shape the course of history.",
  },
  {
    id: 112,
    gameTitle: "Brauahala",
    tag: "Action",
    image: "./images/categories-01.jpg",
    description: "Brauahala is an adrenaline-fueled action game that thrusts players into the heart of mythological battles, where gods, heroes, and legendary creatures clash in epic combat. Inspired by Norse mythology, this game takes you on an exhilarating journey through the realms of Asgard, Midgard, and beyond, as you fight to claim your place among the greatest warriors in history.",
  }, 
  {
    id: 113,
    gameTitle: "Wota III",
    tag: "Action",
    image: "./images/categories-02.jpg",
    description: "Wota II is a high-octane action game that thrusts players into the heart of a futuristic world dominated by advanced technology and intense combat. As an elite operative in an underground resistance group, players must navigate through a dystopian society, engage in thrilling battles, and fight against a tyrannical regime to liberate the oppressed masses.",
  },
  {
    id: 114,
    gameTitle: "Bridge of Fantasy",
    tag: "Adventure",
    image: "./images/categories-03.jpg",
    description: "Bridge of Fantasy is an enchanting adventure game that transports players to a realm where imagination knows no bounds. In this whimsical and magical world, players embark on an extraordinary journey filled with wonder, discovery, and thrilling challenges. As the protagonist of the game, players are tasked with bridging the gap between reality and fantasy, exploring fantastical landscapes, and unraveling the secrets of this extraordinary realm.",
  }, 
  {
    id: 115,
    gameTitle: "Weak People",
    tag: "RPG",
    image: "./images/categories-04.jpg",
    description: "Weak People is an enthralling RPG (role-playing game) that challenges players to navigate a world where strength is not determined by physical prowess but by the power of compassion, resilience, and personal growth. In this unique and thought-provoking game, players embark on a journey of self-discovery, overcoming their weaknesses, and finding strength in vulnerability.",
  },
  {
    id: 116,
    gameTitle: "Peace Breaker",
    tag: "Action",
    image: "./images/categories-05.jpg",
    description: "Peace Breaker is a heart-pounding action game that plunges players into a world on the brink of chaos and challenges them to dismantle a web of corruption and restore peace by any means necessary. As a skilled operative with a thirst for justice, players embark on a relentless quest to expose and eliminate the nefarious forces manipulating society from the shadows.",
  },
  {
    id: 117,
    gameTitle: "Ground Pub",
    tag: "RPG",
    image: "./images/cta-bg.jpg",
    description: "Ground Pub is a delightful RPG (role-playing game) that invites players to embark on a whimsical adventure in a lively and enchanting world centered around a magical tavern. In this charming game, players assume the role of a plucky tavern owner, immersing themselves in a heartwarming story filled with camaraderie, exploration, and the pursuit of dreams.",
  },
  {
    id: 118,
    gameTitle: "Snake Balls",
    tag: "RPG",
    image: "./images/db.jpg",
    description: "Snake Balls is an inventive and quirky RPG (role-playing game) that takes players on a whimsical journey through a fantastical realm where mystical creatures, ancient artifacts, and daring adventures await. In this charming and unique game, players assume the role of a courageous hero on a mission to unravel the secrets of the magical Snake Balls and restore balance to the world.",
  },
  {
    id: 119,
    gameTitle: "Villain Academia",
    tag: "RPG",
    image: "./images/mha.jfif",
    description: "Villain Academia is an intriguing RPG (role-playing game) that flips the traditional hero narrative on its head, allowing players to step into the shoes of aspiring villains in a world ruled by chaos and darkness. In this captivating game, players embark on a thrilling journey as they attend a notorious academy for villains, honing their sinister skills, forging alliances, and rising through the ranks of villainy.",
  },
  {
    id: 120,
    gameTitle: "Storm IV",
    tag: "Adventure",
    image: "./images/nsuns4.jpg",
    description: "Storm IV is an exhilarating adventure game that immerses players in a world of tempestuous weather phenomena and thrilling challenges. Set in a tumultuous and atmospheric landscape, players embark on a high-stakes journey where they must harness the power of the elements, overcome treacherous obstacles, and unravel the mysteries hidden within the storm.",
  },
  {
    id: 121,
    gameTitle: "Person V",
    tag: "Action",
    image: "./images/p5.jpg",
    description: "Person V is a gripping action game that thrusts players into a world of clandestine operations, intense combat, and high-stakes espionage. As a skilled operative with a mysterious past, players embark on a dangerous journey to uncover the truth, navigate a web of conspiracies, and take down powerful adversaries who threaten global security.",
  },
  {
    id: 122,
    gameTitle: "Urban Warfare",
    tag: "Action",
    image: "./images/single-game.jpg",
    description: "Urban Warfare is a pulse-pounding action game that drops players into the heart of chaotic city streets, where danger lurks around every corner and survival depends on split-second decision-making and combat skills. As an elite soldier in an urban warfare unit, you'll navigate through treacherous environments, engage in intense firefights, and undertake high-risk missions in a gritty and realistic urban landscape.",
  },
  {
    id: 123,
    gameTitle: "Peak Legends",
    tag: "RPG",
    image: "./images/top-game-03.jpg",
    description: "Peak Legends is an exhilarating RPG (role-playing game) that catapults players into a vast and treacherous world of towering mountains, untamed wilderness, and epic adventures. In this breathtaking game, players embark on a quest to conquer the highest peaks, unravel ancient mysteries, and become legends in their own right.",
  },
  {
    id: 124,
    gameTitle: "Cards IV",
    tag: "RPG",
    image: "./images/top-game-04.jpg",
    description: "Cards IV is a captivating RPG (role-playing game) that invites players into a world where magical cards hold immense power and determine the fate of kingdoms. In this enchanting game, players embark on an epic quest to collect and master a diverse array of mystical cards, using them to battle formidable foes, unravel ancient secrets, and shape the course of destiny.",
  },
  {
    id: 125,
    gameTitle: "Fintony",
    tag: "Adventure",
    image: "./images/top-game-05.jpg",
    description: "Fintony is an enchanting adventure game that invites players to embark on a whimsical journey through a vibrant and fantastical underwater world. Dive into an immersive aquatic realm filled with wonder, discovery, and thrilling challenges as you assume the role of Fintony, a courageous and curious underwater explorer.",
  },
  {
    id: 126,
    gameTitle: "Fate II",
    tag: "Adventure",
    image: "./images/top-game-06.jpg",
    description: "Fate II is an immersive adventure game that transports players to a captivating realm where destiny intertwines with choice. Embark on a thrilling journey filled with epic quests, treacherous encounters, and profound consequences as you navigate a world on the brink of transformation.",
  },
];

const allFaqs = [
  {
    id: 110,
    question: "Can I download and play the games immediately after adding to library?",
    answer: "Yes, once your purchase is complete, you can typically download and play the games immediately. Some games may require additional installation steps or the use of a gaming platform such as Steam, Epic Games Store, or GOG.",
  },
  {
    id: 111,
    question: "What platforms are supported by the games you offer?",
    answer: "We offer games for multiple platforms, including PC, Mac, Xbox, PlayStation, and Nintendo Switch. The supported platforms are clearly indicated on the game's product page.",
  },
  {
    id: 112,
    question: "Can I request a refund if I change my mind or encounter technical issues?",
    answer: "Our refund policy may vary depending on the specific circumstances and the game publisher's policies. Please refer to our refund policy page for detailed information. We strive to provide the best possible customer service, so reach out to our support team if you encounter any issues.",
  },
  {
    id: 113,
    question: "Are the games on your website region-locked?",
    answer: "Game region-locking policies vary depending on the game and publisher. We indicate region-locking information on the game's product page whenever applicable. Make sure to check the details before making a purchase.",
  },
  {
    id: 114,
    question: "How can I access the games I purchased if I switch to a new computer or gaming console?",
    answer: "Most of the games you purchase are tied to your account. You can log in to your account on your new device or console and access your purchased games from there. Some games may require reinstallation or activation steps, so be sure to follow the instructions provided.",
  },
  {
    id: 115,
    question: "Can I pre-order upcoming games on your website?",
    answer: "Yes, we often offer pre-orders for highly anticipated games. Simply visit the game's product page and click on the Pre-order button. Pre-order benefits, such as exclusive bonuses or early access, may be available for certain games",
  },
]

$(".faq-wraps").empty()

allFaqs.forEach((faq) => {
const { id, question, answer } = faq;
  $(".faq-wraps").append(`
  <div class="faq-wrap">
    <div class="faq-header">
        <h3 class="faq-question">${question}</h3>
        <i class="fa fa-plus showc"></i>
    </div>
    <p class="faq-answer">${answer}</p>
  </div>
`)
})

const allPop = [
  {
    id: 110,
    image: "./images/db.jpg",
    name: "Fighting Balls"
  },
  {
    id: 111,
    image: "./images/nsuns4.jpg",
    name: "Storm 4"
  },
  {
    id: 112,
    image: "./images/op.webp",
    name: "Pirate Warriors"
  },
  {
    id: 113,
    image: "./images/p5.jpg",
    name: "Persona 5"
  },
  {
    id: 114,
    image: "./images/mha.webp",
    name: "Hero One"
  },
]

$(".popular-images-wrap").empty()

allPop.forEach((pop) => {
const { id, image, name } = pop;
  $(".popular-images-wrap").append(`
  <div class="popular-wrap">
  <img src="${image}" alt="" class="popular-image">
  <div class="popular-overlay">
      <h3>${name}</h3>
  </div>
</div>
`)
})


function closeModal() {
  $(".gamee-details").fadeOut()
}

function addToLibrary(id) {
  console.log("Warra Welp")
  const findGame = games.find(game => game.id === id);
  if (findGame){
    alert("Game already in Library")
  }
  else{
    const product = allGames.filter(product => product.id === id)[0]
    games = [...games, {...product, qty: 1}]
    localStorage.setItem("sippon__games", JSON.stringify(games))
    showCartContent(games)
  }
}

let games = JSON.parse(localStorage.getItem("sippon__games")) || [];

$(".explore-wraps").empty()

allGames.forEach((game) => {
const { id, gameTitle, tag, image, description } = game;
$(".explore-wraps").append(`
  <div data-id="${id}" class="explore-wrap">
    <div class="explore-image-wrap">
        <img src="${image}" alt="" class="explore-image">
        <p class="image-tag">${tag}</p>
    </div>
    <h4 class="explore-name">${gameTitle}</h4>
    <button class="explore-btn" onclick="addToLibrary(${id})">Add to Library</button>
  </div>
`)

$(".explore-wrap").on("click", function () {
  const gameId = $(this).data("id");
  const game = allGames.find((game) => game.id === gameId);
  console.log("Welpwelpwelpwelpwelpwelpwelpwelp")

  $(".gamee-details").empty().append(`
    <div class="game-details-section">
        <img class="game-image" src="${game.image}" alt="" class="game-image">

        <button class="close-btn" onclick="closeModal()">X</button>

        <div class="details-wrap">
            <div class="details-head">
                <h1 class="game-name">${game.gameTitle}</h1>
                <p class="game-tag">${game.tag}</p>
            </div>

            <p class="game-details">${game.description}</p>

            <button class="addBtn" onclick="addToLibrary(${game.id})">Add to Library</button>
        </div>
    </div>
  `);
});

  
})

function closeModal() {
  $(".gamee-details").fadeOut();
}

// function showLibraryContent(games) {
//   const gameWrap = $(.cart-wrap)
// }


$(document).ready(function() {
  $('.popular-wrap').hover(function() {
    var video = $(this).find('video')[0];
    if (video) {
      video.play();
    }
  }, function() {
    var video = $(this).find('video')[0];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });
});

$(document).ready(function() {
  $('.nav-icon').click(function() {
    $('.nav ul').toggleClass('active');
  });
});

// CONTACT FORM
$(document).ready(function() {
  // Form submission
  $('#myForm').submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Generate the email parameters
    var templateParams = {
      name: $('input[name="name"]').val(),
      email: $('input[name="email"]').val(),
      message: $('textarea[name="message"]').val()
    };

    // Initialize EmailJS
    emailjs.init('j3dguncwQ8ec6-Rt9');

    // Send email using EmailJS
    emailjs.send('service_a9c1t1v', 'template_3lcjcs9', templateParams)
      .then(function(response) {
        console.log('Success!', response.status, response.text);
        // Clear form fields
        $('#myForm')[0].reset();
        $(".success-msg").fadeIn(7000, function () {
          $(".success-msg").fadeOut()
        })
      }, function(error) {
        console.log('Error:', error);
        $(".error-msg").fadeIn(5000, function () {
          $(".error-msg").fadeOut()
        })
      });
  });

  $(".s-section form, .subscribe-form").on('submit', function (e) {
    e.preventDefault()
    console.log("wepolplpelwpelp")
    $(".success-msg").fadeIn(7000, function () {
      $(".success-msg").fadeOut()
    })
  })


  $(".login-section").on("submit", function (e) {
    e.preventDefault()
    window.location("/index.html")
  })
});
