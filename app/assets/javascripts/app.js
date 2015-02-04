(function() {
  var app = angular.module('gemStore', []);

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  });

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.directive('productTabs', function(){
    return {
      restrict: 'E',
      templateUrl: "/assets/product-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(setTab) {
          this.tab = setTab;
        };
      },
      controllerAs: 'tab'
    };
  });

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };

  });

  app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "/assets/product-description.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "/assets/product-reviews.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict:"A",
      templateUrl: "/assets/product-specs.html"
    };
  });

  app.directive("productGallery", function() {
    return {
      restrict:"E",
      templateUrl: "/assets/product-gallery.html"
    };
  });


  var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [ 
      "https://s-media-cache-ak0.pinimg.com/236x/02/c4/75/02c4756fc024190b48ef6c83977cb977.jpg",
      "http://www.sacredsource.com.au/crystals-newage-shop/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/a/z/azurite.jpg"
    ],
    reviews:[]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "http://tokendb.com/wp-content/uploads/2012/06/40-GP-Bloodstone-Gem-200x200.jpg",
      "http://img2.wikia.nocookie.net/__cb20140814162522/soada/images/a/a2/Ingredient-Bloodstone-SmallIcon.png",
      "http://cdn.shopify.com/s/files/1/0243/4545/files/Bloodstone_birthstone_grande.jpg?3106"
    ]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "http://australiagems.com/Store/images/zircon%203mm%20round.jpg"
    ]
  }];

})();