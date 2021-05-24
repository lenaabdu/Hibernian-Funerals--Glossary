import React from "react";
import Logo from "./nav";
import Menubar from "./navbar";
import { GoPlus } from "react-icons/go";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
class Glossary extends React.Component {
  render() {
    return (
      <>
       <Container fluid>
          <h2>Glossary of Terms</h2>
          <br />
          <Accordion>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> A{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Autopsy{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Please see Post Mortem</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>{" "}
                      <GoPlus/> Advanced Health care Directive (AHD){" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> An Advance Healthcare Directive, sometimes known as a
                      'living will', is a statement about the type and extent of
                      medical or surgical treatment you want in the future, on
                      the assumption that you will not be able to make that
                      decision at the relevant time. The Assisted
                      Decision-Making (Capacity) Act 2015 provides a legal
                      framework for Advance Healthcare Directives in Ireland.
                      The Act was signed into law on 30 December 2015 but has
                      not yet been commenced to bring it into effect.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br />
              
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Administrator{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Is the person responsible for managing the estate of a
                      person who has died if they had not written a will, not
                      named an executor in their will, or the executor they had
                      named has renounced their responsibilities. See Executor
                      and Letters of Administration.
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </Card.Body>
            </Accordion.Collapse>
          </Accordion>
          <br />
          <Accordion>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> B{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Budget{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>In this instance an estimate of expenditure for a set period of time for the costs that can occur relating to someones death or funeral.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Bereavement
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> Bereavement is the experience of someone close to you dying.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br />
              
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Body donation{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    Is the act of leaving your body to a medical school for scientific research after you have died.
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion></Card.Body>
            </Accordion.Collapse>
          </Accordion>
          <Accordion><br/>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> C{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Cremation{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>The disposal of a dead person's body by burning it to ashes and is an alternative to the burial or interment of an intact dead body.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Casket
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> A casket is a type of coffin distinguished by its rectangular shape.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br />
              
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Celebrant{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    Performs Civil Funeral Ceremony via a dignified and formal non-religious ceremony to commemorate a loved one's life and parting.
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion><br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Coroner
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> Their core function is to investigate sudden and unexplained deaths so that a death certificate can be issued. The coroner is a public service that not only provides closure for those bereaved suddenly but also performs a wider public service by identifying matters of public interest that can have life/death consequences.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br />
              
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Columbarium{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    A columbarium is a place for the interment of urns containing cremated remains. They’re often located in graveyards, chapels, or memorial gardens, and contain numerous small compartments, or niches, designed to hold urns.
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion></Card.Body>
            </Accordion.Collapse>
          </Accordion><br/>
          <Accordion>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> D{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Death Notification Form{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Following a death, a registered medical practitioner who attended the deceased must complete and sign part 1 of the Death Notification Form (DNF).
This form is given to a relative or civil partner of the deceased. This form is then used to register the death. A relative, civil partner or another qualified informant must register the death within 3 months of the death occurring.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Death Certificate
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> Registering a death and obtaining Death Certificates?
You need to know the date and place of the death and the full name and surname of the deceased, the deceased’s gender, marital status, age or date of birth and the deceased’s occupation (or that of the spouse or parent). You must also have a Medical Certificate of the cause of death The Death Certificate is issued by the Registrar of Births, Deaths and Marriages. You are usually able to get a Death Certificate immediately when you register the death.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br />
              
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Disbursements{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    Charges paid out on your behalf and can include items such as  cremation fees, Doctor's fee, and other 3rd party costs. 
NOTE : Hibernian Funerals pricing is unique in including all disbursements, so you will have no extra charges.
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion></Card.Body>
            </Accordion.Collapse>
          </Accordion>
          <Accordion><br/>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> E{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Embalming{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Embalming is achieved by the injection of a treated solution of chemicals into the circulatory system. This returns the deceased to an appearance more similar to when they were alive.
Embalming is best summarized to achieve the following objectives (PPP)
P = Preservation
P = Prevention
P = Protection</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Eulogy
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> A eulogy or remembrance may be given by a member of the family or a close friend. The eulogy should offer praise and commendation and celebrate the life of the person who has lived. The family is responsible for making this decision.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br />
              
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Estate{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    An estate is everything owned by a person at the time of their death, including finances, money indebted to them, shares, property and personal possessions.
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion><br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Executor
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> An executor is someone named in a will as the person responsible for managing the estate of someone who has died, usually a close friend or family member.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                
              </Card.Body>
            </Accordion.Collapse>
          </Accordion>
         
          <Accordion><br/>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> F{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Funeral{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>A funeral is a ceremony for celebrating, honouring, and remembering the life of a person who has passed away. While specific customs, traditions, and practices differ across different cultures and religions, all funerals serve the key purpose of giving the bereaved a special time and place to say goodbye and find comfort and healing in one another.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Funeral Director
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> A funeral director is a professional who specializes in all aspects of funerals and related services. They provide support to the family, guide the arrangement of visitations and funeral ceremonies, prepare the deceased
according to the family’s wishes, and ensure that everything goes according to plan. They also arrange for the removal and transportation of the deceased throughout the process, and assist families with any legal or insurance-related paperwork they might need to file.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
               
              
                <Accordion> <br />
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> First offices{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    Is the process of making a person who has died suitable for their loved ones to view, such as cleaning and washing the body, dressing them and applying makeup.
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion></Card.Body>
            </Accordion.Collapse>
          </Accordion><br/>
          <Accordion>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> G{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Grant Bereavement{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>The Bereavement Grant stopped at the end of 2013. Please see Supplementary Welfare Allowance.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Grave
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>A hole dug in the ground to receive a coffin, ashes in a container or dead body, typically marked by a stone or mound.
Can be the most significant difference between the cost of a burial and a cremation if a new family has to be purchased for the burial.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br />
              
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Green funeral{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    A green funeral is a funeral that uses environmentally-friendly practices and materials, such as natural burial and biodegradable coffins. It is sometimes referred to as green burial, natural burial or woodland burial.
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion><br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Grief
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> Grief is the emotional and physical experience of loss and pain experienced by a bereaved person after someone close to them has died. A grief counsellor is a therapist who specializes in supporting people who are grieving after a bereavement.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                
              </Card.Body>
            </Accordion.Collapse>
          </Accordion>
          <Accordion><br/>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> H{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Hospice{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>A home providing care for the sick or terminally ill.
Hospice care can be provided in various care settings, such as a hospice, people’s homes, a hospital or a nursing home.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Hospice care
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> Hospice care aims to improve the lives of people whose illness is no longer curable. It helps them to live as fully as possible to the end. It seeks to relieve the physical symptoms of illness while equally addressing the patient’s emotional and spiritual needs. Hospice care also provides support to families and those who are important to the patient, and extends its reach into bereavement.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br />
              
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Headstone{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    Gravestonr or memorial is a slab of stone set up normally at the head of a grave, typically inscribed with the name and details of the dead person.
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion><br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Hearse
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> A hearse is a vehicle specially designed to carry a coffin or casket.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br />
              
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Humanist{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    A humanist funeral is a secular funeral based on humanist beliefs that focuses on the life and personality of the person who has died rather than the afterlife. Usually led by a Humanist celebrant.
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion></Card.Body>
            </Accordion.Collapse>
          </Accordion>
          <Accordion><br/>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> I{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Inquest{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>An inquest is an investigation by a coroner in if the cause of someone's death, or their identity, is unclear.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Intern
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> Or burial is is the act of placing a coffin or casket containing the body of someone who has died in a grave. Urns containing cremated ashes can also be buried.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br />
              
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Intestate{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    Intestate is the status of a person who has died without writing a will.
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion></Card.Body>
            </Accordion.Collapse>
          </Accordion>
          <Accordion><br/>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> L{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Letter of Administration{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Is the legal authorisation to act as the administrator of the estate of someone who has died.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Living Will
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> Please see Advanced Healthcare Directive (AHD).</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                </Card.Body>
            </Accordion.Collapse>
          </Accordion>
          <Accordion><br/>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> M{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Mortuary{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>A mortuary is a room, usually in a hospital or funeral home, where the bodies of people who have died are kept and cared for before they are collected for their funeral. The family of a person who has died can usually view their loved one in the mortuary.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              
                </Card.Body>
            </Accordion.Collapse>
          </Accordion>
          <Accordion><br/>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> N{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Next of Kin{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>A person's next of kin (NOK) is that person's closest living blood relative or relatives. Some countries, such as the United States, have a legal definition of "next of kin". In other countries, such as the Ireland, "next of kin" may have no legal definition and may not necessarily refer to blood relatives at all I.e that NOK should be contacted in the event of an emergency.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              
                </Card.Body>
            </Accordion.Collapse>
          </Accordion>
          <Accordion><br/>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus />O{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Offices{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>As in last offices, or laying out, is the procedures performed, usually by a nurse, to the body of a dead person shortly after death has been confirmed. 
The deceased is prepared for the mortuary, to comply with legislation (in particular if a Coroner will be involved) as well as to minimise any risk of cross-infection to relative, health care worker or other person who may need to handle the deceased.
It will vary between hospitals and between cultures.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Obituaries
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> An announcement on a website or in a newspaper  announcing someone’s death. Often it will describe their life and how much they meant to their family. It may also include details of when and where the funeral is happening.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                </Card.Body>
            </Accordion.Collapse>
          </Accordion>
          <Accordion><br/>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> P{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Probate{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Probate is the legal authority to manage a loved one’s estate after they die.coroners who also want to perform autopsies must have a degree in pathology.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Post mortem
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> A post mortem (sometimes called an autopsy) is an examination carried out by a pathologist after a death where is necessary to establish the medical cause of death. The majority of deaths do not require any post mortem because the medical cause of death can be certified by a doctor who has been treating the deceased in the months prior to the death, i.e. a GP or hospital doctor.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br />
              
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Pallative Care{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    The terms ‘hospice care’ and ‘palliative care’ are sometimes used interchangeably. Palliative care is the term generally used by those working in the health service. Palliative Medicine is a recognised medical specialty in Ireland.
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion><br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Pauper's grave
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> A pauper's grave is a grave provided by a local authority for someone who has received a public health funeral, sometimes shared with other people.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
               
              </Card.Body>
            </Accordion.Collapse>
          </Accordion>
          <Accordion><br/>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> R{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Repatriation{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Appropriate paperwork e.g. death certificate, out of state papers, coroner's certificates dealing with various embassies.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> RIP.ie
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> Free of charge website where death notices can be viewed online. A death notice is an announcement placed in a newspaper announcing someone’s death and details of their funeral.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br />
              
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Religious Funeral{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    When you have went over the funeral arrangements with us we will then liase with the Church on your behalf and pass on an appointed family members contact details. A priest or member of a Bethany team will then be in contact with that family member to discuss the ceremony.
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion></Card.Body>
            </Accordion.Collapse>
          </Accordion>
          <Accordion><br/>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> S{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Supplementary Welfare Allowance (SWA){" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>The (SWA) scheme is operated by the Health Boards. No social insurance contributions are required as payment is based on the means of the person responsible for paying the funeral bill. You should apply to your local Community Welfare Officer at your local Health Centre before you pay the funeral bill, as the cheque will be issued to the undertaker/funeral director.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Service
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> A ceremony that reflects the wishes of the family and those of the deceased. It is a highly personal tribute created by the executor or family in consultation with a professional Celebrant.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                </Card.Body>
            </Accordion.Collapse>
          </Accordion>
          <Accordion><br/>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> U{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Unattended{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>An unattended (or direct) cremation is a simple cremation without a funeral taking place with the funeral director. There are no mourners in attendance, so if you'd like a memorial service for your loved one, you can do so at a date, location and time of your choosing.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br/>
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      <GoPlus/> Undertaker
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body> Please see F - Funeral Director.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
                <br />
              
                <Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Unexpected death{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    If the death is unexpected or the deceased has not seen their G.P. in the last 28 days or a Death Notification Form cannot be issued, the death will be reported to the coroner, this usually but not always leads to a Post-Mortem (Autopsy) taking place.
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion></Card.Body>
            </Accordion.Collapse>
          </Accordion>
          <Accordion><br/>
            <Accordion.Toggle
              className="bg-white "
              variant="link"
              eventKey="0"
              style={{ outlineStyle: "none", border: " 0px solid green" }}
            >
              <h3>
                {" "}
                <GoPlus /> W{" "}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Accordion>
                  <Accordion.Toggle
                    className="bg-white "
                    variant="link"
                    eventKey="0"
                    style={{ outlineStyle: "none", border: " 0px solid green" }}
                  >
                    <h5>
                      {" "}
                      <GoPlus /> Wake{" "}
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>The Irish Wake is a funeral traditions associated with Ireland that is seen less often in modern Ireland, especially in the cities. But in many country areas the practice of watching over the recently deceased from the time of death to burial is still followed and is an important part of the grieving process.</Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              
                </Card.Body>
            </Accordion.Collapse>
          </Accordion>
          </Container>
      </>
    );
  }
}
export default Glossary;
