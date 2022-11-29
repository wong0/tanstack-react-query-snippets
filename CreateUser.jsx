import { useMutation } from "react-query";
import axios from "axios";
import { Redirect } from "react-router-dom";
import UserForm from "../components/UserForm";

const postUser = async (newUser) =>
  await (await axios.post("http://localhost:3004/users", newUser)).data;

function CreateUser() {
  const mutation = useMutation((newUser) => postUser(newUser));
  const { isLoading, isError, error, isSuccess } = mutation;

  const onSubmit = async (data) => {
    mutation.mutate(data);
  };
  
  if (isSuccess) {
    return <Redirect to="/" />;
  }
  
  return (
    <div>
      <h2>New User</h2>

      {isError && <div>An error occurred: {error.message}</div>}

      {isLoading && <div>Loading...</div>}

      <UserForm submitText="Create" submitAction={onSubmit} />
    </div>
  );
}
