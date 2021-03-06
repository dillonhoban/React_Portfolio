import "./Portfolio.css";

function Portfolio() {
    return (
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-12 m-3 p-5 content">
          {/* <!-- Row containing h1 --> */}
          <div class="row">
            <h1>Things I Made</h1>
          </div>
          <hr />
          {/* <!-- Row containing 2 imgs --> */}
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <a href="https://dillonhoban.github.io/The_BEST_Brewery_Finder/" target="_blank">
                <img class="placeholder" src=".//.//public/brewery_screenshot.jpg"
                  alt="Image of Brewery Locator for Project 1" /> </a>
            </div>
            <div class="col-lg-6 col-md-6">
              <a href="https://oursuperduperawesomeproject2.herokuapp.com/" target="_blank">
                <img class="placeholder" src=".//.//public/sc_of_fureverhome.jpg"
                  alt="Image of Fur-Ever Home for Project 2" /> </a>
            </div>
          </div>
          <br />
          {/* <!-- Row containing 2 imgs --> */}
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <a href="https://www.patchworktheatreco.com" target="_blank">
                <img class="placeholder" src=".//.//public/sc_of_pw_website.jpg"
                  alt="Image of the Patchwork Theatre Website" /> </a>
            </div>
            <div class="col-lg-6 col-md-6">
              <img class="placeholder" src="Assets/images/dummy-350x350.png" alt="Placeholder Image" />
            </div>
          </div>
          <br />
          {/* <!-- Row containing 2 imgs --> */}
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <img class="placeholder" src="Assets/images/dummy-350x350.png" alt="Placeholder Image" />
            </div>
            <div class="col-lg-6 col-md-6">
              <img class="placeholder" src="Assets/images/dummy-350x350.png" alt="Placeholder Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Portfolio;