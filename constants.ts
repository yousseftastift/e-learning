
import { Course, Teacher, BlogArticle, Event, Testimonial, PartnerLogo, SyllabusItem, Lesson } from './types';

const LESSONS_BRAND_DESIGN: Lesson[] = [
  { id: 'bdl1', title: 'Understanding Brand Identity', duration: '25 mins', type: 'video', isCompleted: true },
  { id: 'bdl2', title: 'Core Principles of Design', duration: '40 mins', type: 'video', isCompleted: false },
  { id: 'bdl3', title: 'Quiz: Design Principles', duration: '15 mins', type: 'quiz' },
  { id: 'bdl4', title: 'Logo Design Fundamentals', duration: '60 mins', type: 'video' },
  { id: 'bdl5', title: 'Typography in Branding', duration: '30 mins', type: 'reading' },
];

const LESSONS_MARKETING_STRATEGY: Lesson[] = [
  { id: 'msl1', title: 'Introduction to Marketing Strategy', duration: '30 mins', type: 'video', isCompleted: true },
  { id: 'msl2', title: 'Market Research Techniques', duration: '45 mins', type: 'video', isCompleted: true },
  { id: 'msl3', title: 'Developing a Marketing Plan', duration: '50 mins', type: 'video', isCompleted: false },
  { id: 'msl4', title: 'Content Marketing Basics', duration: '35 mins', type: 'reading' },
];

const SYLLABUS_BRAND_DESIGN: SyllabusItem[] = [
  { id: 'bds1', title: 'Module 1: Introduction to Branding', lessons: LESSONS_BRAND_DESIGN.slice(0,2), duration: '1h 5m' },
  { id: 'bds2', title: 'Module 2: Visual Elements', lessons: LESSONS_BRAND_DESIGN.slice(2,5), duration: '1h 45m' },
];

const SYLLABUS_MARKETING_STRATEGY: SyllabusItem[] = [
  { id: 'mss1', title: 'Module 1: Foundations', lessons: LESSONS_MARKETING_STRATEGY.slice(0,2), duration: '1h 15m' },
  { id: 'mss2', title: 'Module 2: Execution', lessons: LESSONS_MARKETING_STRATEGY.slice(2,4), duration: '1h 25m' },
];


export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Brand Identity Design for Marketers',
    instructor: 'Sophie Moore',
    instructorId: '1',
    duration: '6 Weeks',
    price: 499,
    originalPrice: 699,
    thumbnailUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&crop=center',
    category: 'Design',
    rating: 4.8,
    reviewCount: 120,
    description: 'Learn how to create compelling brand identities that resonate with target audiences. This course covers everything from strategy to visual execution.',
    overview: 'This comprehensive course will guide you through the essentials of brand identity design. You will learn about color theory, typography, logo design, and creating brand guidelines. Perfect for marketers looking to enhance their design skills or designers wanting to specialize in branding.',
    syllabus: SYLLABUS_BRAND_DESIGN,
    level: 'Intermediate',
    studentsEnrolled: 1500,
    language: 'English',
    lastUpdated: '2024-07-01'
  },
  {
    id: '2',
    title: 'Digital Marketing Fundamentals',
    instructor: 'John Carter',
    instructorId: '2',
    duration: '8 Weeks',
    price: 599,
    thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
    category: 'Marketing',
    rating: 4.9,
    reviewCount: 250,
    description: 'Master the fundamentals of digital marketing, including SEO, SEM, social media marketing, and email marketing. Drive growth for your business.',
    overview: 'An in-depth look at the various channels and strategies in digital marketing. This course will equip you with the knowledge to plan, execute, and measure effective digital marketing campaigns. Suitable for beginners and those looking to update their skills.',
    syllabus: SYLLABUS_MARKETING_STRATEGY,
    level: 'Beginner',
    studentsEnrolled: 2200,
    language: 'English',
    lastUpdated: '2024-06-15'
  },
  {
    id: '3',
    title: 'Advanced JavaScript for Developers',
    instructor: 'Alice Wonderland',
    instructorId: '3',
    duration: '10 Weeks',
    price: 799,
    thumbnailUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop&crop=center',
    category: 'Development',
    rating: 4.7,
    reviewCount: 180,
    description: 'Dive deep into advanced JavaScript concepts, including closures, prototypes, async/await, and functional programming. Elevate your development skills.',
    overview: 'This course is for developers who want to take their JavaScript knowledge to the next level. We will explore complex topics and best practices to write efficient, scalable, and maintainable code. Includes practical exercises and projects.',
    syllabus: [...SYLLABUS_MARKETING_STRATEGY, ...SYLLABUS_BRAND_DESIGN], // Placeholder
    level: 'Advanced',
    studentsEnrolled: 950,
    language: 'English',
    lastUpdated: '2024-05-20'
  },
  {
    id: '4',
    title: 'UX Design: From Wireframe to Prototype',
    instructor: 'David Lee',
    instructorId: '4',
    duration: '7 Weeks',
    price: 549,
    originalPrice: 700,
    thumbnailUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop&crop=center',
    category: 'Design',
    rating: 4.9,
    reviewCount: 210,
    description: 'Learn the complete UX design process, from user research and wireframing to creating interactive prototypes. Build user-centered products.',
    overview: 'A hands-on course covering the entire UX design workflow. You will learn user research methods, persona creation, information architecture, wireframing, and prototyping using industry-standard tools. By the end, you will have a portfolio-ready project.',
    syllabus: SYLLABUS_BRAND_DESIGN, // Placeholder
    level: 'Intermediate',
    studentsEnrolled: 1800,
    language: 'English',
    lastUpdated: '2024-07-05'
  },
  {
    id: '5',
    title: 'Python for Data Science',
    instructor: 'Dr. Sarah Chen',
    instructorId: '5',
    duration: '12 Weeks',
    price: 899,
    originalPrice: 1199,
    thumbnailUrl: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=600&h=400&fit=crop&crop=center',
    category: 'Data Science',
    rating: 4.8,
    reviewCount: 340,
    description: 'Master Python programming for data analysis, visualization, and machine learning. Perfect for beginners and professionals.',
    overview: 'Comprehensive Python course covering NumPy, Pandas, Matplotlib, and Scikit-learn. Learn to analyze real-world datasets and build predictive models.',
    syllabus: SYLLABUS_BRAND_DESIGN, // Placeholder
    level: 'Beginner',
    studentsEnrolled: 2800,
    language: 'English',
    lastUpdated: '2024-06-20'
  },
  {
    id: '6',
    title: 'React.js Complete Bootcamp',
    instructor: 'Mike Johnson',
    instructorId: '6',
    duration: '8 Weeks',
    price: 699,
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop&crop=center',
    category: 'Development',
    rating: 4.7,
    reviewCount: 280,
    description: 'Build modern web applications with React.js, Redux, and modern JavaScript. From basics to advanced concepts.',
    overview: 'Learn React fundamentals, hooks, state management, routing, and deployment. Build 5 real-world projects including an e-commerce app.',
    syllabus: SYLLABUS_MARKETING_STRATEGY, // Placeholder
    level: 'Intermediate',
    studentsEnrolled: 1950,
    language: 'English',
    lastUpdated: '2024-07-10'
  },
  {
    id: '7',
    title: 'Social Media Marketing Mastery',
    instructor: 'Emma Rodriguez',
    instructorId: '7',
    duration: '6 Weeks',
    price: 449,
    thumbnailUrl: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop&crop=center',
    category: 'Marketing',
    rating: 4.6,
    reviewCount: 195,
    description: 'Master Instagram, Facebook, TikTok, and LinkedIn marketing. Create viral content and grow your audience.',
    overview: 'Learn platform-specific strategies, content creation, influencer marketing, and social media advertising across all major platforms.',
    syllabus: SYLLABUS_MARKETING_STRATEGY, // Placeholder
    level: 'Beginner',
    studentsEnrolled: 1650,
    language: 'English',
    lastUpdated: '2024-06-25'
  },
  {
    id: '8',
    title: 'Adobe Photoshop for Beginners',
    instructor: 'Alex Turner',
    instructorId: '8',
    duration: '5 Weeks',
    price: 299,
    thumbnailUrl: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&h=400&fit=crop&crop=center',
    category: 'Design',
    rating: 4.5,
    reviewCount: 420,
    description: 'Learn photo editing, digital art, and graphic design with Adobe Photoshop from scratch.',
    overview: 'Master layers, selections, filters, and advanced techniques. Create stunning graphics, edit photos professionally, and design marketing materials.',
    syllabus: SYLLABUS_BRAND_DESIGN, // Placeholder
    level: 'Beginner',
    studentsEnrolled: 3200,
    language: 'English',
    lastUpdated: '2024-05-15'
  },
  {
    id: '9',
    title: 'Machine Learning Fundamentals',
    instructor: 'Dr. Robert Kim',
    instructorId: '9',
    duration: '10 Weeks',
    price: 799,
    thumbnailUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center',
    category: 'Data Science',
    rating: 4.9,
    reviewCount: 156,
    description: 'Understand machine learning algorithms, neural networks, and AI concepts. Build your first ML models.',
    overview: 'Comprehensive introduction to supervised and unsupervised learning, deep learning basics, and practical implementation using Python.',
    syllabus: SYLLABUS_MARKETING_STRATEGY, // Placeholder
    level: 'Advanced',
    studentsEnrolled: 890,
    language: 'English',
    lastUpdated: '2024-07-01'
  },
  {
    id: '10',
    title: 'WordPress Website Development',
    instructor: 'Lisa Park',
    instructorId: '10',
    duration: '4 Weeks',
    price: 199,
    thumbnailUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&crop=center',
    category: 'Development',
    rating: 4.4,
    reviewCount: 380,
    description: 'Create professional websites with WordPress. No coding required - perfect for entrepreneurs and small businesses.',
    overview: 'Learn WordPress installation, theme customization, plugin management, SEO optimization, and e-commerce setup.',
    syllabus: SYLLABUS_BRAND_DESIGN, // Placeholder
    level: 'Beginner',
    studentsEnrolled: 2650,
    language: 'English',
    lastUpdated: '2024-06-10'
  },
  {
    id: '11',
    title: 'Email Marketing Strategy',
    instructor: 'James Wilson',
    instructorId: '11',
    duration: '3 Weeks',
    price: 249,
    thumbnailUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop&crop=center',
    category: 'Marketing',
    rating: 4.7,
    reviewCount: 225,
    description: 'Build effective email campaigns that convert. Learn automation, segmentation, and advanced email marketing tactics.',
    overview: 'Master email list building, campaign design, A/B testing, automation workflows, and performance analytics.',
    syllabus: SYLLABUS_MARKETING_STRATEGY, // Placeholder
    level: 'Intermediate',
    studentsEnrolled: 1420,
    language: 'English',
    lastUpdated: '2024-06-30'
  },
  {
    id: '12',
    title: 'Mobile App Design with Figma',
    instructor: 'Nina Patel',
    instructorId: '12',
    duration: '6 Weeks',
    price: 399,
    thumbnailUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center',
    category: 'Design',
    rating: 4.8,
    reviewCount: 167,
    description: 'Design beautiful mobile apps using Figma. Learn UI/UX principles, prototyping, and design systems.',
    overview: 'Complete mobile design workflow from wireframing to high-fidelity prototypes. Create design systems and handoff to developers.',
    syllabus: SYLLABUS_BRAND_DESIGN, // Placeholder
    level: 'Intermediate',
    studentsEnrolled: 1230,
    language: 'English',
    lastUpdated: '2024-07-08'
  },
  {
    id: '13',
    title: 'Google Analytics & Data Analysis',
    instructor: 'Tom Anderson',
    instructorId: '13',
    duration: '4 Weeks',
    price: 349,
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center',
    category: 'Marketing',
    rating: 4.6,
    reviewCount: 298,
    description: 'Master Google Analytics 4, track website performance, and make data-driven marketing decisions.',
    overview: 'Learn GA4 setup, custom reports, conversion tracking, audience analysis, and integration with other Google tools.',
    syllabus: SYLLABUS_MARKETING_STRATEGY, // Placeholder
    level: 'Intermediate',
    studentsEnrolled: 1780,
    language: 'English',
    lastUpdated: '2024-06-18'
  },
  {
    id: '14',
    title: 'Node.js Backend Development',
    instructor: 'Carlos Martinez',
    instructorId: '14',
    duration: '9 Weeks',
    price: 649,
    thumbnailUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center',
    category: 'Development',
    rating: 4.7,
    reviewCount: 189,
    description: 'Build scalable backend applications with Node.js, Express, and MongoDB. Learn REST APIs and authentication.',
    overview: 'Complete backend development course covering server setup, database design, API development, security, and deployment.',
    syllabus: SYLLABUS_MARKETING_STRATEGY, // Placeholder
    level: 'Advanced',
    studentsEnrolled: 1340,
    language: 'English',
    lastUpdated: '2024-07-03'
  },
  {
    id: '15',
    title: 'Content Writing & Copywriting',
    instructor: 'Rachel Green',
    instructorId: '15',
    duration: '5 Weeks',
    price: 299,
    thumbnailUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop&crop=center',
    category: 'Marketing',
    rating: 4.5,
    reviewCount: 312,
    description: 'Write compelling content that converts. Learn copywriting techniques for websites, ads, and email campaigns.',
    overview: 'Master persuasive writing, content strategy, SEO writing, and conversion optimization techniques.',
    syllabus: SYLLABUS_MARKETING_STRATEGY, // Placeholder
    level: 'Beginner',
    studentsEnrolled: 2100,
    language: 'English',
    lastUpdated: '2024-06-12'
  },
  {
    id: '16',
    title: 'Excel for Business Analytics',
    instructor: 'Kevin Brown',
    instructorId: '16',
    duration: '6 Weeks',
    price: 199,
    thumbnailUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center',
    category: 'Business',
    rating: 4.4,
    reviewCount: 445,
    description: 'Master advanced Excel functions, pivot tables, and data visualization for business decision making.',
    overview: 'Learn complex formulas, data analysis tools, dashboard creation, and automation with macros.',
    syllabus: SYLLABUS_BRAND_DESIGN, // Placeholder
    level: 'Intermediate',
    studentsEnrolled: 2890,
    language: 'English',
    lastUpdated: '2024-05-28'
  },
  {
    id: '17',
    title: 'Cybersecurity Fundamentals',
    instructor: 'Dr. Amanda Foster',
    instructorId: '17',
    duration: '8 Weeks',
    price: 599,
    thumbnailUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&crop=center',
    category: 'Technology',
    rating: 4.8,
    reviewCount: 134,
    description: 'Learn essential cybersecurity concepts, threat detection, and protection strategies for businesses.',
    overview: 'Comprehensive introduction to network security, ethical hacking, risk assessment, and incident response.',
    syllabus: SYLLABUS_MARKETING_STRATEGY, // Placeholder
    level: 'Intermediate',
    studentsEnrolled: 980,
    language: 'English',
    lastUpdated: '2024-07-12'
  },
  {
    id: '18',
    title: 'Project Management Professional',
    instructor: 'Michael Davis',
    instructorId: '18',
    duration: '10 Weeks',
    price: 749,
    thumbnailUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center',
    category: 'Business',
    rating: 4.6,
    reviewCount: 267,
    description: 'Master project management methodologies including Agile, Scrum, and traditional PM approaches.',
    overview: 'Complete PMP preparation course covering project lifecycle, risk management, team leadership, and certification prep.',
    syllabus: SYLLABUS_BRAND_DESIGN, // Placeholder
    level: 'Advanced',
    studentsEnrolled: 1560,
    language: 'English',
    lastUpdated: '2024-06-22'
  },
  {
    id: '19',
    title: 'Video Editing with Premiere Pro',
    instructor: 'Jordan Lee',
    instructorId: '19',
    duration: '7 Weeks',
    price: 449,
    thumbnailUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop&crop=center',
    category: 'Design',
    rating: 4.7,
    reviewCount: 203,
    description: 'Create professional videos with Adobe Premiere Pro. Learn editing, effects, color grading, and audio mixing.',
    overview: 'Complete video production workflow from import to export. Master transitions, effects, motion graphics, and professional techniques.',
    syllabus: SYLLABUS_BRAND_DESIGN, // Placeholder
    level: 'Intermediate',
    studentsEnrolled: 1670,
    language: 'English',
    lastUpdated: '2024-07-05'
  },
  {
    id: '20',
    title: 'Artificial Intelligence for Business',
    instructor: 'Dr. Priya Sharma',
    instructorId: '20',
    duration: '6 Weeks',
    price: 699,
    thumbnailUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center',
    category: 'Technology',
    rating: 4.9,
    reviewCount: 89,
    description: 'Understand AI applications in business, automation opportunities, and strategic implementation of AI solutions.',
    overview: 'Learn AI fundamentals, business applications, ethical considerations, and how to integrate AI into business processes.',
    syllabus: SYLLABUS_MARKETING_STRATEGY, // Placeholder
    level: 'Intermediate',
    studentsEnrolled: 750,
    language: 'English',
    lastUpdated: '2024-07-15'
  }
];

export const MOCK_TEACHERS: Teacher[] = [
  {
    id: '1',
    name: 'Sophie Moore',
    role: 'Lead Brand Strategist',
    bio: 'Sophie is a renowned brand strategist with over 10 years of experience helping businesses build memorable brands.',
    longBio: 'Sophie Moore is an award-winning brand strategist and designer with a passion for creating impactful brand experiences. She has worked with Fortune 500 companies and innovative startups, helping them define their brand voice and visual identity. Sophie believes that great design is rooted in a deep understanding of human psychology and market dynamics. She is dedicated to sharing her knowledge and empowering the next generation of creative professionals.',
    imageUrl: 'https://picsum.photos/seed/teacher1/300/300',
    socialLinks: [{ platform: 'LinkedIn', url: '#' }, { platform: 'Twitter', url: '#' }],
    expertise: ['Brand Strategy', 'Visual Identity', 'Design Thinking'],
    coursesTaughtIds: ['1'],
    videoIntroUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // placeholder
    quote: 'Design is not just what it looks like and feels like. Design is how it works.'
  },
  {
    id: '2',
    name: 'John Carter',
    role: 'Digital Marketing Expert',
    bio: 'John has successfully launched and scaled multiple online businesses through innovative digital marketing techniques.',
    longBio: 'John Carter is a seasoned digital marketing professional with over 15 years of experience in SEO, SEM, content marketing, and social media strategy. He has a proven track record of driving significant growth for businesses across various industries. John is known for his data-driven approach and his ability to adapt to the ever-changing digital landscape. He is passionate about teaching others how to leverage digital tools to achieve their business goals.',
    imageUrl: 'https://picsum.photos/seed/teacher2/300/300',
    socialLinks: [{ platform: 'Website', url: '#' }, { platform: 'LinkedIn', url: '#' }],
    expertise: ['SEO', 'PPC Advertising', 'Content Strategy', 'Social Media Marketing'],
    coursesTaughtIds: ['2'],
    quote: 'The best marketing doesn’t feel like marketing.'
  },
  {
    id: '3',
    name: 'Alice Wonderland',
    role: 'Senior Software Engineer',
    bio: 'Alice is a full-stack developer with expertise in JavaScript, Python, and cloud architectures.',
    longBio: 'Alice Wonderland is a highly skilled software engineer with a decade of experience in building complex web applications and distributed systems. She is proficient in multiple programming languages and frameworks, with a special focus on modern JavaScript and serverless technologies. Alice is an advocate for clean code, agile methodologies, and continuous learning. She enjoys mentoring junior developers and contributing to open-source projects.',
    imageUrl: 'https://picsum.photos/seed/teacher3/300/300',
    socialLinks: [{ platform: 'GitHub', url: '#' }, { platform: 'Twitter', url: '#' }],
    expertise: ['JavaScript', 'React', 'Node.js', 'AWS'],
    coursesTaughtIds: ['3'],
    videoIntroUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // placeholder
  },
   {
    id: '4',
    name: 'David Lee',
    role: 'UX Design Lead',
    bio: 'David is passionate about creating intuitive and engaging user experiences through research and design.',
    longBio: 'David Lee is a UX Design Lead with a strong background in user research, interaction design, and usability testing. He has led design teams on numerous projects, creating products that are both functional and delightful to use. David emphasizes a user-centered design approach and is skilled in translating complex user needs into elegant design solutions. He is dedicated to advancing the field of UX and mentoring aspiring designers.',
    imageUrl: 'https://picsum.photos/seed/teacher4/300/300',
    socialLinks: [{ platform: 'Dribbble', url: '#' }, { platform: 'LinkedIn', url: '#' }],
    expertise: ['User Research', 'Interaction Design', 'Prototyping', 'Usability Testing'],
    coursesTaughtIds: ['4'],
    quote: 'Good design is obvious. Great design is transparent.'
  }
];

export const MOCK_BLOG_ARTICLES: BlogArticle[] = [
  {
    id: '1',
    title: 'The Future of Remote Learning: Trends to Watch',
    date: 'July 15, 2024',
    category: 'Education',
    imageUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop&crop=center',
    author: 'Jane Doe',
    excerpt: 'Explore the evolving landscape of online education and the key trends shaping its future. From AI tutors to VR classrooms...',
    content: '<p>The world of education is undergoing a profound transformation, largely driven by technological advancements and shifting learner expectations. Remote learning, once a niche option, has become mainstream, and its evolution continues at a rapid pace.</p><h3>AI-Powered Personalization</h3><p>Artificial intelligence is set to revolutionize remote learning by offering personalized learning paths for each student. AI tutors can adapt to individual learning styles, provide instant feedback, and identify areas where students need extra support.</p><h3>Immersive Learning with VR/AR</h3><p>Virtual and augmented reality technologies are creating more engaging and immersive learning experiences. Imagine dissecting a virtual frog in biology class or exploring ancient Rome without leaving your home. These technologies make abstract concepts tangible and learning more memorable.</p>',
    tags: ['Remote Learning', 'EdTech', 'Future of Education']
  },
  {
    id: '2',
    title: '5 Essential Skills for a Career in Digital Marketing',
    date: 'July 10, 2024',
    category: 'Career',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
    author: 'John Carter',
    excerpt: 'Digital marketing is a dynamic field. Discover the top 5 skills you need to succeed and stay ahead of the curve.',
    content: '<p>Digital marketing is a constantly evolving field, requiring professionals to be adaptable and continuously learn new skills. Here are five essential skills for a thriving career in digital marketing:</p><ol><li><strong>Data Analysis:</strong> Understanding how to interpret data is crucial for optimizing campaigns and making informed decisions.</li><li><strong>SEO/SEM:</strong> Mastering search engine optimization and search engine marketing is key to driving organic and paid traffic.</li><li><strong>Content Creation:</strong> The ability to create compelling and valuable content across various formats (text, video, graphics) is highly sought after.</li><li><strong>Social Media Savvy:</strong> Knowing how to leverage different social media platforms to engage audiences and build brand presence is essential.</li><li><strong>Adaptability and Continuous Learning:</strong> The digital landscape changes rapidly, so a willingness to learn new tools and strategies is vital.</li></ol>',
    tags: ['Digital Marketing', 'Career Skills', 'Professional Development']
  },
  {
    id: '3',
    title: 'Mastering Color Theory in Design',
    date: 'July 5, 2024',
    category: 'Design',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop&crop=center',
    author: 'Sophie Moore',
    excerpt: 'Color is a powerful tool in design. This article breaks down the fundamentals of color theory and how to apply them effectively.',
    content: '<p>Color theory is a fundamental aspect of design that can significantly impact how a brand or product is perceived. Understanding the principles of color can help designers create visually appealing and emotionally resonant work.</p><h3>The Color Wheel</h3><p>The color wheel is the basic tool for combining colors. Primary colors (red, yellow, blue), secondary colors (green, orange, purple), and tertiary colors form the basis of color relationships.</p><h3>Color Harmonies</h3><p>Different color combinations, or harmonies, create different effects. Common harmonies include complementary, analogous, triadic, and monochromatic schemes.</p><h3>Color Psychology</h3><p>Colors evoke emotions and associations. For example, blue often conveys trust and stability, while red can signify passion or urgency. Understanding color psychology is crucial for branding and marketing.</p>',
    tags: ['Design', 'Color Theory', 'Branding']
  }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Brand Identity Design Q&A with Sophie Moore',
    date: 'August 1, 2024',
    time: '3:00 PM - 4:00 PM EST',
    location: 'Online Webinar',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&crop=center',
    shortDescription: 'Join Sophie Moore for a live Q&A session on brand identity design. Get your questions answered by an industry expert.',
    fullDescription: 'This is a unique opportunity to interact directly with Sophie Moore, a leading brand strategist. Whether you\'re a student, a marketer, or a designer, this session will provide valuable insights into creating powerful brand identities. Topics will include current trends, common challenges, and career advice.',
    speakerInfo: { name: 'Sophie Moore', title: 'Lead Brand Strategist' },
    schedule: [
      { time: '3:00 PM', activity: 'Introduction and Welcome' },
      { time: '3:10 PM', activity: 'Open Q&A with Sophie Moore' },
      { time: '3:50 PM', activity: 'Closing Remarks' }
    ],
    registrationLink: '#'
  },
  {
    id: '2',
    title: 'Workshop: SEO Strategies for 2024',
    date: 'August 15, 2024',
    time: '10:00 AM - 1:00 PM EST',
    location: 'Online Workshop',
    imageUrl: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop&crop=center',
    shortDescription: 'An interactive workshop covering the latest SEO techniques to boost your website\'s ranking and visibility.',
    fullDescription: 'Stay ahead in the SEO game with this intensive workshop led by digital marketing expert John Carter. You will learn about the latest algorithm updates, advanced keyword research, on-page and off-page optimization, and technical SEO best practices. This hands-on session includes practical exercises and real-world case studies.',
    speakerInfo: { name: 'John Carter', title: 'Digital Marketing Expert' },
    registrationLink: '#'
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah L.',
    role: 'Marketing Manager',
    quote: 'The courses on this platform are top-notch. I\'ve learned so much and applied it directly to my job, seeing real results!',
    imageUrl: 'https://picsum.photos/seed/test1/100/100'
  },
  {
    id: '2',
    name: 'Mike P.',
    role: 'Freelance Designer',
    quote: 'Incredible instructors and well-structured content. This platform has been a game-changer for my career development.',
    imageUrl: 'https://picsum.photos/seed/test2/100/100'
  },
  {
    id: '3',
    name: 'Linda K.',
    role: 'Student',
    quote: 'I love the flexibility and the quality of teaching. The community features are also a great way to connect with peers.',
    imageUrl: 'https://picsum.photos/seed/test3/100/100'
  }
];

export const MOCK_PARTNER_LOGOS: PartnerLogo[] = [
    { id: 'p1', name: 'Innovatech', logoUrl: 'https://via.placeholder.com/150x50/cccccc/888888?text=Innovatech' },
    { id: 'p2', name: 'FutureWorks', logoUrl: 'https://via.placeholder.com/150x50/cccccc/888888?text=FutureWorks' },
    { id: 'p3', name: 'EduSphere', logoUrl: 'https://via.placeholder.com/150x50/cccccc/888888?text=EduSphere' },
    { id: 'p4', name: 'LearnWell', logoUrl: 'https://via.placeholder.com/150x50/cccccc/888888?text=LearnWell' },
    { id: 'p5', name: 'SkillUp', logoUrl: 'https://via.placeholder.com/150x50/cccccc/888888?text=SkillUp' },
];

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'Teachers', path: '/teachers' },
  { name: 'Events', path: '/events' },
  { name: 'Blog', path: '/blog' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const PURCHASED_COURSE_LESSONS: Lesson[] = LESSONS_BRAND_DESIGN;
