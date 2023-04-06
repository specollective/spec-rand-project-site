import Marcus from './RASquares/Rectangle_Marcus.svg';
import Nan from './RASquares/Rectangle_Nan.svg';
import Ilia from './RASquares/Rectangle_Ilia.svg';
import Alicia from './RASquares/Rectangle_Alicia.svg';
import Yoline from './RASquares/Rectangle_Yoline.svg';
import Victoria from './RASquares/Rectangle_Victoria.svg';
import Crystal from './RASquares/Rectangle_Crystal.svg';
import Joe from './RASquares/Rectangle_Joe.svg';
import Menoukha from './RASquares/Rectangle_Menoukha.svg';
import Ollie from './RASquares/Rectangle_Ollie.svg';
import Lu from './RASquares/Rectangle_Lu.svg';
import Dennis from "./RASquares/Rectangle_Dennis.svg";
import Jolin from "./RASquares/Rectangle_Joline.svg"
import Megan from "./RASquares/Rectangle_Megan.svg";
import Sharleen from "./RASquares/Rectangle_Sharleen.svg";
import Zaire from "./RASquares/Rectangle_Zaire.svg";
import Zara from "./RASquares/Rectangle_Zara.svg";
import Karishma from "./RASquares/Rectangle_Karishma.svg";

const projectsHash = {
	microcredential: {
		name: 'microcredenital',
		path: '/microcredentials',
		content: 'Microcredential Project',
	},
	gamingProj: {
		name: 'gamingProj',
		path: '/socio-cultural-gaming',
		content: 'Gaming Project',
	},
	impactProj: {
		name: 'impactProj',
		path: 'https://github.com/specollective/spec-website',
		content: 'Impact Project',
	},
	expressionsProj: {
		name: 'expressionsProj',
		path: 'https://medium.com/journal-of-engaged-research/about-the-exhibition-1d4b301ff441',
		content: 'Expressions Project',
	},
	journalProj: {
		name: 'journalProj',
		path: 'https://medium.com/journal-of-engaged-research',
		content: 'Journal of Engaged Research',
  },
  NCEIProj: {
		name: 'NCEIProj',
		path: '',
		content: 'National Coalition for Equity Impact',
	},
};

export const profileData = [
  {
    fullName: "Zara Abdurahaman",
    firstName: "Zara",
    title: "Junior Researcher",
    pic: Zara,
    alt: "Zara pic",
    linkedInLink: " https://www.linkedin.com/in/zara-abdurahaman",
    text: "Zara Fatima Abdurahaman is a Ph.D. student in the Technology Applications and Implications Stream at Pardee RAND Graduate School and an assistant policy analyst at RAND. She has a B.Eng. in electrical and electronics engineering from the University of Nottingham, Malaysia Campus, Asia Pacific. Her research interests include emerging technologies, artificial intelligence, machine learning, energy, labor and workforce management, and ethics.Prior to joining Pardee RAND, she was an engineer in the oil and gas sector, including at Halliburton Energy Services in Nigeria, where she designed and coordinated cementing operations. She was responsible for 2D/3D hydraulics design and software simulation, technical advising, logistics, strategic planning, and performance optimization for oil and gas wells in the Niger Delta. She was also a member of Halliburton’s Female Diversity Ambassador Team, which supports women in STEM fields.",
    projects: [projectsHash["gamingProj"], projectsHash["microcredential"]],
  },
  {
    fullName: "Yoline Banerjee",
    firstName: "Yoline",
    title: "Research Associate / Software Engineer",
    pic: Yoline,
    alt: "Yoline pic",
    linkedInLink: "https://www.linkedin.com/in/yolineb/",
    text: "Yoline Banerjee is a research associate for SPEC. With a B.A. in Sociology and a minor in Education from UC Berkeley, Yoline has worked in various educational roles. She then went into Health Services by managing COVID testing sites. After experiencing different programs and web applications that had her thinking, “there has to be a better way,” she pivoted into the tech industry and graduated from Hackbright’s software engineering program. She is excited to combine her passion for working with the community and developing her coding skills to build systems that will help people learn, grow, and thrive.",
    projects: [
      projectsHash["microcredential"],
      projectsHash["impactProj"],
      projectsHash["NCEIProj"],
    ],
  },
  {
    fullName: "Alicia Bong",
    firstName: "Alicia",
    title: "Project Manager",
    pic: Alicia,
    alt: "Alicia pic",
    linkedInLink: "https://www.linkedin.com/in/alicia-bong-a4400896/",
    text: "Alicia is a project manager focusing on team building and open communication. Her experience comes from multiple software adjacent roles in customer success and project management. She received her Bachelor’s Degree in English from SUNY Oneonta. Alicia presented at the first New Critics Undergraduate Literature and Composition Conference and was the Vice President of their chapter of the Sigma Tau Delta English Honors Society. Her interest in sustainability and social justice has led her to join the team at SPEC.",
    projects: [
      projectsHash["microcredential"],
      projectsHash["gamingProj"],
      projectsHash["impactProj"],
    ],
  },
  {
    fullName: "Menoukha Robin Case",
    firstName: "Menoukha",
    title: "Ph.D. Content Advisor",
    pic: Menoukha,
    alt: "Menouka pic",
    linkedInLink: "https://www.linkedin.com/in/menoukha-robin-case-982a611b4/",
    text: "Dr. Menoukha Robin Case is a SUNY Professor Emerita who holds an MA in Women’s & Gender Studies, an MA in Creative Writing, and a Ph.D. in English from SUNY University at Albany. Her dissertation addresses African Diaspora literature via Yoruba philosophy; her post-graduate work emphasizes Indigenous Studies. Academic publications include Introduction to Feminist Thought and Action (Routledge) and Weaving the Legacy: Remembering Paula Gunn Allen (West End Press). Creative publications include “Bead by Bead” in Talking Stick Native Arts Quarterly and “Burying Grandma” in Tidal Basin Review, awarded the Editors’ Prize for Best Prose in 2011. She serves on the boards of the Hamilton Hill Arts Center and the Ndakinna Education Center and on the Steering Committee of SPEC.",
    projects: [
      projectsHash["microcredential"],
      projectsHash["gamingProj"],
      projectsHash["impactProj"],
    ],
  },
  {
    fullName: "Lu Daley",
    firstName: "Lu",
    title: "Research Associate / Software Engineer",
    pic: Lu,
    alt: "Lu pic",
    linkedInLink: "https://www.linkedin.com/in/ludaley/",
    text: "Lu Daley is a research associate/software developer at SPEC. Lu’s research involves researching, creating, and testing full-stack solutions with accessibility in mind. His team is currently building a front-end design system, a full-stack learning management system, and contributing to other open source social justice, economic growth, and environmental sustainability projects.",
    projects: [projectsHash["gamingProj"]],
  },
  {
    fullName: "Joe Golden",
    firstName: "Joe",
    title: "Research Associate / Curator",
    pic: Joe,
    alt: "Joe pic",
    linkedInLink: "https://www.linkedin.com/in/joseph-golden-36a0465a/",
    text: "Joseph Golden is a research associate at SPEC and the organizations Arts & Equity virtual gallery curator. His research concentrates on the benefits of artmaking as a valuable means of self-representation and self-exploration, providing opportunities to discover and interpret ones identity. Joseph earned a masters degree in adult learning from SUNY Empire State College. He was awarded the Deans Medal for Excellence, recognizing his endeavors for leadership, service, knowledge, and practice in the field. Joseph is the co-editor of the Journal of Engaged Research, a SPEC publication featuring the work from marginalized voices.",
    projects: [
      projectsHash["microcredential"],
      projectsHash["expressionsProj"],
      projectsHash["journalProj"],
    ],
  },
  {
    fullName: "Megan Kim",
    firstName: "Megan",
    title: "Senior Game Designer",
    pic: Megan,
    alt: "Megan pic",
    linkedInLink: "https://www.linkedin.com/in/megan-kim-9475b179/",
    text: "Megan is a MA student in the Instructional Technology and Media program at Columbia University. She previously graduated with a BA in Psychology from Amherst College. Prior to Columbia, Megan worked in implementation and product management at Philips and launched a startup that used behavioral psychology to help individuals prioritize their personal relationships. Her research interests include merging her experience working in public interest law and civil rights with ethical technology design and behavioral psychology.",
    projects: [projectsHash["gamingProj"]],
  },
  {
    fullName: "Ilia de Leon",
    firstName: "Ilia",
    title: "Research Associate / Design Lead",
    pic: Ilia,
    alt: "Ilia pic",
    linkedInLink: "https://www.linkedin.com/in/iliadeleon/",
    text: "Ilia started off as a research associate with a focus in user experience design. She has since moved into the Design Lead role. She has a bachelor’s degree in Information Science and Policy from the University at Albany. Ilia has spent many years working with companies overseas collaborating on various sourcing, production, and logistics projects. More recently, Ilia has been focused on researching, understanding, and empathizing with users on their journey through digital products to create better experiences with usability, accessibility, and inclusiveness in mind.",
    projects: [
      projectsHash["gamingProj"],
      projectsHash["impactProj"],
      projectsHash["NCEIProj"],
    ],
  },
  {
    fullName: "Victoria Lo",
    firstName: "Victoria",
    title: "Research Associate / Software Engineer",
    pic: Victoria,
    alt: "Victoria pic",
    linkedInLink: "https://www.linkedin.com/in/victoria-lo/",
    text: "Victoria Lo graduated from San Jose State University with a B.S. in Health Science Administration. She has spent six years in Operations for health start-ups. She is curious by nature and fueled by the need to help others. Using websites, applications, and other technologies, she went from helping thousands of people in one clinic to millions across the nation. With that scale of impact, she knew coding would be her next journey. Victoria then completed a full-stack software engineering program to havedirect experience in building products that scale. With grit and armed with new skills, she is ready for a new challenge.",
    projects: [projectsHash["microcredential"], projectsHash["impactProj"]],
  },

  {
    fullName: "Sharleen Loh",
    firstName: "Sharleen",
    title: " ",
    pic: Sharleen,
    alt: "Sharleen pic",
    linkedInLink: "https://www.linkedin.com/in/sharleen-loh/",
    text: "Sharleen is an educational game design MS student at Columbia University Teachers College. She received a bachelor’s degree in psychology from Harvard University. She is passionate about making lifelong learning playful and accessible.",
    projects: [projectsHash["gamingProj"]],
  },
  {
    fullName: "Nan Eileen Mead",
    firstName: "Nan",
    title: "Research Lead",
    pic: Nan,
    alt: "Nan pic",
    linkedInLink: "https://www.linkedin.com/in/naneileenmead/",
    text: "Research Lead at Sustainable Progress & Equality Collective (SPEC) and Co-Editor of JoER. A longtime education advocate, Ms. Mead was twice elected by the NYS Legislature to serve as the Manhattan member of the Board of Regents, which oversees the State Education Department. Ms. Meads research focus is on diversity, equity, and inclusion in educational settings and in public policy.",
    projects: [
      projectsHash["microcredential"],
      projectsHash["journalProj"],
      projectsHash["impactProj"],
    ],
  },
  {
    fullName: "Karishma Mehta",
    firstName: "Karishma",
    title: "Junior Researcher",
    pic: Karishma,
    alt: "Karishma pic",
    linkedInLink: "https://www.linkedin.com/in/karishma-mehta-a7703338/",
    text: "Vitae aliquam turpis et, donec auctor posuere sagittis. Placerat nibh facilisis nulla placerat amet. Eros faucibus fringilla rhoncus elit sed dolor. Consequat condimentum praesent sem diam felis facilisis. Tristique sit aliquet ut in gravida vulputate porttitor et. Ultrices libero, neque gravida amet, erat odio maecenas. Eget aliquet diam nisl, potenti elit. Vestibulum lacus a dictumst facilisi elit diam dui at at. Magna lorem et accumsan, venenatis. ",
    projects: [projectsHash["gamingProj"], projectsHash["microcredential"]],
  },
  {
    fullName: "Dennis Morgan",
    firstName: "Dennis",
    title: "Lead Game Designer",
    pic: Dennis,
    alt: "Dennis pic",
    linkedInLink: "https://www.linkedin.com/in/dennisrmorgan/",
    text: "Dennis is a game designer with over 20 years of design, production, and development experience in education/serious games and games for entertainment. He is also the founder of Harlem CoLab, a digital workforce augmentation agency and social-impact organization that aims to bridge the digital divide in underserved communities. The organization builds a pipeline of talent for technology companies and drives a culture of innovation in New York City’s underserved communities. Mr. Morgan is an A’leilia Bundles Community Scholar at Columbia University.",
    projects: [projectsHash["gamingProj"]],
  },
  {
    fullName: "Ollie Oliver",
    firstName: "Ollie",
    title: "Research Associate / Curator",
    pic: Ollie,
    alt: "Ollie pic",
    linkedInLink: "https://www.linkedin.com/in/naneileenmead/",
    text: "Vitae aliquam turpis et, donec auctor posuere sagittis. Placerat nibh facilisis nulla placerat amet. Eros faucibus fringilla rhoncus elit sed dolor. Consequat condimentum praesent sem diam felis facilisis. Tristique sit aliquet ut in gravida vulputate porttitor et. Ultrices libero, neque gravida amet, erat odio maecenas. Eget aliquet diam nisl, potenti elit. Vestibulum lacus a dictumst facilisi elit diam dui at at. Magna lorem et accumsan, venenatis. Nullam vitae risus tincidunt sit suspendisse.",
    projects: [projectsHash["expressionsProj"]],
  },
  {
    fullName: "Zaire Overton",
    firstName: "Zaire",
    title: "Administrative Assistant IV for Special Projects",
    pic: Zaire,
    alt: "Zaire pic",
    linkedInLink: "https://www.linkedin.com/in/zaireoverton/",
    text: "Currently of RAND Corporation, serves as Administrative Assistant IV for Special Projects in the President's Office, and for the Center to Advance Racial Equity Policy (CAREP). Previously a Policy Staff Assistant for the County of Los Angeles’ Board of Supervisors, she served Supervisor Kuehl’s constituency for three years aiding policy implementation within the following sectors: Homelessness and Housing, Children and Family Welfare, Education, Budget, Sanitation, Parks and Recreations, Public Social Services, and Workforce Development. She is the co-founder of Career Opportunities for International Relations (COIR), an annual Human Resources recruiting event for young professionals hosted by the U.S. Department of State. Overton is an active member of the Pacific Council on International Policy, and a former executive board member for the West Coast Chapter of Women of Color Advancing Peace and Security (WCAPS). Overton also volunteers as coordinator to Consul General of Senegal Mame Mbaye, President, of the LA Consular Corps Spouses Association, and independently contracts as a graphic designer for social media content and campaigns. Formerly having served on the Los Angeles 2024 Olympic Bid Committee, Overton strives to promote international peace through sports, community, policy, and cultural exposure in daily life. She earned a degree in International Relations, with concentrations in International War & Conflict Studies and Global Cultural & Gender Studies, from the University of Southern California in 2017. Overton also initiated the creation of a minor in Brazilian Cultural Studies, becoming the first student at the university to ever obtain the accolade. She is a native English speaker, fluent in Portuguese and conversational in Spanish.",
    projects: [projectsHash["NCEIProj"]],
  },
  {
    fullName: "Crystal Shamsi",
    firstName: "Crystal",
    title: "Research Associate / Software Engineer",
    pic: Crystal,
    alt: "Crystal pic",
    linkedInLink: "https://www.linkedin.com/in/crystalshamsi/",
    text: "Crystal lives in Steamboat Springs, CO, and is a research associate at SPEC. She recently graduated from Hackbright Academy, learning full-stack web development and computer  science fundamentals. Crystal earned her M.S. in occupational therapy from Nova Southeastern University in 2013. As an occupational therapist, she dedicated herself to helping individuals gain the skills and tools necessary to achieve their utmost functional potential. Passionate about equality, empowerment, and justice for all people and populations, she is excited to blend her therapeutic and technological skills to expand her agency for positive impact.",
    projects: [projectsHash["microcredential"], projectsHash["impactProj"]],
  },
  {
    fullName: "Jie (Jolin) Shen",
    firstName: "Jolin",
    title: " ",
    pic: Jolin,
    alt: "Jolin pic",
    linkedInLink: "https://www.linkedin.com/in/jie-jolin-shen-4333b61b9/",
    text: "Jolin is a first-year master's student at Teachers College, Columbia University where she is majoring in Communication and Education. Jolin graduated from the University of Washington, Seattle in 2021 with a BA, double major in Communication and Cinema and Media Studies. She is interested in studying the role of communication technologies in education and has worked for various companies in the communication field.",
    projects: [projectsHash["gamingProj"]],
  },
  {
    fullName: "Marcus Steiner",
    firstName: "Marcus",
    title: "LMS Manager",
    pic: Marcus,
    alt: "Marcus pic",
    linkedInLink: "https://www.linkedin.com/in/msteiner12/",
    text: "Marcus Steiner is the LMS Manager for SPEC. He has a Bachelor’s Degree in Insurance and Risk Management and a Master’s degree in Global Comparative History. He has spent the entirety of his nonprofit career working with and leading human rights andequity-focused organizations as a Program Director, Operations/Development Director, and CEO. Marcus sits on the boards of the Sentinel Project and of Advocates Creating Change, organizations committed to creating peace and equality around the world. Currently, Marcus’ work examines how technology can be used both in human rights work and in DEI.",
    projects: [projectsHash["microcredential"], projectsHash["gamingProj"]],
  },
];