import "./Resume.css";

function Resume() {
    return(
<div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-12 m-3 p-5 content">
                    {/* <!-- Row containing h1 --> */}
                    <div class="row">
                        <h1>My Resume and Resources</h1>
                    </div>
                    <hr />
                    {/* <!-- Row containing github link --> */}
                    <div class="row">
                        <div class="col">
                            <a href="https://github.com/dillonhoban" target="_blank"><button type="button"
                                    class="btn btn-light"><span class="fa fa-id-card"></span> Click here to visit my Github profile
                                </button>
                            </a>
                        </div>
                    </div>
                    <br />
                    {/* <!-- Row containing LinkedIn link --> */}
                    <div class="row">
                        <div class="col">
                            <a href="https://www.linkedin.com/in/dillon-hoban-58a3b9104/" target="_blank"><button
                                    type="button" class="btn btn-primary"><span class="fa fa-handshake-o"></span>
                                    Click here to see me on LinkedIn</button>
                            </a>
                        </div>
                    </div>
                    <br />
                    {/* <!-- Row containing resume download --> */}
                    <div class="row">
                        <div class="col">
                            <a href="Assets/images/Resume_Work.pdf" download rel="noopener noreferrer"
                                target="_blank"><button type="button" class="btn btn-danger"><span class="fa fa-download"></span> Click here to download my
                                    resume as a PDF</button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Resume;