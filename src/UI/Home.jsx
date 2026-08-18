import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="mx-auto my-10">
      <h1 className="mb-8 text-xl font-semibold text-yellow-500">
        En iyi pizza.
        <br />
        <span className="text-yellow-500">Fırından çıkar çıkmaz, doğruca size.</span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
