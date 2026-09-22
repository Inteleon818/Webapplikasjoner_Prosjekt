import { PageLayout } from "@/components/PageLayout";

export function CreateUserPage() {
  return (
    <main>
      <PageLayout>
        <h1 className="text-center text-5xl">Create a user:</h1>
        <form className="flex items-center flex-col m-10 gap-2">
          <label>Username:
            <input className="border-2 border-solid" type="text" />
          </label>
          <label>Password:
            <input className="border-2 border-solid" type="text" />
          </label>
          <button className="w-fit border-2 border-solid p-1" type="submit">Submit</button>
        </form>
      </PageLayout>
    </main>
  );
}