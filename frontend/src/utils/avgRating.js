const calculateAvgRating = (reviews) => {
    // Calculate the total rating using reduce
    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
  
    // Calculate the average rating
    const avgRating =
      reviews?.length > 0 ? (totalRating / reviews.length).toFixed(1) : "No ratings";
  
    // Return the results
    return {
      totalRating,
      avgRating,
    };
  };
  
  export default calculateAvgRating;