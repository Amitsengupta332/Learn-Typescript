{
    //Spread Operator
    //Rest Operator
    // Destructuring


    //Learn Spread Operator
    const bros1: string[] = ['mir', 'mizan', 'firoz']
    const bros2: string[] = ['tonmoy', 'akash', 'rahat']
    bros1.push(...bros2)

    const mentors1 = {
        typescript: 'mezba',
        redux: 'mir',
        dbms: 'Mizan'
    }

    const mentors2 = {
        prisma: 'firoz',
        next: 'Tonmoy',
        cloud: 'nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    //Rest Operator
    //friend1:string, friend2:string, friend3:string
    const greetfriends = (...friends: string[]) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend: string) => (`HI ${friend}`))
    }

    greetfriends('abul', 'babul', 'kabul')
}