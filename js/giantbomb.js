function getGameData(gameGUID) {
    const apiKey = "5cca53523530b3bc641b5b978986ef303cd0b509";
    const baseURL = `https://www.giantbomb.com/api/game/${gameGUID}/`;
    const params = {
      api_key: apiKey,
      format: "json",
      field_list: "name,image,description,genres",
      // You can add additional parameters here if needed, like limit, offset, etc.
    };
  
    $.ajax({
      url: baseURL,
      data: params,
      method: "GET",
      dataType: "json",
      success: function (response) {
        console.log("Oboi Boui", response);
        // Process the API response here
        // response will contain the data you requested
      },
      error: function (error) {
        console.error("Error fetching data:", error);
      },
    });
}
  
function getGameUID(gameName) {
    const apiKey = "5cca53523530b3bc641b5b978986ef303cd0b509";
    const baseURL = "https://www.giantbomb.com/api/search/";
    const params = {
      api_key: apiKey,
      format: "json",
      query: gameName,
      resources: "game",
    };
  
    $.ajax({
      url: baseURL,
      data: params,
      method: "GET",
      dataType: "json",
      success: function (response) {
        if (response.results && response.results.length > 0) {
          const gameUID = response.results[0].guid;
          console.log("Game UID:", gameUID);
        } else {
          console.log("Game not found.");
        }
      },
      error: function (error) {
        console.error("Error fetching data:", error);
      },
    });
  }
  
  // Example usage:
  $(document).ready(function () {
    // Call the function with the game name you want to search for.
    getGameUID("Your Game Name");
  });
  
  
  // Call getGameData when the page is loaded
  $(document).ready(function () {
    // Call the function with a specific game GUID if needed, otherwise, leave it empty to fetch all games.
    getGameData("YOUR_GAME_GUID_HERE");
  });
  
