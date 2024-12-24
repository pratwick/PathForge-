import Applicants from "./applicants.js";

export default class Jobs {
  applicantList = [
    new Applicants(
      1,
      "Applicant",
      "app@job.com",
      "1234567890",
      "uploads/Dummy.pdf"
    ),
  ];

  constructor(
    id,
    category,
    designation,
    location,
    company,
    salary,
    applyby,
    skills,
    numberOfOpening,
    postedDate
  ) {
    this.id = id;
    this.category = category;
    this.designation = designation;
    this.location = location;
    this.company = company;
    this.salary = salary;
    this.applyby = applyby;
    if (Array.isArray(skills)) {
      this.skills = skills;
    } else {
      this.skills = [skills];
    }
    this.numberOfOpening = numberOfOpening;
    this.postedDate = postedDate;
  }

  static getById(id) {
    return list.find((job) => job.id == id);
  }

  static addApplicant(jobID, name, email, contact, resumePath) {
    const job = this.getById(jobID);
    job.applicantList.push(
      new Applicants(
        job.applicantList.length + 1,
        name,
        email,
        contact,
        resumePath
      )
    );
  }

  static addJob(
    category,
    designation,
    location,
    company,
    salary,
    applyby,
    skills,
    numberOfOpening,
    postedDate
  ) {
    list.push(
      new Jobs(
        list.length + 1,
        category,
        designation,
        location,
        company,
        salary,
        applyby,
        skills,
        numberOfOpening,
        postedDate
      )
    );
  }

  static update(
    id,
    category,
    designation,
    location,
    company,
    salary,
    applyby,
    skills,
    numberOfOpening,
    postedDate
  ) {
    const index = list.findIndex((job) => job.id == id);
    list[index] = new Jobs(
      id,
      category,
      designation,
      location,
      company,
      salary,
      applyby,
      skills,
      numberOfOpening,
      postedDate
    );
  }

  static delete(id) {
    const index = list.findIndex((job) => job.id == id);
    list.splice(index, 1);
  }

  static getAll() {
    return list;
  }

  static search(text) {
    const tx = text.toLowerCase();
    return list.filter((job) => {
      const data = (
        job.category +
        job.designation +
        job.company +
        job.location +
        job.skills.join(" ")
      ).toLowerCase();
      return data.includes(tx);
    });
  }
}

var list = [
  new Jobs(
    1,
    "Tech",
    "MERN Developer",
    "Delhi",
    "Amazon",
    "30,00,000",
    "2024-07-31",
    ["React", "NodeJs", "MongoDB", "Express"],
    5,
    "30/6/2024, 6:41:10 pm"
  ),
  new Jobs(
    2,
    "Tech",
    "JAVA Developer",
    "Mumbai",
    "Wipro",
    "12,00,000",
    "2024-08-10",
    ["Java", "Data Structures & Algo"],
    5,
    "30/6/2024, 6:41:53 pm"
  ),
  new Jobs(
    3,
    "Tech",
    "DevOps",
    "Chennai",
    "Infosys",
    "19,00,000",
    "2024-09-07",
    ["C++", "Data Structures & Algo"],
    2,
    "30/6/2024, 6:43:33 pm"
  ),

  new Jobs(
    2,
    "Tech",
    "Web Development Intern",
    "Pune",
    "TwiLearn",
    "23,00,000",
    "2024-11-12",
    ["NodeJS", "MongoDB","Express"],
    7,
    "2/02/2025 8:41:12 pm"
  ),
 

  new Jobs(
    2,
    "Tech",
    "Software Development Engineer II",
    "Bengaluru, Karnataka, India",
    "Flipkart",
    "22,00,000",
    "2025-01-15",
    ["React", "NodeJS", "MongoDB","Express"],
    8,
    "25/02/2025 5:25:34 pm"
  ),

  new Jobs(
    2,
    "Tech",
    "Software Engineer (Frontend)",
    "Bengaluru, Karnataka, India",
    "PayPal",
    "32,00,000",
    "2025-02-28",
    ["HTML5", "CSS3", "Webpack", "Bootstrap"],
    4,
    "5/03/2025 12:30:23 pm"
  ),


  new Jobs(
    5,
    "Tech",
    "Frontend Developer SDE-1",
    "Bengaluru, Karnataka, India",
    "Physics      Wallah",
    "12,00,000",
    "2025-01-22",
    ["HTML5", "CSS3","JavaScript","React"],
    6,
    "2/03/2025 4:15:11 pm"
  ),

  new Jobs(
    5,
    "Tech",
    "Computer Scientist- I",
    "Bengaluru, Karnataka, India",
    "Adobe",
    "25,00,000",
    "2024-12-22",
    ["AWS", "Azure", "Kubernetes", "Docker" ],
    8,
    "1/02/2025 3:20:15 pm"
  ),

  new Jobs(
    3,
    "Tech",
    "Software System Designer 2",
    "Bengaluru, Karnataka, India",
    "AMD",
    "30,00,000",
    "2024-07-22",
    ["C/C++", "Fortran" ],
    7,
    "5/02/2025 2:30:11 pm"
  ),


  new Jobs(
    4,
    "Tech",
    "System Software Engineer",
    "Pune, Maharashtra, India",
    "NVIDIA",
    "45,00,000",
    "2025-02-20",
    ["OpenGL", "CUDA","C++","Vulkan"," Direct3D"],
    7,
    "2/03/2025 3:05:15 pm"
  ),

  new Jobs(
    3,
    "Tech",
    "SDE-1",
    "Bangalore, Karnataka, India",
    "ShareChat",
    "32,00,000",
    "2025-02-28",
    ["Node.js", "Python", "Java", "DynamoDB", "Redis" ,"Elastic"],
    6,
    "10/03/2025 6:00:15 pm"
  ),


  new Jobs(
    3,
    "Tech",
    "Software Engineer II",
    "Hyderabad, Telangana, India",
    "Microsoft",
    "36,00,000",
    "2025-02-7",
    ["Node.js", "Python", "Java", "DynamoDB", "Redis" ,"Elastic"],
    6,
    "12/03/2025 8:00:00 pm"
  ),


  new Jobs(
    3,
    "Tech",
    "Web Developer",
    "Indore, Madhya Pradesh, India",
    "AnyLxWork",
    "20,00,000",
    "2025-02-13",
    ["PHP", "Wordpress", "CodeIgniter", "Laravel", "CakePHP"],
    6,
    "10/03/2025 7:15:00 pm"
  ),

  new Jobs(
    3,
    "Tech",
    "Software Engineer",
    "Ahmedabad, Gujarat, India",
    "PrimefactorX",
    "12,00,000",
    "2025-01-23",
    [ "Python", "Javascript", "SQL", "NoSQL"],
    5,
    "13/03/2025 8:00:00 pm"
  ),

  new Jobs(
    3,
    "Tech",
    "Software Engineer",
    "Ahmedabad, Gujarat, India",
    "Taksheel Tech",
    "12,00,000",
    "2025-01-23",
    [ "Python", "Javascript", "SQL", "NoSQL"],
    5,
    "13/03/2025 8:00:00 pm"
  ),


  new Jobs(
    4,
    "Tech",
    "Full Stack Web Developer",
    "Mumbai Metropolitan Region",
    "Letsintern.in",
    "8,00,000",
    "2025-02-12",
    [ "Node.js", "Express.js", "MongoDB", "HTML" ,"CSS", "JavaScript"],
    7,
    "18/03/2025 4:00:00 pm"
  ),

  new Jobs(
    3,
    "Tech",
    "Software Test Engineer",
    "Indore, Madhya Pradesh, India ",
    "Civica",
    "10,00,000",
    "2025-02-27",
    ["Python", "JavaScript", "AWS", "Azure" ],
    5,
    "30/03/2025 2:00:00 pm"
  ),

  new Jobs(
    1,
    "Tech",
    "Web Development",
    "Remote",
    "CyberSocial",
    "9,00,000",
    "2025-02-2",
    ["NodeJS", "MongoDB", "React", "JavaScript"],
    4,
    "3/03/2025 3:10:00 pm"
  ),

  new Jobs(
    4,
    "Tech",
    "Web Developer",
    "Kota, Rajasthan, India",
    "SpiceGems",
    "13,00,000",
    "2025-02-15",
    ["HTML", "CSS", "JavaScript", "BootStrap"],
    8,
    "13/03/2025 8:00:00 pm"
  ),

  new Jobs(
    3,
    "Tech",
    "Software Engineer",
    "Remote",
    "BroStack",
    "17,00,000",
    "2025-02-05",
    ["NodeJS", "MongoDB", "React", "JavaScript"],
    7,
    "13/03/2025 8:00:00 pm"
  ),
  new Jobs(
    2,
    "Tech",
    "Frontend Engineer II",
    "Pune, Maharashtra, India",
    "OpenTable",
    "12,00,000",
    "2025-02-13",
    ["Redux", "Typescript", "NodeJS", "React"],
    5,
    "13/03/2025 7:30:00 pm"
  ),


   

];
