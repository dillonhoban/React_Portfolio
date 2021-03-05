import "./Contact.css";

function Contact() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-12 m-3 p-5 content">
          {/* <!-- Row containing h1 --> */}
          <div class="row">
            <h1>Get in Touch</h1>
          </div>
          <hr />
          {/* <!-- Row containing contact form --> */}
          <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            {/* <!--Grid row--> */}
            <div class="row">

              {/* <!--Grid column--> */}
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input type="text" id="name" name="name" class="form-control" placeholder="Name" />
                  <label for="name" class="">Name</label>
                </div>
              </div>
              {/* <!--Grid column--> */}
            </div>

            <div class="row">
              {/* <!--Grid column--> */}
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input type="text" id="email" name="email" class="form-control" placeholder="Email" />
                  <label for="email" class="">Email</label>
                </div>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}

            {/* <!--Grid row--> */}
            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"
                    placeholder="Message"></textarea>
                  <label for="message" class="">Message</label>
                </div>
              </div>
            </div>
            {/* <!--Grid row--> */}

          </form>

          <div class="text-center text-md-left">
            <a class="btn btn-light" onclick="document.getElementById('contact-form').submit();"><span class="fa fa-paper-plane-o"></span> Send</a>
          </div>
          <div class="status"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;