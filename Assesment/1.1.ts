{
  type FrontendDeveloper = {
    skills: string[];
    Designation1: "Frontend Developer";
  };

  type BackEndDeveloper = {
    skills: string[];
    Designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackEndDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "Express"],
    Designation1: "Frontend Developer",
    Designation2: "Backend Developer",
  };

  console.log(fullStackDeveloper);
}
