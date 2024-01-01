{
    //
    //Union Types 

    // type FrontendDeveloper = 'FakibazzDeveloper' | 'JuniorDeveloper'
    // type FullStackDeveloper = 'FrontendDeveloper' | 'ExpertDeveloper'

    // type Developer = FrontendDeveloper | FullStackDeveloper;

    // const newDeveloper: FrontendDeveloper = 'JuniorDeveloper'

    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: "Male" | "Female";
    //     bloodGroup: 'O+' | "A+" | "AB+"
    // }

    // const user1: User = {
    //     name: 'persian',
    //     gender: 'Male',
    //     bloodGroup: 'A+'
    // }


    // Intersection

    type FrontendDeveloper = {
        skills: string[];
        Designation1: 'Frontend Developer'
    }

    type BackEndDeveloper = {
        skills: string[];
        Designation2: 'Backend Developer'
    }

    type FullStackDeveloper = FrontendDeveloper & BackEndDeveloper

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ['HTML', 'CSS', 'Express'],
        Designation1: 'Frontend Developer',
        Designation2: 'Backend Developer'
    }

    //
}