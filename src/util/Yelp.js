const apiKey = 'iIaWei1JWFPv-Jx8lNiiyfqLwV3JXUsioT3PcBQzzgL6UGgZUwNyHbcwyHnpUGhQiI_R_ccAj7kNYXKx-Ocvd9CiLXqntW86_C1ozbjRvYu7bmonJ-wx125besymWnYx';
let Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
       {
           headers: {
              Authorization: `Bearer ${apiKey}`
           }
       } 
    ).then(function(response){
        return response.json();
    }).then(function(jsonResponse){
        if(jsonResponse.businesses){
            jsonResponses.businesses.map(
                function(business){
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.category[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }
            )
        }
    });
    }
}

export default Yelp;
