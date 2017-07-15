
$(document).ready(function(){

  $.ajax({
    url:"http://localhost:3001/results",
    success:function(result){
      console.log(result);
      $("#mydiv").html(`
        <div class="paths-container">
          <div class="row upper">
            <!--Food Options well-->
            <div class="col-xs-4">
              <div class="foodOptions well">
                <h3 class="center">Food</h3>
                <ul>
                  {{#each foods}}
                  {{this.name}}<br/>
                  {{this.rating}}<br/>
                  {{this.price}}<br/>
                  {{this.location.address1}} + {{this.location.city}} + {{this.location.state}}<br/>
                  {{this.distance}}<br/>
                  <a href="{{this.url}}" class="btn btn-primary" style="margin-bottom: 50px">Yelp Listing Here</a></br>
                  <button type="button" name="locationChange"></button>
                  {{/each}}
                  </ul>
              </div>
            </div>
            <!--Drinks Options well-->
            <div class="col-xs-4">
              <div class="drinksOptions well">
                <h3 class = "center">Drinks</h3>
                <ul>
                  {{#each drinks}}
                  {{this.name}}</br>
                  {{this.rating}}</br>
                  {{this.price}}</br>
                  {{this.location.address1}} + {{this.location.city}} + {{this.location.state}}</br>
                  {{this.distance}}</br>
                  <a href="{{this.url}}" class="btn btn-primary" style="margin-bottom: 50px">Yelp Listing Here</a></br>
                  <button type="button" name="locationChange"></button>
                  {{/each}}
                  </ul>
              </div>
            </div>
            <!--Attractions Options well-->
            <div class="col-xs-4">
              <div class="attractionsOptions well">
                <h3 class = "center">Attractions</h3>
                <ul>
                  {{#each attractions}}
                  {{this.name}}</br>
                  {{this.rating}}</br>
                  {{this.price}}</br>
                  {{this.location.address1}} + {{this.location.city}} + {{this.location.state}}</br>
                  {{this.distance}}</br>
                  <a href="{{this.url}}" class="btn btn-primary" style="margin-bottom: 50px">Yelp Listing Here</a></br>
                  <button type="button" name="locationChange"></button>
                  {{/each}}
                  </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-4">
              <!--Fine Arts Options well-->
              <div class="artsOptions well">
                <h3 class = "center">Fine Arts</h3>
                <ul>
                  {{#each arts}}
                  {{this.name}}</br>
                  {{this.rating}}</br>
                  {{this.price}}</br>
                  {{this.location.address1}} + {{this.location.city}} + {{this.location.state}}</br>
                  {{this.distance}}</br>
                  <a href="{{this.url}}" class="btn btn-primary" style="margin-bottom: 50px">Yelp Listing Here</a></br>
                  <button type="button" name="locationChange"></button>
                  {{/each}}
                  </ul>
              </div>
            </div>
            <!--Nightlife Options well-->
            <div class="col-xs-4">
              <div class=" nightlifeOptions well">
                <h3 class = "center">Nightlife</h3>
                <ul>
                  {{#each nightlife}}
                  {{this.name}}</br>
                  {{this.rating}}</br>
                  {{this.price}}</br>
                  {{this.location.address1}} + {{this.location.city}} + {{this.location.state}}</br>
                  {{this.distance}}</br>
                  <a href="{{this.url}}" class="btn btn-primary" style="margin-bottom: 50px">Yelp Listing Here</a></br>
                  <button type="button" name="locationChange"></button>
                  {{/each}}
                  </ul>
              </div>
            </div>
            <!--Outdoors Options well-->
            <div class="col-xs-4">
              <div class=" outdoorsOptions well">
                <h3 class = "center">Outdoors</h3>
                <ul>
                  {{#each outdoors}}
                  {{this.name}}</br>
                  {{this.rating}}</br>
                  {{this.price}}</br>
                  {{this.location.address1}} + {{this.location.city}} + {{this.location.state}}</br>
                  {{this.distance}}</br>
                  <a href="{{this.url}}" class="btn btn-primary" style="margin-bottom: 50px">Yelp Listing Here</a></br>
                  <button type="button" name="locationChange"></button>
                  {{/each}}
                  </ul>
              </div>
            </div>
          </div>
        </div>`)
    }


  })

})
// $(".locationChange").click(function(){
//
// })
// function redo(){
//
// }
