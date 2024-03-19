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
          Answer: "a",
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
          Answer: "c",
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
          Answer: "b",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "c",
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
          Answer: "b",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "c",
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
          Answer: "b",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "c",
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
          Answer: "b",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "c",
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
          Answer: "b",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "c",
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
          Answer: "b",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "c",
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
          Answer: "b",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "c",
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
          Answer: "b",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "c",
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
          Answer: "b",
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
          Answer: "d",
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
          Answer: "a",
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
          Answer: "d",
        },
      ],
    },
  ],
};
