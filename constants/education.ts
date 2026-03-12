type schoolEntry = {
  id: number;
  schoolName: string;
  year: string;
};

type Education = {
  id: number;
  level: string;
  school: schoolEntry[];
};

export const EDUCATION: Education[] = [
  {
    id: 1,
    level: "Primary",
    school: [
      {
        id: 1,
        schoolName: "Lapu-Lapu City Central Elementary School",
        year: "2007-2013",
      },
    ],
  },
  {
    id: 2,
    level: "Secondary",
    school: [
      { id: 1, schoolName: "Poblacion Night High School", year: "2013-2017" },
      { id: 2, schoolName: "Asian Learning Center", year: "2017-2019" },
    ],
  },
  {
    id: 3,
    level: "Tertiary",
    school: [
      { id: 1, schoolName: "Cordova Public College", year: "2023-Present" },
    ],
  },
];
