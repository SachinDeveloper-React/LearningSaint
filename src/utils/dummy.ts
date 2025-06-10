import {Colors} from '../lib';

export const categories = [
  {
    id: 1,
    title: 'SAP ERP',
    data: [
      {
        id: 1,
        name: 'SAP MM(Material Management)',
        navigate: 'https://www.learningsaint.com/sap-mm-hana-training',
      },
      {
        id: 2,
        name: 'SAP FICO(Finance & Controlling)',
        navigate: 'https://www.learningsaint.com/sap-fifo-finance-controlling',
      },
      {
        id: 3,
        name: 'SAP SD(Sales & Distribution)',
        navigate: 'https://www.learningsaint.com/sap-sd-sales-distribution',
      },
      {
        id: 4,
        name: 'SAP PP(Production & Planning)',
        navigate: 'https://www.learningsaint.com/sap-pp-production-planning',
      },
      {
        id: 5,
        name: 'SAP ABAP Developer',
        navigate: 'https://www.learningsaint.com/sap-abap-developer',
      },
      {
        id: 6,
        name: 'SAP BASIS Admin & HANA',
        navigate: 'https://www.learningsaint.com/sap-basis-admin-hana',
      },
    ],
  },
  {
    id: 2,
    title: 'Data Science',
    data: [
      {
        id: 1,
        name: 'PGP in Data Science',
        navigate: 'https://www.learningsaint.com/data-science',
      },
      {
        id: 2,
        name: 'Professional in Data Science',
        navigate: 'https://www.learningsaint.com/professional-in-data-science',
      },
      {
        id: 3,
        name: 'Masters in Data Science',
        navigate: 'https://www.learningsaint.com/master-in-data-science',
      },
    ],
  },
  {
    id: 3,
    title: 'Cyber Security',
    data: [
      {
        id: 1,
        name: 'PGP in Cyber Security',
        navigate: 'https://www.learningsaint.com/pgp-in-cyber-security',
      },
      {
        id: 2,
        name: 'Professional in Cyber Security',
        navigate:
          'https://www.learningsaint.com/professional-in-cyber-security',
      },
      {
        id: 3,
        name: 'Masters in Cyber Security',
        navigate: 'https://www.learningsaint.com/master-in-cyber-security',
      },
    ],
  },
  {
    id: 4,
    title: 'Digital Marketing',
    data: [
      {
        id: 1,
        name: 'Digital Marketing',
        navigate: 'https://www.learningsaint.com/digital-marketing',
      },
    ],
  },
  {
    id: 5,
    title: 'Full Stack Development',
    data: [
      {
        id: 1,
        name: 'Full Stack Development',
        navigate: 'https://www.learningsaint.com/full-stack-development',
      },
    ],
  },
  {
    id: 6,
    title: 'Learn Excel',
    data: [
      {
        id: 1,
        name: 'Learn Excel',
        navigate: 'https://www.learningsaint.com/learn-excel',
      },
    ],
  },
  {
    id: 7,
    title: 'Adobe Firefly and Photoshop',
    data: [
      {
        id: 1,
        name: 'Adobe Firefly',
        navigate: 'https://www.learningsaint.com/adobe-firefly',
      },
    ],
  },
  {
    id: 8,
    title: 'Freelance',
    data: [
      {
        id: 1,
        name: 'Freelance Mastery',
        navigate: 'https://www.learningsaint.com/freelance-mastery',
      },
    ],
  },
  {
    id: 9,
    title: 'PDP Course',
    data: [
      {
        id: 1,
        name: 'Job Oriented Personality Grooming Program',
        navigate:
          'https://www.learningsaint.com/job-oriented-personality-grooming-program',
      },
    ],
  },
];

export const banners = [
  {
    id: 1,
    pre_title: 'Learn New Things Daily',
    title: 'Free Bootcamps',
    description:
      'Define your career pathway with excellence that demands more than just a degree. Get started on gaining specialized skills and expertise. Unlock your potential and stand out in your field. Learning Saint offers the opportunity to invest in world-class training. Craft your future today, and propel your career pathway to excellence and success.',
    img: 'https://www.learningsaint.com/assets/images/banner/banner-03/image-new.png',
    navigate: '',
  },
  {
    id: 2,
    pre_title: 'Learn New Things Daily',
    title: '100% Job Guarantee',
    description:
      'Define your career pathway with excellence that demands more than just a degree. Get started on gaining specialized skills and expertise.',
    img: 'https://www.learningsaint.com/assets/images/banner/banner-03/job-guarantee.png',
    navigate: '',
  },
  {
    id: 3,
    pre_title: 'Learn New Things Daily',
    title: 'Earn while you Learn',
    description:
      'Unlock your potential and stand out in your field. Learning Saint offers the opportunity to invest in world-class training. Craft your future today, and propel your career pathway to excellence and success.',
    img: 'https://www.learningsaint.com/assets/images/banner/banner-03/image-02.png',
    navigate: '',
  },
  {
    id: 4,
    pre_title: 'Learn New Things Daily',
    title: 'Professional & Corporate Trainings',
    description: '',
    img: 'https://www.learningsaint.com/assets/images/banner/banner-04/banner-03.png',
    navigate: '',
  },
  {
    id: 5,
    pre_title: 'Learn New Things Daily',
    title: 'Education Is A Path To Success In Life',
    description: '',
    img: 'https://www.learningsaint.com/assets/images/banner/banner-01/image-06.png',
    navigate: '',
  },
];

export const domain: {
  id: string;
  name: string;
  selectColor: string;
  isChecked: boolean;
}[] = [
  {
    id: '1',
    name: 'MBA',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '2',
    name: 'Data Science & Analytics',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '3',
    name: 'Study Abroad',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '4',
    name: 'Software Tech',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '5',
    name: 'Management',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '6',
    name: 'AI & ML',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '7',
    name: 'Marketing',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '8',
    name: 'Law',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '9',
    name: 'Doctorate',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '10',
    name: 'For Collage Student',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
];

export const courseCategories: {
  id: string;
  name: string;
  selectColor: string;
  isChecked: boolean;
}[] = [
  {
    id: '1',
    name: 'SAP ERP',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '2',
    name: 'Data Science',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '3',
    name: 'Cyber Security',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '5',
    name: 'Digital Marketing',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '6',
    name: 'Full Stack Development',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
];

export const hightest_qulification: {
  id: string;
  name: string;
  isChecked: boolean;
  selectColor: string;
}[] = [
  {
    id: '1',
    name: 'Completed Bachelors or UG Degree',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '2',
    name: 'Completed Post Graduation',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '3',
    name: 'Pursuing Bachelors or UG Degree',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
  {
    id: '4',
    name: 'In class 12th or below',
    isChecked: false,
    selectColor: Colors.dark.tabIconSelected,
  },
];

export const Payments = [
  {
    id: 1,
    name: 'Razorpay',
    icon: 'https://www.learningsaint.com/assets/images/payment/razorpay.png',
    country: ['IN', 'US'],
    enable: true,
  },
  {
    id: 2,
    name: 'Stripe',
    icon: 'https://www.learningsaint.com/assets/images/payment/stripe.png',
    country: ['US', 'IN'],
    enable: false,
  },
];

export const allCourses = [
  {
    id: 1,
    title: 'SAP MM (Material Management)',
    tag: ['SAP ERP Courses'],
    categories: 'SAP ERP',
    image:
      'https://www.learningsaint.com/assets/images/course_img/sap__mm.webp',
    navigate: 'SapErpDetailScreen',
    url: 'sap-mm-hana-training',
    breadcrumb: ['Home', 'SAP ERP', 'SAP MM (Material Management)'],
    course_detail: {
      list: false,
      title: 'SAP MM(Material Management)',
      des: 'SAP Material Management encompasses a comprehensive range of tasks within the supply chain, including consumption-based planning, purchasing, vendor evaluation, and invoice verification. This module also integrates inventory management, production planning, and warehouse management, providing a cohesive solution for efficient and streamlined operations.',
      add: {
        isEnable: false,
        title: 'IN Collaboration With IBM & Microsoft',
        img: 'https://www.learningsaint.com/assets/images/ibm_mircosoft.png',
      },
      edu_meta: [
        {
          id: 1,
          title: 'Type',
          value: 'Cyber Security',
        },
        {
          id: 2,
          title: 'Duration',
          value: '12 Months',
        },
        {
          id: 3,
          title: 'Classes',
          value: 'Online Classes',
        },
      ],
      image:
        'https://www.learningsaint.com/assets/images/course_img/sap__mm.webp',

      general_data_grouth: {
        title: {
          f: 'What our',
          s: 'learnes have achieved?',
        },
        sub_title:
          ' A quick summary of the placement A quick summary of the placement A quick summary of the placement A quick summary of the placement',

        list: [
          {
            id: 1,
            title: '3500 +',
            sub_title: 'Students Placed',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 2,
            title: '25 LPA',
            sub_title: 'Highest Salary',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 3,
            title: '60 %',
            sub_title: 'Average Salary Hike',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 4,
            title: '400 +',
            sub_title: 'Hiring Partners',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
        ],
      },

      descriptions: [
        {
          data: {
            type: 'heading',
            title: 'About the',
            title2: 'Program',
          },
        },
        {
          data: {
            type: 'des',
            list: [
              'SAP Material Management encompasses a comprehensive range of tasks within the supply chain, including consumption-based planning, purchasing, vendor evaluation, and invoice verification. This module also integrates inventory management, production planning, and warehouse management, providing a cohesive solution for efficient and streamlined operations.',

              'SAP MM, an integral module of SAP, focuses on material management and inventory control.',

              "Material Management: This process ensures a seamless flow of materials, eliminating shortages and gaps in the organization's supply chain. SAP MM streamlines procurement and material management activities, enhancing business operations with optimal time and cost efficiency.",

              "Resource Optimization: SAP MM efficiently manages an organization's materials, products, and services, aiming to boost productivity and minimize costs. Moreover, its adaptability allows it to readily accommodate the frequent changes inherent in any business environment.",

              'Comprehensive Functions: SAP MM covers a spectrum of functions including Procurement Processes, Master Data Management (Material & Vendor Master), Account Determination, Valuation of Material, Inventory Management, Invoice Verification, and Material Requirement Planning, among others.',
            ],
          },
        },
        {
          data: {
            type: 'sub_heading',
            title: 'For',
            title2: 'whom:',
            list: [
              {
                id: 1,
                type: 'list',
                data: 'Any graduate and post graduate',
              },
              {
                id: 2,
                type: 'list',
                data: 'Business knowledge in the procurement area (MM), particularly knowledge of Product Process is required',
              },
              {
                id: 3,
                type: 'list',
                data: 'Experience in Procurement, Material Handling, Purchase, Inventory and Vendor Management is desired',
              },
              {
                id: 4,
                type: 'list',
                data: 'Good Communication skills',
              },
              {
                id: 5,
                type: 'head',
                data: 'Profile of an MM Consultant',
              },
              {
                id: 6,
                type: 'list',
                data: 'Understanding business operations from the perspectives of the Purchasing and Inventory departments.',
              },
              {
                id: 7,
                type: 'list',
                data: 'Mapping customer business processes within SAP.',
              },
              {
                id: 8,
                type: 'list',
                data: 'Conducting user training sessions for efficient utilization of the SAP system.',
              },
              {
                id: 9,
                type: 'list',
                data: 'Integrating the MM module with other functional areas such as Production, Finance, and Costing.',
              },
              {
                id: 10,
                type: 'list',
                data: 'Designing and enhancing operational and analytical reports tailored to customer requirements.',
              },
              {
                id: 11,
                type: 'head',
                data: 'Growth Path',
              },
              {
                id: 10,
                type: 'list',
                data: 'MM consultants enjoy vertical growth opportunities, progressing to roles such as Team Lead, Functional Lead, Project Manager, and even Program Manager. Additionally, there is potential for horizontal expansion by cross-training into advanced modules like SRM, WM, and EWM.',
              },
            ],
          },
        },
        {
          data: {
            type: 'content',
            data: [
              {
                type: 'regular',
                title: 'Course Contents',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 1: SAP Overview',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 2: Basic Concepts of SAP MM',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 3: Master Data',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 4: Procurement Process',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 5: Purchase Order Scenarios',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 6: Valuation & Account determination',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 7,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 7: Inventory Management',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 8,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 8: Invoice Verification',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 9,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 9: Special Procurement',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 10,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 10: Stock Transfer',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 11,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 11: Release Strategy',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 12,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 12: PO Pricing',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 13,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 13: Split Valuation',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 14,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 14: MRP',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 15,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 15: Integration with Other Modules',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },
            ],
          },
        },
      ],
      certification_process: {
        img: 'https://www.learningsaint.com/assets/images/SAP_MM_Course.jpg',
        list: [
          {
            id: 1,
            title: 'Counselling and Registration',
            des: 'Consult with our counselors to check your eligibility and the right batch, and then Register for the Certified SAP PP Power User Program',
          },
          {
            id: 2,
            title: 'Complete the Program',
            des: 'Attend 44 hours sessions and gain 44 credits to get course completion certification from Learning Saint',
          },
          {
            id: 3,
            title: 'Earn Certification',
            des: 'Post-successful completion of the course, earn Learning Saint Certified SAP PP Power User Program Certification. Post it on social media, get it framed, and increase your value in the industry',
          },
        ],
      },
      career_service: {
        img: 'https://www.learningsaint.com/assets/images/about/about-05/about-group-01.jpg',
        list: [
          {
            id: 1,
            title: 'Placement Drives',
            des: 'We are dedicated to supporting our students throughout their career journey. Join us, and lets embark on a journey towards a successful and fulfilling career together.',
          },
          {
            id: 2,
            title: 'Icons Images Premium access to Learning Saint Job portal',
            des: 'Exclusive access to our dedicated job portal and apply for jobs. More than 2100+ hiring partners’ including top start–ups and product companies hiring our learners. Mentored support on job search and relevant jobs for your career growth.',
          },
          {
            id: 3,
            title: 'Personalized Job Consulting',
            des: 'Share what kind of job you are looking for and we will provide you with verified job openings that match your requirement.',
          },
        ],
      },

      imageList: [
        {
          heading: {
            title: 'Access the best jobs',
            title2: 'in the industry',
          },
          list: [
            'https://www.learningsaint.com/assets/images/industry/1.png',
            'https://www.learningsaint.com/assets/images/industry/2.png',
            'https://www.learningsaint.com/assets/images/industry/3.png',
            'https://www.learningsaint.com/assets/images/industry/4.png',
            'https://www.learningsaint.com/assets/images/industry/5.png',
            'https://www.learningsaint.com/assets/images/industry/6.png',
            'https://www.learningsaint.com/assets/images/industry/7.png',
            'https://www.learningsaint.com/assets/images/industry/8.png',
            'https://www.learningsaint.com/assets/images/industry/9.png',
            'https://www.learningsaint.com/assets/images/industry/10.png',
            'https://www.learningsaint.com/assets/images/industry/11.png',
            'https://www.learningsaint.com/assets/images/industry/12.png',
            'https://www.learningsaint.com/assets/images/industry/13.png',
            'https://www.learningsaint.com/assets/images/industry/14.png',
            'https://www.learningsaint.com/assets/images/industry/15.png',
            'https://www.learningsaint.com/assets/images/industry/16.png',
            'https://www.learningsaint.com/assets/images/industry/17.png',
            'https://www.learningsaint.com/assets/images/industry/18.png',
            'https://www.learningsaint.com/assets/images/industry/19.png',
            'https://www.learningsaint.com/assets/images/industry/20.png',
            'https://www.learningsaint.com/assets/images/industry/21.png',
            'https://www.learningsaint.com/assets/images/industry/22.png',
            'https://www.learningsaint.com/assets/images/industry/23.png',
            'https://www.learningsaint.com/assets/images/industry/24.png',
            'https://www.learningsaint.com/assets/images/industry/25.png',
            'https://www.learningsaint.com/assets/images/industry/26.png',
            'https://www.learningsaint.com/assets/images/industry/27.png',
            'https://www.learningsaint.com/assets/images/industry/28.png',
            'https://www.learningsaint.com/assets/images/industry/29.png',
            'https://www.learningsaint.com/assets/images/industry/30.png',
            'https://www.learningsaint.com/assets/images/industry/31.png',
            'https://www.learningsaint.com/assets/images/industry/32.png',
          ],
        },
      ],
    },

    guaranteed: {
      url: 'https://www.learningsaint.com/assets/images/favicon.png',
      title: 'Job Guaranteed Program',
    },
    edu_meta: [
      {
        id: 1,
        title: '12 Months',
        iconSettings: 'FontAwesome',
        icon: 'list-alt',
      },
      {
        id: 2,
        title: 'Live Online',
        iconSettings: 'AntDesign',
        icon: 'clockcircleo',
      },
    ],
    rating: {
      rating_count: 4.4,
    },
    price: {
      currency: 'INR',
      currencySign: '$',
      amount_title: '0',
      amount: 0,
    },
  },
  {
    id: 2,
    title: 'SAP FICO(Finance & Controlling)',
    tag: ['Top-Rated Courses', 'SAP ERP Courses'],
    categories: 'SAP ERP',
    breadcrumb: ['Home', 'SAP ERP', 'SAP FICO(Finance & Controlling)'],
    image:
      'https://www.learningsaint.com/assets/images/course_img/sap_fico.webp',
    navigate: 'SapErpDetailScreen',
    url: 'sap-fifo-finance-controlling',
    guaranteed: {
      url: 'https://www.learningsaint.com/assets/images/favicon.png',
      title: 'Job Guaranteed Program',
    },
    edu_meta: [
      {
        id: 1,
        title: '12 Months',
        iconSettings: 'FontAwesome',
        icon: 'list-alt',
      },
      {
        id: 2,
        title: 'Live Online',
        iconSettings: 'AntDesign',
        icon: 'clockcircleo',
      },
    ],
    rating: {
      rating_count: 4.5,
    },
    price: {
      currency: 'INR',
      currencySign: '$',
      amount_title: '0',
      amount: 0,
    },
    course_detail: {
      list: false,
      title: 'SAP FICO(Finance & Controlling)',
      des: "SAP FI, which stands for Financial Accounting, is a pivotal module within the SAP ERP system. Its primary purpose is to serve as a repository for an organization's financial data. SAP FI plays a crucial role in facilitating the analysis of a company's financial standing in the market. Moreover, it offers seamless integration capabilities with other essential SAP modules, including SAP SD, SAP PP, SAP FICO, SAP SCM, among others, to ensure comprehensive and interconnected financial management within the organization.",
      add: {
        isEnable: false,
        title: 'IN Collaboration With IBM & Microsoft',
        img: 'https://www.learningsaint.com/assets/images/ibm_mircosoft.png',
      },
      edu_meta: [
        {
          id: 1,
          title: 'Type',
          value: 'SAP ERP',
        },
        {
          id: 2,
          title: 'Duration',
          value: '12 Months',
        },
        {
          id: 3,
          title: 'Classes',
          value: 'Online Classes',
        },
      ],
      image:
        'https://www.learningsaint.com/assets/images/course_img/sap_fico.webp',

      general_data_grouth: {
        title: {
          f: 'What our',
          s: 'learnes have achieved?',
        },
        sub_title:
          ' A quick summary of the placement A quick summary of the placement A quick summary of the placement A quick summary of the placement',

        list: [
          {
            id: 1,
            title: '3500 +',
            sub_title: 'Students Placed',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 2,
            title: '25 LPA',
            sub_title: 'Highest Salary',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 3,
            title: '60 %',
            sub_title: 'Average Salary Hike',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 4,
            title: '400 +',
            sub_title: 'Hiring Partners',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
        ],
      },

      descriptions: [
        {
          data: {
            type: 'heading',
            title: 'About the',
            title2: 'Program',
          },
        },
        {
          data: {
            type: 'des',
            list: [
              'SAP FI, which stands for Financial Accounting, is a pivotal module within the SAP ERP system. Its primary purpose is to serve as a repository for an organizations financial data. SAP FI plays a crucial role in facilitating the analysis of a companys financial standing in the market. Moreover, it offers seamless integration capabilities with other essential SAP modules, including SAP SD, SAP PP, SAP FICO, SAP SCM, among others, to ensure comprehensive and interconnected financial management within the organization.',
              'SAP Controlling (CO) represents another vital SAP module made available to organizations. It serves as a critical tool for coordinating, monitoring, and optimizing all processes within an organization. SAP CO encompasses the management and configuration of master data that includes cost and profit centers, internal orders, as well as various cost elements and functional areas. This module plays a pivotal role in enhancing the organizations ability to control and optimize its financial and operational processes effectively.',
            ],
          },
        },
        {
          data: {
            type: 'sub_heading',
            title: 'For',
            title2: 'whom:',
            list: [
              {
                id: 1,
                type: 'list',
                data: 'Knowledge of finance and accounting principles.',
              },
              {
                id: 2,
                type: 'list',
                data: 'Professional qualifications such as CA (Chartered Accountant), ICWA (Institute of Cost and Works Accountants), MBA (Master of Business Administration) with a specialization in Finance, or a postgraduate degree in Finance and Accounting, coupled with relevant work experience.',
              },
              {
                id: 3,
                type: 'list',
                data: 'Strong communication skills.',
              },
              {
                id: 4,
                type: 'head',
                data: 'Roles and responsibilities of SAP FICO Consultant',
              },
              {
                id: 5,
                type: 'list',
                data: 'Mapping and aligning customers business processes with SAP.',
              },
              {
                id: 6,
                type: 'list',
                data: 'Conducting training sessions for finance department users to proficiently utilize the SAP system.',
              },
              {
                id: 7,
                type: 'list',
                data: 'Seamlessly integrating the FI (Financial Accounting) module with other functional areas such as Materials, Sales, Production, Costing, and more.',
              },
              {
                id: 8,
                type: 'list',
                data: 'Designing and enhancing operational and analytical reports tailored to meet the specific needs of the customer.',
              },
            ],
          },
        },
        {
          data: {
            type: 'content',
            data: [
              {
                type: 'regular',
                title: 'Course Contents',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module1:- Introduction to SAP R/3',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module2:-Financial Accounting Basic Settings',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module3:-General Ledger Accounting',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module4:-Accounts Payable',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module5:-Accounts Receivable',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module6:-Asset Accounting',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 7,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module7:-New General Ledger Accounting',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 8,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module8:-Reports',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 9,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module9:-Integration of Financial Accounting with Materials Management',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 10,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module10:-Integration',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 11,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module11:-Controlling',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 12,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module12:-Basic Settings for Controlling',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },
            ],
          },
        },
      ],
      certification_process: {
        img: 'https://www.learningsaint.com/assets/images/SAP_MM_Course.jpg',
        list: [
          {
            id: 1,
            title: 'Counselling and Registration',
            des: 'Consult with our counselors to check your eligibility and the right batch, and then Register for the Certified SAP PP Power User Program',
          },
          {
            id: 2,
            title: 'Complete the Program',
            des: 'Attend 44 hours sessions and gain 44 credits to get course completion certification from Learning Saint',
          },
          {
            id: 3,
            title: 'Earn Certification',
            des: 'Post-successful completion of the course, earn Learning Saint Certified SAP PP Power User Program Certification. Post it on social media, get it framed, and increase your value in the industry',
          },
        ],
      },
      career_service: {
        img: 'https://www.learningsaint.com/assets/images/about/about-05/about-group-01.jpg',
        list: [
          {
            id: 1,
            title: 'Placement Drives',
            des: 'We are dedicated to supporting our students throughout their career journey. Join us, and lets embark on a journey towards a successful and fulfilling career together.',
          },
          {
            id: 2,
            title: 'Icons Images Premium access to Learning Saint Job portal',
            des: 'Exclusive access to our dedicated job portal and apply for jobs. More than 2100+ hiring partners’ including top start–ups and product companies hiring our learners. Mentored support on job search and relevant jobs for your career growth.',
          },
          {
            id: 3,
            title: 'Personalized Job Consulting',
            des: 'Share what kind of job you are looking for and we will provide you with verified job openings that match your requirement.',
          },
        ],
      },

      imageList: [
        {
          heading: {
            title: 'Access the best jobs',
            title2: 'in the industry',
          },
          list: [
            'https://www.learningsaint.com/assets/images/industry/1.png',
            'https://www.learningsaint.com/assets/images/industry/2.png',
            'https://www.learningsaint.com/assets/images/industry/3.png',
            'https://www.learningsaint.com/assets/images/industry/4.png',
            'https://www.learningsaint.com/assets/images/industry/5.png',
            'https://www.learningsaint.com/assets/images/industry/6.png',
            'https://www.learningsaint.com/assets/images/industry/7.png',
            'https://www.learningsaint.com/assets/images/industry/8.png',
            'https://www.learningsaint.com/assets/images/industry/9.png',
            'https://www.learningsaint.com/assets/images/industry/10.png',
            'https://www.learningsaint.com/assets/images/industry/11.png',
            'https://www.learningsaint.com/assets/images/industry/12.png',
            'https://www.learningsaint.com/assets/images/industry/13.png',
            'https://www.learningsaint.com/assets/images/industry/14.png',
            'https://www.learningsaint.com/assets/images/industry/15.png',
            'https://www.learningsaint.com/assets/images/industry/16.png',
            'https://www.learningsaint.com/assets/images/industry/17.png',
            'https://www.learningsaint.com/assets/images/industry/18.png',
            'https://www.learningsaint.com/assets/images/industry/19.png',
            'https://www.learningsaint.com/assets/images/industry/20.png',
            'https://www.learningsaint.com/assets/images/industry/21.png',
            'https://www.learningsaint.com/assets/images/industry/22.png',
            'https://www.learningsaint.com/assets/images/industry/23.png',
            'https://www.learningsaint.com/assets/images/industry/24.png',
            'https://www.learningsaint.com/assets/images/industry/25.png',
            'https://www.learningsaint.com/assets/images/industry/26.png',
            'https://www.learningsaint.com/assets/images/industry/27.png',
            'https://www.learningsaint.com/assets/images/industry/28.png',
            'https://www.learningsaint.com/assets/images/industry/29.png',
            'https://www.learningsaint.com/assets/images/industry/30.png',
            'https://www.learningsaint.com/assets/images/industry/31.png',
            'https://www.learningsaint.com/assets/images/industry/32.png',
          ],
        },
      ],
    },
  },
  {
    id: 3,
    title: 'SAP SD(Sales & Distribution)',
    tag: ['SAP ERP Courses'],
    categories: 'SAP ERP',
    breadcrumb: ['Home', 'SAP ERP', 'SAP SD(Sales & Distribution)'],
    image:
      'https://www.learningsaint.com/assets/images/course_img/sap__sd.webp',
    navigate: 'SapErpDetailScreen',
    url: 'sap-sd-sales-distribution',
    guaranteed: {
      url: 'https://www.learningsaint.com/assets/images/favicon.png',
      title: 'Job Guaranteed Program',
    },
    edu_meta: [
      {
        id: 1,
        title: '12 Months',
        iconSettings: 'FontAwesome',
        icon: 'list-alt',
      },
      {
        id: 2,
        title: 'Live Online',
        iconSettings: 'AntDesign',
        icon: 'clockcircleo',
      },
    ],
    rating: {
      rating_count: 4.3,
    },
    price: {
      currency: 'INR',
      currencySign: '$',
      amount_title: '0',
      amount: 0,
    },
    course_detail: {
      list: false,
      title: 'SAP SD(Sales & Distribution)',
      des: 'SAP Sales & Distribution (SD) is a comprehensive module that encompasses a wide array of topics related to sales, order management, and distribution processing. Among its key components are Sales, Sales Support, Shipping, Billing, and Sales & Logistics Information Systems. This module plays a pivotal role in managing and optimizing the various facets of sales and distribution operations within an organization.',
      add: {
        isEnable: false,
        title: 'IN Collaboration With IBM & Microsoft',
        img: 'https://www.learningsaint.com/assets/images/ibm_mircosoft.png',
      },
      edu_meta: [
        {
          id: 1,
          title: 'Type',
          value: 'Cyber Security',
        },
        {
          id: 2,
          title: 'Duration',
          value: '12 Months',
        },
        {
          id: 3,
          title: 'Classes',
          value: 'Online Classes',
        },
      ],
      image:
        'https://www.learningsaint.com/assets/images/course_img/sap__sd.webp',

      general_data_grouth: {
        title: {
          f: 'What our',
          s: 'learnes have achieved?',
        },
        sub_title:
          ' A quick summary of the placement A quick summary of the placement A quick summary of the placement A quick summary of the placement',

        list: [
          {
            id: 1,
            title: '3500 +',
            sub_title: 'Students Placed',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 2,
            title: '25 LPA',
            sub_title: 'Highest Salary',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 3,
            title: '60 %',
            sub_title: 'Average Salary Hike',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 4,
            title: '400 +',
            sub_title: 'Hiring Partners',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
        ],
      },

      descriptions: [
        {
          data: {
            type: 'heading',
            title: 'About the',
            title2: 'Program',
          },
        },
        {
          data: {
            type: 'des',
            list: [
              'SAP Sales & Distribution (SD) is a comprehensive module that encompasses a wide array of topics related to sales, order management, and distribution processing. Among its key components are Sales, Sales Support, Shipping, Billing, and Sales & Logistics Information Systems. This module plays a pivotal role in managing and optimizing the various facets of sales and distribution operations within an organization.',
              'SAP SD is extensively employed within organizations for the purpose of meticulously tracking pre-sales, sales, and post-sales transactions. It serves as a robust platform for defining and managing the intricacies of sales, order, and distribution processes, while also providing an efficient repository for storing pertinent information associated with these functions.',
            ],
          },
        },
        {
          data: {
            type: 'sub_heading',
            title: 'This opportunity',
            title2: 'is open to:',
            list: [
              {
                id: 1,
                type: 'list',
                data: 'Any graduate or postgraduate.',
              },
              {
                id: 2,
                type: 'list',
                data: 'Individuals with prior experience in sales and distribution.',
              },
              {
                id: 3,
                type: 'list',
                data: 'Those possessing substantial business knowledge in the field of sales and distribution.',
              },
              {
                id: 4,
                type: 'head',
                data: 'Roles and Responsibilities of SAP PP Consultant',
              },
              {
                id: 5,
                type: 'list',
                data: 'Understanding the business processes within the Sales, Delivery, and Invoicing departments.',
              },
              {
                id: 6,
                type: 'list',
                data: 'Mapping customer business processes into the SAP system',
              },
              {
                id: 7,
                type: 'list',
                data: 'Conducting user training for effective utilization of the SAP system.',
              },
              {
                id: 8,
                type: 'list',
                data: 'Integrating the SD module with other functional areas such as Materials, Finance, Production, and Costing.',
              },
              {
                id: 9,
                type: 'list',
                data: 'Designing and enhancing operational and analytical reports to meet customer requirements.',
              },
            ],
          },
        },
        {
          data: {
            type: 'content',
            data: [
              {
                title: 'Course Contents',
                type: 'regular',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module1:-Processes in sales and distribution',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module2:-Creating and processing sales orders',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module3:-Contracts and scheduling agreements',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module4:-Delivery processese',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module5:-Pricing and conditions',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module6:-Rebate processing',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 7,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module7:-Controlling billing documents',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 8,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module8:-Revenue account determination- message determination, taxes determination',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 9,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module9:-Integrated case study',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },
            ],
          },
        },
      ],
      certification_process: {
        img: 'https://www.learningsaint.com/assets/images/SAP_MM_Course.jpg',
        list: [
          {
            id: 1,
            title: 'Counselling and Registration',
            des: 'Consult with our counselors to check your eligibility and the right batch, and then Register for the Certified SAP PP Power User Program',
          },
          {
            id: 2,
            title: 'Complete the Program',
            des: 'Attend 44 hours sessions and gain 44 credits to get course completion certification from Learning Saint',
          },
          {
            id: 3,
            title: 'Earn Certification',
            des: 'Post-successful completion of the course, earn Learning Saint Certified SAP PP Power User Program Certification. Post it on social media, get it framed, and increase your value in the industry',
          },
        ],
      },
      career_service: {
        img: 'https://www.learningsaint.com/assets/images/about/about-05/about-group-01.jpg',
        list: [
          {
            id: 1,
            title: 'Placement Drives',
            des: 'We are dedicated to supporting our students throughout their career journey. Join us, and lets embark on a journey towards a successful and fulfilling career together.',
          },
          {
            id: 2,
            title: 'Icons Images Premium access to Learning Saint Job portal',
            des: 'Exclusive access to our dedicated job portal and apply for jobs. More than 2100+ hiring partners’ including top start–ups and product companies hiring our learners. Mentored support on job search and relevant jobs for your career growth.',
          },
          {
            id: 3,
            title: 'Personalized Job Consulting',
            des: 'Share what kind of job you are looking for and we will provide you with verified job openings that match your requirement.',
          },
        ],
      },
      imageList: [
        {
          heading: {
            title: 'Access the best jobs',
            title2: 'in the industry',
          },
          list: [
            'https://www.learningsaint.com/assets/images/industry/1.png',
            'https://www.learningsaint.com/assets/images/industry/2.png',
            'https://www.learningsaint.com/assets/images/industry/3.png',
            'https://www.learningsaint.com/assets/images/industry/4.png',
            'https://www.learningsaint.com/assets/images/industry/5.png',
            'https://www.learningsaint.com/assets/images/industry/6.png',
            'https://www.learningsaint.com/assets/images/industry/7.png',
            'https://www.learningsaint.com/assets/images/industry/8.png',
            'https://www.learningsaint.com/assets/images/industry/9.png',
            'https://www.learningsaint.com/assets/images/industry/10.png',
            'https://www.learningsaint.com/assets/images/industry/11.png',
            'https://www.learningsaint.com/assets/images/industry/12.png',
            'https://www.learningsaint.com/assets/images/industry/13.png',
            'https://www.learningsaint.com/assets/images/industry/14.png',
            'https://www.learningsaint.com/assets/images/industry/15.png',
            'https://www.learningsaint.com/assets/images/industry/16.png',
            'https://www.learningsaint.com/assets/images/industry/17.png',
            'https://www.learningsaint.com/assets/images/industry/18.png',
            'https://www.learningsaint.com/assets/images/industry/19.png',
            'https://www.learningsaint.com/assets/images/industry/20.png',
            'https://www.learningsaint.com/assets/images/industry/21.png',
            'https://www.learningsaint.com/assets/images/industry/22.png',
            'https://www.learningsaint.com/assets/images/industry/23.png',
            'https://www.learningsaint.com/assets/images/industry/24.png',
            'https://www.learningsaint.com/assets/images/industry/25.png',
            'https://www.learningsaint.com/assets/images/industry/26.png',
            'https://www.learningsaint.com/assets/images/industry/27.png',
            'https://www.learningsaint.com/assets/images/industry/28.png',
            'https://www.learningsaint.com/assets/images/industry/29.png',
            'https://www.learningsaint.com/assets/images/industry/30.png',
            'https://www.learningsaint.com/assets/images/industry/31.png',
            'https://www.learningsaint.com/assets/images/industry/32.png',
          ],
        },
      ],
    },
  },
  {
    id: 4,
    title: 'SAP PP(Production & Planning)',
    tag: ['SAP ERP Courses'],
    categories: 'SAP ERP',
    breadcrumb: ['Home', 'SAP ERP', 'SAP PP(Production & Planning)'],
    image:
      'https://www.learningsaint.com/assets/images/course_img/sap__pp.webp',
    navigate: 'SapErpDetailScreen',
    url: 'sap-pp-production-planning',
    guaranteed: {
      url: 'https://www.learningsaint.com/assets/images/favicon.png',
      title: 'Job Guaranteed Program',
    },
    edu_meta: [
      {
        id: 1,
        title: '12 Months',
        iconSettings: 'FontAwesome',
        icon: 'list-alt',
      },
      {
        id: 2,
        title: 'Live Online',
        iconSettings: 'AntDesign',
        icon: 'clockcircleo',
      },
    ],
    rating: {
      rating_count: 4.6,
    },
    price: {
      currency: 'INR',
      currencySign: '$',
      amount_title: '0',
      amount: 0,
    },
    course_detail: {
      list: false,
      title: 'SAP PP(Production & Planning)',
      des: 'SAP Production Planning is a comprehensive module dedicated to managing and optimizing a companys production processes. Within the framework of SAP PP, various essential activities are seamlessly integrated, encompassing Material Requirement Planning (MRP), Bill of Materials (BOM), Capacity Planning (CP), and Supply Chain Planning (SCP). This module plays a pivotal role in streamlining production operations and enhancing overall efficiency for businesses.',
      add: {
        isEnable: false,
        title: 'IN Collaboration With IBM & Microsoft',
        img: 'https://www.learningsaint.com/assets/images/ibm_mircosoft.png',
      },
      edu_meta: [
        {
          id: 1,
          title: 'Type',
          value: 'SAP ERP',
        },
        {
          id: 2,
          title: 'Duration',
          value: '12 Months',
        },
        {
          id: 3,
          title: 'Classes',
          value: 'Online Classes',
        },
      ],
      image:
        'https://www.learningsaint.com/assets/images/course_img/sap__pp.webp',

      general_data_grouth: {
        title: {
          f: 'What our',
          s: 'learnes have achieved?',
        },
        sub_title:
          ' A quick summary of the placement A quick summary of the placement A quick summary of the placement A quick summary of the placement',

        list: [
          {
            id: 1,
            title: '3500 +',
            sub_title: 'Students Placed',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 2,
            title: '25 LPA',
            sub_title: 'Highest Salary',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 3,
            title: '60 %',
            sub_title: 'Average Salary Hike',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 4,
            title: '400 +',
            sub_title: 'Hiring Partners',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
        ],
      },

      descriptions: [
        {
          data: {
            type: 'heading',
            title: 'About the',
            title2: 'Program',
          },
        },
        {
          data: {
            type: 'des',
            list: [
              'SAP Production Planning is a comprehensive module dedicated to managing and optimizing a companys production processes. Within the framework of SAP PP, various essential activities are seamlessly integrated, encompassing Material Requirement Planning (MRP), Bill of Materials (BOM), Capacity Planning (CP), and Supply Chain Planning (SCP). This module plays a pivotal role in streamlining production operations and enhancing overall efficiency for businesses.',
              'Each of these processes requires the meticulous maintenance of master data, and the training provided is designed to empower individuals to proficiently apply and communicate this master data within the realms of planning and manufacturing.',
              'Upon successful course completion, you will be eligible to attain the esteemed designation of SAP Certified Application Associate in Production, Planning & Manufacturing with SAP ERP 6.0.',
            ],
          },
        },
        {
          data: {
            type: 'sub_heading',
            title: 'This opportunity',
            title2: 'is open to:',
            list: [
              {
                id: 1,
                type: 'list',
                data: 'Individuals holding graduate or postgraduate degrees.',
              },
              {
                id: 2,
                type: 'list',
                data: 'Professionals with domain expertise in production planning and manufacturing.',
              },
              {
                id: 3,
                type: 'list',
                data: 'Those possessing business acumen in the field of Production Planning & Manufacturing.',
              },
              {
                id: 4,
                type: 'list',
                data: 'Candidates who demonstrate strong communication skills.',
              },
              {
                id: 5,
                type: 'head',
                data: 'Roles and Responsibilities of SAP PP Consultant',
              },
              {
                id: 6,
                type: 'list',
                data: 'Business Analysis',
              },
              {
                id: 7,
                type: 'list',
                data: 'Master data management',
              },
              {
                id: 8,
                type: 'list',
                data: 'BOM- Bills of material',
              },
              {
                id: 9,
                type: 'list',
                data: 'MRP- Material requirements training',
              },
              {
                id: 10,
                type: 'list',
                data: 'Business Analysis',
              },
              {
                id: 11,
                type: 'list',
                data: 'Shop floor Control',
              },
              {
                id: 12,
                type: 'list',
                data: 'QM Integration',
              },
              {
                id: 13,
                type: 'list',
                data: 'Reporting & Analytics',
              },
              {
                id: 14,
                type: 'list',
                data: 'Testing & Validation',
              },
              {
                id: 15,
                type: 'list',
                data: 'Compliance',
              },
            ],
          },
        },
        {
          data: {
            type: 'content',
            data: [
              {
                type: 'regular',
                title: 'Overview of Production Planning in SAP ERP',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Outlining the Supply Chain Planning Process',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Outlining the Core Production Planning Process',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },
              {
                type: 'regular',
                title: 'Demand Management',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Outlining Demand Management',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Planning Make-to-Stock Production Without Consumption Logic',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Planning Make-to-Stock Production with Consumption Logic',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Planning Make-to-Order Production Without Consumption Logic',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Planning Make-to-Order Production with Consumption Logic',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Using Assembly Processing in Make-to-Order Production',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 7,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Applying Demand Management Enhancements',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 8,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Analyzing Availability Checks',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },
              {
                type: 'regular',
                title: 'Material Requirements Planning Execution',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Outlining Material Requirements Planning',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Setting Up the MRP Prerequisites',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Executing the MRP Run',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Setting Up the MRP Run',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Planning MRP Interactively',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Applying Firming Mechanisms',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },
              {
                type: 'regular',
                title: 'Technical Processes of Requirements Planning',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Calculating Net Requirements',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Applying Buffers in Net Requirements Calculation',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Calculating Lot Sizes',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Selecting Procurement Types',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Setting Up Basic-Date Scheduling',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Setting Up Lead-Time Scheduling',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 7,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Selecting BOM and Routing',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },
              {
                type: 'regular',
                title: 'Material Requirements Planning Execution',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'MRP Results Processing and Evaluations',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Comparing an MRP List and a Stock/Requirements List',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Applying the Planning Table',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Identifying Exception Messages',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Applying Additional Evaluation Aids',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },
              {
                type: 'regular',
                title: 'Additional MRP Processes',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Applying Master Production Scheduling (MPS)',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Setting Up Long-Term Planning',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Executing Long-Term Planning',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Analyzing Multi-Site Planning',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Setting Up MRP Areas',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Applying MRP Areas',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },
            ],
          },
        },
      ],
      certification_process: {
        img: 'https://www.learningsaint.com/assets/images/SAP_MM_Course.jpg',
        list: [
          {
            id: 1,
            title: 'Counselling and Registration',
            des: 'Consult with our counselors to check your eligibility and the right batch, and then Register for the Certified SAP PP Power User Program',
          },
          {
            id: 2,
            title: 'Complete the Program',
            des: 'Attend 44 hours sessions and gain 44 credits to get course completion certification from Learning Saint',
          },
          {
            id: 3,
            title: 'Earn Certification',
            des: 'Post-successful completion of the course, earn Learning Saint Certified SAP PP Power User Program Certification. Post it on social media, get it framed, and increase your value in the industry',
          },
        ],
      },
      career_service: {
        img: 'https://www.learningsaint.com/assets/images/about/about-05/about-group-01.jpg',
        list: [
          {
            id: 1,
            title: 'Placement Drives',
            des: 'We are dedicated to supporting our students throughout their career journey. Join us, and lets embark on a journey towards a successful and fulfilling career together.',
          },
          {
            id: 2,
            title: 'Icons Images Premium access to Learning Saint Job portal',
            des: 'Exclusive access to our dedicated job portal and apply for jobs. More than 2100+ hiring partners’ including top start–ups and product companies hiring our learners. Mentored support on job search and relevant jobs for your career growth.',
          },
          {
            id: 3,
            title: 'Personalized Job Consulting',
            des: 'Share what kind of job you are looking for and we will provide you with verified job openings that match your requirement.',
          },
        ],
      },

      imageList: [
        {
          heading: {
            title: 'Access the best jobs',
            title2: 'in the industry',
          },
          list: [
            'https://www.learningsaint.com/assets/images/industry/1.png',
            'https://www.learningsaint.com/assets/images/industry/2.png',
            'https://www.learningsaint.com/assets/images/industry/3.png',
            'https://www.learningsaint.com/assets/images/industry/4.png',
            'https://www.learningsaint.com/assets/images/industry/5.png',
            'https://www.learningsaint.com/assets/images/industry/6.png',
            'https://www.learningsaint.com/assets/images/industry/7.png',
            'https://www.learningsaint.com/assets/images/industry/8.png',
            'https://www.learningsaint.com/assets/images/industry/9.png',
            'https://www.learningsaint.com/assets/images/industry/10.png',
            'https://www.learningsaint.com/assets/images/industry/11.png',
            'https://www.learningsaint.com/assets/images/industry/12.png',
            'https://www.learningsaint.com/assets/images/industry/13.png',
            'https://www.learningsaint.com/assets/images/industry/14.png',
            'https://www.learningsaint.com/assets/images/industry/15.png',
            'https://www.learningsaint.com/assets/images/industry/16.png',
            'https://www.learningsaint.com/assets/images/industry/17.png',
            'https://www.learningsaint.com/assets/images/industry/18.png',
            'https://www.learningsaint.com/assets/images/industry/19.png',
            'https://www.learningsaint.com/assets/images/industry/20.png',
            'https://www.learningsaint.com/assets/images/industry/21.png',
            'https://www.learningsaint.com/assets/images/industry/22.png',
            'https://www.learningsaint.com/assets/images/industry/23.png',
            'https://www.learningsaint.com/assets/images/industry/24.png',
            'https://www.learningsaint.com/assets/images/industry/25.png',
            'https://www.learningsaint.com/assets/images/industry/26.png',
            'https://www.learningsaint.com/assets/images/industry/27.png',
            'https://www.learningsaint.com/assets/images/industry/28.png',
            'https://www.learningsaint.com/assets/images/industry/29.png',
            'https://www.learningsaint.com/assets/images/industry/30.png',
            'https://www.learningsaint.com/assets/images/industry/31.png',
            'https://www.learningsaint.com/assets/images/industry/32.png',
          ],
        },
      ],
    },
  },
  {
    id: 5,
    title: 'SAP ABAP Developer',
    tag: ['SAP ERP Courses'],
    categories: 'SAP ERP',
    breadcrumb: ['Home', 'SAP ERP', 'SAP ABAP Developer'],
    image:
      'https://www.learningsaint.com/assets/images/course_img/sap__abap.web',
    navigate: 'SapErpDetailScreen',
    url: 'sap-abap-developer',
    guaranteed: {
      url: 'https://www.learningsaint.com/assets/images/favicon.png',
      title: 'Job Guaranteed Program',
    },
    edu_meta: [
      {
        id: 1,
        title: '12 Months',
        iconSettings: 'FontAwesome',
        icon: 'list-alt',
      },
      {
        id: 2,
        title: 'Live Online',
        iconSettings: 'AntDesign',
        icon: 'clockcircleo',
      },
    ],
    rating: {
      rating_count: 4.3,
    },
    price: {
      currency: 'INR',
      currencySign: '$',
      amount_title: '0',
      amount: 0,
    },
    course_detail: {
      list: false,
      title: 'SAP MM(Material Management)',
      des: 'SAP Material Management encompasses a comprehensive range of tasks within the supply chain, including consumption-based planning, purchasing, vendor evaluation, and invoice verification. This module also integrates inventory management, production planning, and warehouse management, providing a cohesive solution for efficient and streamlined operations.',
      add: {
        isEnable: false,
        title: 'IN Collaboration With IBM & Microsoft',
        img: 'https://www.learningsaint.com/assets/images/ibm_mircosoft.png',
      },
      edu_meta: [
        {
          id: 1,
          title: 'Type',
          value: 'Cyber Security',
        },
        {
          id: 2,
          title: 'Duration',
          value: '12 Months',
        },
        {
          id: 3,
          title: 'Classes',
          value: 'Online Classes',
        },
      ],
      image:
        'https://www.learningsaint.com/assets/images/course_img/sap__mm.webp',

      general_data_grouth: {
        title: {
          f: 'What our',
          s: 'learnes have achieved?',
        },
        sub_title:
          ' A quick summary of the placement A quick summary of the placement A quick summary of the placement A quick summary of the placement',

        list: [
          {
            id: 1,
            title: '3500 +',
            sub_title: 'Students Placed',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 2,
            title: '25 LPA',
            sub_title: 'Highest Salary',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 3,
            title: '60 %',
            sub_title: 'Average Salary Hike',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 4,
            title: '400 +',
            sub_title: 'Hiring Partners',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
        ],
      },

      descriptions: [
        {
          data: {
            type: 'heading',
            title: 'About the',
            title2: 'Program',
          },
        },
        {
          data: {
            type: 'des',
            list: [
              'SAP Sales & Distribution (SD) is a comprehensive module that encompasses a wide array of topics related to sales, order management,and distribution processing. Among its key components are Sales, SalesSupport, Shipping, Billing, and Sales & Logistics Systems. This module plays a pivotal role in managing and optimizing the various facets of sales and distribution operations within an organization.',
              'SAP Sales & Distribution (SD) is a comprehensive module that encompasses a wide array of topics related to sales, order management, and distribution processing. Among its key components are Sales, Sales Support, Shipping, Billing, and Sales & Logistics Information Systems. This module plays a pivotal role in managing and optimizing the various facets of sales and distribution operations within an organization.',
            ],
          },
        },
        {
          data: {
            type: 'sub_heading',
            title: 'This opportunity',
            title2: 'is open to:',
            list: [
              {
                id: 1,
                type: 'list',
                data: 'Any graduate or postgraduate.',
              },
              {
                id: 2,
                type: 'list',
                data: 'Individuals with prior experience in sales and distribution.',
              },
              {
                id: 3,
                type: 'list',
                data: 'Those possessing substantial business knowledge in the field of sales and distribution.',
              },
              {
                id: 4,
                type: 'head',
                data: 'Roles and Responsibilities of SAP PP Consultant',
              },
              {
                id: 5,
                type: 'list',
                data: 'Understanding the business processes within the Sales, Delivery, and Invoicing departments.',
              },
            ],
          },
        },
        {
          data: {
            type: 'content',
            data: [
              {
                title: 'Course Contents',
                type: 'regular',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 1: Introduction to SAP and ABAP',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 2: ABAP Programming Basics',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 3: ABAP Dictionary',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 4: ABAP Development Tools',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 5: ABAP Object-Oriented Programming (OOP)',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 6: Reports and List Processing',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 7,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 7: Data Retrieval and Database Access',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 8,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 8: Advanced Topics',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 9,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 9: SAP Integration',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 10,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 10: SAP Development Best Practices and Guidelines',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 11,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 11: SAP ABAP Project Work',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },
            ],
          },
        },
      ],
      certification_process: {
        img: 'https://www.learningsaint.com/assets/images/SAP_MM_Course.jpg',
        list: [
          {
            id: 1,
            title: 'Counselling and Registration',
            des: 'Consult with our counselors to check your eligibility and the right batch, and then Register for the Certified SAP PP Power User Program',
          },
          {
            id: 2,
            title: 'Complete the Program',
            des: 'Attend 44 hours sessions and gain 44 credits to get course completion certification from Learning Saint',
          },
          {
            id: 3,
            title: 'Earn Certification',
            des: 'Post-successful completion of the course, earn Learning Saint Certified SAP PP Power User Program Certification. Post it on social media, get it framed, and increase your value in the industry',
          },
        ],
      },
      career_service: {
        img: 'https://www.learningsaint.com/assets/images/about/about-05/about-group-01.jpg',
        list: [
          {
            id: 1,
            title: 'Placement Drives',
            des: 'We are dedicated to supporting our students throughout their career journey. Join us, and lets embark on a journey towards a successful and fulfilling career together.',
          },
          {
            id: 2,
            title: 'Icons Images Premium access to Learning Saint Job portal',
            des: 'Exclusive access to our dedicated job portal and apply for jobs. More than 2100+ hiring partners’ including top start–ups and product companies hiring our learners. Mentored support on job search and relevant jobs for your career growth.',
          },
          {
            id: 3,
            title: 'Personalized Job Consulting',
            des: 'Share what kind of job you are looking for and we will provide you with verified job openings that match your requirement.',
          },
        ],
      },

      imageList: [
        {
          heading: {
            title: 'Access the best jobs',
            title2: 'in the industry',
          },
          list: [
            'https://www.learningsaint.com/assets/images/industry/1.png',
            'https://www.learningsaint.com/assets/images/industry/2.png',
            'https://www.learningsaint.com/assets/images/industry/3.png',
            'https://www.learningsaint.com/assets/images/industry/4.png',
            'https://www.learningsaint.com/assets/images/industry/5.png',
            'https://www.learningsaint.com/assets/images/industry/6.png',
            'https://www.learningsaint.com/assets/images/industry/7.png',
            'https://www.learningsaint.com/assets/images/industry/8.png',
            'https://www.learningsaint.com/assets/images/industry/9.png',
            'https://www.learningsaint.com/assets/images/industry/10.png',
            'https://www.learningsaint.com/assets/images/industry/11.png',
            'https://www.learningsaint.com/assets/images/industry/12.png',
            'https://www.learningsaint.com/assets/images/industry/13.png',
            'https://www.learningsaint.com/assets/images/industry/14.png',
            'https://www.learningsaint.com/assets/images/industry/15.png',
            'https://www.learningsaint.com/assets/images/industry/16.png',
            'https://www.learningsaint.com/assets/images/industry/17.png',
            'https://www.learningsaint.com/assets/images/industry/18.png',
            'https://www.learningsaint.com/assets/images/industry/19.png',
            'https://www.learningsaint.com/assets/images/industry/20.png',
            'https://www.learningsaint.com/assets/images/industry/21.png',
            'https://www.learningsaint.com/assets/images/industry/22.png',
            'https://www.learningsaint.com/assets/images/industry/23.png',
            'https://www.learningsaint.com/assets/images/industry/24.png',
            'https://www.learningsaint.com/assets/images/industry/25.png',
            'https://www.learningsaint.com/assets/images/industry/26.png',
            'https://www.learningsaint.com/assets/images/industry/27.png',
            'https://www.learningsaint.com/assets/images/industry/28.png',
            'https://www.learningsaint.com/assets/images/industry/29.png',
            'https://www.learningsaint.com/assets/images/industry/30.png',
            'https://www.learningsaint.com/assets/images/industry/31.png',
            'https://www.learningsaint.com/assets/images/industry/32.png',
          ],
        },
      ],
    },
  },
  {
    id: 6,
    title: 'SAP BASIS Admin & HANA',
    tag: ['SAP ERP Courses'],
    categories: 'SAP ERP',
    breadcrumb: ['Home', 'SAP ERP', 'SAP BASIS Admin & HANA'],
    image:
      'https://www.learningsaint.com/assets/images/course_img/sap__basis.webp',
    navigate: 'SapErpDetailScreen',
    url: 'sap-basis-admin-hana',
    guaranteed: {
      url: 'https://www.learningsaint.com/assets/images/favicon.png',
      title: 'Job Guaranteed Program',
    },
    edu_meta: [
      {
        id: 1,
        title: '12 Months',
        iconSettings: 'FontAwesome',
        icon: 'list-alt',
      },
      {
        id: 2,
        title: 'Live Online',
        iconSettings: 'AntDesign',
        icon: 'clockcircleo',
      },
    ],
    rating: {
      rating_count: 4.4,
    },
    price: {
      currency: 'INR',
      currencySign: '$',
      amount_title: '0',
      amount: 0,
    },
    course_detail: {
      list: false,
      title: 'SAP MM(Material Management)',
      des: 'SAP Material Management encompasses a comprehensive range of tasks within the supply chain, including consumption-based planning, purchasing, vendor evaluation, and invoice verification. This module also integrates inventory management, production planning, and warehouse management, providing a cohesive solution for efficient and streamlined operations.',
      add: {
        isEnable: false,
        title: 'IN Collaboration With IBM & Microsoft',
        img: 'https://www.learningsaint.com/assets/images/ibm_mircosoft.png',
      },
      edu_meta: [
        {
          id: 1,
          title: 'Type',
          value: 'SAP ERP',
        },
        {
          id: 2,
          title: 'Duration',
          value: '12 Months',
        },
        {
          id: 3,
          title: 'Classes',
          value: 'Online Classes',
        },
      ],
      image:
        'https://www.learningsaint.com/assets/images/course_img/sap__mm.webp',

      general_data_grouth: {
        title: {
          f: 'What our',
          s: 'learnes have achieved?',
        },
        sub_title:
          ' A quick summary of the placement A quick summary of the placement A quick summary of the placement A quick summary of the placement',

        list: [
          {
            id: 1,
            title: '3500 +',
            sub_title: 'Students Placed',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 2,
            title: '25 LPA',
            sub_title: 'Highest Salary',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 3,
            title: '60 %',
            sub_title: 'Average Salary Hike',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 4,
            title: '400 +',
            sub_title: 'Hiring Partners',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
        ],
      },

      descriptions: [
        {
          data: {
            type: 'heading',
            title: 'About the',
            title2: 'Program',
          },
        },
        {
          data: {
            type: 'des',
            list: [
              'SAP Sales & Distribution (SD) is a comprehensive module that encompasses a wide array of topics related to sales, order management,and distribution processing. Among its key components are Sales, SalesSupport, Shipping, Billing, and Sales & Logistics Systems. This module plays a pivotal role in managing and optimizing the various facets of sales and distribution operations within an organization.',
              'SAP Sales & Distribution (SD) is a comprehensive module that encompasses a wide array of topics related to sales, order management, and distribution processing. Among its key components are Sales, Sales Support, Shipping, Billing, and Sales & Logistics Information Systems. This module plays a pivotal role in managing and optimizing the various facets of sales and distribution operations within an organization.',
            ],
          },
        },
        {
          data: {
            type: 'sub_heading',
            title: 'This opportunity',
            title2: 'is open to:',
            list: [
              {
                id: 1,
                type: 'list',
                data: 'Any graduate or postgraduate.',
              },
              {
                id: 2,
                type: 'list',
                data: 'Individuals with prior experience in sales and distribution.',
              },
              {
                id: 3,
                type: 'list',
                data: 'Those possessing substantial business knowledge in the field of sales and distribution.',
              },
              {
                id: 4,
                type: 'head',
                data: 'Roles and Responsibilities of SAP PP Consultant',
              },
              {
                id: 5,
                type: 'list',
                data: 'Understanding the business processes within the Sales, Delivery, and Invoicing departments.',
              },
            ],
          },
        },
        {
          data: {
            type: 'content',
            data: [
              {
                type: 'regular',
                title: 'Course Contents',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Overview of SAP',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'SAP Architecture',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Navigation of SAP',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'SAP System Profile',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'SAP Installation',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Operation Mode setting',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 7,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Client Administration',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 8,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'SAP Security: User Administration',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 9,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Roles and Profiles',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 10,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Security Reporting',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 11,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'CUA Concept',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 12,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Spool Administration: Access method',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 13,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Change & Transport System (CTS)',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 14,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Background Jobs',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 15,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Database Administration',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 16,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Application maintenance(SAP start or stop)',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 17,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'SAP Connect',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 18,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'System Monitoring - Health check',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 19,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Housekeeping jobs',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 20,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'System Copy/Refresh',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 21,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Online Support System - open the case with sap',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 22,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Netweaver and Java Stack',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 23,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'SAP Solution Manager Introduction',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 24,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'SAP Fiori Architecture/ Live monitoring',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 25,
                    type: 'head',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'HANA Topics',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 26,
                    type: 'head',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'HANA Introduction',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 27,
                    type: 'head',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'HANA Architecture',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 28,
                    type: 'head',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'HANA Installation and Upgrade',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 29,
                    type: 'head',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'HANA Cockpit Installation and Administration',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 30,
                    type: 'head',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'HANA Multicontainer architecture',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 31,
                    type: 'head',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'HANA Administration tools',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 32,
                    type: 'head',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Database Administration tasks',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 33,
                    type: 'head',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Backup and Recovery',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 34,
                    type: 'head',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'HANA Administration tools',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 35,
                    type: 'head',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Security',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 36,
                    type: 'head',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'User and Authorization Maintenance',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 37,
                    type: 'head',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'HA DR Concept',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 38,
                    type: 'head',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'HANA Replication',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },
            ],
          },
        },
      ],
      certification_process: {
        img: 'https://www.learningsaint.com/assets/images/SAP_MM_Course.jpg',
        list: [
          {
            id: 1,
            title: 'Counselling and Registration',
            des: 'Consult with our counselors to check your eligibility and the right batch, and then Register for the Certified SAP PP Power User Program',
          },
          {
            id: 2,
            title: 'Complete the Program',
            des: 'Attend 44 hours sessions and gain 44 credits to get course completion certification from Learning Saint',
          },
          {
            id: 3,
            title: 'Earn Certification',
            des: 'Post-successful completion of the course, earn Learning Saint Certified SAP PP Power User Program Certification. Post it on social media, get it framed, and increase your value in the industry',
          },
        ],
      },
      career_service: {
        img: 'https://www.learningsaint.com/assets/images/about/about-05/about-group-01.jpg',
        list: [
          {
            id: 1,
            title: 'Placement Drives',
            des: 'We are dedicated to supporting our students throughout their career journey. Join us, and lets embark on a journey towards a successful and fulfilling career together.',
          },
          {
            id: 2,
            title: 'Icons Images Premium access to Learning Saint Job portal',
            des: 'Exclusive access to our dedicated job portal and apply for jobs. More than 2100+ hiring partners’ including top start–ups and product companies hiring our learners. Mentored support on job search and relevant jobs for your career growth.',
          },
          {
            id: 3,
            title: 'Personalized Job Consulting',
            des: 'Share what kind of job you are looking for and we will provide you with verified job openings that match your requirement.',
          },
        ],
      },

      imageList: [
        {
          heading: {
            title: 'Access the best jobs',
            title2: 'in the industry',
          },
          list: [
            'https://www.learningsaint.com/assets/images/industry/1.png',
            'https://www.learningsaint.com/assets/images/industry/2.png',
            'https://www.learningsaint.com/assets/images/industry/3.png',
            'https://www.learningsaint.com/assets/images/industry/4.png',
            'https://www.learningsaint.com/assets/images/industry/5.png',
            'https://www.learningsaint.com/assets/images/industry/6.png',
            'https://www.learningsaint.com/assets/images/industry/7.png',
            'https://www.learningsaint.com/assets/images/industry/8.png',
            'https://www.learningsaint.com/assets/images/industry/9.png',
            'https://www.learningsaint.com/assets/images/industry/10.png',
            'https://www.learningsaint.com/assets/images/industry/11.png',
            'https://www.learningsaint.com/assets/images/industry/12.png',
            'https://www.learningsaint.com/assets/images/industry/13.png',
            'https://www.learningsaint.com/assets/images/industry/14.png',
            'https://www.learningsaint.com/assets/images/industry/15.png',
            'https://www.learningsaint.com/assets/images/industry/16.png',
            'https://www.learningsaint.com/assets/images/industry/17.png',
            'https://www.learningsaint.com/assets/images/industry/18.png',
            'https://www.learningsaint.com/assets/images/industry/19.png',
            'https://www.learningsaint.com/assets/images/industry/20.png',
            'https://www.learningsaint.com/assets/images/industry/21.png',
            'https://www.learningsaint.com/assets/images/industry/22.png',
            'https://www.learningsaint.com/assets/images/industry/23.png',
            'https://www.learningsaint.com/assets/images/industry/24.png',
            'https://www.learningsaint.com/assets/images/industry/25.png',
            'https://www.learningsaint.com/assets/images/industry/26.png',
            'https://www.learningsaint.com/assets/images/industry/27.png',
            'https://www.learningsaint.com/assets/images/industry/28.png',
            'https://www.learningsaint.com/assets/images/industry/29.png',
            'https://www.learningsaint.com/assets/images/industry/30.png',
            'https://www.learningsaint.com/assets/images/industry/31.png',
            'https://www.learningsaint.com/assets/images/industry/32.png',
          ],
        },
      ],
    },
  },
  {
    id: 7,
    title: 'PGP in Data Science',
    tag: ['Post Graduate Programs', 'Top-Rated Courses'],
    breadcrumb: ['Home', 'Data Science', 'SAP BASIS Admin & HANA'],
    categories: 'Data Science',
    image:
      'https://www.learningsaint.com/assets/images/course_img/pgp__data__sci.webp',
    navigate: 'DataScienceDetailScreen',
    url: 'data-science',
    guaranteed: {
      url: 'https://www.learningsaint.com/assets/images/favicon.png',
      title: 'Job Guaranteed Program',
    },
    edu_meta: [
      {
        id: 1,
        title: '12 Months',
        iconSettings: 'FontAwesome',
        icon: 'list-alt',
      },
      {
        id: 2,
        title: 'Live Online',
        iconSettings: 'AntDesign',
        icon: 'clockcircleo',
      },
    ],
    rating: {
      rating_count: 4.7,
    },
    price: {
      currency: 'INR',
      currencySign: '$',
      amount_title: '0',
      amount: 0,
    },
    course_detail: {
      list: false,
      title: 'Post Graduate Program in Data Science',
      des: 'Professionals with a solid understanding of data science have become more valuable than ever in our data-driven and technological society. Learning Saints Postgraduate program in Data Science is designed for students of various levels of expertise, preparing you for a wide range of challenging and in-demand positions. Learn particular, marketable abilities in the leading coding languages, as well as Data Science standard programming, mathematics, statistics, data analysis, and machine learning.',
      add: {
        isEnable: true,
        title: 'IN Collaboration With IBM & Microsoft',
        img: 'https://www.learningsaint.com/assets/images/ibm_mircosoft.png',
      },
      edu_meta: [
        {
          id: 1,
          title: 'Type',
          value: 'Data Science',
        },
        {
          id: 2,
          title: 'Duration',
          value: '12 Months',
        },
        {
          id: 3,
          title: 'Classes',
          value: 'Online Classes',
        },
      ],
      image:
        'https://www.learningsaint.com/assets/images/course_img/sap__mm.webp',

      general_data_grouth: {
        title: {
          f: 'What our',
          s: 'learnes have achieved?',
        },
        sub_title:
          ' A quick summary of the placement A quick summary of the placement A quick summary of the placement A quick summary of the placement',

        list: [
          {
            id: 1,
            title: '3500 +',
            sub_title: 'Students Placed',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 2,
            title: '25 LPA',
            sub_title: 'Highest Salary',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 3,
            title: '60 %',
            sub_title: 'Average Salary Hike',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
          {
            id: 4,
            title: '400 +',
            sub_title: 'Hiring Partners',
            icon: 'https://img.icons8.com/ios-glyphs/30/user--v1.png',
          },
        ],
      },

      descriptions: [
        {
          data: {
            type: 'eduvibe',
            title: 'Join The Best Data Science And Analytics Course',
            des: 'Learn the real-world application of data science and build analytical models that enhance business outcomes. This job-assurance program is ideal for recent graduates and professionals who want to develop a successful data science and analytics career. You will gain practical knowledge about the implications of data science and analytics in real-world businesses and prepare to work as a data science professional in an emerging field of data science and analytics.',
            list: [
              {
                id: 1,
                img: 'https://www.learningsaint.com/assets/images/Sec3_1_job.webp',
                title: 'Job Assurance',
                des: 'Our program comes with a job assurance that offers you a chance to be placed at over 500 top-tier partner organisations hiring machine learning and artificial intelligence professionals.',
              },
              {
                id: 2,
                img: 'https://www.learningsaint.com/assets/images/Sec3_2_dedicated.webp',
                title: 'Dedicated Career Services',
                des: 'Our career services include resume development, profile enhancement, career mentorship, job assurance workshops and one-on-one career counselling to ensure you land the right job.',
              },
              {
                id: 3,
                img: 'https://www.learningsaint.com/assets/images/Sec3_6_real_world.webp',
                title: 'Real-world Projects',
                des: 'Implement what you’ve learned with over 25 real-world projects and case studies specially formulated by industry experts to make you job-ready.',
              },
              {
                id: 4,
                img: 'https://www.learningsaint.com/assets/images/Sec3_3_curr.webp',
                title: 'Job-specific Curriculum',
                des: 'Learn the practical applications of data science, Python, SQL, data analytics, power BI, and tableau while gaining expertise in these subjects.',
              },
              {
                id: 5,
                img: 'https://www.learningsaint.com/assets/images/Sec3_4_live_learning.webp',
                title: 'Live Learning Module',
                des: 'Our expert faculty delivers our robust curriculum using an interactive module and hands-on training methods to prepare you to work in various data science roles.',
              },
              {
                id: 6,
                img: 'https://www.learningsaint.com/assets/images/Sec3_5_kpmg.webp',
                title: 'KPMG India COE Organised Hackathons',
                des: 'Make your resume stand out by participating in coding hackathons to tackle complex business problems and get an opportunity to compete in a national-level competition.',
              },
            ],
          },
        },
        {
          data: {
            type: 'rating',
            backgroundImg:
              'https://www.learningsaint.com/assets/images/bg/home-two-about-us.jpg',
            title: 'Trusted By Millions Of Learners Around The World',
            list: [
              {
                id: 1,
                img: 'https://www.learningsaint.com/assets/images/google_logo.png',
                rating:
                  'https://www.learningsaint.com/assets/images/stargroup.svg',
                rating_no: '4.5',
              },
              {
                id: 2,
                img: 'https://www.learningsaint.com/assets/images/facebook_logo.png',
                rating:
                  'https://www.learningsaint.com/assets/images/stargroup.svg',
                rating_no: '4.7',
              },
              {
                id: 3,
                img: 'https://www.learningsaint.com/assets/images/ambition_logo.png',
                rating:
                  'https://www.learningsaint.com/assets/images/stargroup.svg',
                rating_no: '5.0',
              },
              {
                id: 4,
                img: 'https://www.learningsaint.com/assets/images/trustpilot_logo.png',
                rating:
                  'https://www.learningsaint.com/assets/images/stargroup.svg',
                rating_no: '4.8',
              },
            ],
          },
        },
        {
          data: {
            type: 'heading',
            title: 'About the',
            title2: 'Program',
          },
        },
        {
          data: {
            type: 'des',
            list: [
              'This Advanced program offers 10 courses and 30 industry-based projects with 1 capstone project. As a part of the training, you will receive five additional self-paced courses co-created with IBM. Additionally, you will also get exclusive access to IBM Watson Cloud Lab for Chatbots course.',
            ],
          },
        },
        {
          data: {
            type: 'sub_heading',
            title: 'Key',
            title2: 'Highlights',
            list: [
              {
                id: 1,
                type: 'list',
                data: '6 Months Live Internship',
              },
              {
                id: 2,
                type: 'list',
                data: 'Live Industrial Capstone & projects',
              },
              {
                id: 3,
                type: 'list',
                data: 'Life Time access to recorded sessions & LMS',
              },
              {
                id: 4,
                type: 'list',
                data: '1:1 Mentor Sessions',
              },
              {
                id: 5,
                type: 'list',
                data: 'On Demand Doubt Sessions',
              },
              {
                id: 6,
                type: 'list',
                data: 'Life Time Membership',
              },
            ],
          },
        },
        {
          data: {
            type: 'content',
            heading: 'Advanced Program in Data Science Course Curriculum',
            data: [
              {
                type: 'regular',
                title: 'Python for Data Science',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 01 – Introduction to Data Science using Python',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 02 – Python basic constructs',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 03 – Maths for DS-Statistics & Probability',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 04 – OOPs in Python (Self-paced)',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 05 – NumPy for mathematical computing',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 06 – SciPy for scientific computing',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 7,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 07 – Data manipulation',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 8,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 08 – Data visualization with Matplotlib',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 9,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 09 – Machine Learning using Python',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 10,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 10 – Supervised learning',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 11,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 11 – Unsupervised Learning',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 12,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 12 – Python integration with Spark (Self-paced)',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 13,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 13 – Dimensionality Reduction',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 14,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 14 – Time Series Forecasting',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },

              {
                type: 'regular',
                title: 'Machine Learning',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 01 – Introduction to Machine Learning',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 02 – Supervised Learning and Linear Regression',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 03 – Classification and Logistic Regression',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 04 – Decision Tree and Random Forest',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 05 – Naïve Bayes and Support Vector Machine (self-paced)',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 06 – Unsupervised Learning',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 7,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 07 – Natural Language Processing and Text Mining (self-paced)',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 8,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 08 – Introduction to Deep Learning',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 9,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 09 – Time Series Analysis (Self-paced)',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },

              {
                type: 'regular',
                title: 'AI & Deep Learning',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 01 – Introduction to Deep Learning and Neural Networks',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 02 – Multi-layered Neural Networks',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 03 – Artificial Neural Networks and Various Methods',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 04 – Deep Learning Libraries',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 05 – Keras API',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 06 – TFLearn API for TensorFlow',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 7,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 07 – DNNs (deep neural networks)',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 8,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 08 – CNNs (convolutional neural networks)',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 9,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 09 – RNNs (recurrent neural networks)',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 10,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 10 – Gpu in deep learning',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 11,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 11 – Autoencoders and Restricted Boltzmann Machine (RBM)',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 12,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 12 – Deep learning applications',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 13,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 13 – Chatbots',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },

              {
                type: 'regular',
                title: 'Data Visualization with Power BI',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 01 – Introduction to Power BI',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 02 – Data Extraction',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 03 – Data Transformation – Shaping & Combining Data',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 04 – Data Modelling & DAX',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 05 – Data Visualization with analytics',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 06 – Power BI Service (Cloud), Q&A, and Data Insights',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 7,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 07 – Power BI Settings, Administration & Direct Connectivity',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 8,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 08 – Embedded Power BI with API & Power BI',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 9,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 09 – Power BI Advance & Power BI Premium',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },

              {
                type: 'regular',
                title: 'Mongo DB',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 01 – Introduction to NoSQL and MongoDB',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 02 – MongoDB Installation',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 03 – Importance of NoSQL',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 04 – CRUD Operations',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 05 – Data Modeling and Schema Design',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 06 – Data Management and Administration',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 7,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: ' Module 07 – Data Indexing and Aggregation',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 8,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 08 – MongoDB Security',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 9,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 09 – Working with Unstructured Data',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },

              {
                type: 'regular',
                title: 'MS-SQL',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 01 – Introduction to SQL',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 02 – Database Normalization and Entity-Relationship Model',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 03 – SQL Operators',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 04 – Working with SQL: Join, Tables, and Variables',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 05 – Deep Dive into SQL Functions',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 06 – Working with Subqueries',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 7,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 07 – SQL Views, Functions, and Stored Procedures',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 8,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 08 – Deep Dive into User-defined Functions',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 9,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 09 – SQL Optimization and Performance',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 10,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 10 – Advanced Topics',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 11,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 11 – Managing Database Concurrency',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 12,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 12 – Programming Databases Using Transact-SQL',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 13,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 13 – Microsoft Courses: Study Material',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },

              {
                type: 'regular',
                title: 'Data Science with R',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 01 – Introduction to Data Science with R',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 2,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 02 – Data Exploration',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 3,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 03 – Data Manipulation',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 4,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 04 – Data Visualization',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 5,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 05 – Introduction to Statistics',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 6,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 06 – Machine Learning',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 7,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 07 – Logistic Regression',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 8,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 08 – Decision Trees and Random Forest',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 9,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 09 – Unsupervised Learning',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 10,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 10 – Association Rule Mining and Recommendation Engines',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 11,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 11 – Introduction to Artificial Intelligence',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 12,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 12 – Time Series Analysis',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 13,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 13 – Support Vector Machine (SVM)',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 14,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 14 – Naïve Bayes',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                  {
                    id: 15,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Module 15 – Text Mining',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },
            ],
          },
        },
        {
          data: {
            type: 'applyCourse_question',
            heading: {
              title: 'Who Can Apply',
              title2: 'for the Course?',
            },
            img: 'https://www.learningsaint.com/assets/images/who-can-apply.webp',
            list: [
              'Individuals with a bachelor’s degree and a keen interest to learn AI and Data Science',
              'IT professionals looking for a career transition as Data Scientists and Artificial Intelligence Engineers',
              'Professionals aiming to move ahead in their IT career',
              'Artificial Intelligence and Business Intelligence professionals',
              'Developers and Project Managers',
              'Freshers who aspire to build their career in the field of Artificial Intelligence and Data Science',
            ],
          },
        },
        {
          data: {
            type: 'roles_question',
            heading: {
              title: 'What roles can a person trained in Data Science &',
              title2: 'Artificial Intelligence play?',
            },

            list: [
              {
                id: 1,
                title: 'Senior Data Scientist',
                des: 'Understand the issues and create models based on the data gathered, and also manage a team of data scientists.',
                color: '#ff9900',
              },
              {
                id: 2,
                title: 'AI Expert',
                des: 'Build strategies on frameworks and technologies to develop AI solutions and help the organization prosper.',
                color: '#ff9900',
              },
              {
                id: 3,
                title: 'Machine Learning Expert',
                des: 'With the help of several machine learning tools and technologies, build statistical models with huge chunks of business data.',
                color: '#ff9900',
              },
              {
                id: 4,
                title: 'Applied Scientist',
                des: 'Design and build machine learning models to derive intelligence for the numerous services and products offered by the organization.',
                color: '#ff9900',
              },
              {
                id: 5,
                title: 'Big Data Specialist',
                des: 'Create and manage pluggable service-based frameworks that are customized in order to import, cleanse, transform, and validate data..',
                color: '#ff9900',
              },
              {
                id: 6,
                title: 'Senior Business Analyst',
                des: 'Extract data from the respective sources to perform business analysis, and generate reports, dashboards, and metrics to monitor the company’s performance.',
                color: '#ff9900',
              },
            ],

            heading2: {
              title: 'Skills to Master',
              skillsList: [
                {
                  id: 1,
                  title: 'Python',
                  des: '',
                  color: '#ff9900',
                },
                {
                  id: 2,
                  title: 'Data Science',
                  des: '',
                  color: '#ff9900',
                },
                {
                  id: 3,
                  title: 'Data Analysis',
                  des: '',
                  color: '#ff9900',
                },
                {
                  id: 4,
                  title: 'AI',
                  des: '',
                  color: '#ff9900',
                },
                {
                  id: 5,
                  title: 'GIT',
                  des: '',
                  color: '#ff9900',
                },
                {
                  id: 6,
                  title: 'MLOps',
                  des: '',
                  color: '#ff9900',
                },
                {
                  id: 7,
                  title: 'Data Wrangling',
                  des: '',
                  color: '#ff9900',
                },
                {
                  id: 8,
                  title: 'SQL',
                  des: '',
                  color: '#ff9900',
                },
                {
                  id: 9,
                  title: 'Story Telling',
                  des: '',
                  color: '#ff9900',
                },
                {
                  id: 10,
                  title: 'Machine Learning',
                  des: '',
                  color: '#ff9900',
                },
                {
                  id: 11,
                  title: 'Prediction algorithms',
                  des: '',
                  color: '#ff9900',
                },
                {
                  id: 12,
                  title: 'NLP',
                  des: '',
                  color: '#ff9900',
                },
                {
                  id: 13,
                  title: 'PySpark',
                  des: '',
                  color: '#ff9900',
                },
                {
                  id: 14,
                  title: 'Model',
                  des: '',
                  color: '#ff9900',
                },
                {
                  id: 15,
                  title: 'Data visualization',
                  des: '',
                  color: '#ff9900',
                },
              ],
            },
          },
        },
        {
          data: {
            type: 'imageList',
            imageList: [
              {
                heading: {
                  title: 'Tools',
                  title2: 'to Master',
                },
                list: [
                  'https://www.learningsaint.com/assets/images/tool-to-master/pyspark-1.webp',
                  'https://www.learningsaint.com/assets/images/tool-to-master/python-2.webp',
                  'https://www.learningsaint.com/assets/images/tool-to-master/jupyter-3.webp',
                  'https://www.learningsaint.com/assets/images/tool-to-master/Scipy-2.webp',
                  'https://www.learningsaint.com/assets/images/tool-to-master/numpy-2.webp',
                  'https://www.learningsaint.com/assets/images/tool-to-master/pandas.webp',
                  'https://www.learningsaint.com/assets/images/tool-to-master/matplotlib.webp',
                  'https://www.learningsaint.com/assets/images/tool-to-master/tensorflow-1.webp',
                  'https://www.learningsaint.com/assets/images/tool-to-master/SQL.webp',
                  'https://www.learningsaint.com/assets/images/tool-to-master/Power-BI.webp',
                  'https://www.learningsaint.com/assets/images/tool-to-master/excel-1.webp',
                  'https://www.learningsaint.com/assets/images/tool-to-master/git.webp',
                  'https://www.learningsaint.com/assets/images/tool-to-master/SparkSQL.webp',
                ],
              },
              {
                heading: {
                  title: 'Languages and',
                  title2: 'Tools Covered',
                },
                list: [
                  'https://www.learningsaint.com/assets/images/language_and_tool/colab-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/OpernCV-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/Scrapy-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/imbalanced-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/spaCy-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/seaboarn-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/scikit-learn-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/mysql-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/Flask-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/TensorFlow-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/statsmodels-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/tableau-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/matplotlib-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/Jupyter-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/Pandas-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/powerbi-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/Numpy-logo.png',
                  'https://www.learningsaint.com/assets/images/language_and_tool/Excel-logo-1.png',
                ],
              },
            ],
          },
        },
        {
          data: {
            type: 'eduvibe_specializations',
            title: 'Specializations & Electives Overview',
            des: '',
            list: [
              {
                id: 1,
                img: 'https://www.learningsaint.com/assets/images/Banking-01.png',
                title: '',
                des: 'Banking, Finance, & Insurance: Dive into projects like Churn Analysis, Risk-Reward Assessment, Stock Market Analysis, and Fraud Detection to grasp fundamental concepts in BFSI.',
              },
              {
                id: 2,
                img: 'https://www.learningsaint.com/assets/images/Ecommerce-02.png',
                title: '',
                des: 'Ecommerce & Marketing: Explore Customer Lifetime Analysis, Ad Campaign Evaluation, Market Basket Analysis, and Dynamic Pricing strategies in this field.',
              },
              {
                id: 3,
                img: 'https://www.learningsaint.com/assets/images/Healthcare-03.png',
                title: '',
                des: 'Healthcare & Pharmacy: Explore Payer and Provider Analytics, as well as Analytics applied in the Pharmaceutical Industry to gain insights into essential Healthcare principles.',
              },
              {
                id: 4,
                img: 'https://www.learningsaint.com/assets/images/Operations-01.png',
                title: '',
                des: 'HR & Operations: Engage in Attrition Analysis, Promotion Assessment, Productivity Evaluation, and Resource Optimization to comprehend core BFSI principles in a different context.',
              },
            ],
          },
        },
        {
          data: {
            type: 'problem_solving',
            bg: 'https://www.learningsaint.com/assets/images/bg/home-four-courses.jpg',
            heading: {
              title:
                'Participate in Weekday Problem-Solving Sessions led by Industry Experts',
            },
            list: [
              'Engage in problem-solving sessions guided by industry professionals throughout the weekdays.',
              'Enhance problem-solving skills through active participation on platforms like HackerRank and HackerEarth.',
              'Acquire daily insights into new problem-solving techniques and strategies.',
              'Access personalized doubt resolution sessions whenever needed to ensure continual learning and growth.',
            ],
          },
        },
        {
          data: {
            type: 'alumni',
            heading: {
              title: 'Alumni',
              title2: 'Highlights',
            },
            des: '',
            place_offer_img:
              'https://www.learningsaint.com/assets/images/Roles-Offered-in-Data-science.png',
            place_heighlightList: [
              {
                id: 1,
                heightLight_title: '200+',
                color: '#f15a22',
                heightLight_name: 'Global Companies',
              },
              {
                id: 2,
                heightLight_title: '$122K PA',
                color: '#085099',
                heightLight_name: 'Average CTC',
              },
              {
                id: 3,
                heightLight_title: '$250K PA',
                color: '#ef9400',
                heightLight_name: 'Highest CTC',
              },
              {
                id: 4,
                heightLight_title: '87%',
                color: '#1d8a1e',
                heightLight_name: 'Average Salary Hike',
              },
            ],
          },
        },
        {
          data: {
            type: 'eduvibe_case_studies',
            title: 'Top Data Science Case Studies for Learning Saint',
            des: '',
            list: [
              {
                id: 1,
                img: '',
                title:
                  'Estimating Credit Risk through Data Analysis and Visualization',
                des: 'Analysing Banking Dataset: This case study involves utilizing Data Analysis and Visualization techniques on a banking dataset to assess the Credit Risk associated with individual borrowers. By conducting this study, the aim is to assist the bank in evaluating and managing the risk linked to its loan borrowers.',
              },
              {
                id: 2,
                img: '',
                title: 'Data Cleansing and Enrichment for a Job Portal:',
                des: 'Enhancing a Job Portal Dataset: This case study focuses on Data Cleansing and Processing for a large-scale Job Portal Dataset. The objective is to prepare the data for further analysis and machine learning model training. The outcome aims to empower the job portal with clean, enriched data for informed decision-making and implementation of various AI algorithms to gain profound insights.',
              },
              {
                id: 3,
                img: '',
                title:
                  'Evaluating Dimensionality Reduction Techniques in Healthcare Data:',
                des: 'Assessing Dimensionality Reduction: This case study involves the comparison of various Dimensionality Reduction methods using a high-dimensional Healthcare Dataset. The goal is to apply different algorithms to evaluate information loss in each case. This study aims to determine the effectiveness of Dimensionality Reduction techniques and their applicability in managing high-dimensional data in healthcare analysis.',
              },
            ],
          },
        },

        {
          data: {
            type: 'your_achieve',
            heading: {
              title: 'By the end of this program,',
              title2: 'youll achieve',
            },
            img: 'https://www.learningsaint.com/assets/images/about/about-08/about-image-09.jpg',
            list: [
              'Comprehensive comprehension of diverse data types and datasets.',
              'Proficient creation of visualizations and dashboards to drive data-driven decision-making processes.',
              'Thorough understanding of both structured and unstructured databases.',
              'In-depth knowledge of Machine Learning and Deep Learning algorithms.',
              'Profound understanding of NLP (Natural Language Processing) and Time Series concepts.',
              'Proficiency in extracting insights and patterns from raw data of varied forms.',
              'Great Understanding of Structured and Unstructured Databases',
              'Ability to conduct multifaceted analyses on a wide array of data categories.',
              'Capability to craft robust predictive models employing advanced Machine Learning and Deep Learning techniques.',
            ],
          },
        },

        {
          data: {
            type: 'batch_profile',
            heading: {
              title: 'Data Science',
              title2: 'Batch Profile',
            },
            image_list: [
              'https://www.learningsaint.com/assets/images/batch_profile.png',
              'https://www.learningsaint.com/assets/images/industry_profile.png',
            ],
          },
        },

        {
          data: {
            type: 'your_achieve',
            heading: {
              title: 'Career Support ',
              title2: 'and Mentorship',
            },
            img: 'https://www.learningsaint.com/assets/images/about/about-08/about-image-09.jpg',
            list: [
              'Receive personalized feedback on weekly assignments and case studies from leading industry and subject matter experts.',
              'Benefit from lifelong access to the Learningsaint Learning Portal, ongoing support from the Learningsaint Alumni Network, and dedicated placement services.',
              'Access the Learning Saint Learning Portal for a lifetime, along with continuous support from the Learning Saint Alumni Network and placement services.',
              'Engage in multiple mock interviews conducted by Kaggle Grandmasters and seasoned Data Scientists representing startups.',
              'Participate in over 20 guided industry projects and case studies led by domain and subject matter experts, providing a step-by-step learning experience.',
            ],
          },
        },

        {
          data: {
            type: 'advantages_with_learningSaint',
            heading: {
              title: 'The Learning Saint Advantage',
              title2: '',
            },
            list: [
              {
                id: 0,
                img: 'https://www.learningsaint.com/assets/images/event/event-01/event-01.jpg',
                title: 'Individualised Support and Direction',
                list: [
                  '1:1 Free Unlimited Doubt clearing sessions',
                  '1:1 Student support',
                  'Challenges during hackathons to hone your talents',
                  'E-portfolio to display your skills',
                  '1:1 Personality development classes',
                ],
              },
              {
                id: 1,
                img: 'https://www.learningsaint.com/assets/images/event/event-01/event-02.jpg',
                title:
                  'Get Ready with Domain Experts Get Ready with Domain Experts',
                list: [
                  'Learn from top Data Scientist Educators from the Country through a Live Online classroom.',
                  '24X7 Support from Teaching Assistants for Help in Assignments, Discussions, and Doubts Resolutions.',
                ],
              },
              {
                id: 2,
                img: 'https://www.learningsaint.com/assets/images/event/event-01/event-03.jpg',
                title:
                  'Industry Leaders for Professional Grooming Industry Leaders for Professional Grooming',
                list: [
                  'Know what’s Happening inside the industry, and What’s really required to make it through by engaging with Data Scientist',
                  'Accompany them with sessions on Hiring, Day-to-Day Life of a Data Scientists etc.',
                ],
              },
            ],
          },
        },

        {
          data: {
            type: 'certificate',
            certificate_img:
              'https://www.learningsaint.com/assets/images/certificate/Data-Science.jpg',
            heading: 'Get Every General Answers From Here',
            data: [
              {
                type: 'regular',
                title: 'What does it take become an author?',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: 'https://img.icons8.com/ios/50/receipt-euro.png',
                    data: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress LMS plugin you go with, but in general.',
                    rightIcon: 'https://img.icons8.com/dotty/80/lock-2.png',
                  },
                ],
              },
              {
                type: 'regular',
                title: 'How to Change my Password easily?',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: '',
                    data: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress LMS plugin you go with, but in general.',
                    rightIcon: '',
                  },
                ],
              },
              {
                type: 'regular',
                title: 'How to Change my Plan using PayPal?',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: '',
                    data: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress LMS plugin you go with, but in general.',
                    rightIcon: '',
                  },
                ],
              },
              {
                type: 'regular',
                title: 'How long it take to create a video course?',
                list: [
                  {
                    id: 1,
                    type: 'list',
                    lefticon: '',
                    data: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress LMS plugin you go with, but in general.',
                    rightIcon: '',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: 8,
    title: 'Master in Data Science',
    tag: ['Top-Rated Courses', 'Degree Program'],
    categories: 'Data Science',
    image:
      'https://www.learningsaint.com/assets/images/course_img/cop__uni.webp',
    navigate: 'DataScienceDetailScreen',
    url: 'master-in-data-science',
    guaranteed: {
      url: 'https://www.learningsaint.com/assets/images/favicon.png',
      title: 'Job Guaranteed Program',
    },
    edu_meta: [
      {
        id: 1,
        title: '12 Months',
        iconSettings: 'FontAwesome',
        icon: 'list-alt',
      },
      {
        id: 2,
        title: 'Live Online',
        iconSettings: 'AntDesign',
        icon: 'clockcircleo',
      },
    ],
    rating: {
      rating_count: 4.9,
    },
    price: {
      currency: 'INR',
      currencySign: '$',
      amount_title: '0',
      amount: 0,
    },
  },
  {
    id: 9,
    title: 'Data Science Professional Certification',
    tag: ['Top-Rated Courses'],
    categories: 'Data Science',
    image:
      'https://www.learningsaint.com/assets/images/course_img/data__science__pf.webp',
    navigate: 'DataScienceDetailScreen',
    url: 'professional-in-data-science',
    guaranteed: {
      url: 'https://www.learningsaint.com/assets/images/favicon.png',
      title: 'Job Guaranteed Program',
    },
    edu_meta: [
      {
        id: 1,
        title: '6 Months',
        iconSettings: 'FontAwesome',
        icon: 'list-alt',
      },
      {
        id: 2,
        title: 'Live Online',
        iconSettings: 'AntDesign',
        icon: 'clockcircleo',
      },
    ],
    rating: {
      rating_count: 4.6,
    },
    price: {
      currency: 'INR',
      currencySign: '$',
      amount_title: '0',
      amount: 0,
    },
  },
  {
    id: 10,
    title: 'PGP in Cyber Security',
    tag: ['Post Graduate Programs', 'Top-Rated Courses'],
    categories: 'Cyber Security',
    image:
      'https://www.learningsaint.com/assets/images/course_img/cyber__security.webp',
    navigate: '',
    url: 'pgp-in-cyber-security',
    guaranteed: {
      url: 'https://www.learningsaint.com/assets/images/favicon.png',
      title: 'Job Guaranteed Program',
    },
    edu_meta: [
      {
        id: 1,
        title: '12 Months',
        iconSettings: 'FontAwesome',
        icon: 'list-alt',
      },
      {
        id: 2,
        title: 'Live Online',
        iconSettings: 'AntDesign',
        icon: 'clockcircleo',
      },
    ],
    rating: {
      rating_count: 4.6,
    },
    price: {
      currency: 'INR',
      currencySign: '$',
      amount_title: '0',
      amount: 0,
    },
  },
  {
    id: 11,
    title: 'Professional in Cyber Security Certification',
    tag: [''],
    categories: 'Cyber Security',
    image:
      'https://www.learningsaint.com/assets/images/course_img/cyber__security.webp',
    navigate: '',
    url: 'professional-in-cyber-security',
    guaranteed: {
      url: 'https://www.learningsaint.com/assets/images/favicon.png',
      title: 'Job Guaranteed Program',
    },
    edu_meta: [
      {
        id: 1,
        title: '12 Months',
        iconSettings: 'FontAwesome',
        icon: 'list-alt',
      },
      {
        id: 2,
        title: 'Live Online',
        iconSettings: 'AntDesign',
        icon: 'clockcircleo',
      },
    ],
    rating: {
      rating_count: 4.6,
    },
    price: {
      currency: 'INR',
      currencySign: '$',
      amount_title: '0',
      amount: 0,
    },
  },
  {
    id: 12,
    title: 'Masters Degree IN Cyber Security',
    tag: ['Degree Program'],
    categories: 'Cyber Security',
    image:
      'https://www.learningsaint.com/assets/images/course_img/cyber__uni.webp',
    navigate: '',
    url: 'master-in-cyber-security',
    guaranteed: {
      url: 'https://www.learningsaint.com/assets/images/favicon.png',
      title: 'Job Guaranteed Program',
    },
    edu_meta: [
      {
        id: 1,
        title: '12 Months',
        iconSettings: 'FontAwesome',
        icon: 'list-alt',
      },
      {
        id: 2,
        title: 'Live Online',
        iconSettings: 'AntDesign',
        icon: 'clockcircleo',
      },
    ],
    rating: {
      rating_count: 4.6,
    },
    price: {
      currency: 'INR',
      currencySign: '$',
      amount_title: '0',
      amount: 0,
    },
  },
  {
    id: 13,
    title: 'Embrace Digital Mastery',
    tag: [],
    categories: 'Digital Marketing',
    image:
      'https://www.learningsaint.com/assets/images/course_img/cyber__uni.webp',
    navigate: '',
    url: 'digital-marketing',
    guaranteed: {
      url: 'https://www.learningsaint.com/assets/images/favicon.png',
      title: 'Job Guaranteed Program',
    },
    edu_meta: [
      {
        id: 1,
        title: '12 Months',
        iconSettings: 'FontAwesome',
        icon: 'list-alt',
      },
      {
        id: 2,
        title: 'Live Online',
        iconSettings: 'AntDesign',
        icon: 'clockcircleo',
      },
    ],
    rating: {
      rating_count: 4.6,
    },
    price: {
      currency: 'INR',
      currencySign: '$',
      amount_title: '0',
      amount: 0,
    },
  },
  {
    id: 14,
    title: 'PGP In Full Stack Software Development',
    tag: ['Top-Rated Courses', 'Degree Program', 'Post Graduate Programs'],
    categories: 'Full Stack Development',
    image:
      'https://www.learningsaint.com/assets/images/course_img/full_stack.webp',
    navigate: '',
    url: 'full-stack-development',
    guaranteed: {
      url: 'https://www.learningsaint.com/assets/images/favicon.png',
      title: 'Job Guaranteed Program',
    },
    edu_meta: [
      {
        id: 1,
        title: '12 Months',
        iconSettings: 'FontAwesome',
        icon: 'list-alt',
      },
      {
        id: 2,
        title: 'Live Online',
        iconSettings: 'AntDesign',
        icon: 'clockcircleo',
      },
    ],
    rating: {
      rating_count: 4.2,
    },
    price: {
      currency: 'INR',
      currencySign: '$',
      amount_title: '0',
      amount: 0,
    },
  },
];

export const keyFeatures_Or_LearnerBenefits: {
  id: number;
  icon_type: string;
  icon: string;
  title: string;
}[] = [
  {
    id: 1,
    icon_type: 'FontAwesome',
    icon: 'users',
    title: 'World Class Pedagogy',
  },
  {
    id: 2,
    icon_type: 'FontAwesome5',
    icon: 'wallet',
    title: 'Customized Programs with Personal Mentorship',
  },
  {
    id: 3,
    icon_type: 'FontAwesome',
    icon: 'line-chart',
    title: 'Career Assistance with 100% Job Security',
  },
  {
    id: 4,
    icon_type: 'FontAwesome',
    icon: 'handshake-o',
    title: 'Soft Skill Development',
  },
];

export const hiringPartner: {
  id: number;
  reverse: boolean;
  list: string[];
}[] = [
  {
    id: 1,
    reverse: false,
    list: [
      'https://www.learningsaint.com/assets/images/hiring__pathners/1.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/2.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/3.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/4.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/5.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/6.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/7.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/8.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/9.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/10.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/11.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/12.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/13.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/14.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/15.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/16.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/17.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/18.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/19.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/20.png',
    ],
  },
  {
    id: 2,
    reverse: true,
    list: [
      'https://www.learningsaint.com/assets/images/hiring__pathners/21.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/22.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/23.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/24.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/25.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/26.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/27.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/28.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/29.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/30.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/31.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/32.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/33.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/34.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/35.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/36.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/37.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/38.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/39.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/40.png',
    ],
  },
  {
    id: 3,
    reverse: false,
    list: [
      'https://www.learningsaint.com/assets/images/hiring__pathners/41.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/42.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/43.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/44.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/45.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/46.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/47.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/48.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/49.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/50.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/51.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/52.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/53.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/54.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/55.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/56.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/57.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/58.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/59.png',
      'https://www.learningsaint.com/assets/images/hiring__pathners/60.png',
    ],
  },
];

export const learnerBenefit: {
  id: number;
  heading: string;
  img: string;
  list: {
    id: number;
    desc: string;
    icon_color: string;
    icon_type: 'circle' | 'square';
  }[];
}[] = [
  {
    id: 1,
    heading: 'World Class Pedagogy',
    img: 'https://www.learningsaint.com/assets/images/learner-pic-1.webp',
    list: [
      {
        id: 1,
        desc: "Learn from the World's Best Faculty & Industry Experts",
        icon_color: '#ff6e06',
        icon_type: 'circle',
      },
      {
        id: 2,
        desc: 'Learn with fun Hands-on Exercises & Assignments',
        icon_color: '#ff6e06',
        icon_type: 'circle',
      },
      {
        id: 3,
        desc: 'Participate in Hackathons & Group Activities',
        icon_color: '#ff6e06',
        icon_type: 'circle',
      },
    ],
  },
  {
    id: 2,
    heading: 'Personalized Guidance with 24*7 Support',
    img: 'https://www.learningsaint.com/assets/images/learner-pic-2.webp',
    list: [
      {
        id: 1,
        desc: 'Dedicated Learning Managers',
        icon_color: '#ff6e06',
        icon_type: 'circle',
      },
      {
        id: 2,
        desc: '24*7 learning Support',
        icon_color: '#ff6e06',
        icon_type: 'circle',
      },
      {
        id: 3,
        desc: 'Network with Peers & Interact with Industry Leaders',
        icon_color: '#ff6e06',
        icon_type: 'circle',
      },
    ],
  },
  {
    id: 3,
    heading: 'Career Assistance',
    img: 'https://www.learningsaint.com/assets/images/learner-pic-3.webp',
    list: [
      {
        id: 1,
        desc: 'Resume Building & Mock Interview Prep',
        icon_color: '#ff6e06',
        icon_type: 'circle',
      },
      {
        id: 2,
        desc: 'Exclusive access to Intellipaat Job Portal',
        icon_color: '#ff6e06',
        icon_type: 'circle',
      },
      {
        id: 3,
        desc: '400+ Hiring Partners',
        icon_color: '#ff6e06',
        icon_type: 'circle',
      },
    ],
  },
];

export const testimonialsReview: {
  id: number;
  img: string;
  name: string;
  designation: string;
  review: string;
}[] = [
  {
    id: 1,
    img: 'https://www.learningsaint.com/assets/images/testimonial/testimonial-04/client-01.png',
    // img: require("@/assets/image/testimonial/testimonial-04/client-01.png"),
    name: 'Linda Rose',
    designation: 'Cloud Trainee at Rapyder Cloud Solutions',
    review:
      '“ I was a fresher when I took the AWS training. The trainer taught us simpler ways to understand the concepts clearly. I cracked my interview for a Cloud Trainee role at Rapyder Cloud Solutions Pvt Ltd within just 3 months of the training. I am the only one who got a higher package in my college batch. Also, it helped me clear the AWS SAA exam.”',
  },
  {
    id: 2,
    img: 'https://www.learningsaint.com/assets/images/testimonial/testimonial-04/client-02.png',
    // img: require("@/assets/image/testimonial/testimonial-04/client-02.png"),
    name: 'William Joseph',
    designation: 'Data Analyst at General Dynamics',
    review:
      '“Learning Saint made the journey from serving in the US Army to becoming a Data Analyst possible. Earlier, everything was new to me and I wasn’t able to understand anything. But Learning Saint taught me all the tools and technologies in Data Science which gave me the confidence to perform better in the interviews. They also assisted in resume-building to get a job.”',
  },
  {
    id: 3,
    img: 'https://www.learningsaint.com/assets/images/testimonial/testimonial-04/client-03.png',
    // img: require("@/assets/image/testimonial/testimonial-04/client-03.png"),
    name: 'Mike Paul',
    designation: 'Sr. Software Engineer at Wipro',
    review:
      '“ I was an Associate at Capgemini but due to some issues, I had to drop. Then, I started learning Learning Saint Data Science course during the lockdown which helped me build strong foundations and exposure to real-time projects. With this knowledge, I got a job as a Data Scientist with 150% salary hike at Wipro.”',
  },
  {
    id: 4,
    img: 'https://www.learningsaint.com/assets/images/testimonial/testimonial-04/client-04.png',
    // img: require("@/assets/image/testimonial/testimonial-04/client-04.png"),
    name: 'Patricia Anna',
    designation: 'Software Developer in Test at Motifworks',
    review:
      '“ The Selenium with Java course helped me to actively contribute to my current project. I was able to make a job switch in the Covid times with a hike of 150% which was all due to Learning Saint diligent training and support. Also, I have received another offer from a top product-based company with a hike of 100%. Thank you, Learning Saint team and trainers. ”',
  },
  {
    id: 5,
    img: 'https://www.learningsaint.com/assets/images/testimonial/testimonial-04/client-05.png',
    // img: require("@/assets/image/testimonial/testimonial-04/client-05.png"),
    name: 'Davis Thomas',
    designation: 'Data Analyst at General Dynamics',
    review:
      '“Learning Saint made the journey from serving in the US Army to becoming a Data Analyst possible. Earlier, everything was new to me and I wasn’t able to understand anything. But Learning Saint taught me all the tools and technologies in Data Science which gave me the confidence to perform better in the interviews. They also assisted in resume-building to get a job.”',
  },
  {
    id: 6,
    img: 'https://www.learningsaint.com/assets/images/testimonial/testimonial-04/client-06.png',
    // img: require("@/assets/image/testimonial/testimonial-04/client-06.png"),
    name: 'Thomas Jones',
    designation: 'Cloud Trainee at Rapyder Cloud Solutions',
    review:
      '“ I was a fresher when I took the AWS training. The trainer taught us simpler ways to understand the concepts clearly. I cracked my interview for a Cloud Trainee role at Rapyder Cloud Solutions Pvt Ltd within just 3 months of the training. I am the only one who got a higher package in my college batch. Also, it helped me clear the AWS SAA exam.”',
  },
];
export const testimonialsAbout: {
  id: number;
  img: string;
  name: string;
  designation: string;
  review: string;
}[] = [
  {
    id: 1,
    img: 'https://www.learningsaint.com/assets/images/testimonial/testimonial-04/client-01.png',
    // img: require("@/assets/image/testimonial/testimonial-04/client-01.png"),
    name: 'Sophia',
    designation: 'Software Developer',
    review:
      'I cannot thank Learning Saint for the wonderful learning experience and the impact it had mades. The risk-free education concept was a game-changer. It allowed me to pursue my dreams without the fear of financial burden. The support and guidance I received from the institution were exceptional. The encouragement to learn in ways that suited me, combined with the culture of peer-to-peer teaching, made my learning experience truly personalized. Today, Ive not only realized my true potential but have also achieved a career milestone I once thought was beyond my reach.',
  },
  {
    id: 2,
    img: 'https://www.learningsaint.com/assets/images/testimonial/testimonial-04/client-02.png',
    // img: require("@/assets/image/testimonial/testimonial-04/client-02.png"),
    name: 'Nathan',
    designation: 'Data Scientist',
    review:
      '"The computer science program is world-class. The hands-on projects and access to cutting-edge technology have given me the skills and confidence to excel in the tech industry."',
  },
  {
    id: 3,
    img: 'https://www.learningsaint.com/assets/images/testimonial/testimonial-04/client-03.png',
    // img: require("@/assets/image/testimonial/testimonial-04/client-03.png"),
    name: 'Emily',
    designation: 'Engineering Student',
    review:
      'Enrolling in Learning Saint was one of the best decisions Ive ever made for my career. The diverse range of courses gave me the flexibility to choose the path that suited my interests, and the guaranteed learning outcomes provided a sense of security. What truly set this institution apart was the encouraging atmosphere that fostered peer-to-peer knowledge sharing. I not only learned from experienced instructors but also gained valuable insights from fellow students who shared their skills in a way that resonated with me. In addition to developing my skill set, Learning Saint has helped me forge lifelong friendships with other students around the world.',
  },
  {
    id: 4,
    img: 'https://www.learningsaint.com/assets/images/testimonial/testimonial-04/client-04.png',
    // img: require("@/assets/image/testimonial/testimonial-04/client-04.png"),
    name: 'Patricia Anna',
    designation: 'Software Developer in Test at Motifworks',
    review:
      '“ The Selenium with Java course helped me to actively contribute to my current project. I was able to make a job switch in the Covid times with a hike of 150% which was all due to Learning Saint diligent training and support. Also, I have received another offer from a top product-based company with a hike of 100%. Thank you, Learning Saint team and trainers. ”',
  },
  {
    id: 5,
    img: 'https://www.learningsaint.com/assets/images/testimonial/testimonial-04/client-05.png',
    // img: require("@/assets/image/testimonial/testimonial-04/client-05.png"),
    name: 'Jhaniel Devora',
    designation: 'Junior Data Scientist',
    review:
      '"Im passionate about sustainability, and this universitys commitment to environmental research and activism aligns perfectly with my goals. Ive had incredible opportunities to make a difference."',
  },
];
