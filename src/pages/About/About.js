import "./About.css";

function About() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-12 m-3 p-5 content">
          {/* <!-- Row containing h1 --> */}
          <div class="row">
            <h1>Who I Am</h1>
          </div>
          <hr/>
          {/* <!-- Row containing img and p --> */}
          <div class="row">
            <div class="col">
              <img class="headshot" src="../../../public/headshot.JPG" alt="Headshot of Dillon Hoban"/>
              <p>I am a recent theatre graduate from SDSU looking to diversify my skill set with the hopes of
                transitioning to a more stable career during these unpredictable times.
                I was born and raised in Encinitas, California.
                I enjoy cooking, making cocktails, woodworking, home improvement, creating and discussing theatre and
                film, and gaming.
                My dream job is to make my living as an actor on the stage and screen, a path I plan to pursue again
                when the timing is right. I also have goals of owning my own property rental business of houses I have
                designed and renovated myself.
                I am currently renting a studio in Mission Hills. The place is small but comfortable, something I better
                start getting used to because tiny living and van life are definitely on my horizon. I like the area a
                lot and because I moved in during quarantine, I am looking forward to trying all the restaurants and
                bars when they start opening back up.
              </p>
            </div>
          </div>
          {/* <!-- Row containing additional p --> */}
          <div class="row">
            <div class="col">
              <p>I want to be a web developer because I believe the skills required are incredibly versatile and
                valuable in almost every area I am interested in. You cannot operate a business in this day and age
                without a website and I have seen first hand at my current job the havoc a poorly designed website can
                wreak on the operations of an company. I want to be part of the solution for turning business
                concepts into a reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;