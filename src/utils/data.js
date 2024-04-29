import engineer from "../assets/image/engineer.png";
import Entrance from "../assets/image/study3.png";
import looksewa from "../assets/image/lookswa.png";

export const courseName = [
  {
    id: 1,
    course: "प्रवेश प्रियोजना (Entrance Preparation)",
    image: Entrance,

    fields: [
      {
        id: 1,
        field: "Health Acescent(H.A)",
        path: "HA",
      },
      {
        id: 2,
        field: "Staff Nurse/Anomy",
        path: "staff-nurse",
      },
      {
        id: 3,
        field: "Diploma",
        path: "diploma",
      },
      {
        id: 4,
        field: " Science",
        path: "science",
      },
      {
        id: 5,
        field: "JTA",
        path: "jta",
      },
      {
        id: 6,
        field: "Veterinary",
        path: "veterinary",
      },
      {
        id: 7,
        field: "Accountant",
        path: "accountant",
      },
      {
        id: 8,
        field: "Computer",
        path: "computer",
      },
    ],
  },

  {
    id: 2,
    course: "लोक सेवा (Lok Sewa - Public Service)",
    image: looksewa,
    fields: [
      {
        id: 1,
        field: "Section Officer (सेक्शन अफिसर)",
        path: "section-officer",
      },
      {
        id: 2,
        field: "Nayab Subba (नायब सुब्बा) ",
        path: "nayab-subba",
      },
      {
        id: 3,
        field: "Kharidar (खरिदार)",
        path: "kharidar",
      },
      {
        id: 4,
        field: "Lekha (लेखा) ",
        path: "lekha",
      },
      {
        id: 5,
        field: " Assistant (सहायक)",
        path: "assistant",
      },
      {
        id: 6,
        field: "Sahayak Kharidar (सहायक खरिदार)  ",
        path: "sahayak-kharidar",
      },
      {
        id: 7,
        field: " Health Services (स्वास्थ्य सेवा) ",
        path: "health-services",
      },
      {
        id: 8,
        field: "Anchal Adhikrit (अंचल अधिकृत)",
        path: "anchal-adhikrit",
      },
      {
        id: 9,
        field: "Engineering Services (ईन्जिनियरिङ सेवा)",
        path: "engineering-services",
      },
      // {
      //   id: 10,
      //   field: "Non-Gazetted First Class (गैरसरकारी प्रथम श्रेणी) ",
      //   path: "Non-Gazetted First Class",
      // },
    ],
  },
  {
    id: 3,
    course: "सामान्य ज्ञान (GK - General Knowledge)",
    image: looksewa,
    fields: [
      {
        id: 1,
        field: "  Static GK",
        path: "Static-GK",
      },
      {
        id: 2,
        field: "History",
        path: "history",
      },
      {
        id: 3,
        field: " Geography",
        path: "geography",
      },
      {
        id: 4,
        field: "Polity",
        path: "polity",
      },
      {
        id: 5,
        field: " Economics",
        path: "economics",
      },
    ],
  },
  {
    id: 4,
    course: "इन्जिनियरिङ (Engineering):",
    image: engineer,
    fields: [
      {
        id: 1,
        field: "Civil Engineering",
        path: "civil-engineering",
      },
      {
        id: 2,
        field: "Electrical Engineering",
        path: "electrical-engineering",
      },
      {
        id: 3,
        field: "Mechanical Engineering",
        path: "mechanical-engineering",
      },
      {
        id: 4,
        field: "Electronics and Communication Engineering",
        path: "electronics&communication-engineering",
      },
    ],
  },
  {
    id: 5,
    course: "Licenses",
    image: looksewa,
    fields: [
      {
        id: 1,
        field: "Driving Licenses for vehicle",
        path: "driving-licenses",
      },
      {
        id: 2,
        field: "Health Acescent(H.A) Licenses",
        path: "HA-licenses",
      },
      {
        id: 3,
        field: "Engineering Licenses",
        path: "engineering-licenses",
      },
    ],
  },
  {
    id: 6,
    course: "सामान्य योग्यता (General Aptitude):",
    image: Entrance,
    fields: [
      {
        id: 1,
        field: " Aptitude",
        path: "aptitude",
      },
      {
        id: 2,
        field: "Reasoning",
        path: "reasoning",
      },
      {
        id: 3,
        field: " General Science",
        path: "general-science",
      },
      {
        id: 4,
        field: "English",
        path: "english",
      },
    ],
  },
  {
    id: 7,
    course: "कम्प्युटर (Computer)",
    image: Entrance,
    fields: [
      {
        id: 1,
        field: " Computer Fundamental",
        path: "computer-fundamental",
      },
      {
        id: 2,
        field: "Networking",
        path: "networking",
      },
      {
        id: 3,
        field: " Database Management System",
        path: "database-management-system",
      },
      {
        id: 4,
        field: " C Program",
        path: "c-program",
      },
    ],
  },
];

export const topicsName = {
  id: 1,
  course: "लोक सेवा (Lok Sewa - Public Service)",
  image: Entrance,
  fields: [
    {
      id: 1,
      field: " Surveying (सेक्शन अफिसर)",
      path: "surveying",
      questions: [
        {
          id: 1,
          question: "A check line in a chain surveying ?",
          option: [
            { que: "checks the accuracy of the framework ", name: "a" },
            {
              que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
              name: "b",
            },
            { que: "fixes up the directions of all other lines ", name: "c" },
            { que: "all of the above ", name: "d" },
          ],
          yourAnswer: "a",
          correctAnswer: "a",
        },
        {
          id: 2,
          question: "A plain scale is used to read?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "quell of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "c",
        },
        {
          id: 3,
          question:
            "The method of measuring distance by pacing is chiefly used in ?",
          option: [
            { que: "reconnaissance surveys ", name: "a" },
            {
              que: "preliminary surveys  ",
              name: "b",
            },
            { que: "location surveys ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "b",
        },
        {
          id: 4,
          question: "A plain scale used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
        {
          id: 5,
          question: "A plain used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "c",
          correctAnswer: "a",
        },
        {
          id: 6,
          question: "A plain scale is to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
      ],
    },
    {
      id: 2,
      field: "Building Materials (नायब सुब्बा) ",
      path: "building-materials",
      questions: [
        {
          id: 1,
          question: "A check line in a chain surveying ?",
          option: [
            { que: "checks the accuracy of the framework ", name: "a" },
            {
              que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
              name: "b",
            },
            { que: "fixes up the directions of all other lines ", name: "c" },
            { que: "all of the above ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 2,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "quell of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "c",
        },
        {
          id: 3,
          question:
            "The method of measuring distance by pacing is chiefly used in ?",
          option: [
            { que: "reconnaissance surveys ", name: "a" },
            {
              que: "preliminary surveys  ",
              name: "b",
            },
            { que: "location surveys ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "b",
        },
        {
          id: 4,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
        {
          id: 5,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 6,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
      ],
    },
    {
      id: 3,
      field: "Public Health Engineering",
      path: "public-health",
      questions: [
        {
          id: 1,
          question: "A check line in a chain surveying ?",
          option: [
            { que: "checks the accuracy of the framework ", name: "a" },
            {
              que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
              name: "b",
            },
            { que: "fixes up the directions of all other lines ", name: "c" },
            { que: "all of the above ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 2,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "quell of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "c",
        },
        {
          id: 3,
          question:
            "The method of measuring distance by pacing is chiefly used in ?",
          option: [
            { que: "reconnaissance surveys ", name: "a" },
            {
              que: "preliminary surveys  ",
              name: "b",
            },
            { que: "location surveys ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "b",
        },
        {
          id: 4,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
        {
          id: 5,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 6,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
      ],
    },
    {
      id: 4,
      field: " Railway Engineering ",
      path: "railway-engineering",
      questions: [
        {
          id: 1,
          question: "A check line in a chain surveying ?",
          option: [
            { que: "checks the accuracy of the framework ", name: "a" },
            {
              que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
              name: "b",
            },
            { que: "fixes up the directions of all other lines ", name: "c" },
            { que: "all of the above ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 2,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "quell of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "c",
        },
        {
          id: 3,
          question:
            "The method of measuring distance by pacing is chiefly used in ?",
          option: [
            { que: "reconnaissance surveys ", name: "a" },
            {
              que: "preliminary surveys  ",
              name: "b",
            },
            { que: "location surveys ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "b",
        },
        {
          id: 4,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
        {
          id: 5,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 6,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
      ],
    },
    {
      id: 5,
      field: " Building Construction",
      path: "building-construction",
      questions: [
        {
          id: 1,
          question: "A check line in a chain surveying ?",
          option: [
            { que: "checks the accuracy of the framework ", name: "a" },
            {
              que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
              name: "b",
            },
            { que: "fixes up the directions of all other lines ", name: "c" },
            { que: "all of the above ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 2,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "quell of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "c",
        },
        {
          id: 3,
          question:
            "The method of measuring distance by pacing is chiefly used in ?",
          option: [
            { que: "reconnaissance surveys ", name: "a" },
            {
              que: "preliminary surveys  ",
              name: "b",
            },
            { que: "location surveys ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "b",
        },
        {
          id: 4,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
        {
          id: 5,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 6,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
      ],
    },
    {
      id: 6,
      field: "Reinforced Cement Concrete Structures  ",
      path: "reinforced-cement-concrete",
      questions: [
        {
          id: 1,
          question: "A check line in a chain surveying ?",
          option: [
            { que: "checks the accuracy of the framework ", name: "a" },
            {
              que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
              name: "b",
            },
            { que: "fixes up the directions of all other lines ", name: "c" },
            { que: "all of the above ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 2,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "quell of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "c",
        },
        {
          id: 3,
          question:
            "The method of measuring distance by pacing is chiefly used in ?",
          option: [
            { que: "reconnaissance surveys ", name: "a" },
            {
              que: "preliminary surveys  ",
              name: "b",
            },
            { que: "location surveys ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "b",
        },
        {
          id: 4,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
        {
          id: 5,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 6,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
      ],
    },
    {
      id: 7,
      field: " Construction Management",
      path: "construction-management",
      questions: [
        {
          id: 1,
          question: "A check line in a chain surveying ?",
          option: [
            { que: "checks the accuracy of the framework ", name: "a" },
            {
              que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
              name: "b",
            },
            { que: "fixes up the directions of all other lines ", name: "c" },
            { que: "all of the above ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 2,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "quell of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "c",
        },
        {
          id: 3,
          question:
            "The method of measuring distance by pacing is chiefly used in ?",
          option: [
            { que: "reconnaissance surveys ", name: "a" },
            {
              que: "preliminary surveys  ",
              name: "b",
            },
            { que: "location surveys ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "b",
        },
        {
          id: 4,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
        {
          id: 5,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 6,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
      ],
    },
    {
      id: 8,
      field: "Hydraulic Machines",
      path: "hydraulic-machines",
      questions: [
        {
          id: 1,
          question: "A check line in a chain surveying ?",
          option: [
            { que: "checks the accuracy of the framework ", name: "a" },
            {
              que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
              name: "b",
            },
            { que: "fixes up the directions of all other lines ", name: "c" },
            { que: "all of the above ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 2,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "quell of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "c",
        },
        {
          id: 3,
          question:
            "The method of measuring distance by pacing is chiefly used in ?",
          option: [
            { que: "reconnaissance surveys ", name: "a" },
            {
              que: "preliminary surveys  ",
              name: "b",
            },
            { que: "location surveys ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "b",
        },
        {
          id: 4,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
        {
          id: 5,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 6,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
      ],
    },
    {
      id: 9,
      field: "Irrigation Engineering",
      path: "engineering-services",
      questions: [
        {
          id: 1,
          question: "A check line in a chain surveying ?",
          option: [
            { que: "checks the accuracy of the framework ", name: "a" },
            {
              que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
              name: "b",
            },
            { que: "fixes up the directions of all other lines ", name: "c" },
            { que: "all of the above ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 2,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "quell of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "c",
        },
        {
          id: 3,
          question:
            "The method of measuring distance by pacing is chiefly used in ?",
          option: [
            { que: "reconnaissance surveys ", name: "a" },
            {
              que: "preliminary surveys  ",
              name: "b",
            },
            { que: "location surveys ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "b",
        },
        {
          id: 4,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
        {
          id: 5,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "a",
        },
        {
          id: 6,
          question: "A plain scale is used to read ?",
          option: [
            { que: "one dimension", name: "a" },
            {
              que: "two dimensions  ",
              name: "b",
            },
            { que: "three dimensions  ", name: "c" },
            { que: "all of these ", name: "d" },
          ],
          yourAnswer: "",
          correctAnswer: "d",
        },
      ],
    },
  ],
};

export const employeeDetails = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "Ramrup Mahato",
    email: "ramrupmahato@gmail.com",
    phone: "9865347634",
    topicAssign: "Driving Licenses for vehicle",
    status: "pending",
  },
  {
    id: 2,
    image: "",
    name: "Ganesh Thakur ",
    email: "ganeshthakur@gmail.com",
    phone: "9865347634",
    topicAssign: "computer",
    status: "pending",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    name: "Pooja Kumari Singh ",
    email: "ganeshthakur@gmail.com",
    phone: "9865347634",
    topicAssign: "computer",
    status: "pending",
  },
];

export const faqDetails = [
  {
    id: 1,
    question: "QuizNET Objective?",
    answer:
      "QuizNET is useful for Students to Practice the MCQ Questions with Answers for Government Competitive exams Like UPSC, SSC, Banking, Railway and other Exams. Latest MCQ with Answers for NCERT Class 12, 11, 10, 9, Aptitude, Reasoning, English, General Knowledge, Computer, Engineering - Civil, Electrical, Mechanical, Electronics and Communication, ITI Mock Test. The Objective type Multiple Choice Questions over here will cover all important topics of all the middle and higher education.",
  },
  {
    id: 2,
    question: " What is the best strategy while answering MCQ Questions?",
    answer:
      "The best strategy to keep in mind while attempting MCQ Questions in Any exam is to try reading the question several times. Use the method of elimination and answer the question correctly.",
  },
];

export const dataReport = [
  {
    id: 1,
    userImage:
      "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
    username: "Rarthik thakur",
    userPhone: "98368467374",
    message: "this question is wrong the answer is B",
    question: {
      id: 1,
      field: " Surveying (सेक्शन अफिसर)",
      path: "surveying",
      questions: [
        {
          id: 1,
          question: "A check line in a chain surveying ?",
          option: [
            { que: "checks the accuracy of the framework ", name: "a" },
            {
              que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
              name: "b",
            },
            { que: "fixes up the directions of all other lines ", name: "c" },
            { que: "all of the above ", name: "d" },
          ],
          yourAnswer: "a",
          correctAnswer: "a",
        },
      ],
    },
    status: "pending",
    date: "15/04/2023",
    read: true,
  },
  {
    id: 2,
    userImage:
      "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
    username: "suraj thakur",
    userPhone: "98368467374",
    message: "this question is wrong the answer is B",
    question: {
      id: 1,
      field: " Surveying (सेक्शन अफिसर)",
      path: "surveying",
      questions: [
        {
          id: 1,
          question: "A check line in a chain surveying ?",
          option: [
            { que: "checks the accuracy of the framework ", name: "a" },
            {
              que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
              name: "b",
            },
            { que: "fixes up the directions of all other lines ", name: "c" },
            { que: "all of the above ", name: "d" },
          ],
          yourAnswer: "b",
          correctAnswer: "a",
        },
      ],
    },
    date: "13/07/2023",
    status: "resolve",
    read: true,
  },
  {
    id: 3,
    userImage:
      "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
    username: "anand thakur",
    userPhone: "98368467374",
    message: "this question is wrong the answer is B",
    date: "15/03/2023",
    question: {
      id: 1,
      field: " Surveying (सेक्शन अफिसर)",
      path: "surveying",
      questions: [
        {
          id: 1,
          question: "A check line in a chain surveying ?",
          option: [
            { que: "checks the accuracy of the framework ", name: "a" },
            {
              que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
              name: "b",
            },
            { que: "fixes up the directions of all other lines ", name: "c" },
            { que: "all of the above ", name: "d" },
          ],
          yourAnswer: "d",
          correctAnswer: "a",
        },
      ],
    },
    status: "pending",
    read: true,
  },
  {
    id: 4,
    userImage:
      "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
    username: "Rarthik thakur",
    userPhone: "98368467374",
    message: "this question is wrong the answer is B",
    question: {
      id: 1,
      field: " Surveying (सेक्शन अफिसर)",
      path: "surveying",
      questions: [
        {
          id: 1,
          question: "A check line in a chain surveying ?",
          option: [
            { que: "checks the accuracy of the framework ", name: "a" },
            {
              que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
              name: "b",
            },
            { que: "fixes up the directions of all other lines ", name: "c" },
            { que: "all of the above ", name: "d" },
          ],
          yourAnswer: "d",
          correctAnswer: "a",
        },
      ],
    },
    status: "reject",
    date: "15/04/2023",
    read: true,
  },
  {
    id: 5,
    userImage:
      "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
    username: "suraj thakur",
    userPhone: "98368467374",
    message: "this question is wrong the answer is B",
    question: {
      id: 1,
      field: " Surveying (सेक्शन अफिसर)",
      path: "surveying",
      questions: [
        {
          id: 1,
          question: "A check line in a chain surveying ?",
          option: [
            { que: "checks the accuracy of the framework ", name: "a" },
            {
              que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
              name: "b",
            },
            { que: "fixes up the directions of all other lines ", name: "c" },
            { que: "all of the above ", name: "d" },
          ],
          yourAnswer: "c",
          correctAnswer: "a",
        },
      ],
    },
    date: "13/07/2023",
    status: "resolve",
    read: true,
  },
  {
    id: 6,
    userImage:
      "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
    username: "anand thakur",
    userPhone: "98368467374",
    message: "this question is wrong the answer is B",
    date: "15/03/2023",
    question: {
      id: 1,
      field: " Surveying (सेक्शन अफिसर)",
      path: "surveying",
      questions: [
        {
          id: 1,
          question: "A check line in a chain surveying ?",
          option: [
            { que: "checks the accuracy of the framework ", name: "a" },
            {
              que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
              name: "b",
            },
            { que: "fixes up the directions of all other lines ", name: "c" },
            { que: "all of the above ", name: "d" },
          ],
          yourAnswer: "a",
          correctAnswer: "a",
        },
      ],
    },
    status: "pending",
    read: true,
  },
];

export const contactMessage = [
  {
    id: 1,
    name: "ramrup mahato",
    email: "ram@gmail.com",
    phone: "8749374839",
    message: "thid is ramrup and i am developer of quizNet.com  ",
    status: "read",
  },
  {
    id: 2,
    name: "Rahul mahato",
    email: "ram@gmail.com",
    phone: "8749374839",
    message: "thid is ramrup and i am developer of quizNet.com  ",
    status: "unread",
  },
  {
    id: 3,
    name: "anand mahato",
    email: "ram@gmail.com",
    phone: "8749374839",
    message: "thid is ramrup and i am developer of quizNet.com  ",
    status: "unread",
  },
  {
    id: 4,
    name: "Ganesh mahato",
    email: "ram@gmail.com",
    phone: "8749374839",
    message: "thid is ramrup and i am developer of quizNet.com  ",
    status: "unread",
  },
];

export const newCorseData = [
  {
    id: 1,
    course: "सामान्य योग्यता (General Aptitude):",
    image: Entrance,
    fields: [
      {
        id: 1,
        course: "लोक सेवा (Lok Sewa - Public Service)",
        image: engineer,
        path: "HA",
        fields: [
          {
            id: 1,
            field: " Surveying (सेक्शन अफिसर)",
            path: "surveying",
            questions: [
              {
                id: 1,
                question: "A check line in a chain surveying ?",
                option: [
                  { que: "checks the accuracy of the framework ", name: "a" },
                  {
                    que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
                    name: "b",
                  },
                  {
                    que: "fixes up the directions of all other lines ",
                    name: "c",
                  },
                  { que: "all of the above ", name: "d" },
                ],
                yourAnswer: "a",
                correctAnswer: "a",
              },
              {
                id: 2,
                question: "A check line in a chain surveying ?",
                option: [
                  { que: "checks the accuracy of the framework ", name: "a" },
                  {
                    que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
                    name: "b",
                  },
                  {
                    que: "fixes up the directions of all other lines ",
                    name: "c",
                  },
                  { que: "all of the above ", name: "d" },
                ],
                yourAnswer: "",
                correctAnswer: "b",
              },
            ],
          },
          {
            id: 1,
            field: " Engineering",
            path: "surveying",
            questions: [
              {
                id: 1,
                question: "A check line in a chain surveying ?",
                option: [
                  { que: "checks the accuracy of the framework ", name: "a" },
                  {
                    que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
                    name: "b",
                  },
                  {
                    que: "fixes up the directions of all other lines ",
                    name: "c",
                  },
                  { que: "all of the above ", name: "d" },
                ],
                yourAnswer: "a",
                correctAnswer: "a",
              },
              {
                id: 2,
                question: "A check line in a chain surveying ?",
                option: [
                  { que: "checks the accuracy of the framework ", name: "a" },
                  {
                    que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
                    name: "b",
                  },
                  {
                    que: "fixes up the directions of all other lines ",
                    name: "c",
                  },
                  { que: "all of the above ", name: "d" },
                ],
                yourAnswer: "",
                correctAnswer: "b",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        course: "(Lok Sewa - Public Service)",
        image: engineer,
        path: "staff-nurse",
        fields: [
          {
            id: 1,
            field: " Computer (सेक्शन अफिसर)",
            path: "Computer",
            questions: [
              {
                id: 1,
                question: "A check line in a chain surveying ?",
                option: [
                  { que: "checks the accuracy of the framework ", name: "a" },
                  {
                    que: "enables the surveyor to locate the interior details which are far away from the main chain lines ",
                    name: "b",
                  },
                  {
                    que: "fixes up the directions of all other lines ",
                    name: "c",
                  },
                  { que: "all of the above ", name: "d" },
                ],
                yourAnswer: "a",
                correctAnswer: "a",
              },
            ],
          },
        ],
      },
    ],
  },
];
