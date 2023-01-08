// IMPORT: BOOTSTRAP ELEMENTS
import { Row, Col, Image, ListGroup } from 'react-bootstrap';

// IMPORT: CSS
import "../App.css";

// HOME FUNCTION MAIN --------------------------------------------------------------
export default function Home(){
	return(
		<>
		<Row className="shadow-sm border border-light-subtle rounded-4 p-3 m-3 violet-bg text-white">
			<Col className="p-5 p-md-2" xs={12} md={4}>
				<Image src={require('../assets/id.jpg')} height="200" className="profile-img d-block mx-auto rounded-circle shadow-sm"/>
			</Col>

			<Col className="py-4" xs={12} md={8}>
				<h2 className="p-0 m-0 mb-3 card-title">DHONEL O. ALMERO</h2>
				<p className="p-0 m-0">: 09285701117</p>
				<p className="p-0 m-0">: Masbate City, 5400, Region V</p>
				<p className="p-0 m-0">: linkedin.com/in/dhonel-almero</p>
				<p className="p-0 m-0">: dhonel15s.github.io/webportfoliov2/</p>
			</Col>
		</Row>

		<Row className="p-3 p-md-0 mt-0 mt-md-5">
			<Col className="p-5 mx-auto my-4 my-md-0 shadow-sm border border-light-subtle rounded-4 violet-bg text-white" xs={12} md={5}>
				<h5 className="card-title mb-3">ABOUT ME</h5>
				<p>I am an innovative, task-driven, and reliable individual who aspires to become a <strong>Web Developer</strong>. With my passion for coding and strong set of skills, I am currently searching for an organization where I can utilize my skills, bring value-added service to clients, and take part in developing useful web applications that have impact on the community. I am aiming to become a Senior Full-Stack Developer in the long run.</p>
			</Col>

			<Col className="p-5 mx-auto my-4 my-md-0 shadow-sm border border-light-subtle rounded-4 violet-bg text-white" xs={12} md={6}>
				<h5 className="card-title mb-3">EDUCATION</h5>

				<ol className="list-group list-group-numbered">
				  <li className="list-group-item d-flex justify-content-between align-items-start">
				    <div className="ms-2 me-auto">
				      <div className="fw-bold">Zuitt: Java Development Program</div>
				      Postgraduate/ Certificate – Course Completer
				    </div>
				    <span className="badge rounded-pill violet-button">2022</span>
				  </li>
				  <li className="list-group-item d-flex justify-content-between align-items-start">
				    <div className="ms-2 me-auto">
				      <div className="fw-bold">Zuitt: Web Developer Program (MERN Stack)</div>
				      Postgraduate/ Certificate – Course Completer
				    </div>
				    <span className="badge rounded-pill violet-button">2022</span>
				  </li>
				  <li className="list-group-item d-flex justify-content-between align-items-start">
				    <div className="ms-2 me-auto">
				      <div className="fw-bold">BS Computer Science</div>
				      Bicol University – Polangui Campus
				    </div>
				    <span className="badge rounded-pill violet-button">2019</span>
				  </li>
				  <li className="list-group-item d-flex justify-content-between align-items-start">
				    <div className="ms-2 me-auto">
				      <div className="fw-bold">Highschool</div>
				      Capitolina O. Legaspi Memorial High School
				    </div>
				    <span className="badge rounded-pill violet-button">2015</span>
				  </li>
				</ol>
				
			</Col>
		</Row>

		<Row className="shadow-sm border border-light-subtle rounded-4 p-4 p-md-5 my-5 mx-3 violet-bg text-white">
			<h5 className="card-title mb-3">SKILLS</h5>
			
			<Col xs={12} md={4} className="p-1 p-md-4">
				<h5 className="mb-3">Web Development</h5>
				<ul className="list-group">
				  <li className="list-group-item d-flex justify-content-between align-items-start pt-2">
				    <div><p>
				      • Developed a static portfolio website that has a mobile-friendly, responsive web design hosted in <strong>Github</strong> using <strong>HTML, CSS, JavaScript,</strong> and <strong>Bootstrap</strong>.
				      </p>
				    </div>
				  </li>
				  <li className="list-group-item d-flex justify-content-between align-items-start pt-2">
				    <div><p>
				      • Developed an E-Commerce API using <strong>Node.js</strong> and <strong>Express.js</strong>.
				      </p>
				    </div>
				  </li>
				  <li className="list-group-item d-flex justify-content-between align-items-start pt-2">
				    <div><p>
				      • Completed a <strong>Full-Stack Application</strong> using <strong>MERN Stack (MongoDB, Express.js, React,</strong> and <strong>Node.js</strong>.
				      	</p>
				    </div>
				  </li>
				</ul>
			</Col>


			<Col xs={12} md={4} className="p-1 p-md-4">
				<h5 className="mb-3">Software Testing</h5>
				<ul className="list-group">
				  <li className="list-group-item d-flex justify-content-between align-items-start pt-2">
				    <div><p>
				      • Visual Inspection for <strong>Embedded Softwares</strong> in automotive.
				      </p>
				    </div>
				  </li>
				  <li className="list-group-item d-flex justify-content-between align-items-start pt-2">
				    <div><p>
				      • Created <strong>Test Cases</strong> from specifications for <strong>Manual Testing</strong>.
				      </p>
				    </div>
				  </li>
				  <li className="list-group-item d-flex justify-content-between align-items-start pt-2">
				    <div><p>
				      • Bug-tracking and issues monitoring using <strong>Jira</strong>.
				      </p>
				    </div>
				  </li>
				  <li className="list-group-item d-flex justify-content-between align-items-start pt-2">
				    <div><p>
				      • <strong>Root Cause Analysis</strong> and mitigation of future occurrences.
				      </p>
				    </div>
				  </li>
				  <li className="list-group-item d-flex justify-content-between align-items-start pt-2">
				    <div><p>
				      • Developed <strong>Automation Tools</strong> using <strong>Excel VBA</strong>.
				      </p>
				    </div>
				  </li>
				</ul>
			</Col>

			<Col xs={12} md={4} className="p-1 p-md-4">
				<h5 className="mb-3">Leadership</h5>
				<ul className="list-group">
				  <li className="list-group-item d-flex justify-content-between align-items-start pt-2">
				    <div><p>
				      • Trained and mentored 2 batches of new team members.
				      </p>
				    </div>
				  </li>
				  <li className="list-group-item d-flex justify-content-between align-items-start pt-2">
				    <div><p>
				      • 1+ year experience in Project Management (client meetings, project reviews and kick-off, overall project planning, task scheduling and daily progress monitoring and reporting).
				      </p>
				    </div>
				  </li>
				</ul>
			</Col>
		</Row>

		<Row className="shadow-sm border border-light-subtle rounded-4 p-4 p-md-5 my-5 mx-3 violet-bg text-white">
					<h5 className="card-title mb-3">WORK EXPERIENCE</h5>
					
					<Col xs={12} className="p-1 my-3 my-md-1 p-md-4">
						<h4 className="m-0">• Software Engineer</h4>
						<p className="m-0">Denso Techno Philippines, Inc.</p>
						<p className="m-0">June 2021 – August 2022</p>
						<ul className="list-group">
						  <li className="list-group-item d-flex justify-content-between align-items-start pt-3">
						    <div>
						      <p>
						      • Analyzed specification documents and requirements documents from client and developed test cases for Software Testing.<br/>
						      • Created reusable testing tools and materials as process improvement<br/>
						      • Selected twice as pioneering member for 2 major products from our client.
						      </p>
						    </div>
						  </li>
						</ul>
					</Col>

					<Col xs={12} className="p-1 my-3 my-md-1 p-md-4">
						<h4 className="m-0">• Junior Software Engineer</h4>
						<p className="m-0">Denso Techno Philippines, Inc.</p>
						<p className="m-0">April 2019 – June 2021</p>
						<ul className="list-group">
						  <li className="list-group-item d-flex justify-content-between align-items-start pt-3">
						    <div>
						      <p>
						      • Performed Software Requirements Testing, consistency verification of software output vs the software specifications and requirements (Automotive Softwares).<br/>
						      • Performed Visual Inspection of graphical and textual assets (expected vs actual) for Embedded Automotive Softwares.<br/>
						      • Experience in Agile (sprint approach) and V-Model Software Engineering.
						      </p>
						    </div>
						  </li>
						</ul>
					</Col>

					<Col xs={12} className="p-1 my-3 my-md-1 p-md-4">
						<h4 className="m-0">• Intern</h4>
						<p className="m-0">3GX Solutions</p>
						<p className="m-0">April 2018 – June 2018</p>
						<ul className="list-group">
						  <li className="list-group-item d-flex justify-content-between align-items-start pt-3">
						    <div>
						      <p>
						      • Assisted in development of Web-Based Money Lending System using Laravel PHP Framework, HTML, CSS, JavaScript, and SQL.<br/>
						      • Acquired proficiency in Microsoft Office Applications.<br/>
						      </p>
						    </div>
						  </li>
						</ul>
					</Col>

				</Row>


		</>
	)
}