import { prismaClient } from "db/client";
export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

//the below is called Incremental Site Generation, we use it to fix some errors caused due to Next.js SSG in the monorepo deployment CI/CD Pipeline
//we need to do either of these if we are talking to the db in the build phase else no need

// export const revalidate = 60 // revalidate every 60 seconds
// or 
// export const dynamic = `force-dynamic`

//Note: any project which will talk to the db during the build phase 
